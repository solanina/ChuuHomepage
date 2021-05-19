var date = new Date();
var horas = date.getHours();


function timer() {

if (horas >= 6 && horas < 12){
  document.getElementsByTagName("h1")[0].innerHTML = "좋은 아침~";
  document.getElementsByTagName("h1")[0].style.color = "#ff7b54";
  document.getElementsByTagName("h1")[0].style.textShadow = "2px 2px #ffd56b";
  document.getElementsByTagName("body")[0].style.backgroundColor = "#939b62";
  document.querySelectorAll("img")[0].src = "image/chuu.png";


  var elements = document.querySelectorAll(".link");
  for (var i = 0; i < elements.length; i++) {
      elements[i].style.color = "#ffd56b";
  }

  var elementos = document.querySelectorAll(".paragraph");
  for (var i = 0; i < elementos.length; i++) {
      elementos[i].style.color = "#ff7b54";
  }


}

if (horas >= 12 && horas < 20) {
document.getElementsByTagName("h1")[0].innerHTML = "점심 드셨어요~";
document.getElementsByTagName("h1")[0].style.color = "#ead3cb";
document.getElementsByTagName("h1")[0].style.textShadow = "2px 2px #bdc7c9";
document.getElementsByTagName("body")[0].style.backgroundColor = "#845460";
document.querySelectorAll("img")[0].src = "image/chuu3.png";


var elements = document.querySelectorAll(".link");
for (var i = 0; i < elements.length; i++) {
    elements[i].style.color = "#2b4f60";
}

var elementos = document.querySelectorAll(".paragraph");
for (var i = 0; i < elementos.length; i++) {
    elementos[i].style.color = "#bdc7c9";
}



}

if (horas > 20) {
document.getElementsByTagName("h1")[0].innerHTML = "안녕히 주무세요~";
document.getElementsByTagName("h1")[0].style.color = "#f3bda1";
document.getElementsByTagName("h1")[0].style.textShadow = "2px 2px #687980";
document.getElementsByTagName("body")[0].style.backgroundColor = "#02475e";
document.querySelectorAll("img")[0].src = "image/chuu2.png";


var elements = document.querySelectorAll(".link");
for (var i = 0; i < elements.length; i++) {
    elements[i].style.color = "#f3bda1";
}

var elementos = document.querySelectorAll(".paragraph");
for (var i = 0; i < elementos.length; i++) {
    elementos[i].style.color = "#687980";
}

}

}


timer();
