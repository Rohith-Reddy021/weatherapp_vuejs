<template>
  <header>
    <h1>Weather App</h1>
    <form @submit.prevent="onSubmit">
      <select v-model="selectedState" required>
        <option value="" disabled>Select a state</option>
        <option v-for="state in states" :key="state" :value="state">{{ state }}</option>
      </select>
      <button type="submit">Get Weather</button>
    </form>
  </header>
</template>

<script>
export default {
  name: "AppHeader",
  data() {
    return {
      selectedState: "",
      states: [
        "Alabama",
        "Alaska",
        "Arizona",
        "Arkansas",
        "California",
        "Colorado",
        "Connecticut",
        "Delaware",
        "Florida",
        "Georgia",
        "Hawaii",
        "Idaho",
        "Illinois",
        "Indiana",
        "Iowa",
        "Kansas",
        "Kentucky",
        "Louisiana",
        "Maine",
        "Maryland",
        "Massachusetts",
        "Michigan",
        "Minnesota",
        "Mississippi",
        "Missouri",
        "Montana",
        "Nebraska",
        "Nevada",
        "New Hampshire",
        "New Jersey",
        "New Mexico",
        "New York",
        "North Carolina",
        "North Dakota",
        "Ohio",
        "Oklahoma",
        "Oregon",
        "Pennsylvania",
        "Rhode Island",
        "South Carolina",
        "South Dakota",
        "Tennessee",
        "Texas",
        "Utah",
        "Vermont",
        "Virginia",
        "Washington",
        "West Virginia",
        "Wisconsin",
        "Wyoming",
      ],
    };
  },
  methods: {
    onSubmit() {
      this.$emit("stateSelected", this.selectedState);
    },
  },
};
</script>

<style>
header {
  padding: 20px;
  background-color: #f4f4f4;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
}

form {
  display: grid;
  grid-template-columns: auto auto auto;
  gap: 10px;
  justify-content: center;
  align-items: center;
}

select {
  padding: 5px;
  font-size: 1rem;
}

button {
  padding: 5px 10px;
  font-size: 1rem;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>
