import React from 'react';

const Total = ({ ddd }) => {
    const { TOTAL } = ddd;
    return (
  
            <div className='lg:px-24  lg:ml-12  mt-1 justify-center p-0'>
         
                
                    <div className='shadow-lg p-0 bg-success lg:ml-0  text-white text-end rounded'
                    style={{ textTransform: 'uppercase' }}>
                    <h1 className=' lg:p-1 p-2 lg:ml-0 lg:mr-5 lg:text-md font-bold ' >TOTAL: {TOTAL}</h1> 
                  
                   </div>
         
        </div>
    );
};

export default Total;