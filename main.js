const items = document.querySelectorAll(".item");
const form = document.querySelector("form");
const links = document.querySelectorAll('.navbar a');

links.forEach(link => {
    link.addEventListener("click", () => {
        links.forEach(link => {
            link.classList.remove("active");
        });
        link.classList.add("active");
    });
});

function delayed() {
    form.reset();
}

form.addEventListener("submit", () => {
    setTimeout(delayed, 1000);
});