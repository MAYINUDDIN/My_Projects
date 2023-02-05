import React from 'react';

const Prinfo = ({dd}) => {
       
    const{INSTALNO,PR_NO,PR_DATE,PREM_AMOUNT}=dd

    return (
        <div>
              <div className='lg:px-24 grid lg:grid-cols-4 gap-0 lg:ml-12  mt-1 justify-center p-0'>
                <div className='shadow-lg p-0 bg-[#03a9f4]  text-white text-start rounded'
                    style={{ textTransform: 'uppercase' }}>
                    <h1 className=' lg:p-1 p-1 lg:ml-2 lg:text-md text-center ' > {INSTALNO}</h1> 
                </div>
                 <div className='shadow-lg p-0 bg-[#03a9f4] lg:ml-1  text-white text-start rounded'
                    style={{ textTransform: 'uppercase' }}>
                    <h1 className=' lg:p-1 p-2 lg:ml-2 lg:text-md ' > {PR_NO}</h1> 
                  
                </div>
                    <div className='shadow-lg p-0 bg-[#03a9f4] lg:ml-1  text-white text-start rounded'
                    style={{ textTransform: 'uppercase' }}>
                    <h1 className=' lg:p-1 p-2 lg:ml-2 lg:text-md ' > {PR_DATE}</h1> 
                 
                </div>
                
                    <div className='shadow-lg p-0 bg-[#03a9f4] lg:ml-1  text-white text-start rounded'
                    style={{ textTransform: 'uppercase' }}>
                    <h1 className=' lg:p-1 p-2 lg:ml-2 lg:text-md ' > {PREM_AMOUNT}</h1> 
                  
                   </div>
         
            </div>
        </div>
    );
};

export default Prinfo;