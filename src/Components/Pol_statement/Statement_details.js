import React from 'react';

const Statement_details = ({ d }) => {
    
    const { POLICY_NUMBER, NAME, SUM_ASSURED, INST_PREM, INST_MODE, RISK_DATE, MATURITY, TERM,
    NEXTPREM,STATUS} = d;


    return (
            <div>
            <div className='lg:px-24 grid lg:grid-cols-2 gap-0 lg:ml-12  mt-3 justify-center p-0'>
                <div className='shadow-lg p-0 bg-success  text-white text-start rounded'
                    style={{ textTransform: 'uppercase' }}>
                    <h1 className=' lg:p-1 p-2 lg:ml-2 lg:text-md font-bold' > {NAME}</h1> 
                    <hr className='text-white ' />
                    <h1 className=' lg:p-1 p-2 lg:ml-2'>Policy Num: {POLICY_NUMBER}</h1>
                             <hr className='text-white' />
                <h1 className='lg:p-1 p-2 lg:ml-2'>SUM ASSURED: {SUM_ASSURED}</h1>
                 <hr className='text-white' />
                <h1 className='lg:p-1 p-2 lg:ml-2'>INST PREM: {INST_PREM}</h1>
                 <hr className='text-white' />
                  <h1 className='lg:p-1 p-2 lg:ml-2'>INST MODE: { INST_MODE}</h1>
            </div>
                <div className='shadow-lg p-0 bg-success  ml-3 text-white text-start rounded'
                    style={{ textTransform: 'uppercase' }}>
                    <h1 className=' lg:p-1 p-2 lg:ml-2 ' >Risk date: {RISK_DATE}</h1> 
                    <hr className='text-white ' />
                    <h1 className=' lg:p-1 p-2 lg:ml-2'>Maturity: {MATURITY}</h1>
                <hr className='text-white' />
                   <h1 className=' lg:p-1 p-2 lg:ml-2'>Next payment: {NEXTPREM}</h1>
                             <hr className='text-white' />
                <h1 className='lg:p-1 p-2 lg:ml-2'>Table & Term: {TERM}</h1>
                 <hr className='text-white' />
                <h1 className='lg:p-1 p-2 lg:ml-2'>STATUS: {STATUS}</h1>
                 <hr className='text-white' />
                 
                </div>
            </div>
        </div>
      
    );
};

export default Statement_details;