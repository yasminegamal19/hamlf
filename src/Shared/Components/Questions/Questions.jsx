import { memo } from "react";
import { useTranslation } from "react-i18next";
import MainTitle from "../MainTitle/MainTitle";
import "./Questions.modules.css";

const Questions = () => {
  const { t } = useTranslation();
  const faqs = t("questions.faqs", { returnObjects: true });

  return (
    <div className="questions py-5" id="questions">
      <div className="container">
        <MainTitle title={t("questions.title")} />

        <div className="accordion" id="accordionExample">
          {faqs.map((faq, index) => (
            <div className="accordion-item" key={index}>
              <h3 className="accordion-header">
                <button
                  className={`accordion-button ${
                    index !== 0 ? "collapsed" : ""
                  }`}
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#collapse${index + 1}`}
                  aria-expanded={index === 0 ? "true" : "false"}
                  aria-controls={`collapse${index + 1}`}
                >
                  {faq.question}
                </button>
              </h3>
              <div
                id={`collapse${index + 1}`}
                className={`accordion-collapse collapse ${
                  index === 0 ? "show" : ""
                }`}
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">{faq.answer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default memo(Questions);
