<template>
    <v-container fluid class="py-0" style="padding-left: 4%; padding-right:21%">
        <v-row align="center" class>
            <v-col cols="12" md="12" lg="12" sm="12" class="pa-0">
                <div class="ma-1">
                    <div class="pa-5">
                        <p class="google-font mb-0 td-title">Preguntas Frecuentes</p>
                        <br>
                        <v-expansion-panels accordion flat>
                            <v-expansion-panel class="expansion-panel">
                                <v-expansion-panel-header class="google-font mb-0 panel-header">¿Quienes pueden formar parte de los TechTeams?</v-expansion-panel-header>
                                <v-expansion-panel-content class="google-font mb-0 panel-conent" color="#f5f5f5">
                                    <br>
                                    Cualquiera puede formar parte de un Tech Team. Damos la bienvenida a todos los interesados en aprender más sobre estas áreas tecnológica. Además necesitamos su coperación para adherirse a nuestras normas de la comunidad.
                                </v-expansion-panel-content>
                            </v-expansion-panel>
                            <v-expansion-panel class="expansion-panel">
                                <v-expansion-panel-header class="google-font mb-0 panel-header">¿Cómo ser parte de un Study Jam?</v-expansion-panel-header>
                                <v-expansion-panel-content class="google-font mb-0 panel-conent" color="#f5f5f5">
                                    <br>
                                     Sencillo, haz click en el boton de "leer más" de cada Tech Team, ahí encontraras los study jams que se están realizando actualmente y los que hemos realizado anteriormente. 
                                </v-expansion-panel-content>
                            </v-expansion-panel>
                            <v-expansion-panel class="expansion-panel">
                                <v-expansion-panel-header class="google-font mb-0 panel-header">¿Puedo unirme si soy de otra universidad?</v-expansion-panel-header>
                                <v-expansion-panel-content class="google-font mb-0 panel-conent" color="#f5f5f5">
                                    <br>
                                    Claro, invitamos a todos los interesados en las tecnologías de desarrollo y con ganas de aprender sobre estas tecnologías a formar parte de nuestros Study Jams y Tech Teams.
                                </v-expansion-panel-content>
                            </v-expansion-panel>
                            <v-expansion-panel class="expansion-panel">
                                <v-expansion-panel-header class="google-font mb-0 panel-header">¿Cuánto cuestan los eventos?</v-expansion-panel-header>
                                <v-expansion-panel-content class="google-font mb-0 panel-conent" color="#f5f5f5">
                                    <br>
                                    Esta iniciativa es completamente gratuita.
                                </v-expansion-panel-content>
                            </v-expansion-panel>
                            <v-expansion-panel class="expansion-panel">
                                <v-expansion-panel-header class="google-font mb-0 panel-header">¿Hay certificados por participar?</v-expansion-panel-header>
                                <v-expansion-panel-content class="google-font mb-0 panel-conent" color="#f5f5f5">
                                    <br>
                                    Al culminar un study Jams y pasar satisfactoriamente el examen se le hará entrega de un certificado.
                                </v-expansion-panel-content>
                            </v-expansion-panel>
                            <v-expansion-panel class="expansion-panel">
                                <v-expansion-panel-header class="google-font mb-0 panel-header">¿Qué es GDSC?</v-expansion-panel-header>
                                <v-expansion-panel-content class="google-font mb-0 panel-conent" color="#f5f5f5">
                                    <br>
                                    Los GDSC (Google Developer Students Clubs) son grupos para estudiantes de pregrado y postgrado interesados en las tecnologías para desarrolladores de Google; desde las plataformas Android, App Engine y Chrome, hasta las API de productos, como la API de Maps, la API de Youtube y la API de Calendar.
                                </v-expansion-panel-content>
                            </v-expansion-panel>
                        </v-expansion-panels>
                    </div>
                </div>
            </v-col>
        </v-row>
    </v-container>
</template>

<style>
.panel-header{
    font-size: 125%;
    font-weight: 500;
}

.panel-content{
    font-size: 16px;
    padding: 10%;
}
.expansion-panel{
    border-bottom: 1px solid rgb(224,224,224);
}
</style>