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
      <v-row class="text-center">
        <v-col cols="12"> </v-col>
        <h1 class="display-2 font-weight-bold mb-3">
          Shaping Ideas Into Reality
        </h1>

        <v-col class="mb-4">
          <p class="subheading font-weight-regular">
            We at SoftaMine believe in productivity, innovation and creativity.
            Providing solutions to problems has been our key motivator. Our firm
            strives to be the epitome of professionalism and excellence. We
            offer our clients complete digital agility, with just 1 number to
            call for all of their digital needs. Our skilled team is able to
            understand both the technical and business challenges when creating
            digital products. We value your ideas the most. You dream, we
            deliver!
          </p>
        </v-col>

        <v-col class="mb-5" cols="12">
          <h2 class="headline font-weight-bold mb-3">What's next?</h2>

          <v-row justify="center">
            <a
              v-for="(next, i) in whatsNext"
              :key="i"
              :href="next.href"
              class="subheading mx-3"
              target="_blank"
            >
              {{ next.text }}
            </a>
          </v-row>
        </v-col>

        <v-col class="mb-5" cols="12">
          <h2 class="headline font-weight-bold mb-3">Important Links</h2>

          <v-row justify="center">
            <a
              v-for="(link, i) in importantLinks"
              :key="i"
              :href="link.href"
              class="subheading mx-3"
              target="_blank"
            >
              {{ link.text }}
            </a>
          </v-row>
        </v-col>

        <v-col class="mb-5" cols="12"> </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",

  data: () => ({
    ecosystem: [
      {
        text: "vuetify-loader",
        href: "https://github.com/vuetifyjs/vuetify-loader",
      },
      {
        text: "github",
        href: "https://github.com/vuetifyjs/vuetify",
      },
      {
        text: "awesome-vuetify",
        href: "https://github.com/vuetifyjs/awesome-vuetify",
      },
    ],
    importantLinks: [
      {
        text: "Documentation",
        href: "https://vuetifyjs.com",
      },
      {
        text: "Chat",
        href: "https://community.vuetifyjs.com",
      },
      {
        text: "Made with Vuetify",
        href: "https://madewithvuejs.com/vuetify",
      },
      {
        text: "Twitter",
        href: "https://twitter.com/vuetifyjs",
      },
      {
        text: "Articles",
        href: "https://medium.com/vuetify",
      },
    ],
    whatsNext: [
      {
        text: "Explore components",
        href: "https://vuetifyjs.com/components/api-explorer",
      },
      {
        text: "Select a layout",
        href: "https://vuetifyjs.com/getting-started/pre-made-layouts",
      },
      {
        text: "Frequently Asked Questions",
        href: "https://vuetifyjs.com/getting-started/frequently-asked-questions",
      },
    ],
  }),
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
      ctx.fillStyle = "white";

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
<style scoped>
.v-application .display-2 {
  padding-top: 80px;
  font-size: 100px !important;
  line-height: 110% !important;
}
</style>

<style>
canvas {
  background-color: black !important;
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
  color: white;
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
  color: white;
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
  color: bisque;

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
    color: white;
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
