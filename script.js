var slides = ['img1.jpg', 'img2.jpg', 'img3.jpg']
var tam = slides.length
var sAtual = 0
var tmpslider

function trocaAuto(){
  sAtual++
  if(sAtual >= tam){
    sAtual = 0
  }
  document.querySelector('#dvSlider').style.backgroundImage = `url('${slides[sAtual]}')`
}

function iniciaSlider(){
  document.querySelector('#dvSlider').style.backgroundImage = `url('${slides[sAtual]}')`
  tmpslider = setInterval(trocaAuto,2000)
}

function parar(){
  clearInterval(tmpslider)
}

function troca(dir){
  sAtual += dir
  if(sAtual < 0){
    sAtual = 4
  }else if(sAtual >= tam){
    sAtual = 0
  }
  document.querySelector('#dvSlider').style.backgroundImage = `url('${slides[sAtual]}')`
  clearInterval(tmpslider)
}

function expandCard(card){
  card.style.transform = 'scale(1.05)'
  card.style.boxShadow = '0 8px 16px rgba(0,0,0,0.3)'
}

function collapseCard(card){
  card.style.transform = 'scale(1)'
  card.style.boxShadow = 'none'
}
