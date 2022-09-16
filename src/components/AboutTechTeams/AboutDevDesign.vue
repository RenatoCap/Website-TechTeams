<template>
    <v-container>
        <v-container fluid class="py-0 my-0 mt-2 mb-5" style="padding-left: 7%; padding-right:7%">
            <v-row align="center" class="py-0 my-0 pt-2">
                <v-col md="8" sm="12" cols="12" class="py-0 my-0 pr-5">
                    <p class="google-font mb-0 heading">
                        <b>
                            <span style="color: rgb(0,0,0,.87);">
                                Design Dev
                            </span> 
                        </b> 
                    </p>
                    <p class="google-font mb-0 mt-5" style="font-size:20px">
                        Crear una interfaz visualmente agradable y sencilla de usar no es una tarea sencilla, hay toda una carrera y una ingeniería detrás de está área que tiene como objetivo maximizar el uso y la experiencia del usuario. En este Tech Team se explora todo lo mencionado anteriormente, usando PWA (Progresive Web Aplication). Además podrá formar parte del equipo detrás de toda la publicidad e imagen del GDSC UNI. 
                        <br>
                    </p>
                </v-col>
                <v-col md="4" sm="9" cols="12" class="py-0 my-0">
                    <v-row justify="center">
                        <v-img
                            src='@/assets/img/TechTeams/devdesign.png'
                            class="mb-3"
                            width="35%">    
                        </v-img>
                    </v-row>
                </v-col>
            </v-row>
            <v-row align="center" class="py-0 my-0 pt-7">
                <v-container fluid style="border-radius: 18px; background-color: #E1BEE7;">
                    <v-row class="my-0 pa-5 px-6" align="center" justify="center">
                        <v-col>
                            <p class="google-font mb-0" align="center" justify="center" style="font-size:30px">
                                Tecnologías de este Tech Team
                            </p>
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
                                class="pr-4"
                                center-active
                                show-arrows
                                style="background-color: #E1BEE7;"
                            >  
                                <v-slide-item  v-slot="{ toggle }">
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
                                                <div class="ml-4">
                                                    <v-row>
                                                        <v-col md="4" lg="2" sm="4">
                                                            <v-row align="center" justify="center">
                                                                <img src="@/assets/img/what-we-do/css.svg" width="55vh">
                                                            </v-row>
                                                        </v-col>
                                                        <v-col md="4" lg="6" sm="4">
                                                            <v-row class="pt-1">
                                                                <p class="google-font px-2 ma-0 pt-2" style="font-size:22px; font-weight: 600;">
                                                                    CSS
                                                                </p>
                                                            </v-row>
                                                        </v-col>
                                                    </v-row>
                                                </div>
                                                <p class="google-font pa-2 ft-10 ma-0">
                                                    Cascading Style Sheets (CSS) es un lenguaje de hojas de estilo que se utiliza para describir la presentación de un documento escrito en HTML o XML.
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
                                        style="background-color:#f6d1de;border-color:#f6d1de;"
                                    >
                                        <v-row class="pa-3 pt-2" align="end">
                                            <v-col sm="12" md="12" col="12">
                                                <div class="ml-4">
                                                    <v-row>
                                                        <v-col md="4" lg="2" sm="4">
                                                            <v-row align="center" justify="center">
                                                                <img src="@/assets/img/what-we-do/sass.svg" width="40vh">
                                                            </v-row>
                                                        </v-col>
                                                        <v-col md="4" lg="6" sm="4">
                                                            <v-row>
                                                                <p class="google-font px-2 ma-0 pt-1" style="font-size:22px; font-weight: 600;">
                                                                    SASS
                                                                </p>
                                                            </v-row>
                                                        </v-col>
                                                    </v-row>
                                                </div>
                                                <p class="google-font pa-2 ft-10 ma-0">
                                                    Es un lenguaje de hojas de estilo compilado en CSS. Permite usar variables, reglas anidadas, mixins, funciones y más, todo co nuna sintaxis totalmente compatible con CSS.
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
                                                <div class="ml-4 pt-1">
                                                    <v-row>
                                                        <v-col md="4" lg="2" sm="4">
                                                            <v-row align="center" justify="center">
                                                                <img src="@/assets/img/what-we-do/angular.svg" width="45vh">
                                                            </v-row>
                                                        </v-col>
                                                        <v-col md="4" lg="6" sm="4">
                                                            <v-row>
                                                                <p class="google-font px-2 ma-0 pt-2" style="font-size:22px; font-weight: 600;">
                                                                    Angular
                                                                </p>
                                                            </v-row>
                                                        </v-col>
                                                    </v-row>
                                                </div>
                                                <p class="google-font pa-2 ft-10 ma-0">
                                                    Angular es una plataforma de desarrollo, contruida en TypeScript que incluye un framework basado en coponentes para crear aplicaciones web escalables.
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
                                                <div class="ml-4 pt-2">
                                                    <v-row>
                                                        <v-col md="4" lg="2" sm="4">
                                                            <v-row align="center" justify="center">
                                                                <img class="pl-2" src="@/assets/img/what-we-do/vue.svg" width="60vh">
                                                            </v-row>
                                                        </v-col>
                                                        <v-col md="4" lg="6" sm="4">
                                                            <v-row >
                                                                <p class="google-font px-2 ma-0 pt-1" style="font-size:22px; font-weight: 600;">
                                                                    Vue.js
                                                                </p>
                                                            </v-row>
                                                        </v-col>
                                                    </v-row>
                                                </div>
                                                <p class="google-font pa-2 ft-10 ma-0">
                                                    Vue es un Framework de JavaScript para construir interfaces de usuario. Se basa en HTML, CSS y JavaScript estándar, y proporciona un modelo de programación declarativo.
                                                </p>
                                            </v-col>
                                        </v-row>
                                    </v-card>
                                </v-slide-item>
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
                                                    <v-row>
                                                        <v-col md="4" lg="2" sm="4">
                                                            <v-row align="center" justify="center">
                                                                <img src="@/assets/img/what-we-do/react.svg" width="55vh">
                                                            </v-row>
                                                        </v-col>
                                                        <v-col md="4" lg="6" sm="4">
                                                            <v-row class="pt-3">
                                                                <p class="google-font px-2 ma-0" style="font-size:22px; font-weight: 600;">
                                                                    React
                                                                </p>
                                                            </v-row>
                                                        </v-col>
                                                    </v-row>
                                                </div>
                                                <p class="google-font pa-2 ft-10 ma-0">
                                                    Una librería de JavaScript para frontend gratuita y de código abierto para crear interfacez de usuario basados en componentes de interfaz de usuario.
                                                </p>
                                            </v-col>
                                        </v-row>
                                    </v-card>
                                </v-slide-item>
                                <v-slide-item v-slot="{ toggle }">
                                    <v-card
                                        class="ma-4"
                                        width="430"
                                        outline
                                        rounded="7"
                                        elevation="0"
                                        @click="toggle"
                                        style="background-color: #fff0ff;border-color:#fff0ff;"
                                    >
                                        <v-row class="pa-3 pt-2" align="end">
                                            <v-col sm="12" md="12" col="12">
                                                <div class="pt-5 pl-2">
                                                    <img src="@/assets/img/what-we-do/pwa.svg" width="100vh">
                                                </div>
                                                <p class="google-font pa-2 ft-10 ma-0 pt-6">
                                                    Progressive Web Application (PWA) son aplicaciones web que se han diseñado para que sean capaces, confiables e inestables.
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
                    v-for="(sj,i) in SJ"
                    :key="i"
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
                    >   
                        <v-img
                                height="200px"
                                :src="sj.img"
                            >
                        </v-img>
                        <div class="text-center pb-5" style="border-top: 1px solid rgb(224,224,224);">
                            <v-container>
                                <p class="google-font mt-3 mb-0 pt-2 title-card" style="font-size: 1.5em;" >
                                    {{sj.Title}}
                                </p>
                                <p class="google-font mb-0">
                                    {{sj.Duration}}
                                </p>
                                <div class="pt-5" v-if="sj.open">
                                    <v-chip
                                    class="ma-2"
                                    color="green"
                                    text-color="white"
                                    >
                                        Inscripciones abiertas
                                    </v-chip>
                                </div>
                                <div class="pt-5" v-else>
                                    <v-btn
                                        class="ma-2"
                                        outlined
                                        color="blue"
                                    >
                                        <v-icon light class="pr-2">mdi-play</v-icon>
                                        Grabaciones
                                    </v-btn>
                                </div>
                                <v-btn class="pt-2" text color="#00000DE" @click="onClick($event, sj.id)">
                                    Ver más información
                                </v-btn>
                            </v-container>
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
.text-center{
    text-align: center !important;
}
</style>

<script>
import router from "../../router";
import { config } from '@/config/config.js';
import { initializeApp } from 'firebase/app';
import {  getFirestore, collection, onSnapshot, doc } from 'firebase/firestore'

export default {
    name: 'AboutBackendDev',
    data: () => ({
      model: null,
      SJ: [],
    }),
    mounted(){
            const firebaseApp = initializeApp(config.firebase);
            const firestore = getFirestore(firebaseApp);
            const userCol = collection(firestore, 'StudyJams/');
            const userDoc = doc(userCol, 'DesignDev/');
            const newUserCol = collection(userDoc, '202201/')
            onSnapshot(newUserCol, snapshot => {
                snapshot.docs.map(d => {
                    const data = {id: d.id,  ...d.data()} ;
                    this.SJ.push(data);
                })
            });
        },
    methods: {
        onClick(e, item) {
            e.stopPropagation();
            router.push(`/study-jam/DesignDev/${item}`);
        },
    }
  }
</script>