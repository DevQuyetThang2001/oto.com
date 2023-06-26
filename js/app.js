let btnWatch = document.querySelectorAll('.btn_watch');
let boxNews = document.querySelectorAll('.box_news');
let btnLogin = document.querySelector('.sign-in');
let btnClose = document.querySelector('.close_btn');
let btnMenuMobile = document.querySelector('.mobile-btn');
let menuMobileList = document.querySelector('.menu_mobile-location');
let menuBtnClose = document.querySelector('.menu_mobile-close');
let btnLoginMobile = document.querySelector('.menu_mobile-login');
let currentIndex = 0;

for(let i = 0;i < btnWatch.length;i++){
    btnWatch[i].addEventListener('click',function(){

        // Su dung vong lap de xoa active hien tai
        for(let i = 0;i < btnWatch.length;i++){
            btnWatch[i].classList.remove('active');
        }
        this.classList.add('active')

        for(let i = 0;i < boxNews.length;i++){
            boxNews[i].classList.remove('active');
        }

        btnWatch[currentIndex] == boxNews[i].classList.add('active')
    })
}

btnLogin.addEventListener('click',function(){
    let form = document.querySelector('.box_form').style.display = 'block';
})

btnClose.addEventListener('click',function(){
    let form = document.querySelector('.box_form').style.display = 'none';
})

btnMenuMobile.addEventListener('click',function(){
    menuMobileList.classList.add('active');
})

menuBtnClose.addEventListener('click',function(){
    menuMobileList.classList.remove('active');
})

btnLoginMobile.addEventListener('click',function(){
    let form = document.querySelector('.box_form').style.display = 'block';
})