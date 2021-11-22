import Head from "next/head";

export default function AppHead({ children }: { children?: React.ReactNode }) {
  return (
    <Head>
      <title>With Iron Session + Twilio</title>
      <link rel="icon" href="/favicon.ico" />
      {children}
    </Head>
  );
}
