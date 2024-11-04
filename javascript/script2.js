function guardaDados() {
    // alert("Função...");

    // recuperar os dados do formulário 
    var campoCor = document.getElementById("inputCor").value; 
    var campoSeccao = document.getElementById("inputSeccao").value; 
    var campoNumero = document.getElementById("inputNumero").value;

    // ou.., atraves de jQuery 
    //var campoCor = $("#inputCor").val(); 
    //var campoSeccao = $("#inputSeccao").val(); 
    //var campoNumero = $("#inputNumero").val(); 
    //console.log(campoCor); 
    //console.log(campoSeccao); 
    //console.log(campoNumero); duvida: só serve para imprimir na consola?

    if (campoCor == "..." || campoSeccao == "" || campoNumero == "") {
        alert("Dados Inválidos!"); 
       return; // aborta a função
    }   
    var campoData = new Date();
    // console.log(campoData); 
    // Guardar os dados no LocalStorage
    localStorage.setItem("Estaciona_Data", campoData); 
    localStorage.setItem("Estaciona_Cor", campoCor); 
    localStorage.setItem("Estaciona_Seccao", campoSeccao); 
    localStorage.setItem("Estaciona_Numero", campoNumero);

    // alert("Lugar registado!"); Não entendi bem este código
    var MensagemSucesso = new bootstrap.Modal(document.getElementById('MensagemModal'), { 
       keyboard: false
    }) 
    MensagemSucesso.show();

    document.getElementById("inputCor").value = ""; 
    document.getElementById("inputSeccao").value = ""; 
    document.getElementById("inputNumero").value = "";
    //guardaDados
}

function mostraDados() {
    // recuperar dados do localStorage 
    var campoData = localStorage.getItem("Estaciona_Data"); 
    var campoCor = localStorage.getItem("Estaciona_Cor"); 
    var campoSeccao = localStorage.getItem("Estaciona_Seccao"); 
    var campoNumero = localStorage.getItem("Estaciona_Numero"); 

    // console.log(campoData); 
    // console.log(campoCor); 
    // console.log(campoSeccao); 
   // console.log(campoNumero);

   var textoDados = ""; 
   textoDados = "<p>" + campoData + "</p>" + 
   "<p>" +"Cor: "+ campoCor + "</p>" + 
   "<p>" + "Secção: " + campoSeccao + "</p>" +
    "<p>" + "Número: " + campoNumero + "</p>";

    document.getElementById("divDados").innerHTML = textoDados;

    // mudar a cor de fundo divDados 
    switch (campoCor) { 
       case "Amarelo": 
       document.getElementById("divDados").style.backgroundColor = "yellow"; 
       break; 
       case "Vermelho": 
       document.getElementById("divDados").style.backgroundColor = "red"; 
       document.getElementById("divDados").style.color = "white"; 
       break; 
       case "Verde": 
       document.getElementById("divDados").style.backgroundColor = "green"; 
       document.getElementById("divDados").style.color = "white"; 
       break; 
       case "Azul": document.getElementById("divDados").style.backgroundColor = "blue"; 
       document.getElementById("divDados").style.color = "white"; 
       break; 
       case "Laranja": 
       document.getElementById("divDados").style.backgroundColor = "orange"; 
       break; 

       }
}

// retrieve the Key "Park_ID" stored in localStorage 
var fieldID = localStorage.getItem("Park_ID"); 
var fieldColor = campoCor
var fieldDate = campoData
var fieldNumber = campoNumero
var fieldSection = campoSeccao

if (isNaN(fieldID) || fieldID == null) //null
{ 
  fieldID = 1;
} else {
   fieldID = parseInt(fieldID) + 1; 
}
var fieldDate = new Date(); 
// console.log(campoData); 
// Strore data on LocalStorage 
localStorage.setItem("Park_Date_" + fieldID, fieldDate);
localStorage.setItem("Park_Color_" + fieldID, fieldColor); 
localStorage.setItem("Park_Section_" + fieldID, fieldSection); 
localStorage.setItem("Park_Number_" + fieldID, fieldNumber); 
// update Park_ID 
localStorage.setItem("Park_ID", fieldID);

function showHistoric() {
  var fieldID = localStorage.getItem("Park_ID"); 
  if (isNaN(fieldID) || fieldID == null) //null 
  { 
     alert("Sem registo de lugares"); 
     return; 
  }
  var TextHTML = ""; for (var i = fieldID; i >= 1; i--) {
     var fieldDate = localStorage.getItem("Park_Date_" + i); 
     var fieldColor = localStorage.getItem("Park_Color_" + i); 
     var fieldSeccao = localStorage.getItem("Park_Section_" + i); 
     var fieldNumero = localStorage.getItem("Park_Number_" + i); 
     var colorBack, colorFace; 

     switch (fieldColor) {
        case "Yellow": 
        colorBack = "yellow"; 
        colorFace = "black"; 
        break;

        case "Red": 
        colorBack = "red"; 
        colorFace = "white"; 
        break; 
        
        case "Green": 
        colorBack = "green"; 
        colorFace = "white"; 
        break; 
        
        case "Blue": 
        colorBack = "blue"; 
        colorFace = "white"; 
        break;
        
        case "Orange": 
        colorBack = "orange"; 
        colorFace = "black"; 
        break; 
     }  

     TextHTML += "<div style='background-color:" + colorBack + "; color:" + colorFace + "'>"; 
     TextHTML += "<p style='font-size:8pt;'>" + fieldDate + "</p>"; 
     TextHTML += "<p>" + fieldSeccao + " - " + fieldNumero + "</p>"; 
     TextHTML += "</div>"; 
  }
  document.getElementById("divHistoric").innerHTML = TextHTML; 
}
showHistoric()