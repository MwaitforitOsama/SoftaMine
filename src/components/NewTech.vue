<template>
  <v-carousel :show-arrows="true" hide-delimiters>
    <!-- <v-carousel-item
      v-for="(item, i) in items"
      :key="i"
      :src="getImgUrl(item.src)"
    ></v-carousel-item> -->
    <div class="carousel-item">
      <img :src="getFirstIndex(items)" />

      <img :src="getSecondIndex(items)" :style="{ opacity: 0.5, width: 100 }" />
    </div>
  </v-carousel>
</template>

<script>
const illustrations = require.context("@/assets/logos", true);
var arr = illustrations.keys();
arr = arr.map((i) => i.slice(1));
for (var i = 0; i < arr.length; i++) {
  arr[i] = { src: arr[i] };
}
console.log(arr);
export default {
  data() {
    return {
      getImgUrl(item) {
        return require("../assets/logos" + item);
      },
      getFirstIndex(item) {
        return require("../assets/logos" + item[0].src);
      },
      getSecondIndex(item) {
        return require("../assets/logos" + item[1].src);
      },

      items: arr,
    };
  },
};
</script>

<style>
.carousel-item {
  display: flex;
  justify-content: center;
  align-items: center;
}
.img {
  max-width: 100px !important;
}

@media screen and (max-width: 768px) {
  .carousel-item img {
    width: 90%;
  }
}

@media screen and (max-width: 480px) {
  .carousel-item img {
    width: 80%;
  }
}
</style>
