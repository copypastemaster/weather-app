const weatherURL =
  'http://api.weatherapi.com/v1/forecast.json?key=8aa37b897c3c48ed94371256232305&q=london';

export function weatherSearch(data) {
  const url = `http://api.weatherapi.com/v1/forecast.json?key=8aa37b897c3c48ed94371256232305&q=${data}`;

  return url;
}

export default weatherURL;
