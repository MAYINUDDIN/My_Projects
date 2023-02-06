import React from 'react';

const BeftnDetails = ({bftn}) => {
        
    const { FUND_NO, PAYMENT_INFO, PROPOSER, AMOUNT, BANK_NAME, BRANCH_NAME, ROUT_NO,
    POLICY_NO, ACC_NO, PAYTO, LOTNO, LOT_DATE, BATCHNO, BATCH_DATE, RETURN_BATCH_DATE, INSTALNO,
        BEFTN, REFNO, FUND_CREATE_DATE, PAY_STATUS, BANK_POSTING_DATE, success } = bftn;
    
    // if (success == 0) {
    //     alert('please type proper policy');
    //     }
    

    return (
        <div className='lg:px-48'>


              <div className='lg:px-48 grid lg:grid-cols-2 gap-0 lg:ml-12 shadow p-3  mt-3 justify-center p-0'>
                <div className=' p-0   text-white text-start rounded'
                    style={{ textTransform: 'uppercase' }}>
                 <h2 className='font-bold lg:text-2xl mt-3 text-center text-secondary drop-shadow'> <span className='text-primary lg:text-xl'>BASIC INFORMATION</span></h2>
            <div className='flex mt-2 justify-center p-0'>
                <div className='shadow-lg lg:w-48 p-1 bg-[#1565c0]  text-white text-start'
                    style={{ textTransform: 'uppercase' }}>
                    <h1 className=' lg:p-1 p-2 text-end  lg:text-md ' > POLICY NUMBER:</h1> 
               </div> 
                 <div className='shadow-lg lg:w-96 p-1 bg-[#03a9f4]  text-white text-start'
                    style={{ textTransform: 'uppercase' }}>
                    <h1 className=' lg:p-1 p-2  lg:text-md ' > {POLICY_NO}</h1> 
            </div> 
            
        </div>
           <div className='flex mt-0.5 justify-center p-0'>
                <div className='shadow-lg lg:w-48 p-1 bg-[#1565c0]  text-white text-start'
                    style={{ textTransform: 'uppercase' }}>
                    <h1 className=' lg:p-1 p-2 text-end  lg:text-md ' > PROPOSER:</h1> 
               </div> 
                 <div className='shadow-lg lg:w-96 p-1 bg-[#03a9f4]  text-white text-start'
                    style={{ textTransform: 'uppercase' }}>
                    <h1 className=' lg:p-1 p-2  lg:text-md ' > {PROPOSER}</h1> 
            </div> 
            
                    </div>
                    
    
                    
  <h2 className='font-bold lg:text-2xl mt-1 text-secondary text-center drop-shadow'> <span className='text-primary lg:text-xl'>PAYMENT DETAILS</span></h2>
            <div className='flex mt-2 justify-center p-0'>
                <div className='shadow-lg lg:w-48 p-1 bg-[#1565c0]  text-white text-start'
                    style={{ textTransform: 'uppercase' }}>
                    <h1 className=' lg:p-1 p-2 text-end  lg:text-md ' > PAYMENT TYPE</h1> 
               </div> 
            <div className='shadow-lg lg:w-96 lg:ml-0.5 p-1 bg-[#1565c0]  text-white text-center'
                    style={{ textTransform: 'uppercase' }}>
                    <h1 className=' lg:p-1 p-2   lg:text-md ' > AMOUNT</h1> 
            </div> 
            
            </div>
            
            <div className='flex mt-0.5 justify-center p-0'>
                <div className='shadow-lg lg:w-48 p-1 bg-[#00acc1]  text-white text-start'
                    style={{ textTransform: 'uppercase' }}>
                    <h1 className=' lg:p-1 p-2 text-end  lg:text-md ' >{PAYTO}</h1> 
               </div> 
            <div className='shadow-lg lg:w-96 lg:ml-0.5 p-1 bg-[#00acc1]  text-white text-center'
                    style={{ textTransform: 'uppercase' }}>
                    <h1 className=' lg:p-1 p-2   lg:text-md ' > { AMOUNT}</h1> 
            </div> 
            
                    </div>
                    

                           <h2 className='font-bold lg:text-2xl mt-3 text-center text-secondary drop-shadow'> <span className='text-primary lg:text-xl'>BANK INFORMATION</span></h2>
            <div className='flex mt-2 justify-center p-0'>
                <div className='shadow-lg lg:w-48 p-1 bg-[#1565c0]  text-white text-start'
                    style={{ textTransform: 'uppercase' }}>
                    <h1 className=' lg:p-1 p-2 text-end  lg:text-md ' > BANK NAME:</h1> 
               </div> 
                 <div className='shadow-lg lg:w-96 p-1 bg-[#03a9f4]  text-white text-start'
                    style={{ textTransform: 'uppercase' }}>
                    <h1 className=' lg:p-1 p-2  lg:text-md ' > {BANK_NAME}</h1> 
            </div> 
            
        </div>
           <div className='flex mt-0.5 justify-center p-0'>
                <div className='shadow-lg lg:w-48 p-1 bg-[#1565c0]  text-white text-start'
                    style={{ textTransform: 'uppercase' }}>
                    <h1 className=' lg:p-1 p-2 text-end  lg:text-md ' > BRANCH NAME:</h1> 
               </div> 
                 <div className='shadow-lg lg:w-96 p-1 bg-[#03a9f4]  text-white text-start'
                    style={{ textTransform: 'uppercase' }}>
                    <h1 className=' lg:p-1 p-2  lg:text-md ' > {BRANCH_NAME}</h1> 
                </div> 
                
            </div>
                <div className='flex mt-0.5 justify-center p-0'>
                <div className='shadow-lg lg:w-48 p-1 bg-[#1565c0]  text-white text-start'
                    style={{ textTransform: 'uppercase' }}>
                    <h1 className=' lg:p-1 p-2 text-end  lg:text-md ' > ROUT NO:</h1> 
               </div> 
                 <div className='shadow-lg lg:w-96 p-1 bg-[#03a9f4]  text-white text-start'
                    style={{ textTransform: 'uppercase' }}>
                    <h1 className=' lg:p-1 p-2  lg:text-md ' > {ROUT_NO}</h1> 
                </div> 
                
            </div>
                    <div className='flex mt-0.5 justify-center p-0'>
                <div className='shadow-lg lg:w-48 p-1 bg-[#1565c0]  text-white text-start'
                    style={{ textTransform: 'uppercase' }}>
                    <h1 className=' lg:p-1 p-2 text-end  lg:text-md ' > ACC NO:</h1> 
               </div> 
                 <div className='shadow-lg lg:w-96 p-1 bg-[#03a9f4]  text-white text-start'
                    style={{ textTransform: 'uppercase' }}>
                    <h1 className=' lg:p-1 p-2  lg:text-md ' > {ACC_NO}</h1> 
                </div> 
                
            </div>
                      <div className='flex mt-0.5 justify-center p-0'>
                <div className='shadow-lg lg:w-48 p-1 bg-[#1565c0]  text-white text-start'
                    style={{ textTransform: 'uppercase' }}>
                    <h1 className=' lg:p-1 p-2 text-end  lg:text-md ' > PAY STATUS:</h1> 
               </div> 
                 <div className='shadow-lg lg:w-96 p-1 bg-[#03a9f4]  text-white text-start'
                    style={{ textTransform: 'uppercase' }}>
                    <h1 className=' lg:p-1 p-2  lg:text-md ' > {PAY_STATUS}</h1> 
                </div> 
                
            </div>

                      <div className='flex mt-0.5 justify-center p-0'>
                <div className='shadow-lg lg:w-48 p-1 bg-[#1565c0]  text-white text-start'
                    style={{ textTransform: 'uppercase' }}>
                    <h1 className=' lg:p-1 p-2 text-end  lg:text-md ' > BANK POSTING DATE:</h1> 
               </div> 
                 <div className='shadow-lg lg:w-96 p-1 bg-[#03a9f4]  text-white text-start'
                    style={{ textTransform: 'uppercase' }}>
                    <h1 className=' lg:p-1 p-2  lg:text-md ' > {BANK_POSTING_DATE}</h1> 
                </div> 
                
            </div>


           
                    
                    
                </div>
                

                <div className=' p-0   ml-3 text-white text-start rounded'
                    style={{ textTransform: 'uppercase' }}>
            <h2 className='font-bold lg:text-2xl mt-3 text-center text-secondary drop-shadow'> <span className='text-primary lg:text-xl'>OTHERS INFORMATION</span></h2>
            <div className='flex mt-2 justify-center p-0'>
                <div className='shadow-lg lg:w-48 p-1 bg-[#1565c0]  text-white text-start'
                    style={{ textTransform: 'uppercase' }}>
                    <h1 className=' lg:p-1 p-2 text-end  lg:text-md ' > PAYMENT INFO:</h1> 
               </div> 
            <div className='shadow-lg lg:w-96 p-1 bg-[#03a9f4]  text-white text-start'
                    style={{ textTransform: 'uppercase' }}>
                    <h1 className=' lg:p-1 p-2   lg:text-md ' > { PAYMENT_INFO}</h1> 
            </div> 
            
            </div>
                      <div className='flex mt-0.5 justify-center p-0'>
                <div className='shadow-lg lg:w-48 p-1 bg-[#1565c0]  text-white text-start'
                    style={{ textTransform: 'uppercase' }}>
                    <h1 className=' lg:p-1 p-2 text-end  lg:text-md ' >LOT NO:</h1> 
               </div> 
            <div className='shadow-lg lg:w-96 p-1 bg-[#03a9f4]  text-white text-start'
                    style={{ textTransform: 'uppercase' }}>
                    <h1 className=' lg:p-1 p-2   lg:text-md ' > { LOTNO}</h1> 
            </div> 
            
            </div>
                      <div className='flex mt-0.5 justify-center p-0'>
                <div className='shadow-lg lg:w-48 p-1 bg-[#1565c0]  text-white text-start'
                    style={{ textTransform: 'uppercase' }}>
                    <h1 className=' lg:p-1 p-2 text-end  lg:text-md ' > LOT DATE:</h1> 
               </div> 
            <div className='shadow-lg lg:w-96 p-1 bg-[#03a9f4]  text-white text-start'
                    style={{ textTransform: 'uppercase' }}>
                    <h1 className=' lg:p-1 p-2   lg:text-md ' > { LOT_DATE}</h1> 
            </div> 
            
            </div>
            <div className='flex mt-0.5 justify-center p-0'>
                <div className='shadow-lg lg:w-48 p-1 bg-[#1565c0]  text-white text-start'
                    style={{ textTransform: 'uppercase' }}>
                    <h1 className=' lg:p-1 p-2 text-end  lg:text-md ' > BATCH NO:</h1> 
               </div> 
            <div className='shadow-lg lg:w-96 p-1 bg-[#03a9f4]  text-white text-start'
                    style={{ textTransform: 'uppercase' }}>
                    <h1 className=' lg:p-1 p-2   lg:text-md ' > { BATCHNO}</h1> 
            </div> 
            
            </div>

            <div className='flex mt-0.5 justify-center p-0'>
                <div className='shadow-lg lg:w-48 p-1 bg-[#1565c0]  text-white text-start'
                    style={{ textTransform: 'uppercase' }}>
                    <h1 className=' lg:p-1 p-2 text-end  lg:text-md ' >BATCH DATE:</h1> 
               </div> 
            <div className='shadow-lg lg:w-96 p-1 bg-[#03a9f4]  text-white text-start'
                    style={{ textTransform: 'uppercase' }}>
                    <h1 className=' lg:p-1 p-2   lg:text-md ' > { BATCH_DATE}</h1> 
            </div> 
            
            </div>

            <div className='flex mt-0.5 justify-center p-0'>
                <div className='shadow-lg lg:w-48 p-1 bg-[#1565c0]  text-white text-start'
                    style={{ textTransform: 'uppercase' }}>
                    <h1 className=' lg:p-1 p-2 text-end  lg:text-md ' >AMOUNT:</h1> 
               </div> 
            <div className='shadow-lg lg:w-96 p-1 bg-[#03a9f4]  text-white text-start'
                    style={{ textTransform: 'uppercase' }}>
                    <h1 className=' lg:p-1 p-2   lg:text-md ' > { AMOUNT}</h1> 
            </div> 
            
            </div>
              <div className='flex mt-0.5 justify-center p-0'>
                <div className='shadow-lg lg:w-48 p-1 bg-[#1565c0]  text-white text-start'
                    style={{ textTransform: 'uppercase' }}>
                    <h1 className=' lg:p-1 p-2 text-end  lg:text-md ' >FUND NO:</h1> 
               </div> 
            <div className='shadow-lg lg:w-96 p-1 bg-[#03a9f4]  text-white text-start'
                    style={{ textTransform: 'uppercase' }}>
                    <h1 className=' lg:p-1 p-2   lg:text-md ' > { FUND_NO}</h1> 
            </div> 
            
            </div>

              <div className='flex mt-0.5 justify-center p-0'>
                <div className='shadow-lg lg:w-48 p-1 bg-[#1565c0]  text-white text-start'
                    style={{ textTransform: 'uppercase' }}>
                    <h1 className=' lg:p-1 p-2 text-end  lg:text-md ' >FUND CREATE DATE:</h1> 
               </div> 
            <div className='shadow-lg lg:w-96 p-1 bg-[#03a9f4]  text-white text-start'
                    style={{ textTransform: 'uppercase' }}>
                    <h1 className=' lg:p-1 p-2   lg:text-md ' > { FUND_CREATE_DATE}</h1> 
            </div> 
            
            </div>

              <div className='flex mt-0.5 justify-center p-0'>
                <div className='shadow-lg lg:w-48 p-1 bg-[#1565c0]  text-white text-start'
                    style={{ textTransform: 'uppercase' }}>
                    <h1 className=' lg:p-1 p-2 text-end  lg:text-md ' >PAYTO:</h1> 
               </div> 
            <div className='shadow-lg lg:w-96 p-1 bg-[#03a9f4]  text-white text-start'
                    style={{ textTransform: 'uppercase' }}>
                    <h1 className=' lg:p-1 p-2   lg:text-md ' > { PAYTO}</h1> 
            </div> 
            
            </div>
              <div className='flex mt-0.5 justify-center p-0'>
                <div className='shadow-lg lg:w-48 p-1 bg-[#1565c0]  text-white text-start'
                    style={{ textTransform: 'uppercase' }}>
                    <h1 className=' lg:p-1 p-2 text-end  lg:text-md ' >RETURN BATCH DATE:</h1> 
               </div> 
            <div className='shadow-lg lg:w-96 p-1 bg-[#03a9f4]  text-white text-start'
                    style={{ textTransform: 'uppercase' }}>
                    <h1 className=' lg:p-1 p-2   lg:text-md ' > { RETURN_BATCH_DATE}</h1> 
            </div> 
            
            </div>
              <div className='flex mt-0.5 justify-center p-0'>
                <div className='shadow-lg lg:w-48 p-1 bg-[#1565c0]  text-white text-start'
                    style={{ textTransform: 'uppercase' }}>
                    <h1 className=' lg:p-1 p-2 text-end  lg:text-md ' >INSTALL:</h1> 
               </div> 
            <div className='shadow-lg lg:w-96 p-1 bg-[#03a9f4]  text-white text-start'
                    style={{ textTransform: 'uppercase' }}>
                    <h1 className=' lg:p-1 p-2   lg:text-md ' > { INSTALNO}</h1> 
            </div> 
            
            </div>

                 <div className='flex mt-0.5 justify-center p-0'>
                <div className='shadow-lg lg:w-48 p-1 bg-[#1565c0]  text-white text-start'
                    style={{ textTransform: 'uppercase' }}>
                    <h1 className=' lg:p-1 p-2 text-end  lg:text-md ' >BEFTN:</h1> 
               </div> 
            <div className='shadow-lg lg:w-96 p-1 bg-[#03a9f4]  text-white text-start'
                    style={{ textTransform: 'uppercase' }}>
                    <h1 className=' lg:p-1 p-2   lg:text-md ' > { BEFTN}</h1> 
            </div> 
            
            </div>

                         <div className='flex mt-0.5 justify-center p-0'>
                <div className='shadow-lg lg:w-48 p-1 bg-[#1565c0]  text-white text-start'
                    style={{ textTransform: 'uppercase' }}>
                    <h1 className=' lg:p-1 p-2 text-end  lg:text-md ' >REF NO:</h1> 
               </div> 
            <div className='shadow-lg lg:w-96 p-1 bg-[#03a9f4]  text-white text-start'
                    style={{ textTransform: 'uppercase' }}>
                    <h1 className=' lg:p-1 p-2   lg:text-md ' > { REFNO}</h1> 
            </div> 
            
            </div>
                 
                </div>
            </div>

            </div>
    );
};

export default BeftnDetails;