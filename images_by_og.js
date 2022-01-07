// Create a class for the element
class ImgOg extends HTMLElement {
  constructor() {
    // Always call super first in constructor
    super();

    // Create a shadow root
    const shadow = this.attachShadow({ mode: "open" });

    if (this.hasAttribute("img")) {
      var url = this.getAttribute("img");
      console.log(url);
      var xmlhttp = new XMLHttpRequest();
      xmlhttp.open("GET", url, false);
      xmlhttp.send();
      var content = xmlhttp.responseText;
      console.log(content);
      // Then get image url from content
      var metas = content.match(/<meta property="og:image" content="(.*?)" \/>/);
      if (metas) {
        var img = document.createElement("img");
        img.setAttribute(src, metas[1]);
      } else {
        var img = document.createElement("img");
        img.setAttribute(src, "https://via.placeholder.com/300x200");
      }
      shadow.appendChild(img);
    }
  }
}

customElements.define("img-og", ImgOg);
