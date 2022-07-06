import React from 'react';

const SbTotal = ({ sdaily }) => {
    const { TOTAL_1ST_YR, TOTAL_RENEWAL, TOTAL } = sdaily;

    return (
        <div className="ml-2 flex mt-1   w-full">
            <div class="stat w-1/3  bg-[#005b4f] text-white font-bold bordered rounded">
                < h2 className='text-right bordered rounded text-md font-bold'>{TOTAL_1ST_YR}</h2 >
            </div >

            <div class="stat w-1/3 ml-1 bg-[#005b4f] text-white font-bold bordered rounded ">
                <h2 className='text-right text-md font-bold'>{TOTAL_RENEWAL}</h2>
            </div>

            <div class="stat w-1/3 ml-1 bg-[#005b4f] text-white font-bold bordered  rounded">
                <h2 className='text-right text-md font-bold'>{TOTAL}</h2>
            </div>

        </div>
    );
};

export default SbTotal;