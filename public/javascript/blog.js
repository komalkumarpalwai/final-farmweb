// script.js

document.addEventListener('DOMContentLoaded', function() {
    // Sample blog data
    const blogData = [
        {
            title: "The Art of Framing",
            image: "https://render.fineartamerica.com/images/images-new-artwork/images/artworkimages/medium/3/claude-firmin-the-wheat-harvest-signed-dated-claude-firmin-celestial-images.jpg",
            content: "Discover the beauty of framing and how it enhances your artwork."
        },
        {
            title: "Choosing the Perfect Frame",
            image: "https://appinventiv.com/wp-content/uploads/2021/09/Build-An-Organic-E-commerce-Platform.png",
            content: "Learn how to select the ideal frame that complements your artwork."
        },
        {
            title: "Preserving Your Memories",
            image: "https://tourdefarm.in/wp-content/uploads/2016/07/India-Is-a-Traditional-Land-of-Farming-1-1.jpg",
            content: "Explore techniques to protect and preserve your cherished memories for years to come."
        },
        {
            title: " Deleting the middle man",
            image: "https://bigthink.com/wp-content/uploads/2022/06/AdobeStock_104093431.jpeg",
            content: "Discover the beauty of framing and how it enhances your artwork."
        },
        {
            title: "MINIMUM SUPPORT PRICE",
            image: "https://images.thequint.com/thequint%2F2020-09%2F19e87217-67f1-4cd9-b435-8ab26419714c%2Fmsp.jpg",
            content: "Learn how to select the ideal frame that complements your artwork."
        },
        {
            title: "Preserving Your Memories",
            image: "https://mediaindia.eu/wp-content/uploads/2021/11/farmer_suicide_1573385281.jpg",
            content: "Explore techniques to protect and preserve your cherished memories for years to come."
        }
    ];

    const blogPosts = document.getElementById('blogPosts');

    // Create blog post cards
    blogData.forEach(post => {
        const card = createCard(post);
        blogPosts.appendChild(card);
    });

    // Function to create blog post card
    function createCard(post) {
        const card = document.createElement('div');
        card.classList.add('card');

        const image = document.createElement('img');
        image.src = post.image;
        image.alt = post.title;

        const title = document.createElement('h2');
        title.textContent = post.title;

        const content = document.createElement('p');
        content.textContent = post.content;

        card.appendChild(image);
        card.appendChild(title);
        card.appendChild(content);

        // Add animation
        gsap.from(card, {
            opacity: 0,
            y: 50,
            duration: 1,
            ease: 'power3.out',
            delay: 0.5
        });

        return card;
    }
});
