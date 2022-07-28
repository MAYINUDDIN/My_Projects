import React from 'react';

const SbTotal = ({ sdaily }) => {
    const { TOTAL_1ST_YR, TOTAL_RENEWAL, TOTAL } = sdaily;

    var nf = new Intl.NumberFormat();
    const t_first_yr = nf.format(TOTAL_1ST_YR);
    const t_renewal = nf.format(TOTAL_RENEWAL);
    const total = nf.format(TOTAL);


    return (
        <div className="ml-2 flex mt-1   w-full">
            <div class="stat w-32  bg-[#005b4f] text-white font-bold bordered rounded">
                < h2 className='text-right bordered rounded text-md font-bold'>{t_first_yr}</h2 >
            </div >

            <div class="stat w-32 ml-1 bg-[#005b4f] text-white font-bold bordered rounded ">
                <h2 className='text-right text-md font-bold'>{t_renewal}</h2>
            </div>

            <div class="stat w-48 ml-1 bg-[#005b4f] text-white font-bold bordered  rounded">
                <h2 className='text-right w-32 text-md font-bold'>{total}</h2>
            </div>

        </div>
    );
};

export default SbTotal;