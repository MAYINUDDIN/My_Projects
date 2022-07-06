import React from 'react';

const EkokTotal = ({ edaily }) => {
    const { TOTAL_1ST_YR, TOTAL_RENEWAL, TOTAL } = edaily;

    return (
        <div className="ml-0 flex mt-1 mb-5   w-full">
            <div class="stat w-1/4  bg-[#005b4f] text-white font-bold bordered rounded">
                < h2 className='text-left bordered rounded text-sm'>TOTAL : </h2 >
            </div >

            <div class="stat w-1/4 bg-[#005b4f] text-white font-bold bordered rounded ml-1">
                <h2 className='text-right text-sm'>{TOTAL_1ST_YR}</h2>
            </div>

            <div class="stat w-1/4  bg-[#005b4f] text-white font-bold bordered ml-1 rounded">
                <h2 className='text-right text-sm'>{TOTAL_RENEWAL}</h2>
            </div>
            <div class="stat w-1/4  bg-[#005b4f] text-white font-bold bordered ml-1 rounded">
                <h2 className='text-right'>{TOTAL}</h2>
            </div>
        </div>
    );
};

export default EkokTotal;