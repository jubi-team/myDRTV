<template>
  <div>
    <mdb-container>
      <mdb-row>
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
  }
};
</script>

<style lang="css" scoped>
</style>

