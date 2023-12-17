document.onreadystatechange = function() {
    if (document.readyState !== "complete") {
        document.querySelector("body").style.visibility = "hidden";

        document.querySelector("#loader").style.visibility = "visible";
    } else {
        document.querySelector("#loader").style.display = "none";

        document.querySelector("body").style.visibility = "visible";
    }
};

fetch("/imgs/svg/Triangles-1s-205px.svg")
    .then(response => response.text())
    .then(svgContent => {
        document.querySelector("#loader").innerHTML = svgContent;
    })