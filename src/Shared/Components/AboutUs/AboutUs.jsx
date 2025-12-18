import { memo, useTransition } from 'react';
import './AboutUs.modules.css';
import MainTitle from '../MainTitle/MainTitle';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const AboutUs = ({title}) => {
 
  const { t } = useTranslation();
  return (
    <>
      <div className="about-us py-5 px-3" id="about-us">
        <div className="container">
          <MainTitle title={`${t("about_Us.title")}`} />
          <div className="row mt-5">
            <div className="col-xl-7 col-12 d-flex justify-content-center">
              <img src="/about_main.webp" alt="" />
            </div>
            <div className="col-xl-5 col-12">
              <div className="content">
                <h6>{t("about_Us.paragraph1")}</h6>
                <h6>{t("about_Us.paragraph2")}</h6>
                <h6>{t("about_Us.paragraph3")}</h6>
                <Link className="btn" to="/about-routes">
                  {t("about_Us.read_More")}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(AboutUs);