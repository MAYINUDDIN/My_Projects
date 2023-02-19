import { format } from 'date-fns';
import React, { useState } from 'react';
import DatePicker from 'react-date-picker';
import Moment from 'react-moment';
import Loading from '../Loading';
import Bank_amount from './Bank_amount';
import Pr_amount_details from './Pr_amount_details';

const Pr_amount = () => {

    const [bank_amount, SetBankAmount] = useState([]);
        const [prr_amount, SetPrrAmount] = useState([]);
    //  console.log(prr_amount);
    const [fromdate, setFromDate] = useState(new Date());
    const [todate, setToDate] = useState();

    // const FrmDate = (format(new Date(fromdate), 'yyyyMMdd'))
//    const ToDate = (format(new Date(todate), 'yyyyMMdd'))
    
// const date = new Date();

// const result = format(fromdate, 'yyyyMMdd');
// console.log(result); 
    

  const pr_amount = () => {
        fetch(`http://202.164.213.67/payment/statement/bank_amount.php?FROM_DATE=${fromdate}&&TOO_DATE=${todate}`)
            .then(Response => Response.json())
          .then(data => SetBankAmount(data)) 
      
        fetch(`http://202.164.213.67/payment/statement/pr_amount.php?FROM_DATE=${fromdate}&&TOO_DATE=${todate}`)
            .then(Response => Response.json())
            .then(data =>SetPrrAmount(data)) 

    };


    return (

          <div>

                        <h2 className='font-bold lg:text-2xl mt-5 text-secondary drop-shadow'> <span className='text-success lg:text-3xl'>BANK & PR COLLECTION INFORMATION</span>  </h2>

            <div class="stats px-6 bg-success rounded mt-2 text-primary-content">

                     <div class="stat">
                    <div className="flex text-center align-items-center">
                        <p className="text-sm font-bold mr-3">FROM DATE :   </p>
                        <input className="text-dark shadow rounded p-2 text-center" dateFormat="MMddyyyy"     type="date" onChange={e => setFromDate(e.target.value)} />
    
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

            <div>
                
            </div>
                      {
                        bank_amount.length === 0 ? <p className='text-center'></p> :
              <div className='lg:px-96 flex gap-0 lg:ml-12  mt-3 justify-center p-0'>
                
              {/* <div class="stat w-24 lg:w-96 mt-0 bg-[#01579b] text-white font-bold bordered ">
                 < h2 className='text-left bordered rounded text-lg font-bold'>BANK DEPOSIT </h2 >
                </div > */}
              
              </div>
                        }
  
                     {
                        bank_amount.length === 0 ? <p className='text-center'><Loading/></p> :
                        bank_amount.map(bnk_amount => <Pr_amount_details key={bnk_amount.id} bnk_amount={bnk_amount}></Pr_amount_details>)

            }
                      {
                        prr_amount.length === 0 ? <p className='text-center'></p> :
              <div className='lg:px-96 flex gap-0 lg:ml-12  mt-1 justify-center p-0'>
                
              {/* <div class="stat w-24 lg:w-96 mt-0 bg-[#01579b] text-white font-bold bordered ">
                 < h2 className='text-left bordered rounded text-lg font-bold'>PR ISSUE</h2 >
                </div > */}
               
              </div>
                        }
            
                       {
                        prr_amount.length === 0 ? <p className='text-center'><Loading/></p> :
                        prr_amount.map(p_amount => <Bank_amount key={p_amount.id} p_amount={p_amount}></Bank_amount>)

                    }


         
        

        </div>
    );
};

export default Pr_amount;