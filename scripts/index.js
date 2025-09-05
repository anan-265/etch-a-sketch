let containerDiv = document.querySelector('.container');
for (let i = 1; i <=4; i++) {
    for (let j = 1; j <=4; j++) {
        let boxDiv = document.createElement('div');
        boxDiv.classList.add('box');
        boxDiv.style.width = (960 / 4) + 'px';
        boxDiv.style.height = (960 / 4) + 'px';
        boxDiv.addEventListener('mouseover', function() {
            boxDiv.classList.add('box-hovered');
        })
        boxDiv.addEventListener('mouseout', function() {
            setTimeout(function() {
                boxDiv.classList.remove('box-hovered');
            }, 250);
        })
        containerDiv.appendChild(boxDiv);
    }
}