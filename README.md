## Weather Forecasting Web App Documentation

### Introduction
This document provides a detailed overview of the Weather Forecasting Web App, including the steps to fetch weather data using the WeatherAPI and AJAX in JavaScript.

### Prerequisites
- A WeatherAPI account and API key from [WeatherAPI.com](https://www.weatherapi.com/)
- Basic knowledge of JavaScript and AJAX
- A code editor and a web browser

### Setup
1. Clone or download the repository containing the web app.
2. Open the project folder in your code editor.

### Fetching Weather Data
We use AJAX to fetch data from the WeatherAPI. Below is the code snippet to get weather data using an API key.

```javascript
const apiKey = 'YOUR_API_KEY';
const city = 'Mumbai';
const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

const xhr = new XMLHttpRequest();
xhr.open('GET', url, true);
xhr.onload = function() {
    if (this.status === 200) {
        const response = JSON.parse(this.responseText);
        console.log(response);
        // Process and display the weather data
    }
};
xhr.send();

