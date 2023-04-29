$(document).ready(function(){
    var sliderCurrent = $(".slider img");
    var sliderIndex = 0;
    var sliderSpeed = 2000;
    function sliderMove(){   
        sliderCurrent.eq(sliderIndex).removeClass('current');
        sliderIndex = (sliderIndex+1)%sliderCurrent.length;
        sliderCurrent.eq(sliderIndex).addClass('current');
    }
    setInterval(sliderMove,sliderSpeed);
})