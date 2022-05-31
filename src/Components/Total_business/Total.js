import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Bar, ComposedChart, Legend, Line, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const Total = () => {


    const [ekokData, setEkokData] = useState([]);
    useEffect(() => {
        axios.get('http://202.164.213.67/payment/ekok_sb_business.php')
            .then(data => {
                const loadedData = data.data.business_info;

                const phoneData = loadedData.map(ekok => {

                    const partss = ekok.OFF_NAME.split('-');
                    const figCore = 10000000;
                    const figLac = 1000000;
                    const ph = {
                        name: partss[0],
                        ekok_sb_f_y: (partss[1]),
                        ekok_sb_r: (partss[2]),
                        ekok_sb_total: (partss[3])

                    };
                    return ph;
                });
                setEkokData(phoneData);
                console.log(phoneData);

            })
    }, [])



    return (
        <div>
            <button style={{ fontSize: '14px' }} className='  btn rounded btn-success drop-shadow-lg bg-[#087f23] btn-md text-white mt-3 mb-2 m-1'><b>TOTAL BUSINESS FIRST YEAR+RENEWAL (EKOK-SB)
            </b></button>



            <div className="row container-fluid justify-content-center  p-3">
                <div class="shadow p-3 m-0 mb-2 bg-body rounded">
                    <div className=" col-md-12 mt-0">
                        <div style={{ width: "100%", height: "320px", marginTop: '0px', background: '#e1f5fe' }}>
                            <ResponsiveContainer style={{ height: "420px" }}>
                                <ComposedChart
                                    width={1000}
                                    height={500}
                                    data={ekokData}
                                    margin={{ top: 10, right: 0, left: 0, bottom: 0 }}
                                >

                                    <XAxis
                                        tick={{ fill: 'dark' }}
                                        dataKey="name"
                                        tickLine={true}
                                        axisLine={{ stroke: "#333" }}
                                    />
                                    <Tooltip />
                                    <Legend verticalAlign="top" align="left" height={210} />

                                    {/* <Bar
                                        radius={[5, 4, 0, 0]}
                                        dataKey="ekok_sb_total"
                                        barSize={20}
                                        fill="#005cb2"
                                        yAxisId="left"
                                        legendType="rect"
                                        name="FY_RENEWAL Total(EKOK+SB)"
                                        label={{ position: 'top', targetX: 'bold' }}
                                    /> */}

                                    <Bar
                                        radius={[2, 2, 0, 0]}
                                        dataKey="ekok_sb_r"
                                        barSize={25}
                                        barCategoryGap={25}
                                        fill="#004c40"
                                        yAxisId="left"
                                        legendType="rect"
                                        name="Renewal Total(EKOK+SB)"
                                        label={{ position: 'top' }}
                                    />


                                    <Bar
                                        radius={[2, 2, 0, 0]}
                                        dataKey="ekok_sb_f_y"
                                        barSize={25}
                                        fill="#c56000"
                                        yAxisId="left"
                                        tick={{ fill: 'dark' }}
                                        legendType="rect"
                                        name="First Year Total(EKOK+SB)"
                                        label={{ position: 'top' }}
                                    />
                                    {/* <Line
                                        dot={true}
                                        activeDot={{ r: 10 }}
                                        strokeWidth={3}
                                        strokeLinecap="round"
                                        type="monotone"
                                        dataKey="ratio"
                                        stroke="#ffab40"
                                        yAxisId="right"
                                        color='#fff'
                                        name='Ratio'

                                        legendType="rect"

                                    /> */}
                                    <YAxis
                                        tickLine={false}
                                        yAxisId="left"
                                        axisLine={{ stroke: "#f5f5f5" }}
                                        unit="C"
                                        tickCount={10}
                                    />
                                    <YAxis
                                        tickLine={false}
                                        yAxisId="right"
                                        orientation="right"
                                        stroke="#3B7AD9"
                                        axisLine={{ stroke: "#f5f5f5" }}
                                        unit="K"
                                        domain={[5, "dataMax + 5"]}
                                        tickCount={5}
                                    />
                                </ComposedChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Total;