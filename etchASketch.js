const container = document.querySelector('#container');

const box = document.createElement('box')

for (i = 0; i < 256; i++) {
    const boxClone = box.cloneNode(true);
    const boxContent = document.createTextNode('\u00A0');
    boxClone.appendChild(boxContent);
    container.appendChild(boxClone);
}

