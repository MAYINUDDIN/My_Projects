import React, { useEffect, useState } from 'react';

const useData = () => {
    const [ekokdataa, setEkokdataa] = useState([]);

    useEffect(() => {
        fetch('http://202.164.213.67/payment/daily_business/div_ekok.php')
            .then(res => res.json())
            .then(data => setEkokdataa(data))

    }, []);

    return [ekokdataa, setEkokdataa]



};

export default useData;