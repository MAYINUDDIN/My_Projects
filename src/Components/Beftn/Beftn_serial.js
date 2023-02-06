import React from 'react';

const Beftn_serial = ({ bftn_s }) => {
    const { SL } = bftn_s;
    return (
          <div className='lg:px-96  grid lg:grid-cols-2 gap-0 lg:ml-48 mt-0  justify-center p-2'>
                <div className='flex mt-2 justify-center shadow p-1 ml-10 p-3'>
                <div className='shadow-lg lg:w-48 p-1 bg-[#00838f]  text-white text-start'
                    style={{ textTransform: 'uppercase' }}>
                    <h1 className=' lg:p-1 p-2 text-end  lg:text-md  font-bold' >SERIAL NO:</h1> 
               </div> 
            <div className='shadow-lg lg:w-96 p-1 bg-[#00acc1] font-bold  text-white text-start'
                    style={{ textTransform: 'uppercase' }}>
                    <h1 className=' lg:p-1 p-2   lg:text-md ' > { SL}</h1> 
            </div> 
            
            </div>
        </div>
    );
};

export default Beftn_serial;