import { memo } from "react";
import "./MainTitle.css";

const MainTitle = ({ title, align = "center" }) => {
  return (
    <div className={`title ${align}`}>
      <h2>{title}</h2>
    </div>
  );
};

export default memo(MainTitle);
