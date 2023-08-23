let dodger = document.getElementById("dodger")
const moveDodgerRight = () =>{
    dodger.style.left = `${parseInt(dodger.style.left.replace("px",""))+3}px`
}
const moveDodgerLeft = () =>{
    dodger.style.left = `${parseInt(dodger.style.left.replace("px",""))-3}px`
}
const handler = (k) =>{
    if(k.key=="ArrowRight"){
        moveDodgerRight()
    }
    if(k.key=="ArrowLeft") {
        moveDodgerLeft()
    }
}
document.addEventListener("keydown",handler)