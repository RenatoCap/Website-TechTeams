
<template>
  <v-main class="px-0 mx-0 pt-5">
    <v-container fluid class="px-0 pt-5 mt-5 py-0">
      <v-row justify="center" align="center">
        <v-col md="11" lg="10" sm="11" xs="12" class="pt-3 pb-14">
          <aboutHeader />
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import { mapState } from "vuex";

export default {
  components: {
    aboutHeader: () => import("@/components/about/AboutHeader"),
  },
  computed: {
    ...mapState(["config"])
  },
  data: () => ({
    loading: true,
    coc: ""
  }),
};
</script>