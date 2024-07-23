console.log($);
// Toggles between dark and lightmode using the bootstrap attribute 
let darkBut = document.getElementById("dark-mode-toggle");
let htmlRoot = document.getElementById("htmlRoot");
darkBut.addEventListener("click", (e) => {
    console.log("Changed colour mode");
    if (htmlRoot.getAttribute("data-bs-theme") === "dark") {
        htmlRoot.setAttribute("data-bs-theme", "light");
    }
    else {
        htmlRoot.setAttribute("data-bs-theme", "dark");
    }

})