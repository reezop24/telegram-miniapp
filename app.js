const tg = window.Telegram.WebApp;
tg.ready();

const params = new URLSearchParams(window.location.search);
const CURRENT_LEVEL = params.get("level"); // basic | medium | advance
const pageTitle = document.getElementById("pageTitle");

if (CURRENT_LEVEL) {
  pageTitle.innerText =
    CURRENT_LEVEL.charAt(0).toUpperCase() + CURRENT_LEVEL.slice(1);
}
if (CURRENT_LEVEL) {
  const tabs = document.querySelector(".tabs");
  if (tabs) tabs.style.display = "none";
}


const videos = [
  {
    id: "basic_001",
    title: "APA ITU TRADING",
    desc: "Bezakan trading,investing dan speculation\nApa yang sebenarnya trader buat\nMitos dan salah faham",
    level: "basic",
  },
  {
    id: "basic_002",
    title: "BAGAIMANA HARGA BERGERAK",
    desc: "Siapa pemain pasaran\nSiapa yang menggerakkan harga\nKonsep pergerakan harga , Apa itu liquidity",
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

const videoList = document.getElementById("videoList");

function renderVideos() {
  videoList.innerHTML = "";

  const filteredVideos = CURRENT_LEVEL
    ? videos.filter(v => v.level === CURRENT_LEVEL)
    : videos;

  if (filteredVideos.length === 0) {
    videoList.innerHTML = "<p>Tiada video untuk level ini.</p>";
    return;
  }

  filteredVideos.forEach(video => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <h3>${video.title}</h3>
      <p>${video.desc}</p>
      <button class="open-btn" onclick="openVideo('${video.id}')">
        Buka
      </button>
    `;

    videoList.appendChild(card);
  });
}

function openVideo(videoId) {
  tg.sendData(JSON.stringify({
    video_id: videoId,
    level: CURRENT_LEVEL
  }));
}

renderVideos();


