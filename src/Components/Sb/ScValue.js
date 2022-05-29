import React from 'react';
import { Link } from 'react-router-dom';

const ScValue = ({ p }) => {
    const { OFF_CODE, OFF_NAMEE } = p;
    // console.log(OFF_CODE);
    return (

        <div>

            <Link to={`/DIV_SB_CODE=${OFF_CODE}`}> <button class="btn rounded bordered btn-success text-xs drop-shadow-lg bg-[#087f23] btn-sm text-white">{OFF_NAMEE} </button></Link>

        </div>
    );
};

export default ScValue;