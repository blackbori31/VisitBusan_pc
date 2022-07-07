// 헤더메뉴
let open = 0;
$('.nav > li').mouseenter(function(){
    $('.searchTop').hide();             
    $('.searchBtn').removeClass('on');  

    if(!open == 0){
        $('.sub').hide();
        $(this).find('.sub').show();        
    } else {
        $(this).find('.sub').stop().slideDown(500);
        open = '으히히히히';
    }
});

$('.vinav').mouseleave(function(){      
    $('.sub').stop().slideUp(300);
    open = 0; 
});

$('.navItem').mouseenter(function(){ 
    $('.sub').stop().slideUp(300);
    open = 0;
})


$('.navItem3').mouseenter(function(){

    if(!open == 0){
        $('.niList').hide();
        $(this).find('.niList').show();        
    } else {
        $(this).find('.niList').stop().slideDown(500);
        open = '으히히히히';
    }
});

$('.vinav').mouseleave(function(){
    $('.niList').stop().slideUp(300);
    open = 0; 
});

$('.navItem2').mouseenter(function(){
    $('.niList').stop().slideUp(300);
    open = 0;
})

// searchTop  

$('.searchBtn').click(function(e){
    e.preventDefault();
    $('.searchTop').toggle();
    $(this).toggleClass('on');

});

// 섹션1 메뉴바 누르면 움직이기
const sBtn1 = document.querySelectorAll('.sectionsW .smMenu li'); 
const sBody1 = document.querySelectorAll('.sectionsW .smBody>div'); 

sBtn1.forEach(function(item,aa){
    item.onclick = function(e){
        e.preventDefault();

        for(let i = 0; i < 3 ; i++){
            sBtn1[i].classList.remove('list');
            sBody1[i].style.display= 'none';
        }

        item.classList.add('list');
        sBody1[aa].style.display= 'flex';
    }
});




// 섹션2 광고베너 슬라이드
var imgWidth =  $('#slider img').width(); //#slider안 이미지의 가로길이를 구해온다
    var imgNumber =  $('#slider img').length; //#slider안 이미지의 갯수를 구해온다
    var sliderUl = $('#slider>ul');           //$('#slider>ul')를 변수 sliderUl로 만든다

    sliderUl.css({width:imgWidth*imgNumber});   //sliderUl의 넓이를 설정한다

    setInterval(function(){
        sliderUl.animate({'margin-left':-imgWidth},2000,function(){
            sliderUl.css({'margin-left':0});
            sliderUl.find('li:first-child').insertAfter(sliderUl.find('li:last-child'));
        });
    },5000);



// 섹션4 달력메뉴바 움직이기
const sBtn2 = document.querySelectorAll('.sectionsY .syMenu li'); 
const sBody2 = document.querySelectorAll('.sectionsY .syBody>div'); 

sBtn2.forEach(function(item,aa){
    item.onclick = function(e){
        e.preventDefault();

        for(let i = 0; i < 13 ; i++){
            sBtn2[i].classList.remove('on');
            sBody2[i].style.display= 'none';
        }

        item.classList.add('on');
        sBody2[aa].style.display= 'flex';
    }
});



// 팝업 닫기버튼
const closeBtn = document.querySelector('.close');
const elPopup = document.querySelector('#popup');

closeBtn.onclick = function(aa){
    aa.preventDefault();            //a태그의 기본기능이 안되게 함
    elPopup.style.display = "none"; 
}
