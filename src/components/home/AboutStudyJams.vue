<template>
  <v-container fluid class="py-0" style="padding-left: 4%; padding-right: 4%">
  
    <v-row align="center" justify="center">
          <v-col cols="12" md="12" lg="12" sm="12" class="pa-0">
            <v-container class="px-0 py-n3 mt-md-8 mb-10" fluid style="border: 1px solid rgb(224,224,224); border-radius:12px">
              <v-row  align="center" justify="center">
                <v-col sm="5" md="7" col="12">
                  <p class="mb-0 title-box">Study Jams</p>
                  <p style="font-size:18px">
                    El <b>Study Jam</b> es un programa de aprendizaje colectivo realizado dentro de cada Tech Team que combina la experiencia práctica de los developers con las experiencia de las tecnologías de Google.
                    <br>
                    <br>
                    Las personas interesadas en aprender sobre alguna tecnología de desarrollo se unen para perfeccionar sus habilidades y ampliar sus conocimientos en estas a través de aulas interactivas y laboratorios prácticos.
                  </p>
                  <v-btn
                      class="ma-2"
                      outlined
                      rounded
                      color="#4285F4"
                      @click="onClick($event, '/study-Jams')"
                    > 
                      Más información
                    </v-btn>
                </v-col>
                <v-col md="4" sm="4" col="12">
                    <v-img src="@/assets/img/svg/StudyJamLogo.svg" width="150vh">
                    </v-img>
                </v-col>
              </v-row>
            </v-container>
          </v-col>
    </v-row>

  </v-container>
</template>

<style>
.title-box{
  font-family: google-sans;
  font-size: 40px;
  font-weight: 300;
}
</style>

<script>
import router from "../../router";

export default {
  name: "AboutStudyJams",
  methods: {
    onClick(e, item) {
      e.stopPropagation();
      router.push(item);
    },
  }
}
</script>