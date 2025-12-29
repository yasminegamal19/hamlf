import { memo, useState, useEffect } from "react";
import MainTitle from "../MainTitle/MainTitle";
import "./ContactUs.modules.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Translation, useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { sendContact, resetContactState } from "../../Redux/Slices/ContactSlice";

const ContactUs = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const { isLoading, success, error } = useSelector((state) => state.contact);

  const [formdata, setformdata] = useState({
      name: "",
      phone: "",
      email: "",
      message: "",
    });

    const handleChange = (e) => {
      const { name, value } = e.target;
      setformdata((prev) => ({
        ...prev,
        [name]: value,
      }));
    };


  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   dispatch(
  //     sendContact({
  //       name,
  //       phone,
  //       email,
  //       message,
  //     })
  //   );
  //    console.log(name , phone, email, message);
  // };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(sendContact(formdata));
    console.log(formdata)
  };

    
 
    useEffect(() => {
      if (success) {
        toast.success(t("contact.toast.success"));

        setformdata({
          name: "",
          phone: "",
          email: "",
          message: "",
        });
        dispatch(resetContactState());
        navigate("/");
      }

      if (error) {
        toast.error(t("contact.toast.error"));
        dispatch(resetContactState());
      }
    }, [success, error, dispatch, navigate, t]);

  return (
    <>
      <div className="contact-us py-5" id="contact-us">
        <div className="container">
          <MainTitle title={t("contact.title")} />
          <h5 className="my-5 text-center">{t("contact.description")}</h5>
          <div className="row">
            <div className="col-xl-6">
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div class=" col-xl-6 mb-3">
                    <label for="exampleInputEmail1" class="form-label">
                      {t("contact.form.name.label")}
                    </label>
                    <input
                      required
                      type="text"
                      name="name"
                      class="form-control"
                      id="exampleInputName1"
                      aria-describedby="emailHelp"
                      placeholder={t("contact.form.name.placeholder")}
                      value={formdata.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div class=" col-xl-6 mb-3">
                    <label for="exampleInputEmail1" class="form-label">
                      {t("contact.form.phone.label")}
                    </label>
                    <input
                      type="number"
                      name="phone"
                      class="form-control"
                      id="exampleInputName1"
                      aria-describedby="emailHelp"
                      value={formdata.phone}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="row">
                  <div class=" col-12 mb-3">
                    <label for="exampleInputEmail1" class="form-label">
                      {t("contact.form.email.label")}{" "}
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      class="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder={t("contact.form.email.placeholder")}
                      value={formdata.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div class="mb-3">
                  <label for="exampleFormControlTextarea1" class="form-label">
                    {t("contact.form.message.label")}
                  </label>
                  <textarea
                    required
                    name="message"
                    class="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    placeholder={t("contact.form.message.placeholder")}
                    value={formdata.message}
                    onChange={handleChange}
                  ></textarea>
                </div>
                <div className="text-start">
                  <button type="submit" class="btn btn-primary">
                    {isLoading
                      ? t("contact.form.loading")
                      : t("contact.form.submit")}
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
