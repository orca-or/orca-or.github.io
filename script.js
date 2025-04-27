

function bloquearSite() {
  // Cria o overlay
  let overlay = document.createElement('div');
  overlay.id = 'offlineOverlay';
  overlay.style.position = 'fixed';
  overlay.style.top = '0';
  overlay.style.left = '0';
  overlay.style.width = '100%';
  overlay.style.height = '100%';
  overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.95)';
  overlay.style.color = 'white';
  overlay.style.display = 'flex';
  overlay.style.flexDirection = 'column';
  overlay.style.justifyContent = 'center';
  overlay.style.alignItems = 'center';
  overlay.style.fontSize = '24px';
  overlay.style.zIndex = '10000';
  overlay.innerHTML = `
    <p>Você está offline!</p>
    <p>Conecte-se à internet para continuar usando o site.</p>
  `;
  document.body.appendChild(overlay);

  // Desabilita todos os botões
  const botoes = document.querySelectorAll('button');
  botoes.forEach(botao => {
    botao.disabled = true;
    botao.style.opacity = '0.5';
    botao.style.cursor = 'not-allowed';
  });

  // Desabilita todas as listas (por segurança)
  const listas = document.querySelectorAll('ul, ol');
  listas.forEach(lista => {
    lista.style.pointerEvents = 'none';
    lista.style.opacity = '0.5';
  });

  // Desabilita o menu
  const menus = document.querySelectorAll('nav, header');
  menus.forEach(menu => {
    menu.style.pointerEvents = 'none';
    menu.style.opacity = '0.5';
  });

  // Desabilita o rodapé
  const rodapes = document.querySelectorAll('footer');
  rodapes.forEach(rodape => {
    rodape.style.pointerEvents = 'none';
    rodape.style.opacity = '0.5';
  });
}

function desbloquearSite() {
  // Remove o overlay
  const overlay = document.getElementById('offlineOverlay');
  if (overlay) overlay.remove();

  // Habilita todos os botões
  const botoes = document.querySelectorAll('button');
  botoes.forEach(botao => {
    botao.disabled = false;
    botao.style.opacity = '1';
    botao.style.cursor = 'pointer';
  });

  // Habilita todas as listas
  const listas = document.querySelectorAll('ul, ol');
  listas.forEach(lista => {
    lista.style.pointerEvents = 'auto';
    lista.style.opacity = '1';
  });

  // Habilita o menu
  const menus = document.querySelectorAll('nav, header');
  menus.forEach(menu => {
    menu.style.pointerEvents = 'auto';
    menu.style.opacity = '1';
  });

  // Habilita o rodapé
  const rodapes = document.querySelectorAll('footer');
  rodapes.forEach(rodape => {
    rodape.style.pointerEvents = 'auto';
    rodape.style.opacity = '1';
  });
}

function verificarConexao() {
  fetch("https://www.google.com/favicon.ico", { method: "HEAD", mode: "no-cors" })
    .then(() => {
      desbloquearSite();
    })
    .catch(() => {
      bloquearSite();
    });
}

// Checa quando o site carrega
window.addEventListener('load', verificarConexao);

// Checa sempre que a conexão mudar (voltar ou cair)
window.addEventListener('online', verificarConexao);
window.addEventListener('offline', verificarConexao);


// Checa quando o site carrega
window.addEventListener('load', verificarConexao);

// Checa sempre que a conexão mudar (voltar ou cair)
window.addEventListener('online', verificarConexao);
window.addEventListener('offline', verificarConexao);



window.addEventListener('load', function() {
  if (!navigator.onLine) {
    alert("Você está offline. O uso das fórmulas não está disponível.");
    
    const buttons = document.querySelectorAll('button');
    buttons.forEach(btn => btn.disabled = true);
  }
});



function blocos() {
    

    var Aal=document.getElementById(`area`).value;
     var b1 =document.getElementById(`comprimento`).value;
    var ev =document.getElementById(`espessura`).value;
    var b2=document.getElementById(`largura`).value;
    var eh=document.getElementById(`altura`).value;

    if (isNaN (Aal) || isNaN (b1) || isNaN (ev) ||isNaN (b2) || isNaN (eh) || Aal=="" 
    || b1=="" || ev=="" || b2=="" || eh=="" ) {

        alert("campo vazio");
        return;
        
    }
    


    var calculo1 = ((parseFloat (Aal))/((parseFloat(b1)+parseFloat(ev))*(parseFloat(b2)+parseFloat(eh))))
    document.getElementById("centro").innerHTML=document.getElementById("volume").innerHTML
   

   
    document.getElementById(`resultado`).innerHTML= calculo1
    document.getElementById(`Resultado`).innerHTML= calculo1
   
   
            document.getElementById("Re").style.display="block"
            document.getElementById("re").style.display="block"
   


    document.getElementById(`q1`).innerHTML= calculo1
    document.getElementById("2").style.fontWeight="bold"
    document.getElementById("1").style.fontWeight="normal"
    
           

    
    
    
    
}
    
    
function assentamento() {
    
    var Aal=document.getElementById(`area2`).value;
    var N=document.getElementById(`numero`).value;
     var b1 =document.getElementById(`b1`).value;
    var b2 =document.getElementById(`b2`).value;
    var b3=document.getElementById(`b3`).value;
    
    if (isNaN (Aal) || isNaN (b1) || isNaN (N) ||isNaN (b2) || isNaN (b3) ||
    Aal=="" || b1=="" || N=="" || b2=="" || b3=="" ) {

alert("campo vazio");
return;

}

    var calcul =[(parseFloat(Aal)-parseFloat(N) *(parseFloat(b1)*parseFloat(b2)))]*parseFloat(b3)
    document.getElementById(`resultado2`).innerHTML= calcul
    document.getElementById(`Resultado2`).innerHTML= calcul
   
    document.getElementById(`centro`).innerHTML= document.getElementById("chapisco").innerHTML

            document.getElementById("Re").style.display="block"
            document.getElementById("re").style.display="block"
    document.getElementById("3").style.fontWeight="bold"
    document.getElementById("2").style.fontWeight="normal"
    
    
}
    
function chapisco() {
    
    var Aal=document.getElementById(`area3`).value;

    if (Aal==""  ) {

alert("campo vazio");
return;

}

    var calcul = parseFloat (Aal)*2
    document.getElementById(`resultado3`).innerHTML= calcul
    document.getElementById(`Resultado3`).innerHTML= calcul
   
  document.getElementById("centro").innerHTML=document.getElementById("vcr").innerHTML

    document.getElementById("4").style.fontWeight="bold"
    document.getElementById("3").style.fontWeight="normal"

            document.getElementById("Re").style.display="block"
            document.getElementById("re").style.display="block"
    
}
   
function reboco() {
    
    var Acr=document.getElementById(`acr`).value;
    var Ecr=document.getElementById(`ecr`).value;
    var calcul = parseFloat (Acr)* parseFloat (Ecr)

    if (Acr=="" || Ecr=="" ) {

alert("campo vazio");
return;

}

    document.getElementById(`resultado4`).innerHTML= calcul
    document.getElementById(`Resultado4`).innerHTML= calcul
   
            document.getElementById("Re").style.display="block"
            document.getElementById("re").style.display="block"
    document.getElementById(`centro`).innerHTML= document.getElementById("vr").innerHTML
    
    document.getElementById("18").style.fontWeight="bold"
    document.getElementById("4").style.fontWeight="normal"
   
    
}

function reboco1() {
    
    var Ar=document.getElementById(`ar`).value;
    var Er=document.getElementById(`er`).value;
    var calcul = parseFloat (Ar)* parseFloat (Er)

    if (Ar=="" || Er=="" ) {

alert("campo vazio");
return;

}

    document.getElementById(`resultado19`).innerHTML= calcul
    document.getElementById(`Resultado19`).innerHTML= calcul
   
            document.getElementById("Re").style.display="block"
            document.getElementById("re").style.display="block"
    document.getElementById(`centro`).innerHTML= document.getElementById("vta").innerHTML
    
    document.getElementById("5").style.fontWeight="bold"
    document.getElementById("18").style.fontWeight="normal"
   
    
}
function volumetotal() {
    
    var Vass=document.getElementById(`ass`).value;
    var Vchap=document.getElementById(`chap`).value;
    var Vreb=document.getElementById(`reb`).value;

    if (Vass=="" || Vchap=="" || Vreb=="") {

alert("campo vazio");
return;

}


    var calcul = parseFloat (Vass)+ parseFloat (Vchap)+ parseFloat(Vreb)
    document.getElementById(`resultado5`).innerHTML= calcul
    document.getElementById(`Resultado5`).innerHTML= calcul
    document.getElementById(`centro`).innerHTML= document.getElementById("ap").innerHTML

    document.getElementById("6").style.fontWeight="bold"
    document.getElementById("5").style.fontWeight="normal"
    
            document.getElementById("Re").style.display="block"
            document.getElementById("re").style.display="block"
    
}
function area() {
    
    var perimetro=document.getElementById(`pe`).value;
    var H=document.getElementById(`h`).value;
    var vao=document.getElementById(`vao`).value;

    if (perimetro=="" || H=="" || vao=="") {

alert("campo vazio");
return;

}

    document.getElementById(`centro`).innerHTML= document.getElementById("sm").innerHTML

    var calcul = parseFloat (perimetro)* parseFloat (H)- parseFloat(vao)
    document.getElementById(`resultado6`).innerHTML= calcul
    document.getElementById(`Resultado6`).innerHTML= calcul

    document.getElementById("7").style.fontWeight="bold"
    document.getElementById("6").style.fontWeight="normal"
    
            document.getElementById("Re").style.display="block"
            document.getElementById("re").style.display="block"
    
    
}

function perimetro() {
    
    var k4= document.getElementById("lk5").value

if   ( k4=="") {
    alert("campo vazio");
    return;
    
}


else {
document.getElementById("resultado7").innerHTML=eval(k4)
document.getElementById("Resultado7").innerHTML=eval(k4)

} 

    document.getElementById(`centro`).innerHTML= document.getElementById("av").innerHTML
    document.getElementById("8").style.fontWeight="bold"
    document.getElementById("7").style.fontWeight="normal"
   
            document.getElementById("Re").style.display="block"
            document.getElementById("re").style.display="block"
    
    
}


function vao() {
    
    var k3= document.getElementById("lk4").value

if   ( k3=="") {
    alert("campo vazio");
    return;
    
}


else {
document.getElementById("resultado8").innerHTML=eval(k3)
document.getElementById("Resultado8").innerHTML=eval(k3)

} 
    document.getElementById(`centro`).innerHTML= document.getElementById("vsv").innerHTML


   
            document.getElementById("Re").style.display="block"
            document.getElementById("re").style.display="block"

    document.getElementById("9").style.fontWeight="bold"
    document.getElementById("8").style.fontWeight="normal"
    
    
}


function betao (){ 
    
    var c=document.getElementById(`c`).value;
    var l=document.getElementById(`l`).value;
    var h=document.getElementById(`a`).value;

    if (c=="" || l=="" || h=="") {

alert("campo vazio");
return;

}


    var calcul = parseFloat (c) * parseFloat (l) * parseFloat(h)
    document.getElementById(`resultado9`).innerHTML= calcul
    document.getElementById(`Resultado9`).innerHTML= calcul
   
            document.getElementById("Re").style.display="block"
            document.getElementById("re").style.display="block"
    document.getElementById(`centro`).innerHTML= document.getElementById("cm").innerHTML
    document.getElementById("10").style.fontWeight="bold"
    document.getElementById("9").style.fontWeight="normal"
    
  
    
    
}   


   
function cimento() {
    
    var coe=document.getElementById(`qc1`).value;
    var arecoe=document.getElementById(`qc2`).value;
    var calcul = parseFloat (coe)* parseFloat (arecoe)

    if (coe=="" || arecoe=="" ) {

alert("campo vazio");
return;

}

    document.getElementById(`resultado10`).innerHTML= calcul
    document.getElementById(`Resultado10`).innerHTML= calcul
    
   
            document.getElementById("Re").style.display="block"
            document.getElementById("re").style.display="block"
    document.getElementById(`centro`).innerHTML= document.getElementById("cm1").innerHTML
    
    document.getElementById("10").style.fontWeight="bold"
    
    
    
}




  
function cimento1() {
    
    var coe=document.getElementById(`qc3`).value;
    var arecoe=document.getElementById(`qc4`).value;
    var calcul = parseFloat (coe)/ parseFloat (arecoe)

    if (coe=="" || arecoe=="" ) {

alert("campo vazio");
return;

}

    document.getElementById(`resultado18`).innerHTML= calcul
    document.getElementById(`Resultado18`).innerHTML= calcul
    
   
            document.getElementById("Re").style.display="block"
            document.getElementById("re").style.display="block"
    document.getElementById(`centro`).innerHTML= document.getElementById("qar").innerHTML
    
    document.getElementById("10").style.fontWeight="normal"
    document.getElementById("11").style.fontWeight="bold"
    
    
}

function areia() {
    
    var coe=document.getElementById(`car1`).value;
    var arecoe=document.getElementById(`var2`).value;
    var calcul = parseFloat (coe)* parseFloat (arecoe)

    if (coe=="" || arecoe=="" ) {

alert("campo vazio");
return;

}

    document.getElementById(`resultado11`).innerHTML= calcul
    document.getElementById(`Resultado11`).innerHTML= calcul
    document.getElementById(`centro`).innerHTML= document.getElementById("qar1").innerHTML
    
            document.getElementById("Re").style.display="block"
            document.getElementById("re").style.display="block"
   
    document.getElementById("11").style.fontWeight="bold"
    
    
}



function areiapeso() {
    
    var V=document.getElementById(`avr3`).value;
    var D=document.getElementById(`adr4`).value;
    var calcul = parseFloat (V)* parseFloat (D)

    if (V=="" || D=="" ) {

alert("campo vazio");
return;

}

    document.getElementById(`resultado20`).innerHTML= calcul
    document.getElementById(`Resultado20`).innerHTML= calcul
    document.getElementById(`centro`).innerHTML= document.getElementById("Bt").innerHTML
    
            document.getElementById("Re").style.display="block"
            document.getElementById("re").style.display="block"
    document.getElementById("11").style.fontWeight="normal"
    document.getElementById("17").style.fontWeight="bold"
    
    
}


function azulejos() {
    
    var aal=document.getElementById(`ld1`).value;
    var azu=document.getElementById(`ld2`).value;
    var calcul = parseFloat (aal)/ parseFloat (azu)

    if (aal=="" || azu=="" ) {

alert("campo vazio");
return;

}

    document.getElementById(`resultado12`).innerHTML= calcul
    document.getElementById(`Resultado12`).innerHTML= calcul
    
            document.getElementById("Re").style.display="block"
            document.getElementById("re").style.display="block"
   
    document.getElementById(`centro`).innerHTML= document.getElementById("ld01").innerHTML
    
    
  

    
    
    
}



function azulejos1() {
    
    var qa=document.getElementById(`ld3`).value;
    var  qac=document.getElementById(`ld4`).value;
    var calcul = parseFloat (qa)/ parseFloat (qac)

    if (qa=="" || qac=="" ) {

alert("campo vazio");
return;

}

    document.getElementById(`resultado15`).innerHTML= calcul
    document.getElementById(`Resultado15`).innerHTML= calcul
   
   
    document.getElementById(`centro`).innerHTML= document.getElementById("bc").innerHTML
   
    
  
            document.getElementById("Re").style.display="block"
            document.getElementById("re").style.display="block"

    document.getElementById("13").style.fontWeight="normal"
    document.getElementById("14").style.fontWeight="bold"
    
    
}




function tinta() {
    
    var aal=document.getElementById(`pt1`).value;
    var numerodemao=document.getElementById(`pt2`).value;
    var rendimento=document.getElementById(`pt3`).value;
    var calcul = parseFloat (aal)* parseFloat (numerodemao)/ parseFloat (rendimento)

    if (aal=="" || tinta=="" ) {

alert("campo vazio");
return;

}

    document.getElementById(`resultado13`).innerHTML= calcul
    document.getElementById(`Resultado13`).innerHTML= calcul
    
   
            document.getElementById("Re").style.display="block"
            document.getElementById("re").style.display="block"
    document.getElementById(`centro`).innerHTML= document.getElementById("ld").innerHTML
   
    document.getElementById("12").style.fontWeight="normal"
    document.getElementById("13").style.fontWeight="bold"
    
    
}



function alvenaria() {
    
    var c=document.getElementById(`area01`).value;
    var l=document.getElementById(`area02`).value;
    var calcul = parseFloat (c)* parseFloat (l)

    if (c=="" || l=="" ) {

alert("campo vazio");
return;

}

    document.getElementById(`Resultado1`).innerHTML= calcul
    document.getElementById(`resultado1`).innerHTML= calcul
    
   
            document.getElementById("Re").style.display="block"
            document.getElementById("re").style.display="block"
    document.getElementById(`centro`).innerHTML= document.getElementById("nb").innerHTML
   
    document.getElementById("16").style.fontWeight="normal"
    document.getElementById("1").style.fontWeight="bold"
    
    
}


function brita() {
    
    var c=document.getElementById(`qbt1`).value;
    var l=document.getElementById(`qbt2`).value;
    var calcul = parseFloat (c)* parseFloat (l)

    if (c=="" || l=="" ) {

alert("campo vazio");
return;

}

    document.getElementById(`resultado17`).innerHTML= calcul
    document.getElementById(`Resultado17`).innerHTML= calcul
    
    
            document.getElementById("Re").style.display="block"
            document.getElementById("re").style.display="block"
   
    document.getElementById(`centro`).innerHTML= document.getElementById("bt01").innerHTML
   
    
    document.getElementById("17").style.fontWeight="bold"
    
    
}


function britapeso() {
    
    var V=document.getElementById(`qbt3`).value;
    var D=document.getElementById(`qbt4`).value;
    var calcul = parseFloat (V)* parseFloat (D)

    if (V=="" || D=="" ) {

alert("campo vazio");
return;

}

    document.getElementById(`resultado21`).innerHTML= calcul
    document.getElementById(`Resultado21`).innerHTML= calcul

    
            document.getElementById("Re").style.display="block"
            document.getElementById("re").style.display="block"
   
    document.getElementById(`centro`).innerHTML= document.getElementById("pt").innerHTML
    document.getElementById("17").style.fontWeight="normal"
    document.getElementById("12").style.fontWeight="bold"
    
    
}

function chamada1() {

    document.getElementById("centro").innerHTML=document.getElementById("nb").innerHTML

    document.getElementById("1").style.fontWeight="bold"
    document.getElementById("2").style.fontWeight="normal"
    document.getElementById("3").style.fontWeight="normal"
    document.getElementById("5").style.fontWeight="normal"
    document.getElementById("4").style.fontWeight="normal"
    document.getElementById("6").style.fontWeight="normal"
    document.getElementById("7").style.fontWeight="normal"
    document.getElementById("8").style.fontWeight="normal"
    document.getElementById("9").style.fontWeight="normal"
    document.getElementById("10").style.fontWeight="normal"
    document.getElementById("11").style.fontWeight="normal"
    document.getElementById("12").style.fontWeight="normal"
    document.getElementById("13").style.fontWeight="normal"
    document.getElementById("14").style.fontWeight="normal"
    document.getElementById("15").style.fontWeight="normal"
    document.getElementById("16").style.fontWeight="normal"
    document.getElementById("17").style.fontWeight="normal"
    document.getElementById("18").style.fontWeight="normal"
   
    
    
}


function chamada2() {

document.getElementById("centro").innerHTML=document.getElementById("volume").innerHTML
document.getElementById("1").style.fontWeight="normal"
document.getElementById("10").style.fontWeight="normal"
document.getElementById("11").style.fontWeight="normal"
document.getElementById("12").style.fontWeight="normal"
document.getElementById("15").style.fontWeight="normal"
document.getElementById("16").style.fontWeight="normal"
document.getElementById("17").style.fontWeight="normal"
document.getElementById("18").style.fontWeight="normal"
document.getElementById("13").style.fontWeight="normal"
document.getElementById("14").style.fontWeight="normal"
document.getElementById("2").style.fontWeight="bold"
document.getElementById("3").style.fontWeight="normal"
document.getElementById("5").style.fontWeight="normal"
document.getElementById("4").style.fontWeight="normal"
document.getElementById("6").style.fontWeight="normal"
document.getElementById("7").style.fontWeight="normal"
document.getElementById("8").style.fontWeight="normal"
document.getElementById("9").style.fontWeight="normal"

}

function chamada3() {

document.getElementById("centro").innerHTML=document.getElementById("chapisco").innerHTML

document.getElementById("3").style.fontWeight="bold"
document.getElementById("2").style.fontWeight="normal"
document.getElementById("10").style.fontWeight="normal"
document.getElementById("11").style.fontWeight="normal"
document.getElementById("12").style.fontWeight="normal"
document.getElementById("13").style.fontWeight="normal"
document.getElementById("14").style.fontWeight="normal"
document.getElementById("15").style.fontWeight="normal"
document.getElementById("16").style.fontWeight="normal"
document.getElementById("17").style.fontWeight="normal"
document.getElementById("18").style.fontWeight="normal"
document.getElementById("1").style.fontWeight="normal"
document.getElementById("5").style.fontWeight="normal"
document.getElementById("4").style.fontWeight="normal"
document.getElementById("6").style.fontWeight="normal"
document.getElementById("7").style.fontWeight="normal"
document.getElementById("8").style.fontWeight="normal"
document.getElementById("9").style.fontWeight="normal"


}

function chamada4() {

document.getElementById("centro").innerHTML=document.getElementById("vcr").innerHTML
document.getElementById("4").style.fontWeight="bold"
document.getElementById("10").style.fontWeight="normal"
document.getElementById("11").style.fontWeight="normal"
document.getElementById("12").style.fontWeight="normal"
document.getElementById("13").style.fontWeight="normal"
document.getElementById("14").style.fontWeight="normal"
document.getElementById("15").style.fontWeight="normal"
document.getElementById("16").style.fontWeight="normal"
document.getElementById("17").style.fontWeight="normal"
document.getElementById("18").style.fontWeight="normal"
document.getElementById("1").style.fontWeight="normal"
document.getElementById("2").style.fontWeight="normal"
document.getElementById("3").style.fontWeight="normal"
document.getElementById("5").style.fontWeight="normal"
document.getElementById("6").style.fontWeight="normal"
document.getElementById("7").style.fontWeight="normal"
document.getElementById("8").style.fontWeight="normal"
document.getElementById("9").style.fontWeight="normal"

 


}
function chamada5() {

document.getElementById("centro").innerHTML=document.getElementById("vta").innerHTML

document.getElementById("5").style.fontWeight="bold"
document.getElementById("4").style.fontWeight="normal"
document.getElementById("10").style.fontWeight="normal"
document.getElementById("11").style.fontWeight="normal"
document.getElementById("12").style.fontWeight="normal"
document.getElementById("13").style.fontWeight="normal"
document.getElementById("14").style.fontWeight="normal"
document.getElementById("15").style.fontWeight="normal"
document.getElementById("16").style.fontWeight="normal"
document.getElementById("17").style.fontWeight="normal"
document.getElementById("18").style.fontWeight="normal"
document.getElementById("1").style.fontWeight="normal"
document.getElementById("2").style.fontWeight="normal"
document.getElementById("3").style.fontWeight="normal"
document.getElementById("6").style.fontWeight="normal"
document.getElementById("7").style.fontWeight="normal"
document.getElementById("8").style.fontWeight="normal"
document.getElementById("9").style.fontWeight="normal"

}


function chamada6() {

document.getElementById("centro").innerHTML=document.getElementById("ap").innerHTML

    document.getElementById("6").style.fontWeight="bold"
    document.getElementById("2").style.fontWeight="normal"
    document.getElementById("3").style.fontWeight="normal"
    document.getElementById("5").style.fontWeight="normal"
    document.getElementById("4").style.fontWeight="normal"
    document.getElementById("7").style.fontWeight="normal"
    document.getElementById("8").style.fontWeight="normal"
    document.getElementById("9").style.fontWeight="normal"
    document.getElementById("10").style.fontWeight="normal"
    document.getElementById("11").style.fontWeight="normal"
    document.getElementById("12").style.fontWeight="normal"
    document.getElementById("13").style.fontWeight="normal"
    document.getElementById("14").style.fontWeight="normal"
    document.getElementById("15").style.fontWeight="normal"
    document.getElementById("16").style.fontWeight="normal"
    document.getElementById("17").style.fontWeight="normal"
    document.getElementById("18").style.fontWeight="normal"
    document.getElementById("1").style.fontWeight="normal"
    

}
function chamada7() {

document.getElementById("centro").innerHTML=document.getElementById("sm").innerHTML

    document.getElementById("7").style.fontWeight="bold"
    document.getElementById("2").style.fontWeight="normal"
    document.getElementById("3").style.fontWeight="normal"
    document.getElementById("5").style.fontWeight="normal"
    document.getElementById("4").style.fontWeight="normal"
    document.getElementById("6").style.fontWeight="normal"
    document.getElementById("8").style.fontWeight="normal"
    document.getElementById("9").style.fontWeight="normal"
    document.getElementById("10").style.fontWeight="normal"
    document.getElementById("11").style.fontWeight="normal"
    document.getElementById("12").style.fontWeight="normal"
    document.getElementById("13").style.fontWeight="normal"
    document.getElementById("14").style.fontWeight="normal"
    document.getElementById("15").style.fontWeight="normal"
    document.getElementById("16").style.fontWeight="normal"
    document.getElementById("17").style.fontWeight="normal"
    document.getElementById("18").style.fontWeight="normal"
    document.getElementById("1").style.fontWeight="normal"
    

}
function chamada8() {

document.getElementById("centro").innerHTML=document.getElementById("av").innerHTML

document.getElementById("8").style.fontWeight="bold"
    document.getElementById("2").style.fontWeight="normal"
    document.getElementById("3").style.fontWeight="normal"
    document.getElementById("5").style.fontWeight="normal"
    document.getElementById("4").style.fontWeight="normal"
    document.getElementById("7").style.fontWeight="normal"
    document.getElementById("6").style.fontWeight="normal"
    document.getElementById("9").style.fontWeight="normal"
    document.getElementById("10").style.fontWeight="normal"
    document.getElementById("11").style.fontWeight="normal"
    document.getElementById("12").style.fontWeight="normal"
    document.getElementById("13").style.fontWeight="normal"
    document.getElementById("14").style.fontWeight="normal"
    document.getElementById("15").style.fontWeight="normal"
    document.getElementById("16").style.fontWeight="normal"
    document.getElementById("17").style.fontWeight="normal"
    document.getElementById("18").style.fontWeight="normal"
  
    

}
function chamada9() {

document.getElementById("centro").innerHTML=document.getElementById("vsv").innerHTML

    document.getElementById("9").style.fontWeight="bold"
    document.getElementById("2").style.fontWeight="normal"
    document.getElementById("3").style.fontWeight="normal"
    document.getElementById("5").style.fontWeight="normal"
    document.getElementById("4").style.fontWeight="normal"
    document.getElementById("7").style.fontWeight="normal"
    document.getElementById("8").style.fontWeight="normal"
    document.getElementById("6").style.fontWeight="normal"
    document.getElementById("1").style.fontWeight="normal"
    document.getElementById("10").style.fontWeight="normal"
    document.getElementById("11").style.fontWeight="normal"
    document.getElementById("12").style.fontWeight="normal"
    document.getElementById("13").style.fontWeight="normal"
    document.getElementById("14").style.fontWeight="normal"
    document.getElementById("15").style.fontWeight="normal"
    document.getElementById("16").style.fontWeight="normal"
    document.getElementById("17").style.fontWeight="normal"
    document.getElementById("18").style.fontWeight="normal"
    
    

}

function chamada10() {

document.getElementById("centro").innerHTML=document.getElementById("cm").innerHTML

    document.getElementById("10").style.fontWeight="bold"
    document.getElementById("2").style.fontWeight="normal"
    document.getElementById("3").style.fontWeight="normal"
    document.getElementById("5").style.fontWeight="normal"
    document.getElementById("4").style.fontWeight="normal"
    document.getElementById("7").style.fontWeight="normal"
    document.getElementById("8").style.fontWeight="normal"
    document.getElementById("6").style.fontWeight="normal"
    document.getElementById("11").style.fontWeight="normal"
    document.getElementById("12").style.fontWeight="normal"
    document.getElementById("13").style.fontWeight="normal"
    document.getElementById("14").style.fontWeight="normal"
    document.getElementById("15").style.fontWeight="normal"
    document.getElementById("16").style.fontWeight="normal"
    document.getElementById("17").style.fontWeight="normal"
    document.getElementById("9").style.fontWeight="normal"
    document.getElementById("18").style.fontWeight="normal"
    

}
function chamada11() {

document.getElementById("centro").innerHTML=document.getElementById("qar").innerHTML

    document.getElementById("11").style.fontWeight="bold"
    document.getElementById("2").style.fontWeight="normal"
    document.getElementById("3").style.fontWeight="normal"
    document.getElementById("5").style.fontWeight="normal"
    document.getElementById("4").style.fontWeight="normal"
    document.getElementById("7").style.fontWeight="normal"
    document.getElementById("8").style.fontWeight="normal"
    document.getElementById("6").style.fontWeight="normal"
    document.getElementById("1").style.fontWeight="normal"
    document.getElementById("9").style.fontWeight="normal"
    document.getElementById("10").style.fontWeight="normal"
    document.getElementById("12").style.fontWeight="normal"
    document.getElementById("13").style.fontWeight="normal"
    document.getElementById("14").style.fontWeight="normal"
    document.getElementById("15").style.fontWeight="normal"
    document.getElementById("16").style.fontWeight="normal"
    document.getElementById("17").style.fontWeight="normal"
    document.getElementById("18").style.fontWeight="normal"
    
    

}

function chamada12() {

document.getElementById("centro").innerHTML=document.getElementById("pt").innerHTML

    document.getElementById("12").style.fontWeight="bold"
    document.getElementById("2").style.fontWeight="normal"
    document.getElementById("3").style.fontWeight="normal"
    document.getElementById("5").style.fontWeight="normal"
    document.getElementById("4").style.fontWeight="normal"
    document.getElementById("7").style.fontWeight="normal"
    document.getElementById("8").style.fontWeight="normal"
    document.getElementById("6").style.fontWeight="normal"
    document.getElementById("1").style.fontWeight="normal"
    document.getElementById("10").style.fontWeight="normal"
    document.getElementById("11").style.fontWeight="normal"
    document.getElementById("9").style.fontWeight="normal"
    document.getElementById("13").style.fontWeight="normal"
    document.getElementById("14").style.fontWeight="normal"
    document.getElementById("15").style.fontWeight="normal"
    document.getElementById("16").style.fontWeight="normal"
    document.getElementById("17").style.fontWeight="normal"
    document.getElementById("18").style.fontWeight="normal"
    
    

}
function chamada13() {

document.getElementById("centro").innerHTML=document.getElementById("ld").innerHTML

    document.getElementById("13").style.fontWeight="bold"
    document.getElementById("2").style.fontWeight="normal"
    document.getElementById("3").style.fontWeight="normal"
    document.getElementById("5").style.fontWeight="normal"
    document.getElementById("4").style.fontWeight="normal"
    document.getElementById("7").style.fontWeight="normal"
    document.getElementById("8").style.fontWeight="normal"
    document.getElementById("6").style.fontWeight="normal"
    document.getElementById("1").style.fontWeight="normal"
    document.getElementById("9").style.fontWeight="normal"
    document.getElementById("10").style.fontWeight="normal"
    document.getElementById("11").style.fontWeight="normal"
    document.getElementById("12").style.fontWeight="normal"
    document.getElementById("14").style.fontWeight="normal"
    document.getElementById("15").style.fontWeight="normal"
    document.getElementById("16").style.fontWeight="normal"
    document.getElementById("17").style.fontWeight="normal"
    document.getElementById("18").style.fontWeight="normal"
    
    

}

function chamada14() {

document.getElementById("centro").innerHTML=document.getElementById("bc").innerHTML

    document.getElementById("14").style.fontWeight="bold"
    document.getElementById("2").style.fontWeight="normal"
    document.getElementById("3").style.fontWeight="normal"
    document.getElementById("5").style.fontWeight="normal"
    document.getElementById("4").style.fontWeight="normal"
    document.getElementById("7").style.fontWeight="normal"
    document.getElementById("8").style.fontWeight="normal"
    document.getElementById("6").style.fontWeight="normal"
    document.getElementById("9").style.fontWeight="normal"
    document.getElementById("1").style.fontWeight="normal"
    document.getElementById("10").style.fontWeight="normal"
    document.getElementById("11").style.fontWeight="normal"
    document.getElementById("12").style.fontWeight="normal"
    document.getElementById("13").style.fontWeight="normal"
    document.getElementById("15").style.fontWeight="normal"
    document.getElementById("16").style.fontWeight="normal"
    document.getElementById("17").style.fontWeight="normal"
    document.getElementById("18").style.fontWeight="normal"
   
   
    

}


function chamada15() {

document.getElementById("centro").innerHTML=document.getElementById("qpc").innerHTML


    document.getElementById("15").style.fontWeight="bold"
    document.getElementById("2").style.fontWeight="normal"
    document.getElementById("3").style.fontWeight="normal"
    document.getElementById("5").style.fontWeight="normal"
    document.getElementById("4").style.fontWeight="normal"
    document.getElementById("7").style.fontWeight="normal"
    document.getElementById("8").style.fontWeight="normal"
    document.getElementById("6").style.fontWeight="normal"
    document.getElementById("9").style.fontWeight="normal"
    document.getElementById("1").style.fontWeight="normal"
    document.getElementById("10").style.fontWeight="normal"
    document.getElementById("11").style.fontWeight="normal"
    document.getElementById("12").style.fontWeight="normal"
    document.getElementById("13").style.fontWeight="normal"
    document.getElementById("14").style.fontWeight="normal"
    document.getElementById("16").style.fontWeight="normal"
    document.getElementById("17").style.fontWeight="normal"
    document.getElementById("18").style.fontWeight="normal"
   
    

}



function chamada16() {

document.getElementById("centro").innerHTML=document.getElementById("area0").innerHTML


    document.getElementById("16").style.fontWeight="bold"
    document.getElementById("15").style.fontWeight="normal"
    document.getElementById("2").style.fontWeight="normal"
    document.getElementById("3").style.fontWeight="normal"
    document.getElementById("5").style.fontWeight="normal"
    document.getElementById("4").style.fontWeight="normal"
    document.getElementById("7").style.fontWeight="normal"
    document.getElementById("8").style.fontWeight="normal"
    document.getElementById("6").style.fontWeight="normal"
    document.getElementById("9").style.fontWeight="normal"
    document.getElementById("1").style.fontWeight="normal"
    document.getElementById("10").style.fontWeight="normal"
    document.getElementById("11").style.fontWeight="normal"
    document.getElementById("12").style.fontWeight="normal"
    document.getElementById("13").style.fontWeight="normal"
    document.getElementById("18").style.fontWeight="normal"
    document.getElementById("14").style.fontWeight="normal"
    document.getElementById("17").style.fontWeight="normal"
   
    

}

function chamada17() {

document.getElementById("centro").innerHTML=document.getElementById("Bt").innerHTML


    document.getElementById("17").style.fontWeight="bold"
    document.getElementById("18").style.fontWeight="normal"
    document.getElementById("15").style.fontWeight="normal"
    document.getElementById("2").style.fontWeight="normal"
    document.getElementById("3").style.fontWeight="normal"
    document.getElementById("5").style.fontWeight="normal"
    document.getElementById("4").style.fontWeight="normal"
    document.getElementById("7").style.fontWeight="normal"
    document.getElementById("8").style.fontWeight="normal"
    document.getElementById("6").style.fontWeight="normal"
    document.getElementById("9").style.fontWeight="normal"
    document.getElementById("1").style.fontWeight="normal"
    document.getElementById("10").style.fontWeight="normal"
    document.getElementById("11").style.fontWeight="normal"
    document.getElementById("12").style.fontWeight="normal"
    document.getElementById("13").style.fontWeight="normal"
    document.getElementById("14").style.fontWeight="normal"
    document.getElementById("16").style.fontWeight="normal"
   
    

}

function chamada18() {

    document.getElementById("centro").innerHTML=document.getElementById("vr").innerHTML
    
    
        document.getElementById("18").style.fontWeight="bold"
        document.getElementById("17").style.fontWeight="normal"
        document.getElementById("15").style.fontWeight="normal"
        document.getElementById("2").style.fontWeight="normal"
        document.getElementById("3").style.fontWeight="normal"
        document.getElementById("5").style.fontWeight="normal"
        document.getElementById("4").style.fontWeight="normal"
        document.getElementById("7").style.fontWeight="normal"
        document.getElementById("8").style.fontWeight="normal"
        document.getElementById("6").style.fontWeight="normal"
        document.getElementById("9").style.fontWeight="normal"
        document.getElementById("1").style.fontWeight="normal"
        document.getElementById("10").style.fontWeight="normal"
        document.getElementById("11").style.fontWeight="normal"
        document.getElementById("12").style.fontWeight="normal"
        document.getElementById("13").style.fontWeight="normal"
        document.getElementById("14").style.fontWeight="normal"
        document.getElementById("16").style.fontWeight="normal"
       
        
    
    }
    




function composto() {

    var quantidade=document.getElementById("q1").value
    var preco=document.getElementById("pc").value
    var composto= parseFloat(quantidade)*parseFloat(preco)
    

    document.getElementById("cp").innerHTML=composto
    document.getElementById("pdf").style.display="block"


    document.getElementById("pl3").innerHTML=document.getElementById("q1").value
    document.getElementById("pl4").innerHTML=document.getElementById("pc").value
    document.getElementById("pl5").innerHTML=composto
    
}   
function composto2() {

var quantidade2=document.getElementById("q2").value
var preco2=document.getElementById("pc2").value
var composto= parseFloat(quantidade2)*parseFloat(preco2)

 document.getElementById("pdf").style.display="block"

document.getElementById("cp2").innerHTML=composto
document.getElementById("pl6").innerHTML=quantidade2
document.getElementById("pl7").innerHTML=preco2
document.getElementById("pl8").innerHTML=composto


}
function composto3() {

var quantidade3=document.getElementById("q3").value
var preco3=document.getElementById("pc3").value
var composto= parseFloat(quantidade3)*parseFloat(preco3)
 document.getElementById("pdf").style.display="block"
document.getElementById("cp3").innerHTML=composto
document.getElementById("pl9").innerHTML=quantidade3
document.getElementById("pl10").innerHTML=preco3
document.getElementById("pl11").innerHTML=composto


}

function composto4() {
 document.getElementById("pdf").style.display="block"
var quantidade4=document.getElementById("q4").value
var preco4=document.getElementById("pc4").value
var composto= parseFloat(quantidade4)*parseFloat(preco4)

document.getElementById("cp4").innerHTML=composto
document.getElementById("pl12").innerHTML=quantidade4
document.getElementById("pl13").innerHTML=preco4
document.getElementById("pl14").innerHTML=composto


}

function composto5() {

var quantidade5=document.getElementById("q5").value
var preco5=document.getElementById("pc5").value
var composto= parseFloat(quantidade5)*parseFloat(preco5)
 document.getElementById("pdf").style.display="block"
document.getElementById("cp5").innerHTML=composto
document.getElementById("pl15").innerHTML=quantidade5
document.getElementById("pl16").innerHTML=preco5
document.getElementById("pl17").innerHTML=composto


}

function composto6() {

var quantidade6=document.getElementById("q6").value
var preco6=document.getElementById("pc6").value
var composto= parseFloat(quantidade6)*parseFloat(preco6)
 document.getElementById("pdf").style.display="block"
document.getElementById("cp6").innerHTML=composto
document.getElementById("pl18").innerHTML=quantidade6
document.getElementById("pl19").innerHTML=preco6
document.getElementById("pl20").innerHTML=composto


}
function composto7() {

var quantidade7=document.getElementById("q7").value
var preco7=document.getElementById("pc7").value
var composto= parseFloat(quantidade7)*parseFloat(preco7)
 document.getElementById("pdf").style.display="block"
document.getElementById("cp7").innerHTML=composto
document.getElementById("pl21").innerHTML=quantidade7
document.getElementById("pl22").innerHTML=preco7
document.getElementById("pl23").innerHTML=composto


}
    

function composto8() {
 document.getElementById("pdf").style.display="block"
var quantidade8=document.getElementById("q8").value
var preco8=document.getElementById("pc8").value
var composto= parseFloat(quantidade8)*parseFloat(preco8)
 document.getElementById("pdf").style.display="block"
document.getElementById("cp8").innerHTML=composto
document.getElementById("pl24").innerHTML=quantidade8
document.getElementById("pl25").innerHTML=preco8
document.getElementById("pl26").innerHTML=composto


}

    

function composto9() {
 document.getElementById("pdf").style.display="block"
var quantidade9=document.getElementById("q9").value
var preco9=document.getElementById("pc9").value
var composto= parseFloat(quantidade9)*parseFloat(preco9)

document.getElementById("cp9").innerHTML=composto
document.getElementById("pl45").innerHTML=quantidade9
document.getElementById("pl46").innerHTML=preco9
document.getElementById("pl47").innerHTML=composto


}



function soma() {

var k= document.getElementById("lk").value

if   ( k=="") {
    alert("campo vazio");
    return;
    
}


else {

document.getElementById("vto").innerHTML=eval(k)
document.getElementById("mtt").innerHTML=eval(k)

 
}
}



function rectangular () {

    var al=document.getElementById("al1").value
    var ac=document.getElementById("ac1").value
    var r1= parseFloat(al)* parseFloat(ac)
    
    document.getElementById("r1").innerHTML=r1
}


function rectangular2 () {

var al=document.getElementById("al2").value
var ac=document.getElementById("ac2").value
var r2= parseFloat(al)* parseFloat(ac)

document.getElementById("r2").innerHTML=r2
}


function rectangular3 () {

var al=document.getElementById("al3").value
var ac=document.getElementById("ac3").value
var r3= parseFloat(al)* parseFloat(ac)

document.getElementById("r3").innerHTML=r3
}


function rectangular4 () {

var al=document.getElementById("al4").value
var ac=document.getElementById("ac4").value
var r4= parseFloat(al)* parseFloat(ac)

document.getElementById("r4").innerHTML=r4
}

function rectangular5 () {

var al=document.getElementById("al5").value
var ac=document.getElementById("ac5").value
var r5= parseFloat(al)* parseFloat(ac)

document.getElementById("r5").innerHTML=r5
}

function triangular () {

var at1=document.getElementById("at1").value
var bt1=document.getElementById("bt1").value
var r6= parseFloat(at1)* parseFloat(bt1)/2

document.getElementById("r6").innerHTML=r6
}

function triangular2 () {

var at2=document.getElementById("at2").value
var bt2=document.getElementById("bt2").value
var r7= parseFloat(at2)* parseFloat(bt2)/2

document.getElementById("r7").innerHTML=r7
}

function triangular3() {

var at3=document.getElementById("at3").value
var bt3=document.getElementById("bt3").value
var r8= parseFloat(at3)* parseFloat(bt3)/2

document.getElementById("r8").innerHTML=r8
}
function triangular4 () {

var at4=document.getElementById("at4").value
var bt4=document.getElementById("bt4").value
var r9= parseFloat(at4)* parseFloat(bt4)/2

document.getElementById("r9").innerHTML=r9
}
function triangular5 () {

var at5=document.getElementById("at5").value
var bt5=document.getElementById("bt5").value
var r10= parseFloat(at5)* parseFloat(bt5)/2

document.getElementById("r10").innerHTML=r10
}


function real(){
    
    var r1=document.getElementById("r1").innerHTML
    var inc=document.getElementById("in1").value
    var real= parseFloat(r1)* parseFloat(inc)

    document.getElementById("ar1").innerHTML=real

}


function real2(){
    
    var r2=document.getElementById("r2").innerHTML
    var inc=document.getElementById("in2").value
    var real2= parseFloat(r2)* parseFloat(inc)
    
    document.getElementById("ar2").innerHTML=real2

}

function real3(){
    
    var r3=document.getElementById("r3").innerHTML
    var inc=document.getElementById("in3").value
    var real3= parseFloat(r3)* parseFloat(inc)
    
    document.getElementById("ar3").innerHTML=real3

}
function real4(){
    
    var r4=document.getElementById("r4").innerHTML
    var inc=document.getElementById("in4").value
    var real4= parseFloat(r4)* parseFloat(inc)
    
    document.getElementById("ar4").innerHTML=real4

}

function real5(){
    
    var r5=document.getElementById("r5").innerHTML
    var inc=document.getElementById("in5").value
    var real5= parseFloat(r5)* parseFloat(inc)
    
    document.getElementById("ar5").innerHTML=real5

}

function real6(){
    
    var r6=document.getElementById("r6").innerHTML
    var inc=document.getElementById("in6").value
    var real6= parseFloat(r6)* parseFloat(inc)
    
    document.getElementById("ar6").innerHTML=real6

}

function real7(){
    
    var r7=document.getElementById("r7").innerHTML
    var inc=document.getElementById("in7").value
    var real7= parseFloat(r7)* parseFloat(inc)
    
    document.getElementById("ar7").innerHTML=real7

}

function real8(){
    
    var r8=document.getElementById("r8").innerHTML
    var inc=document.getElementById("in8").value
    var real8= parseFloat(r8)* parseFloat(inc)
    
    document.getElementById("ar8").innerHTML=real8

}

function real9(){
    
    var r9=document.getElementById("r9").innerHTML
    var inc=document.getElementById("in9").value
    var real9= parseFloat(r9)* parseFloat(inc)
    
    document.getElementById("ar9").innerHTML=real9

}

function real10(){
    
    var r10=document.getElementById("r10").innerHTML
    var inc=document.getElementById("in10").value
    var real10= parseFloat(r10)* parseFloat(inc)
    
    document.getElementById("ar10").innerHTML=real10

}

function soma2() {

var k2= document.getElementById("lk2").value

if   ( k2=="") {
    alert("campo vazio");
    return;
    
}



document.getElementById("centro").innerHTML=document.getElementById("qpc").innerHTML
document.getElementById("resultado14").innerHTML=eval(k2)
document.getElementById("Resultado14").innerHTML=eval(k2)

  document.getElementById("15").style.fontWeight="bold"
  document.getElementById("14").style.fontWeight="normal"

}

function cobertura() {


    var Ac=document.getElementById("qpc1").value
    var coec=document.getElementById("qpc2").value

    qc= parseFloat (Ac)* parseFloat(coec)

    document.getElementById("resultado16").innerHTML=qc
    document.getElementById("Resultado16").innerHTML=qc
    document.getElementById("centro").innerHTML=document.getElementById("tab").innerHTML



    


    
}



// mão de obra

function qtm(){
    
    var cp1=document.getElementById("cp1").value
    var ap1=document.getElementById("ap1").value
    var qp1= parseFloat(cp1)* parseFloat(ap1)

    document.getElementById("qp1").innerHTML=qp1
    document.getElementById("pl27").innerHTML=qp1

}

function qtm2(){
    
    var cp2=document.getElementById("cp2").value
    var ap2=document.getElementById("ap2").value
    var qp2= parseFloat(cp2)* parseFloat(ap2)

    document.getElementById("qp2").innerHTML=qp2
    document.getElementById("pl30").innerHTML=qp2

}

function qtm3(){
    
    var cc1=document.getElementById("cc1").value
    var ca1=document.getElementById("ca1").value
    var cq1= parseFloat(cc1)* parseFloat(ca1)

    document.getElementById("cq1").innerHTML=cq1
    document.getElementById("pl33").innerHTML=cq1

}

function qtm4(){
    
    var cc2=document.getElementById("cc2").value
    var ca2=document.getElementById("ca2").value
    var cq2= parseFloat(cc2)* parseFloat(ca2)

    document.getElementById("cq2").innerHTML=cq2
    document.getElementById("pl36").innerHTML=cq2

}


function qtm5(){
    
    var cf1=document.getElementById("cf1").value
    var af1=document.getElementById("af1").value
    var qf1= parseFloat(cf1)* parseFloat(af1)

    document.getElementById("qf1").innerHTML=qf1
    document.getElementById("pl39").innerHTML=qf1

}

function qtm6(){
    
    var cf2=document.getElementById("cf2").value
    var af2=document.getElementById("af2").value
    var qf2= parseFloat(cf2)* parseFloat(af2)

    document.getElementById("pl42").innerHTML=qf2
    document.getElementById("qf2").innerHTML=qf2

}




function ct(){
    
    var qp1=document.getElementById("qp1").innerHTML
    var pup1=document.getElementById("pup1").value
    var ct1= parseFloat(qp1)* parseFloat(pup1)

    document.getElementById("ct1").innerHTML=ct1
    document.getElementById("pl29").innerHTML=ct1
    document.getElementById("pl28").innerHTML=pup1

}

function ct2(){
    
    var qp2=document.getElementById("qp2").innerHTML
    var pup2=document.getElementById("pup2").value
    var ct2= parseFloat(qp2)* parseFloat(pup2)

    document.getElementById("ct2").innerHTML=ct2
    document.getElementById("pl32").innerHTML=ct2
    document.getElementById("pl31").innerHTML=pup2

}


function ct3(){
    
    var cq1=document.getElementById("cq1").innerHTML
    var puc1=document.getElementById("puc1").value
    var ct3= parseFloat(cq1)* parseFloat(puc1)

    document.getElementById("ct3").innerHTML=ct3
    document.getElementById("pl35").innerHTML=ct3
    document.getElementById("pl34").innerHTML=puc1

}


function ct4(){
    
    var cq2=document.getElementById("cq2").innerHTML
    var puc2=document.getElementById("puc2").value
    var ct4= parseFloat(cq2)* parseFloat(puc2)

    document.getElementById("ct4").innerHTML=ct4
    document.getElementById("pl38").innerHTML=ct4
    document.getElementById("pl37").innerHTML=puc2

}


function ct5(){
    
    var qf1=document.getElementById("qf1").innerHTML
    var puf1=document.getElementById("puf1").value
    var ct5= parseFloat(qf1)* parseFloat(puf1)

    document.getElementById("ct5").innerHTML=ct5
    document.getElementById("pl41").innerHTML=ct5
    document.getElementById("pl40").innerHTML=puf1

}


function ct6(){
    
    var qf2=document.getElementById("qf2").innerHTML
    var puf2=document.getElementById("puf2").value
    var ct6= parseFloat(qf2)* parseFloat(puf2)

    document.getElementById("ct6").innerHTML=ct6
    document.getElementById("pl44").innerHTML=ct6
    document.getElementById("pl43").innerHTML=puf2

}

function cnt(){
    
    var ct1=document.getElementById("ct1").innerHTML
    var nt1=document.getElementById("nt1").value
    var cnt= parseFloat(ct1)* parseFloat(nt1)
 document.getElementById("pdf").style.display="block"
    document.getElementById("cnt1").innerHTML=cnt
    document.getElementById("pl29").innerHTML=cnt

}
 
function cnt2(){
    
    var ct2=document.getElementById("ct2").innerHTML
    var nt2=document.getElementById("nt2").value
    var cnt2= parseFloat(ct2)* parseFloat(nt2)
 document.getElementById("pdf").style.display="block"
    document.getElementById("cnt2").innerHTML=cnt2
    document.getElementById("pl32").innerHTML=cnt2

}
 

function cnt3(){
    
    var ct3=document.getElementById("ct3").innerHTML
    var nt3=document.getElementById("nt3").value
    var cnt3= parseFloat(ct3)* parseFloat(nt3)
     document.getElementById("pdf").style.display="block"

    document.getElementById("cnt3").innerHTML=cnt3
    document.getElementById("pl35").innerHTML=cnt3

}


function cnt4(){
    
    var ct4=document.getElementById("ct4").innerHTML
    var nt4=document.getElementById("nt4").value
    var cnt4= parseFloat(ct4)* parseFloat(nt4)
     document.getElementById("pdf").style.display="block"

    document.getElementById("cnt4").innerHTML=cnt4
    document.getElementById("pl38").innerHTML=cnt4

}


function cnt5(){
    
    var ct5=document.getElementById("ct5").innerHTML
    var nt5=document.getElementById("nt5").value
    var cnt5= parseFloat(ct5)* parseFloat(nt5)
     document.getElementById("pdf").style.display="block"

    document.getElementById("cnt5").innerHTML=cnt5
    document.getElementById("pl41").innerHTML=cnt5

}


function cnt6(){
    
    var ct6=document.getElementById("ct6").innerHTML
    var nt6=document.getElementById("nt6").value
    var cnt6= parseFloat(ct6)* parseFloat(nt6)

     document.getElementById("pdf").style.display="block"

    document.getElementById("cnt6").innerHTML=cnt6
    document.getElementById("pl44").innerHTML=cnt6

}



function soma3() {

var k2= document.getElementById("lk3").value

if   ( k2=="") {
    alert("campo vazio");
    return;
    
}


else {
document.getElementById("kl3").innerHTML=eval(k2)
document.getElementById("mot").innerHTML=eval(k2)
}

}

function custo() {

    document.getElementById("centro").innerHTML=document.getElementById("tab").innerHTML
   

    document.getElementById("17").style.fontWeight="normal"
    document.getElementById("15").style.fontWeight="normal"
    document.getElementById("2").style.fontWeight="normal"
    document.getElementById("3").style.fontWeight="normal"
    document.getElementById("5").style.fontWeight="normal"
    document.getElementById("4").style.fontWeight="normal"
    document.getElementById("7").style.fontWeight="normal"
    document.getElementById("8").style.fontWeight="normal"
    document.getElementById("6").style.fontWeight="normal"
    document.getElementById("9").style.fontWeight="normal"
    document.getElementById("1").style.fontWeight="normal"
    document.getElementById("10").style.fontWeight="normal"
    document.getElementById("11").style.fontWeight="normal"
    document.getElementById("12").style.fontWeight="normal"
    document.getElementById("13").style.fontWeight="normal"
    document.getElementById("14").style.fontWeight="normal"
    document.getElementById("16").style.fontWeight="normal"
   
}


function planilha() {

document.getElementById("centro").innerHTML=document.getElementById("planilha").innerHTML

document.getElementById("17").style.fontWeight="normal"
    document.getElementById("15").style.fontWeight="normal"
    document.getElementById("2").style.fontWeight="normal"
    document.getElementById("3").style.fontWeight="normal"
    document.getElementById("5").style.fontWeight="normal"
    document.getElementById("4").style.fontWeight="normal"
    document.getElementById("7").style.fontWeight="normal"
    document.getElementById("8").style.fontWeight="normal"
    document.getElementById("6").style.fontWeight="normal"
    document.getElementById("9").style.fontWeight="normal"
    document.getElementById("1").style.fontWeight="normal"
    document.getElementById("10").style.fontWeight="normal"
    document.getElementById("11").style.fontWeight="normal"
    document.getElementById("12").style.fontWeight="normal"
    document.getElementById("13").style.fontWeight="normal"
    document.getElementById("14").style.fontWeight="normal"
    document.getElementById("16").style.fontWeight="normal"

}


function maodeobra() {

document.getElementById("centro").innerHTML=document.getElementById("mo").innerHTML

document.getElementById("17").style.fontWeight="normal"
    document.getElementById("15").style.fontWeight="normal"
    document.getElementById("2").style.fontWeight="normal"
    document.getElementById("3").style.fontWeight="normal"
    document.getElementById("5").style.fontWeight="normal"
    document.getElementById("4").style.fontWeight="normal"
    document.getElementById("7").style.fontWeight="normal"
    document.getElementById("8").style.fontWeight="normal"
    document.getElementById("6").style.fontWeight="normal"
    document.getElementById("9").style.fontWeight="normal"
    document.getElementById("1").style.fontWeight="normal"
    document.getElementById("10").style.fontWeight="normal"
    document.getElementById("11").style.fontWeight="normal"
    document.getElementById("12").style.fontWeight="normal"
    document.getElementById("13").style.fontWeight="normal"
    document.getElementById("14").style.fontWeight="normal"
    document.getElementById("16").style.fontWeight="normal"
    
   

}

function pc() {

    document.getElementById("centro").innerHTML=document.getElementById("pct").innerHTML

    document.getElementById("17").style.fontWeight="normal"
    document.getElementById("15").style.fontWeight="normal"
    document.getElementById("2").style.fontWeight="normal"
    document.getElementById("3").style.fontWeight="normal"
    document.getElementById("5").style.fontWeight="normal"
    document.getElementById("4").style.fontWeight="normal"
    document.getElementById("7").style.fontWeight="normal"
    document.getElementById("8").style.fontWeight="normal"
    document.getElementById("6").style.fontWeight="normal"
    document.getElementById("9").style.fontWeight="normal"
    document.getElementById("1").style.fontWeight="normal"
    document.getElementById("10").style.fontWeight="normal"
    document.getElementById("11").style.fontWeight="normal"
    document.getElementById("12").style.fontWeight="normal"
    document.getElementById("13").style.fontWeight="normal"
    document.getElementById("14").style.fontWeight="normal"
    document.getElementById("16").style.fontWeight="normal"

    
}

function somapc() {


    var mt=document.getElementById("mtt").innerHTML
    var mo=document.getElementById("mot").innerHTML
    if (mo=="" || mt=="" || mt=="00" || mo=="00") {

        alert("campo vazio");
        return;
    }

    

    pct= parseFloat(mt)  + parseFloat(mo)
    document.getElementById("kl").innerHTML=pct
    document.getElementById("centro").innerHTML=document.getElementById("planilha").innerHTML

    
} 

function tabela() {

    document.getElementById("centro").innerHTML=document.getElementById("des").innerHTML
    
   
   
    
}


function tabela1() {

    document.getElementById("centro").innerHTML=document.getElementById("descrição").innerHTML
    
   
   
    
}


function factor() {

document.getElementById("centro").innerHTML=document.getElementById("factor").innerHTML

}


function contato() {

    document.getElementById("centro").innerHTML=document.getElementById("contato").innerHTML
    
    }

    function politica() {

        document.getElementById("centro").innerHTML=document.getElementById("poli").innerHTML
        
        }
        
    function termos() {

        document.getElementById("centro").innerHTML=document.getElementById("termos").innerHTML
        
        }

        function apagar() {



            document.getElementById("centro").innerHTML= document.getElementById("area0").innerHTML;


            document.getElementById("Re").style.display="none"
            document.getElementById("re").style.display="none"
          


            
    document.getElementById("14").style.fontWeight="normal"
    document.getElementById("2").style.fontWeight="normal"
    document.getElementById("3").style.fontWeight="normal"
    document.getElementById("5").style.fontWeight="normal"
    document.getElementById("4").style.fontWeight="normal"
    document.getElementById("7").style.fontWeight="normal"
    document.getElementById("8").style.fontWeight="normal"
    document.getElementById("6").style.fontWeight="normal"
    document.getElementById("9").style.fontWeight="normal"
    document.getElementById("1").style.fontWeight="normal"
    document.getElementById("10").style.fontWeight="normal"
    document.getElementById("11").style.fontWeight="normal"
    document.getElementById("12").style.fontWeight="normal"
    document.getElementById("13").style.fontWeight="normal"
    document.getElementById("15").style.fontWeight="normal"
    document.getElementById("16").style.fontWeight="normal"
    document.getElementById("17").style.fontWeight="normal"
    document.getElementById("18").style.fontWeight="normal"
            document.getElementById("Resultado").innerHTML="";
            document.getElementById("Resultado1").innerHTML="";
            document.getElementById("Resultado2").innerHTML="";
            document.getElementById("Resultado3").innerHTML="";
            document.getElementById("Resultado4").innerHTML="";
            document.getElementById("Resultado5").innerHTML="";
            document.getElementById("Resultado6").innerHTML="";
            document.getElementById("Resultado7").innerHTML="";
            document.getElementById("Resultado8").innerHTML="";
            document.getElementById("Resultado9").innerHTML="";
            document.getElementById("Resultado10").innerHTML="";
            document.getElementById("Resultado11").innerHTML="";
            document.getElementById("Resultado12").innerHTML="";
            document.getElementById("Resultado13").innerHTML="";
            document.getElementById("Resultado14").innerHTML="";
            document.getElementById("Resultado15").innerHTML="";
            document.getElementById("Resultado16").innerHTML="";
            document.getElementById("Resultado17").innerHTML="";
            document.getElementById("Resultado18").innerHTML="";
            document.getElementById("Resultado19").innerHTML="";
            document.getElementById("Resultado20").innerHTML="";
            document.getElementById("Resultado21").innerHTML="";
            

            document.getElementById("resultado").innerHTML="";
            document.getElementById("resultado1").innerHTML="";
            document.getElementById("resultado2").innerHTML="";
            document.getElementById("resultado3").innerHTML="";
            document.getElementById("resultado4").innerHTML="";
            document.getElementById("resultado5").innerHTML="";
            document.getElementById("resultado6").innerHTML="";
            document.getElementById("resultado7").innerHTML="";
            document.getElementById("resultado8").innerHTML="";
            document.getElementById("resultado9").innerHTML="";
            document.getElementById("resultado10").innerHTML="";
            document.getElementById("resultado11").innerHTML="";
            document.getElementById("resultado12").innerHTML="";
            document.getElementById("resultado13").innerHTML="";
            document.getElementById("resultado14").innerHTML="";
            document.getElementById("resultado15").innerHTML="";
            document.getElementById("resultado16").innerHTML="";
            document.getElementById("resultado17").innerHTML="";
            document.getElementById("resultado18").innerHTML="";
            document.getElementById("resultado19").innerHTML="";
            document.getElementById("resultado20").innerHTML="";
            document.getElementById("resultado21").innerHTML="";
            
            
        }


    // abrir e fechar o menu
    
  
    function toggleMenu(event) {
        event.preventDefault();
        let menu = document.getElementById("filho");
        menu.style.display = menu.style.display === "block" ? "none" : "block";
    }

    function selecionarItem() { 
        document.getElementById("filho").style.display = "none";
    }

    document.addEventListener("click", function(event) {
        let menu = document.getElementById("filho");
        let button = document.querySelector(".dropbtn");

        if (menu.style.display === "block" && !menu.contains(event.target) && !button.contains(event.target)) {
            menu.style.display = "none";
        }
    });  

    
        // abrir menu se clicar 

    document.addEventListener("DOMContentLoaded", function() {
        var toggleButton = document.getElementById("toggleMenu");
        var menu = document.getElementById("filho2");
    
        toggleButton.addEventListener("click", function(event) {
            event.preventDefault();
            menu.style.display = (menu.style.display === "none" || menu.style.display === "") ? "block" : "none";
        });
    
        // Fecha o menu se clicar fora dele
        document.addEventListener("click", function(event) {
            if (!toggleButton.contains(event.target) && !menu.contains(event.target)) {
                menu.style.display = "none";
            }
        });
    });

       // gerar pdf

    function gerarPDF() {
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();
         
        doc.text("Planilha orçamental", 10, 10);
        
        doc.autoTable({ 
            html: '#tama', 
            startY: 20 
        });

        doc.save("Planilha-orçamental.pdf");
    }

    // Ao carregar a página, restaura os valores dos inputs
    window.addEventListener('load', () => {
        // Recupera os dados armazenados para cada input
        const inputs = document.querySelectorAll('input');
        inputs.forEach(input => {
            const valor = localStorage.getItem('input_' + input.id);
            if (valor) input.value = valor; // Carrega o valor salvo no input
    
            // Salva o valor do input em localStorage sempre que houver mudança
            input.addEventListener('input', () => {
                localStorage.setItem('input_' + input.id, input.value);
            });
        });
    });



 
   
