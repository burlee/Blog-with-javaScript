(function () {
const allArticles = document.querySelectorAll('article h4'),
    searchValue = document.querySelector('.search'),
    btnSearch = document.querySelector('button.search');



searchValue.addEventListener('keyup', function (event) {

    let term = firstCharToUpper(searchValue.value.slice(0, 3));

    if (13 == event.keyCode) {
        for (i = 0; i < allArticles.length; i++) {
            if (allArticles[i].innerText.slice(0, 3) == term) {
                if (/Edge\/\d./i.test(navigator.userAgent || /MSIE 10/i.test(navigator.userAgent) || /MSIE 9/i.test(navigator.userAgent) || /rv:11.0/i.test(navigator.userAgent) )){
                    // Detect Microsoft Browser
                    window.scrollTo(0, (allArticles[i].offsetTop) - 105);
                 }
                else{
                    window.scroll({
                        top: (allArticles[i].offsetTop) - 105,
                        behavior: "smooth"
                    });
                }
            }
            else {
                searchValue.value = "";
            };
        };
    };
});

btnSearch.addEventListener('click', function (event) {

    let term = firstCharToUpper(searchValue.value.slice(0, 3));

    for (i = 0; i < allArticles.length; i++) {
        if (allArticles[i].innerText.slice(0, 3) == term) {
            window.scroll({
                top: (allArticles[i].offsetTop) - 105,
                behavior: "smooth"
            });
        }
        else {
            searchValue.value = "";
        };
    };
});


function firstCharToUpper(text) {
    return text.slice(0, 1).toUpperCase() + text.slice(1, 100).toLowerCase();
};

})();


