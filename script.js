function getDate() {
    var now = new Date();
    document.getElementById("hiddenDateTime").innerHTML = now.toString();
    var hidden = document.getElementById("hiddenDateTime");
    hidden.style.display = "block";
}