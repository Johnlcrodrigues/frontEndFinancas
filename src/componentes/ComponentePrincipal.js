
import 'bootstrap/dist/css/bootstrap.css';
import { useEffect } from 'react';
import ComponenteDespesas from './ComponenteDespesas';
import ComponenteReceitas from './ComponenteReceitas';
import { useOutletContext } from 'react-router-dom';
import './componente.css';

function ComponentePrincipal() {
  const { totalReceitas, setTotalReceitas } = useOutletContext();
  const { totalDespesas, setTotalDespesas } = useOutletContext();
  const total = parseFloat(totalReceitas - totalDespesas);
  return (
    <>


      <div className='fundo'>
       
        <div className='despesas'>
          {/* <ComponenteDespesas setTotalDespesas={setTotalDespesas} /> */}
        </div>
        {/* <div className='receitas'>
          <ComponenteReceitas setTotalReceitas={setTotalReceitas} />
        </div> */}
        <br />
        <br />
        {/* <div className='p-4 card' id="fundo">
          <h5 id="total">Você ainda tem: R${total}</h5>
        </div> */}
        <div>
        {/* <h5 id="total">SALDO: R${total}</h5> */}
        </div>
        
      </div>

     
   
    </>
  )
}
export default ComponentePrincipal;