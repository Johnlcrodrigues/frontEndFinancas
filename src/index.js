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
            <Route path="/despesas" element={<ComponenteDespesas />}></Route>
          </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
reportWebVitals();
