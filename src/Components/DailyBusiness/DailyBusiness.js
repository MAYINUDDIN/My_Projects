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
import SbTotal from "./SbTotal";
import Total from "./Total";
import TotalBusiness from "./TotalBusiness";
const DailyBusiness = () => {

    const [dailydata, SetDailyData] = useState([]);
    console.log(dailydata);

    const [edailydata, SetEDailyData] = useState([]);
    const [sdailydata, SetSDailyData] = useState([]);
    const [total, SetTotal] = useState([]);

    const [dailydatasb, SetDailyDatasb] = useState([]);


    const [tdata, SetTData] = useState([]);
    console.log(tdata);

    const [fromdate, setFromDate] = useState();
    const [todate, setToDate] = useState();
    console.log(fromdate, todate);

    const [type, setOption] = useState('');

    console.log(type);
    function handleChange(event) {
        setOption(event.target.value)
    }


    const daily = () => {

        fetch(`http://202.164.213.67/payment/daily/sb_business.php?FROM_DATE=${fromdate}&&TOO_DATE=${todate}`)
            .then(Response => Response.json())
            .then(data => {
                const loadedData = data;

                const dData = loadedData.map(ekok => {
                    const d = ekok.OFF_NAME;
                    console.log(d);

                });
                SetDailyDatasb(loadedData);

            });

        fetch(`http://202.164.213.67/payment/daily/ekok_business.php?FROM_DATE=${fromdate}&&TOO_DATE=${todate}`)
            .then(Response => Response.json())
            .then(data => {
                const loadedData = data;

                const dData = loadedData.map(ekok => {
                    const d = ekok.OFF_NAME;
                    console.log(d);

                });
                SetDailyData(loadedData);

            });




        fetch(`http://202.164.213.67/payment/daily/ekoksb.php?FROM_DATE=${fromdate}&&TOO_DATE=${todate}`)
            .then(Response => Response.json())
            .then(data => {
                const loadedTData = data;

                const dData = loadedTData.map(ekok => {
                    const d = ekok.OFF_NAME;
                    console.log(d);

                });
                SetTData(loadedTData);

            });

        fetch(`http://202.164.213.67/payment/daily/ekok_total.php?FROM_DATE=${fromdate}&&TOO_DATE=${todate}`)
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


    return (
        <div>

            <div class="stats px-6 bg-success rounded mt-2 text-primary-content">

                <div class="stat">
                    <div className="flex text-center align-items-center">
                        <p className="text-sm font-bold mr-3">FROM DATE :   </p>
                        <input className="text-dark shadow rounded p-2 text-center" type="date" onChange={e => setFromDate(e.target.value)} />
                        {/* <h3 className="mt-5">Selected Date{date}</h3> */}

                    </div>

                </div>


                <div class="stat">
                    <div className="flex text-center align-items-center">
                        <p className="text-sm font-bold mr-3">TO DATE :</p>
                        <input className="text-dark shadow rounded p-2 text-center" type="date" onChange={e => setToDate(e.target.value)} />
                        {/* <Link to={`/Daily_business=${fromdate}=${todate}`}>   <button className=" m-3 btn-info text-white btn-sm bg-[#4fc3f7] uppercase">Submit</button></Link> */}

                        {/* <div className="flex text-center text-dark align-items-center ml-3">
                            <select className="text-dark shadow rounded p-2 pl-5 px-12 text-center" name='option' onChange={handleChange}>
                                <option >Select Type</option>
                                <option value="EKOK">EKOK</option>
                                <option value="SB">SB</option>

                            </select>
                        </div> */}


                        <button onClick={daily} className=" m-3 btn-primary  text-white btn-md px-10 text-lg rounded bg-[#002f6c] uppercase">Submit</button>
                        {/* <button onClick={total} className=" m-3 btn-primary  text-white btn-md px-10 text-lg rounded bg-[#002f6c] uppercase">For Total</button> */}

                        {/* <h3 className="mt-5">Selected Date{date}</h3> */}
                    </div>
                </div>




            </div>

            {
                dailydata.length === 0 ? <p className='text-center'></p> :


                    <div className="mt-2">
                        <div class="grid grid-cols-1 gap-1 mt-1 p-0 ml-2 mr-2 items-align-center">
                            <div className="flex">

                                <div class="stat w-full bg-[#0077c2] text-white font-bold bordered ">
                                    < h2 className='text-center bordered rounded '>EKOK</h2 >
                                </div >
                                <div class="stat w-full ml-0 bg-[#0077c2] text-white font-bold bordered ">
                                    < h2 className='text-center bordered rounded '>SHARBAJANIN</h2 >
                                </div >
                            </div>
                        </div>

                        <div class="grid grid-cols-1 lg:grid-cols-1  gap-1 mt-1 p-0 ml-2 mr-2 ">
                            <div className="flex ">
                                <div className="ml-0 flex  w-full">
                                    <div class="stat w-1/4  bg-[#005b4f] text-white font-bold bordered rounded">
                                        < h2 className='text-left bordered rounded text-sm'>DIVISION NAME</h2 >
                                    </div >

                                    <div class="stat w-1/4 bg-[#0095a8] text-white font-bold bordered rounded ml-1">
                                        <h2 className='text-right'>FIRST YEAR</h2>
                                    </div>

                                    <div class="stat w-1/4  bg-[#0095a8] text-white font-bold bordered ml-1 rounded">
                                        <h2 className='text-right'>RENEWAL</h2>
                                    </div>
                                    <div class="stat w-1/4  bg-[#0095a8] text-white font-bold bordered ml-1 rounded">
                                        <h2 className='text-right'>TOTAL</h2>
                                    </div>
                                </div>

                                <div className="ml-2 flex  w-full">
                                    <div class="stat w-1/3  bg-[#0095a8] text-white font-bold bordered rounded">
                                        < h2 className='text-right bordered rounded '>FIRST YEAR</h2 >
                                    </div >

                                    <div class="stat w-1/3  bg-[#0095a8] text-white font-bold bordered rounded ml-1">
                                        <h2 className='text-right'>RENEWAL</h2>
                                    </div>

                                    <div class="stat w-1/3  bg-[#0095a8] text-white font-bold bordered ml-1 rounded">
                                        <h2 className='text-right'>TOTAL</h2>
                                    </div>

                                </div>


                                <div className="flex  w-60">

                                    <div class="stat w-48  bg-[#005b4f] text-white font-bold bordered ml-1 rounded">
                                        <h2 className='text-right'>TOTAL(EKOK+SB)</h2>
                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>

            }

            {/* <div class="grid grid-cols-1 gap-1 mt-1 "> */}
            {/* <h1 className=" text-success text-2xl font-bold">DAILY BUSINESS REPORT  <span className='text-fareast text-dark  font-bold text-lg'> (From Date: {fromdate} To Date: {todate})</span> </h1> */}

            <div class="grid grid-cols-1  gap-1 mt-0 p-0 ml-2 mr-2 ">
                <div className="flex">
                    <div className="w-full">
                        {
                            dailydata.length === 0 ? <p className='text-center'></p> :
                                dailydata.map(dailyy => <Daily key={dailyy.id} dailyy={dailyy}></Daily>)

                        }

                        {
                            edailydata.length === 0 ? <p className='text-center'></p> :
                                edailydata.map(edaily => <EkokTotal key={edaily.id} edaily={edaily}></EkokTotal>)

                        }

                    </div>
                    <div className="w-full mb-3">

                        {
                            dailydatasb.length === 0 ? <p className='text-center'></p> :
                                dailydatasb.map(dailyysb => <Daily_sb key={dailyysb.id} dailyysb={dailyysb}></Daily_sb>)

                        }

                        {
                            sdailydata.length === 0 ? <p className='text-center'></p> :
                                sdailydata.map(sdaily => <SbTotal key={sdaily.id} sdaily={sdaily}></SbTotal>)

                        }

                    </div>
                    <div className=" mb-3">
                        {
                            tdata.length === 0 ? <p className='text-center'></p> :
                                tdata.map(totl => <TotalBusiness key={totl.id} totl={totl}></TotalBusiness>)
                        }

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