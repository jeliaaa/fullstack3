$(document).ready(function(){
    var sliderCurrent = $('.slider img');
    var currentIndex = 0;
    var sliderSpeed = 3000;

    function nextImage(){
        //removing class from element
        sliderCurrent.eq(currentIndex).removeClass('current');
        //changing index
        currentIndex = (currentIndex+1) % sliderCurrent.length;
        //adding class to the next element
        sliderCurrent.eq(currentIndex).addClass('current')
    }

    setInterval(nextImage, sliderSpeed)
})