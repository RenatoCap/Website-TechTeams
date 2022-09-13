<template>
    <v-container>
        <v-container fluid class="py-0 my-0 mt-2 mb-5" style="padding-left: 7%; padding-right:7%">
            <v-row align="center" class="py-0 my-0 pt-2">
                <v-col md="8" sm="12" cols="12" class="py-0 my-0 pr-5">
                    <p class="google-font mb-0 heading">
                        <b>
                            <span style="color: rgb(0,0,0,.87);">
                                Backend
                            </span> 
                        </b> 
                    </p>
                    <p class="google-font mb-0 mt-5" style="font-size:20px">
                        El backend abarca toda la lógica de una aplicación, es decir, la arquitectura interna de una aplicación que asegura que todos los elementos desarrollen su función de manera correcta. Además en esta área es la encargada de la seguridad y optimización de los recursos enfocándose en el lado del servidor que es donde viven nuestras aplicaciones para que esté disponible a todo el mundo. 
                        <br>
                        <br>
                        Dentro de los Study Jams de este tech team aprenderán acerca de bases de datos, Node.js, configuración de servidores, crear sus propias APIs, optimizar la representación desde el lado del servidor, entre otros temas que llevarán sus conocimientos de desarrollo de software a otro nivel.
                    </p>
                </v-col>
                <v-col md="4" sm="9" cols="12" class="py-0 my-0">
                    <v-row justify="center">
                        <v-img
                            src='@/assets/img/TechTeams/backend.svg'
                            class="mb-3"
                            width="55%">    
                        </v-img>
                    </v-row>
                </v-col>
            </v-row>
            <v-row align="center" class="py-0 my-0 pt-7">
                <v-container fluid style="border-radius: 18px; background-color: rgb(255, 236, 179);">
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
                            style="background-color: rgb(255, 236, 180);"
                        >  
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
                                                <img class="pl-2 pt-2" src="@/assets/img/what-we-do/nodejs.svg" width="160vh">
                                                <p class="google-font pa-2 ft-10 ma-0">
                                                    ¡Node.js es una herramienta popular para casi cualquier proyecto! Tiene la ventaja única dado que ahora los desarrolladores frontend pueden escribir código del lado del servidor con el mismo lenguaje con el que escriben desde el lado del cliente, JavaScript.
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
                                                    <v-row>
                                                        <v-col md="4" lg="2" sm="4">
                                                            <v-row align="center" justify="center">
                                                                <img src="@/assets/img/what-we-do/firebase.svg" width="40vh">
                                                            </v-row>
                                                        </v-col>
                                                        <v-col md="4" lg="6" sm="4">
                                                            <v-row class="pt-2">
                                                                <p class="google-font px-2 ma-0 pt-2" style="font-size:22px; font-weight: 600;">
                                                                    Firebase
                                                                </p>
                                                            </v-row>
                                                        </v-col>
                                                    </v-row>
                                                </div>
                                                <p class="google-font pa-2 pt-5 ft-10 ma-0">
                                                    ¡Haz que tu aplicación sea lo mejor que puede ser! Firebase es una plataforma de desarrollo de aplicaciones que le ayuda a crear y desarrollar aplicaciones y juegos que les encantan a los usuarios Repaldado por Google y en el que confían millones de empresas de todo el mundo.
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
                                                    <v-row>
                                                        <v-col md="4" lg="2" sm="4">
                                                            <v-row align="center" justify="center">
                                                                <img src="@/assets/img/what-we-do/graphql.svg" width="55vh">
                                                            </v-row>
                                                        </v-col>
                                                        <v-col md="4" lg="6" sm="4">
                                                            <v-row class="pt-1">
                                                                <p class="google-font px-2 ma-0 pt-2" style="font-size:22px; font-weight: 600;">
                                                                    GraphQL
                                                                </p>
                                                            </v-row>
                                                        </v-col>
                                                    </v-row>
                                                    
                                                </div>
                                                <p class="google-font pa-2 ft-10 ma-0">
                                                    ¡Un lenguaje de consulta para su API!
                                                    GraphQL es un lenguaje de consulta para API y un tiempo de ejecución para cumplir con esas consultas con sus datos existente. Con esta herramienta podrá tener una descripción completa y comprensible de los datos en su API.
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
                                        style="background-color: #fcfcda; border-color:#fcfcda;"
                                    >
                                        <v-row class="pa-3 pt-2" align="end">
                                            <v-col sm="12" md="12" col="12">
                                                <div class="ml-4 pt-2">
                                                    <v-row>
                                                        <v-col md="4" lg="2" sm="4">
                                                            <v-row align="center" justify="center">
                                                                <img src="@/assets/img/what-we-do/mongo.svg" width="55vh">
                                                            </v-row>
                                                        </v-col>
                                                        <v-col md="4" lg="6" sm="4">
                                                            <v-row class="pt-1">
                                                                <p class="google-font px-2 ma-0 pt-2" style="font-size:22px; font-weight: 600;">
                                                                    MongoDB
                                                                </p>
                                                            </v-row>
                                                        </v-col>
                                                    </v-row>
                                                    
                                                </div>
                                                <p class="google-font pa-2 ft-10 ma-0">
                                                    ¡Trabajar con datos no necesita ser duro! Lleve sus ideas al mercado más rápido con una plataforma de datos para desarrolladores basada en la base de datos moderna líder. Admita casos de uso transaccionales, de búsqueda, analíticos y móviles mientras usa una interfaz de consulta común y el modelo de datos que les encanta a los desarrolladores.
                                                </p>
                                            </v-col>
                                        </v-row>
                                    </v-card>
                                </v-slide-item>
                                <!-- <v-slide-item v-slot="{ toggle }">
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
                                                        <v-col md="4" lg="3" sm="4">
                                                            <v-row align="center" justify="center">
                                                                <img src="@/assets/img/what-we-do/CloudStorage.svg" width="100vh">
                                                            </v-row>
                                                        </v-col>
                                                        <v-col md="4" lg="6" sm="4">
                                                            <v-row class="pt-4">
                                                                <p class="google-font px-2 ma-0" style="font-size:22px; font-weight: 600;">
                                                                    Cloud Storage
                                                                </p>
                                                            </v-row>
                                                        </v-col>
                                                    </v-row>
                                                </div>
                                                <p class="google-font pa-2 ft-10 ma-0">
                                                    Golang es un lenguaje muy importante para que te inicies en el mundo de la programación :p.
                                                </p>
                                            </v-col>
                                        </v-row>
                                    </v-card>
                                </v-slide-item> -->
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
.text-center{
    text-align: center !important;
}
</style>

<script>
  export default {
    name: 'AboutBackendDev',
    data: () => ({
      model: null,
      studyJam: [
        {
            Img: "https://img.freepik.com/free-vector/web-development-programmer-engineering-coding-website-augmented-reality-interface-screens-developer-project-engineer-programming-software-application-design-cartoon-illustration_107791-3863.jpg",
            Title: "Introducción al desarrollo Web",
            Duration: "22 de agosto - 2 de septiembre",
        }
      ]
    }),
  }
</script>