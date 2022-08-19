<template>
    <v-container fluid class="py-0 my-0 mt-2" style="padding-left: 7%; padding-right:7%">
        <v-row align="center" class="py-0 my-0">
            <v-col md="12" sm="12" cols="12" class="py-0 my-0">
                <br>
                <p class="google-font mb-0 heading"><b>
                    <span style="color: rgb(0,0,0,.87);">Preguntas Frecuentes</span> </b> 
                </p>
                <p class="google-font mb-0 td-subtitle">¿Necesita respuestas? Todo lo que necesita saber.</p>
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
.td-subtitle{
    font-size: 23px;
    font-weight: 500;
}
}
</style>