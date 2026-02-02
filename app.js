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
    desc: "Siapa pemain pasaran\nSiapa yang menggerakkan harga\nKonsep pergerakan harga\nApa itu liquidity",
    level: "basic",
  },
   {
    id: "basic_003",
    title: "BROKER",
    desc: "Pengenalan\nMarket maker vs ECN\nSpread, Swap, Leverage\nRisiko leverage tinggi",
    level: "basic",
  },
  {
    id: "basic_004",
    title: "PLATFORM",
    desc: "MT4/MT5\nTrading View\nOrdertype\nCara membaca chart (Platform overview)",
    level: "basic",
  },
  {
    id: "basic_005",
    title: "PSYCHOLOGY - Level 1",
    desc: "Kenapa beginner selalu loss\nEmotional cycle dalam trading\nApa maksud disiplin dan sabar",
    level: "basic",
  },
   {
    id: "basic_006",
    title: "MARKET STRUCTURE - Level 1",
    desc: "Trend\nL , H , HH , HL , LH & LL\nCandlestick - Levvel 1",
    level: "basic",
  },
  {
    id: "basic_007",
    title: "SUPPORT & RESISTANT - Level 1",
    desc: "Pengenalan \nHorizontal & Dynamic\nKenalpasti SNR yang kuat\nFake Breakout & kenapa ia berlaku",
    level: "basic",
  },
  {
    id: "basic_008",
    title: "TRENDLINE - Level 1",
    desc: "Apa itu trendline\nBila trendline valid dan tidak valid\nCommon mistake beginner selalu buat",
    level: "basic",
  },
   {
    id: "basic_009",
    title: "VOLUME",
    desc: "Participant\nVolume spike",
    level: "basic",
  },
  {
    id: "basic_010",
    title: "RISK MANAGEMENT - Level 1",
    desc: "Apa itu SL & TP\nKenapa SL penting\n1-2% rule\nKenapa account blow berlaku",
    level: "basic",
  },
  {
    id: "basic_011",
    title: "CANDLESTICK PATTERN",
    desc: " Engulfing\nPin bar candle\nInside bar candle",
    level: "basic",
  },
   {
    id: "basic_012",
    title: "CHART PATTERN",
    desc: "Double top / bottom\nHead & Shoulder\nTriangle",
    level: "basic",
  },
  {
    id: "basic_013",
    title: "LIQUIDITY - Level 1",
    desc: "Pengenalan\nLiquidity grab\nLiquidity Sweep\nPentingnya memahami liquidity grab / sweep dan mengapa ia berlaku",
    level: "basic",
  },
  {
    id: "medium_001",
    title: "MARKET STRUCTURE - Level 2",
    desc: "Internal vs external structure\nComplex pullback\nTrend correction & Trend change\nMicro consolidation\nMulti BOS",
    level: "medium",
  },
  {
    id: "medium_002",
    title: "LIQUIDITY - Level 2",
    desc: "Jenis liquidity\nKumpulan liquidity\nBagaimana liquidity dicipta oleh pergerakan harga\nLiquidity tujuan entry vs liquidity tujuan target",
    level: "medium",
  },
  {
    id: "medium_003",
    title: "SUPPLY & DEMAND",
    desc: "Perbezaan SnR dan SnD\nFresh & test zone\nWeak vs Strong SnD\nKesilapan biasa marking SnD\nHubungan SnD dengan liquidity",
    level: "medium",
  },
  {
    id: "advance_001",
    title: "MARKET NARRATIVE & CONTEXT BUILDING",
    desc: "Siapa aktif sekarang\nContinuation day vs reversal day\nExpansion vs contraction day\nHigh probability vs chop day",
    level: "advance",
  },
  {
    id: "advance_002",
    title: "LIQUIDITY - Level 3",
    desc: "Session liquidity map\nExternal vs internal liquidity target\nPartial liquidity grab vs full sweep\nLiquidity run & exhaustion",
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


