var startAutocomplete;
var destinationAutocomplete;

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
    
        google.maps.event.addListener(startAutocomplete, 'place_changed', onStartChange);
        google.maps.event.addListener(destinationAutocomplete, 'place_changed', onDestinationChange);
}

function onStartChange() {
    var startPlace = startAutocomplete.getPlace();
    console.log(startPlace.place_id);
};

function onDestinationChange() {
    var destinationPlace = destinationAutocomplete.getPlace();
    console.log(destinationPlace.place_id);
};
