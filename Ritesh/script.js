burger = document.querySelector(".burger")
hamnav = document.querySelector(".hamnav")
card1 = document.querySelector(".card1");
card2 = document.querySelector(".card2");
card3 = document.querySelector(".card3");
card4 = document.querySelector(".card4");

burger.addEventListener("click", ()=>{
    hamnav.classList.toggle('hide');
    // burger.classList.toggle('visible');
})

card1.addEventListener("click", ()=>{
    window.location.href = 'https://www.amazon.in/';
})

card2.addEventListener("click", ()=>{
    window.location.href = 'https://www.amazon.in/';
})

card3.addEventListener("click", ()=>{
    window.location.href = 'https://www.amazon.in/';
})

card4.addEventListener("click", ()=>{
    window.location.href = 'https://www.amazon.in/';
})