import { startPlace } from "../calculateDistance/calculateDistance.js";
import { destinationPlace } from "../calculateDistance/calculateDistance.js";
import { traveledMiles } from "../calculateDistance/calculateDistance.js";

export function addTable(traveledMiles){

    console.log(traveledMiles);

    var table = document.getElementById("table");

    // Insert a row at the end of the table
    var newRow = table.insertRow(-1);

    // Insert a cell in the row at index 0
    var nameCell = newRow.insertCell(0);
    var dateCell = newRow.insertCell(1);
    var locationsCell = newRow.insertCell(2);
    var distanceCell = newRow.insertCell(3);

    // Append a text node to the cell

    var nameText = document.createTextNode(document.getElementById("name-input").value);
    nameCell.appendChild(nameText);
    var dateText = document.createTextNode(document.getElementById("date-input").value);
    dateCell.appendChild(dateText);
    var locationText = document.createTextNode(startPlace.name + " to " + destinationPlace.name);
    locationsCell.appendChild(locationText);
    var distanceText = document.createTextNode(traveledMiles);
    distanceCell.appendChild(distanceText);
}
