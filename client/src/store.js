import Vue from "vue";
import Vuex from "vuex";
import VuexPersistence from "vuex-persist";
import axios from "axios";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    movies: [],
    movie: {},
    user: {}
  },

  mutations: {
    FETCH_MOVIES: (state, action) => {
      state.movies = action.payload;
    },

    FETCH_MOVIE: (state, action) => {
      state.movie = action.payload;
    },

    RESET_MOVIE: (state) => {
      state.movie = {};
    },

    ADD_USER: (state, action) => {
      state.user = action.payload;
    },

    FETCH_USER: (state, action) => {
      state.user = action.payload;
    },

    LOGOUT_USER: (state, action) => {
      state.user = action.payload;
    },

    THUMBS_UP: (state) => {
      state.movie.data.likes++;
    },

    // THUMBS_UP: (state, action) => {
    //   state.movie.data.likes = action.payload;
    // },

    // THUMBS_DOWN: (state, action) => {
    //   state.user = action.payload;
    // }

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
        .get(`https://drtv-ab06b.firebaseapp.com/api/movies/${payload}`)
        .then(response => {
          commit("FETCH_MOVIE", {
            payload: response.data
          });
        })
        .catch(error => {
          console.log(error);
        });
    },

    resetMovie({ commit }) {
      commit("RESET_MOVIE");
    },

    addUser({ commit }, payload) {
      axios
        .post("https://drtv-ab06b.firebaseapp.com/api/users", payload)
        .then(response => {
          console.log(response);
          commit("ADD_USER", {
            payload: response.data
          });
        })
        .catch(error => {
          console.log(error);
        });
    },

    async fetchUser({ commit }, payload) {
      // console.log(payload)
      return await axios
        .get(`https://drtv-ab06b.firebaseapp.com/api/users/${payload.email}`, payload)
        .then(response => {
          // console.log(response);
          commit("FETCH_USER", {
            payload: response.data
          });
          return response.data
        })
        .catch(error => {
          console.log(error);
        });
    },

    logoutUser({ commit }) {
      // console.log(payload)
      commit("LOGOUT_USER", {
        payload: {}
      });
    },

    thumbsUp({ commit }) {
      // console.log(payload)
      commit("THUMBS_UP");
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
    },
    isLoggedIn: state => {
      return state.user.data && state.user.id ? true : false
    }
  },
  plugins: [new VuexPersistence().plugin]
});

export default store;
