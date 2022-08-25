import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Bar, ComposedChart, Legend, Line, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import Daily from './Daily';

const DailybusinessDetails = () => {
    const [dailydata, SetDailyData] = useState('');
    const { from, to } = useParams();

    console.log(dailydata);



    useEffect(() => {
        axios.get(`http://202.164.213.67/payment/daily_business.php?FROM_DATE=${from}&&TOO_DATE=${to}`)
            .then(data => {
                const loadedData = data.data;

                console.log(loadedData);

                const ekokScData = loadedData.map(ekok => {
                    // const d = ekok.SC_id;
                    // const { name } = ekok.SC_NAME;
                    // console.log(d);
                    // console.log(name);
                    const partss = ekok.OFF_NAME.split('-');
                    const figCore = 10000000;
                    const figLac = 100000;
                    const ph = {
                        name: partss[0],
                        fy: (partss[1]),
                        re: (partss[2]),
                        total: (partss[3])

                    };
                    return ph;
                });
                SetDailyData(ekokScData);
                // console.log(ekokScData);
            })
    }, [])


    return (
        <div>

            <div className="col-md-12 shadow m-2 p-3">
                <button style={{ fontSize: '20px' }} className='btn rounded mb-3 btn-success drop-shadow-lg bg-[#087f23] btn-md text-white m-1'><b>DAILY BUSINESS REPORT-FIRST YEAR <span className='text-fareast text-[#ffea00] text-lg'>(From: {from} To: {to})</span>  </b></button>

                <div style={{ width: "100%", height: "480px", marginTop: '0px', background: '#fafafa' }}>

                    <ResponsiveContainer>
                        <ComposedChart
                            width={1000}
                            height={500}
                            data={dailydata}

                            margin={{
                                top: 0,
                                right: 0,
                                left: 0,
                                bottom: 0
                            }}
                        >

                            <XAxis
                                tick={{ fill: 'dark' }}
                                dataKey="name"
                                tickLine={false}
                                axisLine={{ stroke: "#333" }}
                            />

                            <Tooltip />
                            <Legend verticalAlign="top" align="left" height={350} />

                            {/* <Bar
                                radius={[0, 0, 0, 0]}
                                dataKey="fy_Target"
                                barSize={70}
                                fill="#00766c"
                                yAxisId="left"
                                tick={{ fill: 'dark' }}
                                legendType="rect"
                                name="FY_Target"
                                label={{ position: 'top' }}
                            /> */}

                            <Bar
                                radius={[3, 3, 0, 0]}
                                dataKey="fy"
                                barSize={60}
                                fill="#004c8c"
                                yAxisId="left"
                                legendType="rect"
                                name="First Year Business"
                                label={{ position: 'top' }}
                            />
                            {/* <Line
                                dot={true}
                                activeDot={{ r: 10 }}
                                strokeWidth={3}
                                strokeLinecap="round"
                                type="monotone"
                                dataKey="fy_ratio"
                                stroke="#ffab40"
                                yAxisId="right"
                                color='#fff'
                                name='Achievement'
                                legendType="rect"

                            /> */}
                            <YAxis
                                tickLine={false}
                                yAxisId="left"
                                axisLine={{ stroke: "#f5f5f5" }}
                                unit="k"
                                tickCount={10}
                            />
                            <YAxis
                                tickLine={false}
                                yAxisId="right"
                                orientation="right"
                                stroke="#3B7AD9"
                                axisLine={{ stroke: "#f5f5f5" }}
                            // unit="K"
                            // domain={[5, "dataMax + 5"]}
                            // tickCount={5}
                            />
                        </ComposedChart>

                    </ResponsiveContainer>

                </div>

                {/* 
                <div className='flex justify-center justify-evenly px-10 mt-1'>
                    {
                        ekokData.map(product => <ZoneValue key={product.id} product={product}></ZoneValue>)

                    }

                </div> */}

            </div>



            {/* ================== */}

            <div className="col-md-12 shadow m-2 p-3">
                <button style={{ fontSize: '20px' }} className='btn rounded mb-3 btn-success drop-shadow-lg bg-[#087f23] btn-md text-white m-1'><b>DAILY BUSINESS REPORT-RENEWAL <span className='text-fareast text-[#ffea00] text-lg'>(From: {from} To: {to})</span>  </b></button>

                <div style={{ width: "100%", height: "480px", marginTop: '0px', background: '#fafafa' }}>

                    <ResponsiveContainer>
                        <ComposedChart
                            width={1000}
                            height={500}
                            data={dailydata}

                            margin={{
                                top: 0,
                                right: 0,
                                left: 0,
                                bottom: 0
                            }}
                        >

                            <XAxis
                                tick={{ fill: 'dark' }}
                                dataKey="name"
                                tickLine={false}
                                axisLine={{ stroke: "#333" }}
                            />

                            <Tooltip />
                            <Legend verticalAlign="top" align="left" height={350} />

                            {/* <Bar
                                radius={[0, 0, 0, 0]}
                                dataKey="fy_Target"
                                barSize={70}
                                fill="#00766c"
                                yAxisId="left"
                                tick={{ fill: 'dark' }}
                                legendType="rect"
                                name="FY_Target"
                                label={{ position: 'top' }}
                            /> */}

                            <Bar
                                radius={[3, 3, 0, 0]}
                                dataKey="re"
                                barSize={60}
                                fill="#00b686"
                                yAxisId="left"
                                legendType="rect"
                                name="Renewal Business"
                                label={{ position: 'top' }}
                            />
                            {/* <Line
                                dot={true}
                                activeDot={{ r: 10 }}
                                strokeWidth={3}
                                strokeLinecap="round"
                                type="monotone"
                                dataKey="fy_ratio"
                                stroke="#ffab40"
                                yAxisId="right"
                                color='#fff'
                                name='Achievement'
                                legendType="rect"

                            /> */}
                            <YAxis
                                tickLine={false}
                                yAxisId="left"
                                axisLine={{ stroke: "#f5f5f5" }}
                                unit="k"
                                tickCount={100}
                            />
                            <YAxis
                                tickLine={false}
                                yAxisId="right"
                                orientation="right"
                                stroke="#3B7AD9"
                                axisLine={{ stroke: "#f5f5f5" }}
                            // unit="K"
                            // domain={[5, "dataMax + 5"]}
                            // tickCount={5}
                            />
                        </ComposedChart>

                    </ResponsiveContainer>

                </div>

                {/* 
                <div className='flex justify-center justify-evenly px-10 mt-1'>
                    {
                        ekokData.map(product => <ZoneValue key={product.id} product={product}></ZoneValue>)

                    }

                </div> */}

            </div>


        </div>



    );
};

export default DailybusinessDetails;