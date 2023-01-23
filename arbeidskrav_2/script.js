let element = document.querySelectorAll(".links li");

for (let i = 0; i < element.length; i++) {
    // element[i].classList.remove("active");
    element[i].addEventListener("click", function () {
        console.log(element[i])
        markActive(element[i]);
    });
}

function markActive(element) {
    for (let i = 0; i < element.length; i++) {
        element[i].classList.remove("active");
    }
    element.classList.toggle("active");
}