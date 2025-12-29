import { memo } from 'react';
import img1 from './assets/liy9gxhve4epfmfyrvwp.webp';
import './Pleadings.modules.css';
import { Link } from 'react-router-dom';


const PleadingItem = ({ data }) => {
  return (
    <div className="col-xl-3 col-12 mb-3">
      <div className="pleading-item">
        <div className="pleading-data px-3">
          <div className="img py-3 px-3">
            <img src={data?.image} alt=""/>
          </div>
          <h5>{data?.title}</h5>
          <p>{data?.description}</p>
          <button className="btn">
            <i className="bi bi-download"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default memo(PleadingItem);



































// const PleadingItem = () => {
//     const PleadingData = [
//       {
//         id: 1,
//         img: img1,
//         title: "مرافعة صوتية في جناية قتل عمد",
//         des: "جنايات بني سويف",
//         icon: { iconName: "bi-download", iconLink: "www.example.com" },
//       },
//       {
//         id: 2,
//         img: img1,
//         title: "مرافعة صوتية في جناية قتل عمد",
//         des: "مرافعة لجناية قتل عمد وسلاح",
//         icon: { iconName: "bi-download", iconLink: "www.example.com" },
//       },
//       {
//         id: 3,
//         img: img1,
//         title: "مرافعة صوتية في جناية تزوير وتهريب",
//         des: "جناية تزوير مستندات وتهريب وتربيح الغير في مطار القاهرة",
//         icon: { iconName: "bi-download", iconLink: "www.example.com" },
//       },
//       {
//         id: 4,
//         img: img1,
//         title: "مرافعة صوتية",
//         des: "جنحة تبديد",
//         icon: { iconName: "bi-download", iconLink: "www.example.com" },
//       },
//     ];
//   return (
//     <>
//       {PleadingData.map((item) => (
//         <div className="col-xl-3 col-12" key={item.id}>
//           <div className="pleading-item mb-3">
//             <div className="pleading-data px-3">
//               <div className="img py-3 px-3">
//                 <img src={item.img} alt="" />
//               </div>
//               <h5>{item.title}</h5>
//               <p>{item.des}</p>
//               <button className="btn">
//                 <i className={`bi ${item.icon.iconName}`}></i>
//               </button>
//             </div>
//           </div>
//         </div>
//       ))}
//     </>
//   );
// };

// export default memo(PleadingItem);