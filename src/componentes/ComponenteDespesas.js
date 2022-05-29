import { useEffect, useState } from 'react';
import '../App';
import 'bootstrap/dist/css/bootstrap.css';
import { ComponenteRetornaDespesas, buscarDespesas } from './ComponenteRetornaDespesas';
import { toast } from 'react-toastify';
import './componente.css';


function ComponenteDespesas(props) {
  const [nome, setNome] = useState('');
  const [valor, setValor] = useState('');
  const [despesas, setDespesas] = useState([]);
  const [_id, setId] = useState('');

  //Criar Despesas
  const criarDespesa = async () => {
    const res = await fetch(
      'http://localhost:3000/despesas',
      {
        method: 'POST',
        body: JSON.stringify({ nome: nome, valor: valor, id: _id }),
        headers: { 'Content-Type': 'application/json' }
      }
    );

    const dados = await res.json();

    if (res.status === 201) {
      let despesas = await buscarDespesas();
      setDespesas(despesas);
    }

    if (res.status === 400) {
      toast(dados.msg);
    } else {
      toast(dados.msg);
    }
  };

  //Delete Despesas
  const deletarDespesa = async () => {
    const res = await fetch(
      `http://localhost:3000/despesas/${_id}`,
      {
        method: 'DELETE'
      }
    );

    const dados = await res.json();
    if (res.status === 200) {
      let despesas = await buscarDespesas();
      setDespesas(despesas);
    }

    if (res.status === 400) {
      toast(dados.msg);
    } else {
      toast(dados.msg);
    }
  };

  //Editar Despesas
  const editarDespesa = async () => {
    const res = await fetch(
      `http://localhost:3000/despesas/${_id}`,
      {
        method: 'PUT',
        body: JSON.stringify({ nome: nome, valor: valor }),
        headers: { 'Content-Type': 'application/json' }
      }
    );

    const dados = await res.json();
    if (res.status === 200) {
      let despesas = await buscarDespesas();
      setDespesas(despesas);
    }

    if (res.status === 400) {
      toast(dados.msg);
    } else {
      toast(dados.msg);
    }
  };

  return (
    <>
        <div className='container' >
          <div className="mt-4 d-flex justify-content-center">
            <ComponenteRetornaDespesas setTotalDespesas={props.setTotalDespesas} setId={setId} setNome={setNome} setValor={setValor} despesas={despesas} />
            <div className='p-4 card' id='fundo'>
              <h5 className="card-title" id='fundo' align="Center">Cadastrar Despesa</h5>
              <div className='p-4 card' id='fundo'>
                <div className='mb-2'>
                  <label>Nome</label>
                  <input className='form-control' value={nome} onChange={(e) => setNome(e.target.value)}></input>
                </div>
                <div className='mb-2'>
                  <label>Valor</label>
                  <input className='form-control' type='number' value={valor} onChange={(e) => setValor(e.target.value)}></input>
                </div>
              </div>
              <br />
              <div className='p-4 card' id='fundo'>
                <button className='btn btn-primary' onClick={criarDespesa} id='botao'>Criar</button> <br />
                <button className='btn btn-primary' onClick={editarDespesa} id='botao'>Editar</button>  <br />
                <button className='btn btn-primary' onClick={deletarDespesa} id='botao'>Excluir</button>
              </div>
            </div>
          </div>
        </div>
    </>
  );
}

export default ComponenteDespesas;