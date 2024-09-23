import { styled } from "..";

export const SuccessContainer = styled("main", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  margin: "0 auto",
  height: 656,

  h1: {
    fontSize: "$2xl",
    color: "$gray100",
  },

  p: {
    fontSize: "$xl",
    color: "$gray300",
    maxWidth: 560,
    textAlign: "center",
    marginTop: "2rem",
    lineHeight: 1.4,
  },

  a: {
    display: "block",
    marginTop: "5rem",
    fontSize: "$lg",
    color: "$purple500",
    textDecoration: "none",
    fontWeight: "bold",

    "&:hover": {
      color: "$purple300",
    },
  },
});

export const ImageContainer = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  width: "100%",
  maxWidth: 145,
  height: 145,
  marginBottom: "2rem",

  div: {
    display: "flex",
    padding: "0.25rem",
    background: "linear-gradient(180deg, #1ea483 0%, #7465d4 100%)",
    borderRadius: "50%",
    border: "1px solid $gray900",

    marginLeft: "-2.5rem",

    boxShadow: "0 10px 15px rgba(0, 0, 0, 0.3), 0 4px 6px rgba(0, 0, 0, 0.2)",
  },

  img: {
    objectFit: "cover",
  },
});
