<template>
  <div class="carousel-container">
    <div
      class="carousel-items"
      v-animate-css="{ name: 'slide', duration: 500, easing: 'ease' }"
    >
      <div class="carousel-item" v-for="(item, index) in items" :key="index">
        <img :src="getImgUrl(item.src)" :style="{ width: '70px' }" />
      </div>
    </div>
  </div>
</template>

<script>
const illustrations = require.context("@/assets/logos", true);
var arr = illustrations.keys();
arr = arr.map((i) => i.slice(1));
for (var i = 0; i < arr.length; i++) {
  arr[i] = { src: arr[i] };
}

// Add a duplicate set of images to the end of the array
const items = [...arr, ...arr];

export default {
  data() {
    return {
      getImgUrl(item) {
        return require("../assets/logos" + item);
      },
      items: items,
      currentIndex: 0,
      intervalId: 0,
      speed: 2000, // adjust this value to change the speed of the carousel
    };
  },
  mounted() {
    this.intervalId = setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.items.length;
    }, this.speed);
  },

  beforeDestroy() {
    clearInterval(this.intervalId);
  },
};
console.log(items.length);
</script>
<style>
@keyframes slide {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
}
</style>

<style>
.carousel-container {
  position: relative;
  overflow: hidden;
  height: 100px;
}

.carousel-items {
  display: flex;
  transition: transform 0.5s ease;
  will-change: transform;
  animation: slide 30s linear 1s infinite;
}

.carousel-item {
  flex: 0 0 auto;
}
</style>

<style>
.carousel-item {
  display: flex;
  justify-content: center;
  align-items: center;
}
img {
  border-style: none;
  margin-left: 60px !important;
  margin-right: 60px !important;
}
.v-window__container {
  flex-direction: row !important;
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
