import React from 'react';
import Daily_sb from './Daily_sb';

const TotalBusiness = ({ totl }) => {
    const { TOTAL_1ST_YR, TOTAL_RENEWAL, TOTAL } = totl;
    console.log(totl);

    var nf = new Intl.NumberFormat();
    const t_first_yr = nf.format(TOTAL_1ST_YR);
    const t_re = nf.format(TOTAL_RENEWAL);
    const total = nf.format(TOTAL);

    return (
        <div className="ml-1 flex mt-1   w-full">
            <div class="stat w-32  bg-[#338a3e] text-white font-bold bordered rounded">
                < h2 className='text-right bordered rounded font-bold text-sm'>{t_first_yr}</h2 >
            </div >
            <div class="stat w-32 ml-1  bg-[#338a3e] text-white font-bold bordered rounded">
                < h2 className='text-right bordered rounded font-bold text-sm'>{t_re}</h2 >
            </div >
            <div class="stat w-40 ml-1 bg-[#338a3e] text-white font-bold bordered rounded">
                < h2 className='text-right bordered rounded font-bold text-sm'>{total}</h2 >
            </div >


        </div>

    );
};

export default TotalBusiness;