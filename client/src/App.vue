<template>
  <router-view/>
   <button @click="click"></button>
</template>

<script>

export default {
  components: {},
  name: 'App',
  methods: {
    click() {
    }
  }
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
  padding: 20px;
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
