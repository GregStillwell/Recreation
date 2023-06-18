window.addEventListener("load", function() {
  const h1remove = document.querySelector("h1")
  h1remove.remove();

const h1Element = document.createElement("h1");
h1Element.append("Webpage Recreation Practice");
const bodyH1 = document.querySelector("body");
bodyH1.append(h1Element);

const pElement = document.createElement("p")
pElement.append("The HTML of this webpage was created with JavaScript.")
const pBody = document.querySelector("body");
pBody.append(pElement);

const imgElement = document.createElement("img");
imgElement.setAttribute("src","https://cdn.download.ams.birds.cornell.edu/api/v1/asset/202984001/900")
imgElement.setAttribute("alt", "This is an image of a Multicolored Tanager bird from birdsoftheworld.org")
imgElement.setAttribute("style", "width:50%")
 const imgBody = document.querySelector("body");
 imgBody.append(imgElement)

 const h1Element1 = document.createElement("h1")
 h1Element1.append("Facts about the Multicolored Tanager");
 const middleH1 = document.querySelector("body");
 middleH1.append(h1Element1);

 const ul = document.createElement("ul")
document.querySelector("body").append(ul)
const liOne=document.createElement("li")
const liTwo=document.createElement("li")
liOne.append("It is endemic to the mountains of Colombia.")
liTwo.append("It usually searches for insects on the underside of leaves of outer limbs while clinging to leaves with its feet.")
document.querySelector("body") .append(liTwo,liOne);

const h2Element= document.createElement("h2")
h2Element.append("Source");
const h2Body = document.querySelector("body")
h2Body.append(h2Element)




});