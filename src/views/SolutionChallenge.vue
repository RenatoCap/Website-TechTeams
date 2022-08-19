<template>
   <v-container fluid class="py-0 my-0 mt-2 mb-5 pt-15" style="padding-left: 7%; padding-right:7%">
        <v-row align="center" class="py-0 my-0">
            <v-col md="4" sm="12" cols="12" class="py-0 my-0 mt-10 hidden-sm-and-down">
                <v-img
                    :src="require('@/assets/img/SC/SC.jpg')"
                    :lazy-src="require('@/assets/img/SC/SC.jpg')"
                    class=" mb-3"
                    width="70%"
                >
                    <template v-slot:placeholder>
                        <v-row
                        class="fill-height ma-0"
                        align="center"
                        justify="center"
                        >
                        <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                        </v-row>
                    </template>
                </v-img>
            </v-col>
            <v-col md="8" sm="12" cols="12" class="py-0 my-0">
                <br>
                <p class="google-font mb-0  challenge-1"><b>
                    <span>Solution</span> <span class="challenge-2">Challenge</span> </b> 
                </p>
                <p class="google-font mb-0 mt-5 subheading">
                   El "Google Developer Student Clubs 2022 Solution Challenge" es una competencia para estudiantes universitarios en la que construyen soluciones para problemas comunitarios usando tecnologías de Google. La tematica de esta competencia se basa en los 17 objetivos de desarrolló sostenible de la ONU, los cuales tienen un enfoque hacia problemas a nivel de individuo, planeta, prosperidad, paz y alianzas.
                </p>
                <p class="google-font mb-0 mt-5 subheading">
                   El GDSC UNI tiene objetivo ayudar en la elaboración de sus proyectos a todos aquellos interesados en participar en esta competencia que se realiza de manera interancional.
                </p>
            </v-col>
        </v-row>
        <v-row align="center" class="py-0 my-0 pt-15">
            <h1>¿Cómo ser parte del Solution Challenge?</h1>
           <v-timeline :dense="$vuetify.breakpoint.smAndDown">
                <v-timeline-item
                color="#2196F3"
                icon="mdi-open-in-app"
                fill-dot
                right
                >
                <v-card>
                    <v-card-title style="background:linear-gradient(90deg,#007CF0,#00DFD8);">
                    <h2 class="white--text font-weight-light title-timeline">
                        Hazte miembro del GDSC UNI
                    </h2>
                    </v-card-title>
                    <v-container>
                    <v-row>
                        <v-col
                        cols="12"
                        md="10"
                        >
                        Uno de los requisitos para participar en el solution challenge es que al menos uno de los 4 miembros del equipo sean parte de un GDSC. ¿Qué esperas? se parte del GDSC UNI <a href="https://gdsc.community.dev/universidad-nacional-de-ingenieria/">aquí</a>
                        </v-col>
                    </v-row>
                    </v-container>
                </v-card>
                </v-timeline-item>

                <v-timeline-item
                    color="#F44336"
                    icon="mdi-account-check"
                    fill-dot
                    left
                >
                <v-card>
                    <v-card-title style="background:linear-gradient(90deg,#FF3D00,#FF9E80);">
                    <h2 class="white--text font-weight-light title-timeline">
                    Inscríbete al 
                    <br>
                     Solution Challenge
                    </h2>
                    </v-card-title>
                    <v-container>
                    <v-row>
                        <v-col
                        cols="12"
                        md="10"
                        >
                        El siguiente paso es inscribirte mediante el form de Google Developers para este concurso, en el tendrás que detallar tus datos. Puedes acceder al Form
                        <a href="https://docs.google.com/forms/d/e/1FAIpQLSf_XZPW9XO5BY2cIa0ztLhvnZ1cj9So88FkqZ1ByhdtK1fkeQ/viewform">Aquí</a>
                        </v-col>
                    </v-row>
                    </v-container>
                </v-card>
                </v-timeline-item>

                <v-timeline-item
                    color="#FFC107"
                    icon="mdi-calendar-multiple"
                    fill-dot
                    right
                    >
                <v-card>
                    <v-card-title style="background:linear-gradient(90deg,#FF9100,#FFD180);">
                    <h2 class="white--text font-weight-light title-timeline">
                        Se parte de nuestro Kick-off
                    </h2>
                    </v-card-title>
                    <v-container>
                    <v-row>
                        <v-col
                        cols="12"
                        md="10"
                        >
                       Con el objetivo de ayudarlos en su participación, el GDSC UNI realizará su propio Kick-Off en el que podrá conocer más acerca del Solution Challenge, las SDGs, las tecnologías de Google y cómo usarlas.
                       <br>
                       <br> 
                       Registrate <a href="https://gdsc.community.dev/j/hpfnpwtsvahvq/">Aquí</a> para ser parte de este evento, además completa este <a href="https://docs.google.com/forms/d/1k2QK2BC4LEgBmtQA2e78-VA9KTt5j3K-M6clvfGyr84/viewform?edit_requested=true">form</a>
                        </v-col>
                    </v-row>
                    </v-container>
                </v-card>
                </v-timeline-item>

                <v-timeline-item
                color="#4CAF50"
                fill-dot
                left
                icon="mdi-account-multiple"
                >
                <v-card>
                    <v-card-title style="background:linear-gradient(90deg,#4CAF50,#AED581);">
                    <h2 class=" white--text font-weight-light title-timeline">
                        Interactúa con los otros miembros de la comunidad
                    </h2>
                    </v-card-title>
                    <v-container>
                    <v-row>
                        <v-col
                        cols="12"
                        md="10"
                        >
                       Siguiendo la metodología del Kick-off hecho por Google Developers, al finalizar nuestro evento, crearemos rooms de cada área tecnológica en los que podrás entrar y compartir conocimientos con los otros miembros de la comunidad, así como también tener un brainstorming de proyectos que puedes realizar, formar tu equipo y participar.
                        </v-col>
                    </v-row>
                    </v-container>
                </v-card>
                </v-timeline-item>
            </v-timeline>
        </v-row>

        <v-row align="center" class="py-0 my-0 pt-5">
            <v-col md="4" sm="12" cols="12" class="py-0 my-0 mt-10">
                <v-img
                    :src="require('@/assets/img/SC/sdgs.png')"
                    :lazy-src="require('@/assets/img/SC/sdgs.png')"
                    class=" mb-3"
                    width="100%"
                >
                    <template v-slot:placeholder>
                        <v-row
                        class="fill-height ma-0"
                        align="center"
                        justify="center"
                        >
                        <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                        </v-row>
                    </template>
                </v-img>
            </v-col>
            <v-col md="8" sm="12" cols="12" class="py-0 my-0">
                <br>
    
                <h1>¿Qué son las SDGs?</h1> 
                
                <p class="google-font mb-0 mt-5 subheading">
                 En el año 2015, 193 miembros de las Naciones Unidas crearon, los 17 Objetivos de Desarrollo Sostenible, que son una colección de objetivos globales internacionales diseñados para ser un "plan para lograr un mejor y más sostenible futuro para todos".
                </p>
                <br>
                <v-btn
                    href="https://developers.google.com/community/gdsc-solution-challenge/UN-goals"
                    class="ma-2"
                    outlined
                    color="indigo"
                    >
                    Conoce más
                </v-btn>
            </v-col>
        </v-row>
        <v-row align="center" class="py-0 my-0 pt-5">
            <v-col md="4" sm="12" cols="12" class="py-0 my-0 mt-10">
               <div>
                <v-alert
                class="hidden-sm-and-up"
                v-model="alert"
                color="cyan"
                border="left"
                elevation="2"
                colored-border
                icon="mdi-comment-text"
                >
                GDSC UNI se compromete a acompañarte a lo largo de toda tu participación en este concurso, brindándote talleres y recursos que te ayuden en el desarrollo de tu proyecto.
                </v-alert>
                </div>

            </v-col>
        </v-row>

         <v-container fluid class="pa-0 pt-5 my-0">
            <v-row justify="center" align="center" style="background:#fff" class="py-5 my-0">
                <v-col md="12" lg="10" sm="11" xs="12" class="py-0">
                        <p class="google-font mb-0 heading"><b>
                            <span style="color: rgb(0,0,0,.87);">Preguntas Frecuentes</span> </b> 
                        </p>
                    <v-expansion-panels accordion flat>
                    <v-expansion-panel class="expansion-panel">
                        <v-expansion-panel-header class="google-font mb-0 panel-header">¿Puede mi solución resolver un problema fuera del alcance de los 17 Objetivos de Desarrollo Sostenible?</v-expansion-panel-header>
                            <v-expansion-panel-content class="google-font mb-0 panel-conent" color="#f5f5f5">
                                <br>
                                Para Solution Challenge 2022, requerimos que la solución enviada resuelva al menos uno o más de los 17 ODS. Cuando haya enviado su solución, revise los 17 ODS para comprender en qué ODS se centra su solución y qué objetivos de ODS está buscando resolver.
                            </v-expansion-panel-content>
                    </v-expansion-panel>
                    <v-expansion-panel class="expansion-panel">
                        <v-expansion-panel-header class="google-font mb-0 panel-header">¿Puede un alumno o un equipo enviar varios envíos si han contribuido a ambos proyectos?</v-expansion-panel-header>
                        <v-expansion-panel-content class="google-font mb-0 panel-conent" color="#f5f5f5">
                            <br>
                            Los Términos y Condiciones establecen "LÍMITE DE UNA (1) ENTRADA POR PERSONA", por lo que cada estudiante sólo puede ser parte de una presentación.
                        </v-expansion-panel-content>
                    </v-expansion-panel>
                    <v-expansion-panel class="expansion-panel">
                        <v-expansion-panel-header class="google-font mb-0 panel-header">¿Hay requisitos para participar?</v-expansion-panel-header>
                        <v-expansion-panel-content class="google-font mb-0 panel-conent" color="#f5f5f5">
                            <br>
                            El único requisito es pertener a un GDSC.
                        </v-expansion-panel-content>
                    </v-expansion-panel>
                    <v-expansion-panel class="expansion-panel">
                        <v-expansion-panel-header class="google-font mb-0 panel-header">¿Hay certificados por participar?</v-expansion-panel-header>
                        <v-expansion-panel-content class="google-font mb-0 panel-conent" color="#f5f5f5">
                            <br>
                            Todos los participantes del Solution Challenge, reciben un certificado por participar, además de poder recibir distintas medallas que serán entregados en los eventos que realice el GDSC UNI.
                        </v-expansion-panel-content>
                    </v-expansion-panel>
                    <v-expansion-panel class="expansion-panel">
                        <v-expansion-panel-header class="google-font mb-0 panel-header">¿Puedo participar aunque no conozca sobre las tecnologías de Google?</v-expansion-panel-header>
                        <v-expansion-panel-content class="google-font mb-0 panel-conent" color="#f5f5f5">
                            <br>
                            Sí, el GDSC UNI, te guiará a lo largo de tu participación, ¿Qué esperas? se parte de esta competencia internacional. 
                        </v-expansion-panel-content>
                    </v-expansion-panel>
                </v-expansion-panels>
                </v-col>
            </v-row>
        </v-container>


    </v-container>
</template>

<script>
  export default {
    data () {
      return {
        e1: 1,
      }
    },
  }
</script>

<style>
.heading{
    font-size:40px;
    font-weight: 600;
}
.td-subtitle{
    font-size: 20px;
}
.title-timeline{
    font-size:25px
}
.challenge-1{
    font-size: 4rem;
    font-weight:bolder;
    color: transparent;
    background-clip: text;
    background-image: linear-gradient(90deg, #000,#007cf0, #FF3D00, #FF9100, #4CAF50);
    animation: color 6s linear infinite;
    background-size: 500%;

}
@keyframes color {
    from {
        background-position: 0% 70%;
    }
    to {
        background-position: 100% 70%;
    }
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
.challenge-1{
    font-size: 110px;
    font-weight:bolder;
    color: transparent;
    background-clip: text;
    background-image: linear-gradient(90deg, #007cf0, #FF3D00, #FF9100, #4CAF50);
    animation: color 6s linear infinite;
    background-size: 500%;

}
@keyframes color {
    from {
        background-position: 0% 70%;
    }
    to {
        background-position: 100% 70%;
    }
}
}
</style>