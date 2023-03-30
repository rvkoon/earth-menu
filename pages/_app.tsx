import type { AppProps } from "next/app";
import { queryClient } from "src/api";
import { NextIntlProvider } from "next-intl";
import { QueryClientProvider } from "react-query";
import "../src/modules/ui/globalStyles.scss";
import { cormorant, clashDisplay } from "../src/modules/ui/fonts";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <NextIntlProvider messages={pageProps.messages}>
          <div className={`${clashDisplay.className}`}>
            <Component {...pageProps} />
          </div>
        </NextIntlProvider>
      </QueryClientProvider>
    </>
  );
}
