function CriarUsuario() {    
    var url_post = url_Api + rota_usuario;

    var loginUsuario = document.getElementById("loginUsuario").value;
    var senhaUsuario = document.getElementById("senhaUsuario").value;
    var confirmarSenhaUsuario = document.getElementById("confirmarSenhaUsuario").value;

    if(loginUsuario === "" || senhaUsuario === "" || confirmarSenhaUsuario === "")
        alert("O login/senha deve ser informado")
    else{
        if(ValidaSenha(senhaUsuario, confirmarSenhaUsuario) == true){  
            var request = new XMLHttpRequest();

            request.open('POST', url_post, true);

            request.setRequestHeader('Content-Type', 'application/json');        
            
            request.onreadystatechange = function () {
                if (this.readyState === 4) {                
                    if(request.status === 200){                    
                        window.location.href = loginPage; 
                    } else{
                        alert('Não foi possivel criar o usuario');
                    }
                }
            };
            
            request.send(JSON.stringify({"login": loginUsuario, "senha": senhaUsuario}));
        }
    }
}

function ValidaSenha(senhaUsuario, confirmarSenhaUsuario){
    if(senhaUsuario.length < 4)
    {
        alert('A senha deve conter pelo menos 4 caracteres');
        return false;
    }

    if(senhaUsuario.length > 20)
    {
        alert('A senha deve conter no maximo 20 caracteres');
        return false;
    }

    if(confirmarSenhaUsuario !== senhaUsuario)
    {
        alert('As senhas informadas são diferentes');
        return false;
    }
    return true;
}