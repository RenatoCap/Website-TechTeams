<template>
    <v-container>
        <v-container fluid class="py-0 my-0 mt-2 mb-5" style="padding-left: 7%; padding-right:7%">
            <v-row align="center" class="py-0 my-0 pt-2">
                <v-col md="8" sm="12" cols="12" class="py-0 my-0 pr-5">
                    <p class="google-font mb-0 heading">
                        <b>
                            <span style="color: rgb(0,0,0,.87);">
                                Machine Learning
                            </span> 
                        </b> 
                    </p>
                    <p class="google-font mb-0 mt-5" style="font-size:20px">
                        Este Tech Team aborda todos los campos de la inteligencia artificial, incluyendo todos los procesos de elaboración de un modelo de IA, desde el data staging hasta la puesta en producción de tu modelo. Nuestro enfoque se centra principalmente en aplicar la inteligencia artificial en dispositivos móviles, páginas web o implementarlos en Google Cloud Platform para que envíen los resultados a diversos dispositivos.
                        <br>
                    </p>
                </v-col>
                <v-col md="4" sm="9" cols="12" class="py-0 my-0">
                    <v-row justify="center" class="pt-7">
                        <v-img
                            src='@/assets/img/TechTeams/ML.svg'
                            class="mb-3"
                            width="35%">    
                        </v-img>
                    </v-row>
                </v-col>
            </v-row>
            <v-row align="center" class="py-0 my-0 pt-7 d-none d-sm-block">
                <v-container fluid style="border-radius: 18px; background-color: #bbdefb;">
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
                                style="background-color: #bbdefb;"
                            >  
                                
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
                                                    <v-row>
                                                        <v-col md="4" lg="2" sm="4">
                                                            <v-row align="center" justify="center">
                                                                <img src="@/assets/img/what-we-do/tensorflow.svg" width="55vh">
                                                            </v-row>
                                                        </v-col>
                                                        <v-col md="4" lg="6" sm="4">
                                                            <v-row class="pt-2">
                                                                <p class="google-font px-2 ma-0 pt-2" style="font-size:22px; font-weight: 600;">
                                                                   TensorFlow
                                                                </p>
                                                            </v-row>
                                                        </v-col>
                                                    </v-row>
                                                </div>
                                                <p class="google-font pa-2 ft-10 ma-0">
                                                    TensorFlow es una biblioteca de software gratuito y de código abireto para Machine Learning. Tiene una gran diversidad de funciones siendo su mayor enfoque el entrenamiento y la inferencia de Redes Neuronales.
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
                                                <div class="ml-4">
                                                    <v-row>
                                                        <v-col md="4" lg="2" sm="4">
                                                            <v-row align="center" justify="center" class="ml-5">
                                                                <img src="@/assets/img/what-we-do/scikit-learn.svg" width="95vh">
                                                            </v-row>
                                                        </v-col>
                                                    </v-row>
                                                </div>
                                                <p class="google-font pa-2 ft-10 ma-0 pt-3">
                                                    Scikit Learn es una biblioteca de Machine Learing de software libre para Python. Cuenta con varios algoritmos de clasificación, regresión y agrupamiento, que incluyen Suppor-Vector Machines, Random Fortes, entre otros. 
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
                                                <div class="ml-4">
                                                    <v-row>
                                                        <v-col md="4" lg="2" sm="4">
                                                            <v-row align="center" justify="center">
                                                                <img src="@/assets/img/what-we-do/JAX.svg" width="100vh">
                                                            </v-row>
                                                        </v-col>
                                                    </v-row>
                                                </div>
                                                <p class="google-font pa-2 ft-10 ma-0 pt-4">
                                                    Google JAX es un marco de aprendizaje automático para transformar funciones númerias. Se describe como la unión mejorada de autograd y XLA (Algebra Lineal Acelerada) de TensorFlow. 
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
                                                <div class="ml-4">
                                                    <v-row>
                                                        <v-col md="4" lg="2" sm="4">
                                                            <v-row align="center" justify="center">
                                                                <img src="@/assets/img/what-we-do/pytorch.svg" width="45vh">
                                                            </v-row>
                                                        </v-col>
                                                        <v-col md="4" lg="6" sm="4">
                                                            <v-row>
                                                                <p class="google-font ma-0 pt-2" style="font-size:22px; font-weight: 600;">
                                                                Pytorch
                                                                </p>
                                                            </v-row>
                                                        </v-col>
                                                    </v-row>
                                                   
                                                </div>
                                                <p class="google-font pa-2 ft-10 ma-0 pt-4">
                                                    Pytorch es un marco para Machine Learning basado en la librería torch, que tiene usabilidad en aplicaciones como Computer Vision, Natural Language Proesing, Time Series, etc. 
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
                                                <div class="ml-4">
                                                    <v-row>
                                                        <v-col md="4" lg="2" sm="4">
                                                            <v-row align="center" justify="center">
                                                                <img src="@/assets/img/what-we-do/google-ai.svg" width="65vh">
                                                            </v-row>
                                                        </v-col>
                                                        <v-col md="4" lg="6" sm="4">
                                                            <v-row class="pt-2">
                                                                <p class="google-font px-2 ma-0 pt-2" style="font-size:22px; font-weight: 600;">
                                                                   Google IA
                                                                </p>
                                                            </v-row>
                                                        </v-col>
                                                    </v-row>
                                                </div>
                                                <p class="google-font pa-2 ft-10 ma-0 pt-3">
                                                   Google IA, es un conjunto de APIs que se encuentran incluidas en GCP (Google Cloud Platform) las cuales te permiten incluir funcionalidads rápidas de Machine Learning a tu app.
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

            <v-row class="mobile-view ma-0 pa-0 hidden-sm-and-up" align="center" justify="center">
                <v-row class="my-0 pa-5 px-6" align="center" justify="center">
                    <v-col>
                        <p class="google-font mb-0" align="center" justify="center" style="font-size:25px">
                            Tecnologías de este Tech Team
                        </p>
                    </v-col>                
                </v-row>
                <v-row class="my-0 pa-5 pt-0 mt-n5 px-6 pr-0" align="end" justify="end">
                    <!-- <v-system-bar lights-out></v-system-bar> -->
                    <v-carousel
                    :continuous="false"
                    :cycle="cycle"
                    :show-arrows="false"
                    hide-delimiter-background
                    delimiter-color="rgb(26, 115, 232)"
                    delimiter-icon="mdi-minus"
                    progress-color="rgb(26, 115, 232)"
                    height="300"
                    >
                        <v-carousel-item
                        >
                            <v-sheet
                                color="rgb(255,232,205)"
                                height="100%"
                                tile
                            >
                                <v-row
                                    class="fill-height"
                                    align="center"
                                    justify="center"
                                >
                                    <img src="@/assets/img/what-we-do/tensorflow.svg" width="55vh">
                                    <p class="google-font pt-5 pl-4" style="font-size:28px; font-weight: 600; color: grey;">
                                       TensorFlow
                                    </p>
                                </v-row>
                            </v-sheet>
                        </v-carousel-item>
                        <v-carousel-item
                        >
                            <v-sheet
                                color="rgb(251,233,231)"
                                height="100%"
                                tile
                            >
                                <v-row
                                    class="fill-height"
                                    align="center"
                                    justify="center"
                                >
                                    <v-row>
                                        <v-col md="2" lg="2" sm="2">
                                            <v-row align="center" justify="center">
                                                <img src="@/assets/img/what-we-do/scikit-learn.svg" width="150vh">
                                            </v-row>
                                        </v-col>
                                    </v-row>
                                </v-row>
                            </v-sheet>
                        </v-carousel-item>
                        <v-carousel-item
                        >
                            <v-sheet
                                color="rgb(199,239,238)"
                                height="100%"
                                tile
                            >
                                <v-row
                                    class="fill-height"
                                    align="center"
                                    justify="center"
                                >
                                    <v-row>
                                        <v-col md="2" lg="2" sm="2">
                                            <v-row align="center" justify="center">
                                                <img src="@/assets/img/what-we-do/JAX.svg" width="100vh">
                                                <p class="google-font pt-5 pl-4" style="font-size:30px; font-weight: 600; color: grey;">
                                                    JAX
                                                </p>
                                            </v-row>
                                        </v-col>
                                    </v-row>
                                </v-row>
                            </v-sheet>
                        </v-carousel-item>
                        <v-carousel-item
                        >
                            <v-sheet
                                color="rgb(199,239,238)"
                                height="100%"
                                tile
                            >
                                <v-row
                                    class="fill-height"
                                    align="center"
                                    justify="center"
                                >
                                    <v-row>
                                        <v-col md="2" lg="2" sm="2">
                                            <v-row align="center" justify="center">
                                                <img src="@/assets/img/what-we-do/pytorch.svg" width="45vh">
                                                <p class="google-font pt-5 pl-4" style="font-size:28px; font-weight: 600; color: grey;">
                                                   Pytorch
                                                </p>
                                            </v-row>
                                        </v-col>
                                    </v-row>
                                </v-row>
                            </v-sheet>
                        </v-carousel-item>
                        <v-carousel-item
                        >
                            <v-sheet
                                color="rgb(224,240,255)"
                                height="100%"
                                tile
                            >
                                <v-row
                                    class="fill-height"
                                    align="center"
                                    justify="center"
                                >
                                    <v-row>
                                        <v-col md="2" lg="2" sm="2">
                                            <v-row align="center" justify="center">
                                                <img src="@/assets/img/what-we-do/google-ai.svg" width="65vh">
                                                <p class="google-font pt-5 pl-4" style="font-size:28px; font-weight: 600; color: grey;">
                                                   Google IA
                                                </p>
                                            </v-row>
                                        </v-col>
                                    </v-row>
                                </v-row>
                            </v-sheet>
                        </v-carousel-item>
                    </v-carousel>
                </v-row>
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
            <v-row v-if=!isLoading class="my-0 py-0" align="start" justify="start">
                <v-col
                    v-for="(sj,i) in SJ"
                    :key="i"
                    class="py-0 my-0" 
                    sm="8"
                    md="4"
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
            <v-row v-if=isLoading class="my-0 py-0" align="start" justify="start">
                <v-col
                    v-for="number in 4"
                    :key="number"
                    class="py-0 my-0" 
                    sm="6"
                    md="3"
                    xl="3"
                    col="12">
                    <v-sheet
                        class="pa-3"
                    >
                        <v-skeleton-loader
                        class="mx-auto"
                        max-width="300"
                        type="card"
                        ></v-skeleton-loader>
                    </v-sheet>
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
import {  getFirestore, collection, onSnapshot, doc } from 'firebase/firestore';

export default {
    name: 'AboutML',
    data: () => ({
      model: null,
      isLoading: true,
      SJ: [],
    }),
    mounted(){
            const firebaseApp = initializeApp(config.firebase);
            const firestore = getFirestore(firebaseApp);
            const userCol = collection(firestore, 'StudyJams/');
            const userDoc = doc(userCol, 'MachineLearning/');
            const newUserCol = collection(userDoc, '202201/')
            onSnapshot(newUserCol, snapshot => {
                snapshot.docs.map(d => {
                    const data = {id: d.id,  ...d.data()} ;
                    this.SJ.push(data);
                    this.isLoading = false;
                })
            });
        },
    methods: {
        onClick(e, item) {
            e.stopPropagation();
            router.push(`/study-jam/MachineLearning/${item}`);
        },
    }
  }
</script>