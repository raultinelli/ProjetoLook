const initialState = {
	nome:'',
	email:'',
	senha:'',
	uid:'',
	status:0
};

const AuthReducer = (state = [], action) => {
	if(state.length == 0) {
		return initialState;
	}

	if(action.type == 'changeStatus') {
		return { ...state, status:action.payload.status };
	}

	if(action.type == 'editNome') {
		return { ...state, nome:action.payload.nome };
	}

	if(action.type == 'editEmail') {
		return { ...state, email:action.payload.email };
	}

	if(action.type == 'editSenha') {
		return { ...state, senha:action.payload.senha };
	}

	if(action.type == 'editUid') {
		return { ...state, status:1, uid:action.payload.uid };
	}

	return state;
};

export default AuthReducer;