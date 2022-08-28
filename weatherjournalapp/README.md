# Weather-Journal App Project

## Overview

This project requires you to create an asynchronous web app that uses Web API and user data to dynamically update the UI.

## Instructions

This will require modifying the `server.js` file and the `website/app.js` file. You can see `index.html` for element references, and once you are finished with the project steps, you can use `style.css` to style your application to customized perfection.

## Extras

If you are interested in testing your code as you go, you can use `tests.js` as a template for writing and running some basic tests for your code.

## Required Node.js Packages

- CORS
- Express
- Body-parser

## Change log

// Server.js

- Required all the needed packages.
- Added a get route on root to capture temperature, note and date from client-side once a successeful get from the Openweather API.
- Added a post route to send all recorded entries back to client-side once a new submit.

// App.js

- Added the Openweather API key and API BaseURLS with imperial system units in client-side.
- Used ZipCode to Geolocation Converter API in a get request to get coordinates.
- Nested another promise get request using the recived cordoinates.
- Nested another promise to update UI once data is recived from the server.
