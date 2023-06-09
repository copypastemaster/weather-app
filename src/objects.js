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
    fahr.textContent = response.current.feelslike_f + 'F';
    celsius.textContent = response.current.feelslike_c + 'C';

    if (response.current.condition.text === 'Partly cloudy') {
      document.body.style = 'background-color: steelblue;';
    } else if (response.current.condition.text === 'Sunny') {
      document.body.style = 'background-color: rgb(221, 165, 44);';
    } else if (response.current.condition.text === 'Raining') {
      document.body.style = 'background-color: rgb(26, 26, 32);';
    } else {
      document.body.style = 'background-color: rgba(235, 242, 245, 0.877);';
    }

    console.log(response);
  } catch (err) {
    alert(err);
  }
})();
