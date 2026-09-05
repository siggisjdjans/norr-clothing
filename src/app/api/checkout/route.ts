import { NextResponse } from "next/server";

// Block direct API calls as well as the storefront until products, pricing,
// shipping, customer support, and fulfillment have been confirmed.
export async function POST() {
  return NextResponse.json(
    { error: "Orders are not open. This collection is a preview." },
    { status: 503 }
  );
}
