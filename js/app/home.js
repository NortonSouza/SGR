var url_Api = "https://image.tmdb.org/t/p/w200/";
var rota_sala = "api/sala/";
var rota_equipamento = "api/equipamento/";
var rota_reuniao = "api/reuniao/";
var idsessao = "";

function ValidaSessao() {    
    idsessao = sessionStorage.getItem("key");
    if (idsessao == "")
        window.location.href = "login.html";
    else
    {
        var request = new XMLHttpRequest();

        request.open('GET', 'https://localhost:44378/api/Sessao/' + idsessao, true);

        request.setRequestHeader('Content-Type', 'application/json');        
        
        request.onreadystatechange = function () {
            if (this.readyState === 4) {                
                if(request.status !== 200){                    
                    window.location.href = "login.html"; 
                }
            }
        };
        
        request.send(); 
    }
}