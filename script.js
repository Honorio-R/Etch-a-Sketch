const container = document.querySelector('#container');

// create 16x16 divs using for loop
for (let i = 0; i < 256; i++) {
    // Create a new div element
    var newDiv = document.createElement('div');

    // Add a class to the div
    newDiv.classList.add('grid-item');

    // Add second class to the div
    newDiv.classList.add('grid-' + i);

    // Append the div to the body
    container.appendChild(newDiv);
}
            
