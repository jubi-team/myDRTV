import Vue from "vue";
import Vuex from "vuex";
import VuexPersistence from "vuex-persist";
import axios from "axios";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    movies: [],
    movie: {},
    user: []
  },

  mutations: {
    FETCH_MOVIES: (state, action) => {
      state.movies = action.payload;
    },

    FETCH_MOVIE: (state, action) => {
      state.movie = action.payload;
    },

    ADD_USER: (state, action) => {
      state.user = action.payload;
    }
  },

  actions: {
    fetchMovies({ commit }) {
      axios
        .get("https://drtv-ab06b.firebaseapp.com/api/movies")
        .then(response => {
          commit("FETCH_MOVIES", {
            payload: response.data
          });
        })
        .catch(error => {
          console.log(error);
        });
    },

    fetchMovie({ commit }, payload) {
      axios
        .get(`https://drtv-ab06b.firebaseapp.com/api/movies/${payload.id}`)
        .then(response => {
          commit("FETCH_MOVIE", {
            payload: response.data
          });
        })
        .catch(error => {
          console.log(error);
        });
    },

    addUser({ commit }, payload) {
      axios
        .post("https://drtv-ab06b.firebaseapp.com/api/user", payload)
        .then(response => {
          console.log(response);
          commit("ADD_USER", {
            payload: response.data
          });
        })
        .catch(error => {
          console.log(error);
        });
    }
  },

  getters: {
    fetchedMovies: state => {
      return state.movies;
    },
    fetchedMovie: state => {
      return state.movie;
    },
    fetchedUser: state => {
      return state.user;
    }
  },
  plugins: [new VuexPersistence().plugin]
});

export default store;
