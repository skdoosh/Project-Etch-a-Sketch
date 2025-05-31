function generateGrid(n){
    const biggestContainer = document.querySelector('.container');
    biggestContainer.replaceChildren();
    for(let i = 0; i < n; i++){
        const row = document.createElement('div');
        row.classList.add('row');
        for(let j = 0; j < n; j++){
            const cell = document.createElement('div');
            cell.classList.add('cell');
            row.appendChild(cell);
        }
        biggestContainer.appendChild(row);
    }
    const cells = document.querySelectorAll('.cell');

    cells.forEach((element)=>{
        element.addEventListener('mouseover',(e)=>{
            e.target.classList.add('hover');
        })
    })
}

generateGrid(16);

const changeGrid = document.querySelector('.changeGrid');
changeGrid.addEventListener('click', () => {
    let side;
    while(!side && !(typeof side === 'number')){
        side = prompt('Enter side length of grid less than 100 (number of boxes): ');
    }
    generateGrid(side);
});

const box = document.querySelector('.container');
box.addEventListener('hover',(e)=>{
    e.target.classList.add('hover');
});

