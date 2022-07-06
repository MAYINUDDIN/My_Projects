import React from 'react';

const Total = ({ totll }) => {
    const { TOTAL } = totll;
    console.log(totll);
    return (
        <div className="ml-1 flex mt-1   w-full">
            <div class="stat w-48 ml-2 bg-[#005b4f] text-white font-bold bordered rounded">
                < h2 className='text-right bordered rounded font-bold text-sm'>{TOTAL}</h2 >
            </div >

        </div>
    );
};

export default Total;