import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import ComponenteNav from './componentes/ComponenteNav';
import { Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';

function App() {
	const [ totalDespesas, setTotalDespesas ] = useState(1);
	const [ totalReceitas, setTotalReceitas ] = useState(2)

	useEffect(() => { console.log(totalDespesas)}, [totalDespesas]);

	return (
		<>
			<ComponenteNav />
			<Outlet context={{ totalDespesas, setTotalDespesas, totalReceitas, setTotalReceitas }} />
		</>
	);
}
export default App;
