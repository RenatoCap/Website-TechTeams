<template>
  <v-app-bar 
    app 
    hide-on-scroll
    elevation="1"
    color= #fff 
    style="padding-left: 4%; padding-right:4%;"
    >
    <v-app-bar-nav-icon aria-label="Hamburger Menu" @click="toggleDrawer" class="d-md-none d-lg-none"></v-app-bar-nav-icon>
    <v-toolbar-title class="google-font px-0" style="width:280px">
      <a href="/" aria-current="page" class="google-font grey--text text--darken-2 router-link-exact-active router-link-active" style="text-decoration: none; font-size: 125%;">
          <p 
            class="google-font my-0 mb-0" 
            style="font-weight: bold;"
          >
            <span style="color: rgb(102,102,102);">Tech</span>
            <span style="color: #F44336;">Teams</span>
          </p>
          <p class="google-font mb-1 mt-n2" style="font-size: 10px; color: rgb(128,128,128);">by GDSC UNI</p>
        </a>
    </v-toolbar-title>
     <v-tabs
      left
      class="hidden-sm-and-down"
    >
      <v-tab
        aria-label="toolbar links"
        v-for="(link, i) in links.filter((obj) => obj.meta.showToolbar)"
        :key="i"
        :to="link.to"
        class="google-font"
        @click="onClick($event, link)"
        style="text-transform: capitalize; font-size:17px;"
        >{{ link.text }}</v-tab
      >
    </v-tabs>
    <v-btn
        class="hidden-sm-and-down"
        rounded color="#3c4043"
        outlined
        style="color: grey;"
      >
        GDSC UNI
      </v-btn>
  </v-app-bar>
</template>

<script>
import { mapState, mapGetters, mapMutations } from "vuex";
export default {
  name: "Toolbar",
  data: () => ({
    isOffline: false
  }),
  computed: {
    ...mapState(["config"]),
    ...mapGetters(["links"])
  },
  methods: {
    ...mapMutations(["toggleDrawer"]),
    onClick(e, item) {
      e.stopPropagation();
      if (item.to || !item.href) return;
      this.$vuetify.goTo(item.href);
    },
  }
};
</script>
<style scoped>
  .whiteText{
    color:white
  } 
  .blackText{
    color: rgba(0,0,0,.87);
  } 
</style>
