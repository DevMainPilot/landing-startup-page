This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

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

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


# Docker

## Create and run a local image docker

```bash

docker build -t image-ui .

docker run -p 3000:3000 image-ui

```



# Deploy Next.js to Google Cloud Run

This is a Next.js template which can be deployed to [Google Cloud Run](https://cloud.google.com/run/docs).

## Deploying to Google Cloud Run

This template can be used to deploy your Next.js application as a Docker container.

1. Install the [Google Cloud SDK](https://cloud.google.com/sdk/docs/install) so you can use `gcloud` on the command line.
1. Run `gcloud auth login` to log in to your account.
1. [Create a new project](https://cloud.google.com/run/docs/quickstarts/build-and-deploy) in Google Cloud Run (e.g. `nextjs-docker`). Ensure billing is turned on.
1. Deploy to Cloud Run: `gcloud run deploy helloworld --source=. --project=PROJECT-ID --region=us-central1 --allow-unauthenticated`.

   - You must replace `PROJECT-ID` with your Google Cloud Project ID.
   - You may replace `us-central1` with a different Google Cloud [region](https://cloud.google.com/run/docs/locations).

Example: gcloud run deploy kabots-page --source=. --project=kabots-page --region=europe-west1 --allow-unauthenticated

For more information, see the Next.js [deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying#self-hosting).
