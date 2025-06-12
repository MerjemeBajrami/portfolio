document.addEventListener("DOMContentLoaded", function () {
    // Navbar scroll effect
    const navbar = document.querySelector(".navbar");
    if (navbar) {
        window.addEventListener("scroll", function () {
            if (window.scrollY > 0) {
                navbar.classList.add("scrolled");
            } else {
                navbar.classList.remove("scrolled");
            }
        });
    }

    // GSAP astronaut animation
    if (gsap) {
        gsap.to("#profile_image", { 
            y: -10, 
            rotation: 5, 
            repeat: -1, 
            yoyo: true, 
            duration: 2, 
            ease: "power1.inOut"
        });
    }

    // Typed.js effect
    if (typeof Typed !== "undefined") {
        new Typed("#typing", {
            strings: ["welcome to my space, I'm"],
            typeSpeed: 100,
            backSpeed: 50,
            loop: true
        });
    }

    // 3D Card Hover Effect
    document.querySelectorAll(".card").forEach((card) => {
        const cardInner = card.querySelector(".card-inner");
        if (!cardInner) return; // Skip if no .card-inner inside the card

        card.addEventListener("mousemove", (e) => {
            let rect = card.getBoundingClientRect();
            let x = (e.clientX - rect.left) / rect.width - 0.5;
            let y = (e.clientY - rect.top) / rect.height - 0.5;
            cardInner.style.transform = `rotateY(${x * 30}deg) rotateX(${-y * 30}deg)`;
        });

        card.addEventListener("mouseleave", () => {
            cardInner.style.transform = "rotateY(0) rotateX(0)";
        });
    });

    // Open GitHub Links on Click
    const links = [
        "https://github.com/erisa1111/Dado.git",
        "https://github.com/erisa1111/E-commerce",
        "https://github.com/MerjemeBajrami/html-css",
        "https://github.com/MerjemeBajrami/guess_my_number",
        "https://github.com/yllzaa/ProjectProgramim"
    ];

    document.querySelectorAll('.card_').forEach((card, index) => {
        if (index < links.length) {
            card.addEventListener('click', () => {
                window.open(links[index], "_blank");
            });
        }
    });

    // Show Image at Bottom of Page
    const bottomImage = document.querySelector('.bottom-image');
    if (bottomImage) {
        window.addEventListener("scroll", function () {
            let documentHeight = document.documentElement.scrollHeight;
            let windowHeight = window.innerHeight;
            let scrollPosition = window.scrollY;

            bottomImage.style.display = (scrollPosition + windowHeight >= documentHeight) ? 'block' : 'none';
        });
    }

 
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
});