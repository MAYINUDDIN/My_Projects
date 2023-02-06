import React, { useState } from 'react';
import Loading from '../Loading';
import BeftnDetails from './BeftnDetails';
import Beftn_serial from './Beftn_serial';

const Beftn = () => {
    const [type, setOption] = useState('M');
    const [beftn, setBeftn] = useState([]); 
   const [serial, setSerial] = useState([]); 
     console.log(serial);

    function handleChange(event) {
     setOption(event.target.value)
    }

        const BeftnResult = event => {
        event.preventDefault();
        const pol_no = event.target.pol_no.value;
   
          
            fetch(`http://202.164.213.67/android/beftn_web.php?POLICY_NO=${pol_no}&&INSTALNO=${type}`)
            .then(Response => Response.json())
            .then(data=>setBeftn(data))
        
        fetch(`http://202.164.213.67/android/beftns_web.php?POLICY_NO=${pol_no}&&INSTALNO=${type}`)
            .then(Response => Response.json())
                .then(data => setSerial(data))  
            
            
    }



    return (
        <div >
            <h2 className='font-bold lg:text-2xl mt-3 text-secondary drop-shadow'> <span className='text-success lg:text-2xl'>BEFTN ALL INFORMATION</span></h2>
            <div className='stats px-48 py-8 bg-success rounded mt-2 text-primary-content'>
                
            
                    <form onSubmit={BeftnResult} >
                            <div className='mt-0 flex'>
                                <input type="number" placeholder="ENTER POLICY NUMBER" name='pol_no' class="input text-lg font-bold lg:h-12 lg:w-64 text-dark h-10 input-bordered rounded input-success lg:w-full" required />
                                     <div className="flex text-center text-dark align-items-center ml-3">
                            <select className="text-dark shadow  rounded p-2 pl-5 lg:h-12 h-10 lg:w-48 px-12 text-center" name='option' onChange={handleChange}>
                                {/* <option >Select Type</option> */}
                                <option className="text-left bg-success text-white m-2" value="M">MATURITY</option>
                                <option className="text-left bg-success text-white m-2" value="I">INVESTMENT</option>
                                 <option className="text-left bg-success text-white m-2" value="S">SURRENDER</option>
                                <option className="text-left  bg-success text-white m-2" value="1ST">FIRST SB</option>
                                <option className="text-left bg-success text-white m-2" value="2ND">SECOND SB</option>
                                <option className="text-left bg-success text-white m-2" value="3RD">THIRD SB</option>
                                  <option className="text-left bg-success text-white m-2" value="4TH">FOURTH SB</option>

                            </select>
                        </div>
                        <button type="submit" value='SUBMIT'  className="lg:ml-2 btn-primary  text-white btn-md px-10  text-lg rounded bg-[#002f6c] uppercase">Submit</button>
                            </div>
                </form>
                
                  
            </div>
           
                         {/* {
                        beftn.length === 0 ? <p className='text-center'><Loading/></p> :
                        beftn.map(bftn => <BeftnDetails key={bftn.bftn} bftn={bftn}></BeftnDetails>)

            } */}
            
                  <div className=" mb-3">
                         {
                            beftn.length === 0 ? <p className='text-center'></p> :
                                beftn.map(bftn => <BeftnDetails key={bftn.bftn} bftn={bftn}></BeftnDetails>)
                           
                }
              <div className=" mb-3 justify-center">
                         {
                            serial.length === 0 ? <p className='text-center'></p> :
                                serial.map(bftn_s => <Beftn_serial key={bftn_s.bftn_s} bftn_s={bftn_s}></Beftn_serial>)
                           
                         }
                    </div>
            </div>
            
            
                   
        </div>
    );
};

export default Beftn;