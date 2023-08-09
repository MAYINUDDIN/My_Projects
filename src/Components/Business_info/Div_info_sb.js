import React from 'react';
import { useState } from 'react';
import Loading from '../Loading';
import { format } from 'date-fns';

const Div_info_sb = () => {
    const [divinfo, SetDivinfo] = useState([]);
    console.log(divinfo);
    const [fromdate, setFromDate] = useState(new Date());
    const [todate, setToDate] = useState(new Date());
    console.log(fromdate, todate);
    const F_DATE=(format(new Date(fromdate), 'yyyyMM'));
    const TO_DATE=(format(new Date(todate), 'yyyyMM'));
    console.log(F_DATE,TO_DATE);



    var nf = new Intl.NumberFormat();

    const div_info = () => {
        fetch(`http://202.164.213.67/payment/daily/div_year_sb.php?FROM_DATE=${F_DATE}&&TO_DATE=${TO_DATE}`)
            .then(Response => Response.json())
            .then(data => SetDivinfo(data))
    };

    return (
        <div className='mb-3'>
        <h2 className='font-bold lg:text-2xl mt-5 text-secondary drop-shadow'>
            PREVIOUS & CURRENT YEAR BUSINESS INFORMATION <span className='text-primary lg:text-2xl'> (DIVISION-SB)</span>  </h2>
        <div class="stats px-6 bg-success rounded mt-2 mb-4 text-primary-content">
            <div class="stat">
                <div className="flex text-center align-items-center">
                    <p className="text-sm font-bold mr-3">FROM MONTH :   </p>
                    <input className="text-dark shadow rounded p-2 text-center" format="YYYYMM" type="month" onChange={e => setFromDate(e.target.value)} />
                </div>
            </div>
            <div class="stat">
                <div className="flex text-center align-items-center">
                    <p className="text-sm font-bold mr-3">TO MONTH :</p>
                    <input className="text-dark shadow rounded p-2 text-center" format="YYYYMM" type="month" dateFormat="yyyymm" onChange={e => setToDate(e.target.value)} />
                    <button onClick={div_info} className=" m-3 btn-primary  text-white btn-md px-10 text-lg rounded bg-[#002f6c] uppercase">Submit</button>
                </div>
            </div>
            </div>

            {
             divinfo.length === 0 ? <p className='text-center'><Loading/></p> :
             <div className="ml-0 mt-1 flex justify-center w-96  lg:w-full">

                             <div class="stat w-40  bg-[#005b4f] text-white font-bold bordered rounded">
                                 < h2 className='text-left bordered rounded text-sm  font-bold'>DIVISION NAME</h2 >
                             </div >

                             <div class="stat w-32 bg-[#004ecb] text-white  bordered rounded ml-1">
                                 <h2 className='text-sm font-bold'>FY_PREV_YEAR</h2>
                             </div>

                             <div class="stat w-32  bg-[#004ecb] text-white font-bold bordered ml-1 rounded">
                                 <h2 className='text-sm font-bold'>FY_CURR_YEAR</h2>
                             </div>
                             <div class="stat w-32  bg-[#004ecb] text-white font-bold bordered ml-1 rounded">
                                 <h2 className='text-sm'>FY_RATIO</h2>
                             </div>
                             
                            <div class="stat w-40 ml-1  bg-[#004ecb] text-white font-bold bordered rounded">
                                 < h2 className='text-sm bordered rounded '>REN_PREV_YEAR</h2 >
                             </div >

                             <div class="stat w-40  bg-[#004ecb] text-white font-bold bordered rounded ml-1">
                                 <h2 className='text-sm'>REN_CURR_YEAR</h2>
                             </div>


                             <div class="stat w-36  bg-[#004ecb] text-white font-bold bordered ml-1 rounded">
                                 <h2 className='text-sm text-center'>REN_RATIO</h2>
                              </div>
             
                         <div class="stat w-48  bg-[#004ecb] text-white font-bold bordered rounded ml-1">
                                 <h2 className='text-sm'>TOTAL_PREVIOUS_YEAR</h2>
                             </div>
                             <div class="stat w-48  bg-[#005b4f] text-white font-bold bordered rounded ml-1">
                                 <h2 className='text-sm'>TOTAL_CURRENT_YEAR</h2>
                             </div>

                             <div class="stat w-28 bg-[#005b4f] text-white font-bold bordered ml-1 rounded">
                                 <h2 className='text-sm text-center'>TOTAL_RATIO</h2>
                             </div>
                         </div>

       }

         {divinfo.map((info, index) => (
        
        
          <div className="ml-0 flex justify-center w-96   lg:w-full">
          <div class="stat w-24 lg:w-40 mt-1 bg-success text-white font-bold bordered rounded">
           < h2 className='text-left bordered rounded text-sm font-bold'>{info?.NAME}</h2 >
          </div >

          <div class="stat w-24 lg:w-32 mt-1 bg-[#004ecb] text-white font-bold bordered rounded ml-1">
              <h2 className='text-sm text-center font-bold'>{info?.FY_PREVIOUS_YEAR} </h2>
          </div>  

           <div class="stat w-24 lg:w-32 mt-1 bg-[#007c91] text-white font-bold bordered ml-1 rounded">
             <h2 className='text-sm text-centerfont-bold '>{info?.FY_CURRENT_YEAR}</h2>
            </div>
            <div class="stat w-24 lg:w-32 mt-1 bg-[#007c91] text-white font-bold bordered ml-1 rounded">
             <h2 className='text-sm text-center font-bold '>{info?.FY_RATIO}</h2>
            </div>
             <div class="stat w-24 lg:w-40 mt-1 bg-[#004ecb] text-white font-bold bordered ml-1 rounded">
              <h2 className='text-sm text-right font-bold text-center'>{info?.REN_PREVIOUS_YEAR}</h2>
             </div>
                              
             <div class="stat w-32 lg:w-40 ml-1 mt-1  bg-[#007c91] text-white font-bold bordered rounded">
                 < h2 className='text-sm bordered rounded font-bold text-center'>{info?.REN_CURRENT_YEAR}</h2 >
               </div >

               <div class="stat w-32 lg:w-36 ml-1 mt-1  bg-[#007c91] text-white font-bold bordered rounded">
                 < h2 className='text-sm bordered rounded font-bold text-center'>{info?.REN_RATIO}</h2 >
               </div >
              <div class="stat w-48 mt-1 bg-[#004ecb] text-white font-bold bordered rounded ml-1">
                  <h2 className='text-sm font-bold text-center'>{info?.TOTAL_PREVIOUS_YEAR}</h2>
               </div>


                <div class="stat w-48 lg:w-48 mt-1  bg-[#007c91] text-white font-bold bordered ml-1 rounded">
                  <h2 className='text-sm font-bold text-center'>{info?.TOTAL_CURRENT_YEAR}</h2>
                </div>
              
                <div class="stat w-32 lg:w-28 mt-1 bg-success text-white font-bold bordered rounded ml-1">
                  <h2 className='text-sm text-center'>{info?.TOTAL_RATIO}</h2>
                </div>
         
  
                </div>
        ))}

    </div>
    );
};

export default Div_info_sb;