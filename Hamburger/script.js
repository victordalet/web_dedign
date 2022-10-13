const spinContainer = document.querySelector(".spin-container");
const btn = document.querySelector("button");

btn.addEventListener("click", () => {
    spinContainer.classList.toggle("active");
});