function criaHoraDosSegundos(segundos) {
  const data = new Date(segundos * 1000);
  return data.toLocaleTimeString('pt-BR', {
      hour12: false,
      timeZone: 'UTC',
  });
}

const tempo = document.querySelector("#tempo");
let segundos = 0;
let timer;

function iniciarRelogio() {
  timer = setInterval(function () {
      segundos++;
      tempo.innerHTML = criaHoraDosSegundos(segundos);
  }, 1000);
}

document.addEventListener('click', function (e) {
  const el = e.target;

  if (el.classList.contains("iniciar")) {
      clearInterval(timer);
      iniciarRelogio();
      tempo.style.color = "black";
  }

  if (el.classList.contains("pausar")) {
      clearInterval(timer);
      tempo.style.color = "red";
  }

  if (el.classList.contains("zerar")) {
      clearInterval(timer);
      tempo.innerHTML = '00:00:00';
      segundos = 0;
      tempo.style.color = "black";
  }
});
tempo.style.textAlign = 'center';

/*const tempo = document.querySelector("#tempo");
const iniciar = document.querySelector("#iniciar");
const pausar = document.querySelector("#pausar");
const zerar = document.querySelector("#zerar");

let hours = 0;
let minutes = 0;
let seconds = 0;

let c = () => { // A função c é responsável por atualizar o temporizador a cada segundo.
  seconds++; //A primeira linha da função c incrementa a variável seconds em 1 a cada vez que a função é chamada.
  if (seconds == 60) {//if verifica se seconds atingiu 60
    minutes++;//se Second atingir 60s, a variável minutes é incrementada em 1
    seconds = 0; //variável seconds é reinicializada para 0
  }
  if (minutes == 60) {//if verifica se minutes atingiu 60
    hours++;//se minute atingir 60min, a variável hours é incrementada em 1
    minutes = 0;//variável minutes é reinicializada para 0
  }
  tempo.innerHTML =
    `${hours.toString().padStart(2, '0')} : ${minutes.toString().padStart(2, '0')} : ${seconds.toString().padStart(2, '0')}`;
};

let timer;

iniciar.addEventListener("click", () => {//iniciar
  clearInterval(timer);
  timer = setInterval(c, 1000);
  tempo.style.color = "black";//tempo pq é ligado a id de onde aparece o horário no html
});

pausar.addEventListener("click", () => {//pausar
  clearInterval(timer);
  tempo.style.color = "red";
});

zerar.addEventListener("click", () => {//zear
  clearInterval(timer);
  hours = 0;
  minutes = 0;
  seconds = 0;
  tempo.innerHTML = "00 : 00 : 00";
  tempo.style.color = "black";//tempo pq é ligado a id de onde aparece o horário no html
});
tempo.style.textAlign = 'center';//centraliza o texto da id que aparece o horário no html
*/