const btnModoEl = document.querySelector('.btn-modo')
const bodyEl = document.body
const cabecalhoEl = document.querySelector('.cabecalho')
const rodapeEl = document.querySelector('.rodape')

function toggleModoEscuro(){
    btnModoEl.classList.toggle('ativo')
    bodyEl.classList.toggle('body-escuro')
    cabecalhoEl.classList.toggle('cabecalho-escuro')
    cabecalhoEl.classList.toggle('cabecalho-claro')
    rodapeEl.classList.toggle('rodape-escuro')
    rodapeEl.classList.toggle('rodape-claro')
}

btnModoEl.addEventListener('click',toggleModoEscuro)

//-----------------------------------------------------//

const linkEls = document.querySelectorAll('.link')
const secEls = document.querySelectorAll('.sec')
const secContainer = document.querySelector('.secs')

linkEls.forEach((link)=>{
    var alvo = link.classList[1]
    link.addEventListener('click',()=>{
        secEls.forEach((sec)=>{
            sec.classList.remove('ativo')
        })

        var secAtiva = secContainer.querySelector(`.${alvo}`)
        secAtiva.classList.add('ativo')
    })
})

//-----------------------------------------------------//

let slideIndex = 0;
let interval = setInterval(() => {
  slideIndex++;
  showSlides(slideIndex);
}, 3000);

function plusSlides(n) {
  clearInterval(interval);
  slideIndex += n;
  showSlides(slideIndex);
  interval = setInterval(() => {
    slideIndex++;
    showSlides(slideIndex);
  }, 3000);
}

function showSlides(n) {
  const slides = document.querySelectorAll(".carrossel-slide");
  const anteriorBtn = document.querySelector(".carrossel-anterior");
  const proximoBtn = document.querySelector(".carrossel-proximo");

  if (n >= slides.length) {
    slideIndex = 0;
  } else if (n < 0) {
    slideIndex = slides.length-1;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex].style.display = "block";

  anteriorBtn.onclick = () => {
    plusSlides(-1);
  };
  proximoBtn.onclick = () => {
    plusSlides(1);
  };
}
showSlides()