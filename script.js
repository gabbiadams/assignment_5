// Write your JavaScript code here!

//Validation

let pilotName = document.querySelector('input[name=pilotName]');
let copilotName = document.querySelector('input[name=copilotName]');
let fuelLevel = document.querySelector('input[name=fuelLevel]');
let cargoMass = document.querySelector('input[name=cargoMass]');

let faultyItems = document.getElementById('faultyItems');
let pilotStatus = document.getElementById('pilotStatus');
let copilotStatus = document.getElementById('copilotStatus');
let fuelStatus = document.getElementById('fuelStatus');
let cargoStatus = document.getElementById('cargoStatus');
let launchStatus = document.getElementById('launchStatus');

let missionTarget = document.getElementById('missionTarget');

let form = document.querySelector('form');
form.addEventListener('submit', function(event){
   if (pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" || cargoMass.value === ""){
      alert("All fields are required!");
   }
   if (isNaN(fuelLevel.value) || isNaN(cargoMass.value)){
      alert('Please enter valid information for each field!');
   } 
   updateStatus();
   event.preventDefault();
});

//Updating Shuttle Requirements

let updateStatus = function(){
   faultyItems.style.visibility = 'visible';
   pilotStatus.innerText = `Pilot ${pilotName.value} is ready for launch`;
   copilotStatus.innerText = `Co-pilot ${copilotName.value} is ready for launch`;

   if (Number(fuelLevel.value) < 10000){
      fuelStatus.innerText = `Fuel level too low for launch`;
      launchStatus.style.color = 'red';
      launchStatus.innerText = `Shuttle Not Ready for Launch`;
   } else if (Number(cargoMass.value) > 10000){
      cargoStatus.innerText = 'Cargo mass too heavy for launch';
      launchStatus.style.color = 'red';
      launchStatus.innerText = 'Shuttle Not Ready for Launch';
   } else {
      launchStatus.style.color = 'green';
      launchStatus.innerText = 'Shuttle is ready for launch';
   }
}

//Planetary JSON 

let planetaryData = function(){
   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response){
      response.json().then(function(json) {
         missionTarget.innerHTML = `
         <h2>Mission Destination</h2>
         <ol>
            <li>Name: ${json[2].name}</li>
            <li>Diameter: ${json[2].diameter}</li>
            <li>Star: ${json[2].star}</li>
            <li>Distance from Earth: ${json[2].distance}</li>
            <li>Number of Moons: ${json[2].moons}</li>
         </ol>
         <img src="${json[2].image}">
         `;
      });
   });
}

planetaryData();