# Weather Application

This is a Weather Application built with React, allowing users to view current weather data for different cities around the world.

## Overview

The app displays various weather parameters for a given city, including:

- Current temperature
- Minimum and maximum temperature
- "Feels like" temperature
- Pressure
- Humidity
- Wind speed

These values can be viewed in both Metric and Imperial units.

## Usage

Enter a city name into the input box and press enter. The weather information for that city will be displayed. You can toggle between Metric and Imperial units by clicking the button displaying '°C' or '°F'.

## Project Structure

The main application component (`App.js`) fetches weather data for the selected city and handles user interactions such as entering a new city name and toggling temperature units.

`Descriptions.js` is a functional component that takes weather data as props and displays it in a structured format.

The `weatherService.js` module fetches weather data from the API.

## Dependencies

The application uses the following dependencies:

- React
- Font Awesome (for icons)
- CSS for styling

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
