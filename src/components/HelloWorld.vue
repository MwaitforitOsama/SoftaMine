<template>
  <div class="main">
    <div class="canvas-container">
      <canvas ref="canvas" />
      <div class="text">
        <h2>
          <span>SoftaMine</span>
          <span>SoftaMine</span>
          <span>Shaping Ideas into Reality</span>
        </h2>
      </div>
    </div>
    <v-container>
      <v-col class="mb-5" cols="12"> </v-col>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
};
</script>
<script>
export default {
  data() {
    return {
      message: "SoftaMine",
    };
  },
  mounted() {
    const canvas = this.$refs.canvas;
    const ctx = canvas.getContext("2d");
    const w = (canvas.width = window.innerWidth);
    const h = (canvas.height = window.innerHeight);
    const stars = [];
    const numStars = 1000;
    const maxRadius = 2;

    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * w,
        y: Math.random() * h,
        radius: Math.random() * maxRadius,
      });
    }

    function draw() {
      ctx.clearRect(0, 0, w, h);
      ctx.fillStyle = "black";

      stars.forEach((star) => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      stars.forEach((star) => {
        star.x += star.radius / 0.5;
        star.y += star.radius / 0.5;

        if (star.x > w) {
          star.x = 0;
        }
        if (star.y > h) {
          star.y = 0;
        }
      });

      requestAnimationFrame(draw);
    }

    requestAnimationFrame(draw);
  },
};
</script>
<style scoped></style>

<style>
.v-application .mb-3 {
  text-align: center !important;
}
canvas {
  background-color: white !important;
  width: 100% !important;
}

.canvas-container {
  position: relative;
}
.stars:hover {
  transform: translate3d(2px);
}
.text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: transparent;
  text-transform: uppercase;
  font-size: 6em;
  text-align: center;
  font-family: consolas;
  margin: 0;
  padding: 0;
}
h2 span:nth-child(1) {
  position: absolute;
  top: 0;
  left: 0;
  color: red;
  transition: 0.5s;
  clip-path: polygon(0 0, 100% 0, 100% 50%, 0 50%);
  overflow: hidden;
}
h2:hover span:nth-child(1) {
  transform: translateY(-35px);
}
h2 span:nth-child(2) {
  position: absolute;
  top: 0;
  left: 0;
  color: black;
  transition: 0.5s;
  clip-path: polygon(0 50%, 100% 50%, 100% 100%, 0 100%);
  overflow: hidden;
}
h2:hover span:nth-child(2) {
  transform: translateY(40px);
}

h2 span:nth-child(3) {
  position: relative;
  top: 50%;
  left: 0;
  transform: translateY(-50%) scaleY(0);
  width: 100%;
  color: red;

  font-size: 0.3em;
  font-weight: 800;
  padding-left: 20px;
  margin-left: 20px;
  text-align: center;
  display: inline-flex;
}

h2:hover span:nth-child(3) {
  transform: translateY(-50%) scaleY(1);
}

@media screen and (max-width: 768px) {
  .text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-60%, -40%);
    color: transparent;
    text-transform: uppercase;
    font-size: 2em;
    text-align: center;
    font-family: consolas;
    margin: 0;
    padding: 0;
  }
  h2 span:nth-child(1) {
    position: absolute;
    top: 0;
    left: 0;
    color: red;
    padding-right: 20px;
    justify-content: center;
    transition: 0.5s;
    clip-path: polygon(0 0, 100% 0, 100% 50%, 0 50%);
    overflow: hidden;
  }
  h2:hover span:nth-child(1) {
    transform: translateY(-15px);
  }
  h2 span:nth-child(2) {
    position: absolute;
    top: 0;
    left: 0;
    color: black;
    transition: 0.5s;
    clip-path: polygon(0 50%, 100% 50%, 100% 100%, 0 100%);
    overflow: hidden;
  }
  h2:hover span:nth-child(2) {
    transform: translateY(15px);
  }

  h2 span:nth-child(3) {
    position: relative;
    top: 80%;
    left: 20px;
    transform: translate(-0%) scaleY(0);
    width: 100%;
    color: bisque;

    font-size: 0.25em;
    font-weight: 800;
    padding-left: 10px;
    margin-left: 10px;
    text-align: center;
    display: inline-flex;
  }

  h2:hover span:nth-child(3) {
    transform: translateY(-50%) scaleY(1);
  }
}
</style>
