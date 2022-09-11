<template>
    <v-container fluid class="py-0 my-0 mt-2 mb-5" style="padding-left: 7%; padding-right:7%">
        <v-row align="center" class="py-0 my-0">
            <v-col md="8" sm="12" cols="12" class="py-0 my-0">
                <div class="container ma-5 pt-5">
                    <img src="@/assets/img/SJ/studyJam.svg" width="400vh">
                    <p class="google-font mb-0 mt-5 content-subtitle mr-5">
                        Study Jam es un programa de aprendizaje colectivo que combina la experiencia práctica de los desarrolladores con la experiencia de Google Cloud. Todos los estudiantes con ideas afines se unen para perfeccionar sus habilidades y ampliar sus conocimientos sobre alguna de las tecnologías de desarrollo a través de aulas interactivas y laboratorios prácticos.
                        <br>
                        <br>
                        Con Los Study Jams, los miembros de nuestra comunidad aprenderán las herramientas y capacidades fundamentales de las tecnologías que abarcan cada uno de los Tech Teams, además de compartir experiencias y resolver problemas prácticos de manera conjunta. Todo esto lo realizán guiados por un lead.
                    </p>
                </div>
            </v-col>
            <v-col md="4" sm="12" cols="12" class="py-0 my-0 mt-10">
                <v-img src="@/assets/img/SJ/iconJam.svg" width="80vh"/>
            </v-col>
        </v-row>
        <v-row align="center" class="py-0 my-0 mt-10">
            <v-col class="py-0 my-0 mt-10">
                <div class="container" style="margin-left: 20px">
                    <p class="content-title">Study Jam Extended</p>
                    <p class="google-font content-subtitle">
                        Los Study Jam Extended estan diseñados para todos aquellos estudiantes que recien se inician en el mundo de las tecnologías de desarrollo. Durante estos Study Jams se enseñaran los conocimientos básicos y fundamentales para que posteriormente puedas formar parte de un Study Jam de alguno de nuestros Tech Teams.
                    </p>
                    <v-container class="my-0 py-0 pb-md-15" fluid>
            <v-row class="my-0 py-0" align="start" justify="start">
                <v-col
                    v-for="n in 10"
                    :key="n"
                    class="py-0 my-0" 
                    sm="6"
                    md="3"
                    xl="3"
                    col="12"
                >
                    <v-card 
                        class="mt-10" 
                        style="border-radius: 1px solid rgb(224,224,224); border-radius: 10px;" 
                        elevation="2" 
                        max-width="500"
                    >   
                        <v-img
                                height="200px"
                                src="https://www.svgrepo.com/show/354444/terraform.svg"
                            >
                        </v-img>
                        <div class="text-center pb-5" style="border-top: 1px solid rgb(224,224,224);">
                            <p class="google-font mt-3 mb-0 pt-2" style="font-size: 1.5em;" >
                                Introducción a Terraform  
                            </p>
                            <p class="google-font mb-0">
                                22 de agosto - 2 de septiembre
                            </p>
                            <div class="pt-5">
                                <v-chip
                                class="ma-2"
                                color="green"
                                text-color="white"
                                >
                                    Inscripciones abiertas
                                </v-chip>
                            </div>
                            <v-btn class="pt-2" text color="#00000DE" href="#">
                                Ver más información
                            </v-btn>
                        </div>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>  
                </div>
            </v-col>
        </v-row>
    </v-container>
    
</template>

<style>
.content-title {
    font-size:38px;
    font-weight: bold;
}
.content-subtitle {
    font-size: 20px;
}
</style>

<script>
    export default {
      data () {
        return {
          e1: 1,
        }
      },
    }
  </script>