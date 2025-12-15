import { memo } from 'react';
import './Home.modules.css';

const Home = () => {
  return (
    <>
      <div className="home" id='home'>
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-3 col-12 d-flex justify-content-center align-items-center">
              <div className="img1">
                <img src="/title_main.webp" alt="" />
              </div>
            </div>
            <div className="col-xl-6 col-12">
              <div className="img2">
                <img src="/hero_main.webp" alt="" />
              </div>
            </div>
            <div className="col-xl-3 col-12 d-flex justify-content-center align-items-center">
              <div className="img3">
                <img src="/logo_main.webp" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(Home);