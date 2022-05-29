import React, { useEffect, useState } from 'react';

const useData = () => {
    const [sbdataa, setSbdataa] = useState([]);

    useEffect(() => {
        fetch('http://202.164.213.67/payment/business_sb.php')
            .then(res => res.json())
            .then(data => setSbdataa(data))

    }, []);

    return [sbdataa, setSbdataa]



};

export default useData;