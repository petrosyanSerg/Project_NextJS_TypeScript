import { ReactNode } from "react";
import Head from "next/head";

interface MetaLayoutProps {
  children: ReactNode;
  title: string;
}

export default function MetaLayout({ children, title }: MetaLayoutProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      {children}
    </>
  );
}
