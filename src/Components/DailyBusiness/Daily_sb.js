import React from 'react';

const Daily_sb = ({ dailyysb }) => {


    const { NAME, SB_TOTAL_1ST_YR, SB_TOTAL_RENEWAL, SB_TOTAL } = dailyysb;

    var nf = new Intl.NumberFormat();
    const sb_total_fy = nf.format(SB_TOTAL_1ST_YR);
    const sb_total_re = nf.format(SB_TOTAL_RENEWAL);
    const sb_total = nf.format(SB_TOTAL);



    return (
        <div className="ml-2 flex mt-1   w-full">
            <div class="stat w-32  bg-[#5d99c6] text-white font-bold bordered rounded">
                < h2 className='text-right bordered rounded text-sm font-bold'>{sb_total_fy}</h2 >
            </div >

            <div class="stat w-32 ml-1 bg-[#5d99c6] text-white font-bold bordered rounded ">
                <h2 className='text-right text-sm font-bold'>{sb_total_re}</h2>
            </div>

            <div class="stat w-48 ml-1 bg-[#5d99c6] text-white font-bold bordered  rounded">
                <h2 className='text-right text-sm font-bold'>{sb_total}</h2>
            </div>
            {/* <div class="stat w-1/3  bg-[#0c937f] text-white font-bold bordered ml-1 rounded">
                <h2 className='text-right'>{ }</h2>
            </div> */}
        </div>

    );
};

export default Daily_sb;