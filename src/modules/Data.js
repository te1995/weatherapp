export function Data() {
  let data;

  async function fetchData(location) {
    let url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?include=fcst%2Cobs%2Chistfcst%2Cstats%2Cdays%2Chours%2Ccurrent%2Calerts&key=86MQNDZ7CKHGDXHTM2QGY6ZSU&options=beta&contentType=json`;
    try {
      let file = await fetch(url, { mode: `cors` });
      let jsonFile = await file.json();
      console.log(jsonFile);
      filterData(jsonFile);
    } catch (error) {
      console.log(error);
    }
  }

  function filterData(jsonFile) {
    data = {
      location: jsonFile.resolvedAddress,
      weatherForecast: jsonFile.days,
    };
  }

  function returnData() {
    console.log(data);
    return data;
  }

  return { fetchData, returnData };
}
