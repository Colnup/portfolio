// Get og url from another website meta tag
function GetImage(url) {
    // First get website content
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", url, false);
    xmlhttp.send();
    var content = xmlhttp.responseText;
    // Then get image url from content
    var metas = content.match(/<meta property="og:image" content="(.*?)" \/>/);
    if (metas) {
        return metas[1];
    }
}