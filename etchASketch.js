const container = document.querySelector('#container');

for (i = 0; i < 256; i++) {
    const box = document.createElement('box')
    const boxContent = document.createTextNode('\u00A0')

    box.appendChild(boxContent);
    container.appendChild(box);

    box.addEventListener('mouseover', (e) => {
        e.target.style.background = 'black';
    });
}

