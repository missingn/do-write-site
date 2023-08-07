const imgs = [ 
    "0.jpg",
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg"

]

const ramdomeImg =  imgs[Math.floor(Math.random()*imgs.length)];
const bgImg = document.createElement("img");


bgImg.src = `img/${ramdomeImg}`;
document.body.appendChild(bgImg);