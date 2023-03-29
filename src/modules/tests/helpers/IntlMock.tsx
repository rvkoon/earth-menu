import { NextIntlProvider } from "next-intl";
import { createElement, ReactElement } from "react";

interface IIntlMockProps {
  children: React.ReactNode;
}

export function IntlMock({ children }: IIntlMockProps): ReactElement {
  const useRouter = jest.spyOn(require("next/router"), "useRouter");
  const locale = "en";
  const messages = require(`../../../../public/messages/${locale}.json`);

  useRouter.mockImplementationOnce(() => ({
    query: { locale: locale },
  }));

  jest.mock("next-intl", () => ({
    useTranslations: () => ({
      t: (str?: string) => str,
      i18n: {
        changeLanguage: () =>
          new Promise((resolve) => {
            resolve(true);
          }),
      },
    }),
  }));

  // eslint-disable-next-line react/no-children-prop
  return createElement(NextIntlProvider, {
    messages,
    locale,
    children,
  });
}
