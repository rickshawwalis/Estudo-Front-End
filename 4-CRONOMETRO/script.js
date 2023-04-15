function criaHoraDosSegundos(segundos) {//dar o formato do cronometo, exemplo: 00:00:00
  const data = new Date(segundos * 1000);
  return data.toLocaleTimeString('pt-BR', {
      hour12: false,
      timeZone: 'UTC',
  });
}

const tempo = document.querySelector("#tempo");
let segundos = 0;
let timer

function iniciarRelogio() {//responsável por existir a contagem
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
