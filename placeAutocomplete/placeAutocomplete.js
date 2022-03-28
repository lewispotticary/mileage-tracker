var startAutocomplete;
var destinationAutocomplete;

google.maps.event.addDomListener(window, 'load', initAutocomplete);

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

export {startAutocomplete};
export {destinationAutocomplete};