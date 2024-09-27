let DOMoptions=document.getElementById("DOMoptions")
let newParagraph = document.createElement("p")
let buttonColor=document.getElementById('btnColorChange')
let toggleImages = document.getElementById("btnImageToggle")
let galleryIMG = document.getElementById("imageGallery").children[0]

newParagraph.innerText="Hello,World!"
DOMoptions.appendChild(newParagraph)

let imageToggle = function(){
    console.log("fire!")
    galleryIMG.src = "images/rabbit2.jpeg"
    console.log(galleryIMG.src)

    if(galleryIMG.src.includes("rabbit1")){
        console.log("rabbit1")
    }
    else{
        console.log("rabbit2")
    }

}
toggleImages.addEventListener("click", imageToggle)

buttonColor.addEventListener("click", function(){
    let redPortion = Math.random() * 255
    let greenPortion = Math.random() * 255
    let bluePortion = Math.random() * 255
    let randomColor = "rgb(" + redPortion + ", "+ greenPortion +", "+ bluePortion +")"
    console.log(randomColor)

    DOMoptions.style.backgroundColor = randomColor
})