/*var board = document.querySelector("#checkerboard")

function createCheckerboard(x = 8, y = 8){
    for(var i=0; i<x; i++){
        board.innerHTML += "<div class='checkerrow' id='row-"+i+"'></div>"
        var boardline = document.querySelector('#row-'+ i)
        for(var k=0; k<y; k++){
            
            if((i+k) % 2 == 0){
                boardline.innerHTML += "<div class='sqr1'></div>"
            } else {
                boardline.innerHTML += "<div class='sqr2'></div>"
            }
        }
    }
}

var xfuncion = {{ num1 }}
var yfuncion = {{ num2 }};

createCheckerboard( xfuncion, yfuncion )*/