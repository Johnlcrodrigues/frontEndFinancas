import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './componente.css';
import { toast } from 'react-toastify';

async function buscarReceitas() {
  const res = await fetch('http://localhost:3000/receitas');
  const dados = await res.json();

  if(res.status ===200){
    return dados.receitas;
  }else{
    toast(dados.msg);
    return [];
  }
};

function ComponenteRetornaReceitas(props) {
  const [receitas, setReceitas] = useState([]);
  const [totalRec, setTotalRec] = useState();

  useEffect(() => {
    async function definirReceitas() {
      let receita = await buscarReceitas();
      setReceitas(receita);
    }
    definirReceitas();
  }, []);

  useEffect(() => {
    const totalRec = receitas.map(i => parseFloat(i.valor)).reduce((prev, curr) => prev + curr, 0);
    setTotalRec(totalRec);
    if (props.setTotalReceitas) {
      props.setTotalReceitas(totalRec);
    }
  }, [receitas]);

  useEffect(() => {
    setReceitas(props.receitas);
  }, [props.receitas]);

  return (
    <div id='fundo' className='p-4 card'>
      <h5 align="center" className="card-title">Receitas Cadastradas</h5>
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
        receitas.map((receitas, i) => {
          return (
            <div className="container" onClick={() => {
              props.setNome(receitas.nome);
              props.setValor(receitas.valor);
              props.setId(receitas._id);
            }}>
              <div className="row">
                <div className="col-sm">
                  <p key={i} className="item">{receitas.nome}</p>
                </div>
                <div className="col-sm">
                  <p key={i} className="item">{receitas.valor}</p>
                </div>
              </div>
            </div>
          )
        })}
      <table class="table table-striped table-hover">
        <thead align="center" >
          <th scope="col">TOTAL</th>
          <th scope="col">R${totalRec}</th>
        </thead>
      </table>
    </div>
  )
}
export { ComponenteRetornaReceitas, buscarReceitas };
