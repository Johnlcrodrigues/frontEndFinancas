import { useState, useEffect } from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

function ComponenteLogin() {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const [msg, setMsg] = useState('');

  let navigate = useNavigate();
  const logarUsuario = async () => {
    const res = await fetch(
      'http://localhost:3000/usuarios/login',
      {
        method: 'POST',
        body: JSON.stringify({ usuario: usuario, senha: senha }),
        headers: { 'Content-Type': 'application/json' }
      }
    );

    const dados = await res.json();
    if (res.status === 200) {
      navigate("/");
    }
    if (res.status === 400) {
      toast(dados.msg);
    } else {

      toast(dados.msg);
    }
  };

  return (
    <div className='fundo'>
      <div className='row'>
        <div className='mt-4 d-flex justify-content-center'>
          <div className='p-4 card' id='fundo'>
            <h5 className="card-title">Acessar Sistema</h5>
            <div className='card-body'>
              <div className='mb-2'>
                <label>Usuário</label>
                <input className='form-control' value={usuario} onChange={(e) => setUsuario(e.target.value)}></input>
              </div>
              <div className='mb-2'>
                <label>Senha</label>
                <input className='form-control' type='password' value={senha} onChange={(e) => setSenha(e.target.value)}></input>
              </div>
              <button className='btn btn-primary' onClick={logarUsuario}>Entrar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ComponenteLogin;