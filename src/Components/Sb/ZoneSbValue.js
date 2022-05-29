import React from 'react';
import { Link } from 'react-router-dom';

const ZoneSbValue = ({ product }) => {
    const { off_code, name } = product;
    console.log(name, off_code);
    return (
        <div>

            {/* <button className='btn rounded bordered btn-success text-xs drop-shadow-lg bg-[#087f23] btn-sm text-white'><NavLink code={102} to='/SC_EKOK_Business'>    Details {OFF_CODE}</NavLink></button> */}
            <Link to={`/SC_SB_CODE=${off_code}`}> <button class="btn rounded bordered btn-success text-xs drop-shadow-lg bg-[#087f23] btn-sm text-white">{name} </button></Link>

        </div>
    );
};

export default ZoneSbValue;