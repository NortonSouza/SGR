var xmlhttp;

function SalvarEquipamento(){
    var url_post = url_Api + rota_equipamento;

    var nome = document.getElementById("nomeEquipamento").value;
    var tipo = document.getElementById("tipoEquipamento").value;
    var descricao = document.getElementById("descricaoEquipamento").value;

    var data = {
        nome: nome,
        tipo: tipo,
        descricao: descricao
    };

    console.log(data);
    console.log(url_post);

    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = callbackSalvarEquipamento;

    xmlhttp.open("POST", url_post);
    xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xmlhttp.send(JSON.stringify(data)); //?? Não tenho certeza da chamada
    xmlhttp.send();
};

function callbackSalvarEquipamento() {
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