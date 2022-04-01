
const fhotoBlock = document.getElementById('fhotoBlock');
const aboutMe__qubics = document.getElementById('aboutMe__qubics');
var aboutMe__photo1 = document.getElementById('photo1');
var aboutMe__photo2 = document.getElementById('photo2');



//param
var photoWidth = fhotoBlock.offsetWidth;
var photoHeight = fhotoBlock.offsetHeight;
var blockHeight = 2;
var blockWidth = aboutMe__photo1.width;
var color = 'fff'
var mass = [0]
var logic
var random
var count = 0
var sec = 1000
var interv = 10

fhotoBlock.style.position = 'relative'

aboutMe__qubics.style.width = aboutMe__photo1.width + 'px';
aboutMe__qubics.style.height = aboutMe__photo1.height + 'px';
aboutMe__qubics.style.left = aboutMe__photo1.offsetLeft + 'px';
aboutMe__qubics.style.display = 'flex';
aboutMe__qubics.style.flexWrap = 'wrap';


var colons = ((aboutMe__photo1.width)/blockWidth)*((aboutMe__photo1.height)/blockHeight)

for (let i = 0; i < aboutMe__photo1.height; i++) {
    
    if((aboutMe__photo1.height % i) == 2 )
    console.log(i,(aboutMe__photo1.height / i));
}





for (let i = 0; i < colons; i++) {
    span(aboutMe__qubics, 'block', 'background: #ffffff00', 10);
    span((document.getElementsByClassName('block')[i]), 'cicle', `background: #${color}`, 20);
}


for (let j = 0; j < colons; j++) {
    const element = mass[j];
    random = randonFu();
    let i = 0

    for (let i = 0; i < mass.length; i++) {
        const element = mass[i];
        if (random == element) {
            logic = false;
            j--
            break
        } else if (random != element) {
            logic = true;
        }
    }
    if (logic == true) {
        mass.push(random);
    }
    if (mass.length >= colons) {
        break;
    }
}


intervalID = setInterval(() => {
    
    let qubOpacity = document.getElementsByClassName('block')[(mass[count])].children[0];
    qubOpacity.style.transition = sec + 'ms';
    /* qubOpacity.style.height = '0px'; */
    qubOpacity.style.width = '0px';
    /* qubOpacity.style.borderRadius = '50% 50% 50% 50%'; */
    qubOpacity.style.opacity = 1;
    if (count == colons) {
        clearInterval(intervalID)
        console.log('массив полон СТОП ' + mass);
    }
    if (count < (colons - 1)) { count++ }
}, interv);



function randonFu() {
    return Math.round(Math.random() * (colons - 1));
}

function span(elIn, cl, bcg, z) {
    let block = document.createElement('span');
    block.className = cl;
    block.setAttribute('style', `display: block;width:${(blockWidth)}px;height:${blockHeight}px;${bcg};z-index: ${z};`);
    elIn.appendChild(block);
}




