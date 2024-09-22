<h1 align="center">WEATHER-FORECAST-WEB-APP</h1>

<p align="center">
 <em>Built with the tools and technologies:</em>
</p>

<p align="center">
 <img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=flat&logo=JavaScript&logoColor=black" alt="JavaScript">
 <img src="https://img.shields.io/badge/HTML5-E34F26.svg?style=flat&logo=HTML5&logoColor=white" alt="HTML5">
 <img src="https://img.shields.io/badge/Vite-646CFF.svg?style=flat&logo=Vite&logoColor=white" alt="Vite">
 <img src="https://img.shields.io/badge/React-61DAFB.svg?style=flat&logo=React&logoColor=black" alt="React">
 <img src="https://img.shields.io/badge/ESLint-4B32C3.svg?style=flat&logo=ESLint&logoColor=white" alt="ESLint">
 <img src="https://img.shields.io/badge/JSON-000000.svg?style=flat&logo=JSON&logoColor=white" alt="JSON">
</p>

---

## Table of Contents

- [Table of Contents](#table-of-contents)
- [Overview](#overview)
- [Features](#features)
  - [Key Features](#key-features)
- [Repository Structure](#repository-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Usage](#usage)

---

## Overview

Develop a weather forecast web app using React.js that fetches and displays weather data from a public API (OpenWeatherMap).

---

## Features

This weather forecast application showcases skills in React.js, focusing on key concepts like componentization, API integration, state management.

### Key Features

- **Weather Data Display:**
  - Displays the current weather for a default city (e.g., Delhi).
  - Reusable components for:
    - City name
    - Current temperature
    - Weather condition (e.g., sunny, rainy)
    - Weather icon
  - Promotes maintainability by breaking the UI into smaller, modular components.

- **City Search:**
  - Users can search for weather information in various cities using a free weather API (e.g., OpenWeatherMap).
  - A custom input component (built from scratch) opens a dropdown modal with a city search box and selectable city list.
  - Handles errors (e.g., city not found or network issues) with appropriate messages.

- **Five-Day Forecast:**
  - Displays a 5-day weather forecast below the current weather.
  - For each day, shows:
    - Day of the week
    - High and low temperatures
    - Weather icon
  - Reuses a `ForecastCard` component to display each day's weather details.

- **Temperature Unit Conversion:**
  - Includes a toggle button to switch between Celsius and Fahrenheit.
  - Manual conversion logic (no third-party libraries).
  - Uses React state management to handle the temperature unit and update the display accordingly.

- **Styling and UI:**
  - Focuses on visually appealing design using CSS and React.js styling.
  - Ensures responsiveness across various screen sizes and orientations.
  - Consistent styling across components for a unified look and feel.

---

## Repository Structure

```sh
└── weather-forecast-web-app/
    ├── README.md
    ├── eslint.config.js
    ├── index.html
    ├── package-lock.json
    ├── package.json
    ├── public
    │   └── logo.jpeg
    ├── src
    │   ├── App.css
    │   ├── App.jsx
    │   ├── Components
    │   │   ├── Forecast.jsx
    │   │   └── Search.jsx
    │   ├── index.css
    │   └── main.jsx
    └── vite.config.js
```

## Getting Started

### Prerequisites

- **Node.js**
- **React.js**
- **JavaScript**

### Installation

1. Clone the weather-forecast-web-app repository:

    ```bash
    git clone https://github.com/Khush0031/weather-forecast-web-app
    ```

2. Navigate to the project directory:

    ```bash
    cd weather-forecast-web-app
    ```

3. Install the required dependencies:

    ```bash
    npm install
    ```

### Usage

To run the project, execute the following command:

```bash
npm run dev
```
