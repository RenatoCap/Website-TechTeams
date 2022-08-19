<template>
    <v-main class="px-0 mx-0 pt-5">
        <v-container fluid  class="px-0 pt-5 mt-5 py-0">
            <v-row justify="center" align="center" class="py-3 pb-5">
                <v-col md="11" lg="10" sm="11" xs="12" class="pt-3 bottom-space">
                    <CodelabHeader />
                </v-col>
            </v-row>
        </v-container>

        <v-container fluid class="px-0 py-0">
            <v-row justify="center" align="center" style="background: rgb(248,249,250);">
                <v-col md="11" sm="11" xs="12" class="card-top-margin">
                    <CodelabContent />
                </v-col>
            </v-row>
        </v-container>
    </v-main>
</template>
<script>
export default {
  name: 'Codelab',
  components: {
    CodelabHeader: () =>import("@/components/codeView/CodelabHeader"),
    CodelabContent: () =>import("@/components/codeView/CodelabContent"),
  },
};
</script>

<style scoped>
 @media screen and (min-width: 600px) {
    .card-top-margin {
      margin-top:-150px
    }
    .bottom-space{
      margin-bottom: 130px;
      margin-top: 8px
    }
  }
@media screen and (max-width: 600px) {
    .card-top-margin {
      margin-top:-150px;
    }
    .bottom-space{
      margin-bottom: 100px;
    }
  }
</style>