import { useState } from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.css';
import ComponenteNav from './ComponenteNav';
import { toast } from 'react-toastify';

function ComponenteCadastrarUsuario() {
	const [usuario, setUsuario] = useState('');
	const [senha, setSenha] = useState('');
	const [msg, setMsg] = useState('');

	const criarUsuario = async () => {
		const res = await fetch(
			'http://localhost:3000/usuarios',
			{
				method: 'POST',
				body: JSON.stringify({ usuario: usuario, senha: senha }),
				headers: { 'Content-Type': 'application/json' }
			}
		);

		const dados = await res.json();

		if (res.status === 400) {
		toast(dados.msg);
		} else {
			toast(dados.msg);
		}
	};

	return (
		<>
				<div className='row' >
					<div className='mt-4 d-flex justify-content-center'>
						<div className='p-4 card' id='usuarioInput'>
							<h5 className="card-title" id='usuarioInput'>Criar Conta</h5>
							<div className='card-body'>
								<div className='mb-2'>
									<label>Usuário</label>
									<input className='form-control' value={usuario} onChange={(e) => setUsuario(e.target.value)}></input>
								</div>
								<div className='mb-2'>
									<label>Senha</label>
									<input className='form-control' type='password' value={senha} onChange={(e) => setSenha(e.target.value)}></input>
								</div>
								<button className='btn btn-primary' id='botao' onClick={criarUsuario}>Criar Conta</button>
							</div>
						</div>
					</div>
				</div>
		</>
	);
}

export default ComponenteCadastrarUsuario;