function addTopic() {

    var node = document.createElement("DIV");
    var textnode = document.createTextNode("Test");
    node.appendChild(textnode);
    node.className = "newChunk";

    node.innerHTML = 'Chunk Name: <input type="text"></input></br></br> Weight: <input type="text"></input>';

    document.getElementById("new-fields").appendChild(node);
}

function submitForm() {

    

}
