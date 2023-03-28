const container = document.querySelector('#container');

for (i = 0; i < 256; i++) {
    const box = document.createElement('box')
    const boxContent = document.createTextNode('\u00A0')
    
    box.appendChild(boxContent);
    container.appendChild(box);


    box.addEventListener('mouseover', (e) => {
        e.target.style.background = 'black';
    })
};

function clearSketchpad() {
    container.innerHTML = '';
};

function newSketchpad(n) {   

    for (i = 0; i < n*n; i++) {
        const box = document.createElement('box')
        const boxContent = document.createTextNode('\u00A0')

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
