import { AsyncStorage } from 'react-native';

import LookupggAPI from '../LookupggAPI';
import { deslogar } from './AuthActions';

export const getFollowsList = () => {
	return (dispatch) => {

		AsyncStorage.getItem('jwt')
		.then((data) => {
			if(data != null && data != '') {
				LookupggAPI.req({
				endpoint:'users/follow',
				method:'GET',
				data:{jwt:data},
				success:(json)=>{

					if(json.logged === true) {

						dispatch({
							type: 'setFollowsList',
							payload:{
								follows:json.data
							}
						});

					} else {
						dispatch(deslogar());
					}

				},
				error:(error)=>{
					alert("Erro de requisição");
				}
			});

			} else {
				dispatch(deslogar());
			}
		})
		.catch((error)=>{
			dispatch(deslogar());
		});
	};
};

export const getConnectList = () => {
	return (dispatch) => {

		AsyncStorage.getItem('jwt')
		.then((data) => {
			if(data != null && data != '') {
				LookupggAPI.req({
				endpoint:'users/connect',
				method:'GET',
				data:{jwt:data},
				success:(json)=>{

					if(json.logged === true) {

						dispatch({
							type: 'setConnectList',
							payload:{
								connect:json.data
							}
						});

					} else {
						dispatch(deslogar());
					}

				},
				error:(error)=>{
					alert("Erro de requisição");
				}
			});

			} else {
				dispatch(deslogar());
			}
		})
		.catch((error)=>{
			dispatch(deslogar());
		});
	};
};

export const getMyGamesList = () => {
	return (dispatch) => {

		AsyncStorage.getItem('jwt')
		.then((data) => {
			if(data != null && data != '') {
				LookupggAPI.req({
				endpoint:'users/games',
				method:'GET',
				data:{jwt:data},
				success:(json)=>{

					if(json.logged === true) {

						dispatch({
							type: 'setMyGamesList',
							payload:{
								mygames:json.data
							}
						});

					} else {
						dispatch(deslogar());
					}

				},
				error:(error)=>{
					alert("Erro de requisição");
				}
			});

			} else {
				dispatch(deslogar());
			}
		})
		.catch((error)=>{
			dispatch(deslogar());
		});
	};
};

export const getGameList = (pesquisa) => {
	return (dispatch) => {

		LookupggAPI.req({
			endpoint:'users/searchgame',
			method:'GET',
			data:{
				search:pesquisa
			},
			success:(json)=>{
				if(json.error == '') {

						dispatch({
							type: 'setConnectList',
							payload:{
								connect:json.data
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