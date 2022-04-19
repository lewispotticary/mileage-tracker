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

    console.log("AddTable")

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

    tableTotal();

    tableArray.push([nameInput.value, dateInput.value, startPlace.name + " to " + destinationPlace.name, milesTraveled]);

    calculateTotal();

    console.log(tableArray.length);

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
    for(var i=0; i<=3; i++){
        var tableRow = document.getElementsByClassName("tableRow" + rowIndex)[i];
        tableRow.setAttribute('contenteditable', false);
        tableRow.style.border = "1px solid rgb(221, 221, 221)";
        tableArray[rowIndex][i] = tableRow.innerHTML;
        if(i === 3){
            tableArray[rowIndex][i] = parseInt(tableRow.innerHTML, 10);
        }
        else{
            tableArray[rowIndex][i] = tableRow.innerHTML; 
        }
    }
    editButton[rowIndex].style.display = "block";
    confirmButton[rowIndex].style.display = "none";

    console.log(tableArray);

    calculateTotal()
}

function deleteRecord(){
    var rowIndex = this.id.slice(-1);
    tableArray.splice(rowIndex,1);
    updateTable();
    tableTotal();
    calculateTotal();
}

function updateTable(){
    console.log("Update Table");
    console.log(document.getElementById("table"));
    for(var i=tableArray.length + 2; i>0; i--){
        document.getElementById("table").deleteRow(i);  
    }
    
    for(var x=0; x<tableArray.length; x++){ 

        console.log(tableArray);
            
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

            var locationText = document.createTextNode(tableArray[x][2]);
            locationsCell.appendChild(locationText);

            var distanceText = document.createTextNode(tableArray[x][3]);
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

//Append row to bottom of table that calculates total miles and allows to export table as csv.

function tableTotal(){
    console.log("table total");
    if(document.getElementById("bottomRow") === null){
        var bottomRow = table.insertRow(table.rows.length);
        bottomRow.setAttribute("id", "bottomRow");
        var bottomCell0 = bottomRow.insertCell(0);
        var bottomCell1 = bottomRow.insertCell(1);
        var bottomCell2 = bottomRow.insertCell(2);
        var bottomCell3 = bottomRow.insertCell(3);
        bottomCell3.setAttribute("id","totalCell");
        var totalText = document.createTextNode("Total:");
        bottomCell3.appendChild(totalText);
    }
    else{
        document.getElementById("table").deleteRow(tableArray.length + 1);
        var bottomRow = table.insertRow(table.rows.length);
        bottomRow.setAttribute("id", "bottomRow");
        var bottomCell0 = bottomRow.insertCell(0);
        var bottomCell1 = bottomRow.insertCell(1);
        var bottomCell2 = bottomRow.insertCell(2);
        var bottomCell3 = bottomRow.insertCell(3);
        bottomCell3.setAttribute("id","totalCell");
        var totalText = document.createTextNode("Total:");
        bottomCell3.appendChild(totalText);
    }

    if(table.rows.length === 2){
        console.log("if table row length");
        document.getElementById("table").deleteRow(tableArray.length + 1);
    }

}

function calculateTotal(){
    var totalMiles = 0;

    for(var i=0; i <= tableArray.length - 1; i++){
        console.log("----------------------------------");
        console.log("Array Length: " + tableArray.length);
        console.log("Counter: " + i); 
        console.log("Table rows" + table.rows.length);
        var milesTraveled = parseInt(document.getElementsByClassName("tableRow" + i)[3].innerHTML, 10);
        console.log("Miles traveled:" + milesTraveled);
        var totalMiles = totalMiles + parseInt(milesTraveled, 10);
        document.getElementById("totalCell").innerHTML = "Total: " + totalMiles;
    }
}