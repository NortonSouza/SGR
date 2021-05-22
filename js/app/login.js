function login() {
    var senha = document.getElementById("password").value;
    var usuario = document.getElementById("username").value;
    
    //alterar para chamada api
    var usuarioSenhaValidos = usuario === "joao" && senha === "joao";

    if(usuarioSenhaValidos == true){
        window.location.href = "Home.html";
    }
    else{
        alert("Usuario/Senha invalidos")
    }
  };