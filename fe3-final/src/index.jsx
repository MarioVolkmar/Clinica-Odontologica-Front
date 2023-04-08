import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import Context, { useGlobalContext } from "./Context/globalContext";
import './index.css';

function ThemeWrapper() {
  const { estadoTema } = useGlobalContext();

  return (
    <div id="app" className={estadoTema ? "dark" : "light"}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <Context>
    <ThemeWrapper />
  </Context>
);

