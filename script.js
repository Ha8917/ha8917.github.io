var button = document.getElementById("enter");
var input = document.getElementById("user-input");
var ul = document.querySelector("ul");

button.addEventListener("click", function() {
    if (input.value > 0) {
    }
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
})