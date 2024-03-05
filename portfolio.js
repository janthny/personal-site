var nodeList = document.querySelectorAll(".button");

for(var i = 0; i < nodeList.length; i++){
    nodeList[i].addEventListener("click", function (){
        var buttonInnerHtml = this.innerHTML;
        makeSound(buttonInnerHtml);
    });
}

document.addEventListener("keydown", function (keyPressed){
    makeSound(keyPressed.key);
});


function makeSound(key){
    switch(key){
        case "Dice game":
            window.open("./portfolios/Dice challenge/Dicee Challenge - Starting Files/dicee.html", "_blank");
            break;
        case "Drum kit":
            window.open("./portfolios/Drum kit/Drum Kit Starting Files/index.html", "_blank");
            break;
    }
}
