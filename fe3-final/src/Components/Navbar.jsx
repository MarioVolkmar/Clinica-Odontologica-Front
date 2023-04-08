import React from 'react';
import styles from '../css/Navbar.css';
import { Link } from 'react-router-dom';
import { routes } from '../Routes/routes';
import { useGlobalContext } from '../Context/globalContext';

const Navbar = () => {
const { estadoTema, temaDispatch } = useGlobalContext();

const cambioTema = () => {
if (estadoTema) {
temaDispatch({ type: 'CAMBIO_LIGHT' });
} else {
temaDispatch({ type: 'CAMBIO_DARK' });
}
};
console.log(estadoTema)

return (
<nav>
<Link to={routes.home}>
<button className="butHome btnNav">DH Odonto</button>
</Link>
<div className="menuNav">
<Link to={routes.home}>
<button className="btnNav textNav">Home</button>
</Link>
<Link to={routes.favs}>
<button className="btnNav textNav">Favoritos</button>
</Link>
<Link to={routes.contact}>
<button className="btnNav textNav">Contacto</button>
</Link>
<button className="btnNav" onClick={cambioTema}>
{estadoTema ? '☀️' : '🌙'} 
</button>
</div>
</nav>
);
};

export default Navbar;



  