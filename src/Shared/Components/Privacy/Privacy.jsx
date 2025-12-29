import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import './Privacy.modules.css'

const Privacy = () => {
    const {t} = useTranslation();
  return (
    <div className="privacy py-5" id='privacy'>
      <div className="container">
        <div className="text-center">
          <h2>{t("navbar.privacy.title")}</h2>
        </div>
        <div>
          <h3>{t("navbar.privacy.subtitle")}</h3>
          <p>{t("navbar.privacy.intro")}</p>
        </div>
        <div className="privacy-item">
          <h4>{t("navbar.privacy.collection_title")}</h4>
          <p>{t("navbar.privacy.collection_text")}</p>
        </div>
        <div className="privacy-item">
          <h4>{t("navbar.privacy.usage_title")}</h4>
          <p>{t("navbar.privacy.usage_text")}</p>
        </div>
        <div className="privacy-item">
          <h4>{t("navbar.privacy.protection_title")}</h4>
          <p>{t("navbar.privacy.protection_text")}</p>
        </div>
        <div className="privacy-item">
          <h4>{t("navbar.privacy.sharing_title")}</h4>
          <p>{t("navbar.privacy.sharing_text")}</p>
        </div>
        <div className="privacy-item">
          <h4>{t("navbar.privacy.rights_title")}</h4>
          <p>{t("navbar.privacy.rights_text")}</p>
        </div>
        <div className="privacy-item">
          <h4>{t("navbar.privacy.updates_title")}</h4>
          <p>{t("navbar.privacy.updates_text")}</p>
        </div>
      </div>
    </div>
  );
};

export default memo(Privacy);