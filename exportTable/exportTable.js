import { tableArray } from "../table/table.js";

export function exportTable(){
    console.log("Export Table");

    var finalTableArray = tableArray.slice();

    finalTableArray.unshift(["Client Name", "Date", "Start and Destination Location", "Miles Traveled"]);
    finalTableArray.push(["", "", "",document.getElementById("totalCell").innerText]);

    let csvContent = "data:text/csv;charset=utf-8,";

    finalTableArray.forEach(function(rowArray) {
        let row = rowArray.join(",");
        csvContent += row + "\r\n";
    });

    var encodedUri = encodeURI(csvContent);
    window.open(encodedUri);
}