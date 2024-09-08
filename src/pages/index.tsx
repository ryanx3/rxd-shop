import { styled } from "@/styles";

const Button = styled("button", {
  backgroundColor: "$red",
  borderRadius: 4,
  border: 0,
  padding: "4px 8px",
  cursor: "pointer",

  span: {
    fontWeight: "bold",
    marginRight: "20px",
  },

  "&:hover": {
    filter: "brightness(0.8)",
  },
});

export default function Home() {
  return (
    <Button>
      <span>Teste</span>
      Enviar
    </Button>
  );
}
