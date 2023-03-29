import { useTranslations } from "next-intl";

export interface IHomeProps {}

export function Home({}: IHomeProps): JSX.Element {
  const t = useTranslations("home");

  return (
    <div className="flex p-4">
      <div className="w-[400px] text-center m-auto flex flex-col gap-2">
        <h1 className="font-bold text-[24px]">{t("pageTitle")}</h1>
        <p>{t("pageDescription")}</p>
      </div>
    </div>
  );
}
