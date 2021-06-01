var url_Api = "https://webapideploy-tecweb.azurewebsites.net/";
var rota_sala = "api/sala/";
var rota_equipamento = "api/equipamento/";
var rota_reuniao = "api/reuniao/";
var rota_autenticacao = "api/Usuario/CreateSessao/";
var rota_sessao = "api/Sessao/";
var rota_usuario = "api/Usuario/";
var loginPage = "login.html";

function ValidaSessao() {    
    var url_get = url_Api + rota_sessao;
    var idsessao = sessionStorage.getItem("key");
    if (idsessao == "")
        window.location.href = loginPage;
    else
    {
        var request = new XMLHttpRequest();

        request.open('GET', url_get + idsessao, true);

        request.setRequestHeader('Content-Type', 'application/json');        
        
        request.onreadystatechange = function () {
            if (this.readyState === 4) {                
                if(request.status !== 200){                    
                    window.location.href = loginPage; 
                }
            }
        };
        
        request.send(); 
    }
}