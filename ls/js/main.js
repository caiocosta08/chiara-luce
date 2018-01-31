//let url = "https://chef-em-casa.herokuapp.com/json/dados.json"
let url = "https://pokeapi.co/api/v2/pokemon/1"

$(document).ready(function(){

    $.getJSON(url)
    .done(function (response){
            document.getElementById('teste').innerHTML = '<h4>' + response +  ' </h4>'
    })
})
/*











    $("btnCompare").click(function(){
//        $(this).button('toggle');
        document.getElementById('teste').innerHTML = "<h4>deu certo</h4>"
        alert("adsad");
    });

    function searchGit(){
        $.getJSON("https://api.github.com/repos/caiocosta08/chiara-luce")
        .done(function (response){
                document.getElementById('teste').innerHTML = "<h4>deu certo</h4>"
        })
    }
*/
