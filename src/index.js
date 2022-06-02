import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ComponenteLogin from './componentes/ComponenteLogin';
import { ToastContainer } from 'react-toastify';
import ComponentePrincipal from './componentes/ComponentePrincipal';
import ComponenteDespesas from './componentes/ComponenteDespesas';
import ComponenteCadastrarUsuario from './componentes/ComponenteCadastrarUsuario';
import 'react-toastify/dist/ReactToastify.css';
import ComponenteReceitas from './componentes/ComponenteReceitas';
import ComponenteSobre from './componentes/ComponenteSobre';
import ComponenteSaldo from './componentes/ComponenteSaldo';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ToastContainer />
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<ComponenteLogin />} />
          <Route path="/" element={<App />} >
            <Route index element={<ComponentePrincipal />}></Route>
            <Route path="/receitas" element={<ComponenteReceitas />}></Route>
            <Route path="/usuario" element={<ComponenteCadastrarUsuario />}></Route>
            <Route path="/saldo" element={<ComponenteSaldo />}></Route>
            <Route path="/despesas" element={<ComponenteDespesas />}></Route>
            <Route path="/sobre" element={<ComponenteSobre />}></Route>
          </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
reportWebVitals();
