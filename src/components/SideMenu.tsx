import { useCart } from "@/context/CartContext";
import {
  CartContent,
  CartFooter,
  CartItem,
  EmptyCartContainer,
  SideMenuContainer,
} from "@/styles/components/SideMenu";
import axios from "axios";
import { ShoppingCart, X } from "lucide-react";
import Image from "next/image";

interface SideMenuProps {
  open: boolean;
  onClose: () => void;
}

export default function SideMenu({ open, onClose }: SideMenuProps) {
  const { products, removeFromCart } = useCart();

  async function handleBuyButton() {
    try {
      const lineItems = products.map((product) => ({
        priceId: product.defaultPriceId,
      }));

      const response = await axios.post("/api/checkout", {
        lineItems,
      });
      const { checkoutUrl } = response.data;
      window.location.href = checkoutUrl;
    } catch (error) {
      console.error(error);
      alert("Falha ao redirecionar ao checkout.");
    }
  }

  const totalPrice = products.reduce(
    (total, { price }) =>
      total + parseFloat(price.replace("€", "").replace(",", ".")),
    0
  );

  return (
    <SideMenuContainer open={open}>
      <header>
        <h2>Sacola de compras</h2>
        <button>
          <X size={24} onClick={onClose} />
        </button>
      </header>

      <CartContent>
        {products.length === 0 ? (
          <EmptyCartContainer>
            <ShoppingCart size={64} />
            <p>Seu carrinho está vazio</p>
          </EmptyCartContainer>
        ) : (
          products.map((product) => (
            <CartItem key={product.id}>
              <Image
                src={product.imageUrl}
                alt={product.name}
                width={94}
                height={94}
              />

              <div>
                <span>{product.name}</span>
                <strong>{product.price}</strong>
                <button onClick={() => removeFromCart(product.id)}>
                  Remover
                </button>
              </div>
            </CartItem>
          ))
        )}
      </CartContent>

      {products.length > 0 && (
        <CartFooter>
          <div>
            <span>Quantidade</span>
            <span>{products.length} item(s)</span>{" "}
          </div>
          <div>
            <strong>Valor total</strong>
            <strong>
              {new Intl.NumberFormat("pt-PT", {
                style: "currency",
                currency: "EUR",
              }).format(totalPrice)}
            </strong>{" "}
          </div>
          <button onClick={handleBuyButton}>Finalizar compra</button>
        </CartFooter>
      )}
    </SideMenuContainer>
  );
}
