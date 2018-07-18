(function () {
    const arrow = document.querySelector('.scroll-up'),
    articleBtn = document.querySelector('.documentation'),
    containerModal = document.querySelector('.container-modal'),
    closeBtnAboMe = document.querySelector('.closeBtn'),
    category1 = document.querySelector('.category-1'),
    category2 = document.querySelector('.category-2'),
    category3 = document.querySelector('.category-3'),
    category4 = document.querySelector('.category-4'),
    AllCategory = document.querySelectorAll('.categories-checkbox button'),
    count = document.querySelector('.count'),
    articles = document.querySelectorAll('article');

    closeBtnAboMe.addEventListener('click', closeAboMeFn);


    category1.addEventListener('click', function (){
        let categories = document.querySelectorAll('.category');

        disabledButton(category2);
        disabledButton(category3);
        disabledButton(category4);
        category1.classList.toggle('active-category');
        for (i = 0; i < categories.length; i++) {
            if (categories[i].innerText !== "Kryptowaluty") {
                articles[i].classList.toggle('display');
            }
        }
    });

    
    category2.addEventListener('click', function () {
        let categories = document.querySelectorAll('.category');
        category2.classList.toggle('active-category');
        
        disabledButton(category1);
        disabledButton(category3);
        disabledButton(category4);

        for (i = 0; i < categories.length; i++) {
            if (categories[i].innerText !== "Programowanie" && categories[i].innerText !== "JavaScript") {
                articles[i].classList.toggle('display');
            }
        }
    });

    category3.addEventListener('click', function () {
        let categories = document.querySelectorAll('.category');
        category3.classList.toggle('active-category');

        disabledButton(category1);
        disabledButton(category2);
        disabledButton(category4);

        for (i = 0; i < categories.length; i++) {
            if (categories[i].innerText !== "JavaScript") {
                articles[i].classList.toggle('display');
            }
        }
    });

    category4.addEventListener('click', function (){
        let categories = document.querySelectorAll('.category');
        disabledButton(category1);
        disabledButton(category2);
        disabledButton(category3);
        category4.classList.toggle('active-category');
        for (i = 0; i < categories.length; i++) {
            if (categories[i].innerText !== "Inne") {
                articles[i].classList.toggle('display');
            }
        }
    });

    //Script for arrow
    window.addEventListener('scroll', showArrowIcon);

    function showArrowIcon() {
        let posY = window.scrollY;
        if (posY >= 200) {
            arrow.classList.remove('display')
        } else {
            arrow.classList.add('display')
        }
    };

    arrow.addEventListener('click', function () {
        window.scroll({
            top: -2500,
            left: 0,
            behavior: 'smooth'
        });
    });
    //


    function closeAboMeFn() {
        containerModal.classList.add('display');
        document.body.classList.remove('no-scroll');
    };
    function count1(){
        let countText = count.innerText;
        let val = countText + " " + articles.length;
        count.innerText = val;
    };
    count1();

    // Get disabled attribute button
    function disabledButton(category){
        if(category.disabled == false){
            category.disabled = true;
            category.setAttribute('title', 'Najpierw odznacz zaznaczoną kategorię');
        }else{
            category.disabled =false;
            category.removeAttribute('title');
        }
    };
   
})();
