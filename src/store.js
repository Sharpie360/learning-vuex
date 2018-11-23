import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        newTodo: '',
        todos: [{
            title: 'Learn Vuejs',
            completed: false
        },
        {
            title: 'Learn Vuex',
            completed: false
        },
        {
            title: 'Integrate Vuex',
            completed: false
        }]
    },
    mutations: {
        setNewTodp(state, value){
            state.newTodo = value
        }
    },
    actions: {
        
    }
})