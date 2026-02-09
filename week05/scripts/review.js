document.addEventListener("DOMContentLoaded", () => {
    // Footer
    document.getElementById("currentYear").textContent = `© ${new Date().getFullYear()} Taurus Global Network`;
    document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;

    // Track reviews in localStorage
    const reviewCountKey = "reviewCount";
    let count = parseInt(localStorage.getItem(reviewCountKey)) || 0;
    count++; // increment for current submission
    localStorage.setItem(reviewCountKey, count);

    const reviewStats = document.getElementById("reviewStats");
    reviewStats.innerHTML = `<p>Total reviews submitted: <strong>${count}</strong></p>`;

    // Optional reset button
    const resetBtn = document.createElement("button");
    resetBtn.textContent = "Reset Review Count";
    resetBtn.classList.add("reset-btn");
    resetBtn.addEventListener("click", () => {
        localStorage.setItem(reviewCountKey, 0);
        reviewStats.innerHTML = `<p>Total reviews submitted: <strong>0</strong></p>`;
    });
    reviewStats.appendChild(resetBtn);
});
