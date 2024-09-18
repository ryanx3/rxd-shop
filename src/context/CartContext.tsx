import { createContext, ReactNode, useContext, useState } from "react";

export interface ProductProps {
  id: string;
  name: string;
  imageUrl: string;
  price: string;
  defaultPriceId?: string;
}

interface CartContextProps {
  products: ProductProps[];
  addToCart: (product: ProductProps) => void;
  removeFromCart: (product_id: ProductProps["id"]) => void;
}

const CartContext = createContext({} as CartContextProps);

interface CartProviderProps {
  children: ReactNode;
}

export function CartProvider({ children }: CartProviderProps) {
  const [products, setProducts] = useState<ProductProps[]>([]);

  const addToCart = (product: ProductProps) => {
    setProducts((prevProducts) => {
      const isProductInCart = prevProducts.some(
        (product) => product.id === product.id
      );

      if (isProductInCart) {
        alert("Esse produto já está na sua sacola.");
        return prevProducts;
      }

      return [...prevProducts, product];
    });
  };

  const removeFromCart = (product_id: string) => {
    setProducts((prevProducts) =>
      prevProducts.filter((product) => product.id !== product_id)
    );
  };

  return (
    <CartContext.Provider value={{ products, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart deve ser usado dentro de um CartProvider");
  }
  return context;
}
