import { startAutocomplete } from "../placeAutocomplete/placeAutocomplete.js";
import { destinationAutocomplete } from "../placeAutocomplete/placeAutocomplete.js";

var submitButton = document.getElementById("submitButton");
submitButton.addEventListener("click", calculateDistance);

export function calculateDistance(){

    var startPlace = startAutocomplete.getPlace();
    console.log(startPlace);

    var destinationPlace = destinationAutocomplete.getPlace();
    console.log(destinationPlace.place_id);

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
}