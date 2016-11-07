
var data=[{"english":"computer","chinese":"電腦","pinyin":"dian nao"}
,{"english":"I","chinese":"我","pinyin":"wo"},
{"english":"weather","chinese":"天氣","pinyin":"tianqi"}]

var i=0

function tryme() {i=Math.floor(Math.random()*data.lenght);
document.getElementByID("chinese").innerHTML=data[i]['chinese'];
document.getElementByID("english").innerHTML=data[i]['reveal'];
document.getElementByID("pinyin").innerHTML=data[i]['reveal']}

function reveal(mydiv) {document.getElementById(mydiv).innerHTML=data[i][mydiv]}

