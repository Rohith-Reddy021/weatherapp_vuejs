<template>
    <div v-if="weatherData" class="background" :style="backgroundImageStyle"></div>
    <div v-else></div>
  </template>
  
  <script>
  export default {
    name: "BackgroundImage",
    props: {
      weatherData: {
        type: Object,
        required: false,
      },
    },
    computed: {
      backgroundImageStyle() {
        if (!this.weatherData) return {};
        let imageUrl = '';
        if (this.weatherData.precipitation > 2) {
          imageUrl = require('@/assets/snow.png');
        } else if (this.weatherData.precipitation > 1) {
          imageUrl = require('@/assets/rainy.png');
        } else {
          imageUrl = require('@/assets/sunny.png');
        }
        return { backgroundImage: `url(${imageUrl})` };
      },
    },
  };
  </script>
  
  <style>
  .background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    z-index: -1;
  }
  </style>
  