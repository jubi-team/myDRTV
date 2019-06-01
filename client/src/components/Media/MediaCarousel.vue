<template>
  <div>
    <mdb-container>
      <mdb-row class="carouselContainer">
        <MediaItem
          v-for="(movie, index) in $store.getters.fetchedMovies"
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
  mounted() {
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

