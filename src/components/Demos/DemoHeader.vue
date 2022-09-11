<template>
    <v-container fluid class="py-0 my-0 mt-2 mb-0" style="padding-left: 7%; padding-right:7%">
        <v-row align="center" class="py-0 my-0">
            <v-col md="8" sm="12" cols="12" class="py-0 my-0">
                <p class="google-font mb-0 heading"><b>
                    <span style="color: rgb(0,0,0,.87);">Demos</span> </b> 
                </p>
                <p class="google-font mb-0 mt-5 td-subtitle">
                    Las tecnologías de desarrollo son herramientas que facilitan el trabajo que realices independiente de la carrera en la que te encuentres, por ello dentro de nuestros Study Jams enseñaremos como aplicarlas en distintos casos y mostrarlos a la comunidad a través de esta pestaña :D
                </p>
                <v-btn
                    class="ma-1"
                    elevation="0"
                    rounded
                    color="#FFE082"
                    height="54px"
                >
                    <span class="google-font text-none" style="font-size: 25px; color: black;">#WebDev</span>
                </v-btn>
                <v-btn
                    class="ma-1"
                    elevation="0"
                    rounded
                    color="#FFCDD2"
                    height="54px"
                >
                <span class="google-font text-none" style="font-size: 25px; color: black;">#CloudDev</span>
                </v-btn>
                <v-btn
                    class="ma-1"
                    elevation="0"
                    rounded
                    color="#BBDEFB"
                    height="54px"
                >
                <span class="google-font text-none" style="font-size: 25px; color: black;">#DS&ML</span>
                </v-btn>
                <v-btn
                    class="ma-1"
                    elevation="0"
                    rounded
                    color="#E1BEE7"
                    height="54px"
                >
                <span class="google-font text-none" style="font-size: 25px; color: black;">#DesignDev</span>
                </v-btn>
            </v-col>
            <v-col md="4" sm="12" cols="12" class="py-0 my-0 mt-10">
                <v-img
                    :src="require('@/assets/img/dontremove/about.jpg')"
                    :lazy-src="require('@/assets/img/dontremove/about.jpg')"
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
    font-size:70px;
    font-weight: 600;
}
.td-subtitle{
    font-size: 23px;
    font-weight: 500;
}
}
</style>