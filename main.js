/*
Benjamin Bradley
brad0447
October 10, 2019
*/


let body = document.querySelector("body");
let main = document.querySelector("main");
let img = document.createElement('img');

body.addEventListener("click", image);
main.appendChild(img);


function image(ev){
    
    let min = 100;
    let max = 500;
    let num = Math.random() * (max - min) + min;
    let idphoto = Math.round(num);
    let img = new Image(200, 300);
    
    img.src="https://picsum.photos/"+idphoto;
    img.alt="Random Picsum Photo";
    main.appendChild(img);
    
        img.addEventListener("load", function(ev) {
            console.log ("The photo has loaded");
      });
    
        img.addEventListener("error", function(err) {
            window.alert("No image could be loaded. Please click again.");
    
    });
}

