var yunk1 = document.getElementById('yunk1')
var yunk2 = document.getElementById('yunk2')
var yunk3 = document.getElementById('yunk3')
var img = document.getElementById('station')



yunk1.addEventListener('click',function(){
    img.src = "img/p8.png";
    img.style.width = "350px";
})

yunk2.addEventListener('click',function(){
    img.src = "img/mplouzaki2.png";
    img.style.width = "550px";
})

yunk3.addEventListener('click',function(){
    img.src = "img/mplouzaki3.png";
    img.style.width = "350px";
})

