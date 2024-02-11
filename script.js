document.addEventListener('DOMContentLoaded', function() {
  // Setup for showing/hiding options based on selections
  setupDisplayLogic('shirt');
  setupDisplayLogic('pants');
  setupDisplayLogic('dress');
  setupDisplayLogic('jacket');

  document.getElementById('checkWeather').addEventListener('click', function() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(function(position) {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        const apiKey = 'deafc0088e69332ff72be5df974d15e7'; // Use your actual API key
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`;

        fetch(apiUrl)
          .then(response => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            return response.json();
          })
          .then(data => {
            const temperature = data.main.temp;
            provideClothingAdvice(temperature, collectUserChoices());
          })
          .catch(error => {
            console.error('Error fetching weather data:', error);
            document.getElementById('advice').innerText = 'Failed to fetch weather data. Please try again later.';
          });
      }, handleLocationError);
    } else {
      document.getElementById('advice').innerText = 'Geolocation is not supported by your browser.';
    }
  });

  function setupDisplayLogic(clothingType) {
    document.querySelectorAll(`input[name="wearing${capitalizeFirstLetter(clothingType)}"]`).forEach(input => {
      input.addEventListener('change', function() {
        const isWearing = this.value === 'yes';
        document.getElementById(`${clothingType}Options`).style.display = isWearing ? '' : 'none';
        const materialOptionsDiv = document.getElementById(`${clothingType}MaterialOptions`);
        if (materialOptionsDiv) {
          materialOptionsDiv.style.display = isWearing ? '' : 'none';
        }
      });
    });
  }

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  function collectUserChoices() {
    // Adapted to include points calculation based on material thickness and other attributes
    const choices = {
      shirtMaterial: getMaterialChoice('shirtMaterial'),
      pantsMaterial: getMaterialChoice('pantsMaterial'),
      dressMaterial: getMaterialChoice('dressMaterial'),
      jacketMaterial: getMaterialChoice('jacketMaterial'),
      hat: document.querySelector('input[name="wearingHat"]:checked')?.value === 'yes' ? 1 : 0,
      gloves: document.querySelector('input[name="wearingGloves"]:checked')?.value === 'yes' ? 1 : 0,
      scarf: document.querySelector('input[name="wearingScarf"]:checked')?.value === 'yes' ? 1 : 0,
    };

    return choices;
  }

  function getMaterialChoice(materialName) {
    const materialValue = document.querySelector(`input[name="${materialName}"]:checked`)?.value;
    return materialValue === 'thick' ? 3 : materialValue === 'medium' ? 2 : materialValue === 'thin' ? 1 : 0;
  }

  function provideClothingAdvice(feelsLike, choices) {
    const totalPoints = Object.values(choices).reduce((acc, value) => acc + value, 0);

    let advice = `Current "feels like" temperature is ${feelsLike}°F. `;
    advice += determineOutfitAppropriateness(feelsLike, totalPoints);

    document.getElementById('advice').innerHTML = advice;
  }

  function determineOutfitAppropriateness(feelsLike, points) {
      if (feelsLike <= 20) {
          if (points >= 16 && points <= 21) {
              return "Your outfit is appropriate for today's very cold weather.";
          } else {
              return points < 16 ? "Consider dressing warmer for today's very cold weather." : "Your outfit may be too warm for the very cold weather.";
          }
      } else if (feelsLike <= 40) {
          if (points >= 10 && points <= 15) {
              return "Your outfit is appropriate for today's cold weather.";
          } else {
              return points < 10 ? "Consider dressing warmer for today's cold weather." : "Your outfit may be too warm for the cold weather.";
          }
      } else if (feelsLike <= 60) {
          if (points >= 7 && points <= 10) {
              return "Your outfit is appropriate for today's pleasant weather.";
          } else {
              return points < 7 ? "Consider dressing warmer for today's pleasant weather." : "Your outfit may be too warm for the pleasant weather.";
          }
      } else if (feelsLike <= 80) {
          if (points >= 4 && points <= 8) {
              return "Your outfit is appropriate for today's warm weather.";
          } else {
              return points < 4 ? "Consider dressing cooler for today's warm weather." : "Your outfit may be too warm for the warm weather.";
          }
      } else if (feelsLike <= 100) {
          if (points >= 2 && points <= 4) {
              return "Your outfit is appropriate for today's very hot weather.";
          } else {
              return points < 2 ? "Your outfit may not be cool enough for the very hot weather." : "Consider dressing cooler for today's very hot weather.";
          }
      } else {
          // Extremely hot weather above 100
          return "It's extremely hot; ensure your outfit is comfortable for high temperatures, focusing on staying cool.";
      }
  }
  function determineOutfitAppropriateness(feelsLike, points) {
      if (feelsLike <= 20) {
          if (points >= 16 && points <= 21) {
              return "Your outfit is appropriate for today's very cold weather.";
          } else {
              return points < 16 ? "Consider dressing warmer for today's very cold weather." : "Your outfit may be too warm for the very cold weather.";
          }
      } else if (feelsLike <= 40) {
          if (points >= 10 && points <= 15) {
              return "Your outfit is appropriate for today's cold weather.";
          } else {
              return points < 10 ? "Consider dressing warmer for today's cold weather." : "Your outfit may be too warm for the cold weather.";
          }
      } else if (feelsLike <= 60) {
          if (points >= 7 && points <= 10) {
              return "Your outfit is appropriate for today's pleasant weather.";
          } else {
              return points < 7 ? "Consider dressing warmer for today's pleasant weather." : "Your outfit may be too warm for the pleasant weather.";
          }
      } else if (feelsLike <= 80) {
          if (points >= 4 && points <= 8) {
              return "Your outfit is appropriate for today's warm weather.";
          } else {
              return points < 4 ? "Consider dressing cooler for today's warm weather." : "Your outfit may be too warm for the warm weather.";
          }
      } else if (feelsLike <= 100) {
          if (points >= 2 && points <= 4) {
              return "Your outfit is appropriate for today's very hot weather.";
          } else {
              return points < 2 ? "Your outfit may not be cool enough for the very hot weather." : "Consider dressing cooler for today's very hot weather.";
          }
      } else {
          // Extremely hot weather above 100
          return "It's extremely hot; ensure your outfit is comfortable for high temperatures, focusing on staying cool.";
      }
  }
// Your outfit is not appropriate for today's weather

  function handleLocationError(error) {
    let message = "An unknown error occurred.";
    switch (error.code) {
      case error.PERMISSION_DENIED:
        message = "User denied the request for Geolocation.";
        break;
      case error.POSITION_UNAVAILABLE:
        message = "Location information is unavailable.";
        break;
      case error.TIMEOUT:
        message = "The request to get user location timed out.";
        break;
    }
    document.getElementById('advice').innerText = message;
  }
});
