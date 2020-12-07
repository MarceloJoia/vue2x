import Vue from 'vue'
import Vuex from 'vuex'
import companies from './modules/companies'

Vue.use(Vuex)

// Store é com S maiusculo
const store = new Vuex.Store({
    modules: {
        companies,
    }
})

export default store
