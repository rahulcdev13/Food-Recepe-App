import React, { useEffect, useState } from 'react'
import HeadReceipe from './HeadReceipe';
import Receipe from './Receipe';
import Axios from 'axios';

// const getStateWisedata = async () => {

//     const res = await fetch('https://data.covid19india.org/data.json')
//     const actualData = await res.json();
//     console.log(actualData);
//     setData(actualData.statewise);
// }

const Food = () => {
    const [search, setsearch] = useState("chicken");
    const [recepe, setrecepe] = useState([]);

    let app_id = '0eb7a1fc';
    let app_key = '0af83d3ca1e367771a818961e985ab62';
    
    useEffect(async()=>{
        
        let response = await Axios.get(`https://api.edamam.com/search?&app_id=${app_id}&app_key=${app_key}`);
        console.log(response);
        console.log("hii");
    },[]);
  
    const onChnageEvent = (e) => {
        setsearch(e.target.value);
    }
    return (
        <>
            <HeadReceipe onChnageEvent={onChnageEvent} search={search} />
            <Receipe />
        </>
    )
}

export default Food
