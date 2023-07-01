const summary = document.querySelector(".summary");

const data = [
  {
    category: "Reaction",
    score: 80,
    icon: "./assets/images/icon-reaction.svg",
  },
  {
    category: "Memory",
    score: 92,
    icon: "./assets/images/icon-memory.svg",
  },
  {
    category: "Verbal",
    score: 61,
    icon: "./assets/images/icon-verbal.svg",
  },
  {
    category: "Visual",
    score: 72,
    icon: "./assets/images/icon-visual.svg",
  },
];

const fillDiv = (obj) => {
  const { category, score, icon } = obj;
  const div = `<div class="sec ${category}"><span class="name"><img src="${icon}" alt=""/><span> ${category}</span></span><span class="score"><span class="user-score">${score}</span> / 100</span></div>`;
  return div;
};

const createDivs = data.map(fillDiv);
summary.innerHTML += createDivs.join("");
