<template>
  <Dashboard v-bind:members="members"/>
</template>

<script>
import Dashboard from './components/Dashboard.vue'

export default {
  name: 'App',
  components: {
    Dashboard
  },
  data(){
    return {
      members: [
        {
          id: 1,
          name: 'Stefan Trost',
          skills: [
            'Angular Genius',
            'RxJs Master',
            'Recruiting',
            'All things business'
          ]
        },
        {
          id: 2,
          name: 'Thomas Ober',
          skills: [
            'A little Angular on the side',
            'NgRx nerd',
            'PowerPoint presentation specialist'
          ]
        }
      ],
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

