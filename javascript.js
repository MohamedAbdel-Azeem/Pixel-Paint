const gridContainer = document.querySelector('#gridContainer');
const paintButton = document.querySelector('#brush');
const eraseButton = document.querySelector('#eraser');
const clearButton = document.querySelector('#clear');
const colorButton = document.querySelector('#color-input');
let artMode = 'brush';
let colorCode = '#000000';
let paintMode = 'click';
let dimension = 16;
const gridSize = 600;
let allPixels = [];
Main();


function drawGrid(){
    let counter = 0;
    for (let i = 0; i < dimension ; i++){
        const col = document.createElement('div');
        col.setAttribute('id',`row${i}`);
        col.classList.add('col');
        for (let j = 0; j < dimension ; j++){
            let gridPixel = document.createElement('div');
            gridPixel.classList.add('pixel');
            gridPixel.setAttribute('id',counter);
            gridPixel.style.padding = getPadding();
            gridPixel.addEventListener('click',()=>{
                if (artMode == 'brush'){
                    gridPixel.style.backgroundColor = colorCode;
                    gridPixel.style.border = `1px solid ${colorCode}`;
                } else {
                    gridPixel.style.backgroundColor = 'white';
                    gridPixel.style.border = '1px solid grey'
                }
            });
            col.appendChild(gridPixel);
            allPixels.push(gridPixel);
            counter++;
        }
        gridContainer.appendChild(col);
    }
}

function pickColor(){
    
}

function getPadding(){
    switch (dimension){
        case 32 : return '8px';
        case 8 : return '32px';
        case 4 : return '64px';
        case 64 : return '4px';
        default : return '16px';
    }
}


function Main(){
    paintButton.addEventListener('click',()=> {
        artMode = 'brush';
    });
    eraseButton.addEventListener('click',()=>{
        artMode = 'eraser';
    });
    clearButton.addEventListener('click',clearGrid);
    colorButton.addEventListener('input',()=>{
        colorCode = colorButton.value;
    });
    drawGrid();
    pickColor();
}



function clearGrid(){
    for (let i = 0; i < allPixels.length ; i++){
        allPixels[i].style.backgroundColor = 'white';
        allPixels[i].style.border = '1px solid grey';
    }
}