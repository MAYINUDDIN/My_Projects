import React from 'react';
import DailyBusiness from './DailyBusiness'
import DailybusinessDetails from './DailybusinessDetails'
const Daily = ({ dailyy }) => {

    const { NAME, EKOK_TOTAL_1ST_YR, EKOK_TOTAL_RENEWAL, EKOK_TOTAL } = dailyy;

    console.log(NAME);



    return (

        <div className="ml-0 flex mt-1 pr-1  w-full">
            <div class="stat w-1/4  bg-[#338a3e] text-white font-bold bordered rounded">
                < h2 className='text-left bordered rounded text-sm'>{NAME}</h2 >
            </div >

            <div class="stat w-1/4 bg-[#0c937f] text-white font-bold bordered rounded ml-1">
                <h2 className='text-right text-md'>{EKOK_TOTAL_1ST_YR}</h2>
            </div>

            <div class="stat w-1/4  bg-[#0c937f] text-white font-bold bordered ml-1 rounded">
                <h2 className='text-right text-md'>{EKOK_TOTAL_RENEWAL}</h2>
            </div>
            <div class="stat w-1/4  bg-[#0c937f] text-white font-bold bordered ml-1 rounded">
                <h2 className='text-right'>{EKOK_TOTAL}</h2>
            </div>
        </div>


    );
};

export default Daily;