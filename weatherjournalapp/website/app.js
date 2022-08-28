/* Global Variables */
const apiKey = "&appid=23bb9951a18f9d54e572432aef9f62b4&units=imperial";
const geoApi = "http://api.openweathermap.org/geo/1.0/zip?zip=";
const baseURL = "https://api.openweathermap.org/data/2.5/weather?";
// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + 1 + "." + d.getDate() + "." + d.getFullYear();

// Generate button data
const generateBtn = document.querySelector("#generate");
const mostRecentTemp = document.querySelector("#date");
const mostRecentDate = document.querySelector("#temp");
const mostRecentResp = document.querySelector("#content");
// Main Page function
generateBtn.addEventListener("click", pageAction);

// Helper Functions

// Chained Page Function
function pageAction(e) {
  const zipCode = document.querySelector("#zip").value;
  const feelings = document.querySelector("#feelings").value;
  getRequest(baseURL, geoApi, zipCode, apiKey)
    .then((tempData) => {
      postData("/", {
        temperature: tempData.main.temp,
        date: newDate,
        response: feelings,
      });
    })
    .then(updateUI);
}

// Function to convert ZipCode Geo into Cordoinates
const getRequest = async (baseURL, geoApi, zipCode, apiKey) => {
  const res = await fetch(geoApi + zipCode + apiKey);
  try {
    const data = await res.json();
    const lat = `lat=${data.lat}`;
    const lon = `&lon=${data.lon}`;
    return getTemp(baseURL, lat, lon, apiKey);
  } catch (error) {
    console.log("error", error);
  }
};

// Function get temp using Cordoniates
const getTemp = async (baseURL, lat, lon, apiKey) => {
  const resp = await fetch(baseURL + lat + lon + apiKey);
  try {
    const tempData = await resp.json();
    return tempData;
  } catch (error) {
    console.log("error", error);
  }
};

// Post acquired data to the server
const postData = async (url, data = tempData) => {
  const response = await fetch(url, {
    method: "POST",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    // Body data type must match "Content-Type" header
    body: JSON.stringify(data),
  });

  try {
    const newData = await response.json();
    return newData;
  } catch (error) {}
};

// Update the UI
const updateUI = async () => {
  const request = await fetch("/all");
  try {
    const allData = await request.json();

    mostRecentTemp.innerHTML =
      "🌡️" + Math.round(allData[allData.length - 1].temperature) + " degrees";
    mostRecentDate.innerHTML = "📅" + allData[allData.length - 1].date;
    mostRecentResp.innerHTML = "🗒️" + allData[allData.length - 1].response;
    console.log(allData);
  } catch (error) {
    console.log("error", error);
  }
};
