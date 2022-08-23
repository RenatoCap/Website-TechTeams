<template>
  <v-container fluid class="py-0 pt-8" style="padding-left: 4%; padding-right:4%">
    <v-row align="center" class="fill-height">
      <v-col md="9" sm="6" cols="12" class="px-0">
        <p class="google-font mb-0 td-title">
          <span style="color:rgb(102,102,102);">Tech</span>Teams
        </p>
        <p class="google-font tb-subtitle mt-0">
          by GDSC UNI
        </p>
        <p class="google-font tb-tagline mt-6">
          Una iniciativa de
          <span
            class="community-overlay"
          >
          <a href="https://gdsc.community.dev/universidad-nacional-de-ingenieria/"
            target="_blank" style="text-decoration: none; color:black;">
              GDSC UNI
            </a>
          </span>
        donde los miembros de la comunidad pueden profundizar en las áreas tecnologías que más les apasionan.
        </p>
         <v-btn
            class="ma-1"
            elevation="0"
            rounded
            color="#FFE082"
            height="54px"
          >
            <span class="google-font text-none" style="font-size: 25px; color: black;">#WebDev</span>
        </v-btn>
        <v-btn
            class="ma-1"
            elevation="0"
            rounded
            color="#FFCDD2"
            height="54px"
        >
          <span class="google-font text-none" style="font-size: 25px; color: black;">#CloudDev</span>
        </v-btn>
        <v-btn
            class="ma-1"
            elevation="0"
            rounded
            color="#BBDEFB"
            height="54px"
        >
          <span class="google-font text-none" style="font-size: 25px; color: black;">#DS&ML</span>
        </v-btn>
        <v-btn
            class="ma-1"
            elevation="0"
            rounded
            color="#E1BEE7"
            height="54px"
        >
          <span class="google-font text-none" style="font-size: 25px; color: black;">#UX/UI</span>
        </v-btn>

        
        
      </v-col>
      <v-col md="3" sm="6" cols="12" class>
        <div class="container">
          <div class="wrapper">
            <div class="loader">
              <div class="dot dot1"></div>
              <div class="dot dot2"></div>
              <div class="dot dot3"></div>
              <div class="dot dot4"></div>
              <div class="dot dot5"></div>
              <div class="dot dot6"></div>
              <div class="dot dot7"></div>
            </div>
          </div>
        </div>   
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from "vuex";

export default {
  data: () => ({}),
  computed: {
    ...mapState(["config"])
  }
};
</script>

<style scoped>
.td-title{
  font-size: 60px;
  font-weight: 700;
  line-height: 45px;
  color: #F44336;
}
.tb-subtitle{
  font-size: 30px;
  color: grey;
}

.tb-tagline{
  font-size: 20px;
  font-weight: 500;
  color: rgba(0,0,0,.87);
}
@media screen and (min-width: 600px){
    .td-title{
        font-size: 90px;
        font-weight: 600;
        line-height: 100px;
        color: #F44336;
    }
    .tb-subtitle{
        font-size: 30px;
        color: grey;
    }
    .tb-tagline{
        font-size: 23px;
        font-weight: 500;
        color: black;
    }
}
.community-overlay{
    padding: 0;
    transition: padding .15s;
    transition-timing-function: ease-out;
}
.community-overlay:hover {
    background: #F44336;
    color: #fff;
    padding: 2px 12px;
    margin-right: 5px;
    border-radius: 20px;
    cursor: pointer;
}
.dark-font-color {
  color: white;
}
.light-font-color {
  color: #616161;
}
.container{
    position: relative;
    display: flex;
    width: 100%;
    justify-content: center;
    gap: 30px;
}
.wrapper {
    width: 450px;
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    padding: 30px;
  }

  /* Small devices (landscape phones, less than 768px) */
  @media (max-width: 767.98px) {
    .container {
      flex-direction: column;
      align-items: center;
    }
  
    .wrapper {
      width: 300px;
      height: 200px;
      justify-content: center;
    }
  }
  
  .downloadable a {
    display: block;
    color: #4285f4;
    padding: 10px;
    border-radius: 5px;
    background-color: rgb(241, 241, 241);
    margin-bottom: 10px;
    transition-duration: 300ms;
  }
  
  .downloadable a:hover {
    color: var(--color-green);
    background-color: rgb(235, 235, 235);
  }

  
.loader {
    position: relative;
    width: 225px;
    height: 150px;
  }
  
  .dot {
    position: absolute;
    width: 40px;
    height: 40px;
    border-radius: 9999px;
  }
  
  .dot1 {
    top: 55px;
    background-color: #4285f4;
    transform-origin: 20px center;
    animation: dsc-dot1 6s infinite ease-in-out;
    z-index: 2;
  }
  
  .dot2 {
    left: 62.5px;
    top: 55px;
    background-color: #ea4335;
    animation: dsc-dot2 6s infinite ease-in-out;
  }
  
  .dot3 {
    bottom: 0;
    left: 62.5px;
    background-color: #34a853;
    animation: dsc-dot3 6s infinite ease-in-out;
  }
  
  .dot4 {
    left: 62.5px;
    background-color: #34a853;
    animation: dsc-dot4 6s infinite ease-in-out;
  }
  
  .dot5 {
    left: 62.5px;
    top: 55px;
    background-color: #34a853;
    animation: dsc-dot5 6s infinite ease-in-out;
  }
  
  .dot6 {
    left: 62.5px;
    bottom: 0;
    background-color: #fbbc05;
    animation: dsc-dot6 6s infinite ease-in-out;
  }
  
  .dot7 {
    top: 55px;
    background-color: #ea4335;
    transform-origin: 20px center;
    animation: dsc-dot7 6s infinite ease-in-out;
    z-index: 1;
  }
  
  @keyframes dsc-dot1 {
    0%, 100% {
      opacity: 0;
      transform: scale(0);
    }
    5%, 95% {
      opacity: 1;
      transform: scale(1);
    }
    25%, 75% {
      width: 40px;
    }
    30%, 70% {
      width: 100px;
      transform: rotate(0deg);
    }
    35%, 65% {
      transform: rotate(-30deg);
    }
    45%, 55% {
      transform: rotate(30deg);
    }
    50% {
      width: 100px;
      transform: rotate(30deg);
    }
  }
  
  @keyframes dsc-dot2 {
    0%, 100% {
      opacity: 0;
      transform: scale(0);
    }
    5%, 95% {
      opacity: 0;
      transform: scale(0);
    }
    10%, 90% {
      opacity: 1;
      width: 40px;  
      transform: scale(1);
    }
    15%, 85% {
      left: 62.5px;
    }
    20%, 80% {
      width: 100px;
      left: 125px;
      transform: scale(1);
      transform-origin: 80px center;
    }
    25%, 75% {
      transform: scale(0);
    }
    30%, 70% {
      transform: scale(0);
      background-color: #ea4335;
    }
    36%, 64% {
      background-color: #fbbc05;
    }
    40%, 60% {
      width: 100px;
      left: 125px;
      transform: scale(1);
      transform: rotate(-30deg);
    }
    50% {
      width: 100px;
      left: 125px;
      background-color: #fbbc05;
      transform: scale(1);
      transform: rotate(-30deg);
      transform-origin: 80px center;
    }
  }
  
  @keyframes dsc-dot3 {
    0%, 100% {
      opacity: 0;
      transform: scale(0);
    }
    10%, 90% {
      opacity: 0;
      transform: scale(0);
    }
    15%, 85% {
      opacity: 1;
      transform: scale(1);
      width: 40px;
    }
    20%, 80% {
      width: 100px;
      left: 62.5px;
    }
    25%, 75% {
      width: 40px;
      left: 122.5px;
      transform: scale(1);
    }
    30%, 70% {
      transform: scale(0);
    }
    50% {
      transform: scale(0);
    }
  }
  
  @keyframes dsc-dot4 {
    0%, 100% {
      opacity: 0;
      transform: scale(0);
    }
    15%, 85% {
      opacity: 0;
      transform: scale(0);
    }
    20%, 80% {
      opacity: 1;
      transform: scale(1);
      width: 40px;
    }
    25%, 75% {
      width: 100px;
      left: 62.5px;
    }
    30%, 70% {
      width: 40px;
      left: 122.5px;
      transform: scale(1);
    }
    35%, 65% {
      transform: scale(0);
    }
    50% {
      transform: scale(0);
    }
  }
  
  @keyframes dsc-dot5 {
    0%, 100% {
      opacity: 0;
      transform: scale(0);
      transform-origin: left center;
    }
    10%, 90% {
      opacity: 0;
      transform: scale(0);
    }
    15%, 85% {
      opacity: 1;
      transform: scale(1);
      width: 40px;
      left: 62.5px;
      transform-origin: left center;
    }
    20%, 80% {
      width: 100px;
      left: 125px;
      transform-origin: 80px center;
    }
    30%, 70% {
      transform: rotate(0deg);
    }
    35%, 65% {
      transform: rotate(-30deg);
    }
    45%, 55% {
      transform: rotate(30deg);
    }
    50% {
      opacity: 1;
      transform: scale(1);
      transform: rotate(30deg);
      transform-origin: 80px center;
      left: 125px;
      width: 100px;
    }
  }
  
  @keyframes dsc-dot6 {
    0%, 100% {
      opacity: 0;
      transform: scale(0);
    }
    15%, 85% {
      opacity: 0;
      transform: scale(0);
    }
    20%, 80% {
      opacity: 1;
      transform: scale(1);
      width: 40px;
    }
    22.5%, 77.5% {
      width: 100px;
      left: 62.5px;
    }
    27.5%, 72.5% {
      width: 40px;
      left: 122.5px;
      transform: scale(1);
    }
    32.5%, 67.5% {
      transform: scale(0);
    }
    50% {
      transform: scale(0);
    }
  }
  
  @keyframes dsc-dot7 {
    0%, 100% {
      opacity: 0;
      transform: scale(0);
    }
    35%, 65% {
      opacity: 1;
      transform: scale(0);
    }
    36%, 64% {
      transform: scale(1);
      width: 100px;
      transform: rotate(-30deg);
    }
    50% {
      transform: scale(1);
      width: 100px;
      transform: rotate(-30deg);
    }
  }

</style>