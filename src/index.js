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
    fahr.textContent = response.current.feelslike_f;
    celsius.textContent = response.current.feelslike_c;

    console.log(response);
  } catch (err) {
    alert('Cannot find city');
  }
}

button.addEventListener('click', clientData);
