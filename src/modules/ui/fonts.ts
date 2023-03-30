import { Cormorant_Garamond, Poppins } from "@next/font/google";
import localFont from "@next/font/local";

// Font files can be colocated inside of `pages`
export const clashDisplay = localFont({
  src: "./fonts/ClashDisplay-Variable.woff2",
});
export const cormorant = Cormorant_Garamond({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
});

export const poppins = Poppins({
  weight: ["200", "400"],
  subsets: ["latin"],
});
