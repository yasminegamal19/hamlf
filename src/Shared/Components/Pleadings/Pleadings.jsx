import { memo, useEffect, useState } from "react";
import axios from "axios";
import PleadingItem from "./PleadingItem";
import MainTitle from "../MainTitle/MainTitle";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Pleadings = () => {
  const {i18n} = useTranslation();
  const [pleadings, setPleadings] = useState([]);
  const BASE_URL = process.env.REACT_APP_BASE_URL;

  useEffect(() => {
    axios
      .get(`${BASE_URL}get_pleadings?limit=4`, {
        headers: {
          "Accept-Language": i18n.language,
        },
      })
      .then((res) => {
        setPleadings(res.data.data.data);
      });
  }, [i18n.language,BASE_URL]);

  return (
    <div className="pleadings py-5 px-3" id="pleadings">
      <div className="container">
        <MainTitle title="المرافعات" />
        <div className="row mb-4">
          {pleadings.map((item) => (
            <PleadingItem key={item.id} data={item} />
          ))}
        </div>

        <div className="text-center mt-4">
          <Link to="/pleadings" className="btn">
            المزيد من المرافعات
          </Link>
        </div>
      </div>
    </div>
  );
};

export default memo(Pleadings);
