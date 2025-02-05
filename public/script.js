import sdk from './sdk/sdk.js';

sdk.init()
sdk.sitemap()

sdk.sendEvent('click', { target: 'button' })

document.getElementById("fetchMessage").addEventListener("click", async () => {
  try {
    const response = await fetch("/api/user/2");
    const data = await response.json();
    document.getElementById("message").innerText = JSON.stringify(data);
  } catch (error) {
    console.error("Error fetching message:", error);
  }
});

(async () => {
  const weatherResponse = await fetch('https://weather.tsukumijima.net/api/forecast/city/130010')
  const weatherData = await weatherResponse.json()
  console.log(weatherData)

  const {
    title,
    forecasts
  } = weatherData
  console.log(title)
  console.log(forecasts[0].date, forecasts[0].telop)
})()



// const form = document.querySelector('.user-form')
// const radioButtons = form.querySelectorAll('input[name="user"]')


