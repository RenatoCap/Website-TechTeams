<template>
    <v-container fluid class="py-0 my-0 mt-2 mb-5" style="padding-left: 7%; padding-right:7%">
        <v-row align="center" class="py-0 my-0">
            <v-col md="8" sm="12" cols="12" class="py-0 my-0">
                <div class="container ma-5 pt-5">
                    <img  class="image-container" src="@/assets/img/SJ/studyJam.svg">
                    <p class="google-font mb-0 mt-5 content-subtitle mr-5">
                        Study Jam es un programa de aprendizaje colectivo que combina la experiencia práctica de los desarrolladores con la experiencia de Google Cloud. Todos los estudiantes con ideas afines se unen para perfeccionar sus habilidades y ampliar sus conocimientos sobre alguna de las tecnologías de desarrollo a través de aulas interactivas y laboratorios prácticos.
                        <br>
                        <br>
                        Con Los Study Jams, los miembros de nuestra comunidad aprenderán las herramientas y capacidades fundamentales de las tecnologías que abarcan cada uno de los Tech Teams, además de compartir experiencias y resolver problemas prácticos de manera conjunta. Todo esto lo realizán guiados por un lead.
                    </p>
                </div>
            </v-col>
            <v-col md="4" sm="12" cols="12" class="py-0 my-0 mt-10">
                <v-img class="study-jam-picture" src="@/assets/img/SJ/iconJam.svg" />
            </v-col>
        </v-row>
        <v-row align="center" class="py-0 my-0 mt-10">
            <v-col class="py-0 my-0 mt-3">
                <div class="container" style="margin-left: 20px">
                    <p class="content-title">Study Jam Extended</p>
                    <p class="google-font content-subtitle">
                        Los Study Jam Extended están diseñados para todos aquellos estudiantes que recién se inician en el mundo de las tecnologías de desarrollo. Durante estos Study Jams se enseñarán los conocimientos básicos y fundamentales para que posteriormente puedas formar parte de un Study Jam de alguno de nuestros Tech Teams.
                    </p>
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
                </div>
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
    data () {
        return {
            e1: 1,
            SJ: [],
            isLoading: true
        }
    },
    mounted(){
        const firebaseApp = initializeApp(config.firebase);
        const firestore = getFirestore(firebaseApp);
        const userCol = collection(firestore, 'StudyJamExtended');
        onSnapshot(userCol, snapshot => {
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
            router.push(`/study-jam-extended/${item}`);
        },
    }
}
</script>


<style>
.content-title {
    font-size:38px;
    font-weight: bold;
}
.content-subtitle {
    font-size: 20px;
}
.image-container{
    width:50vh;
}
.study-jam-picture {
    width: 45vh;
}
@media (max-width: 767.98px) {
    .content-title {
        font-size:28px;
        font-weight: bold;
    }
    .content-subtitle {
        font-size: 18px;
    }
    .image-container{
        width:34vh;
    }
    .study-jam-picture {
        width: 40vh;
    }
}
</style>
    