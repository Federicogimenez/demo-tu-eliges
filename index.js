window.onload = function(){
    const rotateFrontBtn = document.querySelector('#rotate-front');
    const rotateBackBtn = document.querySelector('#rotate-back');


    const brand_1_a = document.querySelector('#brand-1-a');
    const brand_1_b = document.querySelector('#brand-1-b');
 
    const brand_2_a = document.querySelector('#brand-2-a');
    const brand_2_b = document.querySelector('#brand-2-b');
 
    // const brand_3_a = document.querySelector('#brand-3-a');
    // const brand_3_b = document.querySelector('#brand-3-b');
 
    // const brand_4_a = document.querySelector('#brand-4-a');
    // const brand_4_b = document.querySelector('#brand-4-b');
 
    // const brand_5_a = document.querySelector('#brand-5-a');
    // const brand_5_b = document.querySelector('#brand-5-b');
 
    // const brand_6_a = document.querySelector('#brand-6-a');
    // const brand_6_b = document.querySelector('#brand-6-b');
 
    // const brand_7_a = document.querySelector('#brand-7-a');
    // const brand_7_b = document.querySelector('#brand-7-b');
 
    // const brand_8_a = document.querySelector('#brand-8-a');
    // const brand_8_b = document.querySelector('#brand-8-b');
 
    // const brand_9_a = document.querySelector('#brand-9-a');
    // const brand_9_b = document.querySelector('#brand-9-b');
 
    // const brand_10_a = document.querySelector('#brand-10-a');
    // const brand_10_b = document.querySelector('#brand-10-b');

    // const brand_11_a = document.querySelector('#brand-11-a');
    // const brand_11_b = document.querySelector('#brand-11-b');
 
    // const brand_12_a = document.querySelector('#brand-12-a');
    // const brand_12_b = document.querySelector('#brand-12-b');

    imageSwipper(brand_1_a, brand_1_b, 0);
 
    imageSwipper(brand_2_a, brand_2_b, 4);
 
    // imageSwipper(brand_3_a, brand_3_b, 2);
 
    // imageSwipper(brand_4_a, brand_4_b, 3);
 
    // imageSwipper(brand_5_a, brand_5_b, 1);
 
    // imageSwipper(brand_6_a, brand_6_b, 5);
 
    // imageSwipper(brand_7_a, brand_7_b, 6);
 
    // imageSwipper(brand_8_a, brand_8_b, 7);
 
    // imageSwipper(brand_9_a, brand_9_b, 8);
 
    // imageSwipper(brand_10_a, brand_10_b, 9);
 
    // imageSwipper(brand_11_a, brand_11_b, 10); 
    // imageSwipper(brand_12_a, brand_12_b, 10); 

    autoWriten();
    console.log('ready');
    rotateFrontBtn.addEventListener('click', rotateFront)
    rotateBackBtn.addEventListener('click', rotateBack)
}


// cards
function rotateFront(e) {
    e.target.parentElement.classList.add('rotateFront')
    e.target.parentElement.nextElementSibling.classList.add('rotateBack')
}
function rotateBack(e) {
    e.target.parentElement.classList.remove('rotateBack')
    e.target.parentElement.previousElementSibling.classList.remove('rotateFront')  
}

// autowrite

function autoWriten (){
        const text = ["Hola Marcelo", "Hola Karen", "Hola Viviana", "Fede esta escribiendo aqui"];
        let h2 = document.querySelector('h2');

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
            h2.textContent = text[textIndex].slice(0, index);
            index++;
        }

        setInterval(writeText, 120);
}


// brands
const brands = [
    'https://st.depositphotos.com/38540216/59631/v/450/depositphotos_596311672-stock-illustration-puma-logo-black-symbol-with.jpg',
    'https://i.pinimg.com/originals/96/a8/73/96a873907d6fa6b30c8c87fbbb291ecf.jpg',
    'https://i.pinimg.com/originals/59/88/0f/59880f59f6d1fb08db970451b76cd8cb.png',
    'https://assets.stickpng.com/images/580b57fcd9996e24bc43c4f3.png',
    'https://assets.turbologo.ru/blog/ru/2021/11/12082225/Levis_logo.png',
    'https://i.pinimg.com/550x/0b/bc/96/0bbc96e1c3f9a08fe299683efd0110f8.jpg',
    'https://cms-assets.tutsplus.com/cdn-cgi/image/width=630/uploads/users/151/posts/33040/image/chanel-logo.jpg',
    'https://static-cse.canva.com/blob/951786/1750logotiposqueteinspiraran.jpg',
    'https://assets.turbologo.ru/blog/ru/2021/11/12081039/Dolce-Gabbana-Logo.png',
    'https://i.pinimg.com/222x/50/18/4a/50184a1992ac752fec62ac66bb0dc732.jpg',
    'https://i.pinimg.com/736x/72/8f/17/728f177c3f194df007bf1adff15ba9b9.jpg',
    'https://cdn2.dineroenimagen.com/media/dinero/styles/original/public/images/2018/08/logo-lacoste.jpg',
    'https://static-cse.canva.com/blob/951775/2550logotiposqueteinspiraran.jpg',
    'https://static-cse.canva.com/blob/951789/1250logotiposqueteinspiraran.png',
    'https://static-cse.canva.com/blob/951789/1250logotiposqueteinspiraran.png',
    'https://w7.pngwing.com/pngs/432/515/png-transparent-gucci-fashion-design-versace-italian-fashion-logo-gucci-text-trademark-fashion-thumbnail.png',
]

function imageSwipper(a, b, i) {
    let indexA = i;
    let indexB = i + (brands.length / 2);
    

    setImageA()
    function setImageA() {
        let timing = 200 + (Math.random(i) * 5000);
        if (a) {
            a.src = brands[indexA];
            a.style.opacity = "1";
            b.style.opacity = "0";
        }
        indexA++
        if(indexA > brands.length){
            indexA = 0;
        }
        setTimeout(() => {
            setImageB()
        }, timing);
    }
    function setImageB() {
        let timing = (Math.random() * 5000);
        if (b) {
            b.src = brands[indexB];
            b.style.opacity = "1";
            a.style.opacity = "0";
        }
        indexB++
        if(indexB > brands.length){
            indexB = 0;
        }
        setTimeout(() => {
            setImageA()
        }, timing);
    }
}
// function imageSwipper(element, i) {
//     let index = i;

//     setImage()
//     function setImage() {
        
//         if (element) {
//             element.src = brands[index]
//         }
//         if(index >= brands.length){
//             index = 0;
//             return
//         }
//         index++
//     }

//     setInterval(setImage, 2000)
// }