<template>
    <v-main class="px-0 mx-0 pt-5">
        <v-container fluid  class="px-0 pt-5 mt-5 py-0">
            <v-row justify="center" align="center" class="py-3 pb-5">
                <v-col md="11" lg="10" sm="11" xs="12" class="pt-3 bottom-space">
                    <StudyJamHeader />
                </v-col>
            </v-row>
        </v-container>
        <v-container fluid class="pa-0 pt-0 my-0">
            <v-row justify="center" align="center" style="background:#fff" class="py-0 my-0 pt-15">
                <v-col md="12" lg="10" sm="11" xs="12" class="py-0" >
                    <StudyJamContent />
                </v-col>
            </v-row>
        </v-container>
         <v-container fluid  class="px-0 pt-5 mt-5 py-0">
                    <v-row justify="center" align="center" class="py-3 pb-5">
                        <v-col md="11" lg="10" sm="11" xs="12" class="pt-3 bottom-space">
                        
                        </v-col>
                    </v-row>
        </v-container>
    </v-main>
</template>

<script>
export default {
    name: 'Demos',
    components: {
        StudyJamHeader: () => import("@/components/StudyJam/StudyJamHeader"),
        StudyJamContent: ()=>import("@/components/StudyJam/StudyJamContent")
    },
};

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