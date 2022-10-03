var cube;
var num;

document.getElementById("buttonLmao").onclick = function(){

    num = parseInt(document.getElementById("textLmao").value);
    cube = num * num * num;
    document.getElementById("resultLmao").innerHTML = cube;

}
