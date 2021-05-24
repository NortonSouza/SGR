function login() {
    var senha = document.getElementById("password").value;
    var usuario = document.getElementById("username").value;
    
    var request = new XMLHttpRequest();

    request.open('POST', 'https://localhost:44378/api/Usuario/CreateSessao', true);

    request.setRequestHeader('Content-Type', 'application/json');        
    
    request.onreadystatechange = function () {
        if (this.readyState === 4) {
            if(request.status === 200){                
                var obj = JSON.parse(this.responseText)                
                sessionStorage.setItem("key", obj.guid);                                
                window.location.href = "Home.html";
            }else{
                console.log("Erro");
                console.log(request);
                alert("Usuario/Senha invalidos")
            }
        }
    };
    
    request.send(JSON.stringify({"login": usuario, "senha": senha}));
  };