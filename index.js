window.onload = function(){
    const rotateFrontBtn = document.querySelector('#rotate-front');
    const rotateBackBtn = document.querySelector('#rotate-back');

    autoWriten()
    console.log('ready');
    rotateFrontBtn.addEventListener('click', rotateFront)
    rotateBackBtn.addEventListener('click', rotateBack)
}



function rotateFront(e) {
    e.target.parentElement.classList.add('rotateFront')
    e.target.parentElement.nextElementSibling.classList.add('rotateBack')
}
function rotateBack(e) {
    console.log('click en el rotate back');
    e.target.parentElement.classList.remove('rotateBack')
    e.target.parentElement.previousElementSibling.classList.remove('rotateFront')  
}

function autoWriten (){
        const text = ["Hola marcelo", "Hola karen", "Hola vanessa", "Fede esta escribiendo aqui"];
        let h2 = document.querySelector('h2');

        console.log(h2);
        let textIndex = 0;
        let index = 0;

        function writeText() {
            if (index > text[textIndex].length) {
                h2.textContent = ""
                textIndex++;
                index = 0;
            }
            if(textIndex == text.length){
                textIndex = 0;
            }
            console.log(index);
            h2.textContent = text[textIndex].slice(0, index);
            index++;
        }

        setInterval(writeText, 120);
}