function callbackAfterPost() {
    let name;
    makeAjaxGetRequest("../api-node/connectedName", function (data) {
        name = JSON.parse(data);
    } )
    document.getElementById("textSortie").innerHTML = "<h2>Bonjour " + name + " ... Vous êtes bien matinal </h2>"
}

function formulaire() {
    let eltName = document.getElementById("nameInput").value;
    let nameJSON = JSON.stringify({"name": eltName });
    console.log("ajax_node.js" + nameJSON)
    makeAjaxPostRequest("../api-node/name", nameJSON, callbackAfterPost);
}


