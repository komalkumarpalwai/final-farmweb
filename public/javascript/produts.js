
  const products = [
    { id: 1, name: "Rice", description: "High-quality rice sourced from local farms.", price: 5.99, image: "/images/rice.webp" },
    { id: 2, name: "Coconut water", description: "Fresh coconuts harvested from tropical regions.", price: 3.49, image: "/images/cwater.jpg" },
    { id: 3, name: "Mango", description: "Juicy mangoes picked at the peak of ripeness.", price: 2.99, image: "/images/mangoes.jpg" },
    {  id: 4,name: "Milk", description: "Fresh dairy milk from local farms.", price: 1.99, image: "/images/milk.webp" }
];

function createProductElement(product) {
    const productElement = document.createElement("div");
    productElement.className = "bg-white rounded-lg shadow-md overflow-hidden";
    const imageElement = document.createElement("img");
    imageElement.src = product.image;
    imageElement.alt = product.name;
    imageElement.className = "w-full h-48 object-cover";
    const contentElement = document.createElement("div");
    contentElement.className = "p-4";
    const nameElement = document.createElement("h2");
    nameElement.textContent = product.name;
    nameElement.className = "text-xl font-semibold mb-2";
    const descriptionElement = document.createElement("p");
    descriptionElement.textContent = product.description;
    descriptionElement.className = "text-gray-600";
    const priceElement = document.createElement("p");
    priceElement.textContent = `$${product.price}`;
    priceElement.className = "text-gray-800 mt-2 font-bold";
    contentElement.appendChild(nameElement);
    contentElement.appendChild(descriptionElement);
    contentElement.appendChild(priceElement);

    productElement.appendChild(imageElement);
    productElement.appendChild(contentElement);

    productElement.addEventListener("click", () => {
       
        if (product.id === 1) {
            window.location.href = "rice";
        } else if (product.id === 2) {
            window.location.href = "coconut";
        } else if (product.id === 3) {
            window.location.href = "manjo";
        } else if (product.id === 4) {
            window.location.href = "milk";
        }
    });
  
    return productElement;
}
function displayProducts() {
    const productContainer = document.getElementById("productContainer");
    products.forEach(product => {
        const productElement = createProductElement(product);
        productContainer.appendChild(productElement);
    });
}
window.onload = displayProducts;


