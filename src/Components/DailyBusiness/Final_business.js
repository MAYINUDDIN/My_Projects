import React from 'react';

const Final_business = ({ f }) => {
    
    const { OFF_NAME,FY_EKOK,REN_EKOK,TOT_EKOK,FY_SB,REN_SB,TOT_SB,TOT_FY,TOT_REN,ALL_TOTAL } = f;
  var nf = new Intl.NumberFormat();
  
  const first_yr_ekok = nf.format(FY_EKOK);


    const first_yr_re = nf.format(REN_EKOK);
    const total_ekok = nf.format(TOT_EKOK);
  
    const first_yr_sb = nf.format(FY_SB);
    const first_yr_re_sb = nf.format(REN_SB);
  const total_sb = nf.format(TOT_SB);
  
    const total_fy = nf.format(TOT_FY);
    const total_re = nf.format(TOT_REN);
    const all_total = nf.format(ALL_TOTAL);
  

    return (
         <div className="ml-0 flex justify-center  w-full">
                                    <div class="stat w-40 mt-1 bg-success text-white font-bold bordered rounded">
                                        < h2 className='text-left bordered rounded text-sm font-bold'>{ OFF_NAME}</h2 >
                                    </div >

                                    <div class="stat w-32 mt-1 bg-[#0086c3] text-white font-bold bordered rounded ml-1">
                                              <h2 className='text-sm text-right font-bold'>{ first_yr_ekok}</h2>
                                    </div>

                                    <div class="stat w-32 mt-1 bg-[#0086c3] text-white font-bold bordered ml-1 rounded">
                                        <h2 className='text-sm text-right font-bold '>{ first_yr_re}</h2>
                                    </div>
                                    <div class="stat w-48 mt-1 bg-[#0086c3] text-white font-bold bordered ml-1 rounded">
                                        <h2 className='text-sm text-right font-bold text-right'>{ total_ekok}</h2>
                                    </div>
                                    
                                   <div class="stat w-32 ml-1 mt-1  bg-[#007c91] text-white font-bold bordered rounded">
                                      < h2 className='text-sm bordered rounded font-bold text-right'>{ first_yr_sb}</h2 >
                                    </div >

                                    <div class="stat w-32 mt-1 bg-[#007c91] text-white font-bold bordered rounded ml-1">
                                      <h2 className='text-sm font-bold text-right'>{ first_yr_re_sb}</h2>
                                    </div>


                                    <div class="stat w-48 mt-1  bg-[#007c91] text-white font-bold bordered ml-1 rounded">
                                           <h2 className='text-sm font-bold text-right'>{ total_sb}</h2>
                                     </div>
                    
                                <div class="stat w-32 mt-1 bg-success text-white font-bold bordered rounded ml-1">
                                      <h2 className='text-sm text-right'>{ total_fy}</h2>
                                    </div>
                                    <div class="stat w-32 mt-1 bg-success text-white font-bold bordered rounded ml-1">
                                      <h2 className='text-sm font-bold text-right'>{ total_re}</h2>
                                    </div>

                                    <div class="stat w-48 mt-1 bg-success text-white font-bold bordered ml-1 rounded">
                                     <h2 className='text-sm font-bold text-right'>{ all_total}</h2>
                                    </div>
                                </div>
    );
};

export default Final_business;