document.addEventListener("DOMContentLoaded", () => {
    // ===== FOOTER =====
    document.getElementById("currentYear").textContent = `© ${new Date().getFullYear()} Taurus Global Network`;
    document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;

    // ===== PRODUCTS DATA =====
    const products = [
        {
            id: "fc-1888",
            name: "flux capacitor",
            averagerating: 4.5
        },
        {
            id: "fc-2050",
            name: "power laces",
            averagerating: 4.7
        },
        {
            id: "fs-1987",
            name: "time circuits",
            averagerating: 3.5
        },
        {
            id: "ac-2000",
            name: "low voltage reactor",
            averagerating: 3.9
        },
        {
            id: "jj-1969",
            name: "warp equalizer",
            averagerating: 5.0
        }
      ];

    // ===== ELEMENTS =====
    const productList = document.getElementById("productList");
    const selectedBox = document.querySelector(".select-selected");
    const hiddenInput = document.getElementById("productValue");
    const reviewForm = document.getElementById("reviewForm");
    const productError = document.getElementById("productError");

    // ===== PLACEHOLDER =====
    const placeholder = document.createElement("div");
    placeholder.textContent = "Select a Product";
    placeholder.dataset.value = "";
    placeholder.style.fontStyle = "italic";
    placeholder.style.color = "#888";
    placeholder.setAttribute("aria-disabled", "true");
    placeholder.addEventListener("click", e => e.stopPropagation());
    productList.appendChild(placeholder);

    // ===== LOAD PRODUCTS =====
    products.forEach(product => {
        const option = document.createElement("div");
        option.textContent = `${product.name} (⭐ ${product.averagerating})`;
        option.dataset.value = product.id;

        option.addEventListener("click", () => {
            selectedBox.textContent = option.textContent;
            hiddenInput.value = option.dataset.value;
            productList.classList.add("select-hide");
            selectedBox.classList.remove("select-error");
            productError.style.display = "none";
        });

        productList.appendChild(option);
    });

    // ===== TOGGLE DROPDOWN =====
    selectedBox.addEventListener("click", () => productList.classList.toggle("select-hide"));

    // ===== CLOSE DROPDOWN ON OUTSIDE CLICK =====
    document.addEventListener("click", e => {
        if (!document.getElementById("customSelect").contains(e.target)) {
            productList.classList.add("select-hide");
        }
    });

    // ===== FORM VALIDATION =====
    reviewForm.addEventListener("submit", e => {
        if (!hiddenInput.value) {
            e.preventDefault();
            selectedBox.classList.add("select-error");
            productError.style.display = "block"; // show inline error
            selectedBox.focus();
        }
    });
});

