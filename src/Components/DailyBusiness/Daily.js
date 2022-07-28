import React from 'react';
import DailyBusiness from './DailyBusiness'
import DailybusinessDetails from './DailybusinessDetails'
const Daily = ({ dailyy }) => {

    const { NAME, EKOK_TOTAL_1ST_YR, EKOK_TOTAL_RENEWAL, EKOK_TOTAL } = dailyy;

    console.log(NAME);

    var nf = new Intl.NumberFormat();
    const ekok_total_fy = nf.format(EKOK_TOTAL_1ST_YR);
    const ekok_total_re = nf.format(EKOK_TOTAL_RENEWAL);
    const ekok_total = nf.format(EKOK_TOTAL);

    return (

        <div className="ml-0 flex mt-1   w-full">
            <div class="stat w-48  bg-[#338a3e] text-white font-bold bordered rounded">
                < h2 className='text-left bordered rounded text-sm'>{NAME}</h2 >
            </div >

            <div class="stat w-32 bg-[#0c937f] text-white font-bold bordered rounded ml-1">
                <h2 className='text-right text-sm'>{ekok_total_fy}</h2>
            </div>

            <div class="stat w-32  bg-[#0c937f] text-white font-bold bordered ml-1 rounded">
                <h2 className='text-right text-sm'>{ekok_total_re}</h2>
            </div>
            <div class="stat w-32  bg-[#0c937f] text-white font-bold bordered ml-1 rounded">
                <h2 className='text-right text-sm'>{ekok_total}</h2>
            </div>
        </div>


    );
};

export default Daily;