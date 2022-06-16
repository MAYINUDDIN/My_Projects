import React from 'react';
import DailyBusiness from './DailyBusiness'
import DailybusinessDetails from './DailybusinessDetails'
const Daily = ({ dailyy }) => {

    const { NAME, TOTAL_1ST_YR, TOTAL_RENEWAL, TOTAL } = dailyy;
    console.log(NAME);
    return (

        <div>

            <div class="stats shadow-sm bordered rounded">

                <div class="stat w-64 bg-[#007c91] text-white font-bold bordered rounded">
                    < h2 className='text-left bordered rounded'> {NAME}</h2 >
                </div >

                <div class="stat w-64 bg-[#0093c4] text-white font-bold bordered rounded ml-1">
                    <h2 className='text-left'>{TOTAL_1ST_YR}</h2>
                </div>

                <div class="stat w-60 bg-[#0093c4] text-white font-bold bordered ml-1 rounded">
                    <h2 className='text-left'>{TOTAL_RENEWAL}</h2>
                </div>
                <div class="stat w-64 bg-[#00675b] text-white font-bold bordered ml-1 rounded">
                    <h2 className='text-left'>{TOTAL}</h2>
                </div>

            </div >
        </div>

    );
};

export default Daily;