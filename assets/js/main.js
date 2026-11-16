document.addEventListener("DOMContentLoaded", () => {
  const search = document.querySelector("#archive-search");
  const cards = [...document.querySelectorAll(".archive-card")];
  const count = document.querySelector("#result-count");
  const empty = document.querySelector("#empty-state");

  if (!search || cards.length === 0) return;

  const update = () => {
    const query = search.value.trim().toLocaleLowerCase();
    let visible = 0;
    cards.forEach(card => {
      const haystack = (card.dataset.search || card.textContent).toLocaleLowerCase();
      const match = haystack.includes(query);
      card.hidden = !match;
      if (match) visible += 1;
    });
    if (count) count.textContent = `${String(visible).padStart(2, "0")} COLLECTION${visible === 1 ? "" : "S"}`;
    if (empty) empty.hidden = visible !== 0;
  };

  search.addEventListener("input", update);
  update();
});
