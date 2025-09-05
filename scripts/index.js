let containerDiv = document.querySelector('.container');
let setGridButton = document.getElementById('set-size');
let resetOpacityButton = document.getElementById('reset-opacity');

let size = 0;
let sizeRoot = 4;
setGridButton.addEventListener('click', function() {
    let gridSize = prompt("Enter grid size (max 100):");
    if (gridSize > 0 && gridSize <= 100) {
        size = gridSize;
    } else {
        alert("Invalid size. Please enter a number between 1 and 100.");
    }
    sizeRoot = Math.sqrt(size);
    containerDiv.innerHTML = '';
    makeGrid(sizeRoot);
})

function makeGrid(sizeRoot) {
for (let i = 1; i <=sizeRoot; i++) {
    for (let j = 1; j <=sizeRoot; j++) {
        let boxDiv = document.createElement('div');
        boxDiv.classList.add('box');
        boxDiv.style.width = (480 / sizeRoot) + 'px';
        boxDiv.style.height = (480 / sizeRoot) + 'px';
        let darkOpacity = 0.1;
        resetOpacityButton.addEventListener('click', function() {
        darkOpacity = 0.1;
    }
    )
        boxDiv.addEventListener('mouseover', function() {
            let randRed = Math.floor(Math.random() * 256);
            let randGreen = Math.floor(Math.random() * 256);
            let randBlue = Math.floor(Math.random() * 256);
            boxDiv.style.backgroundColor = `rgb(${randRed}, ${randGreen}, ${randBlue}, ${darkOpacity})`;
            console.log(i, j, randRed, randGreen, randBlue, darkOpacity);
            if (darkOpacity < 1) {
                darkOpacity += 0.1;
            }
        })
        boxDiv.addEventListener('mouseout', function() {
            setTimeout(function() {
                boxDiv.style.backgroundColor = 'white';
            }, 250);
        })
        containerDiv.appendChild(boxDiv);
    }
}
}
makeGrid(sizeRoot);