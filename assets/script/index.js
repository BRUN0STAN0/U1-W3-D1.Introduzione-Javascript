let found = false;
let saveOne = document.getElementById("text-one").innerHTML;

function crossOutPhrase() {
    if (found == false) {
        document.getElementById("text-one").innerHTML = "<del>" + saveOne + "</del>";
        document.getElementById("text-one").style.textShadow = "1px 1px yellow";
        document.getElementById("button-one").innerHTML = "X";
        found = true;
    } else {
        document.getElementById("text-one").innerHTML = saveOne;
        document.getElementById("text-one").style.textShadow = "none";
        document.getElementById("button-one").innerHTML = "";
        found = false;
    }

}