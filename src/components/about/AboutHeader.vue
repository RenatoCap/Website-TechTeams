<template>
    <v-container fluid class="py-0 my-0 mt-2 mb-5" style="padding-left: 7%; padding-right:7%">
        <v-row align="center" class="py-0 my-0 pt-7">
            <v-col md="8" sm="12" cols="12" class="py-0 my-0">
                <br>
                <p class="google-font mb-0  heading"><b>
                    <span style="color: rgb(0,0,0,.87);">About GDSC UNI</span> </b> 
                </p>
                <p class="google-font mb-0 mt-5 subheading">
                    Google Developer Student Club UNI es un cuerpo estudiantil de la UNI reconocido por Google, informando directamente acerca de nuestras actividades y contando con su apoyo. Nosotros llevamos a cabo talleres, seminarios y otras actividades divertidas que ayudan a los estudiantes a conectarse con Google.
                </p>
                <p class="google-font mb-0 mt-3 subheading2">
                    Todos los estudiantes de todos los programas de pregrado o postgrado que estén interesados en las tecnologías de Google o las utilicen como parte de sus proyectos y tengan interés de crecer como desarrolladores son bienvenidos.
                </p>
                 <p class="google-font mb-0 mt-3 subheading2">
                    ¿Preguntas? Póngase en contacto con <a href="gdsc.uni.pe@gmail.com">gdsc@uni.edu.pe</a> .
                </p>

                <div class="pt-5">
                    <p class="google-font my-0 mt-5" style="font-size:2.1rem">Contáctenos</p>
                    <v-chip class="mr-2 mt-2" href="https://www.linkedin.com/company/gdsc-uni/" target="linkedin" style="font-size: 1.1rem; text-decoration: none;">
                        LinkedIn
                    </v-chip>
                    <v-chip class="mr-2 mt-2" href="https://www.facebook.com/GDSCUNI/" target="Facebook" style="font-size:1.1rem; text-decoration:none;">
                        Facebook
                    </v-chip>
                    <v-chip class="mr-2 mt-2" href="https://www.instagram.com/gdsc_uni/" target="Instagram" style="font-size:1.1rem; text-decoration:none;">
                        Instagram
                    </v-chip>
                    <v-chip class="mr-2 mt-2" href="https://github.com/GDSC-UNI" target="GitHub" style="font-size:1.1rem; text-decoration:none;"> 
                        Github
                    </v-chip>
                    <v-chip class="mr-2 mt-2" href="https://gdsc.community.dev/universidad-nacional-de-ingenieria/" target="Community-Platform" style="font-size:1.1rem; text-decoration:none;">
                        Community Platform
                    </v-chip>
                    
                </div>


            </v-col>
            <v-col md="4" sm="12" cols="12" class="py-0 my-0 mt-10">
                <v-img
                    :src="require('@/assets/img/dontremove/about-picture.jpg')"
                    :lazy-src="require('@/assets/img/dontremove/about-picture.jpg')"
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
        </v-row>
    </v-container>
</template>

<script>
export default {
    data:()=>({

    })
}
</script>

<style>
.heading{
    font-size:30px;
    font-weight: 600;
}
.td-subtitle{
    font-size: 20px;
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
}
</style>