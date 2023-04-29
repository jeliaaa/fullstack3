$(document).ready(function(){
    
    const items =[
        {id: 1, topic:"Cloud Solutin", imgSrc:"imgs/cloud.png"},
        {id: 2, topic:"Speed Optimization", imgSrc:"imgs/speed.png"},
        {id: 3, topic:"Website Design", imgSrc:"imgs/WebDev.png"},
        {id: 4, topic:"Online Marketing", imgSrc:"imgs/marketing.png"},
        {id: 5, topic:"DevOps", imgSrc:"imgs/devops.png"},
        {id: 6, topic:"Mobile development", imgSrc:"imgs/mobile.png"},
        {id: 7, topic:"Solutions Architect", imgSrc:"imgs/solution.png"},
        {id: 8, topic:"IT", imgSrc:"imgs/it.png"},
        {id: 9, topic:"AI", imgSrc:"imgs/AI.png"},

    ]
    items.forEach(item =>{
        const itemCard = `
        <div id="card">
        <h2 class="cardName">${item.topic}</h2>
        <img src="${item.imgSrc}" alt="">
        <p style="letter-spacing: 2px; font-weight: bolder;"><u>MORE</u></p>
        </div>
        `
        $(".carousel").append(itemCard);
    })

    $(".carousel").slick({
        infinite : false,
        slidesToShow : 4,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        autoplaySpeed : 2000
    })
    
})