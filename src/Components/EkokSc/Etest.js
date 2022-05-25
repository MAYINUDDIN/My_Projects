import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, NavLink, useParams } from 'react-router-dom';

const Etest = ({ product }) => {

    const { OFF_CODE, OFF_NAMEE } = product;
    console.log(OFF_CODE);
    // console.log(props.d.off_code);

    const [ekokData, setEkokData] = useState([]);




    useEffect(() => {
        axios.get(`http://202.164.213.67/payment/sc_ekok.php?DIV_CODE=${OFF_CODE}`)
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

            {/* <button className='btn rounded bordered btn-success text-xs drop-shadow-lg bg-[#087f23] btn-sm text-white'><NavLink code={102} to='/SC_EKOK_Business'>    Details {OFF_CODE}</NavLink></button> */}
            <Link to={`/DIV_CODE=${OFF_CODE}`}> <button class="btn rounded bordered btn-success text-xs drop-shadow-lg bg-[#087f23] btn-sm text-white">{OFF_NAMEE} </button></Link>

        </div>
    );
};

export default Etest;