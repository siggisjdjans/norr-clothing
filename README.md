# Norr Clothing

A modern, business-ready e-commerce storefront for **Norr Clothing** — a
Scandinavian-inspired essentials brand. Built with **Next.js 16 (App Router)**,
**TypeScript**, **Tailwind CSS v4**, and **Stripe Checkout**, styled with a
clean, Lovable-style aesthetic (soft gradient blobs, glassmorphism, rounded
cards).

## Features

- Lovable-style landing page with animated gradient blobs and a marquee
- Product catalog (8 products) with category filtering
- Product detail pages with color/size selection
- Persistent cart (localStorage) with quantity controls
- Stripe Checkout (hosted payment page) with shipping options
- Stripe webhook endpoint for order fulfillment
- Responsive, mobile-first design
- Render + Docker deployment config

## Tech stack

| Layer     | Choice                          |
| --------- | ------------------------------- |
| Framework | Next.js 16 (App Router)         |
| Language  | TypeScript                      |
| Styling   | Tailwind CSS v4                 |
| Payments  | Stripe Checkout                 |
| Deploy    | Render (native Node or Docker)  |

## Getting started

```bash
npm install
cp .env.example .env
# fill in your Stripe keys in .env
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment variables

Copy `.env.example` to `.env` and fill in:

| Variable                 | Required | Description                                   |
| ------------------------ | -------- | --------------------------------------------- |
| `STRIPE_SECRET_KEY`      | ✅       | Stripe secret key (starts with `sk_`)         |
| `STRIPE_WEBHOOK_SECRET`  | ⚠️       | For webhook verification (starts with `whsec_`) |
| `NEXT_PUBLIC_SITE_URL`   | ✅       | Your site URL (production or localhost)       |

> This project uses **Stripe Checkout**, so no publishable key is required.

## Stripe setup

1. Create a [Stripe account](https://dashboard.stripe.com/register).
2. Grab your **secret key** from *Developers → API keys* and put it in `.env`.
3. (Optional) For webhooks, install the [Stripe CLI](https://stripe.com/docs/stripe-cli)
   and forward events locally:
   ```bash
   stripe listen --forward-to localhost:3000/api/webhook
   ```
   Copy the printed `whsec_...` into `STRIPE_WEBHOOK_SECRET`.
4. Test with Stripe's [test cards](https://stripe.com/docs/testing) (e.g.
   `4242 4242 4242 4242`).

## Deploy to Render

**Option A — Blueprint (recommended).** Push this repo to GitHub, then in
Render go to *New → Blueprint* and select the repo. `render.yaml` will create
the service automatically. Add your Stripe keys under *Environment*.

**Option B — Manual.** Create a new **Web Service**, connect the repo, and set:

- Build command: `npm ci && npm run build`
- Start command: `npm start`
- Environment variables: `STRIPE_SECRET_KEY`, `STRIPE_WEBHOOK_SECRET`,
  `NEXT_PUBLIC_SITE_URL` (set to your `*.onrender.com` URL)

**Docker.** A multi-stage `Dockerfile` is included (standalone output).

### Configure the production webhook

After deploying, in Stripe create a webhook endpoint pointing to
`https://YOUR-APP.onrender.com/api/webhook` and subscribe to
`checkout.session.completed`. Put the signing secret in
`STRIPE_WEBHOOK_SECRET`.

## Project structure

```
src/
  app/
    page.tsx            # Home / landing
    shop/               # Product grid + category filter
    product/[slug]/     # Product detail
    cart/               # Cart + Stripe checkout
    success/            # Order confirmation
    about/  contact/
    api/checkout/       # Creates Stripe Checkout session
    api/webhook/        # Stripe webhook handler
  components/           # Navbar, Footer, ProductCard, etc.
  lib/                  # products, stripe client, cart context
```

## Next steps

- Replace the gradient/emoji product placeholders with real product photography
  (drop images in `public/` and update `src/lib/products.ts`).
- Wire the contact form to an email provider (Resend, SendGrid) or a
  `/api/contact` route.
- Add a database (e.g. Postgres + Prisma) to persist orders from the webhook.
- Add an admin dashboard for inventory and order management.
- Configure a custom domain and email (e.g. `hello@norrclothing.com`).
