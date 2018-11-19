const initialState = {
	connect:[],
	offset:0,
	follows:[],
	mygames:[],
	getgames:[]
};

const GruposReducer = (state = [], action) => {

	if(state.length == 0) {
		return initialState;
	}

	if(action.type == 'setFollowsList') {
		return { ...state, follows:action.payload.follows };
	}

	if(action.type == 'setConnectList') {
		return { ...state, connect:state.connect.concat(action.payload.connect) };
	}

	if(action.type == 'setMyGamesList') {
		return { ...state, mygames:action.payload.mygames };
	}

	if(action.type == 'setGamesList') {
		return { ...state, mygames:action.payload.getgames };
	}

	return state;
};

export default GruposReducer;