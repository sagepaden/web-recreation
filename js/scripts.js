window.onload = function() {
  console.log("page loaded");

  const heading1 = document.querySelector("h1")
  heading1.remove();
  console.log(heading1);

  const body = document.querySelector("body");
  console.log(body);

  const hH1 = document.createElement("h1")
  hH1.append("Webpage Recreation Practice")
  body.append(hH1);
  console.log(hH1);

  const p = document.createElement("p")
  p.append("The HTML of this webpage was created with JavaScript.")
  body.append(p);
  console.log(p);

  const img = document.createElement("img")
  img.setAttribute("src", 'https://cdn.download.ams.birds.cornell.edu/api/v1/asset/202984001/900')
  img.setAttribute("alt", "This is an image of a Multicolored Tanager bird")
  img.style.width = "50%"
  body.append(img);

}  

  // h1  
  // p   
  // img   
  // h1   
  // ul li li    
  // h2   
  // a href