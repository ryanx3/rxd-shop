import { useRouter } from "next/router";
import { stripe } from "@/lib/stripe";

import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
  SpinnerIcon,
} from "@/styles/pages/product";

import Stripe from "stripe";
import Image from "next/image";
import Head from "next/head";

import { GetStaticPaths, GetStaticProps } from "next";
import { useCart } from "@/context/CartContext";

export interface ProductProps {
  product: {
    id: string;
    name: string;
    imageUrl: string;
    price: string;
    description: string;
    defaultPriceId: string;
  };
}

export default function Product({ product }: ProductProps) {
  const { isFallback } = useRouter();

  const { addToCart } = useCart();

  if (isFallback) {
    return (
      <div>
        <SpinnerIcon />
      </div>
    );
  }

  async function handleAddToCart() {
    try {
      addToCart({
        id: product.id,
        name: product.name,
        imageUrl: product.imageUrl,
        price: product.price,
        defaultPriceId: product.defaultPriceId,
      });
    } catch (error) {
      alert("Falha ao adicionar produto na sacola.");
    }
  }
 
  return (
    <>
      <Head>
        <title>{product.name} | RxD Shop</title>
      </Head>

      <ProductContainer>
        <ImageContainer>
          <Image
            src={product.imageUrl}
            width={520}
            height={480}
            alt={`Imagem do produto ${product.name}`}
          />
        </ImageContainer>
        <ProductDetails>
          <h1>{product.name}</h1>
          <span>{product.price}</span>

          <p>{product.description}</p>

          <button onClick={handleAddToCart}>Colocar na sacola</button>
        </ProductDetails>
      </ProductContainer>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (!params || !params.id) {
    return {
      notFound: true,
    };
  }
  const productId = String(params.id);

  const product = await stripe.products.retrieve(productId, {
    expand: ["default_price"],
  });
  const price = product.default_price as Stripe.Price;

  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
        description: product.description,
        price: new Intl.NumberFormat("pt-PT", {
          style: "currency",
          currency: "EUR",
        }).format(price.unit_amount! / 100),
        defaultPriceId: price.id,
      },
    },
    revalidate: 60 * 60 + 1,
  };
};
