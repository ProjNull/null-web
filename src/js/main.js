/* not used
var od = false
var data = document.querySelectorAll("panel a")

data.forEach(element => {
    if (od) {
        od = false;
        element.classList.toggle("right");
    } else {od = true}
});
*/

var nojs = document.querySelector("#nojs")
if (nojs) {
    nojs.remove()
}


var panel = document.querySelector("panel")

document.onscroll = function() {
    if (window.scrollY > 40) {
        panel.className = "translucent";
    } else {
        panel.className = "";
    }
}