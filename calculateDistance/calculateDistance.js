import { startAutocomplete } from "../placeAutocomplete/placeAutocomplete.js";
import { destinationAutocomplete } from "../placeAutocomplete/placeAutocomplete.js";
import { addTable } from "../table/table.js";

var submitButton = document.getElementById("submitButton");
submitButton.addEventListener("click", calculateDistance);

var startInput = document.getElementById("start-autocomplete");
var destinationInput = document.getElementById("destination-autocomplete");
var nameInput = document.getElementById("name-input");
var dateInput = document.getElementById("date-input");

var startPlace;
var destinationPlace;
var milesTraveled;

function calculateDistance(){

    console.log(dateInput.value);

    startPlace = startAutocomplete.getPlace();
    destinationPlace = destinationAutocomplete.getPlace();

    nameInput.style.removeProperty('border');
    startInput.style.removeProperty('border');
    destinationInput.style.removeProperty('border');

    nameInput.placeholder = "";
    startInput.placeholder = "Enter a location";
    destinationInput.placeholder = "Enter a location";

    if (nameInput.value === ""){
      nameInput.style.borderColor = "red";
      nameInput.placeholder = "Invalid client name";
    }
    else if (dateInput.value === ""){
      dateInput.style.borderColor = "red";
    }
    else if(startPlace === undefined || document.getElementById("start-autocomplete").value === ""){
      console.log("Start place underfined")  
      startInput.style.borderColor = "red";
      startInput.placeholder = "Invalid start location";
    }
    else if (destinationPlace === undefined || document.getElementById("destination-autocomplete").value === ""){
      console.log("Destination place underfined")
      destinationInput.style.borderColor = "red";
      destinationInput.placeholder = "Invalid destination location";
    }
    else{
      var service = new google.maps.DistanceMatrixService();
      service.getDistanceMatrix(
        {
            origins: [startPlace.formatted_address],
            destinations: [destinationPlace.formatted_address],
            travelMode: 'DRIVING',
            unitSystem: google.maps.UnitSystem.IMPERIAL,
            
        }, callback);
        
        function callback(response, status) {
          console.log(status);
          if (document.getElementById('returnCheckbox').checked) {
            milesTraveled = (response.rows[0].elements[0].distance.value * 0.000621) * 2;
            milesTraveled = Math.round(milesTraveled * 10) / 10;
          } else {
            milesTraveled = response.rows[0].elements[0].distance.value * 0.000621;
            milesTraveled = Math.round(milesTraveled * 10) / 10;
          } 
          addTable(milesTraveled);
        }
    }
}

export {nameInput}
export {dateInput}
export {startPlace};
export {destinationPlace};
export {milesTraveled};