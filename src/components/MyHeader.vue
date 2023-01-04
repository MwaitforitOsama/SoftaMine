<template>
  <v-app-bar fixed shrink-on-scroll class="my-nav-bar">
    <v-toolbar color="transparent">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-img src="../assets/logo1.png" class="mr-4" />
      <v-toolbar-items>
        <ul>
          <li><router-link to="/">Home</router-link></li>

          <li><router-link to="/about">About</router-link></li>
          <li><router-link to="/quote">Get a Quote</router-link></li>
        </ul>
      </v-toolbar-items>

      <v-navigation-drawer v-model="drawer" absolute>
        <v-list nav dense>
          <v-list-item-group>
            <v-btn text to="/">Home</v-btn>
            <v-btn text to="/about">About</v-btn>
            <v-btn text to="/quote">Get a Quote</v-btn>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
    </v-toolbar>
  </v-app-bar>
</template>

<script>
export default {
  data: () => ({
    drawer: false,
    group: null,
  }),

  watch: {
    group() {
      this.drawer = false;
    },
  },
};
</script>

<style scoped>
a:-webkit-any-link {
  text-decoration: none !important;
}
a:-webkit-any-link:active {
  text-decoration: underline !important;
  color: antiquewhite !important;
}
.v-application a {
  color: black !important;
}
.v-responsive {
  max-width: 35px !important;
}
.v-toolbar__items {
  width: calc(100% - 5%);
  justify-content: center;
}
.v-item-group {
  display: flex;
  flex-direction: column;
}
.v-navigation-drawer--is-mobile:not(.v-navigation-drawer--close),
.v-navigation-drawer--temporary:not(.v-navigation-drawer--close) {
  height: 100vh !important;
}
</style>

<style>
.theme--light.v-app-bar.v-toolbar.v-sheet {
  background-color: rgba(255, 255, 255, 0.25) !important;
}
@media screen and (max-width: 768px) {
  .v-toolbar__items {
    display: none;
  }
}
.v-sheet.v-toolbar:not(.v-sheet--outlined) {
  box-shadow: none !important;
}

@media screen and (min-width: 768px) {
  .v-application--is-ltr .v-toolbar__content > .v-btn.v-btn--icon:first-child {
    display: none;
  }
}
ul li {
  display: inline-block;
  padding-left: 20px;
  color: white !important;
  font-style: "Montserrat";
  font-weight: 400;
  font-size: medium;
}
.theme--light.v-app-bar.v-toolbar.v-sheet {
  height: 60px !important;
}
</style>
