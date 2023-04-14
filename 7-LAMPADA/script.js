
let imagem = document.querySelector("#imagem")
let img1 = document.createElement('img');
img1.setAttribute('id', 'img')

let apagada = () => {
    img1.setAttribute("src", "./FOTOS/lampadaApagada.jpg")
}
let ligada = () => {
    img1.setAttribute("src", "./FOTOS/lampadaAcesa.jpg")
}
let quebrada = () => {
    img1.setAttribute("src", "./FOTOS/lampadaQuebrada.jpg")
}
imagem.appendChild(img1);