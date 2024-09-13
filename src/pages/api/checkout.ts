import { stripe } from "@/lib/stripe";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const priceId = "price_1PxbDWFghDF6WigyY3l88tz6";

  const successUrl = `${process.env.NEXT_URL}/sucess`
  const cancelUrl = `${process.env.NEXT_URL}/`

  const checkoutSession = await stripe.checkout.sessions.create({
    success_url: successUrl,
    cancel_url: cancelUrl,
    mode: "payment",
    line_items: [{ price: priceId, quantity: 1 }],
  });

  return res.status(201).json({
    checkoutUrl: checkoutSession.url
  })
}
