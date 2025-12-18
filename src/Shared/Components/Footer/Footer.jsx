import { memo } from 'react';
import './Footer.modules.css';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Footer = () => {

  const {t} = useTranslation();
  return (
    <>
      <div className="footer py-5">
        <div className="container">
          <div className="content p-5">
            <div className="row">
              <div className="col-xl-3 col-12 text-center">
                <div className="img">
                  <img src="/liy9gxhve4epfmfyrvwp.webp" alt="" />
                </div>
                <h5 className="my-4">{t("footer.company_name")}</h5>
                <p>{t("footer.slogan")}</p>
              </div>
              <div className="col-xl-3 col-12">
                <h5 className="pb-3">{t("footer.links.title")}</h5>
                <ul>
                  <li>
                    <a href="#about-us"> {t("footer.links.about")}</a>
                  </li>
                  <li>
                    <a href="#services">{t("footer.links.services")}</a>
                  </li>
                  <li>
                    <a href="#pleadings">{t("footer.links.pleadings")}</a>
                  </li>
                  <li>
                    <a href="#questions"> {t("footer.links.faq")}</a>
                  </li>
                  <li>
                    <a href="#contact-us"> {t("footer.links.contact")} </a>
                  </li>{" "}
                </ul>
              </div>
              <div className="col-xl-3 col-12 ">
                <h5 className="pb-3">{t("footer.social.title")}</h5>
                <ul>
                  <li>
                    <a href="">
                      <i class="bi bi-facebook ms-2"></i>{" "}
                      {t("footer.social.facebook")}
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <i class="bi bi-linkedin ms-2"></i>{" "}
                      {t("footer.social.linkedin")}
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-xl-3 col-12 text-white">
                <div>
                  <h5 className="text-uppercase">
                    {t("footer.address_contact.title")}
                  </h5>

                  <div className="text">
                    <h6 className="mb-0">
                      {t("footer.address_contact.address_label")}
                    </h6>
                    <a href="#" className="d-flex">
                      <i class="bi bi-geo-alt ms-3 mb-5"></i>
                      <span>{t("footer.address_contact.address")}</span>
                    </a>
                  </div>
                </div>
                <div>
                  <h5 className="text-uppercase">
                    {t("footer.contact.title")}
                  </h5>
                  <span className="d-block">
                    <a href="#">
                      <i class="bi bi-telephone ms-3"></i>
                      <span>{t("footer.contact.phone")}</span>
                    </a>
                  </span>
                  <span>
                    <a href="#">
                      <i class="bi bi-whatsapp ms-3"></i>
                      <span>{t("footer.contact.whatsapp")}</span>
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(Footer);