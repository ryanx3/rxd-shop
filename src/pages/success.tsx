import Stripe from "stripe";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

import { ImageContainer, SuccessContainer } from "../styles/pages/success";
import { GetServerSideProps } from "next";
import { stripe } from "@/lib/stripe";

export interface SuccessProps {
  customerName: string;
  quantity: number;

  product: {
    name: string;
    imageUrl: string;
    category: string;
  };
}

export default function Success({
  customerName,
  quantity,
  product,
}: SuccessProps) {
  return (
    <>
      <Head>
        <title>Compra efetuada | RxD Shop</title>
        <meta name="robots" content="noindex" />
      </Head>

      <SuccessContainer>
        <ImageContainer>
          <div>
            <Image src={product.imageUrl} width={120} height={110} alt="" />
          </div>
          <div>
            <Image src={product.imageUrl} width={120} height={110} alt="" />
          </div>
          <div>
            <Image src={product.imageUrl} width={120} height={110} alt="" />
          </div>
        </ImageContainer>
        <h1>Compra efetuada!</h1>

        <p>
          Uhuul <strong>{customerName}</strong>, a sua compra de {quantity}{" "}
          {product.category} já está a caminho da sua casa.
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
  const product = session.line_items?.data[0].price!.product as Stripe.Product;
  const quantity = session.line_items?.data[0].quantity;

  return {
    props: {
      customerName,
      quantity,
      product: {
        name: product.name,
        imageUrl: product.images[0],
        category: product.metadata.category,
      },
    },
  };
};
