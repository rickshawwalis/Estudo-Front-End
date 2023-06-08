const objetivo = document.querySelector(".objetivo");
const experiencia = document.querySelector(".experiencia");
const cursosConhecimento = document.querySelector(".cursos-conhecimento");


document.addEventListener("click", (e) => {
      const el = e.target;

    if (el.classList.contains("bot1")) {
        objetivo.style.display = "block";
    } else {
        objetivo.style.display = "none";
    }


    if (el.classList.contains("bot2")) {
        experiencia.style.display = "block";
    } else {
        experiencia.style.display = "none";
    }


    if (el.classList.contains("bot3")) {
        cursosConhecimento.style.display = "block";
    } else {
        cursosConhecimento.style.display = "none";
    }
});
