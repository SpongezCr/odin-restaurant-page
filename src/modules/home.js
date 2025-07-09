import restaurantImage from "../components/restaurant.jpg";


export function loadHomePage() {
    
    const contentBox = document.querySelector("#content");

    const h1 = document.createElement("h1");
    h1.textContent = "Welcome to Western-rant!";

    const img = document.createElement("img");
    img.src = restaurantImage;
    img.alt = "photo of people dining";
    img.classList.add("restaurant");

    const div = document.createElement("div");
    const link = document.createElement("a");
    link.href = "https://unsplash.com/photos/dish-on-white-ceramic-plate-N_Y88TWmGwA?utm_content=creditShareLink&utm_medium=referral&utm_source=unsplash";
    link.textContent = "https://unsplash.com/photos/dish-on-white-ceramic-plate-N_Y88TWmGwA?utm_content=creditShareLink&utm_medium=referral&utm_source=unsplash"
    div.appendChild(link);

    const p = document.createElement("p");
    p.textContent = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit rerum, unde fuga quos aliquam beatae nobis temporibus odio enim perferendis."
    
    contentBox.appendChild(h1);
    contentBox.appendChild(img);
    contentBox.appendChild(div);
    contentBox.appendChild(p);

}