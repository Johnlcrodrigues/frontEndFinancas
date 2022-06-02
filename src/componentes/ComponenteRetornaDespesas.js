import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './componente.css';
import { toast } from 'react-toastify';

async function buscarDespesas() {
  const res = await fetch('http://localhost:3000/despesas');
  const dados = await res.json();

  if (res.status === 200) {
    return dados.despesas;
  }else{
    toast(dados.msg); 
    return [];
  }
};

function ComponenteRetornaDespesas(props) {
  const [despesas, setDespesas] = useState([]);
  const [totalDes, setTotalDes] = useState();

  useEffect(() => {
    async function definirDespesas() {
      let despesa = await buscarDespesas();
      setDespesas(despesa);
    }
    definirDespesas();
  }, []);

  useEffect(() => {
    const totalDes = despesas.map(i => parseFloat(i.valor)).reduce((prev, curr) => prev + curr, 0);
    setTotalDes(totalDes);
    if (props.setTotalDespesas) {
      props.setTotalDespesas(totalDes);
    }
  }, [despesas]);
  
  useEffect(() => {
    setDespesas(props.despesas);
  }, [props.despesas]);

  return (
    <div id='fundo' className='p-4 card'>
      <h5 align="center" className="card-title" id='fundo'>Despesas Cadastradas</h5>
      <div className='container'>
        <div className="row">
          <div className="col-sm">
            <h5 className="tabela">Nome</h5>
          </div>
          <div className="col-sm">
            <h5 className="tabela">Valor</h5>
          </div>
        </div>
      </div>
      {
        despesas.map((despesas, i) => {
          return (
            <div className="container" onClick={() => {
              props.setNome(despesas.nome);
              props.setValor(despesas.valor);
              props.setId(despesas._id);
            }}>
              <div className="row">
                <div className="col-sm">
                  <p key={i} className="item">{despesas.nome}</p>
                </div>
                <div className="col-sm">
                  <p key={i} className="item">{despesas.valor}</p>
                </div>
              </div>
            </div>
          )
        })}
      <table className="table table-striped table-hover">
        <thead align="center" >
          <th scope="col">TOTAL</th>
          <th scope="col">R${totalDes}</th>
        </thead>
      </table>
    </ div>
  )
}
export { ComponenteRetornaDespesas, buscarDespesas };
