import { globalStyles } from "@/styles/global";
import { AppProps } from "next/app";
import { CartButton, Header, Container } from "@/styles/pages/app";
import { ShoppingBag } from "lucide-react";
import LogoImg from "../assets/logo.svg";
import Image from "next/image";
import Link from "next/link";
import SideMenu from "@/components/SideMenu";
import { useState } from "react";
import { CartProvider } from "@/context/CartContext";

globalStyles();

export default function MyApp({ Component, pageProps }: AppProps) {
  const [isCartOpen, setIsCartOpen] = useState(false);

  
  return (
    <CartProvider>
      <Container>
        <Header>
          <Link href={"/"}>
            <Image src={LogoImg} alt="Logo RxD" />
          </Link>
          <CartButton onClick={() => setIsCartOpen(!isCartOpen)} variant="gray">
            <ShoppingBag size={24} />
            <span className="badge">1</span>
          </CartButton>
        </Header>

        <SideMenu open={isCartOpen} onClose={() => setIsCartOpen(false)} />

        <Component {...pageProps} />
      </Container>
    </CartProvider>
  );
}
