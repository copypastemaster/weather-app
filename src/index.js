import './style/styles.css';
import weatherURL from './api';
import { weatherSearch } from './api';
import getDetails from './objects';

//selectors
const search = document.getElementById('search');
const container = document.getElementById('container');
const button = document.getElementById('submit');

const location = document.getElementById('location');
const condition = document.getElementById('condition');
const fahr = document.getElementById('fahr');
const celsius = document.getElementById('celsius');

async function clientData() {
  try {
    const getData = await fetch(weatherSearch(search.value));
    const response = await getData.json();

    location.textContent = `${response.location.name}, ${response.location.country}`;
    condition.textContent = response.current.condition.text;
    fahr.textContent = `${response.current.feelslike_f} F`;
    celsius.textContent = response.current.feelslike_c + 'c';

    if (response.current.condition.text === 'Partly cloudy') {
      document.body.style = 'background-color: steelblue;';
    } else if (response.current.condition.text === 'Sunny') {
      document.body.style = 'background-color: rgb(221, 165, 44);';
    } else if (response.current.condition.text === 'Raining') {
      document.body.style = 'background-color: rgb(26, 26, 32);';
    } else {
      document.body.style = 'background-color: rgba(235, 242, 245, 0.877);';
    }
  } catch (err) {
    alert('Cannot find city');
  }
}

button.addEventListener('click', clientData);
