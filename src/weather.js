export class WeatherService {
    getWeatherByCity(city) {
      return new Promise(function(resolve, reject) {
        let request = new XMLHttpRequest();
        let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c9781f5f2386e09424b4ffd04b0deb8b`;
        request.onload = function() {
          if (this.status === 200) {
            resolve(request.response);
          } else {
            reject(Error(request.statusText));
          }
        }
        request.open("GET", url, true);
        request.send();
      });
    }
  }