import axios from "axios";
import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { Link } from "react-router-dom";
import Loading from "../Loading";
import Daily from "./Daily";
import DailybusinessDetails from "./DailybusinessDetails";
import Daily_sb from "./Daily_sb";
import EkokTotal from "./EkokTotal";
import Final_business from "./Final_business";
import SbTotal from "./SbTotal";
import Total from "./Total";
import TotalBusiness from "./TotalBusiness";
const DailyBusiness = () => {


    const [finaldata, SetFinalData] = useState([]);
    // console.log(finaldata);
    const [edailydata, SetEDailyData] = useState([]);
    // console.log(edailydata);

    const [dailydata, SetDailyData] = useState([]);
    // console.log(dailydata);

    const [sdailydata, SetSDailyData] = useState([]);
    const [total, SetTotal] = useState([]);
    console.log(total);
    const [dailydatasb, SetDailyDatasb] = useState([]);


    const [tdata, SetTData] = useState([]);
    console.log(tdata);

    const [fromdate, setFromDate] = useState();
    const [todate, setToDate] = useState();
    console.log(fromdate, todate);

    const [type, setOption] = useState('4');

    console.log(type);
    function handleChange(event) {
        setOption(event.target.value)
    }
   

        const final = () => {

        fetch(`http://202.164.213.67/payment/daily/final.php?FROM_DATE=${fromdate}&&TOO_DATE=${todate}&&OFF_TYPE=${type}`)
            .then(Response => Response.json())
            .then(data => {
                const loadedData = data;

                const dData = loadedData.map(ekok => {
                    const d = ekok.OFF_NAME;
                    // console.log(d);

                });
                SetFinalData(loadedData);

            });

            fetch(`http://202.164.213.67/payment/daily/ekok_total.php?FROM_DATE=${fromdate}&&TOO_DATE=${todate}&&OFF_TYPE=${type}`)
            .then(Response => Response.json())
            .then(data => {
                const loadedTData = data;

                const dData = loadedTData.map(ekok => {
                    const d = ekok.OFF_NAME;
                    console.log(d);

                });
                SetEDailyData(loadedTData);

            });

                 fetch(`http://202.164.213.67/payment/daily/sb_total.php?FROM_DATE=${fromdate}&&TOO_DATE=${todate}`)
            .then(Response => Response.json())
            .then(data => {
                const loadedTData = data;

                const dData = loadedTData.map(ekok => {
                    const d = ekok.OFF_NAME;
                    console.log(d);

                });
                SetSDailyData(loadedTData);

            });

                    fetch(`http://202.164.213.67/payment/daily/all_total.php?FROM_DATE=${fromdate}&&TOO_DATE=${todate}`)
            .then(Response => Response.json())
            .then(data => {
                const loadedTData = data;

                const dData = loadedTData.map(ekok => {
                    const d = ekok.OFF_NAME;
                    console.log(d);

                });
                SetTotal(loadedTData);

            });
       

    }


    // const daily = () => {

    //     fetch(`http://202.164.213.67/payment/daily/sb_business.php?FROM_DATE=${fromdate}&&TOO_DATE=${todate}`)
    //         .then(Response => Response.json())
    //         .then(data => {
    //             const loadedData = data;

    //             const dData = loadedData.map(ekok => {
    //                 const d = ekok.OFF_NAME;
    //                 console.log(d);

    //             });
    //             SetDailyDatasb(loadedData);

    //         });

    //     fetch(`http://202.164.213.67/payment/daily/ekok_business.php?FROM_DATE=${fromdate}&&TOO_DATE=${todate}`)
    //         .then(Response => Response.json())
    //         .then(data => {
    //             const loadedData = data;

    //             const dData = loadedData.map(ekok => {
    //                 const d = ekok.OFF_NAME;
    //                 console.log(d);

    //             });
    //             SetDailyData(loadedData);

    //         });




    //     fetch(`http://202.164.213.67/payment/daily/ekoksb.php?FROM_DATE=${fromdate}&&TOO_DATE=${todate}`)
    //         .then(Response => Response.json())
    //         .then(data => {
    //             const loadedTData = data;

    //             const dData = loadedTData.map(ekok => {
    //                 const d = ekok.OFF_NAME;
    //                 console.log(d);

    //             });
    //             SetTData(loadedTData);

    //         });

    //     fetch(`http://202.164.213.67/payment/daily/ekok_total.php?FROM_DATE=${fromdate}&&TOO_DATE=${todate}`)
    //         .then(Response => Response.json())
    //         .then(data => {
    //             const loadedTData = data;

    //             const dData = loadedTData.map(ekok => {
    //                 const d = ekok.OFF_NAME;
    //                 console.log(d);

    //             });
    //             SetEDailyData(loadedTData);

    //         });

    //     fetch(`http://202.164.213.67/payment/daily/sb_total.php?FROM_DATE=${fromdate}&&TOO_DATE=${todate}`)
    //         .then(Response => Response.json())
    //         .then(data => {
    //             const loadedTData = data;

    //             const dData = loadedTData.map(ekok => {
    //                 const d = ekok.OFF_NAME;
    //                 console.log(d);

    //             });
    //             SetSDailyData(loadedTData);

    //         });


    //     fetch(`http://202.164.213.67/payment/daily/all_total.php?FROM_DATE=${fromdate}&&TOO_DATE=${todate}`)
    //         .then(Response => Response.json())
    //         .then(data => {
    //             const loadedTData = data;

    //             const dData = loadedTData.map(ekok => {
    //                 const d = ekok.OFF_NAME;
    //                 console.log(d);

    //             });
    //             SetTotal(loadedTData);

    //         });


    // }


    return (
        <div>

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
                        <input className="text-dark shadow rounded p-2 text-center" type="date" onChange={e => setToDate(e.target.value)} />
                        {/* <Link to={`/Daily_business=${fromdate}=${todate}`}>   <button className=" m-3 btn-info text-white btn-sm bg-[#4fc3f7] uppercase">Submit</button></Link> */}

                        <div className="flex text-center text-dark align-items-center ml-3">
                            <select className="text-dark shadow rounded p-2 pl-5 px-12 text-center" name='option' onChange={handleChange}>
                                {/* <option >Select Type</option> */}
                                <option className="text-left" value="4">DIVISION</option>
                                <option className="text-left" value="3">SERVICE CENTER</option>
                                 <option className="text-left" value="2">ZONAL OFFICE</option>
                                <option className="text-left" value="1">BRANCH OFFICE</option>

                            </select>
                        </div>


                        <button onClick={final} className=" m-3 btn-primary  text-white btn-md px-10 text-lg rounded bg-[#002f6c] uppercase">Submit</button>
                        {/* <button onClick={total} className=" m-3 btn-primary  text-white btn-md px-10 text-lg rounded bg-[#002f6c] uppercase">For Total</button> */}

                        {/* <h3 className="mt-5">Selected Date{date}</h3> */}
                    </div>
                </div>




            </div>

       

            {
             
                
                finaldata.length === 0 ? <p className='text-center font-sm'><Loading/></p> :
                    
                       <div className="ml-0 mt-5 flex justify-center w-full">
                        
                                    <div class="stat w-48  bg-[#005b4f] text-white font-bold bordered ">
                                        < h2 className='text-left bordered rounded text-sm  font-bold'></h2 >
                                    </div >

                                    <div class="stat w-32 bg-[#005b4f] text-white  bordered  ml-0">
                                        <h2 className='text-sm font-bold'></h2>
                                    </div>

                                    <div class="stat w-32  bg-[#005b4f] text-white font-bold bordered ml-0 ">
                                        <h2 className='text-lg font-bold'>EKOK</h2>
                                    </div>
                                    <div class="stat w-48  bg-[#005b4f] text-white font-bold bordered ml-0 ">
                                        <h2 className='text-sm'></h2>
                                    </div>
                                    
                                   <div class="stat w-32 ml-0  bg-[#005b4f] text-white font-bold bordered ">
                                        < h2 className='text-sm bordered rounded '></h2 >
                                    </div >

                                    <div class="stat w-80  bg-[#005b4f] text-white font-bold bordered  ml-0">
                                        <h2 className='text-lg font-bold text-left'>SHARBOJANIN</h2>
                                    </div>


                                   
                    
                                <div class="stat w-32  bg-[#005b4f] text-white font-bold bordered  ml-0">
                                        <h2 className='text-sm'></h2>
                                    </div>
                                    <div class="stat w-80  bg-[#005b4f] text-white font-bold bordered ">
                                        <h2 className='text-lg text-left '>TOTAL (EKOK+SB)</h2>
                                    </div>

                                  
                                </div>

              }
            {
             
                
                finaldata.length === 0 ? <p className='text-center'></p> :
                    
                    <div className="ml-0 mt-1 flex justify-center w-96  lg:w-full">

                                    <div class="stat w-40  bg-[#005b4f] text-white font-bold bordered rounded">
                                        < h2 className='text-left bordered rounded text-sm  font-bold'>DIVISION NAME</h2 >
                                    </div >

                                    <div class="stat w-32 bg-[#004ecb] text-white  bordered rounded ml-1">
                                        <h2 className='text-sm font-bold'>FIRST YEAR</h2>
                                    </div>

                                    <div class="stat w-32  bg-[#004ecb] text-white font-bold bordered ml-1 rounded">
                                        <h2 className='text-sm font-bold'>RENEWAL</h2>
                                    </div>
                                    <div class="stat w-48  bg-[#004ecb] text-white font-bold bordered ml-1 rounded">
                                        <h2 className='text-sm'>TOTAL (EKOK)</h2>
                                    </div>
                                    
                                   <div class="stat w-32 ml-1  bg-[#004ecb] text-white font-bold bordered rounded">
                                        < h2 className='text-sm bordered rounded '>FIRST YEAR</h2 >
                                    </div >

                                    <div class="stat w-32  bg-[#004ecb] text-white font-bold bordered rounded ml-1">
                                        <h2 className='text-sm'>RENEWAL</h2>
                                    </div>


                                    <div class="stat w-48  bg-[#004ecb] text-white font-bold bordered ml-1 rounded">
                                        <h2 className='text-sm text-center'>TOTAL (SB)</h2>
                                     </div>
                    
                                <div class="stat w-32  bg-[#005b4f] text-white font-bold bordered rounded ml-1">
                                        <h2 className='text-sm'>TOTAL FY</h2>
                                    </div>
                                    <div class="stat w-32  bg-[#005b4f] text-white font-bold bordered rounded ml-1">
                                        <h2 className='text-sm'>TOTAL REN</h2>
                                    </div>

                                    <div class="stat w-48 bg-[#005b4f] text-white font-bold bordered ml-1 rounded">
                                        <h2 className='text-sm text-left'>TOTAL(EKOK+SB)</h2>
                                    </div>
                                </div>

              }
                  
             <div className=" mb-3">
                
                        {
                            finaldata.length === 0 ? <p className='text-center'></p> :
                                finaldata.map(f => <Final_business key={f.id} f={f}></Final_business>)
                }
                
                <div className="ml-0 mt-1 flex justify-center  w-full">
                     <div className=" mb-3">
                         {
                            edailydata.length === 0 ? <p className='text-center'></p> :
                                edailydata.map(edaily => <EkokTotal key={edaily.id} edaily={edaily}></EkokTotal>)
                           
                         }
                    </div>
                        <div className=" mb-3">  
                    {
                            sdailydata.length === 0 ? <p className='text-center'></p> :
                            sdailydata.map(sdaily => <SbTotal key={sdaily.id} sdaily={sdaily}></SbTotal>)

                        }
                    </div>
                     <div className=" mb-3">  
                 
                       {
                            total.length === 0 ? <p className='text-center'></p> :
                                total.map(totll => <Total key={totll.id} totll={totll}></Total>)
                        }
                        </div>
                      
                    </div>

               </div>

            
        

        </div>


    );
};

export default DailyBusiness;