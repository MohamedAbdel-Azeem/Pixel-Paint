const gridContainer = document.querySelector('#gridContainer');
const paintButton = document.querySelector('#brush');
const eraseButton = document.querySelector('#eraser');
const clearButton = document.querySelector('#clear');
const colorButton = document.querySelector('#color-picker');
const color_picker_wrapper = document.getElementById("color-picker-wrapper");
const rainbowButton = document.querySelector('#rainbow');
let artMode = 'brush';
let colorCode = '#000000';
let paintMode = 'click';
const dimension = 16;
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
            gridPixel.style.padding = '16px';
            gridPixel.addEventListener('mousemove',(event)=>{
                handleDrawDrag(event,gridPixel)
            });
            gridPixel.addEventListener('click',(event)=>{
                handleDrawClick(gridPixel)
            });
            col.appendChild(gridPixel);
            allPixels.push(gridPixel);
            counter++;
        }
        gridContainer.appendChild(col);
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
    colorButton.onchange = function() {
        color_picker_wrapper.style.backgroundColor = colorButton.value;    
    }
    color_picker_wrapper.style.backgroundColor = colorButton.value;
    rainbowButton.addEventListener('click',()=> {
        artMode = 'rainbow';
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


function randomColorGenerator(){
    /* -> Completely Random but Ugly Colors
    let red = parseInt(Math.random()*256);
    let green = parseInt(Math.random()*256);
    let blue = parseInt(Math.random()*256);
    return `rgb(${red},${green},${blue})`;
    */
    let randomColors = ['#ff0000',
        '#ff7300',
        '#fffb00',
        '#48ff00',
        '#00ffd5',
        '#002bff',
        '#7a00ff',
        '#ff00c8',
        '#ff0000'];
    let index = parseInt(Math.random()*randomColors.length);
    return randomColors[index];
}

function handleDrawDrag(event, gridPixel){
    if (event.buttons === 1){
        if (artMode == 'brush'){
            gridPixel.style.backgroundColor = colorCode;
            gridPixel.style.border = `1px solid ${colorCode}`;
        } else if (artMode == 'rainbow') {
            const randomColor = randomColorGenerator();
            gridPixel.style.backgroundColor = randomColor;
            gridPixel.style.border = `1px solid ${randomColor}`;
        } 
        else {
            gridPixel.style.backgroundColor = 'white';
            gridPixel.style.border = '1px solid grey'
        }
    }
}

function handleDrawClick(gridPixel){
    if (artMode == 'brush'){
        gridPixel.style.backgroundColor = colorCode;
        gridPixel.style.border = `1px solid ${colorCode}`;
    } else if (artMode == 'rainbow') {
        const randomColor = randomColorGenerator();
        gridPixel.style.backgroundColor = randomColor;
        gridPixel.style.border = `1px solid ${randomColor}`;
    } 
    else {
        gridPixel.style.backgroundColor = 'white';
        gridPixel.style.border = '1px solid grey'
    }
}


