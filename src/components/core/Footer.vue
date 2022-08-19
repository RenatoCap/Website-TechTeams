<template>
  <v-footer
    height="auto"
    fixedfir
    class="hidden-sm-and-down ma-0"
    style="background: #F5F5F5"
  >
  <!-- style="border-color:#e0e0e0;border-width: 1px;border-style: solid;border-bottom: 0;border-left:0;border-right:0" -->
    <v-container fluid >
      <v-row align="center" justify="center" class="mb-0">
        <v-col cols="12" md="10" lg="10" sm="11" class="px-0 mx-0"> 
          <v-toolbar text class="pa-0 px-0 mt-3 mx-0 elevation-0" style="background: #F5F5F5">
            <v-toolbar-title class="google-font pl-0 ml-0 mr-3" style="font-size:200%">
              <p 
                class="google-font my-0 mb-0" 
                style="font-weight: bold;"
              >
                <span style="color: rgb(102,102,102);">Tech</span>
                <span style="color: #F44336;">Teams</span>
              </p>
            </v-toolbar-title>
          </v-toolbar>
          <v-container fluid>
            <v-row>
              <v-col sm="11" md="11" lg="11" xl="11" cols="12">
                <a href="https://gdsc.community.dev/universidad-nacional-de-ingenieria/" target="_blank" rel="noreferrer" class="google-font ref-footer">About GDSC UNI</a>
                <br class="hidden-md-and-up">
                <a href="https://developers.google.com/community-guidelines" target="_blank" rel="noreferrer" class="google-font ref-footer">Community Guidelines</a>
              </v-col>
            </v-row>
          </v-container>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script>
import { mapState } from 'vuex'
  export default {
    components:{
    },
    data:()=>({
    }),
    computed:{
      ...mapState(['config'])
    },
  }
</script>

<style scoped>
  .ref-footer{
    color: #424242;
    text-decoration: none;
    font-size: 16px;
    margin-right: 16px;
  }
  .darkThemeTextLink{
    color: #FAFAFA
  }
  .lightThemeTextLink{
    color: #3E4551
  }
</style>