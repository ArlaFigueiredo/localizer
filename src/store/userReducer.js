const INITIAL_STATE = {
    usuarioEmail: '',
    usuarioLogado: 0,
    usuarioPrivilege: '',
    usuarioID: '',
};

function userReducer(state = INITIAL_STATE, action){
    switch(action.type){
        case 'LOG_IN':
            return {...state, usuarioLogado: 1, usuarioEmail: action.usuarioEmail, usuarioPrivilege: action.usuarioPrivilege, usuarioID: action.usuarioID}
        case 'LOG_OUT':
            return {...state, usuarioLogado: 0, usuarioEmail: null, usuarioPrivilege: null, usuarioID:null }
        default:
            return state;
    }
}

export default userReducer;