export const state = () => {
    return {
        isLogged: false,
        user:{

        },
        apt:{
            
        },
    }
};

export const mutations = {
    saveLogin(state, payload){
        state.isLogged = true
        state.user = payload;
    },
    aptDetail(state, payload){
        state.apt = payload;
    }
};