import { startAutocomplete } from "../placeAutocomplete/placeAutocomplete.js";
import { destinationAutocomplete } from "../placeAutocomplete/placeAutocomplete.js";
import { addTable } from "../table/table.js";

var submitButton = document.getElementById("submitButton");
submitButton.addEventListener("click", calculateDistance);

var startPlace;
var destinationPlace;

function calculateDistance(){

    startPlace = startAutocomplete.getPlace();

    destinationPlace = destinationAutocomplete.getPlace();

    var service = new google.maps.DistanceMatrixService();
    service.getDistanceMatrix(
        {
            origins: [startPlace.formatted_address],
            destinations: [destinationPlace.formatted_address],
            travelMode: 'DRIVING',
            unitSystem: google.maps.UnitSystem.IMPERIAL,
            
        }, callback);
        
        function callback(response, status) {
          console.log(response);
          console.log(status);
        }

      addTable();
}

export {startPlace};
export {destinationPlace};