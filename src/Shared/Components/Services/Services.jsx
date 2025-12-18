import { memo } from 'react';
import MainTitle from '../MainTitle/MainTitle';
import './Services.modules.css';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Services = ({title}) => {
  const {t} = useTranslation();
  return (
    <>
      <div className="services py-5 px-3" id="services">
        <div className="container">
          <MainTitle title={t("services.title")} />
          <div className="row">
            <div className="col-xl-6 .col-12 mt-4">
              <h3>{t("services.legal_services_title")}</h3>
              <h5>{t("services.legal_services_desc")}</h5>
              <ul>
                {t("services.legal_services_list", { returnObjects: true }).map(
                  (item, index) => (
                    <li key={index}>{item}</li>
                  )
                )}
              </ul>
            </div>
            <div className="col-xl-6 col-12 d-flex justify-content-center">
              <img src="/services_main.webp" alt="" />
            </div>
          </div>
          <div className="button text-center">
            <Link className="btn" to="/about-routes#our-services">{t("services.read_more")}</Link>
          </div>
          <div className="row">
            <div className="col-12 mb-3">
              <h3 id="join-legal-training">
                {t("services.legal_training_title")}
              </h3>
              <h5>{t("services.legal_training_desc")}</h5>
            </div>
            <div className="col-12 mb-3">
              <h3 id="legal-publications">
                {t("services.legal_publications_title")}
              </h3>
              <h5>{t("services.legal_publications_desc")}</h5>
            </div>
            <div className="col-12 mb-3">
              <h3 id="find-employee">{t("services.find_employee_title")}</h3>
              <h5>{t("services.find_employee_desc")}</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(Services);