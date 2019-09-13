
//* Using the UFO dataset provided in the form of an array of JavaScript objects, 
//write code that appends a table to your web page 
// and then adds new rows of data for each UFO sighting.

//* Make sure you have a column for `date/time`, `city`, `state`, `country`, 
//`shape`, and `comment` at the very least.

//* Use a date form in your HTML document and write JavaScript code that will 
// listen for events and search through the `date/time` column to find rows 
//that match user input.

// from data.js
var tableData = data;

// Reference to the table body
var tbody = d3.select("tbody");

// Console.log the data from the data file
console.log(tableData);

// Loop through 'data' and console.log each object
data.forEach(function(sighting) {
    console.log(sighting);
    var row = tbody.append("tr");
    Object.entries(sighting).forEach(function([key, value]) {
        console.log(key, value);
        // Append a cell to the row
        var cell = row.append("td");
        cell.text(value);
    });
});

// Select the button used for search
var button = d3.select("#filter-btn");

button.on("click", function() {

    // // Select the input element and get the raw HTML
    d3.select(".summary").html("");

    //Select the input element and create a variable
    var inputElement = d3.select("#datetime");
    // Get the value property of the input element and create a variable
    var inputValue = inputElement.property("value");

    console.log(inputValue);
    console.log(tableData);

    // Filter data based on user's search or "inputValue"
    var filteredData = tableData.filter(tableData => tableData.datetime === inputValue);
    console.log(filteredData);

    // Filter results and list as their own rows beneath the original info table
    filteredData.forEach((dateData) => {
        var row = tbody.append("tr");
        Object.entries(dateData).forEach(([key, value]) => {
            var cell = tbody.append("td");
            cell.text(value);
        });
    });
});