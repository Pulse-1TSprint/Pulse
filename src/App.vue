<template>
  <div id="nav" v-if="$store.state.user">
    <button class="Logout" @click="$store.dispatch('logout')">Выйти</button>
  </div>
  <router-view/>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  background: black;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.Logout {
  background: #1C1147;
  color: #fff;
  width: 140px;
  height: 35px;
  border-radius: 31px;
}
</style>
