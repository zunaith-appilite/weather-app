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
 const currentEndpoint = `http://api.weatherapi.com/v1/current.json?key=<api-key>&q=${
    locationInput.value !== "" ? locationInput.value : "Chennai"
  }&aqi=no`;

  // Create an XMLHttpRequest object
  const xhr = new XMLHttpRequest();

  // Configure it: GET-request for the URL
  xhr.open("GET", currentEndpoint, true);

  // Define what happens on successful response
  xhr.onload = function () {
    if (xhr.status === 200) {
      const data = JSON.parse(xhr.responseText);
      console.log(data); // For debugging
      updateData(data);
    } else {
      document.getElementById(
        "weatherData"
      ).innerHTML = `<p>Error: HTTP status ${xhr.status}</p>`;
    }
  };

  // Define what happens in case of an error
  xhr.onerror = function () {
    document.getElementById(
      "weatherData"
    ).innerHTML = `<p>Error: Unable to fetch data</p>`;
  };

  // Clear the previous weather data
  document.getElementById("weatherData").innerHTML = ``;

  // Send the request
  xhr.send();
}
```
### Screenshots
Here are some screenshots of the web app in action:

![Weather App Screenshot](https://i.ibb.co/r52TWYx/Screenshot-315.png" alt="Screenshot-315)




### Conclusion
This documentation outlines the key steps and code needed to create a weather forecasting web app using the WeatherAPI and AJAX. Feel free to modify and expand upon it to suit your needs!


