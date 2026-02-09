document.addEventListener("DOMContentLoaded", () => {

    // Footer
    document.getElementById("currentYear").textContent = `© ${new Date().getFullYear()} Taurus Global Network`;

    document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;

    // Review Counter
    const key = "reviewCount";
    let count = Number(localStorage.getItem(key)) || 0;
    count++;
    localStorage.setItem(key, count);

    document.getElementById("reviewCount").textContent =
        `Total Reviews Submitted: ${count}`;
});
  