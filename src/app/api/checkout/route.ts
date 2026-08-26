import { NextResponse } from "next/server";
import type Stripe from "stripe";
import { getStripe, SITE_URL } from "@/lib/stripe";
import { getProductById } from "@/lib/products";

type CheckoutItem = {
  productId: string;
  size: string;
  color: string;
  quantity: number;
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as { items: CheckoutItem[] };
    const items = Array.isArray(body.items) ? body.items : [];

    if (items.length === 0) {
      return NextResponse.json(
        { error: "Your cart is empty." },
        { status: 400 }
      );
    }

    const lineItems = items
      .map((item) => {
        const product = getProductById(item.productId);
        if (!product) return null;
        return {
          quantity: item.quantity,
          price_data: {
            currency: "usd",
            unit_amount: Math.round(product.price * 100),
            product_data: {
              name: product.name,
              description: `${product.category} · Size ${item.size} · ${item.color}`,
              metadata: { productId: product.id },
            },
          },
        };
      })
      .filter(Boolean) as Stripe.Checkout.SessionCreateParams.LineItem[];

    if (lineItems.length === 0) {
      return NextResponse.json(
        { error: "No valid items to checkout." },
        { status: 400 }
      );
    }

    const stripe = getStripe();
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: lineItems,
      shipping_address_collection: { allowed_countries: ["US", "CA", "GB", "DE", "FR", "SE", "NO", "DK", "FI", "NL", "AU", "NZ"] },
      shipping_options: [
        {
          shipping_rate_data: {
            type: "fixed_amount",
            fixed_amount: { amount: 0, currency: "usd" },
            display_name: "Free shipping",
            delivery_estimate: {
              minimum: { unit: "business_day", value: 5 },
              maximum: { unit: "business_day", value: 9 },
            },
          },
        },
        {
          shipping_rate_data: {
            type: "fixed_amount",
            fixed_amount: { amount: 1500, currency: "usd" },
            display_name: "Express",
            delivery_estimate: {
              minimum: { unit: "business_day", value: 1 },
              maximum: { unit: "business_day", value: 3 },
            },
          },
        },
      ],
      success_url: `${SITE_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${SITE_URL}/cart`,
      metadata: { source: "norr-clothing" },
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Checkout error:", error);
    return NextResponse.json(
      { error: "Unable to start checkout. Please try again." },
      { status: 500 }
    );
  }
}
