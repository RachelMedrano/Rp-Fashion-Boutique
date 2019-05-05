function cambiarImg(event){
    event= event || window.event;
    var targetElement= event.target || event.srcElement;
    if(targetElement.tagName=='IMG'){
        document.getElementById('img-principal').src = targetElement.getAttribute('src');
    }
}
