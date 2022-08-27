<template>
  <v-container
    fluid
    class="px-0 mx-0"
    style="padding-left: 7%; padding-right: 7%;"
  >
    <v-row align="center" justify="center" class="px-1 mt-10">
      <v-col 
        v-for="(codelab, i) in codelabs"
        :key="i"
        class="py-0 my-0" 
        cols="12" 
        sm="6" 
        md="3" 
        xl="3"
      >
        <v-card class=" mt-10 codelabCard" elevation="2" max-width="500">
          <v-img :src="codelab.src"
            height="200px"
          ></v-img>
          <v-card-title 
            class="mt-2"
            v-text="codelab.title" 
            style="font-size: 1.5em;"

          ></v-card-title>
          
          <v-card-subtitle class="pt-3">
            <!-- {{codelab.environment}} -->
            <v-icon>mdi-clock</v-icon>  {{codelab.duration}} ' 
          </v-card-subtitle>
          
          <br>
          <v-card-text 
            class="text--primary pt-0"
            v-text="codelab.summary"
          >
          </v-card-text>
          <v-card-actions>
            <v-row align="center" justify="center">
              <v-btn
                outlined
                target="_blank"
                style="width: 80%"
                color="#1a73e8"
                :href=codelab.id
              >
                <v-icon color="#1a73e8"> mdi-code-tags </v-icon>
                &nbsp; 
                <a style="text-decoration: none;">
                  start 
                </a>
              </v-btn>
            </v-row>
          </v-card-actions>

          <v-card-actions>
            <v-list-item class="grow">
              <v-list-item-avatar>
                <v-img
                  class="elevation-6"
                  alt=""
                  src="https://i.ibb.co/pX2w52P/GDSC-UNI.png"
                ></v-img>
              </v-list-item-avatar>

              <v-list-item-content>
                <v-list-item-title>{{codelab.authors}}</v-list-item-title>
              </v-list-item-content>

              <v-row
                align="center"
                justify="end"
              >
                <v-chip draggable>
                  {{codelab.environment}}
                </v-chip>

              </v-row>
            </v-list-item>
          </v-card-actions>
        </v-card>
      </v-col>

    </v-row>
  </v-container>
</template>

<script>
import Colab from '../../../codelabs.json';

export default {
  data(){
    return{
      codelabs: Colab
    }
  },
};
</script>

<style>
.codelabCard {
  border-top: 1px solid rgb(224, 224, 224);
  background: white;
  border-radius: 30px;
}

.time-duration {
  font-size: 1rem;
}

</style>