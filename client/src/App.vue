<template>
  <div id="app">
    <Header id="header"/>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <div class="container">
      <router-view></router-view>
    </div>
    <Footer id="footer"/>
  </div>
</template>

<script>
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbvue/build/css/mdb.css";
// import HelloWorld from "./components/HelloWorld.vue";
import Home from "./components/Views/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default {
  name: "app",
  components: {
    Home,
    Header,
    Footer
  },
  updated() {
    if (this.$route.path === "/search") {
      document.querySelector("body").classList.add("search");
    } else if (this.$route.path === "/account") {
      document.querySelector("body").classList.add("account");
    } else {
      document.querySelector("body").classList.add("main");
    }
  },
  mounted() {
    if (this.$route.path === "/search") {
      document.querySelector("body").classList.add("search");
    } else if (this.$route.path === "/account") {
      document.querySelector("body").classList.add("search");
    } else {
      document.querySelector("body").classList.add("main");
    }
  }
};
</script>

<style>
body.search,
body {
  background-color: #05021f;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}

input#txtSearchMedia {
  padding-left: 24px;
  width: 100%;
}
</style>
