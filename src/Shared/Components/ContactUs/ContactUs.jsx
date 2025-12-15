import { memo } from "react";
import MainTitle from "../MainTitle/MainTitle";
import "./ContactUs.modules.css";

const ContactUs = () => {
  return (
    <>
      <div className="contact-us py-5" id="contact-us">
        <div className="container">
          <MainTitle title="تواصل معنا" />
          <h5 className="my-5">
            لا تتردد في التواصل معنا لحجز استشارة قانونية متخصصة تتناسب مع
            احتياجاتك الخاصة. فريقنا من المحامين الخبراء مستعد لتقديم المشورة
            القانونية المناسبة لك وتوفير الدعم اللازم في جميع القضايا القانونية.
          </h5>
          <div className="row">
            <div className="col-xl-6">
              <form>
                <div className="row">
                  <div class=" col-xl-6 mb-3">
                    <label for="exampleInputEmail1" class="form-label">
                      الاسم بالكامل{" "}
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="exampleInputName1"
                      aria-describedby="emailHelp"
                      placeholder="الاسم بالكامل"
                    />
                  </div>
                  <div class=" col-xl-6 mb-3">
                    <label for="exampleInputEmail1" class="form-label">
                      رقم الهاتف المحمول{" "}
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="exampleInputName1"
                      aria-describedby="emailHelp"
                    />
                  </div>
                </div>
                <div className="row">
                  <div class=" col-xl-6 mb-3">
                    <label for="exampleInputEmail1" class="form-label">
                      العمر{" "}
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="exampleInputName1"
                      aria-describedby="emailHelp"
                      placeholder="العمر"
                    />
                  </div>
                  <div class=" col-xl-6 mb-3">
                    <label htmlFor="">مكان الاقامة</label>
                    <select
                      class="form-select"
                      aria-label="Default select example"
                    >
                      <option selected>القاهرة</option>
                      <option value="1">الجيزة</option>
                      <option value="2">المنوفيه</option>
                      <option value="3">الاسكندرية</option>
                      <option value="4">الدقهلية</option>
                      <option value="5">المنيا</option>
                    </select>
                  </div>
                </div>
                <div class="mb-3">
                  <label for="exampleFormControlTextarea1" class="form-label">
                    موضوع الاستشارة{" "}
                  </label>
                  <textarea
                    class="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    placeholder="موضوع الاستشارة"
                  ></textarea>
                </div>
                 <div className="text-start">
                <button type="submit" class="btn btn-primary">
                  ارسال
                </button>
                </div>
              </form>
            </div>
            <div className="col-xl-6 d-flex justify-content-center">
              <img src="/liy9gxhve4epfmfyrvwp.webp" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(ContactUs);
