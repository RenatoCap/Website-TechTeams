<template>
    <v-container fluid class="py-0 my-0 mt-2 mb-5" style="padding-left: 7%; padding-right:7%">
        <v-row align="center" class="py-0 my-0">
            <v-col md="8" sm="12" cols="12" class="py-0 my-0">
                <p class="google-font mb-0 heading"><b>
                    <span style="color: rgb(0,0,0,.87);">Codelabs</span> </b> 
                </p>
                <p class="google-font mb-0 mt-5 td-subtitle">Inspirados en los Codelabs de Google Developers Groups (GDG), GDSC UNI les proporciona una experiencia de codificación práctica, guiada y con tutoriales. La mayoría de estos Codelabs lo guiarán a través del proceso de creación de una pequeña aplicación o agregar una nueva característica a una aplicación existente. Cada uno de estos Codelabs son elaborados por miembros de los Tech Teams cubriendo una amplia gama de temas.</p>
            </v-col>
            <v-col md="4" sm="12" cols="12" class="py-0 my-0 mt-10">
                <v-img
                    :src="require('@/assets/img/dontremove/codelabs.png')"
                    :lazy-src="require('@/assets/img/dontremove/codelabs.png')"
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
    font-size:70px;
    font-weight: 600;
}
.td-subtitle{
    font-size: 23px;
    font-weight: 500;
}
}
</style>