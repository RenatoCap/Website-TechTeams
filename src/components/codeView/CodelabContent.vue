<template>
  <v-container fluid class="py-0 my-0 mt-0" >
    <v-row class="py-0 my-0">
      <v-col md="12" sm="12" cols="12" class="py-0 my-0">
         <v-row class="mb-5">
          <v-col
            md="11"
            sm="11"
            xl="19"
            cols="12"
            class="pa-2"
          >
            <CodelabCard />
          </v-col>
          <br />
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default{
    components: {
    CodelabCard: () => import("@/components/codeView/CodelabCard")
  },
}
</script>