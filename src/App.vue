<template>
  <div id="app">
    <AppHeader @stateSelected="filterWeatherData" />
    <WeatherDisplay :weatherData="weatherData" />
    <BackgroundImage :weatherData="weatherData"  />
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader.vue";
import WeatherDisplay from "./components/WeatherDisplay.vue";
import BackgroundImage from "./components/BackgroundImage.vue";

export default {
  name: "App",
  components: {
    AppHeader,
    WeatherDisplay,
    BackgroundImage,
  },
  data() {
    return {
      allWeatherData: [], 
      weatherData: null, 
    };
  },
  async created() {
    await this.fetchAllWeatherData();
  },
  methods: {
    async fetchAllWeatherData() {
      try {
        const response = await fetch("https://weatherapp-nodejs-xbzt.onrender.com/api");
        const data = await response.json();
        this.allWeatherData = data; 
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    },
    filterWeatherData(selectedState) {
    this.weatherData = this.allWeatherData.find((item) => item.state === selectedState);
    },
  },
};
</script>

<style>
#app {
  font-family: Arial, sans-serif;
  text-align: center;
  margin: 0 auto;
  max-width: 800px;
}
</style>
