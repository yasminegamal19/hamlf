import { memo } from 'react';
import './AboutUs.modules.css';
import MainTitle from '../MainTitle/MainTitle';

const AboutUs = ({title}) => {
  return (
    <>
      <div className="about-us py-5" id='about-us'>
        <div className="container">
          <MainTitle title="من نحن" />
          <div className="row mt-5">
            <div className="col-xl-7 col-12 d-flex justify-content-center">
              <img src="/about_main.webp" alt="" />
            </div>
            <div className="col-xl-5 col-12">
              <div className="content">
                <p>
                  نحن مؤسسة متميزة بأسلوب إدارتها ونجاحاتها تعمل في مجالي العمل
                  القانوني.
                </p>
                <p>
                  نقدم من خلال نشاطنا كل احتياجات الكيانات الاقتصادية الكبرى
                  والصغرى والأفراد من الدعم القانوني والاقتصادي في مختلف
                  المجالات.
                </p>
                <p>
                  وذلك من خلال مجموعة متميزة من المحامين والمستشارين. نعمل
                  جميعاً يد واحدة من أجل تقديم أفضل خدمة لعملاء المؤسسة في
                  المجال القانوني.
                </p>
                <button className="btn">اقرأ المزيد</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(AboutUs);