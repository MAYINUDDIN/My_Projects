import React from 'react';

const Pr_amount_details = ({ bnk_amount }) => {
    
    const { BANK_AMOUNT } = bnk_amount;
    var nf = new Intl.NumberFormat();
  
  const BANK_AMOUNTT = nf.format(BANK_AMOUNT);


    return (
        <div>
            <div className='lg:px-48 flex gap-0 lg:ml-12  mt-0 justify-center p-0'>
                
           <div class="stat w-24 lg:w-96 mt-0 bg-[#0288d1] text-white font-bold bordered">
                 < h2 className='text-left bordered rounded text-lg font-bold'>TOTAL: { BANK_AMOUNTT}</h2 >
                </div >
                  <div class="stat w-24 lg:w-96 mt-0 lg:ml-1 mr-5 bg-[#0288d1] text-white font-bold bordered">
                 < h2 className='text-left bordered rounded text-lg font-bold'>TOTAL: { BANK_AMOUNTT}</h2 >
                </div >
              </div>
        
        </div>
    );
};

export default Pr_amount_details;