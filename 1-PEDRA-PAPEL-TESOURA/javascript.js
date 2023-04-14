let desconto = () => {

  let res = document.querySelector("#res");

  let fsex = document.getElementsByName("jokenpo");
  let tipo = "";

 let img1 = document.createElement('img');
  img1.setAttribute("id", "fotos");

  let opcoes = ["PEDRA", "PAPEL", "TESOURA"];
  let escolha = opcoes[Math.floor(Math.random() * opcoes.length)];
//INPUT 1
  if (fsex[0].checked) {
    tipo = "PEDRA";
    res.innerHTML = ""
    res.innerHTML =
      `<p>->VOCÊ ESCOLHEU ${tipo}</p>
    <p>->EU ESCOLHO ${escolha}</p>`;
   
    if (tipo == "PEDRA" && escolha == "PEDRA") {
      res.innerHTML += "EMPATE !!!"
      img1.setAttribute("src", "./jokenpo/pedra.pedra.jpg")
   
    } else if (tipo == "PEDRA" && escolha == "PAPEL") {
      res.innerHTML += "GANHEI !!!"
      img1.setAttribute("src", "./jokenpo/papevspedra.jpg")
   
    } else if (tipo == "PEDRA" && escolha == "TESOURA") {
      res.innerHTML += "PERDI !!!"
      img1.setAttribute("src", "./jokenpo/pedravstesoura.jpg")
    }
    res.style.textAlign = 'justify';
    document.body.style.background = "#902D01";
//INPUT 2
  } else if (fsex[1].checked) {
    tipo = "PAPEL";
    res.innerHTML = ""
    res.innerHTML =
    `<p>->VOCÊ ESCOLHEU ${tipo}</p>
    <p>->EU ESCOLHO ${escolha}</p>`;
   
    if (tipo == "PAPEL" && escolha == "PEDRA") {
      res.innerHTML += "PERDI !!!"
      img1.setAttribute("src", "./jokenpo/papevspedra.jpg")
  
    } else if (tipo == "PAPEL" && escolha == "PAPEL") {
      res.innerHTML += "EMPATE !!!"
      img1.setAttribute("src", "./jokenpo/papelVSpapel.jpg")


    } else if (tipo == "PAPEL" && escolha == "TESOURA") {
      img1.setAttribute("src", "./jokenpo/tesouravspapel.jpg")
      res.innerHTML += "GANHEI !!!"
    }
     res.style.textAlign = 'justify';
    document.body.style.background = "#172D18";

//INPUT 3
  } else if (fsex[2].checked) {
    tipo = "TESOURA";
    res.innerHTML = ""
    res.innerHTML =
      `<p>->VOCÊ ESCOLHEU ${tipo}</p>
    <p>->EU ESCOLHO ${escolha}</p>`;
    
    if (tipo == "TESOURA" && escolha == "PEDRA") {
      img1.setAttribute("src", "./jokenpo/pedravstesoura.jpg")
      res.innerHTML += "GANHEI !!!"
    
    } else if (tipo == "TESOURA" && escolha == "PAPEL") {
      img1.setAttribute("src", "./jokenpo/tesouravspapel.jpg")
      res.innerHTML += "PERDI !!!"
   
    } else if (tipo == "TESOURA" && escolha == "TESOURA") {
      img1.setAttribute("src", "./jokenpo/tesouraVStesoura.jpg")
      res.innerHTML += "EMPATE !!!"
    }
       res.style.textAlign = 'justify';
    document.body.style.background = "#992D77";

  }
  res.appendChild(img1);

};

let botao = document.querySelector("#button");
botao.addEventListener("click", desconto);
