import { useState } from 'react';
import '../App';
import 'bootstrap/dist/css/bootstrap.css';
import { toast } from 'react-toastify';
import { ComponenteRetornaReceitas, buscarReceitas } from './ComponenteRetornaReceitas';

function ComponenteReceitas(props) {
	const [nome, setNome] = useState('');
	const [valor, setValor] = useState('');
	const [receitas, setReceitas] = useState([]);
	const [_id, setId] = useState('');

	//Criar Receitas
	const criarReceita = async () => {
		const res = await fetch(
			'http://localhost:3000/receitas',
			{
				method: 'POST',
				body: JSON.stringify({ nome: nome, valor: valor, id: _id }),
				headers: { 'Content-Type': 'application/json' }
			}
		);

		const dados = await res.json();

		if (res.status === 201) {
			let receitas = await buscarReceitas();
			setReceitas(receitas);
		}

		if (res.status === 400) {
			toast(dados.msg);
		} else {
			toast(dados.msg);
		}

	};

	//Delete Receitas
	const deletarReceita = async () => {
		const res = await fetch(
			`http://localhost:3000/receitas/${_id}`,
			{
				method: 'DELETE'
			}
		);

		const dados = await res.json();
		if (res.status === 200) {
			let receitas = await buscarReceitas();
			setReceitas(receitas);
		}

		if (res.status === 400) {
			toast(dados.msg);
		} else {
			toast(dados.msg);
		}
	};

	//Editar Receitas
	const editarReceita = async () => {
		const res = await fetch(
			`http://localhost:3000/receitas/${_id}`,
			{
				method: 'PUT',
				body: JSON.stringify({ nome: nome, valor: valor }),
				headers: { 'Content-Type': 'application/json' }
			}
		);

		const dados = await res.json();
		if (res.status === 200) {
			let receitas = await buscarReceitas();
			setReceitas(receitas);
		}

		if (res.status === 400) {
			toast(dados.msg);
		} else {
			toast(dados.msg);
		}
	};

	return (
		<>
			<div className='container'>
				<div className='mt-4 d-flex justify-content-center'>
					<ComponenteRetornaReceitas setTotalReceitas={props.setTotalReceitas} setId={setId} setNome={setNome} setValor={setValor} receitas={receitas} />
					<div className='p-4 card' id='fundo'>
						<h5 className="card-title" id='fundo' align="Center">Cadastrar Receitas</h5>
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
							<button className='btn btn-primary' id='botao' onClick={criarReceita} >Criar</button> <br />
							<button className='btn btn-primary' id='botao' onClick={editarReceita} >Editar</button>  <br />
							<button className='btn btn-primary' id='botao' onClick={deletarReceita} >Excluir</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default ComponenteReceitas;