// about page js

// ================= NAV MENU =================
const toggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
toggle.addEventListener('click', () =>
    navLinks.classList.toggle('show'));

// ----------------------ABOUT INFORMATION PAGE -----
const aboutIntro = document.querySelector(".persons-wrapper");

const aboutPara = document.createElement("p");
aboutPara.classList.add("about-p")
aboutPara.textContent = `Welcome to Roadside Lodge - where luxury, comfort, and family hospitality come together in perfect harmony. 
Located in a peaceful and secure environment, our lodge is designed to give every guest a relaxing, elegant, and memorable experience.
Whether you are visiting for rest, business, celebration, or quality family time, we are committed to making your stay truly special.
At Roadside Lodge, we believe a great stay is more than just a room — it is a feeling of warmth, care, and belonging.
Our beautifully furnished rooms, modern facilities, serene atmosphere, and friendly team ensure that every guest enjoys comfort, privacy,
and exceptional service. From quiet moments of relaxation to joyful family gatherings, we provide a home away from home where beautiful memories are created.
Your comfort, happiness, and satisfaction remain at the heart of everything we do. We are honored to welcome you and look forward to
 making every visit unforgettable.`;
aboutIntro.appendChild(aboutPara);


const missionTitle = document.createElement("strong");
missionTitle.textContent = `Our Mission`;
aboutIntro.appendChild(missionTitle);

const missionPara = document.createElement("p");
aboutPara.classList.add("about-p")
missionPara.textContent = `
        Our mission is to provide exceptional hospitality through comfort, quality service,
        and a peaceful environment where guests feel valued, relaxed, and at home.
        We strive to deliver a perfect blend of luxury and warmth, ensuring every stay is safe,
        enjoyable, and memorable for individuals, families, and travelers.`;
aboutIntro.appendChild(missionPara);

const visionTitle = document.createElement("strong");
visionTitle.textContent = `Our Vision`;
aboutIntro.appendChild(visionTitle);

const visionPara = document.createElement("p");
aboutPara.classList.add("about-p")
visionPara.textContent = `    Our vision is to become a leading lodge known for excellence, comfort, and genuine hospitality.
We aim to create a trusted destination where guests experience luxury, serenity, and 
outstanding service - a place where every visit feels welcoming, refreshing, and worth returning to.`
aboutIntro.appendChild(visionPara);


// person array
const persons = [
    {

        name: "Joseph Sakila",
        role: "CEO & Founder",
        status: "Employer",
        image: "images/ceo.webp",
        year: "2025",
        media: [
            {
                link: "Facebook",
                url: "https://www.facebook.com",
            },
            {
                link: "Instagram",
                url: "https://www.instagram.com"

            }
        ]
    },
    {
        name: "Patricia Kollie",
        role: "Deputy CEO & Co-Founder",
        status: "Employer",
        image: "images/depceo.webp",
        year: "2025",
        media: [
            {
                link: "Facebook",
                url: "https://www.facebook.com",
            },
            {
                link: "Instagram",
                url: "https://www.instagram.com"

            }
        ]
    },
    {
        name: "Daniel Sakila",
        role: "Manager",
        status: "Employee",
        image: "images/ceo.webp",
        year: "2025",
        media: [
            {
                link: "Facebook",
                url: "https://www.facebook.com",
            },
            {
                link: "Instagram",
                url: "https://www.instagram.com"

            }
        ]
    },
    {
        name: "Enssah Fayia Momoh",
        role: "Supervisor",
        status: "Employee",
        image: "images/efm.webp",
        year: "2025",
        media: [
            {
                link: "Facebook",
                url: "https://www.facebook.com",

            },
            {
                link: "Instagram",
                url: "https://www.instagram.com"
            }
        ]
    },
    {
        name: "Enssah Fayia Momoh",
        role: "Supervisor",
        status: "Employee",
        image: "images/efm.webp",
        year: "2025",
        media: [
            {
                link: "Facebook",
                url: "https://www.facebook.com",

            },
            {
                link: "Instagram",
                url: "https://www.instagram.com"
            }
        ]
    },
    {
        name: "Enssah Fayia Momoh",
        role: "Supervisor",
        status: "Employee",
        image: "images/efm.webp",
        year: "2025",
        media: [
            {
                link: "Facebook",
                url: "https://www.facebook.com",

            },
            {
                link: "Instagram",
                url: "https://www.instagram.com"
            }
        ]
    },
    {
        name: "Enssah Fayia Momoh",
        role: "Supervisor",
        status: "Employee",
        image: "images/efm.webp",
        year: "2025",
        media: [
            {
                link: "Facebook",
                url: "https://www.facebook.com",

            },
            {
                link: "Instagram",
                url: "https://www.instagram.com"
            }
        ]
    },
    {
        name: "Enssah Fayia Momoh",
        role: "Supervisor",
        status: "Employee",
        image: "images/efm.webp",
        year: "2025",
        media: [
            {
                link: "Facebook",
                url: "https://www.facebook.com",

            },
            {
                link: "Instagram",
                url: "https://www.instagram.com"
            }
        ]
    },
];


const intro = document.createElement("strong");
intro.textContent = `About Us: Meet with Our CEOs, the Staffers and Employees`;
aboutIntro.appendChild(intro);

const peopleContainer = document.querySelector("#persons");

persons.forEach(person => {
    const div = document.createElement("div");
    div.classList.add("person-card");

    const img = document.createElement("img");
    img.classList.add("person-image");
    img.src = person.image;
    img.alt = `Photo of ${person.name}`;
    img.loading = "lazy";
    div.appendChild(img);

    const name = document.createElement("h1");
    name.textContent = person.name;
    div.appendChild(name);

    const role = document.createElement("p");
    role.textContent = person.role;
    div.appendChild(role);

    const status = document.createElement("p");
    status.textContent = `${person.status}, ${person.year}`;
    div.appendChild(status);

    // media container 
    const mediaContainer = document.createElement("div");
    mediaContainer.classList.add("media-links");

    person.media.forEach(medium => {
        const link = document.createElement("a");
        link.href = medium.url;
        link.textContent = medium.link;
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        mediaContainer.appendChild(link);
    });

    div.appendChild(mediaContainer);

    peopleContainer.append(div);
})


// footer 
const company = document.querySelector("#company").textContent = `Roadside Lodge ~ Your Comfort Is Our Ultimate Desire`;
const currentYear = document.querySelector("#copyright").textContent = `@ ${new Date().getFullYear()} Roadside Lodge. All Rights Reserved.`