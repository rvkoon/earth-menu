import { Home } from "@Home";
import type { GetStaticPropsContext } from "next";

export default Home;

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`public/messages/${locale}.json`)).default,
    },
  };
}
