<template>
    <v-container>
        <v-container fluid class="py-0 my-0 mt-2 mb-5" style="padding-left: 7%; padding-right:7%">
            <v-row align="center" class="py-0 my-0 pt-2">
                <v-col md="8" sm="12" cols="12" class="py-0 my-0 pr-5">
                    <p class="google-font mb-0 heading">
                        <b>
                            <span style="color: rgb(0,0,0,.87);">
                                Cloud
                            </span> 
                        </b> 
                    </p>
                    <p class="google-font mb-0 mt-5" style="font-size:20px">
                        Cloud o la computación en la nube es acceso bajo demanda, a través de Internet, a recursos informáticos como aplicaciones, servidores (físicos y virtuales), almacenamiento de datos, herramientas de desarrollo, funciones de red y más, alojados en un centro de datos remoto gestionado por un proveedor de servicios en la nube.
                        <br>
                        <br>
                        Dentro de los Study Jams de este tech team aprenderán acerca de redes, identidad, seguridad y big data. Asi como los servicios que ofrecen las plataformas de servicios como GCP, AWS, Azure e IBM Cloud entre otros.
                    </p>
                </v-col>
                <v-col md="4" sm="9" cols="12" class="py-0 my-0">
                    <v-row justify="center">
                        <v-img
                            src='@/assets/img/TechTeams/cloud.png'
                            class="mb-3"
                            width="55%">    
                        </v-img>
                    </v-row>
                </v-col>
            </v-row>
            <v-row align="center" class="py-0 my-0 pt-7">
                <v-container fluid style="border-radius: 18px; background-color: #FFCDD2;">
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
                                class="pa-4"
                                center-active
                                show-arrows
                                style="background-color: #FFCDD2;"
                            >  
                                <v-slide-item v-slot="{ toggle }">
                                    <v-card
                                        class="ma-4"
                                        width="430"
                                        outline
                                        rounded="7"
                                        elevation="0"
                                        @click="toggle"
                                        style="background-color: #C8E6C9;border-color: #C8E6C9;"
                                    >
                                        <v-row class="pa-3 pt-2" align="end">
                                            <v-col sm="12" md="12" col="12">
                                                <div>
                                                    <img src="@/assets/img/what-we-do/gcp.svg" width="100vh">
                                                </div>
                                                <p class="google-font px-2 ma-0" style="font-size:22px; font-weight: 600;">
                                                    GCP
                                                </p>
                                                <p class="google-font pa-2 ft-10 ma-0">
                                                    Google Cloud consiste en un conjunto de recursos físicos, como computadoras y unidades de disco duro, y recursos virtuales que se encuentran en los centros de datos de Google en todo el mundo.
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
                                        style="background-color: #B2EBF2;border-color:#B2EBF2;"
                                    >
                                        <v-row class="pa-3 pt-2" align="end">
                                            <v-col sm="12" md="12" col="12">
                                                <div class="ml-4 pt-2">
                                                    <img src="@/assets/img/what-we-do/azure.svg" width="90vh">
                                                </div>
                                                <p class="google-font px-2 ma-0 pt-2" style="font-size:22px; font-weight: 600;">
                                                    Azure
                                                </p>
                                                <p class="google-font pa-2 ft-10 ma-0">
                                                    Azure es la plataforma pública en la nube de Microsoft que ofrece una amplica gama de servicios.
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
                                        <v-row class="pa-3 pt-7" align="end">
                                            <v-col sm="12" md="12" col="12">
                                                <div class="ml-4">
                                                    <img src="@/assets/img/what-we-do/aws.svg" width="85vh">
                                                </div>
                                                <p class="google-font px-2 ma-0 pt-2" style="font-size:22px; font-weight: 600;">
                                                    AWS
                                                </p>
                                                <p class="google-font pa-2 ft-10 ma-0">
                                                    AWS es la plataforma en la nube más adoptada que ofrece más de 200 servicios integrales de centros de datos a nivel global.
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
                                        style="background-color: #E0F7FA;border-color:#E0F7FA;"
                                    >
                                        <v-row class="pa-3 pt-2" align="end">
                                            <v-col sm="12" md="12" col="12">
                                                <img class="pl-2 pt-2" src="@/assets/img/what-we-do/ibm.svg" width="150vh">
                                                <p class="google-font px-2 ma-0 pt-2" style="font-size:22px; font-weight: 600;">
                                                    IBM Cloud
                                                </p>
                                                <p class="google-font pa-2 ft-10 ma-0">
                                                    La plataforma de IBM Cloud combina una plataforma como servicio (PaaS) con la infraestructura como servicio (IaaS) para proporcionar una experiencia integrada
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
    name: 'AboutCloudDev',
    data: () => ({
        model: null,
        SJ: [],
    }),
    mounted(){
            const firebaseApp = initializeApp(config.firebase);
            const firestore = getFirestore(firebaseApp);
            const userCol = collection(firestore, 'StudyJams/');
            const userDoc = doc(userCol, 'Cloud/');
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
            router.push(`/study-jam/Cloud/${item}`);
        },
    }

}
</script>