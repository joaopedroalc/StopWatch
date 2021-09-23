function cronometro(){

const relogio  = document.querySelector('.relogio');
const iniciar  = document.querySelector('.iniciar');
const pausar  = document.querySelector('.pausar');
const zerar  = document.querySelector('.zerar');
let segundos = 0;
let timer;

const formatHourToSeconds = function (segundos){
  const data = new Date(segundos * 1000)
  return data.toLocaleTimeString('pt-BR',{
    hour12 : false,
    timeZone: 'UTC'
  })
}

const setCronometro = function (){
  relogio.classList.remove('pausado')
  clearInterval(timer)
  timer = setInterval(function(){
    relogio.innerHTML = formatHourToSeconds(segundos++)
  },1000)
}

const stopCronometro = function (){
  relogio.classList.add('pausado')
  clearInterval(timer)
}

const zerarCronometro = function (){
  relogio.classList.remove('pausado')
  clearInterval(timer)
  segundos = 0;
  relogio.innerHTML = '00:00:00'
}

iniciar.addEventListener('click', function(e) {
  setCronometro()
})

pausar.addEventListener('click', function(e) {
  stopCronometro()
})

zerar.addEventListener('click', function(e) {
  zerarCronometro()
})
}

cronometro()