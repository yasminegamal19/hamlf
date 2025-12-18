import { memo, useState } from "react";
import MainTitle from "../MainTitle/MainTitle";
import "./ContactUs.modules.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Translation, useTranslation } from "react-i18next";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const {t} = useTranslation();

  const BASE_URL = process.env.REACT_APP_BASE_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.post(`${BASE_URL}contact_us`, {
        name,
        phone,
        email,
        message,
      });

      console.log(res.data);
      toast.success(t("toast.success"));

      setName("");
      setPhone("");
      setEmail("");
      setMessage("");

      navigate("/");
    } catch (error) {
      console.error(error);
      toast.error(t("toast.error"));
    } finally {
      setLoading(false); 
    }
  };

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
                      class="form-control"
                      id="exampleInputName1"
                      aria-describedby="emailHelp"
                      placeholder={t("contact.form.name.placeholder")}
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div class=" col-xl-6 mb-3">
                    <label for="exampleInputEmail1" class="form-label">
                      {t("contact.form.phone.label")}
                    </label>
                    <input
                      type="number"
                      class="form-control"
                      id="exampleInputName1"
                      aria-describedby="emailHelp"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
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
                      required
                      class="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder={t("contact.form.email.placeholder")}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>
                <div class="mb-3">
                  <label for="exampleFormControlTextarea1" class="form-label">
                    {t("contact.form.message.label")}
                  </label>
                  <textarea
                    required
                    class="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    placeholder={t("contact.form.message.placeholder")}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  ></textarea>
                </div>
                <div className="text-start">
                  <button type="submit" class="btn btn-primary">
                    {loading ? t("contact.form.loading") : t("contact.form.submit")}
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
