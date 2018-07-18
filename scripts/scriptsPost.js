const socialBar = document.querySelector('.social-bar'),
      status = document.querySelector('.status');


const backBtn = document.querySelector('.backBtn');
    backBtn.addEventListener('click', function(){
        location.href = "index.html";
});

window.addEventListener('scroll', function(){

    if(window.scrollY > 50){
        socialBar.style.background = "rgba(128, 128, 128, 0.149)";
    }else{
        socialBar.style.background = "transparent";
    }

})
window.addEventListener('scroll', statusbar);

function statusbar(){
    let currentScroll = Math.round(window.scrollY / (document.documentElement.offsetHeight - window.innerHeight) * 100);
    status.style.width = currentScroll + '%';
};