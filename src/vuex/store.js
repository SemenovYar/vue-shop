import Vue from 'vue'
import Vuex from 'vuex'

import actions from "@/vuex/actions";
import mutations from "@/vuex/mutations";
import getters from "@/vuex/getters";


Vue.use(Vuex);

let store = new Vuex.Store({
    state: {
        products: [],
        cart: []
    },
    mutations,
    actions,
    getters,

});

export default store;