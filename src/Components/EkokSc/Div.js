import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Bar, ComposedChart, Legend, Line, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const Div = () => {

    const { id } = useParams();
    const [ekokData, setEkokData] = useState([]);
    useEffect(() => {
        axios.get(`http://202.164.213.67/payment/sc_ekok.php?DIV_CODE=${id}`)
            .then(data => {
                const loadedData = data.data.Policy_Statement;

                console.log(loadedData);

                const ekokScData = loadedData.map(ekok => {

                    const d = ekok.SC_id;
                    console.log(d);
                    const partss = ekok.OFF_NAME.split('-');
                    const figCore = 10000000;
                    const figLac = 100000;
                    const ph = {
                        off_code: partss[0],
                        name: partss[1],
                        fy_Target: (partss[2]),
                        fy_business: (partss[3]),
                        re_target: (partss[4]),
                        re_business: (partss[5])
                    };
                    return ph;
                });
                setEkokData(ekokScData);
                console.log(ekokScData);
            })
    }, [])
    return (
        <div>


            <button style={{ fontSize: '14px' }} className='btn rounded btn-success drop-shadow-lg bg-[#087f23] btn-md text-white m-1'><b>FIRST YEAR TARGET VS BUSINESS (SC-EKOK) <span className='text-warning'>CHITTAGONG</span>  </b></button>

            <div className="row flex m-2">

                <div className="col-md-6 shadow p-1">
                    <div style={{ width: "100%", height: "250px", marginTop: '0px', background: '#fafafa' }}>

                        <ResponsiveContainer>
                            <ComposedChart
                                width={1000}
                                height={500}
                                data={ekokData}

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
                                <Legend verticalAlign="top" align="left" height={60} />


                                <Bar

                                    radius={[0, 0, 0, 0]}
                                    dataKey="fy_Target"
                                    barSize={30}
                                    fill="#00766c"
                                    yAxisId="left"
                                    tick={{ fill: 'dark' }}
                                    legendType="rect"
                                    name="FY_Target"
                                    label={{ position: 'top' }}
                                />

                                <Bar
                                    radius={[0, 0, 0, 0]}
                                    dataKey="fy_business"
                                    barSize={25}
                                    fill="#00b248"
                                    yAxisId="left"
                                    legendType="rect"
                                    name="FY_Business"
                                    label={{ position: 'top' }}
                                />
                                <Line
                                    dot={true}
                                    activeDot={{ r: 10 }}
                                    strokeWidth={3}
                                    strokeLinecap="round"
                                    type="monotone"
                                    dataKey="ratio"
                                    stroke="#ffab40"
                                    yAxisId="right"
                                    color='#fff'
                                    name='Achievement'
                                    legendType="rect"

                                />
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
                                // unit="K"
                                // domain={[5, "dataMax + 5"]}
                                // tickCount={5}
                                />
                            </ComposedChart>

                        </ResponsiveContainer>

                    </div>
                </div>
                <div className="col-md-6 shadow bordered p-1">
                    <div style={{ width: "100%", height: "250px", marginTop: '0px', background: '#fafafa' }}>

                        <ResponsiveContainer>
                            <ComposedChart
                                width={1000}
                                height={500}
                                data={ekokData}

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
                                <Legend verticalAlign="top" align="left" height={170} />


                                <Bar

                                    radius={[0, 0, 0, 0]}
                                    dataKey="re_target"
                                    barSize={30}
                                    fill="#4c96cc"
                                    yAxisId="left"
                                    tick={{ fill: 'dark' }}
                                    legendType="rect"
                                    name="Re_Target"
                                    label={{ position: 'top' }}
                                />

                                <Bar
                                    radius={[0, 0, 0, 0]}
                                    dataKey="re_business"
                                    barSize={25}
                                    fill="#ff6166"
                                    yAxisId="left"
                                    legendType="rect"
                                    name="Re_Business"
                                    label={{ position: 'top' }}
                                />
                                <Line
                                    dot={true}
                                    activeDot={{ r: 10 }}
                                    strokeWidth={3}
                                    strokeLinecap="round"
                                    type="monotone"
                                    dataKey="ratio"
                                    stroke="#ffab40"
                                    yAxisId="right"
                                    color='#fff'
                                    name='Achievement'
                                    legendType="rect"

                                />
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
                                // unit="K"
                                // domain={[5, "dataMax + 5"]}
                                // tickCount={5}
                                />
                            </ComposedChart>

                        </ResponsiveContainer>

                    </div>
                </div>
            </div>



            {/* <img className='rounded-circle shadow bg-white p-3 m-3' style={{ width: '100px', height: '100px' }} src={logo} alt="" /> */}
            {/* <h6 className='mb-0 text-success'> <b style={{ fontWeight: 'bold' }}>BUSINESS</b>  INFORMATION-2022</h6>
            <p className='mb-0 text-success'>(All DIVISION-EKOK)</p> */}
            {/* <div className="row  container-fluid justify-content-center p-1">
                <div class="shadow p-3 m-0 mb-2 bg-body rounded">
                    <div className=" col-md-6 mt-0">
                        <div style={{ width: "100%", height: "220px", marginTop: '0px', background: '#fafafa' }}>

                            <ResponsiveContainer>
                                <ComposedChart
                                    width={1000}
                                    height={500}
                                    data={ekokData}

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
                                    <Legend verticalAlign="top" align="left" height={60} />


                                    <Bar

                                        radius={[0, 0, 0, 0]}
                                        dataKey="fy_Target"
                                        barSize={30}
                                        fill="#0031ca"
                                        yAxisId="left"
                                        tick={{ fill: 'dark' }}
                                        legendType="rect"
                                        name="Target"
                                        label={{ position: 'top' }}
                                    />

                                    <Bar
                                        radius={[0, 0, 0, 0]}
                                        dataKey="fy_business"
                                        barSize={25}
                                        fill="#00600f"
                                        yAxisId="left"
                                        legendType="rect"
                                        name="Business"
                                        label={{ position: 'top' }}
                                    />
                                    <Line
                                        dot={true}
                                        activeDot={{ r: 10 }}
                                        strokeWidth={3}
                                        strokeLinecap="round"
                                        type="monotone"
                                        dataKey="ratio"
                                        stroke="#ffab40"
                                        yAxisId="right"
                                        color='#fff'
                                        name='Achievement'
                                        legendType="rect"

                                    />
                                    <YAxis
                                        tickLine={false}
                                        yAxisId="left"
                                        axisLine={{ stroke: "#f5f5f5" }}
                                        unit="C"
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
                    </div>
                </div>


                <div class="shadow p-3 m-0 mb-2 bg-body rounded">
                    <div className=" col-md-6 mt-0">
                        <div style={{ width: "100%", height: "220px", marginTop: '0px', background: '#fafafa' }}>

                            <ResponsiveContainer>
                                <ComposedChart
                                    width={1000}
                                    height={500}
                                    data={ekokData}

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
                                    <Legend verticalAlign="top" align="left" height={60} />


                                    <Bar

                                        radius={[0, 0, 0, 0]}
                                        dataKey="fy_Target"
                                        barSize={30}
                                        fill="#0031ca"
                                        yAxisId="left"
                                        tick={{ fill: 'dark' }}
                                        legendType="rect"
                                        name="Target"
                                        label={{ position: 'top' }}
                                    />

                                    <Bar
                                        radius={[0, 0, 0, 0]}
                                        dataKey="fy_business"
                                        barSize={25}
                                        fill="#00600f"
                                        yAxisId="left"
                                        legendType="rect"
                                        name="Business"
                                        label={{ position: 'top' }}
                                    />
                                    <Line
                                        dot={true}
                                        activeDot={{ r: 10 }}
                                        strokeWidth={3}
                                        strokeLinecap="round"
                                        type="monotone"
                                        dataKey="ratio"
                                        stroke="#ffab40"
                                        yAxisId="right"
                                        color='#fff'
                                        name='Achievement'
                                        legendType="rect"

                                    />
                                    <YAxis
                                        tickLine={false}
                                        yAxisId="left"
                                        axisLine={{ stroke: "#f5f5f5" }}
                                        unit="C"
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
                    </div>
                </div>


            </div> */}
        </div>
    );
};

export default Div;