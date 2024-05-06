document.getElementById("emailForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var emailInput = document.getElementById("emailInput");
    var email = emailInput.value;
    if (validateEmail(email)) {
      document.getElementById("message").classList.remove("hidden");
      emailInput.value = ""; 
    }
  });

  function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }
  const products = [
    { name: "Rice", description: "High-quality rice sourced from local farms.", price: 5.99, image: "/images/rice.webp" },
    { name: "Coconut water", description: "Fresh coconuts harvested from tropical regions.", price: 3.49, image: "/images/cwater.jpg" },
    { name: "Mango", description: "Juicy mangoes picked at the peak of ripeness.", price: 2.99, image: "/images/mangoes.jpg" }
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


gsap.from("#hero-section", {
  opacity: 0,
  y: 50,
  duration: 1,
  stagger: 0.2 
});

gsap.from("#productContainer", {
  opacity: 0,
  y: 50,
  duration: 1,
  stagger: 0.2 
});