import "@/app/ui/global.css";
import { inter } from "@/app/ui/fonts";
import { Analytics } from "@vercel/analytics/next";
import { Metadata } from "next";
import Head from "next/head";

export const metadata: Metadata = {
  title: {
    template: "%s | Dashboard",
    default: "Dashboard",
  },
  description: "Dasboard created with Next.js, using app routers.",
  metadataBase: new URL("https://nextjs-dashboard.plamen.site/"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      <body className={`${inter.className} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
