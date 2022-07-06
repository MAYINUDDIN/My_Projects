import React from 'react';
import Daily_sb from './Daily_sb';

const TotalBusiness = ({ totl }) => {
    const { TOTAL_1ST_YR, TOTAL_RENEWAL, TOTAL } = totl;
    console.log(totl);

    return (
        <div className="ml-1 flex mt-1   w-full">
            <div class="stat w-48 ml-2 bg-[#338a3e] text-white font-bold bordered rounded">
                < h2 className='text-right bordered rounded font-bold text-sm'>{TOTAL}</h2 >
            </div >

        </div>

    );
};

export default TotalBusiness;