// import the data from data.js
// Use const so it is not altered
const tableData = data;

// Reference the HTML table using d3
// d3 = JS library for visualizations
var tbody = d3.select("tbody");

function buildTable(data) {
    // Clear out any existing/filtered data 
  tbody.html("");
  }

// Loop through each object in the data
// Append a row and cells for each value in the row
  data.forEach((dataRow) => {
// jS find tbody tag within HTML and add a table row- "tr" to body 
    let row = tbody.append("tr");
// Loop through each field to make table data wrapped in "td" tags
// jS to reference one object from array of UFO sightings
// Each value as a table cell (td)
// (val) = we want one object into their own row of data
    Object.values(dataRow).forEach((val) => {
    });
// Append each object value to a cell in a table
      let cell = row.append("td");
// Holds only each value from the object, not the key
      cell.text(val);
      }
    );
  });
}