import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const Specialchart = () => {
    const [Edata, setEData] = useState([]);


    const data1 = [
        {
            "name": "Noakhali",
            "renual": 6000,
            "business": 3400,
            "ratio": 1000
        },
        {
            "name": "Cumilla",
            "renual": 3000,
            "business": 1398,
            "ratio": 100
        },
        {
            "name": "Rangpur",
            "renual": 2000,
            "business": 9800
        },
        {
            "name": "Chittagong",
            "renual": 2780,
            "business": 3908,
            "ratio": 500
        },
        {
            "name": "Barishal",
            "renual": 1890,
            "business": 4800,
            "ratio": 500
        },
        {
            "name": "Jeshore",
            "renual": 2390,
            "business": 3800,
            "ratio": 300
        },
        {
            "name": "Rajshahi",
            "renual": 3490,
            "business": 4300,
            "ratio": 100
        }
    ]




    useEffect(() => {

        axios.get('http://202.164.213.67/payment/business.php')
            .then(data => {

                const loadData = data.data;
                var LoadBusiness = loadData.map(EkokD => EkokD.FY_BUSINESS)
                const LoadTarget = loadData.map(EkokD => EkokD.FY_TARGET)
                const LoadRatio = loadData.map(EkokD => EkokD.FY_RATIO)


                // const result = Object.values(LoadBusiness);
                setEData(LoadTarget, LoadBusiness, LoadRatio);
                console.log(LoadBusiness);

            })

    }, [Edata])


    return (
        <div>



            <div className="row">
                <div className="shadow-lg bg-body p-2 m-1  col-md-6 ">
                    <BarChart width={640} height={250} data={Edata}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />

                        <Legend />

                        <Bar dataKey="LoadTarget" fill="#0031ca" />
                        <Bar dataKey="LoadBusiness" fill="#4c8c4a" />
                        <Bar dataKey="LoadRatio" fill="#82ca9d" />

                    </BarChart>

                </div>
            </div>
        </div>
    );
};

export default Specialchart;