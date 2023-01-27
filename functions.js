const fotos = [
    '/imgs/leones/leon1.jfif',
    '/imgs/leones/leon2.jpg',
    '/imgs/leones/leon3.jfif'
] 

function fotoSiguiente() {
    const fotoActual = document.getElementById('foto');
    //file:///C:/Users/hugo_/Documents/Eri%20HTML/proyecto-final-2023/imgs/leones/leon1.jfif
    for(let i=0; i < fotos.length; i++){
        if(fotoActual.src.includes(fotos[i])){
            if(i == fotos.length-1){
                fotoActual.src = '.'+fotos[0];
            }else{
                fotoActual.src = '.'+fotos[i+1];
            }
            break;
        }
    }
}

function cambiarFoto(){
    setTimeout(fotoSiguiente, 1000);
}

function enviarEmail(){
    window.location = "mailto:ericafader@hotmail.com"
}