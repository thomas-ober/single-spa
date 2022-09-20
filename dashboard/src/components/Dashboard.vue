<template>
  <div class="container">
    <a href="./mainpage">Back to the Main page</a>
    <h1>Dashboard</h1>
    <div class="profiles">
      <div v-for="member in members" :key="member.id" class="profile">
        <h3>Name: {{member.name}}</h3>
        <p>Skills:</p>
        <ul>
          <li v-for="skill in member.skills" :key="skill">{{skill}}</li>
        </ul>
      </div>
    </div>
    <h3>This page was build using Vue.js 3</h3>
  </div>
  
</template>

<script>
 

export default {
  // eslint-disable-next-line
  name: 'Dashboard',
  props: {
    members: Array
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.container h1 {
  display: inline;
}

.profiles {
  display: flex;
  padding: 24px;
  justify-content: space-around;
  width: 100%;
}

.profile {
  padding: 24px;
  box-shadow: 1px 12px 12px 2px black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 250px;
  height: 200px;
}

.profile p {
  margin: 0px;
}
</style>
