import { useTranslations } from "next-intl";
import Spline from "@splinetool/react-spline";
import { useRef, useState } from "react";
import { poppins, clashDisplay } from "@Ui";
import cx from "classnames";
import { Map } from "react-feather";

export interface IHomeProps {}

export function Home({}: IHomeProps): JSX.Element {
  const [selectedCountry, setSelectedcountry] = useState<string | null>(null);
  const [shouldDisplayMenu, setShouldDisplayMenu] = useState(false);
  const [shouldDisplayHints, setShouldDisplayHints] = useState(false);
  const [isLoadingPage, setIsLoadingPage] = useState(true);

  const t = useTranslations("home");

  function onMouseUp(e: any) {
    setShouldDisplayMenu(true);
    setSelectedcountry(e.target.name);
  }

  function closeMenu() {
    setShouldDisplayMenu(false);
  }

  function displayHints() {
    setShouldDisplayHints(true);
  }

  function closeHints() {
    setShouldDisplayHints(false);
  }

  return (
    <div className=" min-w-screen min-h-screen md:max-h-screen max-w-screen bg-[#210e55] overflow-hidden noiseBg">
      <div className="flex p-2 !min-h-screen">
        {isLoadingPage && (
          <p className="m-auto block text-[50px] animate-pulse">
            Chargement...
          </p>
        )}
        {!isLoadingPage && (
          <>
            <div className="w-full mx-auto flex flex-col gap-2">
              <p
                className={cx(
                  "!font-black text-[80px] text-center md:text-left leading-[60px] md:text-[20vh] md:leading-[16vh] mb-2 fixed top-2 left-0 md:relative md:top-0",
                  clashDisplay.className
                )}
              >
                Délices
                <br />
                autour du
                <br />
                Monde
              </p>
              {selectedCountry && shouldDisplayMenu && (
                <div className="md:w-[40%] p-4 rounded-xl glass relative z-[100]">
                  <p className="!font-black text-[36px] leading-[36px] mb-2">
                    <span>{t(`${selectedCountry}.countryRecipe`)}</span>
                  </p>
                  <p className={`!font-light text-[16px] ${poppins.className}`}>
                    {t(`${selectedCountry}.recipeDescription`)}
                  </p>
                  <br />
                  <p
                    onClick={closeMenu}
                    className="cursor-pointer bg-[#FFF] bg-opacity-40 p-2 rounded-md text-center"
                  >
                    {t("helpClose")}
                  </p>
                </div>
              )}
            </div>
            <div className="bg-[#111] rounded-xl p-4 block w-content fixed bottom-[2vw] right-[2vw] md:w-fit max-w-[96vw] md:max-w-[20vw] z-[100]">
              {shouldDisplayHints && (
                <>
                  <p className="font-black text-[24px]">{t("helpTitle")}</p>
                  <p className={`!font-light ${poppins.className}`}>
                    {t("helpDescription")}
                  </p>
                  <br />
                  <p
                    onClick={closeHints}
                    className="cursor-pointer bg-[#222] p-2 rounded-md text-center"
                  >
                    {t("helpClose")}
                  </p>
                </>
              )}
              {!shouldDisplayHints && (
                <Map onClick={displayHints} className="cursor-pointer" />
              )}
            </div>
          </>
        )}
      </div>
      <Spline
        scene="https://draft.spline.design/Y-Q9YF7QwRPqmzkc/scene.splinecode"
        onMouseUp={onMouseUp}
        onStart={() => setIsLoadingPage(false)}
        className="min-w-[100vw] min-h-[40vh] md:min-h-[100vh] md:right-[-20%] fixed bottom-0 z-50"
      />
    </div>
  );
}
