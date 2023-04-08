import { createContext, useContext, useEffect, useReducer } from "react";

const GlobalContext = createContext();

const temas = {
    dark:  true,
    light: false
    };

const temaInicial = temas.light;
const estadoInicialFavs = JSON.parse(localStorage.getItem("favoritos")) || [];
const endPointDentista = '/dentista/'



const temaReducer = (state, action) => {
switch (action.type) {
    case "CAMBIO_DARK":
        return temas.dark;
    case "CAMBIO_LIGHT":
        return temas.light;
    default:
        throw new Error();
    }
};

const favReducer = (state, action) => {
    switch (action.type) {
      case "ADD_FAVORITOS":
        return [...state, action.payload];
      case "DELETE_FAVORITOS":
        const idElementoAEliminar = action.payload;
        const nuevoEstadoFav = state.filter((elemento) => elemento.id !== idElementoAEliminar);
        return nuevoEstadoFav;
      default:
        throw new Error();
    } 
};

const endPintReducer = (state, action) => {
    switch (action.type) {
        case "CAMBIAR_ENDPOINT":
            return `/dentista/${action.payload}`;
        default:
            return state;
    }
};




const Context = ({children}) => {
    const [estadoTema, temaDispatch] = useReducer(temaReducer, temaInicial );
    const [estadoFav, favDispatch] = useReducer(favReducer, estadoInicialFavs);
    const [endPoint, endDispatch] = useReducer(endPintReducer, endPointDentista)

useEffect(() => {
    localStorage.setItem("favoritos", JSON.stringify(estadoFav));
    }, [estadoFav]);


return (
    <GlobalContext.Provider
        value={{estadoTema, temaDispatch, estadoFav, favDispatch, endPoint, endDispatch  }}
    >
        {children}
    </GlobalContext.Provider>
);
};


export default Context;

export const useGlobalContext = () => useContext(GlobalContext);