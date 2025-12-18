import { memo } from "react";
import { useTranslation } from "react-i18next";
import MainTitle from "../MainTitle/MainTitle";
import "../Services/Services.modules.css";

const Departments = () => {
  const { t, i18n } = useTranslation();
  const align = i18n.language === "ar" ? "right" : "left";
  const departments = t("departments.items", { returnObjects: true });

  return (
    <div className="departments py-5" id="our-services">
      <div className="container">
        <MainTitle title={t("departments.title")} />

        {departments.map((dept, index) => (
          <div className="mb-5" key={index}>
            <h3>{dept.title}</h3>
            {dept.descriptions.map((desc, i) => (
              <h5 key={i}>{desc}</h5>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default memo(Departments);
