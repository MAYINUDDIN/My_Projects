import React from 'react';

const Bank_amount = ({ p_amount }) => {
       const { BANK_AMOUNT } = p_amount;
    var nf = new Intl.NumberFormat();
  
  const BANK_AMOUNTT = nf.format(BANK_AMOUNT);
    
    console.log(p_amount);
    return (
             <div>
            
                
         
                
                <div class="stat w-24 lg:w-96 mt-0 bg-[#01579b] text-white font-bold bordered ">
                 < h2 className='text-center bordered rounded text-lg font-bold'>PR ISSUE</h2 >
            </div >
              <div class="stat w-24 lg:w-96 mt-0 bg-[#0288d1] text-white font-bold bordered">
                 < h2 className='text-left  bordered rounded text-lg font-bold'> { BANK_AMOUNTT}</h2 >
                </div >
              </div>
        
   
    );
};

export default Bank_amount;