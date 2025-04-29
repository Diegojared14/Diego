//LISTA DE RUTAS DE IMAGENES LOCALES QUE SE VISUALIZARAN
//EN EL CARRUSEL
const images=[
    "imagenes/img1.jpeg",
    "imagenes/img2.jpeg",
    "imagenes/img3.jpeg",
    "imagenes/img4.jpeg"
];
//Indice que indica que la imagen esta actualmente visible
let currentIndex=0;
//funcion para indicar que la imagen esta visible
function showImage(index){
    //hay que obtener la imagen del carrusel y se debe cambiar el atributo "src"
    const img=document.getElementById("carousel-img");
    img.src=images[index];
}
//FUNCION PARA PASAR A LA SIGUIENTE IMAGEN
function imagenSiguiente(){
    //Se aumenta el indice en 1; si se llega al final, vuelve al inicio
    //esto se debe al modulo "%"
    currentIndex=(currentIndex+1)%images.length;
    showImage(currentIndex); //muestra la nueva imagen
}
//FUNCION PARA VOLVER A LA IMAGEN ANTERIOR
function imagenAnterior(){
    //SE REDUCE EL INDICE EN 1; si se llega al inicio, pasa al ultimo
    currentIndex=(currentIndex-1+images.length)%images.length;
    showImage(currentIndex); //muestra la nueva imagen
}