import axios from "axios";
import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { Link } from "react-router-dom";
import Daily from "./Daily";
import DailybusinessDetails from "./DailybusinessDetails";
const DailyBusiness = () => {

    const [dailydata, SetDailyData] = useState([]);
    console.log(dailydata);

    const [fromdate, setFromDate] = useState();
    const [todate, setToDate] = useState();
    console.log(fromdate, todate);

    const daily = () => {

        fetch(`http://202.164.213.67/payment/daily_business.php?FROM_DATE=${fromdate}&&TOO_DATE=${todate}`)
            .then(Response => Response.json())
            .then(data => {
                const loadedData = data;
                const dData = loadedData.map(ekok => {
                    const d = ekok.OFF_NAME;
                    console.log(d);

                });
                SetDailyData(loadedData);


            });


    }


    // useEffect(() => {
    //     axios.get(`http://202.164.213.67/payment/daily_business.php?FROM_DATE=${fromdate}&&TOO_DATE=${todate}`)
    //         .then(data => {
    //             const loadedData = data.data;

    //             console.log(loadedData);

    //             // const dData = loadedData.map(ekok => {
    //             //     // const d = ekok.SC_id;

    //             // });
    //             SetDailyData(loadedData);
    //             // console.log(ekokScData);
    //         })
    // }, [])

    return (
        <div>

            <div class="stats px-16 bg-success rounded mt-2 text-primary-content">

                <div class="stat">
                    <div className="flex text-center align-items-center">
                        <p className="text-sm font-bold mr-3">FROM DATE :   </p>
                        <input className="text-dark shadow rounded p-1 text-center" type="date" onChange={e => setFromDate(e.target.value)} />
                        {/* <h3 className="mt-5">Selected Date{date}</h3> */}

                    </div>

                </div>

                <div class="stat">
                    <div className="flex text-center align-items-center">
                        <p className="text-sm font-bold mr-3">TO DATE :</p>
                        <input className="text-dark shadow rounded p-1 text-center" type="date" onChange={e => setToDate(e.target.value)} />
                        {/* <Link to={`/Daily_business=${fromdate}=${todate}`}>   <button className=" m-3 btn-info text-white btn-sm bg-[#4fc3f7] uppercase">Submit</button></Link> */}

                        <button onClick={daily} className=" m-3 btn-info text-white btn-sm bg-[#4fc3f7] uppercase">Submit</button>

                        {/* <h3 className="mt-5">Selected Date{date}</h3> */}
                    </div>
                </div>





            </div>

            <div class="grid grid-cols-1 gap-1 m-12 items-align-center">
                {/* <h1 className=" text-success text-2xl font-bold">DAILY BUSINESS REPORT  <span className='text-fareast text-dark  font-bold text-lg'> (From Date: {fromdate} To Date: {todate})</span> </h1> */}
                <div>
                    <div class="stats shadow-sm bordered rounded">
                        <div class="stat w-52 bg-success text-white font-bold bordered rounded">
                            < h2 className='text-left bordered rounded'>DIVISION NAME</h2 >
                        </div >

                        <div class="stat w-48 bg-success text-white font-bold bordered rounded ml-1">
                            <h2 className='text-left'>FIRST YEAR</h2>
                        </div>

                        <div class="stat w-48 bg-success text-white font-bold bordered ml-1 rounded">
                            <h2 className='text-left'>RENEWAL</h2>
                        </div>
                        <div class="stat w-48 bg-success text-white font-bold bordered ml-1 rounded">
                            <h2 className='text-left'>TOTAL</h2>
                        </div>

                    </div >
                </div>

                {
                    dailydata.map(dailyy => <Daily key={dailyy.id} dailyy={dailyy}></Daily>)

                }

            </div>
        </div>




    );
};

export default DailyBusiness;