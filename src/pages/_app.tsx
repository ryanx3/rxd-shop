import { globalStyles } from "@/styles/global";
import { AppProps } from "next/app";
import { CartButton } from "@/styles/pages/app";
import { ShoppingBag } from "lucide-react";
import LogoImg from "../assets/logo.svg";
import Image from "next/image";

import { Container, Header } from "@/styles/pages/app";
import Link from "next/link";

globalStyles();

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Link href={"/"}>
        <Image src={LogoImg} alt="Logo RxD" />
        </Link>
        <CartButton variant="gray">
          <ShoppingBag size={24} />
          <span className="badge">1</span>
        </CartButton>
      </Header>
      <Component {...pageProps} />
    </Container>
  );
}
