<template>
  <div>
    <h3>Movies</h3>
    <MediaCarousel class="mb-4" v-bind:genre="'Comedy'"/>
    <SignupAd v-if="!isLoggedIn" class="mb-4"/>
    <!-- <MediaCarousel class="mb-4" v-bind:genre="'Action'"/>
    <MediaCarousel class="mb-4"/>
    <MediaCarousel class="mb-4"/> -->
  </div>
</template>

<script>
import MediaCarousel from "../Media/MediaCarousel";
import SignupAd from "../Components/SignupAd";
export default {
  name: "Home",
  components: {
    MediaCarousel,
    SignupAd
  },

  created() {
    this.$store.dispatch("fetchMovies");
  },

  computed: {
    // getUser() {
    //   return this.$store.state.movies;
    // }
    isLoggedIn() {
      return this.$store.getters.isLoggedIn;
    }
  },

  methods: {
    filterMovies() {
      console.log(this.$store.state.movies);
      // console.log(this.$store.state)
    }
  }
};
</script>

<style  lang="scss" scoped>
h3 {
  text-align: left;
  color: #fff;
}
</style>
