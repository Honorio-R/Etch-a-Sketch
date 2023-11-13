const dPad = document.querySelector('#draw-pad');
let mouseHold = false; // Variable to check if mouse is being hold or pressed

// create 16x16 divs using for loop
for (let i = 0; i < 6400; i++) {
    // Create a new div element
    const newDiv = document.createElement('div');
    
    // Add a class to the div
    newDiv.classList.add('grid-item');

    // Add second class to the div
    newDiv.classList.add('grid-' + i);

    // Append the div to the dPad
    dPad.appendChild(newDiv);

    // If mouse is pressed and hold mouseHold to true
    newDiv.addEventListener('mousedown', function(event) {
        event.preventDefault(); // Prevent default dragging issue
        mouseHold = true;
        this.classList.add('drawed');
    });

    // If mouse button is released mouseHold to false
    newDiv.addEventListener('mouseup', function() {
        mouseHold = false;
    });

    // If mouse is pressed within a div turns mouseHold to true
    newDiv.addEventListener('mouseenter', function() {
        if (mouseHold) {
            this.classList.add('drawed');
        }
    });

    // Removes the hover which reverts to the original style
    // newDiv.addEventListener('mouseout', function() {
    //     newDiv.classList.remove('drawed');
    // });
}
