function login() {
    var url_post = url_Api + rota_autenticacao;
    var senha = document.getElementById("password").value;
    var usuario = document.getElementById("username").value;
    
    var request = new XMLHttpRequest();

    request.open('POST', url_post, true);

    request.setRequestHeader('Content-Type', 'application/json');        
    
    request.onreadystatechange = function () {        
        if (this.readyState === 4) {
            if(request.status === 200){                
                var obj = JSON.parse(this.responseText)                
                sessionStorage.setItem("key", obj.guid);                                
                window.location.href = "Home.html";
            }else{
                console.log("Erro");
                console.log(url_post);
                console.log({"login": usuario, "senha": senha});
                console.log(request);                
                alert("Usuario/Senha invalidos")
            }
        }
    };
    
    request.send(JSON.stringify({login: usuario, senha: senha}));
};