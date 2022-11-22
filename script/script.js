let activeIteam = 0;

const images = [ 
    { image: 'img/01.webp', title: 'Marvel\'s Spiderman Miles Morale', text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.', },
    { image: 'img/02.webp', title: 'Ratchet & Clank: Rift Apart', text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.', },
    { image: 'img/03.webp', title: 'Fortnite', text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.", },
    { image: 'img/04.webp', title: 'Stray', text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city', },
    { image: 'img/05.webp', title: "Marvel's Avengers", text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.', }
];

// inseriamo tutte le immagini dinamicamente servendoci dell’array

let divImgSmall = creaEle("div");
addClass(divImgSmall,"thumb")

images.forEach((element) => {
    // creo elementi per popolare il dom

    let cont = eleId("ms_maincont");
    let div = creaEle("div");
    let img = creaEle("img");
    let imgSmall = creaEle("img");
    let title = creaEle("h2");
    let subTitle = creaEle("p");

    // aggiungo stile, contenuto e attributi 
    addClass(div,"img");
    addClass(title, "title");
    addClass(subTitle, "subTitle");
    addClass(imgSmall,"imgSmall")
    title.innerHTML = (element.title);
    subTitle.innerHTML = (element.text);
    img.src = (element.image);
    imgSmall.src = (element.image);

   
    // appendo tutto al div container e al dom 
    divImgSmall.append(imgSmall)
    div.append(img, title,subTitle);
    cont.append(div, divImgSmall);




});

const divArrey = document.getElementsByClassName("img");
const smallImgArrey = document.getElementsByClassName("imgSmall");

// cambio immagine su click thumb 
for (let index = 0; index < smallImgArrey.length; index++) {
    const element = smallImgArrey[index];
    element.addEventListener("click",
    function () {
        divArrey[activeIteam].classList.remove("active");

        activeIteam = index;

        divArrey[activeIteam].classList.add("active")
        
    })
   
    
}

// cambio immagine ogni tre secondi 
setInterval(function () {
    if (activeIteam > 0) {
        divArrey[activeIteam].classList.remove("active");

        activeIteam --;

        divArrey[activeIteam].classList.add("active")
        
    } else {
        divArrey[activeIteam].classList.remove("active");
        activeIteam = 4;
        divArrey[activeIteam].classList.add("active")
    };

}, 3000)

let btnBot = eleId("bot");
addClass(divArrey[0],"active");
let btnTop = eleId("top");

// cambio immagine su click bottoni 
btnTop.addEventListener ("click",
function top () {   
    
    if (activeIteam > 0) {
        divArrey[activeIteam].classList.remove("active");

        activeIteam --;

        divArrey[activeIteam].classList.add("active")
        
    } else {
        divArrey[activeIteam].classList.remove("active");
        activeIteam = 4;
        divArrey[activeIteam].classList.add("active")
    };

    
});


btnBot.addEventListener ("click",
function () {   
 
    if (activeIteam < divArrey.length - 1) {
        divArrey[activeIteam].classList.remove("active");

        activeIteam ++;

        divArrey[activeIteam].classList.add("active")
        
    } else {
        divArrey[activeIteam].classList.remove("active");
        activeIteam = 0;
        divArrey[activeIteam].classList.add("active")
    };


    
});


