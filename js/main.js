const toggleBtn = document.querySelector('#burger');
const menu = document.querySelector('.main-menu');

toggleBtn.addEventListener('click',() =>{
    menu.classList.toggle('active');
});


$('.slider-text').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2500,
});

AOS.init();

$(function(){
  $('.sec04-btn1').click(function(){
    $('.sec04-content-box1').stop().fadeIn('1000');
    $('.sec04-content-box2').css('display','none');
    $('.sec04-content-box3').css('display','none');
    $('.sec04-btn2').css('background-color','#fff');
    $('.sec04-btn3').css('background-color','#fff');
    $('.sec04-btn1').css('background-color','#abc9e0');
    $('.sec04-btn2').css('border','1px solid #abc9e0');
    $('.sec04-btn3').css('border','1px solid #abc9e0');
  });
  $('.sec04-btn2').click(function(){
    $('.sec04-content-box2').stop().fadeIn('1000');
    $('.sec04-content-box2').css('display','flex');
    $('.sec04-content-box1').css('display','none');
    $('.sec04-content-box3').css('display','none');
    $('.sec04-btn1').css('background-color','#fff');
    $('.sec04-btn3').css('background-color','#fff');
    $('.sec04-btn2').css('background-color','#abc9e0');
    $('.sec04-btn1').css('border','1px solid #abc9e0');
    $('.sec04-btn3').css('border','1px solid #abc9e0');
  });
  $('.sec04-btn3').click(function(){
    $('.sec04-content-box3').stop().fadeIn('1000');
    $('.sec04-content-box3').css('display','flex');
    $('.sec04-content-box2').css('display','none');
    $('.sec04-content-box1').css('display','none');
    $('.sec04-btn1').css('background-color','#fff');
    $('.sec04-btn2').css('background-color','#fff');
    $('.sec04-btn3').css('background-color','#abc9e0');
    $('.sec04-btn1').css('border','1px solid #abc9e0');
    $('.sec04-btn2').css('border','1px solid #abc9e0');
  });
});
// sec04

var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
  mapOption = { 
        center: new kakao.maps.LatLng(36.00698388199232, 127.66079726930117), // 지도의 중심좌표
        level: 4 // 지도의 확대 레벨
    };

var map = new kakao.maps.Map(mapContainer, mapOption);

var imageSrc = 'https://image.flaticon.com/icons/png/512/727/727598.png', // 마커이미지의 주소입니다    
    imageSize = new kakao.maps.Size(64, 69), // 마커이미지의 크기입니다
    imageOption = {offset: new kakao.maps.Point(27, 69)}; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

// 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption),
    markerPosition = new kakao.maps.LatLng(36.00698388199232, 127.66079726930117); // 마커가 표시될 위치입니다

// 마커를 생성합니다
var marker = new kakao.maps.Marker({
  position: markerPosition,
  image: markerImage // 마커이미지 설정 
});

// 마커가 지도 위에 표시되도록 설정합니다
marker.setMap(map);  

// 커스텀 오버레이에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
var content = '<div class="customoverlay">' +
    '  <a href="http://kko.to/32QiRxY40" target="_blank">' +
    '    <span class="title">무주군청</span>' +
    '  </a>' +
    '</div>';

// 커스텀 오버레이가 표시될 위치입니다 
var position = new kakao.maps.LatLng(36.00698388199232, 127.66079726930117);  

// 커스텀 오버레이를 생성합니다
var customOverlay = new kakao.maps.CustomOverlay({
    map: map,
    position: position,
    content: content,
    yAnchor: 1 
});
// map