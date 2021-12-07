import { createStore } from 'vuex'

export default createStore({
  strict: true,
  state: {
    user: {
      first_name: 'Diego',
      last_name: 'Oliveira',
      email: 'diego9123msi@gmail.com'
    },
    cart: [],
    payment: {}
  },
  mutations: {
    
    //cart
    ADD_PRODUCT(state, payload) {
      const existProduct = state.cart.find( p => p.id === payload.id);
      
      if(existProduct) {
        existProduct.qnt++;
      }else{
        payload.qnt = 1;
        state.cart.push(payload);
      }
      
    },
    REMOVE_PRODUCT(state, payload) {
      const existProduct = state.cart.find( p => p.id === payload.id);
      
      if(existProduct) {
        
        if(existProduct.qnt > 1){

          existProduct.qnt--;

        }else{
          const productIndex = state.cart.findIndex( p => p.id === payload.id);
          state.cart.splice(productIndex, 1)

        }

      }

    },

    //user
    SAVE_FIRST_NAME(state, payload) {
      state.user.first_name = payload;
    },
    SAVE_LAST_NAME(state, payload){
      state.user.last_name = payload;
    }

  },
  actions: {
    saveFirstName(context, payload){
      context.commit('saveFirstName', payload)
    }
  },
  getters: {
    fullName(state) {
      return `${state.user.first_name} ${state.user.last_name}`
    }
  },
  modules: {
    users: {
      state: () => ({
        first_name: 'tiago'
      }),
      mutations: {},
      actions: {},
      getters: {},
      
    }
  }

})
