let DOMoptions=document.getElementById("DOMoptions")
let newParagraph = document.createElement("p")

DOMoptions.style.backgroundColor = "yellow"

newParagraph.innerText="Hello,World!"
DOMoptions.appendChild(newParagraph)
