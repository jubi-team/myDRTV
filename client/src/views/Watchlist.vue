
<template>
  <div>
    <h1>Watchlist</h1>
    <div class="listContainer">
      <!-- <div class="container">
        <div class="row"> -->
        <WatchlistItem 
          v-for="(listItem, index) in watchlist.slice().reverse()"
          v-bind:listItem="listItem"
          v-bind:key="listItem.id"
          v-bind:index="index"
        />
        <!-- </div>
      </div> -->
    </div>
  </div>
</template>

<script>
import WatchlistItem from "../components/WatchlistItem";
export default {
  name: "Watchlist",
  components: {
    WatchlistItem,
  },
  data() {
    return {};
  },
  computed: {
    watchlist() {
      return this.$store.getters.fetchedUser.data.watchlist;
    }
  },
  mounted() {
    console.log(this.watchlist)
  }
};
</script>

<style lang="scss" scoped>
  .listContainer{
    display: grid;
    // grid-auto-columns: auto auto;
    grid-template-columns: auto auto auto;
    grid-column-gap: 10px;
    grid-row-gap: 10px;
  }
</style>