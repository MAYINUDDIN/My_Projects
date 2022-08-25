import React from 'react';

const Total = ({ totll }) => {
    const { F_TOTAL, R_TOTAL, TOTAL } = totll;


    console.log(totll);
    var nf = new Intl.NumberFormat();
    const f_total = nf.format(F_TOTAL);
    const r_total = nf.format(R_TOTAL);
    const total = nf.format(TOTAL);

    console.log(totll);
    return (
        <div className="ml-0 flex justify-center  w-full">
            <div class="stat w-32 ml-1 bg-[#005b4f] text-white font-bold bordered rounded">
                < h2 className='text-right bordered rounded font-bold text-md'>{f_total}</h2 >
            </div >
            <div class="stat w-32 ml-1 bg-[#005b4f] text-white font-bold bordered rounded">
                < h2 className='text-center bordered rounded font-bold text-md'>{r_total}</h2 >
            </div >
            <div class="stat w-48 ml-1 bg-[#005b4f] text-white font-bold bordered rounded">
                < h2 className='text-right bordered rounded font-bold text-md'>{total}</h2 >
            </div >

        </div>
    );
};

export default Total;