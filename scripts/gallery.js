const images = document.querySelectorAll('.images-container img'),
      modal = document.querySelector('.image-gallery'),
      modalImg = document.querySelector('.image-gallery img'),
      buttonBack = document.querySelector('.backBtn'),
      closeBtn = document.querySelector('.close-btn i');


const imagesArray = [...images];

imagesArray.forEach(img => img.addEventListener('click', displayImage));


function displayImage(){

    let currentImg = this.src;

    modalImg.style.maxWidth  = '80%';
    modalImg.style.maxHeight = '80%';
    modalImg.src = currentImg;

    buttonBack.classList.add('display');
    socialBar.classList.add('display');
    status.classList.add('display');

    modal.classList.remove('display');

}

closeBtn.addEventListener('click', closeGallery)
function closeGallery(e){
    
    if(e.target == modal || e.target == closeBtn){
        modal.classList.add('display');
        buttonBack.classList.remove('display');
        socialBar.classList.remove('display');
        status.classList.remove('display');
    }
};

modal.addEventListener('click', closeGallery);



























// const codeContainer = document.querySelector('.code-template p');

// var arr = [];

// fetch('https://api.coinmarketcap.com/v1/ticker/?start=0&limit=100')
//     .then(response => response.json())
//     .then(data => {

//         data.forEach(value => codeContainer.innerHTML += `<p>${value.id} </p>`);
//     })


// // td.innerHTML += `${value.id} ${value.price_usd}`

// // function create() {
// //     for (i = 0; i < arr.length; i++) {
// //         var div = document.createElement('div');

// //         div.className = "crypto";

// //         div.innerHTML = arr[i].id;

// //         document.body.appendChild(div)

// //         console.log(div)
// //     }
// // }



