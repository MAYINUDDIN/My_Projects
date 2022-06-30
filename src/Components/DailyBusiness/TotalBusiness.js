import React from 'react';

const TotalBusiness = ({ totl }) => {
    const { TOTAL_1ST_YR, TOTAL_RENEWAL, TOTAL } = totl;
    console.log(totl);

    return (
        <div>

            <div class="stats shadow-sm bordered rounded mb-5">

                <div class="stat w-52 bg-success text-white font-bold bordered rounded">
                    < h2 className='text-right bordered rounded'>TOTAL: </h2 >
                </div >


                <div class="stat w-48 bg-[#002f6c] text-white font-bold bordered rounded ml-1">
                    <h2 className='text-right'>{TOTAL_1ST_YR}</h2>
                </div>

                <div class="stat w-48 bg-[#002f6c] text-white font-bold bordered ml-1 rounded">
                    <h2 className='text-right'>{TOTAL_RENEWAL}</h2>
                </div>
                <div class="stat w-48 bg-[#002f6c] text-white font-bold bordered ml-1 rounded">
                    <h2 className='text-right'>{TOTAL}</h2>
                </div>

            </div >


        </div>

    );
};

export default TotalBusiness;