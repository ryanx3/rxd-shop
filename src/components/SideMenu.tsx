import {
  CartContent,
  CartFooter,
  CartItem,
  SideMenuContainer,
} from "@/styles/components/SideMenu";
import { X } from "lucide-react";
import Image from "next/image";

interface SideMenuProps {
  open: boolean;
  onClose: () => void;
}

export default function SideMenu({ open, onClose }: SideMenuProps) {
  return (
    <SideMenuContainer open={open}>
      <header>
        <h2>Sacola de compras</h2>
        <button>
          <X size={24} onClick={onClose} />
        </button>
      </header>

      <CartContent>
        <CartItem>
          <Image
            src="/static-img.png"
            alt="T-Shirt One"
            width={94}
            height={94}
          />
          
          <div>
            <span>Tshirt | Space lab</span>
            <strong>R$ 79,90</strong>
            <button>Remover</button>
          </div>
        </CartItem>
        <CartItem>
          <Image
            src="/static-img.png"
            alt="T-Shirt One"
            width={94}
            height={94}
          />

          <div>
            <span>Tshirt | Space lab</span>
            <strong>R$ 79,90</strong>
            <button>Remover</button>
          </div>
        </CartItem>
        <CartItem>
          <Image
            src="/static-img.png"
            alt="T-Shirt One"
            width={94}
            height={94}
          />

          <div>
            <span>Tshirt | Space lab</span>
            <strong>R$ 79,90</strong>
            <button>Remover</button>
          </div>
        </CartItem>
        <CartItem>
          <Image
            src="/static-img.png"
            alt="T-Shirt One"
            width={94}
            height={94}
          />

          <div>
            <span>Tshirt | Space lab</span>
            <strong>R$ 79,90</strong>
            <button>Remover</button>
          </div>
        </CartItem>
        <CartItem>
          <Image
            src="/static-img.png"
            alt="T-Shirt One"
            width={94}
            height={94}
          />

          <div>
            <span>Tshirt | Space lab</span>
            <strong>R$ 79,90</strong>
            <button>Remover</button>
          </div>
        </CartItem>
        <CartItem>
          <Image
            src="/static-img.png"
            alt="T-Shirt One"
            width={94}
            height={94}
          />

          <div>
            <span>Tshirt | Space lab</span>
            <strong>R$ 79,90</strong>
            <button>Remover</button>
          </div>
        </CartItem>
      </CartContent>

      <CartFooter>
        <div>
          <span>Quantidade</span>
          <span>3 itens</span>
        </div>
        <div>
          <strong>Valor total</strong>
          <strong>R$ 270,00</strong>
        </div>
        <button>Finalizar compra</button>
      </CartFooter>
    </SideMenuContainer>
  );
}
