import React from 'react';

const Daily_sb = ({ dailyysb }) => {


    const { NAME, SB_TOTAL_1ST_YR, SB_TOTAL_RENEWAL, SB_TOTAL } = dailyysb;


    return (
        <div className="ml-2 flex mt-1   w-full">
            <div class="stat w-1/3  bg-[#5d99c6] text-white font-bold bordered rounded">
                < h2 className='text-right bordered rounded text-sm font-bold'>{SB_TOTAL_1ST_YR}</h2 >
            </div >

            <div class="stat w-1/3 ml-1 bg-[#5d99c6] text-white font-bold bordered rounded ">
                <h2 className='text-right text-sm font-bold'>{SB_TOTAL_RENEWAL}</h2>
            </div>

            <div class="stat w-1/3 ml-1 bg-[#5d99c6] text-white font-bold bordered  rounded">
                <h2 className='text-right text-sm font-bold'>{SB_TOTAL}</h2>
            </div>
            {/* <div class="stat w-1/3  bg-[#0c937f] text-white font-bold bordered ml-1 rounded">
                <h2 className='text-right'>{ }</h2>
            </div> */}
        </div>

    );
};

export default Daily_sb;