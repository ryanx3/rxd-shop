import Stripe from "stripe";
import Image from "next/image";
import Head from "next/head";
import "keen-slider/keen-slider.min.css";
import { ShoppingBag } from "lucide-react";
import { stripe } from "@/lib/stripe";
import { useKeenSlider } from "keen-slider/react";
import { GetStaticProps } from "next";
import { HomeContainer, Product } from "@/styles/pages/home";
import { CartButton } from "@/styles/pages/app";
import { useCart } from "@/context/CartContext";

interface HomeProps {
  products: {
    id: string;
    name: string;
    imageUrl: string;
    price: string;
  }[];
}

export default function Home({ products }: HomeProps) {
  const { addToCart } = useCart();

  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    },
    loop: true,
  });

  return (
    <>
      <Head>
        <title>Home | Rxd Shop</title>
      </Head>

      <HomeContainer ref={sliderRef} className="keen-slider">
        {products.map((product) => {
          return (
            <Product
              key={product.id}
              href={`/product/${product.id}`}
              className="keen-slider__slide"
              prefetch={false}
            >
              <Image src={product.imageUrl} width={520} height={480} alt="" />

              <footer>
                <div>
                  <strong>{product.name}</strong>
                  <span>{product.price}</span>
                </div>
                <CartButton onClick={() => addToCart(product)} variant="purple">
                  <ShoppingBag />
                </CartButton>
              </footer>
            </Product>
          );
        })}
      </HomeContainer>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ["data.default_price"],
  });

  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price;

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: new Intl.NumberFormat("pt-PT", {
        style: "currency",
        currency: "EUR",
      }).format(price.unit_amount! / 100),
    };
  });

  return {
    props: {
      products,
    },
    revalidate: 60 * 60 * 2,
  };
};
