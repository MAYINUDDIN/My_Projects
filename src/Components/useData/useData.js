import React, { useEffect, useState } from 'react';

const useData = () => {
    const [ekokdata, setEkokdata] = useState([]);

    useEffect(() => {
        fetch('http://202.164.213.67/payment/business.php')
            .then(res => res.json())
            .then(data => setEkokdata(data))

    }, [ekokdata])



    return [ekokdata, setEkokdata];



};

export default useData;