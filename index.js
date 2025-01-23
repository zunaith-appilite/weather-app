let locationInput = document.getElementById("location-input");
let locationSpan = document.getElementById("location-span");
let regionSpan = document.getElementById("region-span");
let countrySpan = document.getElementById("country-span");
let temperature = document.getElementById("temp");
let dateTime = document.getElementById("date-time");
let conditon = document.getElementById("condition");
let formData = document.getElementById("form");
let climateImg = document.getElementById("climate-img");
let currentLocationText = document.getElementById("current-location-text");

function updateData(info) {
  locationSpan.innerHTML = info.location.name;
  regionSpan.innerHTML = info.location.region;
  countrySpan.innerHTML = info.location.country;
  temperature.textContent = parseInt(info.current.temp_c);
  dateTime.innerHTML = formatDateTime(info.current.last_updated);
  conditon.innerHTML = info.current.condition.text;
  climateImg.src = info.current.condition.icon;
}

formData.addEventListener("submit", (e) => {
  e.preventDefault();
  if (locationInput.value !== "") {
    getData();
    currentLocationText.innerHTML = "";
  } else {
    currentLocationText.innerHTML = "Current Location's Weather";
    getData();
  }
});

function getData() {
  const currentEndpoint = `http://api.weatherapi.com/v1/current.json?key=b4481be6a7fa43fdb2c43225252301&q=${
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

function formatDateTime(input) {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const date = new Date(input.replace(" ", "T")); // Replace space with 'T' to create a valid DateTime string

  const day = days[date.getDay()];
  let hours = date.getHours();
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const amPm = hours >= 12 ? "PM" : "AM";

  hours = hours % 12 || 12; // Convert to 12-hour format

  return `${day} ${hours}.${minutes}${amPm}`;
}

// Initial call to fetch weather data for default location
getData();
