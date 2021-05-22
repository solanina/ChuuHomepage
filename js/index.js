function timer() {
  var date = new Date();
    var hora = date.getHours();
////////////////////////////*****************MAÑANA***************************

if (hora >= 6 && hora < 12) {
  document.getElementsByTagName("h1")[0].innerHTML = "좋은 아침~";
  document.getElementsByTagName("h1")[0].style.color = "#ff7b54";
  document.getElementsByTagName("h1")[0].style.textShadow = "2px 2px #ffd56b";
  document.getElementsByTagName("body")[0].style.backgroundColor = "#939b62";
  document.querySelectorAll("img")[0].src = "image/chuu.png";
  document.querySelectorAll("link")[5].href = "image/favicon/naranja.png";
  document.querySelectorAll("title")[0].innerHTML = "좋은 아침~";

  var elements = document.querySelectorAll(".link");
  for (var i = 0; i < elements.length; i++) {
      elements[i].style.color = "#ffd56b";
  }
  var elementos = document.querySelectorAll(".paragraph");
  for (var i = 0; i < elementos.length; i++) {
      elementos[i].style.color = "#ff7b54";
  }
}
///////////////////////////*****************TARDE***************************

if (hora >= 12 && hora < 19) {
document.getElementsByTagName("h1")[0].innerHTML = "점심 드셨어요~";
document.getElementsByTagName("h1")[0].style.color = "#ead3cb";
document.getElementsByTagName("h1")[0].style.textShadow = "2px 2px #bdc7c9";
document.getElementsByTagName("body")[0].style.backgroundColor = "#845460";
document.querySelectorAll("img")[0].src = "image/chuu3.png";
document.querySelectorAll("link")[5].href = "image/favicon/riceball.png";
document.querySelectorAll("title")[0].innerHTML = "점심 드셨어요~";

var elements = document.querySelectorAll(".link");
for (var i = 0; i < elements.length; i++) {
    elements[i].style.color = "#2b4f60";
}

var elementos = document.querySelectorAll(".paragraph");
for (var i = 0; i < elementos.length; i++) {
    elementos[i].style.color = "#bdc7c9";
}
}


////////////////////////*****************NOCHE***************************

 if (hora >= 19 && hora <= 23 || hora >= 0 && hora < 6){

document.getElementsByTagName("h1")[0].innerHTML = "안녕히 주무세요~";
document.getElementsByTagName("h1")[0].style.color = "#f3bda1";
document.getElementsByTagName("h1")[0].style.textShadow = "2px 2px #687980";
document.getElementsByTagName("body")[0].style.backgroundColor = "#02475e";
document.querySelectorAll("img")[0].src = "image/chuu2.png";
document.querySelectorAll("link")[5].href = "image/favicon/estrella.png";
document.querySelectorAll("title")[0].innerHTML = "안녕히 주무세요~";


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
