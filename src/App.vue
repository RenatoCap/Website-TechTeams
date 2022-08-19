<template>
  <v-app>
    <Toolbar/>
    <Drawer/>
    <Views/>
    <Footer/>
  </v-app>
</template>

<script>
export default {
  name: "Codelab",
  components: {
    Toolbar:()=>import('@/components/core/Toolbar'),
    Drawer:()=>import('@/components/core/Drawer'),
    Views:()=>import('@/components/core/Views'),
    Footer:()=>import('@/components/core/Footer')
  },
};
</script>

