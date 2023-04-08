import { useState } from "react";

export function useFavLocalStorage(){
    const [favArray, setFav]= useState(()=>{
        try{
            const item = window.localStorage.getItem('fav')
            return item ? JSON.parse(item) : []
        }
        catch(error){
            console.log(error)
        }
    })    
    const setDentista = idDentista =>{
        try{
            const newArray = favArray.slice();
            newArray.push(idDentista)
            setFav(newArray);
            window.localStorage.setItem('fav' ,JSON.stringify(favArray))
        }
        catch(error){
            console.log(error)
        }
    }
    return [favArray,setDentista]
}


