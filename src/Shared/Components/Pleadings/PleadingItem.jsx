import { memo } from 'react';
import img1 from './assets/liy9gxhve4epfmfyrvwp.webp';
import './Pleadings.modules.css';

const PleadingItem = () => {
    const PleadingData = [
      {
        id: 1,
        img: img1,
        title: "مرافعة صوتية في جناية قتل عمد",
        des: "مرافعة لجناية قتل عمد وسلاح",
      },
      {
        id: 2,
        img: img1,
        title: "مرافعة صوتية في جناية قتل عمد",
        des: "جنايات بني سويف",
      },
      {
        id: 3,
        img: img1,
        title: "مرافعة صوتية في جناية تزوير وتهريب",
        des: "جناية تزوير مستندات وتهريب وتربيح الغير في مطار القاهرة",
      },
      {
        id: 4,
        img: img1,
        title: "مرافعة صوتية",
        des: "جنحة تبديد",
      }
    ];
  return (
    <>
      {PleadingData.map((item) => (
        <div className="col-xl-3 col-12" key={item.id}>
          <div className="pleading-item mb-3">
            <div className="pleading-data px-3">
              <div className="img py-3 px-3">
                <img src={item.img} alt="" />
              </div>
              <h5>{item.title}</h5>
              <p>{item.des}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default memo(PleadingItem);