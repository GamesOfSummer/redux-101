Visit NPR - they have a Redux store
Visit my portfolio website - show a smaller store

# Why use Redux?

Global Store - everything and anything can access it, ie, a database for your frontend
Avoid props drilling

You are going to get asked about it in your React interviews

# Warning - Redux has a ton of moving parts

It's complicated. It's okay to feel overwhelmed. Even I don't know everything.

# Start with Next.js install

```
npx create-next-app
```

Craete React App is too simple these days - you want to use something more powerful out of the box.

Defaults are fine. Comes with Typescript right out of the box, which is superrr nice! And a .gitignore.

# make a shopping cart

after all, a shopping cart is _probably_ going to be needed to be 'seen' everywhere, so it's a great first case.

# make two store fronts in Next.JS

As simple as possible, no stress

# What goes in the Redux store?

Everything? NO.

Use context API for small needs. Even some props drilling is okay.

Devs can complain about Redux when the store gets too big - so be mindful of that.

=================================

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
