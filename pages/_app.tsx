import type { AppProps } from "next/app";
import { queryClient } from "src/api";
import { NextIntlProvider } from "next-intl";
import { QueryClientProvider } from "react-query";
import "../src/modules/ui/globalStyles.scss";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <NextIntlProvider messages={pageProps.messages}>
          <Component {...pageProps} />
        </NextIntlProvider>
      </QueryClientProvider>
    </>
  );
}
