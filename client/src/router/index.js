import Vue from "vue";
import Router from "vue-router";
import Home from "@/components/Views/Home";
import MovieView from "@/components/Views/MovieView";
import Search from "@/components/Views/Search";
import Watchlist from "@/components/Views/Watchlist";
import Account from "@/components/Views/Account";
import Register from "@/components/Views/Register";
import Login from "@/components/Views/Login";

Vue.use(Router);
export default new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/home",
      name: "Home",
      component: Home
    },
    {
      path: "/register",
      name: "Register",
      component: Register
    },
    {
      path: "/login",
      name: "Login",
      component: Login
    },
    {
      path: "/watchlist",
      name: "Watchlist",
      component: Watchlist
    },
    {
      path: "/account",
      name: "Account",
      component: Account
    },
    {
      path: "/search",
      name: "Search",
      component: Search
    },
    {
      path: "/movie-view/:id",
      props: true,
      name: "MovieView",
      component: MovieView
    }
    // {
    //   path: "/staff/bike-info/:id",
    //   props: true,
    //   name: "StaffBikeDetailsComponent",
    //   component: StaffBikeDetailsComponent
    // }
  ],
  mode: "history"
});
