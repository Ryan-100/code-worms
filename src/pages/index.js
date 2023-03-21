import Head from "next/head";
import { Inter } from "@next/font/google";
import Home from "@/components/LV3/Home/Home";

const inter = Inter({ subsets: ["latin"] });

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Code Worms</title>
        <meta name="description" content="job portal" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.svg" />
      </Head>

      <main className="max-w-screen min-h-screen">
        <Home />
      </main>
    </>
  );
}
