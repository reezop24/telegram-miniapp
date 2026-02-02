const tg = window.Telegram.WebApp;
tg.ready();

const params = new URLSearchParams(window.location.search);
const CURRENT_LEVEL = params.get("level"); // basic | medium | advance


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


