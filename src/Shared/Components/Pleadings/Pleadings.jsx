import { memo, useEffect, useState } from "react";
import axios from "axios";
import PleadingItem from "./PleadingItem";
import MainTitle from "../MainTitle/MainTitle";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { fetchPleadings } from "../../Redux/Slices/PleadingsSlice";

const Pleadings = () => {
  const { i18n, t } = useTranslation();
  const dispatch = useDispatch();
  const { pleadings, isLoading, error } = useSelector(
    (state) => state.pleadings
  );

  console.log(pleadings);
  useEffect(() => {
    dispatch(fetchPleadings({ page: 1 }));
  }, [dispatch, i18n.language]);

  return (
    <div className="pleadings py-5 px-3" id="pleadings">
      <div className="container">
        <MainTitle title={t("pleadings.title")} />
        <div className="row mb-4">
          {pleadings.map((item) => (
            <PleadingItem key={item.id} data={item} />
          ))}
        </div>

        <div className="text-center mt-4">
          <Link to="/pleadings" className="btn">
            {t("pleadings.read_More")}{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default memo(Pleadings);
