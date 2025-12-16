import { memo } from 'react';
import './Footer.modules.css';
import { Link } from 'react-router-dom';

const Footer = () => {
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
                <h5 className="my-4">مؤسسة حسن عبد المنعم محامون و مستشارون</h5>
                <p>نصون حقوقك بثقة واحترافية.</p>
              </div>
              <div className="col-xl-3 col-12">
                <h5 className="pb-3">الروابط</h5>
                <ul>
                  <li>
                    <a href="#about-us">من نحن</a>
                  </li>
                  <li>
                    <a href="#services">خدماتنا</a>
                  </li>
                  <li>
                    <a href="#pleadings">المرافعات</a>
                  </li>
                  <li>
                    <a href="#questions">الاسئلة الشائعة</a>
                  </li>
                  <li>
                    <a href="#contact-us">تواصل معنا </a>
                  </li>{" "}
                </ul>
              </div>
              <div className="col-xl-3 col-12 ">
                <h5 className="pb-3">تابعنا</h5>
                <ul>
                  <li>
                    <a href="">
                    <i class="bi bi-facebook ms-2"></i> فيس بوك
                    </a>
                  </li>
                  <li>
                    <a href="">
                    <i class="bi bi-linkedin ms-2"></i> لينكد ان
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-xl-3 col-12 text-white">
                <div>
                  <h5 className="text-uppercase">العنوان والتواصل</h5>

                  <div className="text">
                    <h6 className="mb-0">العنوان</h6>
                    <a href='#' className='d-flex'>
                      <i class="bi bi-geo-alt ms-3 mb-5"></i>
                      <span>
                        48 شارع قصر النيل - ميدان مصطفى كامل , عابدين, محافظة
                        القاهرة
                      </span>
                    </a>
                  </div>
                </div>
                <div>
                  <h5 className="text-uppercase">التواصل</h5>
                  <span className='d-block'>
                    <a href='#'>
                      <i class="bi bi-telephone ms-3"></i>
                        <span>01208555806</span>
                    </a>
                  </span>
                  <span>
                    <a href='#'>
                      <i class="bi bi-whatsapp ms-3"></i>
                        <span>01208555806</span>
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