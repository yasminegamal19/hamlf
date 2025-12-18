import { memo } from "react";
import "./AboutRoutes.modules.css";
import MainTitle from "../MainTitle/MainTitle";
import "../Services/Services.modules.css";
import { useTranslation } from "react-i18next";

const Tasks = () => {
  const {t, i18n} = useTranslation();
  const align = i18n.language === "ar" ? "right" : "left";
  return (
    <>
      <div className="tasks py-5">
        <div className="container">
          <div className="mb-4" id="mission">
            <MainTitle title={t("tasks.mission.title")} align={align} />
            <h5>{t("tasks.mission.text")}</h5>
          </div>
          <div className="mb-4" id="vision">
            <MainTitle title={t("tasks.vision.title")} align={align} />
            <h5>{t("tasks.vision.text1")}</h5>
            <h5>{t("tasks.vision.text2")}</h5>
          </div>
          <div className="mb-4" id="future-aspirations">
            <MainTitle title={t("tasks.future.title")} align={align} />
            <h5>
             {t("tasks.future.text")}
            </h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(Tasks);
