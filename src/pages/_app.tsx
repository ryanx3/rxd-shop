import { globalStyles } from "@/styles/global";
import { AppProps } from "next/app";
import LogoImg from "../assets/logo.svg";
import { Container, Header } from "@/styles/pages/app";
import Image from "next/image";

globalStyles();

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Image src={LogoImg} alt="Logo do cabeçalho" />
      </Header>
      <Component {...pageProps} />
    </Container>
  );
}
