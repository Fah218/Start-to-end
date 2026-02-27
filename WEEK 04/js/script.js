// Shared State for Cart
let cartCount = 0;

// Dynamic Product Data replacing an API call
const products = [
    {
        id: 1,
        name: "Premium Wireless Headphones",
        price: "$299.00",
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80"
    },
    {
        id: 2,
        name: "Smart Watch Series 7",
        price: "$399.00",
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80"
    },
    {
        id: 3,
        name: "Minimalist Leather Bag",
        price: "$129.00",
        image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=500&q=80"
    },
    {
        id: 4,
        name: "Noise Cancelling Earbuds",
        price: "$149.00",
        image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500&q=80"
    },
    {
        id: 5,
        name: "Mechanical Keyboard",
        price: "$119.00",
        image: "https://images.unsplash.com/photo-1595225476474-87563907a212?w=500&q=80"
    },
    {
        id: 6,
        name: "4K Action Camera",
        price: "$249.00",
        image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=500&q=80"
    }
];

document.addEventListener("DOMContentLoaded", () => {
    // 1. Load Cart Count securely
    const savedCart = localStorage.getItem("cartCount");
    if (savedCart) {
        cartCount = parseInt(savedCart, 10);
        updateCartDisplay();
    }

    // 2. Render Products if on index page
    const productList = document.getElementById("product-list");
    if (productList) {
        products.forEach(product => {
            const card = document.createElement("div");
            card.className = "product-card";
            card.innerHTML = `
                <img src="${product.image}" loading="lazy" alt="${product.name}" class="product-image">
                <div class="product-info">
                    <h3 class="product-title">${product.name}</h3>
                    <p class="product-price">${product.price}</p>
                    <button class="btn" onclick="addToCart()">Add to Cart</button>
                </div>
            `;
            productList.appendChild(card);
        });
    }

    // 3. Handle Contact Form submission natively
    const contactForm = document.getElementById("contact-form");
    if (contactForm) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const msg = document.getElementById("form-msg");

            // Mock API submission interaction
            setTimeout(() => {
                msg.className = "msg-visible";
                contactForm.reset();

                // Hide success message after 4 seconds
                setTimeout(() => {
                    msg.className = "msg-hidden";
                }, 4000);
            }, 500);
        });
    }
});

// Add to Cart Global Function
window.addToCart = function () {
    cartCount++;
    updateCartDisplay();
    localStorage.setItem("cartCount", cartCount);

    // Add micro-animation to cart icon
    const cartIcon = document.querySelector(".cart-icon");
    if (cartIcon) {
        cartIcon.style.transform = "translateY(-5px) scale(1.05)";
        cartIcon.style.borderColor = "#ec4899"; // accent color flash
        setTimeout(() => {
            cartIcon.style.transform = "";
            cartIcon.style.borderColor = "";
        }, 300);
    }
}

function updateCartDisplay() {
    const counts = document.querySelectorAll("#cart-count");
    counts.forEach(c => c.textContent = cartCount);
}
