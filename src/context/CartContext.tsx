import { createContext, ReactNode, useContext, useState } from "react";

export interface ProductProps {
  id: string;
  name: string;
  imageUrl: string;
  price: string;
}

interface CartContextProps {
  products: ProductProps[];
  addToCart: (product: ProductProps) => void;
  removeFromCart: (product_id: ProductProps["id"]) => void;
  clearCart: () => void;
}

const CartContext = createContext({} as CartContextProps);

interface CartProviderProps {
  children: ReactNode;
}

export function CartProvider({ children }: CartProviderProps) {
  const [products, setProducts] = useState<ProductProps[]>([]);

  const addToCart = (product: ProductProps) => {
    setProducts((prevProducts) => [...prevProducts, product]);
  };

const removeFromCart = (product_id: string) => {
  setProducts((prevProducts) => {
    const indexToRemove = prevProducts.findIndex((product) => product.id === product_id);
    if (indexToRemove === -1) return prevProducts;
    return prevProducts.filter((_, index) => index !== indexToRemove);
  })};

  const clearCart = () => {
    setProducts([]);
  };

  return (
    <CartContext.Provider
      value={{ products, addToCart, removeFromCart, clearCart }}
    >
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
