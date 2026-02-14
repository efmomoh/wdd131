// home Js 

document.addEventListener("DOMContentLoaded", () => {
    // ================= NAV MENU =================
    const toggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    toggle.addEventListener('click', () =>
        navLinks.classList.toggle('show'));

    // ================= HERO SLIDER =================
    const hero = document.querySelector(".hero");
    const h1 = document.querySelector("h1");
    const paraMoto = document.querySelector(".moto");
    const prevBtn = document.querySelector(".hero-arrow.prev");
    const nextBtn = document.querySelector(".hero-arrow.next");
    const indicatorsContainer = document.querySelector(".hero-indicators");

    // Hero slides on homepage 

    const heroSlides = [
        {
            title: "Welcome to Roadside Lodge",
            subtitle: "Your Comfort Is Our Ultimate Desire",
            bg: "./images/roadside-lodge.webp"
        },
        {
            title: "Joseph B. Sakila",
            subtitle: "CEO • aka Joe Kissino",
            bg: "./images/ceo1.webp"
        },
        {
            title: "Patricia Sakila",
            subtitle: "Deputy CEO • aka Pat Kissino",
            bg: "./images/depceo1.webp"
        },
        {
            title: "The Official Launching Program",
            subtitle: "",
            bg: "./images/food1.webp"
        },
        {
            title: "Coming Soon...",
            subtitle: "Keep following us for updates",
            bg: "./images/hero-small.webp"
        }
    ];

    let current = 0;

    const indicators = heroSlides.map((slide, idx) => {
        const btn = document.createElement("button");
        btn.setAttribute("role", "tab");
        btn.setAttribute("aria-label", slide.title);

        btn.addEventListener("click", () => {
            current = idx;
            showHeroSlide(current);
            resetAutoPlay();
        });

        indicatorsContainer.appendChild(btn);
        return btn;
    });

    function showHeroSlide(idx) {
        const slide = heroSlides[idx];
        const content = hero.querySelector(".hero-content");
        content.classList.remove("fade-in");
        hero.style.backgroundImage = `url(${slide.bg})`;

        setTimeout(() => {
            h1.textContent = slide.title;
            paraMoto.textContent = slide.subtitle;
            content.classList.add("fade-in");
        }, 100);

        indicators.forEach((btn, i) => {
            btn.classList.toggle("active", i === idx);
            btn.setAttribute("aria-current", i === idx ? "true" : "false");
        });
    }

    function nextSlide() {
        current = (current + 1) % heroSlides.length;
        showHeroSlide(current);
    }

    function prevSlide() {
        current = (current - 1 + heroSlides.length) % heroSlides.length;
        showHeroSlide(current);
    }

    nextBtn.addEventListener("click", () => {
        nextSlide();
        resetAutoPlay();
    });

    prevBtn.addEventListener("click", () => {
        prevSlide();
        resetAutoPlay();
    });


    // ADD swipe support
    let startX = 0;

    ["touchstart", "mousedown"].forEach(evt =>
        hero.addEventListener(evt, e =>
            startX = e.touches ? e.touches[0].clientX : e.clientX));

    ["touchend", "mouseup"].forEach(evt =>
        hero.addEventListener(evt, e => {
            const diff = startX - (e.changedTouches ? e.changedTouches[0].clientX : e.clientX);
            if (Math.abs(diff) > 50) diff > 0 ? nextSlide() : prevSlide(),
                resetAutoPlay();
        }));

    document.addEventListener("keydown", e => {
        if (e.key === "ArrowLeft") {
            prevSlide();
            resetAutoPlay();
        }
        if (e.key === "ArrowRight") {
            nextSlide();
            resetAutoPlay();
        }
    });

    let autoPlay = setInterval(nextSlide, 5000);

    function resetAutoPlay() {
        clearInterval(autoPlay);
        autoPlay = setInterval(nextSlide, 5000);
    }

    showHeroSlide(current);

    // adjust hero height dynamically
    function setHeroHeight() {
        if (window.innerWidth < 600)
            hero.style.height = '50vh';
        else if (window.innerWidth < 1024)
            hero.style.height = '60vh';
        else hero.style.height = '70vh';
    }
    window.addEventListener('resize', setHeroHeight);
    setHeroHeight();

    // FEATURES OBJECT
    const featuresData = [
        "32 Bedrooms (Apartments)",
        "Two-Bedroom Apartments",
        "Free Wi-Fi",
        "Hot & Cold Water",
        "Self-Contained Kitchen",
        "Living & Dining Rooms",
        "Front & Back Porches",
        "Swimming Pool",
        "Onsite Laundry",
        "Parking Lot",
        "24/7 Security Personnel",
        "CCTV Surveillance"
    ];

    const featuresContainer = document.querySelector(".features-grid");

    featuresData.forEach(item => {
        const card = document.createElement("div");
        card.className = "card";
        card.textContent = item;
        featuresContainer.appendChild(card);
    });

    // EVENTS OBJECT
    const eventsData = [
        {
            title: "Food, Drinks & Entertainment",
            description: "Entertainment center, live shows & quality food.",
            image: "images/food1.webp",
            slideIndex: 1
        },
        {
            title: "Community Cultural Festival",
            description: "Celebrating Liberian culture with music, dance, and food.",
            image: "images/event-enssah.webp",
            slideIndex: 2
        },
        {
            title: "Weekend Lounge Nights",
            description: "Relax with drinks, music, and social vibes.",
            image: "images/efm.webp",
            slideIndex: 3
        }
    ];

    const eventsSection = document.querySelector(".events");

    eventsData.forEach(event => {
        const card = document.createElement("div");
        card.className = "event-card";
        card.innerHTML = `<img src="${event.image}" alt="${event.title}" loading="lazy">
                            <div class="event-content">
                                <h3>${event.title}</h3>
                                <p>${event.description}</p>
                            </div>`;
        eventsSection.appendChild(card);

        card.addEventListener("click", () => {
            current = event.slideIndex;
            showHeroSlide(current);
            resetAutoPlay();
        });
    });

    //    ABOUT 
    const about = document.querySelector(".about");

    const h3 = document.createElement("h3");
    h3.className = "h3";
    h3.textContent = "About Roadside Lodge";
    about.appendChild(h3);

    const aboutPara = document.createElement("p");
    aboutPara.innerHTML = `Roadside Lodge is a fully serviced guesthouse situated less than two miles from the main highway. 
                            We provide a safe, relaxing, and enjoyable environment for travelers, families, and event guests.
                            <a href="about.html">Learn More About Us...</a>`;
    about.appendChild(aboutPara);

    //    FOOTER
    document.querySelector("#company").textContent = "Roadside Lodge ~ Your Comfort Is Our Ultimate Desire";
    document.querySelector("#copyright").textContent = `@ ${new Date().getFullYear()} Roadside Lodge. All Rights Reserved.`;
});
