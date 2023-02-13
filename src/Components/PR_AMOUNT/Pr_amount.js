import React, { useState } from 'react';
import Loading from '../Loading';
import Pr_amount_details from './Pr_amount_details';

const Pr_amount = () => {

    const [bank_amount, SetBankAmount] = useState([]);
    //  console.log(bank_amount);
    const [fromdate, setFromDate] = useState();
    const [todate, setToDate] = useState();
    // console.log(fromdate, todate);


  const pr_amount = () => {
        fetch(`http://202.164.213.67/payment/statement/bank_amount.php?FROM_DATE=${fromdate}&&TOO_DATE=${todate}`)
            .then(Response => Response.json())
            .then(data =>SetBankAmount(data)) 

    };


    return (

          <div>

                        <h2 className='font-bold lg:text-2xl mt-5 text-secondary drop-shadow'> <span className='text-success lg:text-3xl'>BANK & PR COLLECTION INFORMATION</span>  </h2>

            
            <div class="stats px-6 bg-success rounded mt-2 text-primary-content">

                     <div class="stat">
                    <div className="flex text-center align-items-center">
                        <p className="text-sm font-bold mr-3">FROM DATE :   </p>
                        <input className="text-dark shadow rounded p-2 text-center" type="date" onChange={e => setFromDate(e.target.value)} />

                    </div>


                </div>


                <div class="stat">
                    <div className="flex text-center align-items-center">
                        <p className="text-sm font-bold mr-3">TO DATE :</p>
                        <input className="text-dark shadow rounded p-2 text-center" type="date" onChange={e => setToDate(e.target.value)}/>
                        {/* <Link to={`/Daily_business=${fromdate}=${todate}`}>   <button className=" m-3 btn-info text-white btn-sm bg-[#4fc3f7] uppercase">Submit</button></Link> */}
                        <button onClick={pr_amount} className=" m-3 btn-primary  text-white btn-md px-10 text-lg rounded bg-[#002f6c] uppercase">Submit</button>
                        {/* <button onClick={total} className=" m-3 btn-primary  text-white btn-md px-10 text-lg rounded bg-[#002f6c] uppercase">For Total</button> */}

                        {/* <h3 className="mt-5">Selected Date{date}</h3> */}
                    </div>
                </div>

            </div>
                      {
                        bank_amount.length === 0 ? <p className='text-center'></p> :
              <div className='lg:px-96 flex gap-0 lg:ml-12  mt-3 justify-center p-0'>
                
              <div class="stat w-24 lg:w-96 mt-0 bg-[#01579b] text-white font-bold bordered ">
                 < h2 className='text-left bordered rounded text-lg font-bold'>BANK COLLECTION</h2 >
                </div >
                  <div class="stat w-24 lg:w-96 mt-0 lg:ml-1 mr-5 bg-[#01579b] text-white font-bold bordered">
                 < h2 className='text-left bordered rounded text-lg font-bold'>PR COLLECTION</h2 >
                </div >
              </div>
                        }
       
                     {
                        bank_amount.length === 0 ? <p className='text-center'><Loading/></p> :
                        bank_amount.map(bnk_amount => <Pr_amount_details key={bnk_amount.id} bnk_amount={bnk_amount}></Pr_amount_details>)

                    }


         
        

        </div>
    );
};

export default Pr_amount;