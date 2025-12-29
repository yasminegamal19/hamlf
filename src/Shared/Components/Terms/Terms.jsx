import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import './Terms.modules.css';

const Terms = () => {
    const {t} = useTranslation();
  return (
    <div className="terms py-5" id='terms'>
      <div className="container">
        <div className='text-center mb-3'><h2>{t("navbar.terms.title")}</h2></div>
        <div>
          <h3>{t("navbar.terms.subtitle")}</h3>
          <p>{t("navbar.terms.intro")}</p>
        </div>
        <div className="terms-item">
          <h4>{t("navbar.terms.access_title")}</h4>
          <p>{t("navbar.terms.access_text")}</p>
        </div>
        <div className="terms-item">
          <h4>{t("navbar.terms.services_title")}</h4>
          <p>{t("navbar.terms.services_text")}</p>
        </div>
        <div className="terms-item">
          <h4>{t("navbar.terms.intellectual_title")}</h4>
          <p>{t("navbar.terms.intellectual_text")}</p>
        </div>
        <div className="terms-item">
          <h4>{t("navbar.terms.user_title")}</h4>
          <p>{t("navbar.terms.user_text")}</p>
        </div>
        <div className="terms-item">
          <h4>{t("navbar.terms.liability_title")}</h4>
          <p>{t("navbar.terms.liability_text")}</p>
        </div>
        <div className="terms-item">
          <h4>{t("navbar.terms.law_title")}</h4>
          <p>{t("navbar.terms.law_text")}</p>
        </div>
      </div>
    </div>
  );
};

export default memo(Terms);