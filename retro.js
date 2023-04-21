function dis(){
$(document).ready(function() {
    $("#dis").ready(function() {
      window.location.href = "https://discord.gg/BbKfafXrwy";
    });
});
}

function loadImg() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function(){
      var imgURL = window.webkitURL.createObjectURL(this.response)
      document.getElementById("img").innerHTML = `<img src="${imgURL}" class= "img-fluid">`;
    }
    xhttp.open("GET", "momo.jpeg");
    xhttp.responseType = 'blob'
    xhttp.send();
}