const dPad = document.querySelector('#draw-pad');
const sliderVal = document.querySelector('#slider-value');
const outputVal = document.querySelector('#output-value');
const eraserBtn = document.querySelector('#eraser-button');
const colorPicker = document.querySelector('#color-picker');

// Variables
let gridVal = 40*40; // Sets the default grid size value
let mouseHold = false; // Variable to check if mouse is being hold or pressed
let mouseErase = false; // Variable to check if user selected eraser
let selectedColor = '#000000';

// Gets color changes
function updateColor() {
    selectedColor = colorPicker.value;
}

// Gets eraser buttons status
eraserBtn.addEventListener('click', function(){
    eraserBtn.style.border = mouseErase ? 'solid 1px #202123' : 'solid 1px #ececf1';
    mouseErase = !mouseErase;
});

// Gets and Change slider value
sliderVal.addEventListener('input', function(){
    outputVal.textContent = this.value + " x " + this.value;
    gridVal = this.value*this.value;
});

function updatePad(){
    dPad.innerHTML = '';
    // Creates 16x16 divs using for loop
    for (let i = 0; i < gridVal; i++) {
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
            if (mouseErase === true){ // condition that checks if eraser is active
                mouseHold = true;
                this.classList.remove('drawed');
                this.style.backgroundColor = '#ffffff';
            } else {
                mouseHold = true;
                this.classList.add('drawed');
                this.style.backgroundColor = selectedColor;
            }
        });

        // If mouse button is released mouseHold to false
        newDiv.addEventListener('mouseup', function() {
            mouseHold = false;
        });

        // If mouse is pressed within a div turns mouseHold to true
        newDiv.addEventListener('mouseenter', function() {
            if (mouseErase === true && mouseHold === true){ // condition that checks if eraser is active
                this.classList.remove('drawed');
                this.style.backgroundColor = '#ffffff';
            } else if (mouseHold === true) {
                this.classList.add('drawed');
                this.style.backgroundColor = selectedColor;
            }
        });

        // Changes the size of each grid to fill the drawing container
        if (gridVal === 100){
            newDiv.style.height = '80px';
            newDiv.style.width = '80px';
        } else if (gridVal === 400){
            newDiv.style.height = '40px';
            newDiv.style.width = '40px';
        } else if (gridVal === 900){
            newDiv.style.height = '26.667px';
            newDiv.style.width = '26.667px';
        } else if (gridVal === 1600){
            newDiv.style.height = '20px';
            newDiv.style.width = '20px';
        } else if (gridVal === 2500){
            newDiv.style.height = '16px';
            newDiv.style.width = '16px';
        } else if (gridVal === 3600){
            newDiv.style.height = '13.3333333px';
            newDiv.style.width = '13.3333333px';
        }
    }
}
updatePad();