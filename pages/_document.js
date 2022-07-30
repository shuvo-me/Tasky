import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head />
      <body className=" bg-slate-50 dark:bg-gray-800 transition-all duration-200 ease-linear">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
