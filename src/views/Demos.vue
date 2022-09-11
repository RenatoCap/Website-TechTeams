<template>
    <v-main class="px-0 mx-0 pt-5">
        <v-container fluid  class="px-0 pt-5 mt-5 py-0">
                    <v-row justify="center" align="center" class="py-3 pb-5">
                        <v-row md="11" lg="10" sm="11" xs="12" class="pt-3 bottom-space">
                            <DemoHeader />
                        </v-row>
                    </v-row>
        </v-container>
        <v-container fluid class="pa-0 pt-0 my-0">
            <v-row justify="center" align="center" style="background:#fff" class="py-0 my-0 pt-15">
                <v-col md="12" lg="10" sm="11" xs="12" class="py-0" >
                <AboutTechTeamsDemos />
                </v-col>
            </v-row>
        </v-container>
         <v-container fluid  class="px-0 pt-5 mt-5 py-0">
                    <v-row justify="center" align="center" class="py-3 pb-5">
                        <v-col md="11" lg="10" sm="11" xs="12" class="pt-3 bottom-space">
                            <DemoContent />
                        </v-col>
                    </v-row>
        </v-container>
    </v-main>
</template>

<script>
import AboutTechTeamsDemos from '../components/home/AboutTechTeamsDemos.vue';
export default {
  name: 'Demos',
  components: {
    DemoHeader: () => import("@/components/Demos/DemoHeader"),
    AboutTechTeamsDemos: () => import("@/components/home/AboutTechTeamsDemos"),
    DemoContent: () => import("@/components/Demos/DemoContent")
},
};

</script>