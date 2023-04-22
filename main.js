var url = "https://www.githubstatus.com/api/v2/summary.json";//Sua URL

const body = document.body;


var xhttp = new XMLHttpRequest();
xhttp.open("GET", url, true);

xhttp.onreadystatechange = function(){//Função a ser chamada quando a requisição retornar do servidor
    if ( xhttp.readyState == 4 && xhttp.status == 200 ) {//Verifica se o retorno do servidor deu certo
        const resposta = JSON.parse(xhttp.responseText);
        const conteudo = resposta.components
        conteudo.splice(3,1);
        var paiDoFooter = document.getElementsByTagName("footer")[0].parentNode;
        const caixaPrincipal = document.createElement("div");
        caixaPrincipal.classList.add("caixaPrincipal")
        paiDoFooter.insertBefore(caixaPrincipal, document.getElementsByTagName("footer")[0]);
        for (i = 0; i < conteudo.length; i++) {
            const caixaSecundaria = document.createElement("div")
            const paragrafo = document.createElement("p");
            const texto = document.createTextNode(conteudo[i].name)
            paragrafo.appendChild(texto);
            paragrafo.classList.add("ajustaLinha")
            if(conteudo[i].status === "operational") {
                const verde = document.createElement("strong");
                const textoVerde= document.createTextNode("✓")
                verde.classList.add("Operational");
                verde.appendChild(textoVerde)
                paragrafo.appendChild(verde)
                caixaSecundaria.appendChild(paragrafo)
                caixaPrincipal.appendChild(caixaSecundaria)
                caixaSecundaria.classList.add("caixaSecundaria")
            }else {
                const vermelho = document.createElement("strong");
                const textoVermelho= document.createTextNode("✕")
                vermelho.classList.add("noOperational");
                vermelho.appendChild(textoVermelho)
                paragrafo.appendChild(vermelho)
                caixaSecundaria.appendChild(paragrafo)
                caixaPrincipal.appendChild(caixaSecundaria)
                caixaSecundaria.classList.add("caixaSecundaria")
            }
        } 
    }
}

xhttp.send();//A execução do script CONTINUARÁ mesmo que a requisição não tenha retornado do servidor
