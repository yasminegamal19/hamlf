import { memo } from 'react';
import PleadingItem from './PleadingItem';
import MainTitle from '../MainTitle/MainTitle';
import './Pleadings.modules.css';
const Pleadings = ({title}) => {
  return (
    <>
    <div className="pleadings py-5" id='pleadings'>
        <div className="container">
            <MainTitle title="المرافعات"/>
            <div className="row mb-4">
                <PleadingItem />
            </div>
            <div className='text-center mt-4'>
            <button className='btn'>المزيد من المرافعات</button>
            </div>
        </div>
    </div>
    </>
  );
};

export default memo(Pleadings);