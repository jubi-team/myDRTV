<template>
  <div>
    <mdb-container>
      <mdb-row class="carouselContainer" v-if="testMovies">
          <!-- v-for="(movie, index) in $store.getters.fetchedMovies.filter(item => item.genre.includes(genre)).slice(0,4)" -->
        <MediaItem
          v-for="(movie, index) in testMovies"
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
  props: ['genre'],
  data() {
    return {
      test: []
    }
  },
  watch: {
    testMovies: function() {
      this.blaTest()
    },
    // testMovies: function() {
    //   // this.isInWatchlist()
    //   console.log('WATCH')
    //   // console.log(this.testMovies)
    //   if(this.testMovies.data && this.testMovies.data.genres) {
    //   this.test = this.testMovies.data.genres.filter(function(item) {
    //     // console.log(item.data.genres)
    //     // return item.data.genres.includes('comedy') ? true : false;
    //     return item.data.genres[0] == 'Thriller' ? true : false;
    //   })
    //   }
    // },
  },

  computed: {
    testMovies() {
      console.log('testmovies top')
      // console.log(this.testMovies && this.testMovies[0] && this.testMovies[0].data && this.testMovies[0].data.genres ? 'JÁ GENRES' : 'NEI GENRES')
      // this.$store.getters.fetchedMovies.filter(item => console.log(item.data.genres.includes('comedy')))
      return this.$store.getters.fetchedMovies
      // return await this.$store.getters.fetchedMovies.filter(function(item) {
      //   console.log(item.data.genres)
      //   return item.data.genres.includes('comedy') ? true : false;
      //   // return item.data.genres[0] == 'Thriller' ? true : false;
      // })
    },
    
  },

  methods: {
    blaTest() {
      if(this.testMovies && this.testMovies[0] && this.testMovies[0].data && this.testMovies[0].data.genres && this.testMovies[0].data.genres[0]) {
        this.testMovies.filter(function(item) {
          item.data.genres.includes('comedy') ? console.log('JÁ ', item) : console.log('NEI ', item)
        //   console.log(item.data.genres)
          // return item.data.genres.includes('comedy') ? true : false;
          // return item.data.genres[0] == 'Thriller' ? true : false;
        })
      }else{
        console.log('ekki genres!!!')
      }
    }
  }

  // mounted() {
  //   console.log(this.genre)
  //   // this.test = this.$store.getters.fetchedMovies
  //   // this.test = this.$store.getters.fetchedMovies.filter(item => console.log(item.data.genres[0].toLowerCase()))
  //   // this.test = this.$store.getters.fetchedMovies.filter(item => {return item.data.genres.includes('comedy') ? true : false})
  //   this.test = this.$store.getters.fetchedMovies.filter(function(item) {
  //     // console.log(item.data.genres)
  //     // return item.data.genres.includes('comedy') ? true : false;
  //     return item.data.genres[0] == 'Thriller' ? true : false;
  //   });
  //   console.log(this.test)
  // }
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

