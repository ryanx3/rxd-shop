import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from "@/styles/pages/product";
import { useRouter } from "next/router";

export default function Product() {
  const { query } = useRouter();

  return (
    <ProductContainer>
      <ImageContainer></ImageContainer>
      <ProductDetails>
        <h1>Camiseta X</h1>
        <span>79,99</span>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate,
          sit! Provident, ipsam eligendi error officiis velit quisquam culpa
          repellendus! Dolorem, laboriosam impedit magni obcaecati quas hic
          earum qui sunt labore.
        </p>

        <button>Comprar agora</button>
      </ProductDetails>
    </ProductContainer>
  );
}
