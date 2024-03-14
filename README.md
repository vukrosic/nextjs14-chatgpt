This is code for the following tutorial:

[![ChatGPT Clone](https://youtu.be/_Aeu7BcMoeY?si=f4c4QoosSys86sOV))
![ChatGPT Clone](https://i.ytimg.com/vi/_Aeu7BcMoeY/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLBENGf8oDCq4nwdPXo0AFVaAy1DMQ)

If you want to run this I recommend following the tutorial. If not, just solve errors one by one. You will need to setup Clerk, Convex and other things. Don't forget to add your variables to convex website as well. Here is example .env.local file:

(FAKE DATA EXAMPLE)

```env
# Deployment used by `npx convex dev`
CONVEX_DEPLOYMENT=dev:rapid-oblivion-315 # team: vukrosic, project: nextjs14-chatgpt

NEXT_PUBLIC_CONVEX_URL=https://rapid-oblivion-315.convex.cloud

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_d2VsbC1nZWxkaW5nLTcsdfsdfFDFLmFjY291bnRzLmRldiQ
CLERK_SECRET_KEY=sk_test_D5Z9tsdhNyFDSsfuS1MCdNL9Wd4kqsW

OPENAI_API_KEY=sk-sHsrpLrJG5uUVQ1sdfFFfdgfFkFJPIpue2lgn5nFn4IPmJK7

NEXT_PUBLIC_HOSTING_URL=http://localhost:3000

STRIPE_SUBSCRIPTION_PRICE_ID=price_1OdfghZnOTK3DdfgGmHsjUI
NEXT_STRIPE_PUBLISHABLE_KEY=pk_test_51MBmbKKEQZnOTK3DEXb7dfgdfg4kf4dFc5Ck9XL9VlVBXd0p0S6JGRQmnwIb0fG4tOVNuu6D5gZGN67Aqa38Mccv00QeSPG5rN
NEXT_STRIPE_SECRET_KEY=sk_test_5asdfdfFmbKKEQZnOTK3dfghdfghBldLb2aPXfdgdfgDWCka6JezH1dRHDJS5sOKr0VlsW3pWVo8DX4emhT8002KxkxVKj
STRIPE_WEBHOOK_SECRET=whsec_7KDSVasdfFFaKRyBJkxUDJFteqqpFpQfK
```





# Next JS documentation below

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
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
