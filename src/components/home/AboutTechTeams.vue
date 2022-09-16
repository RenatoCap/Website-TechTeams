<template>
  <v-container fluid class="py-0" style="padding-left: 4%; padding-right: 4%">
    <v-row class="google-font" align="center" justify="center">
      <v-col>
        <h1 justify="center" align="center">
          ¡No estas solo en esto! </h1>
        <p class="google-font mt-0 pt-10" style="font-size:120%" align="center" justify="centers">
          Sabemos que iniciarse en el mundo de la tecnología puede ser difícil si no se cuenta con un guía, por eso los Tech Teams están para ti. A través de nuestros Study Jams podrás aprender temas especificos y profundizarlos a través de la realización de proyectos.
        </p>
      </v-col>
      <!-- Techteams -->
      <v-col class="px-0 mx-0" cols="12" md="9" sm="12">
        <v-container fluid>
          <v-row align="center" justify="center">
            <v-col
              v-for="(tt, i) in techTeamData"
              :key="i"
              sm="5"
              md="5"
              cols="12"
            >
              <div class="pa-5 px-md-10 card" :style= "{background: tt.color}">
                <p class="google-font mb-0 td-title-card">
                  {{tt.name}}
                </p>
                <p class="google-font mt-0 pt-5 td-subtitle-card">
                  {{tt.summary}}
                </p>
                <div class="text-center pt-2">
                  <v-btn 
                    text
                    @click="onClick($event, tt.url)"
                  >
                    Ver más información
                  </v-btn>
                </div>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import router from "../../router";
import { config } from '@/config/config.js';
import { initializeApp } from 'firebase/app';
import {  getFirestore, collection, onSnapshot } from 'firebase/firestore'

export default {
  name: "App",
  data() {
    return {
      techTeamData: [],
    };
  },
  mounted(){
    const firebaseApp = initializeApp(config.firebase);
    const firestore = getFirestore(firebaseApp);
    const userCol = collection(firestore, 'TechTeams');
    onSnapshot(userCol, snapshot => {
      snapshot.docs.map(d => {
          const data = d.data();
          this.techTeamData.push(data);
      })
    });
    console.log(this.techTeamData);
  },
  methods: {
    onClick(e, item) {
      e.stopPropagation();
      router.push(item);
    },
  }
};
</script>

<style>
.card {
  border-radius: 15px;
  padding: 2%;
  min-height: 400px;
}
.td-title {
  font-size: 45px;
  font-weight: 600;
  color: #221f1f;
}
.td-subtitle {
  font-size: 20px;
  text-align: justify;
  color: rgb(0, 0, 0, 0.87);
}
.td-title-card {
  font-size: 30px;
  text-align: center;
  font-weight: 600;
}
.td-subtitle-card {
  font-size: 18px;
  text-align: center;
}


@media screen and (min-width: 11800px) {
  .td-title {
    font-size: 55px;
    font-weight: 600;
    color: #212121;
  }
  .td-subtitle {
    font-size: 23px;
    color: rgb(0, 0, 0, 0.87);
  }
  .td-title-card {
    font-size: 40px;
    text-align: center;
    font-weight: 600;
  }
}

.heading{
    font-size:30px;
    font-weight: 600;
}
.td-subtitle{
    font-size: 20px;
}
@media screen and (min-width: 600px){
  .heading{
      font-size:55px;
      font-weight: 600;
  }
  .subheading{
      font-size: 23px;
      font-weight: 500;
  }
  .subheading2{
      font-size: 20px;
  }
  .td-subtitle{
      font-size: 23px;
      font-weight: 500;
  }
  .td-description{
      font-size: 19px;
      opacity: 0.9;
  }
}
</style>
