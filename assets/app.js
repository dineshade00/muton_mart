// Filter
document.querySelectorAll(".filter-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const filter = btn.dataset.filter;
    document.querySelectorAll(".product-item").forEach(item => {
      if (filter === "all" || item.dataset.category.includes(filter)) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });
});

// Cart Counter
let cartCount = 0;
document.querySelectorAll(".add-to-cart").forEach(button => {
  button.addEventListener("click", () => {
    cartCount++;
    document.querySelector(".bi-cart + span").textContent = cartCount;
  });
});

