import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import { useGlobalContext } from './Context/globalContext'
import { Route, Routes , useNavigate} from "react-router-dom";
import Home from "./Routes/Home";
import Contacto from "./Routes/Contacto";
import Detalles from './Routes/Detalles'
import Favoritos from "./Routes/Favoritos";
import { routes } from "./Routes/routes";
import { useEffect } from 'react';

function App() {
    const {endPoint}= useGlobalContext()
    const navigate = useNavigate()

    useEffect(() => {
        if (!endPoint) {
            navigate('/')
        }
    }, [endPoint, navigate])

    return (
    <div >
      <Navbar />
      <Routes>
        <Route path={routes.home} element={<Home/>} />
        <Route path={routes.contact} element={<Contacto />} />
        <Route path={`${endPoint}:id`} element={<Detalles />} />
        <Route path={routes.favs} element={<Favoritos/>} /> 
      </Routes>
      <Footer />
    </div>
  );
}

export default App

