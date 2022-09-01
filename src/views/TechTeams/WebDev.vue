<template>
    <v-main class="px-0 mx-0">
        <v-container fluid class="px-0 pt-5 py-0">
            <v-row justify="center" align="center">
                <v-col md="11" lg="10" sm="11" xs="12" class="pt-3 pb-14">
                    <AboutBackendDev/>
                </v-col>
            </v-row>
        </v-container>
    </v-main>
</template>

<script>
export default {
  components: {
    AboutBackendDev: () => import("@/components/AboutTechTeams/AboutBackendDev"),
  },
};
</script>