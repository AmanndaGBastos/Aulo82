var canvas=document.getElementbyId("myCanvas")
var ctx=canvas.getContext("2d")
var color="blue"
var widthLine=1

var mouseEvent="empty"
var  lastPositionX,lastPositionY

canvas.addEventListener("mousedown", myMousedown)

function myMousedown(e){

 mouseEvent="mousedown"

}

canvas.addEventListener("mouseup", myMouseUp)
function myMouseUp(e){

    mouseEvent="mouseup"
}

canvas.addEventListener("mouseleave", myMouseLeave)
function myMouseLeave(e){

    mouseEvent="mouseleave"
    
}
canvas.addEventListener("mousemove", myMousMovep)
function myMouseMove(e){

    var positionMouseX =e.clientX-canvas.offsetLeft;
    var positionMouseY =e.clientY-canvas.offsetTop
    
}




