<template>
<v-container fluid>
    <v-row align="center" justify="center" class="summary-content">
      <v-col cols="12" md="3" lg="3" sm="4">
        <p class="google-font mb-0" style="font-size:160%">¿Qué hacemos?</p>
        <p
          class="google-font mt-0 pt-3"
          style="font-size:115%"
        >
            Dentro de nuestros Tech Teams podrán aprender y compartir sus conocimientos junto con otras personas que comparten sus gustos, liderados por un Lead que los guiará en este viaje que estan por empezar.
        </p>
      </v-col>
      <v-col cols="12" md="9" lg="9" sm="8">
        <v-container fluid>
          <v-row>
            <v-col md="3" lg="3" sm="6" cols="6" class="text-center pa-2">
              <v-icon large style="font-size:300%">mdi-comment</v-icon>
              <p class="google-font mt-2" style="font-size:130%">Charlas</p>
              <p
                class="google-font"
                style="font-size:100%"
              > Aprende y conoce acerca de las tecnologías de Google en charlas realizadas por Developers Experts</p>
            </v-col>
            <v-col md="3" lg="3" sm="6" cols="6" class="text-center pa-2">
              <v-icon large style="font-size:300%">mdi-code-tags</v-icon>
              <p class="google-font mt-2" style="font-size:130%">Codelabs</p>
              <p
                class="google-font"
                style="font-size:100%"
              >Obtenga experiencia práctica y orientación de los miembros de la comunidad</p>
            </v-col>
            <v-col md="3" lg="3" sm="6" cols="6" class="text-center pa-2">
              <v-icon large style="font-size:300%">mdi-school</v-icon>
              <p class="google-font mt-2" style="font-size:130%">Certificaciones</p>
              <p
                class="google-font"
                style="font-size:95%"
              > Adquiera certificaciones gratuitas de diferentes empresas para aumentar su valor como profesional</p>
            </v-col>
            <v-col md="3" lg="3" sm="6" cols="6" class="text-center pa-2">
              <v-icon large style="font-size:300%">mdi-chart-bubble</v-icon>
              <p class="google-font mt-2" style="font-size:130%"> Study Jams </p>
              <p
                class="google-font"
                style="font-size:95%"
              > Aprende acerca de temas especificos que te servirán para la realización de proyectos en nuestros Study Jams </p>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
  </v-container>

</template>

<style>
.summary-content{
    background-color: rgb(241, 243, 244);
    padding: 2%;
    border-radius: 25px;
}
</style>