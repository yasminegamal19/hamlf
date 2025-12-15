import { memo } from 'react';
import './Footer.modules.css';

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
                <h6>نصون حقوقك بثقة واحترافية.</h6>
              </div>
              <div className="col-xl-3 col-12">
                <h5 className="pb-3">الروابط</h5>
                <ul>
                  <li>
                    <a>من نحن</a>
                  </li>
                  <li>
                    <a>خدماتنا</a>
                  </li>
                  <li>
                    <a>المرافعات</a>
                  </li>
                  <li>
                    <a>الاسئلة الشائعة</a>
                  </li>
                  <li>
                    <a>الاسئلة الشائعة</a>
                  </li>{" "}
                </ul>
              </div>
              <div className="col-xl-3 col-12 ">
                <h5 className="pb-3">تابعنا</h5>
                <ul>
                  <li>
                    {" "}
                    <i class="bi bi-facebook ms-2"></i> فيس بوك
                  </li>
                  <li>
                    {" "}
                    <i class="bi bi-linkedin ms-2"></i> لينكد ان
                  </li>
                </ul>
              </div>
              <div className="col-xl-3 col-12 text-white">
                <div>
                  <h5 className="text-uppercase">العنوان والتواصل</h5>

                  <div className="text">
                    <h6 className="mb-0">العنوان</h6>
                    <div className="location d-flex mb-5">
                      <i class="bi bi-geo-alt"></i>
                      <span>
                        48 شارع قصر النيل - ميدان مصطفى كامل , عابدين, محافظة
                        القاهرة
                      </span>
                    </div>
                  </div>
                </div>
                <div>
                  <h5 className="text-uppercase">التواصل</h5>
                  <span>
                    <div className="location d-flex">
                      <i class="bi bi-telephone"></i>
                      <div className="text">
                        <span>+01226785355</span>
                      </div>
                    </div>
                  </span>
                  <span>
                    <div className="location d-flex">
                      <i class="bi bi-whatsapp"></i>
                      <div className="text">
                        <span>+01226785355</span>
                      </div>
                    </div>
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