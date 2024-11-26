<template>
  <div v-if="weatherData" class="weather-display">
    <h2>Weather Details for {{ weatherData.state }}</h2>
      <div class="weather-box">
        <p><strong>Temperature:</strong> {{ weatherData.temperature }}°F</p>
        <p><strong>High:</strong> {{ weatherData.temperature }}°F  <strong>Low:</strong> {{Math.round(weatherData.temperature - 20)}}°F</p>
      </div>
      <div class="weather-box">
        <p><strong>Precipitation:</strong> {{ weatherData.precipitation }} inches</p>
        <p><strong>Humidity:</strong> {{ weatherData.humidity }}%</p>
      </div>
      <div class="weather-box">
        <p><strong>Wind Speed:</strong> {{ weatherData.windSpeed }} mph</p>
        <p><strong>Air Quality Index:</strong> {{ weatherData.airQuality }}</p>
      </div>
      <div class="weather-box">
        <p><strong>Sunrise:</strong> {{ weatherData.sunrise }}</p>
        <p><strong>Sunset:</strong> {{ weatherData.sunset }}</p>
      </div>
    </div>
  <div v-else>
    <p>Select a state to view weather details.</p>
  </div>
</template>
  
  <script>
  export default {
    name: "WeatherDisplay",
    props: {
      weatherData: {
        type: Object,
        required: false,
      },
    },
  };
  </script>

  <style>
  .weather-display {
    text-align: center;
    background-color: #f9f9f9;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .weather-display h2 {
    margin-bottom: 20px;
  }

  .weather-box {
    background-color: #ffffff;
    padding: 4px;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    font-size: 1.5rem;
    margin-bottom: 20px;
  }
  
  .weather-box p {
    margin: 5px 0;
  }
</style>