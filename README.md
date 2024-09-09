# Weather App

A simple web-based weather application that allows users to get current weather information for their location or any city around the world. The app uses the OpenWeatherMap API to fetch weather data and displays it in an easy-to-read format.

## Table of Contents

- [Features](#features)
- [Technology](#technolgies)
- [Installation](#installation)
- [Usage](#usage)

## Features

- **User Location Weather**: Automatically fetches weather data based on the user's current geographical location. This feature uses the browser’s geolocation API.
  
- **City Search Weather**: Allows users to search for weather information by entering a city name. This feature uses the OpenWeatherMap API to retrieve data.

- **Responsive Design**: The app is designed to be responsive and user-friendly on different devices and screen sizes.

- **Loading Indicator**: Displays a loading animation while fetching weather data to enhance user experience.

- **Error Handling**:
    - Handles errors related to fetching weather data and geolocation issues.
    - Displays appropriate messages or alerts if an error occurs during the data retrieval process.

- **Dynamic UI Updates**:
    - Updates the weather information dynamically without reloading the page.
    - Changes the displayed content based on user interactions, such as switching between tabs or submitting search queries.


## Technologies

- **HTML/CSS**: For structuring and styling the user interface.
- **JavaScript**: For handling API requests, UI interactions, and dynamic content updates.
- **OpenWeatherMap API**: For fetching weather data.

## Installation

To set up and run the Weather App locally, follow these instructions:

1. **Clone the repository:**

    ```bash
    git clone https://github.com/yourusername/weather-app.git
    ```

2. **Navigate to the project directory:**

    ```bash
    cd weather-app
    ```

3. **Open `index.html` in your preferred browser:**

    Simply open the `index.html` file in a browser to view and interact with the Weather App.

## Usage

1. **Grant Location Access**:
    - Open the app in your browser.
    - Click the "Grant Access" button to allow the app to access your location.
    - The app will automatically fetch and display the current weather based on your location.

2. **Search for City Weather**:
    - Click the "Search Weather" tab.
    - Enter a city name into the search input field and press the search button.
    - The app will display the current weather information for the entered city.

3. **View Weather Information**:
    - After fetching weather data, you will see details such as:
        - City name
        - Country flag
        - Weather description
        - Weather icon
        - Temperature
        - Wind speed
        - Humidity
        - Cloudiness
## Structure
   weather-app/
   ├── index.html          # Main HTML file
   ├── style.css           # CSS file for styling
   ├── index.js            # JavaScript file for functionality
   ├── image/              # Folder containing images (icons, loading gifs, etc.)
   └── README.md           # Project documentation


