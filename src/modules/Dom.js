import clearDay from '../assets/clear-day.svg';
import clearNight from '../assets/clear-night.svg';
import cloudy from '../assets/cloudy.svg';
import fog from '../assets/fog.svg';
import hail from '../assets/hail.svg';
import partlyCloudyDay from '../assets/partly-cloudy-day.svg';
import partlyCloudyNight from '../assets/partly-cloudy-night.svg';
import rainSnowShowersDay from '../assets/rain-snow-showers-day.svg';
import rainSnowShowersNight from '../assets/rain-snow-showers-night.svg';
import rainSnow from '../assets/rain-snow.svg';
import rain from '../assets/rain.svg';
import showersDay from '../assets/showers-day.svg';
import showersNight from '../assets/showers-night.svg';
import sleet from '../assets/sleet.svg';
import snowShowersDay from '../assets/snow-showers-day.svg';
import snowShowersNight from '../assets/snow-showers-night.svg';
import snow from '../assets/snow.svg';
import thunderRain from '../assets/thunder-rain.svg';
import thunderShowersDay from '../assets/thunder-showers-day.svg';
import thunderShowersNight from '../assets/thunder-showers-night.svg';
import thunder from '../assets/thunder.svg';
import wind from '../assets/wind.svg';

const iconMapping = {
  'clear-day': clearDay,
  'clear-night': clearNight,
  cloudy: cloudy,
  fog: fog,
  hail: hail,
  'partly-cloudy-day': partlyCloudyDay,
  'partly-cloudy-night': partlyCloudyNight,
  'rain-snow-showers-day': rainSnowShowersDay,
  'rain-snow-showers-night': rainSnowShowersNight,
  'rain-snow': rainSnow,
  rain: rain,
  'showers-day': showersDay,
  'showers-night': showersNight,
  sleet: sleet,
  'snow-showers-day': snowShowersDay,
  'snow-showers-night': snowShowersNight,
  snow: snow,
  'thunder-rain': thunderRain,
  'thunder-showers-day': thunderShowersDay,
  'thunder-showers-night': thunderShowersNight,
  thunder: thunder,
  wind: wind,
};

export function DOM(dataBase) {
  let data = dataBase;
  const imageIconToday = document.querySelector('.imgToday');
  const header = document.querySelector('.city');
  const overview = document.querySelector('.dayOverview');
  const textToday = document.querySelector('.textToday');
  const tempToday = document.querySelector('.temperature');

  function setDiv() {
    overview.innerHTML = '';
    setHeader();
    setImages();
  }

  function setHeader() {
    let dataSet = data.returnData();
    header.textContent = dataSet.location;
  }

  function setImages() {
    let dataSet = data.returnData();
    imageIconToday.src = iconMapping[dataSet.weatherForecast[0].icon];
    textToday.textContent = dataSet.weatherForecast[0].conditions;
    tempToday.textContent = dataSet.weatherForecast[0].temp + "°F";

    for (let i = 1; i < 7; i++) {
      const newDiv = document.createElement('div');
      newDiv.classList.add('days');
      newDiv.classList.add('days');
      newDiv.innerHTML = `
        <img src="${iconMapping[dataSet.weatherForecast[i].icon]}" alt="Weather" class="img" />
        <p class="one">${dataSet.weatherForecast[i].conditions}</p>
        <p class="two">${dataSet.weatherForecast[i].temp}°F</p>
        `;

      overview.appendChild(newDiv);
    }
  }

  return { setDiv };
}
