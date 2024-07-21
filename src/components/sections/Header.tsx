import { useContext } from "react";
import Switch from "react-switch";
import clsx from "clsx";
import { useTranslation } from "react-i18next";
import { Icon } from "@iconify/react";
import { TypeAnimation } from "react-type-animation";
import { ThemeContext, ThemeContextInterface } from "@/contexts";

const Header = () => {
  const { darkTheme, toggleTheme } = useContext(
    ThemeContext,
  ) as ThemeContextInterface;

  const { t, i18n } = useTranslation();

  return (
    <>
      <header className="h-[650px] w-[100%] bg-lightBlue dark:bg-darkBlue">
        <div className="flex h-full flex-col items-center justify-center gap-5">
          <div>
            <Icon
              className="text-dark dark:text-white"
              icon="la:laptop-code"
              style={{
                height: "100%",
                fontSize: 150,
              }}
            />
          </div>

          <h1 className="text-4xl font-bold text-dark dark:text-white">
            {t("basic_info.name")}
          </h1>

          <TypeAnimation
            sequence={t("basic_info.titles", { returnObjects: true }).flatMap(
              (title: string) => [title, 1000],
            )}
            wrapper="span"
            speed={50}
            className="text-regular text-2xl text-dark dark:text-white"
            repeat={Infinity}
          />
          <Switch
            checked={darkTheme}
            onChange={toggleTheme}
            offColor="#17153B"
            onColor="#3572EF"
            className="react-switch mx-auto"
            width={90}
            height={40}
            uncheckedIcon={
              <Icon
                className="ml-5 h-full text-end text-[25px] text-gray-dark"
                icon="noto-v1:first-quarter-moon-face"
              />
            }
            checkedIcon={
              <Icon
                className="ml-5 h-full text-end text-[25px] text-gray-dark"
                icon="noto-v1:sun-with-face"
              />
            }
          />
        </div>
      </header>

      <div className="flex justify-center gap-5 bg-yellow pb-3 pt-3 dark:bg-grayDark">
        <Icon
          className={clsx(
            "cursor-pointer text-[50px] text-gray-dark",
            i18n.language === "en" && "brightness-50",
          )}
          icon="twemoji-flag-for-flag-united-states"
          onClick={() => i18n.changeLanguage("en")}
        />
        <Icon
          className={clsx(
            "cursor-pointer text-[50px] text-gray-dark",
            i18n.language === "es" && "brightness-50",
          )}
          icon="twemoji-flag-for-spain"
          onClick={() => i18n.changeLanguage("es")}
        />
      </div>
    </>
  );
};

export default Header;
