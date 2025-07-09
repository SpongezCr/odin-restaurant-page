

export function loadAboutPage() {
    const container = document.querySelector("#content");

    const p = document.createElement("p");
    p.textContent = "Contact us!";

    container.appendChild(p);
}