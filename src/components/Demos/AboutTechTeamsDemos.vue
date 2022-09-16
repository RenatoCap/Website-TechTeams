<template>
  <v-container fluid class="py-0" style="padding-left: 4%; padding-right: 0%">
    <v-row class="google-font" align="center" justify="center">
      <v-col class="px-0 mx-0" cols="12" md="9" sm="12">
        <v-container fluid>
          <v-row align="center" justify="center">
            <v-col
              v-for="(tt, i) in techTeamData"
              :key="i"
              sm="5"
              md="4"
              cols="12"
            >
              <div class="pa-5 px-md-2 card" :style= "{background: tt.color}">
                <div class="text-center pt-2">
                  <v-btn 
                    text
                    class="letter"
                    @click="onClick($event, tt.url)"
                  >
                  {{tt.demo}}
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
    const userCol = collection(firestore, 'Demos');
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
  border-radius: 40px;
  padding: 2%;
  min-height: 100px;
}

@media screen and (min-width: 600px){
  .card {
    min-width: 230px;
  }
}
</style>
