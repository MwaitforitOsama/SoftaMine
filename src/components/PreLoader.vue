<template>
  <div>
    <!-- Display the loading component while loading is true -->
    <loading-component v-if="loading"></loading-component>

    <!-- Display the main content of the website when loading is false -->
    <main-component v-else></main-component>
  </div>
</template>

<script>
import LoadingComponent from "../components/LoadingComponent.vue";
import MainComponent from "../components/MainComponent.vue";
export default {
  data() {
    return {
      loading: true,
    };
  },
  beforeMount() {
    this.loading = false;
  },
  components: {
    LoadingComponent,
    MainComponent,
  },
};
</script>
