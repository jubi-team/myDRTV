<template>
  <div>
    <h3 v-if="header" class="white-text">{{header}}</h3>
    <mdb-container>
      <mdb-row class="carouselContainer" v-if="allMovies">
        <MediaItem
          v-for="(movie, index) in sortedMovies.slice(0,4)"
          v-bind:movie="movie"
          v-bind:key="movie.id"
          v-bind:index="index"
          v-bind:item="movie"
        />
      </mdb-row>
    </mdb-container>
  </div>
</template>

<script>
import { mdbContainer, mdbRow, mdbCol } from "mdbvue";
import MediaItem from "./MediaItem";
export default {
  name: "MediaCarousel",
  components: {
    mdbContainer,
    mdbRow,
    mdbCol,
    MediaItem
  },
  props: ['genre','header'],
  data() {
    return {
      // sortedMovies
      sortedMovies: []
    }
  },

  watch: {
    allMovies: function() {
      // console.log("ALL MOVES CHANGED")
      this.sortMovies()
      // this.sortMovies = this.allMovies
    },
    // sortedMovies: function() {
    //   console.log("SORTED MOVES CHANGED")
    //   // this.sortMovies()
    // },
  },

  computed: {
    allMovies() {
      return this.$store.getters.fetchedMovies
    },
    // sortedMovies() {
    //   return this.$store.getters.fetchedMovies
    // },
    // sortedMovies() {
    //   return this.sortedMovies
    // },
  },

  methods: {
    sortMovies() {
      if(this.genre == 'added') {
        this.sortedMovies = this.allMovies.filter(item => item.data.date_added)
        this.sortedMovies.sort((b, a) => a.data.date_added._seconds - b.data.date_added._seconds );
      }
      else if(this.genre == 'release') {
        this.sortedMovies = this.allMovies.filter(item => item.data.release_year)
        this.sortedMovies.sort((b, a) => a.data.release_year - b.data.release_year );
      }
      else{
        this.sortedMovies = this.allMovies.filter(item => item.data.genres && item.data.genres.includes(this.genre)).slice(0,4)
      }
    }
  }
};

</script>

<style lang="css" scoped>

.carouselContainer {
  /* height: 200px; */
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-column-gap: 10px;
  grid-row-gap: 10px;
}

</style>

