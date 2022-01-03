function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if ( hora >= 0 && hora <12){
        //BOM DIA!
        document.body.style.background = '#c69561'
        img.src = 'foto-manha.png'
    } 
    else if (hora >= 12 && hora <= 18) {
        //BOA TARDE!
        document.body.style.background = '#895552'
        img.src = 'foto-tarde.png'
    }
    else {
        //BOA NOITE!
        document.body.style.background = '#5c4562'
        img.src = 'foto-noite.png'
    } 
}