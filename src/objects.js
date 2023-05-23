import weatherURL from './api';

export default (async function getDetails() {
  try {
    const getData = await fetch(weatherURL);
    const response = await getData.json();

    const location = document.getElementById('location');
    const condition = document.getElementById('condition');
    const fahr = document.getElementById('fahr');
    const celsius = document.getElementById('celsius');

    // data.location = response.location.name;
    // data.currentCondition = response.current.condition.text;
    // data.fahr = response.current.feelslike_f;
    // data.celsius = response.current.feelslike_c;

    location.textContent = `${response.location.name}, ${response.location.country}`;
    condition.textContent = response.current.condition.text;
    fahr.textContent = response.current.feelslike_f;
    celsius.textContent = response.current.feelslike_c;
  } catch (err) {
    alert(err);
  }
})();
