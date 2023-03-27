window.onload = function() {
  console.log("page loaded");

  const heading1 = document.querySelector("h1")
  heading1.remove();
  console.log(heading1);

  const body = document.querySelector("body");
  console.log(body);

  const h1_1 = document.createElement("h1")
  h1_1.append("Webpage Recreation Practice")
  body.append(h1_1);
  console.log(h1_1);

  const p = document.createElement("p")
  p.append("The HTML of this webpage was created with JavaScript.")
  body.append(p);
  console.log(p);

  const img_1 = document.createElement("img")
  img_1.setAttribute("src", 'https://cdn.download.ams.birds.cornell.edu/api/v1/asset/202984001/900')
  img_1.setAttribute("alt", "This is an image of a Multicolored Tanager bird")
  img_1.style.width = "50%"
  img_1.before(p)
  body.append(img_1);

  const h1_2 = document.createElement("h1")
  h1_2.append("Facts about the Multicolored Tanager")
  h1_2.after(img_1);
  body.append(h1_2);
  console.log(h1_2);

  const ul_1 = document.createElement("ul");
  body.append(ul_1);

  const li_1 = document.createElement("li");
  li_1.append("It is endemic to the mountains of Colombia");
  ul_1.append(li_1);

  const li_2 = document.createElement("li");
  li_2.append("It usually searches for insects on the underside of leaves of outer limbs while clinging to leaves with its feet.")
  ul_1.append(li_2);

  const h2_1 = document.createElement("h2");
  h2_1.append("Source")
  body.append(h2_1)

  const ahref = document.createElement("a");
  ahref.setAttribute("href",'https://en.wikipedia.org/wiki/Multicoloured_tanager');
  ahref.append("Wikipedia");
  body.append(ahref)

}
