<template>
  <v-main class="ma-0">
    <v-container fluid class="">
      <v-row justify="center" align="center">
        <v-col md="12" lg="10" sm="11" xs="12" class="">
          <HomeStartScreen/>
        </v-col>
      </v-row>
    </v-container>

    <v-container fluid class="pa-0 pt-5 my-0">
      <v-row justify="center" align="center" style="background:#fff" class="py-0 my-0 pt-15">
        <v-col md="12" lg="10" sm="11" xs="12" class="py-0" >
          <MoreInfo />
        </v-col>
      </v-row>
    </v-container>

    <v-container fluid class="pa-0 pt-5 my-0">
      <v-row justify="center" align="center" style="background:#fff" class="py-0 my-0 pt-15">
        <v-col md="12" lg="10" sm="11" xs="12" class="py-0" >
          <AboutTechTeams />
        </v-col>
      </v-row>
    </v-container>

    <v-container fluid class="pa-0 pt-5 my-0">
      <v-divider></v-divider>
      <v-row justify="center" align="center" style="background:#fff" class="py-0 my-0 pt-15">
        <v-col md="12" lg="10" sm="11" xs="12" class="py-0" >
          <AboutStudyJams />
        </v-col>
      </v-row>
    </v-container>

    <v-container fluid class="pa-0 pt-5 my-0">
      <v-row justify="center" align="center" style="background:#fff" class="py-5 my-0">
        <v-col md="12" lg="10" sm="11" xs="12" class="py-0" >
          <FrequentlyQuestion />
        </v-col>
      </v-row>
    </v-container>
    
    <v-container fluid class="pa-0 pt-5 my-0">
      <v-row justify="center" align="center" style="background:#fff; padding-left: 6%; padding-right:20%" class="py-5 my-0">
        <v-col md="12" lg="10" sm="11" xs="12" class="py-0" >
          <v-alert
            text
            dense
            color= "#1a73e8"
            icon="mdi-star-circle"
            border="left"
          >
          <p class="google-font" style="font-size: 16px">
            <b>Descargo de responsabilidad</b> GDSC UNI es un grupo independiente; Nuestras actividades y las opiniones expresadas aquí no deben estar vinculadas de ninguna manera a Google, la corporación. Para obtener más información sobre el programa GDSC, visite: <a href="https://developers.google.com/community/gdsc">g.co/dev/gdsc</a>
          </p>
          </v-alert>
        </v-col>
      </v-row>
    </v-container>
    
 

  </v-main>
  
</template>

<script>
import { mapState } from "vuex";

export default {
  name: 'Home',
  components: {
    HomeStartScreen: () => import("@/components/home/HomeStartScreen"),
    MoreInfo: () => import("@/components/home/MoreInfo"),
    FrequentlyQuestion: () => import("@/components/home/FrequentlyQuestion"),
    AboutTechTeams: () => import("@/components/home/AboutTechTeams"),
    AboutStudyJams: () => import("@/components/home/AboutStudyJams")
},
  computed:{
    ...mapState(["config"])
  },
  methods:{

    click(){
      this.$router.push("/Solution-Challenge")
    }
  }
}
</script>

<style scoped>
  .lightModeContainer{
      background-color:#F9F9F9;
      border:1px solid #e0e0e0;
      border-radius:5px
  }
  .darkModeContainer{
      background-color:#292929;
      border:1px solid #212121;
      border-radius:5px
  }

  
</style>
