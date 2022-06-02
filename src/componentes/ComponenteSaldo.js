
import 'bootstrap/dist/css/bootstrap.css';
import { useEffect } from 'react';
import ComponenteDespesas from './ComponenteDespesas';
import ComponenteReceitas from './ComponenteReceitas';
import { useOutletContext } from 'react-router-dom';
import './componente.css';

function ComponenteSaldo() {
  const { totalReceitas, setTotalReceitas } = useOutletContext();
  const { totalDespesas, setTotalDespesas } = useOutletContext();
  const total = parseFloat(totalReceitas - totalDespesas);
  return (
    <>


      <div className='container' >
          <div className="mt-4 d-flex justify-content-center">
            <div className='p-4 card' id='fundo'>
              <h5 className="card-title" id='fundo' align="Center">SALDOS</h5>
              <div className='p-4 card' id='fundo'>
                <div className='mb-2'>
      <h5 id="total">TOTAL RECEITAS: R${totalReceitas}</h5>
      <h5 id="total">TOTAL DESPESAS: R${totalDespesas}</h5>
        <h5 className='card-title' id="total">SALDO TOTAL: R${total}</h5>
        </div>
        </div>
        </div>
        </div>
        </div>
        
          <ComponenteDespesas setTotalDespesas={setTotalDespesas} />
          <ComponenteReceitas setTotalReceitas={setTotalReceitas} />
        
        

     
   
    </>
  )
}
export default ComponenteSaldo;