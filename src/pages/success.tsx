import Stripe from "stripe";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

import { ImageContainer, SuccessContainer } from "../styles/pages/success";
import { GetServerSideProps } from "next";
import { stripe } from "@/lib/stripe";

export interface Product {
  name: string;
  imageUrl: string;
  category: string;
}

export interface SuccessProps {
  customerName: string;
  totalQuantity: number;
  category: string;
  products: Product[];
}

export default function Success({
  customerName,
  totalQuantity,
  category,
  products,
}: SuccessProps) {
  return (
    <>
      <Head>
        <title>Compra efetuada | RxD Shop</title>
        <meta name="robots" content="noindex" />
      </Head>

      <SuccessContainer>
        <ImageContainer>
          {products.map((product, i) => (
            <div key={i}>
              <Image
                src={product.imageUrl}
                width={120}
                height={110}
                alt={product.name}
              />
            </div>
          ))}
        </ImageContainer>
        <h1>Compra efetuada!</h1>

        <p>
          Uhuul <strong>{customerName}</strong>, a sua compra de {totalQuantity}{" "}
          {category} já está a caminho da sua casa.
        </p>

        <Link href="/">Voltar ao catálogo</Link>
      </SuccessContainer>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  if (!query.session_id) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  const sessionId = String(query.session_id);
  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ["line_items", "line_items.data.price.product"],
  });

  const customerName = session.customer_details?.name;

  const products =
    session.line_items?.data.map((item) => {
      const product = item.price?.product as Stripe.Product;

      return {
        name: product.name,
        imageUrl: product.images[0],
        category: product.metadata.category,
      };
    }) || [];

  const totalQuantity =
    session.line_items?.data.reduce((sum, item) => sum + item.quantity!, 0) ||
    0;

  const category = products.length > 0 ? products[0].category : "";

  return {
    props: {
      customerName,
      totalQuantity,
      category,
      products,
    },
  };
};
