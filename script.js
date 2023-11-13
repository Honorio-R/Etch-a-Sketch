const container = document.querySelector('#container');

// create 16x16 divs using for loop
for (let i = 0; i < 256; i++) {
    // Create a new div element
    var newDiv = document.createElement('div');
    
    // Add a class to the div
    newDiv.classList.add('grid-item');

    // Add second class to the div
    newDiv.classList.add('grid-' + i);

    // Append the div to the container
    container.appendChild(newDiv);

    // Attach event listeners for hover effect inside the loop
    newDiv.addEventListener('mouseover', function() {
        this.classList.add('hovered');
    });


    // Removes the hover which reverts to the original style
    // newDiv.addEventListener('mouseout', function() {
    //     newDiv.classList.remove('hovered');
    // });
}
