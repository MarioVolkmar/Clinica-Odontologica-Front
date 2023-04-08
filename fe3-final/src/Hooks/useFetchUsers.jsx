import { useState, useEffect } from "react";

export function useFetchUser(url){
    const [dataFetch, setData] = useState()
    useEffect(()=>{
        fetch(url)
        .then((res)=> res.json())
        .then((data)=> setData(data))
    },[])
    return dataFetch;
}