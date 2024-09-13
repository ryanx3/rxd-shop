import Link from "next/link";
import { ImageContainer, SuccessContainer } from "../styles/pages/success";

export default function Success() {
  return (
    <SuccessContainer>
        <h1>Compra efetuada</h1>

        <ImageContainer></ImageContainer>

        <p>
          Uhuul <strong>Ryan Martins</strong>, sua{" "}
          <strong>T-shirt | Aboard</strong> já está a caminho da sua casa.
        </p>

        <Link href="/">Voltar ao catálogo</Link>
      </SuccessContainer>
  );
}
