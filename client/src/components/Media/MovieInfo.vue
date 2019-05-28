<template>
  <div class="movie-info">
    <div class="row">
      <mdb-col class="movie-description" md="6">{{movieInfo.data.description}}</mdb-col>
      <mdb-col md="0.5"></mdb-col>
      <mdb-col class="movie-details" md="6">
        <mdb-row>
          <mdb-col md="4" class="right-align">Cast</mdb-col>
          <mdb-col md="8">{{this.filteredActors}}</mdb-col>
        </mdb-row>
        <mdb-row>
          <mdb-col md="4" class="right-align">Directors</mdb-col>
          <mdb-col md="8">{{movieInfo.data.directors[0]}}</mdb-col>
        </mdb-row>
        <mdb-row>
          <mdb-col md="4" class="right-align">Year</mdb-col>
          <mdb-col md="8">{{movieInfo.data.release_year}}</mdb-col>
        </mdb-row>
      </mdb-col>
    </div>
  </div>
</template>


<script>
import { mdbCol, mdbRow } from "mdbvue";
export default {
  name: "MovieInfo",
  components: {
    mdbCol,
    mdbRow
  },
  data() {
    return {
      movieInfo: "",
      actors: "",
      filteredActors: ""
    };
  },
  created() {
    this.movieInfo = this.$store.getters.fetchedMovie;
    this.actors = this.movieInfo.data.actors;
    var actors = this.actors;
    var slicedActors = actors.slice(0, 3);
    slicedActors = slicedActors.join(",");
    this.filteredActors = slicedActors;
  }
};
</script>

<style lang="scss" scoped>
div.movie-info {
  color: #fff;

  .movie-description {
    text-align: left;
    padding-left: 0px;
  }

  .right-align {
    text-align: right;
  }

  .movie-details {
    .row {
      padding-bottom: 5px;
    }
  }
}
</style>


