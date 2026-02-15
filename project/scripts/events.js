// ================= NAV MENU =================
const toggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
toggle.addEventListener('click', () =>
    navLinks.classList.toggle('show'));


const STORAGE_KEY = "eventsData";
const defaultEvents = [
    {
        type: "video",
        src: "videos/johge.mp4",
        title: "Tech Conference 2025",
        description: "Highlights from the global tech conference.",
        date: "2025-12-10",
        views: 0,
        likes: 0,
        dislikes: 0,
        comments: []
    },
    {
        type: "video",
        src: "videos/demo.mp4",
        title: "Innovation Expo",
        description: "Latest technology and innovation showcase.",
        date: "2025-12-15",
        views: 0,
        likes: 0,
        dislikes: 0,
        comments: []
    },
    {
        type: "image",
        src: "images/efm.webp",
        title: "Hotel Grand Opening",
        description: "Opening ceremony celebration.",
        date: "2025-11-02",
        views: 0,
        likes: 0,
        dislikes: 0,
        comments: []
    }
];

let eventsData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
defaultEvents.forEach(item => {
    if (!eventsData.some(e =>
        e.src === item.src)) eventsData.push(item);
});
saveData();

/* DOM elements */
const container = document.getElementById("eventsContainer");
const modal = document.getElementById("commentModal");
const commentsList = document.getElementById("commentsList");
const postBtn = document.getElementById("postComment");
const closeBtn = document.getElementById("closeModal");

const mediaModal = document.getElementById("mediaModal");
const mediaContent = document.getElementById("mediaContent");
const mediaClose = document.getElementById("mediaClose");
const prevMedia = document.getElementById("prevMedia");
const nextMedia = document.getElementById("nextMedia");

let activeIndex = null;
let mediaIndex = null; // index for the gallery modal

/* ===== SAVE ===== */
function saveData() { localStorage.setItem(STORAGE_KEY, JSON.stringify(eventsData)); }

/* ===== RENDER EVENTS ===== */
function renderEvents() {
    container.innerHTML = "";
    eventsData.forEach((event, index) => {
        const card = document.createElement("div"); card.className = "card";

        let mediaEl;
        if (event.type === "video") {
            mediaEl = document.createElement("video");
            mediaEl.preload = "metadata"; mediaEl.controls = false; mediaEl.style.cursor = "pointer";
            mediaEl.src = event.src;
        } else {
            mediaEl = document.createElement("img");
            mediaEl.alt = event.title;
            mediaEl.src = event.src;
        }

        mediaEl.addEventListener("click", () => openMedia(index));

        const content = document.createElement("div"); content.className = "card-content";
        content.innerHTML = `
            <div class="card-title">${event.title}</div>
            <div class="card-date">${event.date}</div>
            <div>${event.description}</div>
            <div class="stats">
                <span>👁 ${event.views}</span>
                <span>👍 ${event.likes}</span>
                <span>👎 ${event.dislikes}</span>
                <span>💬 ${event.comments.length}</span>
            </div>
            <div class="actions">
                <button class="like-btn">👍 Like</button>
                <button class="dislike-btn">👎 Dislike</button>
                <button class="comment-btn">💬 Comment</button>
            </div>
        `;

        content.querySelector(".like-btn").onclick = () => {
            event.likes++; saveData(); renderEvents();
        }
        content.querySelector(".dislike-btn").onclick = () => {
            event.dislikes++; saveData(); renderEvents();
        }
        content.querySelector(".comment-btn").onclick = () => {
            activeIndex = index; openComments();
        }

        card.appendChild(mediaEl);
        card.appendChild(content);
        container.appendChild(card);
    });
}

/* ===== MEDIA MODAL WITH SLIDER ===== */
function openMedia(index) {
    mediaIndex = index;
    showMedia();
    mediaModal.style.display = "flex";

    // count view only when first open
    eventsData[index].views++;
    saveData();
    renderEvents();
}

function showMedia() {
    const event = eventsData[mediaIndex];
    mediaContent.innerHTML = "";
    if (event.type === "video") {
        const vid = document.createElement("video");
        vid.src = event.src;
        vid.controls = true;
        vid.autoplay = true;
        mediaContent.appendChild(vid);
    } else {
        const img = document.createElement("img");
        img.src = event.src;
        img.alt = event.title;
        mediaContent.appendChild(img);
    }
}

mediaClose.onclick = () => {
    mediaModal.style.display = "none";
    mediaContent.innerHTML = "";
}

prevMedia.onclick = () => {
    mediaIndex = (mediaIndex - 1 + eventsData.length) % eventsData.length;
    showMedia();
}
nextMedia.onclick = () => {
    mediaIndex = (mediaIndex + 1) % eventsData.length;
    showMedia();
}

/* ===== COMMENTS MODAL ===== */
function openComments() {
    modal.style.display = "block"; commentsList.innerHTML = "";
    const comments = eventsData[activeIndex].comments;
    comments.forEach((c, i) => {
        const div = document.createElement("div"); div.className = "comment-item";
        div.innerHTML = `
            <div class="comment-name">${c.name}</div>
            <div>${c.text}</div>
            <div class="comment-date">${c.date}</div>
            <button class="edit-btn">Edit</button>
            <button class="delete-btn">Delete</button>
        `;
        div.querySelector(".edit-btn").onclick = () => editComment(i);
        div.querySelector(".delete-btn").onclick = () => deleteComment(i);
        commentsList.appendChild(div);
    });
}

function deleteComment(i) {
    eventsData[activeIndex].comments.splice(i, 1); saveData();
    openComments();
    renderEvents();
}
function editComment(i) {
    const newText = prompt("Edit your comment:");
    if (!newText) return;
    eventsData[activeIndex].comments[i].text = newText;
    eventsData[activeIndex].comments[i].date = new Date().toLocaleString();
    saveData();
    openComments();
    renderEvents();
}

postBtn.onclick = () => {
    const name = document.getElementById("commentName").value.trim();
    const text = document.getElementById("commentText").value.trim();
    if (!name || !text) {
        alert("Enter name and comment");
        return;
    }
    eventsData[activeIndex].comments.push({ name, text, date: new Date().toLocaleString() });
    document.getElementById("commentName").value = "";
    document.getElementById("commentText").value = "";
    saveData();
    openComments();
    renderEvents();
}

closeBtn.onclick = () => {
    modal.style.display = "none";
}

/* ===== INIT ===== */
renderEvents();


//    FOOTER
document.querySelector("#company").textContent = "Roadside Lodge 🏩 Your Comfort Is Our Ultimate Desire 🏨";
document.querySelector("#copyright").textContent = `@ ${new Date().getFullYear()} Roadside Lodge. All Rights Reserved.`;
