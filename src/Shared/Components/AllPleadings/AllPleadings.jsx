import { useEffect, useState, memo } from "react";
import axios from "axios";
import PleadingItem from "../Pleadings/PleadingItem";
import MainTitle from "../MainTitle/MainTitle";

const AllPleadings = () => {
  const [pleadings, setPleadings] = useState([]);

  const BASE_URL = process.env.REACT_APP_BASE_URL;

  useEffect(() => {
    axios
      .get(`${BASE_URL}get_pleadings`)
      .then((res) => {
        setPleadings(res.data.data.data); 
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="pleadings py-5">
      <div className="container">
        <MainTitle title="المرافعات" />
        <div className="row">
          {pleadings.map((item) => (
            <PleadingItem key={item.id} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default memo(AllPleadings);
