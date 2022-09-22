<template>
    <v-main>
        <v-container class="ma-0 pa-0" fluid >
            <v-row class="mt-0 pt-0" align="center" justify="center">
                <v-col class="px-0 pt-0 mt-0" md="12" lg="12" xl="12" col="12">
                    <v-container fluid style="border-bottom: 1px solid rgb(224, 224, 224); background: rgb(249, 250, 251) none repeat scroll 0% 0%;">
                        <v-row  class="mt-0 pt-15 pb-15" align="center" justify="center">
                            <v-col class="order-2 order-md-1 mb-3 pr-md-10" cols="12" md="7" lg="6" xl="6">
                                <v-container style="padding-left: 10%; padding-right: 10%">
                                    <p class="google-font event-title"> {{ sj.Title }}</p>
                                    <div class="google-font content-summary">
                                        <p>
                                            <strong style="color: rgb(67, 67, 67);">
                                                {{ sj.Duration }}
                                            </strong>
                                        </p>
                                        <p>
                                            <span style="color: rbg(0,0,0);">
                                                {{ sj.summary }}
                                            </span>
                                        </p>
                                        <p>
                                            <span style="background-color: transparent; color: rgb(67, 67, 67);">
                                                Último día para registrarse: 
                                            </span>
                                            <strong style="background-color: transparent; color: rgb(67, 67, 67);">
                                                {{ sj.LastDay }}
                                            </strong>
                                        </p>
                                    </div>
                                    <div class="pt-2">
                                        <v-btn
                                            dark
                                            height="2.5em"
                                            class="google-font"
                                            style="background-color: #2196F3; border-color: #2196F3; text-transform: capitalize; font-size: 105%;"
                                            v-if="sj.open"
                                            :href="sj.Inscription"
                                        >
                                            <v-icon class="pr-2">
                                                mdi-list-box
                                            </v-icon>
                                            Inscripción
                                        </v-btn>
                                    </div>
                                </v-container>
                            </v-col>

                            <v-col cols="12" md="5" lg="5" xl="3" class="float-md-right order-1 order-md-2">
                                <v-img class="mt-0 mt-md-0" style="border: 1px solid rgb(224, 224, 224); border-radius: 8px; min-height: 300px;" :src=sj.img  width="120vh" height="80vh">
                                </v-img>
                            </v-col>
                        </v-row>
                    </v-container>
                    <v-container class="mt-md-15 mx-md-2 mb-md-10 my-5" fluid >
                        <v-row align="start" justify="center">
                            <v-col md="11" lg="10" xl="9" cols="12">
                                <v-container fluid>
                                    <v-row align="start" justify="start">
                                        <v-col class="pa-0 pr-md-10 order-2 order-md-1" sm="12" md="8" cols="12">
                                            <v-container>
                                                <div>
                                                    <p class="google-font event-subtitle"> Prerequisitos </p>
                                                    <p class="google-font px-2 pb-2" style="font-size: 1.1em;">
                                                        <ol>
                                                            <li
                                                                v-for="(requi, i) in sj.Prerequisitos"
                                                                :key="i"
                                                            >
                                                                {{requi}}
                                                            </li>
                                                        </ol>
                                                    </p>
                                                    <p class="google-font mb-3 mt-5 event-subtitle">Agenda</p>
                                                    <v-data-table
                                                        :headers= "headers"
                                                        :items="sj.Agenda"
                                                        hide-default-header
                                                        hide-default-footer
                                                        style="width: 100%; border: 1px solid rgb(224, 224, 224);"
                                                    >

                                                    </v-data-table>
                                                </div>
                                            </v-container>
                                        </v-col>
                                        <v-col class="pa-md-7 py-md-3 mb-5 order-1 order-md-2 pa-0" sm="12" md="4">
                                            <v-container>
                                                <p class="google-font mb-0 event-subtitle">
                                                    <span>
                                                        Study Jam Lead
                                                    </span>
                                                </p>
                                                <v-container fluid class="ma-0 pa-0 mt-3">
                                                    <v-row>
                                                        <v-col sm="6" md="12">
                                                            <v-card
                                                                class="mx-auto"
                                                                outlined
                                                                rounded="5px"
                                                                style="background: rgba(0, 0, 0, 0) linear-gradient(232deg, rgba(232, 233, 241, 0.467) 0%, rgb(255, 253, 253) 100%) repeat scroll 0% 0%; border: 1px solid rgb(224, 224, 224);"
                                                            >
                                                            <v-list-item three-line>
                                                                <v-list-item-content>
                                                                    <v-list-item-title class="text-h5 mb-1">
                                                                        <p class="google-font mb-0 mt-5">
                                                                            {{sj.SJL}}
                                                                            <br>
                                                                            <span style="font-size:60%;">{{ sj.SJLOcupation }}</span>
                                                                        </p>
                                                                    </v-list-item-title>
                                                                    <v-list-item-subtitle>
                                                                        <v-container class="py-0 my-0 pl-0 ml-0 mb-2 " fluid>
                                                                            <v-row class="py-0 my-0" align="start" justify="start">
                                                                                <v-col class="py-0 my-0" sm="12" lg="12" cols="12">
                                                                                    <v-btn
                                                                                        icon
                                                                                        class="ml-0 mt-0 mx-0"
                                                                                        v-if="sj.SocialNetwork.facebook"
                                                                                        :href=sj.SocialNetwork.facebook
                                                                                    >
                                                                                        <v-icon style="color:#4267B2; caret-color: #4267B2;">
                                                                                            mdi-facebook
                                                                                        </v-icon>
                                                                                    </v-btn>
                                                                                    <v-btn
                                                                                        icon
                                                                                        class="ml-0 mt-0 mx-0"
                                                                                        v-if="sj.SocialNetwork.linkedin"
                                                                                        :href=sj.SocialNetwork.linkedin
                                                                                    >
                                                                                        <v-icon style="color: rgb(0, 119, 181); caret-color: rgb(0, 119, 181);">
                                                                                            mdi-linkedin
                                                                                        </v-icon>
                                                                                    </v-btn>
                                                                                    <v-btn
                                                                                        icon
                                                                                        class="ml-0 mt-0 mx-0"
                                                                                        v-if="sj.SocialNetwork.github"
                                                                                        :href=sj.SocialNetwork.github
                                                                                    >
                                                                                        <v-icon style="color:#000; caret-color: #000;">
                                                                                            mdi-github
                                                                                        </v-icon>
                                                                                    </v-btn>
                                                                                    
                                                                                </v-col>
                                                                            </v-row>
                                                                        </v-container>
                                                                    </v-list-item-subtitle>
                                                                </v-list-item-content>

                                                                <v-list-item-avatar
                                                                    color="grey"
                                                                    style="height: 105px; min-width: 105px; width: 105px;"
                                                                >
                                                                    <v-img :src=sj.PhotoSJL></v-img>
                                                                </v-list-item-avatar>
                                                            </v-list-item>
                                                            </v-card>
                                                        </v-col>
                                                    </v-row>
                                                </v-container>
                                                <v-container class="mt-5 d-none d-sm-none d-md-block d-lg-block" style="border: 1px solid rgb(224, 224, 224); border-radius: 8px; background: rgba(0, 0, 0, 0) linear-gradient(232deg, rgba(232, 233, 241, 0.467) 0%, rgb(255, 253, 253) 100%) repeat scroll 0% 0%;" fluid>
                                                    <v-row>
                                                        <v-col class="text-center py-10">
                                                            <v-img style="margin-left: auto; margin-right: auto;" src="@/assets/img/dontremove/GDSC-banner.svg" width="40vh">
                                                            </v-img>
                                                            <v-btn text class="mt-5" color="primary" href="https://gdsc.community.dev/universidad-nacional-de-ingenieria/">
                                                                <v-icon class="pr-2">
                                                                    mdi-account-reactivate-outline
                                                                </v-icon>
                                                                Conviértete en miembro
                                                            </v-btn>
                                                        </v-col>
                                                    </v-row>
                                                </v-container>
                                            </v-container>
                                        </v-col>
                                    </v-row>
                                </v-container>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-col>
            </v-row>
        </v-container>
    </v-main>
</template>

<style>

.event-title{
    font-size:65px;
    font-weight: 600;
    line-height: 100px;
}

.event-subtitle{
    font-size: 35px;
    font-weight: 600;
    line-height: 50px;
}
.content-summary {
    font-size: 1.1em;
}

@media (max-width: 767.98px) {
    .event-title{
        font-size:35px;
        font-weight: 600;
        line-height: 100px;
    }

    .event-subtitle{
        font-size: 20px;
        font-weight: 600;
        line-height: 50px;
    }
    .content-summary {
        font-size: 0.9em;
    }
}

</style>

<script>
import { config } from '@/config/config.js';
import { initializeApp } from 'firebase/app';
import {  getFirestore, collection, onSnapshot,doc } from 'firebase/firestore'

export default {
    'name': 'SjContent',
    data() {
        return {
            headers:[
                {text: "Día", value:"dia"},
                {text: "Contenido", value:"content"}
            ],
            prueba: null,
            sj: {}
        }
    },
    mounted() {
        const firebaseApp = initializeApp(config.firebase);
        const firestore = getFirestore(firebaseApp);
        const studyJam = collection(firestore, 'StudyJamExtended');
        const document = doc(studyJam, this.$route.params.id);
        onSnapshot(document, snapshot => {
            const data = snapshot.data();
            this.sj = data;
        });
    }
}
</script>