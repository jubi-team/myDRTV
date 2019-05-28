<template>
  <div>
    <h3>Movies</h3>
    <MediaCarousel/>
  </div>
</template>

<script>
import MediaCarousel from "../Media/MediaCarousel";
export default {
  name: "Home",
  components: {
    MediaCarousel
  },

  created() {
    this.$store.dispatch("fetchMovies");
  },

  computed: {
    getUser() {
      return this.$store.state.movies;
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
