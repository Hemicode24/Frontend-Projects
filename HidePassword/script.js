const passwordField = document.querySelector("#password");

function switchVisibility() {
     if (passwordField.getAttribute("type") === "password")
     passwordField.setAttribute("type", "text");
     else passwordField.setAttribute("type", "password");
}