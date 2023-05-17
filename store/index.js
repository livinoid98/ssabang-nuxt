export const state = () => {
    return {
        isLogged: false,
        user:{

        }
    }
};

export const mutations = {
    saveLogin(state, payload){
        state.isLogged = true
        state.user = payload;
    }
};