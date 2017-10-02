function adicionaTexto(){
    var selecionaTexto = document.getElementById("selecionaTexto");
    var botaoSeleciona = document.getElementById("botaoSeleciona");
    var botaoRemove = document.getElementById("botaoRemoveFrase");
    var p = document.createElement("label");
    var frases = document.getElementById("frases");
    
    botaoSeleciona.addEventListener("click", function(event){        
        event.preventDefault();
        p.innerHTML = selecionaTexto.value.length + "\ncaracteres";
        
            if(selecionaTexto.value.length == 0){
                var msgErro = document.getElementById("msgErro");
                msgErro.style.display = "block";
            } else {
                frases.style.display = "block";
                frases.appendChild(p);
                selecionaTexto.value = ""; 
                selecionaTexto.setAttribute("disabled", true);
            }
    }); 
    
    botaoRemove.addEventListener("click", function(event){
        event.preventDefault();
        p.remove(p);
        msgErro.style.display = "none";
        selecionaTexto.removeAttribute("disabled");        
    });    
};




































