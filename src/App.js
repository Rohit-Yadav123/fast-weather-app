import React from "react";
import "./App.css"
function App() {
  const [weather, setWeather] = React.useState({});
  React.useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=4baf4d0376cbbafb843ecd408db76791&units=metric`)
          .then(res => res.json())
          .then(data => {
            setWeather(data);
          

          });
      });
    } else {
      document.getElementById("demo").innerHTML =
        "Geolocation is not supported by this browser.";
    }
  }, [])

  return (
    <div>
      {
        weather.main !== undefined ? <div className="App-header">
          <div className="container text-center">
            <div className="row">
              <div className="col-md-6 offset-md-4">
                <div className="mt-3">
                  <h1><i class="fa-solid fa-cloud-sun text-danger icon1"></i>Quick Weather App</h1>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 offset-md-4">
                <div className="mt-3">
                  <h1 className="display-6"><i class="fa-solid fa-house icon1"></i>{weather.name}</h1>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 offset-md-4">
                <div className="mt-3">
                  <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`} alt =""/>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 offset-md-4">
                <div className="mt-3">
                  <h1 className="display-5">{weather.weather[0].description}</h1>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 offset-md-4">
                <div className="mt-3">
                  <h1 className="display-5">{weather.main.temp}<sup>o</sup>C</h1>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 offset-md-4">
                <div className="mt-3">
                  <p className="display-5">
                    <span className="me-3"><i class="fa-solid fa-temperature-arrow-up"></i>{Math.round(weather.main.temp_max)}<sup>o</sup>C</span>
                    <i class="fa-solid fa-temperature-arrow-down"></i>{Math.round(weather.main.temp_min)}<sup>o</sup>C
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 offset-md-4">
                <div className="mt-3">
                  <h1 className="display-5"><i class="fa-solid fa-wind"></i>{weather.wind.speed}</h1>
                </div>
              </div>
            </div>
          </div>
        </div> : <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      }
    </div>
  );
}

export default App;
