let imc1 = () => {

  let res = document.querySelector("#res");
  let peso = Number(document.querySelector("#peso").value);
  let altura = Number(document.querySelector("#altura").value);
  let imc = peso / altura ** 2;
  let dados = ["Abaixo do peso", "Peso ideal", "Sobrepeso", "Obesidade", "Obesidade Mórbida"]

  if (peso == "" || altura == "") {
    alert("Preencha os campos!")
    return;
  }
  if (imc >= 40) {
    res.innerHTML = `<p>Seu IMC é ${imc.toFixed(2)}. Classificação: ${dados[4]}</p>`;
    res.style.background = "#FF0000";
  
  } else if (imc >= 30) {
    res.innerHTML = `<p>Seu IMC é ${imc.toFixed(2)}. Classificação: ${dados[3]}</p>`;
    res.style.background = "#FF6C2C";
 
  } else if (imc >= 25) {
    res.innerHTML = `<p>Seu IMC é ${imc.toFixed(2)}. Classificação: ${dados[2]}</p>`;
    res.style.background = "#E0FF4D";
  
  } else if (imc >= 18.5) {
    res.innerHTML = `<p>Seu IMC é ${imc.toFixed(2)}. Classificação: ${dados[1]}</p>`;
    res.style.background = "#31FF6D";
  
  } else {
    res.innerHTML = `<p>Seu IMC é ${imc.toFixed(2)}. Classificação: ${dados[0]}</p>`;
    res.style.background = "#29D45B";

  };


};
let botao = document.querySelector("#button");
botao.addEventListener("click", imc1);

