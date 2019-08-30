console.log('wireframe.js');

$(document).ready(function(){
    clickRescBtn1();
    clickRescBtn2();
    clickRescBtn3();
});

const clickRescBtn1 = () => {
    // When the button having a class name 'resvBtn1' is clicked, show an information popup.
    // 클래스명이 'resvBtn1'인 버튼이 눌리면 정보창을 보여줘라. 
    $('.resvBtn1').on('click', function(){
        alert('대실예약하기 버튼 클릭');
    });
}

const clickRescBtn2 = () => {
    $('.resvBtn2').on('click', function(){
        alert('숙박예약하기 버튼 클릭');
    });
}

const clickRescBtn3 = () => {
    $('.resvBtn3').on('click', function(){
        alert('예약하기 버튼 클릭');
    });
}