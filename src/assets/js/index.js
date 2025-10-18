const titles = [
  "https://i.imgur.com/pE8zRxM.gif",
  "https://media.discordapp.net/attachments/1251639179658526825/1410792216007278764/IMG_2251.png?ex=68b2f6e3&is=68b1a563&hm=ce46d03dfa841885de87ebf377ee50cdd59803140422d215ae17b9ef6da9ae32&=&width=1037&height=1008",
];

document.addEventListener("DOMContentLoaded", () => {
  const footerYear = document.getElementById("currentYear");
  if (footerYear) {
    footerYear.textContent = new Date().getFullYear();
  }
});

function randomimage() {
  const randomIndex = Math.floor(Math.random() * titles.length);
  const element = document.getElementById("yourid");

  if (element) {
    element.src = titles[randomIndex];
    element.dataset.activeIndex = String(randomIndex);
  }
}

function playbatsound() {
  const audio = document.getElementById("sound1");
  if (audio) {
    audio.volume = 0.35;
    audio.play();
  }
}
