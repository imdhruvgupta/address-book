import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  // Note: For simplicity, maintaining ids as index+1.
  state: {
    nextId: 5,
    
    addresses: [{
      id: 1,
      name: 'Dhruv',
      phone: '98736',
      streetAddress: '21 Greens Road, New Delhi'
    }, {
      id: 2,
      name: 'Leo',
      phone: '123876',
      streetAddress: '445 Mount Eden Road, Berlin'
    }, {
      id: 3,
      name: 'Sherlock',
      phone: '445882',
      streetAddress: '221B Baker Street, London'
    }, {
      id: 4,
      name: 'John',
      phone: '87352',
      streetAddress: '32 Wilson Street, Auckland'
    }]
  },
  getters: {
    getAddressById: (state) => (id) => {
      // Accessing by index which id-1.
      return state.addresses[id-1];
    }
  },
  mutations: {
    addAddress: function(state, address) {
      // Updating address array and incrementing nextId.
      state.addresses.push(address);
      state.nextId++;
    },
    editAddress: function(state, address) {
      // Accessing by index which id-1.
      state.addresses[address.id-1] = address
    }
  }
})
