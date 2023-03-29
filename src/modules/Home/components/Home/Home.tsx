import { useTranslations } from "next-intl";
import Spline from "@splinetool/react-spline";
import { useRef, useState } from "react";
import { poppins } from "@Ui";

export interface IHomeProps {}

export function Home({}: IHomeProps): JSX.Element {
  const [selectedCountry, setSelectedcountry] = useState<string | null>(null);

  const t = useTranslations("home");

  function onMouseUp(e: any) {
    setSelectedcountry(e.target.name);
  }

  return (
    <div className=" min-w-screen min-h-screen max-h-screen max-w-screen bg-[#000]">
      <div className="flex p-4">
        <div className="w-full md:w-[60vw] text-center m-auto flex flex-col gap-2">
          <p className="!font-light text-[80px]">Un Monde de Saveurs</p>
          {selectedCountry && (
            <div className="p-4 rounded-xl bg-[#101010]">
              <p className="!font-light text-[36px] mb-2">
                <span>{t(`${selectedCountry}.countryRecipe`)}</span>
              </p>
              <p className={`!font-light text-[16px] ${poppins.className}`}>
                {t(`${selectedCountry}.recipeDescription`)}
              </p>
            </div>
          )}
        </div>
      </div>
      <Spline
        scene="https://prod.spline.design/zgLjcF24AFksARr7/scene.splinecode"
        onMouseUp={onMouseUp}
        className="min-w-[100vw] min-h-[100vh] fixed bottom-[-46%]"
      />
    </div>
  );
}
