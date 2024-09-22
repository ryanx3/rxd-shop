import { globalStyles } from "@/styles/global";
import { AppProps } from "next/app";
import { Container } from "@/styles/pages/app";
import SideMenu from "@/components/SideMenu";
import { useState } from "react";
import { CartProvider } from "@/context/CartContext";
import Header from "@/components/Header";

globalStyles();

export default function MyApp({ Component, pageProps }: AppProps) {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <CartProvider>
      <Container>
        <Header onToggleCart={() => setIsCartOpen((prev) => !prev)} />
        <SideMenu open={isCartOpen} onClose={() => setIsCartOpen(false)} />
        <Component {...pageProps} />
      </Container>
    </CartProvider>
  );
}
