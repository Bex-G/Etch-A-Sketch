const container = document.querySelector('#container');

function draw(box) {
    box.addEventListener('mouseover', (e) => {
        e.target.style.background = 'black';
    })
};

//Creates default 16x16 sketchpad that draws in black.

for (i = 0; i < 16 * 16; i++) {
    const box = document.createElement('box')
    const boxContent = document.createTextNode('\u00A0')
    
    box.style.height = '6.25%';
    box.style.width = '6.25%';
    
    box.appendChild(boxContent);
    container.appendChild(box);

    draw(box);
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

function findPixelPercentage(n) {
    let pixelsPerRow = 100 / n;
    return formatAsPercentage(pixelsPerRow);
}

function newSketchpad(n) {   

    for (i = 0; i < n*n; i++) {
        const box = document.createElement('box')
        const boxContent = document.createTextNode('\u00A0')
        
        box.style.height = findPixelPercentage(n)
        box.style.width = findPixelPercentage(n)

        box.appendChild(boxContent);
        container.appendChild(box);

        draw(box);
    }
};

const newSketchpadButton = document.querySelector('#newSketchpadButton');

newSketchpadButton.addEventListener('click', () => {

    clearSketchpad();

    let n = parseInt(prompt("How many pixels would you like on either side?"));
    
    if (n > 100 || n < 16) {
        let n = parseInt(prompt("Sorry, please choose a number between 16 and 100."));
        newSketchpad(n);
    }
    newSketchpad(n);
    }
);

//The following functions enable the user to draw on a new sketchpad in randomly generated colors.

function getRandomColor() {

    let maxVal = 0xFFFFFF;
    let randomNumber = Math.random() * maxVal;
    randomNumber = Math.floor(randomNumber);
    randomNumber = randomNumber.toString(16);
    let randomColor = randomNumber.padStart(6, 0);
    return `#${randomColor.toUpperCase()}`;
};

function drawColor(box) {
    box.addEventListener('mouseover', (e) => {
        e.target.style.background = getRandomColor();
    })
};

function colorSketchpad(n) {   

    for (i = 0; i < n*n; i++) {
        const box = document.createElement('box')
        const boxContent = document.createTextNode('\u00A0')
        
        box.style.height = findPixelPercentage(n)
        box.style.width = findPixelPercentage(n)

        box.appendChild(boxContent);
        container.appendChild(box);

        drawColor(box);
    }
};

const colorButton = document.querySelector('#colorButton');

colorButton.addEventListener('click', () => {

    clearSketchpad();

    let n = parseInt(prompt("How many pixels would you like on either side?"));
    
    if (n > 100 || n < 16) {
        let n = parseInt(prompt("Sorry, please choose a number between 16 and 100."));
        colorSketchpad(n);
    }
    colorSketchpad(n);
    }
);
