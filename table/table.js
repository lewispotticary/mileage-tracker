import { startPlace } from "../calculateDistance/calculateDistance.js";
import { destinationPlace } from "../calculateDistance/calculateDistance.js";
import { milesTraveled } from "../calculateDistance/calculateDistance.js";
import { nameInput } from "../calculateDistance/calculateDistance.js";
import { dateInput } from "../calculateDistance/calculateDistance.js";

var tableArray = [];
var arrayLength;
var editButton;

export function addTable(traveledMiles){

    arrayLength = tableArray.length;

    console.log(arrayLength);

    var table = document.getElementById("table");

    // Insert a row at the end of the table
    var newRow = table.insertRow(-1);

    // Insert a cell in the row at index 0
    var nameCell = newRow.insertCell(0);
    nameCell.setAttribute("class", "tableRow" + arrayLength);
    var dateCell = newRow.insertCell(1);
    dateCell.setAttribute("class", "tableRow" + arrayLength);
    var locationsCell = newRow.insertCell(2);
    locationsCell.setAttribute("class", "tableRow" + arrayLength);
    var distanceCell = newRow.insertCell(3);
    distanceCell.setAttribute("class", "tableRow" + arrayLength);
    var editCell = newRow.insertCell(4);

    // Append a text node to the cell

    var nameText = document.createTextNode(nameInput.value);
    nameCell.appendChild(nameText);

    var dateText = document.createTextNode(dateInput.value);
    dateCell.appendChild(dateText);

    var locationText = document.createTextNode(startPlace.name + " to " + destinationPlace.name);
    locationsCell.appendChild(locationText);

    var distanceText = document.createTextNode(milesTraveled);
    distanceCell.appendChild(distanceText);
    
    var editButton = document.createElement("BUTTON");
    editButton.setAttribute("id", "edit-button" + arrayLength);
    editButton.setAttribute("class", "edit-button");
    var editIcon = document.createElement("i");
    editIcon.className = "fa-solid fa-pen-to-square";
    editButton.append(editIcon);
    editCell.appendChild(editButton);

    tableArray.push([nameInput.value, dateInput.value, startPlace.name, destinationPlace.name]);

    editButton = document.getElementsByClassName("edit-button");
    for(var i=0; i<editButton.length; i++){
        editButton[i].addEventListener("click", editTable)
    }
}

function editTable(){
    var rowIndex = this.id.slice(-1);
    console.log("tableRow" + rowIndex);
    for(var x=0; x<4; x++){
        var tableRow = document.getElementsByClassName("tableRow" + rowIndex)[x];
        tableRow.setAttribute('contenteditable', true);
        tableRow.style.borderColor = "blue";
        tableRow.click();
    }
}




