//aula https://www.youtube.com/watch?v=f5es-PpaUI8&list=PLntvgXM11X6pi7mW0O4ZmfUI1xDSIbmTm&index=27


let verificar = () => {


    var data = new Date();
    var ano = data.getFullYear();


    var msg = document.querySelector("#msg")
    var fano = document.querySelector("#txtAno");
    var res = document.querySelector("#res");

    if (fano.value.length == 0 || fano.value > ano) {
        window.alert("[ERRO] Verifique os dados e tente novamente!");
    } else {

        var fsex = document.getElementsByName('radsex');
        var idade = ano - Number(fano.value);
        var genero = " ";

        var img = document.createElement('img');
        img.setAttribute("id", "fotos");


        if (fsex[0].checked) {
            genero = "masculino"

            //criança
            if (idade >= 0 && idade < 10) {
                msg.innerHTML = `Você é uma criança do gênero ${genero} e possui ${idade} anos.`;
                img.setAttribute("src", "./pessoa/crianca-menino.jpeg")
                //jovem
            } else if (idade < 21) {
                msg.innerHTML = `Você é um jovem do gênero ${genero} e possui ${idade} anos.`;
                img.setAttribute("src", "./pessoa/jovem-menino.jpeg")
                //adulto
            } else if (idade < 50) {
                msg.innerHTML = `Você é um adulto do gênero ${genero} e possui ${idade} anos.`;
                img.setAttribute("src", "./pessoa/adulto.menino.jpeg")
                //idoso
            } else {
                msg.innerHTML = `Você é um idoso do gênero ${genero} e possui ${idade} anos.`;
                img.setAttribute("src", "./pessoa/idoso.menino.jpeg")
            }

        } else if (fsex[1].checked) {
            genero = "feminino"

            //criança
            if (idade >= 0 && idade < 10) {
                msg.innerHTML = `Você é uma criança do gênero ${genero} e possui ${idade} anos.`;
                img.setAttribute("src", "./pessoa/crianca.menina.jpeg")
                //jovem
            } else if (idade < 21) {
                msg.innerHTML = `Você é uma jovem do gênero ${genero} e possui ${idade} anos.`;
                img.setAttribute("src", "./pessoa/jovem-menina.jpeg")
                //adulto
            } else if (idade < 50) {
                msg.innerHTML = `Você é uma adulta do gênero ${genero} e possui ${idade} anos.`;
                img.setAttribute("src", "./pessoa/adulto.menina.jpeg")
                //idoso
            } else {
                msg.innerHTML = `Você é uma idosa do gênero ${genero} e possui ${idade} anos.`;
                img.setAttribute("src", "./pessoa/idosa.menina.jpeg")
            }
        }
        res.innerHTML = " "
        res.appendChild(img);
    }

}
botao.addEventListener("click", verificar);