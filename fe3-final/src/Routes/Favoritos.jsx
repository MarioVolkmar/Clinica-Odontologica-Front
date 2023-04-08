import React from "react";
import { useGlobalContext } from "../Context/globalContext";
import { Link } from "react-router-dom";
import styles from '../css/Home.css'
import Card from "../Components/Card";

const Favs = () => {
const { estadoFav } = useGlobalContext();

return (
    <main>
        <h1>Dentistas Favoritos</h1>
            <div className="grid">
                {estadoFav.map((user)=>(<Card key={user.id} user={user}/>))}
            </div>
    </main>
)};

export default Favs;