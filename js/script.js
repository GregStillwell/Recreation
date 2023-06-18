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

const imgElement = this.document.createElement("img");
imgElement.append("https://cdn.download.ams.birds.cornell.edu/api/v1/asset/202984001/900")
});