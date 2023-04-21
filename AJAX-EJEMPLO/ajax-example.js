function loadDoc() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    const newElement = document.createElement("div");
    newElement.innerHTML = this.responseText; 
    document.getElementById("anotherElementId").appendChild(newElement);
  }
  xhttp.open("GET", "ajax.txt");
  xhttp.send();
}

function loadImg() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function(){
    var imgURL = window.webkitURL.createObjectURL(this.response)
    document.getElementById("demo2").innerHTML = `<img src="${imgURL}" style="width:200px; height:auto;">`;
  }
  xhttp.open("GET", "DadyLongSock.png");
  xhttp.responseType = 'blob'
  xhttp.send();
}

function loadHTML() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    document.getElementById("demo3").innerHTML =
    this.responseText;
  }
  xhttp.open("GET", "index.html");
  xhttp.send();
}
