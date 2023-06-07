const select = document.getElementById("weather");
const paragraph = document.getElementById("weather-rec");

select.addEventListener("change", setWeather);

function setWeather() {
  const choice = select.value;
  if (choice === "SUNNY") {
    paragraph.innerText = "Don't wear too much clothes.";
  }
  else if (choice === "RAINY") {
    paragraph.innerText = "Pitter patter. Wear much clothes.";
  }
  else if (choice === "SNOWING") {
    paragraph.innerText = "It's SNOWING!!!!!!";
  }
  else if (choice === "OVERCAST") {
    paragraph.innerText = "Wear clothes. No need for sunglasses.";
  }
  else if (choice === "PARTLY CLOUDY") {
    paragraph.innerText = "Wear cloudy clothes.";
  }
  else {
    paragraph.innerText = "I'm not sure what to do.";
  }
}
