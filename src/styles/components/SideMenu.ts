import { styled } from "@stitches/react";

export const SideMenuContainer = styled("aside", {
  position: "fixed",
  zIndex: 1000,

  top: 0,
  right: 0,

  width: "30%",
  maxWidth: "480px",
  height: "100vh",

  backgroundColor: "$gray800",
  boxShadow: "-5px 0 5px rgba(0,0,0,0.5)",
  transform: "translateX(100%)",
  transition: "transform 0.3s ease-in-out",

  padding: "3rem",
  display: "flex",
  flexDirection: "column",

  variants: {
    open: {
      true: {
        transform: "translateX(0)",
      },
    },
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "2rem",

    h2: {
      fontSize: "$xl",
      color: "$gray100",
    },

    button: {
      background: "transparent",
      border: "none",
      color: "$gray100",
      cursor: "pointer",
      transition: "all 0.2s ease-in-out",

      "&:hover": {
        svg: {
          scale: 1.1,
        },
      },
    },
  },
});

export const CartContent = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  overflowY: "auto",
});

export const CartItem = styled("div", {
  display: "flex",
  gap: "1rem",
  color: "$gray100",

  img: {
    background: "linear-gradient(180deg, #7465d4 0%, #1ea483 100%)",
    borderRadius: "8px",
  },

  div: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",

    strong: {
      fontSize: "$md",
    },

    span: {
      fontSize: "$md",
      color: "$gray100",
    },

    button: {
      background: "transparent",
      border: "none",
      color: "$purple500",
      fontSize: "1rem",
      cursor: "pointer",
      marginTop: "0.25rem",
      fontWeight: "bold",
      alignSelf: "start",
      transition: "all 0.1s ease-in-out",

      "&:hover": {
        color: "$purple300",
      },
    },
  },
});

export const CartFooter = styled("footer", {
  marginTop: "auto",

  div: {
    display: "flex",
    justifyContent: "space-between",
    margin: "1rem 0",

    span: {
      color: "$gray300",
    },

    strong: {
      color: "$gray100",
    },
  },

  button: {
    width: "100%",
    padding: "1.25rem 0",
    backgroundColor: "$purple500",
    border: "none",
    borderRadius: "8px",
    color: "$gray100",
    cursor: "pointer",
    fontSize: "$md",
    fontWeight: "bold",
    marginTop: "2rem",
    transition: "all 0.1s ease-in-out",

    "&:hover": {
      backgroundColor: "$purple300",
    },
  },
});

export const EmptyCartContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
  color: "$purple500",

  svg: {
    marginBottom: "1rem",
  },

  p: {
    fontSize: "$lg",
    color: "$gray100",
    textAlign: "center",
  },
});
