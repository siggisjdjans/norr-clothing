# NORR

A white, typographic collection preview built with Next.js, TypeScript, and Tailwind CSS. The current catalog contains unconfirmed clothing concepts, not verified inventory.

## Current behavior

- Home, collection, category filters, and individual concept pages.
- Product imagery is explicitly labeled as unavailable; no generated product photographs.
- No testimonials, sales badges, origin story, material claims, discounts, or shipping promises.
- No mailing-list signup, contact form, invented support email, or placeholder social links.
- No cart or purchase controls. POST /api/checkout returns 503, including direct calls.
- /success only reports payment received after server-side Stripe verification. It does not claim an email was sent or an order shipped.
- The existing Stripe webhook verifies signatures and logs events. It does not store or fulfill orders or send email.

## Development

Run `npm ci`, then `npm run dev`. Use the local URL printed by Next.js while the process is running. `npm run lint` and `npm run build` validate the project.

Render uses the build and start commands in `render.yaml`; pushes to the connected branch are configured to deploy automatically.

## Before accepting orders

Obtain owner-confirmed product data, prices, sizes, photographs, inventory, shipping terms, and customer contact details. Implement and verify order recording and fulfillment before restoring purchase controls or the checkout endpoint. Do not present draft data as confirmed.

Existing Stripe integration uses `STRIPE_SECRET_KEY` and `STRIPE_WEBHOOK_SECRET` for verification of earlier payments and webhook signatures. Keep all credentials in the hosting environment; do not commit them.
