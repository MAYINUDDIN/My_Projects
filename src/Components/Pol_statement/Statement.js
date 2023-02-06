import React, { useState } from 'react';
import pic from '../asset/pol_s.gif';
import Loading from '../Loading';
import Prinfo from './Prinfo';
import Statement_details from './Statement_details';
import Total from './Total';
const Statement = () => {

    const [statement, setStatement] = useState([]); 
    const [statementt, setStatementt] = useState([]);  
      const [total, setTotal] = useState([]);
    console.log(statement);
    // console.log(statementt);
        const StatementResult = event => {
        event.preventDefault();
        const pol_no = event.target.pol_no.value;
   
          
            fetch(`http://202.164.213.67/payment/statement/statement.php?POLICY_NO=${pol_no}`)
            .then(Response => Response.json())
            .then(data=>setStatement(data['polinfo']))
        
        fetch(`http://202.164.213.67/payment/statement/pr_statement.php?POLICY_NO=${pol_no}`)
            .then(Response => Response.json())
                .then(data => setStatementt(data['polinfo']))  
            
            
         fetch(`http://202.164.213.67/payment/statement/pr_total.php?POLICY_NO=${pol_no}`)
            .then(Response => Response.json())
            .then(data=>setTotal(data['polinfo']))  
    }

    return (
       <div>
            <h2 className='font-bold lg:text-2xl mt-3 text-secondary drop-shadow'> <span className='text-success lg:text-3xl'>POLICY ONLINE STATEMENT</span>  </h2>
            <div class="grid lg:grid-cols-2 gap-2 lg:px-10  mt-4 mb-5 place-content-center">

                <div class="">
                    <img src={pic} class="w-96 h-full md:w-1/2 md:h-full lg:w-full lg:ml-10  lg:h-full rounded shadow-lg" />
                </div>

                <div className='justify-center  mt-0'>

                    <div className='p-5 shadow-lg lg:w-full   lg:ml-12 h-36 lg:p-12 '>
                        {/* <h1 className='text-primary text-lg mb-2 font-bold drop-shadow'>POLICY STATEMENT</h1> */}

                        <form  onSubmit={StatementResult} >
                            <div className='mt-0 flex'>
                                <input type="number" placeholder="Enter Policy Number" name='pol_no' class="input font-bold lg:h-14 h-10 input-bordered rounded input-success lg:w-full max-w-lg" required />
                                <input type="submit" value='SUBMIT' class="input bg-success text-white font-bold lg:h-14 h-10 input-bordered rounded input-success w-1/2 ml-1 max-w-lg" required />

                            </div>
                        </form>
                    </div>

                    {
                        statement.length === 0 ? <p className='text-center'></p> :
                        statement.map(d => <Statement_details key={d.id} d={d}></Statement_details>)

                    }
                      
                    
                      {
                        statementt.length === 0 ? <p className='text-center'></p> :
                       
 <div className='lg:px-24 grid lg:grid-cols-4 gap-0 lg:ml-12  mt-2 justify-center p-0'>
                <div className='shadow-lg p-0 bg-[#2e7d32]  text-white text-start rounded'
                    style={{ textTransform: 'uppercase' }}>
                    <h1 className=' lg:p-1 p-2 lg:ml-2 lg:text-md font-bold' >INSTALNO</h1> 
                </div>
                 <div className='shadow-lg p-0 bg-[#2e7d32] lg:ml-1  text-white text-start rounded'
                    style={{ textTransform: 'uppercase' }}>
                    <h1 className=' lg:p-1 p-2 lg:ml-2 lg:text-md font-bold' > PR_NO</h1> 
                  
                </div>
                    <div className='shadow-lg p-0 bg-[#2e7d32] lg:ml-1  text-white text-start rounded'
                    style={{ textTransform: 'uppercase' }}>
                    <h1 className=' lg:p-1 p-2 lg:ml-2 lg:text-md font-bold' > PR_DATE</h1> 
                 
                </div>
                
                    <div className='shadow-lg p-0 bg-[#2e7d32] lg:ml-1  text-white text-start rounded'
                    style={{ textTransform: 'uppercase' }}>
                    <h1 className=' lg:p-1 p-2 lg:ml-2 lg:text-md font-bold' > PREM_AMOUNT</h1> 
                  
                   </div>
         
                    </div>
                        }
                        {
                        statementt.length === 0 ? <p className='text-center'></p> :
                        statementt.map(dd => <Prinfo key={dd.id} dd={dd}></Prinfo>)

                        }
                       {
                        total.length === 0 ? <p className='text-center'></p> :
                        total.map(ddd => <Total key={ddd.id} ddd={ddd}></Total>)

                    }


                </div>
            </div>


        </div>
    );
};

export default Statement;