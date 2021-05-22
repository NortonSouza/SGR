var xmlhttp;

function SalvarReuniao(){
    var url_post = url_Api + rota_reuniao;

    var nome = document.getElementById("nomeReuniao").value;
    var dataReuniao = document.getElementById("dataReuniao").value;
    var hora = document.getElementById("horaReuniao").value;
    var sala = document.getElementById("salaReuniao").value;
    var equipamento = document.getElementById("equipamentoReuniao").value;

    var data = {
        nome: nome,
        data: dataReuniao,
        hora: hora,
        sala: sala,
        equipamento: equipamento
    };

    console.log(data);
    console.log(url_post);

    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = callbackSalvarReuniao;

    xmlhttp.open("POST", url_post);
    xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xmlhttp.send(JSON.stringify(data)); //?? Não tenho certeza da chamada
    xmlhttp.send();
};

function callbackSalvarReuniao() {
    if (xmlhttp.readyState == 4){
        if(xmlhttp.status == 401 || xmlhttp.status == 403){
            window.location.href = "index.html";
        }else if(xmlhttp.status == 200){
            var data = JSON.parse(xmlhttp.responseText);

            lista_movie = "";
            for (i = 0; i < data.results.length; i++) {
                item = "<div><h1>"+data.results[i].original_title+"</h1><img src='"+url_image+data.results[i].backdrop_path+"'/><h4>"+data.results[i].overview+"</h4>"
                lista_movie += item + "<br>";
            }
            document.getElementById("saida").innerHTML = lista_movie;
        }
    }
}