import { CartButton } from "@/styles/pages/app";
import { ShoppingBag } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/context/CartContext";
import LogoImg from "../assets/logo.svg";
import { HeaderContainer } from "@/styles/components/Header";

interface HeaderProps {
  onToggleCart: () => void; 
}

export default function Header({ onToggleCart }: HeaderProps) {
  const { products } = useCart();
  const totalQuantity = products?.length ?? 0;

  return (
    <HeaderContainer>
      <Link href={"/"}>
        <Image src={LogoImg} alt="Logo RxD" />
      </Link>
      <CartButton onClick={onToggleCart} variant="gray">
        <ShoppingBag size={24} />
        <span className="badge">{totalQuantity}</span>
      </CartButton>
    </HeaderContainer>
  );
}
