
//Função para troca de modo (modo light X modo dark)
function toggleMode(){
    const html = document.documentElement

    html.classList.toggle('light')//troca de modo light para dark e vice versa

    
        const img = document.querySelector('#profile img')//pegar a tag img
        if(html.classList.contains('light')){
        img.setAttribute('src','./assets/avatar-light.png')//se tiver modo light adicionar a imagem light
        img.setAttribute('alt','foto de mayk brito de oculos escuros')//e  frase de oculos escuros
    } else{
        img.setAttribute('src','./assets/avatar.png')//se tiver modo dark manter a imagem normal
        img.setAttribute('alt','mayk brito de sorrindo')// e a frase normal
    }
}

    
    


