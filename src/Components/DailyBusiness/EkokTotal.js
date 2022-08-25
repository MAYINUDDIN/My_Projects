import React from 'react';

const EkokTotal = ({ edaily }) => {
    const { TOTAL_1ST_YR, TOTAL_RENEWAL, TOTAL } = edaily;


    var nf = new Intl.NumberFormat();
    const t_first_yr = nf.format(TOTAL_1ST_YR);
    const t_renewal = nf.format(TOTAL_RENEWAL);
    const total = nf.format(TOTAL);


    return (
        <div className="ml-0 flex justify-center  w-full">
            <div class="stat w-40 bg-[#005b4f] text-white font-bold bordered rounded">
                < h2 className='text-left bordered rounded text-sm'>GRAND TOTAL : </h2 >
            </div >

            <div class="stat w-32 bg-[#005b4f] text-white font-bold bordered rounded ml-1">
                <h2 className='text-right text-md'>{t_first_yr}</h2>
            </div>

            <div class="stat w-32  bg-[#005b4f] text-white font-bold bordered ml-1 rounded">
                <h2 className='text-right text-md'>{t_renewal}</h2>
            </div>
            <div class="stat w-48  bg-[#005b4f] text-white font-bold bordered ml-1 rounded">
                <h2 className='text-right text-md'>{total}</h2>
            </div>
        </div>
    );
};

export default EkokTotal;