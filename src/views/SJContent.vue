<template>
    <v-main>
        <v-container fluid>
            <v-row align="center" justify="center">
                <v-col class="px-0" md="12" lg="12" xl="12" col="12">
                    <v-container class="my-0 py-0" fluid style="border-bottom: 1px solid rgb(224, 224, 224); background: rgb(249, 250, 251) none repeat scroll 0% 0%;">
                        <v-row md="8" align="center" justify="center">
                            <v-col class="order-2 order-md-1 mb-3 pr-md-10" cols="12" md="7" lg="6" xl="6">
                                <p class="google-font event-title"> {{ sj.title }}</p>
                                <div class="google-font" style="font-size:1.1em">
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
                                            Last Date to Register: 
                                        </span>
                                        <strong style="background-color: transparent; color: rgb(67, 67, 67);">
                                            {{ sj.LastDay }}
                                        </strong>
                                    </p>
                                </div>
                            </v-col>
                            <v-col cols="12" md="4" lg="4" xl="3" class="pa-md-3 float-md-right order-1 order-md-2">
                                <v-img class="mt-0 mt-md-0" style="width: 100%; border: 1px solid rgb(224, 224, 224); border-radius: 8px; min-height: 300px;" :src=sj.img>
                                </v-img>
                            </v-col>
                        </v-row>
                    </v-container>
                    <v-container class="mt-md-15 mx-md-2 mb-md-10 my-5" fluid >
                        <v-row align="start" justify="center">
                            <v-col md="11" lg="10" xl="9" cols="12">
                                <v-container fluid>
                                    <row align="start" justify="start">
                                        <v-col class="pa-0 pr-md-10 order-2 order-md-1" sm="12" md="8" cols="12">
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
                                        </v-col>
                                        <v-col class="pa-md-7 py-md-3 mb-5 order-1 order-md-2 pa-0" sm="12" md="4">

                                        </v-col>
                                    </row>
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

</style>

<script>
export default {
    'name': 'SjContent',
    data() {
        return {
            headers:[
                {text: "Día", value:"dia"},
                {text: "Contenido", value:"content"}
            ],
            sj: {
                img: "https://img.freepik.com/free-vector/web-development-programmer-engineering-coding-website-augmented-reality-interface-screens-developer-project-engineer-programming-software-application-design-cartoon-illustration_107791-3863.jpg",
                title: "Introducción al Desarrollo Web",
                summary: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                SJL: "Renato Capcha",
                PhotoSJL: "https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_250,q_auto:good,w_250/v1/gcs/platform-data-dsc/events/photo_2022-01-23_15-27-48.jpg",
                Agenda: [
                    {
                        dia: "Día 1",
                        content: "Fundamentos de desarrollo web e Introducción a HTML"
                    },
                    {
                        dia: "Día 2",
                        content: "HTML laboratorio pŕactico"
                    },
                    {
                        dia: "Día 3",
                        content: "Introducción a CSS"
                    },
                    {
                        dia: "Día 4",
                        content: "CSS Laboratorio"
                    },
                    {
                        dia: "Día 5",
                        content: "Introducción a JavaScript"
                    },
                    {
                        dia: "Día 6",
                        content: "JS Laboratorio"
                    },
                    {
                        dia: "Día 7",
                        content: "Mini proyecto"
                    }
                ],
                Prerequisitos: ["Conocimiento básico en programación", "Tener Visual Studio Code instalado :p"],
                LastDay:  "22th July 2021 | 05:00 PM",
                Duration:"July 25, 2021 to July 31, 2021 | 07:00 PM - 08:00 PM (IST)"
            }
        }
    }
}
</script>