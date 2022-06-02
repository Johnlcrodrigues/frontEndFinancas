
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
      <div className='despesas'>
        <ComponenteDespesas setTotalDespesas={setTotalDespesas} />
      </div>
      <div className='receitas'>
        <ComponenteReceitas setTotalReceitas={setTotalReceitas} />
      </div>
    </>
  )
}
export default ComponentePrincipal;