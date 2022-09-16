<template>
    <v-main class="px-0 mx-0 pt-5">
        <v-container fluid  class="px-0 pt-5 mt-5 py-0">
            <v-row justify="center" align="center" class="py-3 pb-5">
                <v-col md="11" lg="10" sm="11" xs="12" class="pt-3 bottom-space">
                    <StudyJamHeader />
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

@media (max-width: 767.98px) {
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