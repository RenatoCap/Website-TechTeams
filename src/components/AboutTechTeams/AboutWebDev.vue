<template>
    <v-container>
        <v-container fluid class="py-0 my-0 mt-2 mb-5" style="padding-left: 7%; padding-right:7%">
            <v-row align="center" class="py-0 my-0 pt-2">
                <v-col md="8" sm="12" cols="12" class="py-0 my-0">
                    <p class="google-font mb-0 heading">
                        <b>
                            <span style="color: rgb(0,0,0,.87);">
                                Web Development
                            </span> 
                        </b> 
                    </p>
                    <p class="google-font mb-0 mt-5 subheading">
                        Este Tech Team se enfoca en el desarrollo de cualquier tipo de aplicaciones ya sea para móviles o Web. Son bienvenidos todos los desarrolladores frontend, backend, fullstack, de android o IOS. ¿Eres nuevo? no te preocupes, aprende junto a otras personas a desarrollar el diseño de la interfaz web usando frameworks como angular o vue que facilitan tu trabajo, también aprende el cómo interactúa tu página web con el servidor y otros dispositivos electrónicos que envían información a tu página web, usando lenguajes de programación como Go.
                    </p>
                </v-col>
                <v-col md="4" sm="9" cols="12" class="py-0 my-0">
                    <v-row justify="center">
                        <v-img
                        :src="require('@/assets/gift/app-dev.gif')"
                        :lazy-src="require('@/assets/gift/app-dev.gif')"
                        class="mb-3"
                        width="55%">    
                        </v-img>
                    </v-row>
                </v-col>
            </v-row>
            <v-row align="center" class="py-0 my-0 pt-7">
                <v-container class="my-md-15 py-15" fluid style="border-radius: 18px; background-color: rgb(255, 236, 179);">
                    <v-row class="my-0 pa-5 px-6" align="center" justify="center">
                        <v-col class="border-right" sm="12" md="7" col="12">
                            <p class="google-font mb-0 h1-heading">
                                ¿Qué tecnologías puedo aprender 
                                <br>
                                en los Study Jams de este Tech Team?
                            </p>
                        </v-col>
                        <v-col sm="12" md="5" col="12">
                            <v-row align="center" justify="center"> 
                                <v-col class="text-center" sm="4" md="4" col="4">
                                    <p class="google-font mb-0 h1-heading">
                                        3
                                    </p>
                                    <p style="font-size:95%;">
                                        De Google
                                    </p>
                                </v-col>
                                <v-col class="text-center" sm="4" md="4" col="4">
                                    <p class="google-font mb-0 h1-heading">
                                        2+
                                    </p>
                                    <p style="font-size:95%;">
                                        De otras empresas
                                    </p>
                                </v-col>
                            </v-row>

                        </v-col>
                        
                    </v-row>
                    <v-row class="my-0 pa-5 pt-0 mt-n5 px-6 pr-0" align="end" justify="end">
                    <v-sheet
                        class="mx-auto"
                        elevation="0"
                        max-width="100%"
                    >   
                            <v-slide-group
                                v-model="model"
                                class="pa-4"
                                center-active
                                show-arrows
                                style="background-color: rgb(255, 236, 180);"
                            >  
                                <v-slide-item v-slot="{ toggle }">
                                    <v-card
                                        class="ma-4"
                                        width="430"
                                        outline
                                        rounded="7"
                                        elevation="0"
                                        @click="toggle"
                                        style="background-color: rgb(224,240,255);border-color:rgb(224,240,255);"
                                    >
                                        <v-row class="pa-3 pt-2" align="end">
                                            <v-col sm="12" md="12" col="12">
                                                <div>
                                                    <img src="@/assets/img/what-we-do/go.svg" width="100vh">
                                                </div>
                                                <p class="google-font px-2 ma-0" style="font-size:22px; font-weight: 600;">
                                                    Golang
                                                </p>
                                                <p class="google-font pa-2 ft-10 ma-0">
                                                    Golang es un lenguaje muy importante para que te inicies en el mundo de la programación :p.
                                                </p>
                                            </v-col>
                                        </v-row>
                                    </v-card>
                                </v-slide-item>
                                <v-slide-item  v-slot="{ toggle }">
                                    <v-card
                                        class="ma-4"
                                        width="430"
                                        outline
                                        rounded="7"
                                        elevation="0"
                                        @click="toggle"
                                        style="background-color: rgb(255,232,205);border-color:rgb(255,232,205);"
                                    >
                                        <v-row class="pa-3 pt-2" align="end">
                                            <v-col sm="12" md="12" col="12">
                                                <div class="ml-4">
                                                    <img src="@/assets/img/what-we-do/firebase.svg" width="40vh">
                                                </div>
                                                <p class="google-font px-2 ma-0 pt-2" style="font-size:22px; font-weight: 600;">
                                                    Firebase
                                                </p>
                                                <p class="google-font pa-2 ft-10 ma-0">
                                                    Firebase es una herramienta muy útil en el desarrollo de software
                                                </p>
                                            </v-col>
                                        </v-row>
                                    </v-card>
                                </v-slide-item>
                                <v-slide-item  v-slot="{ toggle }">
                                    <v-card
                                        class="ma-4"
                                        width="430"
                                        outline
                                        rounded="7"
                                        elevation="0"
                                        @click="toggle"
                                        style="background-color: rgb(251,233,231);border-color:rgb(251,233,231);"
                                    >
                                        <v-row class="pa-3 pt-2" align="end">
                                            <v-col sm="12" md="12" col="12">
                                                <div class="ml-4 pt-2">
                                                    <img src="@/assets/img/what-we-do/angular.svg" width="45vh">
                                                </div>
                                                <p class="google-font px-2 ma-0 pt-2" style="font-size:22px; font-weight: 600;">
                                                    Angular
                                                </p>
                                                <p class="google-font pa-2 ft-10 ma-0">
                                                    Angular es un Framework que te permite crear aplicaciones web de una manera rápida y eficiente.
                                                </p>
                                            </v-col>
                                        </v-row>
                                    </v-card>
                                </v-slide-item>
                                <v-slide-item  v-slot="{ toggle }">
                                    <v-card
                                        class="ma-4"
                                        width="430"
                                        outline
                                        rounded="7"
                                        elevation="0"
                                        @click="toggle"
                                        style="background-color: rgb(199,239,238);border-color:rgb(199,239,238);"
                                    >
                                        <v-row class="pa-3 pt-2" align="end">
                                            <v-col sm="12" md="12" col="12">
                                                <img class="pl-2 pt-2" src="@/assets/img/what-we-do/vue.svg" width="60vh">
                                                <p class="google-font px-2 ma-0 pt-2" style="font-size:22px; font-weight: 600;">
                                                    Vue.js
                                                </p>
                                                <p class="google-font pa-2 ft-10 ma-0">
                                                    Vue es una herramienta de desarrollo que te permite bla bla bla
                                                </p>
                                            </v-col>
                                        </v-row>
                                    </v-card>
                                </v-slide-item>
                            </v-slide-group>
                    </v-sheet>
                    </v-row>
                </v-container>
            </v-row>
            <v-row align="center" class="py-0 my-0 pt-7">
                <v-col cols="12" md="12" lg="12" class="pa-0">
                    <div class="ma-1">
                        <div class="pa-5">
                            <p class="google-font mb-0 td-title">Nuestros Study Jams</p>
                            <p class="google-font mt-0 pt-3 td-subtitle">
                            Nuestra comunidad tiene como objetivo proporcionar Study Jams que cubran los distintos tópicos en los Tech Teamss
                            </p>
                        </div>
                    </div>
                </v-col>
            </v-row>
        </v-container>
        <v-container class="my-0 py-0 pb-md-15" fluid>
            <v-row class="my-0 py-0" align="start" justify="start">
                <v-col
                    v-for="n in 20"
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
                                src="https://img.freepik.com/free-vector/web-development-programmer-engineering-coding-website-augmented-reality-interface-screens-developer-project-engineer-programming-software-application-design-cartoon-illustration_107791-3863.jpg"
                            >
                        </v-img>
                        <div class="text-center pb-5" style="border-top: 1px solid rgb(224,224,224);">
                            <p class="google-font mt-3 mb-0 pt-2" style="font-size: 1.5em;" >
                                Introducción al desarrollo Web  
                            </p>
                            <p class="google-font mb-0">
                                22 de agosto - 2 de septiembre
                            </p>
                            <div class="pt-5">
                                 <v-btn
                                    class="ma-2"
                                    outlined
                                    color="blue"
                                >
                                <v-icon light class="pr-2">mdi-play</v-icon>
                                Grabaciones
                            </v-btn>
                            </div>
                            <v-btn class="pt-2" text color="#00000DE" href="#">
                                Ver más información
                            </v-btn>
                        </div>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>  
    </v-container>
</template>

<style>
.heading{
    font-size: 55px;
    font-weight: bolder;
}
.subheading{
    font-size: 23px;
    font-weight: 500; 
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
.h1-heading{
    font-size: 36px;
    font-weight: 600;
}
.border-right{
    border-right: 1px solid #d3d3d3;
}
.text-center{
    text-align: center !important;
}
</style>

<script>
  export default {
    data: () => ({
      model: null,
    }),
  }
</script>