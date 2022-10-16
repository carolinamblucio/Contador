//valor iniciar
let contagem=0;

// selecionar botoes e valor
const valor= document.querySelector('#valor');
const btns=document.querySelectorAll('.btn');


btns.forEach(function (botao){
    botao.addEventListener('click', function(e){
        //console.log(e.currentTarget.classList);

        const styles= e.currentTarget.classList;
        if(styles.contains('diminuir')){
            contagem--;
        }else if(styles.contains('aumentar')){
            contagem++;
        }else{
            contagem=0;
        }
        if(contagem>0){
            valor.style.color='#097969';
        }
        if(contagem<0){
            valor.style.color='#800020';
        }
        if(contagem==0){
            valor.style.color='#000000';
        }
        valor.textContent= contagem;
    })

});