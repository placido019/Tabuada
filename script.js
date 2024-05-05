function gerarTabuada() {
    document.getElementById("msg").style.display = "none";
    document.getElementById("tabuada").innerHTML = "";
    let num = parseInt(document.getElementById("numInput").value);

    if(isNaN(num)) {
    alert("por favor, insira um numero valido")
return;
}

document.getElementById("tabuada").style.display = "block";
let tabuadaHTML = "<h3>tabuada do " + num + "</h3>";
for (let i = 1; i <= 10; i++ ) {
    tabuadaHTML += num + "x" + i + " = " + (num * i) + "<br>";
}
document.getElementById("tabuada").innerHTML = tabuadaHTML
}