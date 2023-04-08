import React from 'react'
import styles from '../css/Footer.css'

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo(0, 0)
        }
    return (
    <footer>
        <button onClick={scrollToTop}>Volver arriba</button>
            {/* //En la siguiente línea se debe hacer una prueba si la aplicación
            está en modo oscuro y debe usar la clase navbar-dark bg-dark o navbar-light bg-light */}
        <div>
            <div className='images' >
                <img  src="/images/DH.png" alt='DH-logo' style={{maxWidth: '50%'}}/>
                    <div className='iconosRedes'>
                        <img src="/images/ico-facebook.png" alt="ícone do facebook"/>
                        <img src="/images/ico-instagram.png" alt="ícone do instagram"/>
                        <img src="/images/ico-whatsapp.png" alt="ícone do whatsapp"/>
                        <img src="/images/ico-tiktok.png" alt="ícone do tiktok"/>
                    </div>
            </div>
        </div>
    </footer >
        )
}

export default Footer

