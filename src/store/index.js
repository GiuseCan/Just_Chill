import { createStore } from 'vuex'
import state from './state'
import * as mutations from './mutations'
import * as actions from './actions'
import * as getters from './getters'

const store = createStore({
    state,
    mutations,
    getters,
    actions
})

export default store