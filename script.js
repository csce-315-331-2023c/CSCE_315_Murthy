function toggleStyleSheet() {
    var element = document.getElementById("styleLink");
    var attribute = element.getAttribute("href");
    if (attribute == "styles.css") {
        var newStyle = "alt_style.css";
    }
    else {
        var newStyle = "styles.css";
    }
    element.setAttribute("href", newStyle);
    localStorage.setItem("style", newStyle);
}

window.onload = function() {
    var webStyle = localStorage.getItem("style");
    var element = document.getElementById("styleLink");
    element.setAttribute("href", webStyle);
}