const gridContainer = document.querySelector('#gridContainer');
const paintButton = document.querySelector('#brush');
const eraseButton = document.querySelector('#eraser');
let artMode = 'brush';
let colorCode = '#000000';
let paintMode = 'click';

Main();


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
            gridPixel.addEventListener('click',()=>{
                if (artMode == 'brush'){
                    gridPixel.style.backgroundColor = colorCode;
                } else {
                    gridPixel.style.backgroundColor = 'white';
                }
            });
            col.appendChild(gridPixel);
            counter++;
        }
        gridContainer.appendChild(col);
    }
}

function pickColor(){

}



function Main(){
    paintButton.addEventListener('click',()=> {
        artMode = 'brush';
    });
    eraseButton.addEventListener('click',()=>{
        artMode = 'eraser';
    });
    drawGrid(16);
    pickColor();
}



