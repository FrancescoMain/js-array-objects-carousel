
const images = [ 
    { image: 'img/01.webp', title: 'Marvel\'s Spiderman Miles Morale', text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.', },
    { image: 'img/02.webp', title: 'Ratchet & Clank: Rift Apart', text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.', },
    { image: 'img/03.webp', title: 'Fortnite', text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.", },
    { image: 'img/04.webp', title: 'Stray', text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city', },
    { image: 'img/05.webp', title: "Marvel's Avengers", text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.', }
];

// inseriamo tutte le immagini dinamicamente servendoci dell’array



images.forEach((element) => {
    // creo elementi per popolare il dom
    let cont = eleId("ms_maincont");
    let div = creaEle("div");
    let img = creaEle("img");
    let title = creaEle("h2");
    let subTitle = creaEle("p");

    // aggiungo stile, contenuto e attributi 
    addClass(div,"img");
    addClass(title, "title");
    addClass(subTitle, "subTitle");
    title.innerHTML = (element.title);
    subTitle.innerHTML = (element.text);
    img.src = (element.image);
   
    // appendo tutto al div container e al dom 
    div.append(img, title,subTitle);
    cont.append(div);

});

const divArrey = document.getElementsByClassName("img");

let activeIteam = 0;

let btnBot = document.getElementById("bot");
btnBot.classList.add("hidden")
divArrey[0].classList.add("active");
let btnTop = document.getElementById("top");
btnTop.addEventListener ("click",
function () {   
    if (activeIteam < divArrey.length - 1) {
        divArrey[activeIteam].classList.remove("active");

        activeIteam ++;

        divArrey[activeIteam].classList.add("active")
        
    };

    if (activeIteam === divArrey.length - 1) {
        btnTop.classList.add("hidden");
    }

    if (activeIteam > 0) {
        btnBot.classList.remove("hidden");
        
    }
    
});


btnBot.addEventListener ("click",
function () {   
    if (activeIteam > 0) {
        divArrey[activeIteam].classList.remove("active");

        activeIteam --;

        divArrey[activeIteam].classList.add("active")
        
    };

    if (activeIteam === 0) {
        btnBot.classList.add("hidden");
    }

    if (activeIteam < 4) {
        btnTop.classList.remove("hidden");
        
    }
    
});

