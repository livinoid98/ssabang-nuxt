export const state = () => {
    return {
        isLogged: false,
        user:{

        },
        apt:{
            
        },
        cart:[],
    }
};

export const mutations = {
    saveLogin(state, payload){
        state.isLogged = true;
        state.user = payload;
    },
    aptDetail(state, payload){
        state.apt = payload;
    },
    logout(state){
        state.isLogged = false;
        state.user = {};
    },
    addCart(state, payload){
        state.cart.push(payload);
        if(state.cart.length > 3){
            state.cart.shift();
        }
    }
};