const container = document.querySelector('#container');

for (i = 0; i < 16 * 16; i++) {
    const box = document.createElement('box')
    const boxContent = document.createTextNode('\u00A0')
    
    box.style.flexBasis = '6.25%';
    
    box.appendChild(boxContent);
    container.appendChild(box);


    box.addEventListener('mouseover', (e) => {
        e.target.style.background = 'black';
    })
};

function clearSketchpad() {
    container.innerHTML = '';
};

function formatAsPercentage(n) {
    return new Intl.NumberFormat('defult', {
        style: 'percent',
        minimumFractionDigits: 1,
        maximumFractionDigits: 2
    }).format(n / 100);
}

function findFlexBasis(n) {
    let pixelsPerRow = 100 / n;
    return formatAsPercentage(pixelsPerRow);
}

function newSketchpad(n) {   

    for (i = 0; i < n*n; i++) {
        const box = document.createElement('box')
        const boxContent = document.createTextNode('\u00A0')
        
        box.style.flexBasis = findFlexBasis(n);

        box.appendChild(boxContent);
        container.appendChild(box);

        box.addEventListener('mouseover', (e) => {
            e.target.style.background = 'black';
        })
    }
};

const button = document.querySelector('button');

button.addEventListener('click', () => {

    clearSketchpad();

    let n = parseInt(prompt("How many pixels would you like on either side?"));
    
    if (n > 100) {
        let n = parseInt(prompt("Sorry, please choose a number that is less than 100."));
        newSketchpad(n);
    }
    newSketchpad(n);
});
