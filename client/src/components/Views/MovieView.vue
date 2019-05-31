<template>
  <div class="container">
    <div class="movie-poster mb-4" v-bind:style="{backgroundImage: `url(${movieData && movieData.data ? movieData.data.poster : ''}`}">
      <div class="play-wrapper">
        <div class="play"></div>
      </div>
    </div>
    <SignupAd v-if="!isLoggedIn" class="mb-4"/>
    <mdb-row v-if="movieData && movieData.data" class="movie-details-header">
      <mdb-col md="8">
        <h1 class="movie-title">{{movieData.data.title}}</h1>
      </mdb-col>
      <mdb-col md="4" class="users-rating">

        <mdb-btn flat class="white-text">
          <span>
            <mdb-icon icon="thumbs-up"/>
            <p>{{movieData.data.likes}}</p>
          </span>
        </mdb-btn>
        <mdb-btn flat class="white-text">
          <span>
            <mdb-icon icon="thumbs-down"/>
            <p>{{movieData.data.dislikes}}</p>
          </span>
        </mdb-btn>

      </mdb-col>
    </mdb-row>
    <div v-if="movieData && movieData.data" class="container">
      <MovieInfo v-bind:movie="movieData"/>
    </div>
  </div>
</template>

<script>
import MovieInfo from "../Media/MovieInfo";
import SignupAd from "../Components/SignupAd";
import {
  mdbContainer,
  mdbRow,
  mdbCol,
  mdbCard,
  mdbCardBody,
  mdbCardUp,
  mdbAvatar,
  mdbIcon,
  mdbBtn,
} from "mdbvue";
import axios from "axios";

export default {
  name: "MovieView",
  components: {
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbCard,
    mdbCardBody,
    mdbCardUp,
    mdbAvatar,
    mdbIcon,
    mdbBtn,
    MovieInfo,
    SignupAd,
  },
  data() {
    return {
      movieID: ""
    };
  },

  // updated() {
  //   document.querySelector("footer").classList.add("footer-view");
  // },

  // beforeDestroy() {
  //   document.querySelector("footer").classList.remove("footer-view");
  // },
  computed: {
    isLoggedIn() {
      return this.$store.getters.isLoggedIn;
    },
    movieData() {
      return this.$store.getters.fetchedMovie;
    }
  },

  mounted() {
    
  },

  beforeCreate() {
    this.movieID = this.$route.params.id;
    let payload = this.movieID
    this.$store.dispatch("fetchMovie", payload)
    // this.movieID = this.$route.params.id;
    // console.log(this.movieID);
    // this.registerUser();
    // this.movieData = this.$store.state.movie;
    // const jMovie = this.$store.getters.fetchedMovie;
    // document.querySelector("footer").classList.add("footer-view");
  },

  beforeDestroy() {
    this.$store.dispatch("resetMovie");
  },

  methods: {
    
  }
};
</script>

<style lang="scss" scoped>
div.container {
  color: #fff;
  text-align: left;
  div.movie-poster {
    background-size: cover;
    background-repeat: no-repeat;
    height: 80vh;
    width: 100%;
    position: relative;
  }

  .movie-details-header {
    padding: 30px 0px 30px 0px;

    .users-rating {
      display: flex;
      align-items: center;
      justify-content: flex-end;

      p {
        padding-left: 10px;
        margin: 0;
        font-weight: 400;
      }

      span {
        display: flex;
        align-items: baseline;
      }
    }
  }

  .play-wrapper {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    right: 0;
    z-index: 8;
    transition: 0.3s opacity;

    &:hover {
      position: absolute;
      height: 100%;
      width: 100%;
      top: 0;
      right: 0;
    }
  }

  .play {
    position: absolute;
    top: calc(50% - 25px);
    left: calc(50% - 30px);
    width: 90px;
    height: 90px;
    display: block;
    border: 2px solid #fff;
    border-radius: 50%;
    padding: 0;
    margin: 0 auto;
    user-select: none;
    background-color: rgba(0, 0, 0, 0.6);
    transition: background-color 0.5s ease;
    z-index: -1;

    &:after {
      position: absolute;
      top: calc(50% - 18px);
      left: calc(50% - 12px);
      display: block;
      content: "";
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      border-color: transparent transparent transparent #fff;
      border-style: solid;
      border-width: 18px 0 18px 28px;
    }

    &:hover {
      background-color: rgba(0, 33, 66, 0.9);
      z-index: 20;
      cursor: pointer;
    }
  }
}
</style>