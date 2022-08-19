<template>
  <v-container fluid class="py-0" style="padding-left: 4%; padding-right: 4%">
   
    <v-row class="google-font" align="center" justify="center">
      
      <v-col>
        <h1 justify="center" align="center">
        ¡No estas 
        <mark>
           solo 
        </mark>
        en esto!
        </h1>
        <p class="google-font mt-0 pt-10" style="font-size:120%" align="center" justify="centers">
          Sabemos que iniciarse en el mundo de la tecnología puede ser difícil si no se cuenta con un guía, por eso los Tech Teams están para ti. A través de nuestros Study Jams podrás aprender temas especificos y profundizarlos a través de la realización de proyectos.
        </p>
      </v-col>

      <v-col class="px-0 mx-0" cols="12" md="9" sm="12">
        <v-container fluid>
          <v-row align="center" justify="center">

            <v-col sm="5" md="5" cols="12">
              <div class="pa-5 px-md-10 card" style="background: #ffecb3">
                <p class="google-font mb-0 td-title-card">
                  Web Dev
                </p>
                <p class="google-font mt-0 pt-5 td-subtitle-card">
                  ¿Interesado en el desarrolló de aplicaciones Web? ¿Quieres aprender más sobre el frontend o el backend? ¿Quieres crear páginas web como la que estás viendo ahora? ¡Este es el Tech Team diseñado para ti!
                </p>
                <div class="text-center pt-2">
                  <v-btn 
                    text
                    @click="onClick($event, '/webdev')"
                  >
                    Ver más información
                  </v-btn>
                </div>
              </div>
            </v-col>


            <v-col sm="5" md="5" cols="12">
              <div class="pa-5 px-md-10 card" style="background:#E1BEE7">
                <p class="google-font mb-0 td-title-card">
                   UX / UI
                </p>
                <p class="google-font mt-0 pt-5 td-subtitle-card">
                  Diseñar una aplicación móvil no es solo escribir código, también consiste en diseñar un producto que sea agradable para el usuario y fácil de usar, tan fácil que hasta un niño de 5 años pueda utilizarlo. ¿Te interesa está área?
                </p>
                <div class="text-center pt-2">
                  <v-btn 
                    text
                    @click="onClick($event, '/uxUi')"
                  >
                    Ver más información
                  </v-btn>
                </div>
              </div>
            </v-col>


            <v-col sm="5" md="5" cols="12">
              <div class="pa-5 px-md-10 card" style="background: #ffcdd2">
                <p class="google-font mb-0 td-title-card">
                  Cloud Dev
                </p>
                <p class="google-font mt-0 pt-5 td-subtitle-card">
                  Google Cloud es una plataforma que ofrece una gran cantidad de servicios para diversos campos ¿Interesado en IoT o Compute Engine? ¿Quieres aprender acerca de Google Cloud y todos los beneficios que te brinda? ¡Únete a este Tech team!
                </p>
                <div class="text-center pt-2">
                  <v-btn 
                    text
                    @click="onClick($event, '/clouddev')"
                  >
                    Ver más información
                  </v-btn>
                </div>
              </div>
            </v-col>

            <v-col sm="5" md="5" cols="12">
              <div class="pa-5 px-md-10 card" style="background: #bbdefb">
                <p class="google-font mb-0 td-title-card">
                  DS & AI
                </p>
                <p class="google-font mt-0 pt-5 td-subtitle-card">
                 Data Science e Inteligencia artificial, son dos áreas que tienen mucha demanda en la actualidad, si estás interesado en conocer y aprender cómo funcionan los algoritmos de Google y aprender a utilizar sus herramientas, este es el Tech Team para ti.
                </p>
                <div class="text-center pt-2">
                  <v-btn 
                    text
                    @click="onClick($event, '/ds&ml')"
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

    <v-row class="google-font" align="center" justify="center"> </v-row>
  </v-container>
</template>

<script>
import { mapState } from "vuex";
import router from "../../router";

export default {
  name: "App",
  data() {
    return {
      dialog: false,
      dialog1: false,
      dialog2: false,
      dialog3: false,
    };
  },
  computed: {
    ...mapState(["config"]),
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
mark {
  position: relative;
  z-index: 0;
  padding: 0 0 10px;
  background-color: #fefefe;

}
mark:after{
  content: "";
  position: absolute;
  width: 170px;
  height: 22px;
  top: 85%;
  bottom: 0;
  left: 0%;
  z-index: 1;
  transform: translate(-45px);
  background-color: #F44336;
  mask-image: url('../../assets/img/svg/marker.svg');
}

.card {
  border-radius: 15px;
  padding: 2%;
  min-height: 350px;
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
