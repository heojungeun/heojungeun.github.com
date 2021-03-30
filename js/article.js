import data from './data.js';
console.log(data);
var articles = document.createElement('div'); articles.className = "c-container";
for(var key in data){
    var article = data[key];
    var $arti = document.createElement('article'); $arti.className = "card"; $arti.className += " app";
    var $ch = document.createElement('div');       $ch.className = "card-header";
    var $a = document.createElement('a');          $a.href = article.href; $a.target = "_blank";
    var $img = document.createElement('img');      $img.className = "card-img"; $img.src = article.img_src; $img.alt = "image";
    $ch.appendChild($a).appendChild($img);

    var $cc = document.createElement('div');       $cc.className = "card-content";
    $cc.innerHTML = "<h3>" + article.title + "</h3>" + "<p>" + article.description + "</p>";
    $arti.appendChild($ch); $arti.appendChild($cc);
    articles.appendChild($arti);
}

var $pageApp = document.getElementById('page_app_content');
$pageApp.appendChild(articles);