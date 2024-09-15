import { styled } from "..";

export const Container = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "100vh",
});

export const Header = styled("header", {
  padding: "2rem 0",
  width: "100%",
  maxWidth: 1180,
  margin: "0 auto",
  display: "flex",
  justifyContent: "space-between",

  svg: {
    color: "$gray300",
  },
});

export const CartButton = styled("button", {
  padding: "1rem",
  borderRadius: "6px",
  cursor: "pointer",
  border: "none",

  variants: {
    variant: {
      purple: {
        backgroundColor: "$purple500",
      },
      gray: {
        backgroundColor: "$gray800",
      },
    },
  },
  
  defaultVariants: {
    variant: "gray",
  },
  
  
  svg: {
    color: "$gray100",
  },
  
  transition: "all 0.1s ease-in-out",
  
  "&:hover": {
    opacity: 0.8,
  },
});
