<template>
  <mdb-col
    class="media-item"
    md="3"
    v-bind:style="{backgroundImage: `url(${movieItem.data.poster})`}"
  >
    <router-link class="media-image" v-bind:to="{name: 'MovieView', params: { id: movieItem.id }}">
      <div class="test"></div>
      <div class="play-wrapper">
        <div class="play"></div>
      </div>
    </router-link>
  </mdb-col>
</template>


<script>
import { mdbCol } from "mdbvue";

export default {
  name: "MediaItem",
  components: {
    mdbCol
  },
  props: ["movie"],

  data() {
    return {
      movieItem: this.movie
    };
  }
};
</script>

<style lang="scss" scoped>
div.test {
  width: 100%;
  height: 100%;
  padding: 30px;
}
.media-item {
  width: 100%;
  height: 100%;
  background-size: cover;
  border: 1px solid #fff;
  position: relative;
  padding: 80px;
  margin-right: 10px;
}

.media-image {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 10;
}

.play-wrapper {
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  right: 0;
  opacity: 0;
  transition: 0.3s opacity;

  &:hover {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    right: 0;
    opacity: 1;
  }
}

.play {
  position: absolute;
  top: calc(50% - 25px);
  left: calc(50% - 30px);
  width: 50px;
  height: 50px;
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
    top: calc(50% - 10px);
    left: calc(50% - 5px);
    display: block;
    content: "";
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    border-color: transparent transparent transparent #fff;
    border-style: solid;
    border-width: 10px 0 10px 16px;
  }

  &:hover {
    background-color: rgba(0, 33, 66, 0.9);
    z-index: 20;
  }
}
</style>

