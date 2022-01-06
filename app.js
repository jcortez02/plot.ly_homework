function buildMetadata(sample) {
    d3.json("samples.json").then(function(data) {
    console.log(data);





    
});

    // Filter the data for the object with the correct sample number
    
    // Use d3 to select the panel with id of `#sample-metadata`
    // Clear existing metadata
    // Use `Object.entries` to add each key and value pair to the panel
    // Hint: Inside the loop, you will need to use d3 to append new
    // tags for each key-value in the metadata.
    // BONUS: Build the Gauge Chart
  
}
function buildCharts(sample) {
 
    // Build a Bubble Chart
    // Build a Bar Chart
    
  };
function init() {
  // Save a reference to the select element
  // Use the list titled names to populate the select options
    // Build initial plots
}
function optionChanged(newSample) {
  // Rebuild plots and metadata each time the option is changed
}
// Initialize the dashboard
init();