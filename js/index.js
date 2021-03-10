// Your code goes here

// mouseover
const busPic = document.querySelector(".intro img");
busPic.addEventListener("mouseover", function (event){
    event.target.style.border = '20px dotted yellow';
    setTimeout(function() {
        event.target.style.border = "";
    }, 1000);
}, false);



// keydown
const goDown = document.querySelector("h2");
document.addEventListener("keydown", function (event){
    if (event.keycode === 13) {
        goDown.textContent = "Alons-y";
        }
    });





// wheel




// load




// focus




// resize




// scroll




// select




// dblclick




// one more

