const gridContainer = document.querySelector('#gridContainer');

function drawGrid(dimension){
    let counter = 0;
    for (let i = 0; i < dimension ; i++){
        const col = document.createElement('div');
        col.setAttribute('id',`row${i}`);
        col.classList.add('col');
        for (let j = 0; j < dimension ; j++){
            let gridPixel = document.createElement('div');
            gridPixel.classList.add('pixel');
            gridPixel.setAttribute('id',counter);
            col.appendChild(gridPixel);
            counter++;
        }
        gridContainer.appendChild(col);
    }
}


drawGrid(16);