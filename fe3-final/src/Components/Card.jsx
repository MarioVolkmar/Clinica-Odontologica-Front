import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../Context/globalContext';
import styles from '../css/Card.css'
import { routes } from '../Routes/routes';


const Card = ({user}) => {
    const [hoveredText, setHoveredText] = useState(false);
    const [hoveredFav, setHoveredFav] = useState(false);
    const {estadoFav, favDispatch, endPoint, endDispatch }= useGlobalContext();
    const agregarFav = user =>{
        if(!estadoFav.find((fav)=>fav.id==user.id)){
            favDispatch({type: 'ADD_FAVORITOS', payload : user})
        }
        else{
            const shouldDelete = window.confirm(
                "¿Seguro que deseas eliminar este favorito?"
                );
                if (shouldDelete) {
                    favDispatch({ type: "DELETE_FAVORITOS", payload: user.id });
                }
        }
    }
    const armarEnd = (id) => {
        endDispatch({ type: "CAMBIAR_ENDPOINT", payload: id });
        const newEndPoint = `${endPoint}${id}`;
        window.location.replace(newEndPoint);
    };

    return (
        <div className='card' style={hoveredText ? {boxShadow: '7px 7px 5px 5px rgba(170, 206, 222, 0.4)', cursor: 'pinter' } : {}}>
            <img src="/images/doctor.jpg" alt="doctor placeholder" />
            <span className='iconFav' onMouseOver={() => setHoveredFav(true)} onMouseLeave={() => setHoveredFav(false)} onClick={() => agregarFav(user)} style={hoveredFav ? {opacity:'50%'}:{}}>
                {hoveredFav || estadoFav.find((fav)=>fav.id==user.id)? '❤️' : !estadoFav.find((fav)=>fav.id==user.id) ? '🖤' : '🖤'}
            </span>
            <div className='description' >
            <span style={{cursor:'pointer'}} onMouseOver={() => setHoveredText(true)} onMouseLeave={() => setHoveredText(false)} onClick={()=>armarEnd(user.id)}>{user.name}</span>
            </div>
        </div>
    )
}

export default Card;