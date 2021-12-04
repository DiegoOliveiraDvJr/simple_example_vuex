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
    addProduct(state, payload) {
      const existProduct = state.cart.find( p => p.id === payload.id);
      
      if(existProduct) {
        existProduct.qnt++;
      }else{
        payload.qnt = 1;
        state.cart.push(payload);
      }
      
    },

    //user
    saveFirstName(state, payload) {
      state.user.first_name = payload;
    },
    saveLastName(state, payload){
      state.user.last_name = payload;
    }

  },
  actions: {
    saveFirstName(context, payload){
      context.commit('saveFirstName', payload)
    }
  },
  modules: {
  }
})
