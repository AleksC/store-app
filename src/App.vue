<template>
  <div id="app">
    <nav class="navbar navbar-expand-sm bg-primary navbar-dark">
       <ul class="navbar-nav">
        <li class="nav-item">
          <router-link to="/products" class="nav-link">products</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/customers" class="nav-link">customers</router-link>
        </li>
      </ul>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import AppCustomers from "./components/AppCustomers.vue";
import AppProducts from "./components/AppProducts.vue";
import CustomerService from "./services/CustomerService.js";

export default {
  name: "app",
  components: {
    HelloWorld,
    AppCustomers,
    AppProducts
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
