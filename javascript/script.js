function guardaDados() {
   var campoCor = document.getElementById("inputCor").value; 
   var campoSeccao = document.getElementById("inputSeccao").value; 
   var campoNumero = document.getElementById("inputNumero").value;

   if (campoCor == "..." || campoSeccao == "..." || campoNumero == "") {
       alert("Dados Inválidos!"); 
       return;
   }   

   var campoData = new Date().toLocaleString();
   
   var fieldID = localStorage.getItem("Park_ID");
   if (isNaN(fieldID) || fieldID == null) {
       fieldID = 1;
   } else {
       fieldID = parseInt(fieldID) + 1;
   }

   localStorage.setItem("Park_Date_" + fieldID, campoData);
   localStorage.setItem("Park_Color_" + fieldID, campoCor); 
   localStorage.setItem("Park_Section_" + fieldID, campoSeccao); 
   localStorage.setItem("Park_Number_" + fieldID, campoNumero); 
   localStorage.setItem("Park_ID", fieldID);

   var MensagemSucesso = new bootstrap.Modal(document.getElementById('MensagemModal'), { 
       keyboard: false
   }) 
   MensagemSucesso.show();

   document.getElementById("inputCor").value = "..."; 
   document.getElementById("inputSeccao").value = "..."; 
   document.getElementById("inputNumero").value = "";
}

function mostraDados() {
   var fieldID = localStorage.getItem("Park_ID"); 
   if (isNaN(fieldID) || fieldID == null) {
       alert("Sem registo de lugares");
       return;
   }

   var campoData = localStorage.getItem("Park_Date_" + fieldID); 
   var campoCor = localStorage.getItem("Park_Color_" + fieldID); 
   var campoSeccao = localStorage.getItem("Park_Section_" + fieldID); 
   var campoNumero = localStorage.getItem("Park_Number_" + fieldID); 

   var textoDados = "<p>" + campoData + "</p>" + 
   "<p>" +"Cor: "+ campoCor + "</p>" + 
   "<p>" + "Secção: " + campoSeccao + "</p>" +
   "<p>" + "Número: " + campoNumero + "</p>";

   document.getElementById("divDados").innerHTML = textoDados;

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
       case "Azul": 
           document.getElementById("divDados").style.backgroundColor = "blue"; 
           document.getElementById("divDados").style.color = "white"; 
           break; 
       case "Laranja": 
           document.getElementById("divDados").style.backgroundColor = "orange"; 
           break; 
   }
}

function showHistoric() {
   var fieldID = localStorage.getItem("Park_ID"); 
   if (isNaN(fieldID) || fieldID == null) {
       alert("Sem registo de lugares"); 
       return; 
   }

   var TextHTML = ""; 
   for (var i = fieldID; i >= 1; i--) {
       var fieldDate = localStorage.getItem("Park_Date_" + i); 
       var fieldColor = localStorage.getItem("Park_Color_" + i); 
       var fieldSeccao = localStorage.getItem("Park_Section_" + i); 
       var fieldNumero = localStorage.getItem("Park_Number_" + i); 

       var colorBack, colorFace; 
       switch (fieldColor) {
           case "Amarelo": 
               colorBack = "yellow"; 
               colorFace = "black"; 
               break;
           case "Vermelho": 
               colorBack = "red"; 
               colorFace = "white"; 
               break; 
           case "Verde": 
               colorBack = "green"; 
               colorFace = "white"; 
               break; 
           case "Azul": 
               colorBack = "blue"; 
               colorFace = "white"; 
               break;
           case "Laranja": 
               colorBack = "orange"; 
               colorFace = "black"; 
               break; 
       }

       TextHTML += "<div style='background-color:" + colorBack + "; color:" + colorFace + "'>"; 
       TextHTML += "<p style='font-size:8pt;'>" + fieldDate + "</p>"; 
       TextHTML += "<p>" + fieldSeccao + " - " + fieldNumero + "</p>"; 
       TextHTML += "<button onclick='deletarRegistro(" + i + ")' class='btn btn-danger btn-sm'>Excluir</button>";
       TextHTML += "</div>"; 
   }
   document.getElementById("divHistoric").innerHTML = TextHTML; 
}

function deletarRegistro(id) {
   localStorage.removeItem("Park_Date_" + id);
   localStorage.removeItem("Park_Color_" + id);
   localStorage.removeItem("Park_Section_" + id);
   localStorage.removeItem("Park_Number_" + id);
   alert("Registro " + id + " excluído!");
   showHistoric();
}

function limparHistorico() {
   var fieldID = localStorage.getItem("Park_ID");
   if (isNaN(fieldID) || fieldID == null) {
       alert("Sem registo de lugares"); 
       return; 
   }

   for (var i = fieldID; i >= 1; i--) {
       localStorage.removeItem("Park_Date_" + i);
       localStorage.removeItem("Park_Color_" + i);
       localStorage.removeItem("Park_Section_" + i);
       localStorage.removeItem("Park_Number_" + i);
   }
   localStorage.removeItem("Park_ID");
   alert("Histórico limpo!");
   document.getElementById("divHistoric").innerHTML = "";
}
