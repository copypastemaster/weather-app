import './style/styles.css';
import weatherURL from './api';
import { weatherSearch } from './api';
import getDetails from './objects';

//selectors
const search = document.getElementById('search');
const container = document.getElementById('container');
const button = document.getElementById('submit');

async function clientData() {
  try {
    const getData = await fetch(weatherSearch(search.value));
    const response = await getData.json();

    const location = document.getElementById('location');
    const condition = document.getElementById('condition');
    const fahr = document.getElementById('fahr');
    const celsius = document.getElementById('celsius');

    location.textContent = response.location.name;
    condition.textContent = response.current.condition.text;
    fahr.textContent = response.current.feelslike_f;
    celsius.textContent = response.current.feelslike_c;
  } catch (err) {
    alert(err);
  }
}

button.addEventListener('click', clientData);
