function RegistrarUsuario() {  
    var pw = document.getElementById("pswd").value;  
    //check empty password field  
    if(pw == "") {  
       document.getElementById("message").innerHTML = "**No dejes espacio vacio!";  
       return false;  
    }  
     
   //minimum password length validation  
    if(pw.length < 8) {  
       document.getElementById("message").innerHTML = "**Contraseña debe ser de 8 caracteres";  
       return false;  
    } 
    
    else {  
       alert("Password is correct");  
    }  
  }  
