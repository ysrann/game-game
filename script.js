const items = document.querySelectorAll(".item");
const groups = document.querySelectorAll(".group");

items.forEach(item => {
  item.addEventListener("dragstart", e => {
    e.dataTransfer.setData("text", e.target.textContent);
    e.dataTransfer.setData("category", e.target.getAttribute("data-category"));
    e.target.classList.add("dragging");
  });

  item.addEventListener("dragend", e => {
    e.target.classList.remove("dragging");
  });
});

groups.forEach(group => {
  group.addEventListener("dragover", e => e.preventDefault());

  group.addEventListener("drop", e => {
    const draggedCategory = e.dataTransfer.getData("category");
    const groupCategory = group.getAttribute("data-category");
    const text = e.dataTransfer.getData("text");

    if (draggedCategory === groupCategory) {
      const el = document.createElement("div");
      el.textContent = text;
      el.className = "item";
      group.appendChild(el);
      alert("Benar!");
    } else {
      alert("Salah kelompok!");
    }
  });
});
