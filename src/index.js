import React from 'react'; //Libreria que nos ayuda a hacer interfaces graficas
import ReactDOM from 'react-dom/client';//Libreria que nos ayuda a trabajar con react y con el DOM de nuestros navegadores
import './index.css';//Importando algunos estilos
import App from './App';//Archivo donde trabajamos antes
import reportWebVitals from './reportWebVitals';//Sirve para hacer un reporte de nuestro proyecto

const root = ReactDOM.createRoot(document.getElementById('root'));//Aqui hay una libreria ReactDOM(react-dom/client) y un metodo createRoot, que recibe un argumento; cuando iniciamos el npm con el start, va a leeer el codigo que tenemos en la carpeta src .
root.render(//Es un  metodo el cual va a recibir algo de tipo  como  unas etiquetas html(React.StrictMode) y en medio el App, que si vemos, arriba lo estamosimportando y es el mismo App.js
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
