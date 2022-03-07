var startAutocomplete;
var destinationAutocomplete;
var url = 'https://maps.googleapis.com/maps/api/distancematrix/json?destinations=place_id:ChIJ1cVMNX5U2UcR1QhrxdrHFSU&origins=place_id:ChIJP26lu_ZS2UcRfvkygqmsXXI&units=imperial&key=AIzaSyA6tcFVFXZfqmhy5vAAs5hPq-Uin2nfWPc'
var submitButton = document.getElementById("submitButton");


function initAutocomplete(){
    startAutocomplete = new google.maps.places.Autocomplete(
        document.getElementById("start-autocomplete"),
        {
            componentRestrictions: {'country' : ['UK']},
        });

    destinationAutocomplete = new google.maps.places.Autocomplete(
        document.getElementById("destination-autocomplete"),
        {
            componentRestrictions: {'country' : ['UK']},
        });

}

function calculateDistance(){

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

submitButton.addEventListener("click", calculateDistance);
