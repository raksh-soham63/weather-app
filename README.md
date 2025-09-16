 # 🌦️ Weather App Card (React)

A simple React component that fetches and displays real-time weather data using the **OpenWeather API**.  
It shows temperature, city name, weather icon, humidity, and wind speed with a clean UI.

---

## 🚀 Features
- 🔍 Search weather by city name  
- 🌡️ Displays temperature in Celsius  
- 📍 Shows city name  
- ☁️ Weather icons for different conditions  
- 💧 Humidity percentage  
- 💨 Wind speed in km/h  
- Loads a default city on startup (`Bankura`)  
- Clean UI with Tailwind CSS  

---

## 🛠️ Tech Stack
- **React** (with Hooks: `useState`, `useEffect`, `useRef`)  
- **Tailwind CSS** for styling  
- **OpenWeather API** for weather data  

---

## 📂 Project Structure
```
src/
 ├── assets/
 │    ├── search.png
 │    ├── humidity.png
 │    ├── wind.png
 │    ├── cloud.png
 │    ├── drizzle.png
 │    ├── rain.png
 │    ├── snow.png
 │    └── clear.png
 ├── components/
 │    └── Card.jsx   # Main Weather Card component
 └── App.jsx
```

---

## 🔑 Setup Instructions

### 1. Clone Repository
```bash
git clone https://github.com/raksh-soham63/weather-app.git
cd weather-card
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Get OpenWeather API Key
- Sign up at [OpenWeather](https://openweathermap.org/api)  
- Copy your **API Key**

### 4. Create `.env` File
In your project root, create a `.env` file:
```
VITE_APP_API=your_api_key_here
```

### 5. Run Project
```bash
npm run dev
```

---

## 🎯 Usage
- Enter a city name in the search box  
- Click the 🔍 icon  
- View updated weather details  

---

## 🖼️ Example UI
```
+--------------------------------------+
|    🔍 Search City                    |
|                                      |
|           29°C                       |
|        [ Weather Icon ]              |
|           New York                   |
|                                      |
| 💧 70% Humidity     💨 10 km/h       |
+--------------------------------------+
```

---

## 📌 Notes
- Make sure your `.env` file is not committed to GitHub (`.gitignore` should include `.env`)  
- API has rate limits for free accounts (60 calls/minute)  

---

