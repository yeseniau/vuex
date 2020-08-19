<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />

    <ul>
      <li>
        <a href>
          <router-link :to="{name: 'home'}">Inicio</router-link>
        </a>
      </li>
      <li>
        <a href>
          <router-link :to="{name: 'search'}">Busqueda</router-link>
        </a>
      </li>
    </ul>

    <transition name="vista">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333333;
}
li {
  float: left;
}

li a {
  display: block;
  color: white;
  text-align: center;
  padding: 15px;
  text-decoration: none;
}
.vista-enter-active,
.vista-leave-active {
  transition: opacity 0.1s;
}
.vista-enter,
.vista-leave-to {
  opacity: 0;
}
</style>
