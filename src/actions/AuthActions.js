import { AsyncStorage } from 'react-native';
import LookupggAPI from '../LookupggAPI';


export const checkLogin = () => {

	return (dispatch) => {

		AsyncStorage.getItem('jwt')
			.then((data)=>{
				if(data != null && data != '') {
					dispatch({
						type:'changeStatus',
						payload:{
							status:1
						}
					});
				}else {
					dispatch({
						type:'changeStatus',
						payload:{
							status:2
						}
					});
				}
			})
			.catch((error)=>{
				dispatch({
					type:'changeStatus',
					payload:{
						status:2
					}
				});
			});

	};

};

export const editNome = (nome) => {
	return {
		type:'editNome',
		payload:{
			nome:nome
		}
	};
};

export const editEmail = (email) => {
	return {
		type:'editEmail',
		payload:{
			email:email
		}
	};
};

export const editSenha = (senha) => {
	return {
		type:'editSenha',
		payload:{
			senha:senha
		}
	};
};

export const cadastrar = (nome, email, senha) => {

	return (dispatch) => {

		LookupggAPI.req({
			endpoint:'users/new',
			method:'POST',
			data:{
				name:nome,
				email:email,
				pass:senha,
				type:'player'
			},
			success:(json)=>{
				if(json.error == '') {

					AsyncStorage.setItem('jwt', json.jwt);

					dispatch({
						type:'changeStatus',
						payload:{
							status:1
						}
					});

				} else {
					alert(json.error);
				}
			},
			error:(error)=>{
				alert("Erro de requisição");
			}
		});
	};

};

export const logar = (email, senha) => {
	return (dispatch) => {

		LookupggAPI.req({
			endpoint:'users/login',
			method:'POST',
			data:{
				email:email,
				pass:senha
			},
			success:(json)=>{
				if(json.error == '') {

					AsyncStorage.setItem('jwt', json.jwt);

					dispatch({
						type:'changeStatus',
						payload:{
							status:1
						}
					});

				} else {
					alert(json.error);
				}
			},
			error:(error)=>{
				alert("Erro de requisição");
			}
		});
	};
};

export const deslogar = () => {

	AsyncStorage.setItem('jwt', '');

	return {
		type: 'changeStatus',
		payload:{
			status:2
		}
	};

};