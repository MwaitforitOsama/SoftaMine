<template>
  <v-appbar>
    <v-toolbar color="primary" fixed>
      <v-toolbar-side-icon v-if="showHamburgerMenu"></v-toolbar-side-icon>
      <v-app-bar-nav-icon v-if="!showHamburgerMenu"></v-app-bar-nav-icon>
      <v-img src="../assets/logo1.png" class="mr-4" />
      <v-toolbar-items fill-space justify-center>
        <v-btn text to="/">Home</v-btn>
        <v-btn text to="/about">About</v-btn>
        <v-btn text to="/quote">Get a Quote</v-btn>
      </v-toolbar-items>
      <v-toolbar-side-icon v-if="showHamburgerMenu"></v-toolbar-side-icon>
    </v-toolbar>
  </v-appbar>
</template>

<script>
export default {
  data() {
    return {
      showHamburgerMenu: false,
    };
  },
  mounted() {
    // Determine if the screen width is less than or equal to 768px
    if (window.innerWidth <= 768) {
      this.showHamburgerMenu = true;
    }
  },
};
</script>

<style scoped>
.v-responsive {
  max-width: 30px !important;
}
.v-toolbar__items {
  width: calc(100% - 110px);
  justify-content: center;
}
</style>
