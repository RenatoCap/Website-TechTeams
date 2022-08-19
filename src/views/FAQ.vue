
<template>
    <v-main>
        <v-container fluid >
            <v-row justify="center" align="center">
                <v-col md="12" lg="10" sm="11" xs="12">
                    <FAQHeader />
                </v-col>
            </v-row>
        </v-container>
        <v-container fluid class="pa-0 pt-5 my-0">
            <v-row justify="center" align="center">
                <v-col md="12" lg="10" sm="11" xs="12" class="py-0">
                    <FAQContent />
                </v-col>
            </v-row>
        </v-container>
        <v-container fluid class="px-0 pt-5 mt-5 py-0">
            <v-row justify="center" align="center">
                <v-col md="10" lg="10" sm="11" xs="12" class="pt-15">
                </v-col>
            </v-row>
        </v-container>
    </v-main>
</template>

<script>
export default {
  components: {
    FAQHeader: () =>import("@/components/FAQ/FAQHeader"),
    FAQContent: () => import("@/components/FAQ/FAQContent"),
  },
};
</script>

