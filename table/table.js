import { startPlace } from "../calculateDistance/calculateDistance.js";
import { destinationPlace } from "../calculateDistance/calculateDistance.js";
import { milesTraveled } from "../calculateDistance/calculateDistance.js";
import { nameInput } from "../calculateDistance/calculateDistance.js";
import { dateInput } from "../calculateDistance/calculateDistance.js";

var tableArray = [];
var arrayLength;
var editButton;
var confirmButton;
var deleteButton;

export function addTable(){

    arrayLength = tableArray.length;

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
    var deleteCell = newRow.insertCell(5);

    // Append a text node to the cell

    var nameText = document.createTextNode(nameInput.value);
    nameCell.appendChild(nameText);

    var dateText = document.createTextNode(dateInput.value);
    dateCell.appendChild(dateText);

    var locationText = document.createTextNode(startPlace.name + " to " + destinationPlace.name);
    locationsCell.appendChild(locationText);

    var distanceText = document.createTextNode(milesTraveled);
    distanceCell.appendChild(distanceText);

    //Create edit button
    
    editButton = document.createElement("BUTTON");
    editButton.setAttribute("id", "edit-button" + arrayLength);
    editButton.setAttribute("class", "edit-button");
    editButton.title = "Edit";
    var editIcon = document.createElement("i");
    editIcon.className = "fa-solid fa-pen-to-square";
    editButton.append(editIcon);
    editCell.appendChild(editButton);

    //Create confirm button

    confirmButton = document.createElement("BUTTON");
    confirmButton.setAttribute("id", "confirm-button" + arrayLength);
    confirmButton.setAttribute("class", "confirm-button");
    confirmButton.title = "Confirm Changes";
    var confrimIcon = document.createElement("i");
    confrimIcon.className = "fa-solid fa-check";
    confirmButton.append(confrimIcon);
    editCell.append(confirmButton);
    confirmButton.style.display = "none";

    //Create delete button

    deleteButton = document.createElement("BUTTON");
    deleteButton.setAttribute("id", "delete-button" + arrayLength);
    deleteButton.setAttribute("class", "delete-button");
    deleteButton.title = "Delete";
    var deleteIcon = document.createElement("i")
    deleteIcon.className = "fa-solid fa-trash";
    deleteButton.append(deleteIcon);
    deleteCell.append(deleteButton);

    tableArray.push([nameInput.value, dateInput.value, startPlace.name, destinationPlace.name, milesTraveled]);

    deleteButton = document.getElementsByClassName("delete-button");

    for(var x=0; x<deleteButton.length; x++){
        deleteButton[x].addEventListener("click", deleteRecord)
    }

    editButton = document.getElementsByClassName("edit-button");

    for(var i=0; i<editButton.length; i++){
        editButton[i].addEventListener("click", editTable)
    }
}

function editTable(){
    var rowIndex = this.id.slice(-1);
    console.log("tableRow" + rowIndex);
    for(var i=0; i<4; i++){
        var tableRow = document.getElementsByClassName("tableRow" + rowIndex)[i];
        tableRow.setAttribute('contenteditable', true);
        tableRow.style.border = "2px solid #ACCEF7";
    }

    confirmButton = document.getElementsByClassName("confirm-button");

    editButton[rowIndex].style.display = "none";
    confirmButton[rowIndex].style.display = "block";

    for(var y=0; y<confirmButton.length; y++){
        confirmButton[y].addEventListener("click", confirmChanges)
    }
}

function confirmChanges(){
    var rowIndex = this.id.slice(-1);
    for(var i=0; i<4; i++){
        var tableRow = document.getElementsByClassName("tableRow" + rowIndex)[i];
        tableRow.setAttribute('contenteditable', false);
        tableRow.style.border = "1px solid rgb(221, 221, 221)";
        tableArray[rowIndex][i] = tableRow.innerHTML;
    }
    editButton[rowIndex].style.display = "block";
    confirmButton[rowIndex].style.display = "none";
}

function deleteRecord(){
    var rowIndex = this.id.slice(-1);
    tableArray.splice(rowIndex,1);
    updateTable();
}

function updateTable(){
    for(var i=tableArray.length + 1; i>0; i--){
        document.getElementById("table").deleteRow(i);  
    }
    
    for(var x=0; x<tableArray.length; x++){ 
            
            // Insert a row at the end of the table
            var newRow = table.insertRow(-1);

            // Insert a cell in the row at index 0
            var nameCell = newRow.insertCell(0);
            nameCell.setAttribute("class", "tableRow" + x);
            var dateCell = newRow.insertCell(1);
            dateCell.setAttribute("class", "tableRow" + x);
            var locationsCell = newRow.insertCell(2);
            locationsCell.setAttribute("class", "tableRow" + x);
            var distanceCell = newRow.insertCell(3);
            distanceCell.setAttribute("class", "tableRow" + x);
            var editCell = newRow.insertCell(4);
            var deleteCell = newRow.insertCell(5);

            var nameText = document.createTextNode(tableArray[x][0]);
            nameCell.appendChild(nameText);

            var dateText = document.createTextNode(tableArray[x][1]);
            dateCell.appendChild(dateText);

            var locationText = document.createTextNode(tableArray[x][2] + " to " + tableArray[x][3]);
            locationsCell.appendChild(locationText);

            var distanceText = document.createTextNode(tableArray[x][4]);
            distanceCell.appendChild(distanceText);

            //Create edit button
    
            editButton = document.createElement("BUTTON");
            editButton.setAttribute("id", "edit-button" + x);
            editButton.setAttribute("class", "edit-button");
            editButton.title = "Edit";
            var editIcon = document.createElement("i");
            editIcon.className = "fa-solid fa-pen-to-square";
            editButton.append(editIcon);
            editCell.appendChild(editButton);

            //Create confirm button

            confirmButton = document.createElement("BUTTON");
            confirmButton.setAttribute("id", "confirm-button" + x);
            confirmButton.setAttribute("class", "confirm-button");
            confirmButton.title = "Confirm Changes";
            var confrimIcon = document.createElement("i");
            confrimIcon.className = "fa-solid fa-check";
            confirmButton.append(confrimIcon);
            editCell.append(confirmButton);
            confirmButton.style.display = "none";

            //Create delete button

            deleteButton = document.createElement("BUTTON");
            deleteButton.setAttribute("id", "delete-button" + x);
            deleteButton.setAttribute("class", "delete-button");
            deleteButton.title = "Delete";
            var deleteIcon = document.createElement("i")
            deleteIcon.className = "fa-solid fa-trash";
            deleteButton.append(deleteIcon);
            deleteCell.append(deleteButton);

            deleteButton = document.getElementsByClassName("delete-button");

            for(var y=0; y<deleteButton.length; y++){
                deleteButton[y].addEventListener("click", deleteRecord)
            }

            editButton = document.getElementsByClassName("edit-button");

            for(var z=0; z<editButton.length; z++){
                editButton[z].addEventListener("click", editTable)
            }      
    }   
}