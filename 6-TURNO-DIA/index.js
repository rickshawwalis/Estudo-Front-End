let receberDados = () => {


    let res = document.querySelector("#res");
    let msg = document.querySelector("#msg");
  
    let hora = document.querySelector("#hora").value;
    let horario = new Date("1970-01-01T" + hora).getHours();

    let img = document.createElement("img");
    img.setAttribute("id", "a");

    if (horario < 12) {
        // Bom dia
        msg.innerHTML = `Bom dia! Agora são ${hora} hora(s)`;
        img.setAttribute("src", "dia.jpg");
        document.body.style.background = "#CFD0E2";
    } else if (horario < 18) {
        // Boa tarde
        msg.innerHTML = `Boa tarde! Agora são ${hora} hora(s)`;
        img.setAttribute("src", "solsepondo.jpg");
        document.body.style.background = "#992D07";
    } else if (horario < 24) {
        // Boa noite
        msg.innerHTML = `Boa noite! Agora são ${hora} hora(s)`;
        img.setAttribute("src", "noite.jpg");
        document.body.style.background = "#011E2C";
    } else {
        window.alert("[ERRO], por favor informe uma hora válida");
        msg.innerHTML = `Preencha o dado acima!`;
        document.body.style.background = "#468bec";
    }

    res.innerHTML = " ";
    res.appendChild(msg);
    res.appendChild(img);
    }
let bot1 = document.querySelector("#botao")
bot1.addEventListener("click", receberDados);

