const tg = window.Telegram.WebApp;
tg.ready();

const videos = [
  {
    id: "basic_001",
    title: "Market Structure Asas",
    desc: "Pengenalan trend, HH HL LL LH",
    level: "basic",
  },
  {
    id: "basic_002",
    title: "Support & Resistance",
    desc: "Asas SNR yang betul",
    level: "basic",
  },
   {
    id: "basic_003",
    title: "Support & Resistance",
    desc: "Asas SNR yang betul",
    level: "basic",
  },
  {
    id: "medium_001",
    title: "Break & Retest",
    desc: "Continuation setup",
    level: "medium",
  },
  {
    id: "advance_001",
    title: "Liquidity Manipulation",
    desc: "Smart money concept",
    level: "advance",
  },
];

const tabs = document.querySelectorAll(".tab");
const list = document.getElementById("videoList");

function render(level) {
  list.innerHTML = "";
  videos
    .filter(v => v.level === level)
    .forEach(v => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <h3>${v.title}</h3>
        <p>${v.desc}</p>
        <button class="open-btn">BUKA</button>
      `;

      card.querySelector(".open-btn").onclick = () => {
        tg.sendData(JSON.stringify({
          action: "open_video",
          video_id: v.id,
          level: v.level
        }));
        tg.close();
      };

      list.appendChild(card);
    });
}

tabs.forEach(tab => {
  tab.onclick = () => {
    tabs.forEach(t => t.classList.remove("active"));
    tab.classList.add("active");
    render(tab.dataset.level);
  };
});

render("basic");
