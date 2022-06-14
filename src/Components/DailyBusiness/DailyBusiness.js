import axios from "axios";
import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { Link } from "react-router-dom";
import DailybusinessDetails from "./DailybusinessDetails";
const DailyBusiness = () => {

    const [dailydata, SetDailyData] = useState('');
    console.log(dailydata);
    const [fromdate, setFromDate] = useState();
    const [todate, setToDate] = useState();
    console.log(fromdate, todate);

    // const { OFF_NAME } = dailydata;


    // const daily = () => {

    //     fetch(`http://202.164.213.67/payment/daily_business.php?FROM_DATE=${fromdate}&&TOO_DATE=${todate}`)
    //         .then(Response => Response.json())
    //         .then(data => SetDailyData(data));

    // }


    // useEffect(() => {
    //     axios.get(`http://202.164.213.67/payment/daily_business.php?FROM_DATE=2022-01-12&&TOO_DATE=2022-03-14`)
    //         .then(data => {
    //             const loadedData = data;

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

            <div class="stats bg-success rounded mt-2 text-primary-content">

                <div class="stat">
                    <div className="flex text-center align-items-center">
                        <p className="text-sm font-bold mr-3">FROM DATE :    </p>
                        <input className="text-dark shadow rounded p-1 text-center" type="date" onChange={e => setFromDate(e.target.value)} />
                        {/* <h3 className="mt-5">Selected Date{date}</h3> */}

                    </div>

                </div>

                <div class="stat">
                    <div className="flex text-center align-items-center">
                        <p className="text-sm font-bold mr-3">TO DATE :</p>
                        <input className="text-dark shadow rounded p-1 text-center" type="date" onChange={e => setToDate(e.target.value)} />
                        <Link to={`/Daily_business=${fromdate}=${todate}`}>   <button className=" m-3 btn-info text-white btn-sm bg-[#4fc3f7] uppercase">Submit</button></Link>
                        {/* <h3 className="mt-5">Selected Date{date}</h3> */}
                    </div>
                </div>





            </div>


            {/* <div className='flex justify-center justify-evenly px-10 mt-1'>
                {
                    dailydata.map(dailyy => <DailybusinessDetails key={dailyy.id} dailyy={dailyy}></DailybusinessDetails>)

                }

            </div> */}

        </div>




    );
};

export default DailyBusiness;