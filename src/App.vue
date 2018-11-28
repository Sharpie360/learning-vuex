<template>
  <div id="app">
    <!-- <img width="10%" src="./assets/logo.png"> -->
    <h2>Vuex Todo</h2>
    <ul>
      <li v-for="(todo, i) in todos" :key="i">
        {{ todo.title }}
      </li>
    </ul>
    <form @submit.prevent="addTodo">
      <label for="newTodo">New Todo</label><br>
      <input v-model="newTodo" type="text" id="newTodo">
      <br><br>
      <button type="submit">Add</button>
    </form>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'


export default {
  name: "App",
  computed: {
    newTodo: {
      get(){
        return this.$store.state.newTodo
      },
      set(value){
        this.$store.commit('setNewTodo', value)
      }
    },
    ...mapState(['title', 'todos'])
  },
  methods: mapMutations(['addTodo'])
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
  width: 25%;
  margin: 0 auto;
}
</style>
