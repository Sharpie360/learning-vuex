<template>
  <div id="app">
    <!-- <img width="10%" src="./assets/logo.png"> -->
    <h2>Vuex Todo</h2>
    <ul>
      <li v-for="(todo, i) in todos" :key="i">
        {{ todo.title }}
      </li>
    </ul>
    <form>
      <label for="newTodo">New Todo</label><br>
      <input type="text" id="newTodo">
      <br><br>
      <button type="submit" @click.prevent="">Add</button>
    </form>
  </div>
</template>

<script>
import { mapState } from 'vuex'


export default {
  name: "App",
  computed: {
    newTodo: {
      get(){
        return this.$store.newTodo
      },
      set(value){
        this.$store.commit('setNewTodo', value)
      }
    },
    ...mapState(['todos'])
  }
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
