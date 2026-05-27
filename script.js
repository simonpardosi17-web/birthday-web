const cakeBtn =
document.getElementById("cakeBtn");

const page1 =
document.getElementById("page1");

const page2 =
document.getElementById("page2");

const music1 =
document.getElementById("birthdayMusic");

const music2 =
document.getElementById("specialMusic");

const specialBtn =
document.getElementById("specialBtn");

const scrollIndicator =
document.getElementById("scrollIndicator");


/* START MUSIC AFTER FIRST TOUCH */
document.body.addEventListener("click", () => {

  music1.volume = 0.7;

  music1.play();

}, { once: true });


/* OPEN PAGE 2 */
cakeBtn.addEventListener("click", () => {

  page1.classList.remove("active");

  page2.classList.add("active");

  createHearts();

  createParticles();

  window.scrollTo({
    top:0,
    behavior:"smooth"
  });

});


/* HEARTS */
function createHearts(){

  const container =
  document.querySelector(".hearts-container");

  setInterval(() => {

    const heart =
    document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML = "❤";

    heart.style.left =
    Math.random() * 100 + "vw";

    heart.style.fontSize =
    Math.random() * 20 + 15 + "px";

    heart.style.animationDuration =
    Math.random() * 3 + 4 + "s";

    container.appendChild(heart);

    setTimeout(() => {

      heart.remove();

    },7000);

  },250);

}


/* PARTICLES */
function createParticles(){

  const particles =
  document.querySelector(".particles");

  setInterval(() => {

    const particle =
    document.createElement("span");

    particle.classList.add("spark");

    particle.style.left =
    Math.random() * 100 + "vw";

    particle.style.top =
    Math.random() * 100 + "vh";

    particle.style.animationDuration =
    Math.random() * 3 + 2 + "s";

    particles.appendChild(particle);

    setTimeout(() => {

      particle.remove();

    },5000);

  },300);

}


/* SCROLL */
window.addEventListener("scroll", () => {

  if(window.scrollY > 100){

    scrollIndicator.style.opacity = "0";

  }
  else{

    scrollIndicator.style.opacity = "1";

  }

});


/* BUTTON MUSIC */
specialBtn.addEventListener("click", () => {

  music1.pause();

  music2.currentTime = 0;

  music2.play();

});


/* MUSIC 2 FINISH */
music2.addEventListener("ended", () => {

  music1.play();

});