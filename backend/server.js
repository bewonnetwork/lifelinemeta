const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors({ origin: '*' }));
app.use(express.json());

// Landing Page
app.get('/', (req, res) => {
  res.send(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>LifelineMeta25 — API Server</title>
  <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet"/>
  <style>
    *{box-sizing:border-box;margin:0;padding:0}
    body{background:#0b0f1a;color:#e2e8f0;font-family:'Space Grotesk',sans-serif;min-height:100vh;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:2rem 1rem}
    .ecg-wrap{width:100%;max-width:480px;height:55px;margin-bottom:2rem;overflow:hidden}
    .ecg-wrap svg{width:100%;height:100%}
    .ecg-path{fill:none;stroke:#22d3ee;stroke-width:2.5;stroke-linecap:round;stroke-dasharray:800;stroke-dashoffset:800;animation:draw 2s ease forwards,glow 3s ease-in-out 2s infinite;filter:drop-shadow(0 0 6px #22d3ee)}
    @keyframes draw{to{stroke-dashoffset:0}}
    @keyframes glow{0%,100%{opacity:1}50%{opacity:.3}}
    .card{background:#111827;border:1px solid #1e293b;border-radius:20px;padding:2.5rem 2rem;max-width:460px;width:100%;text-align:center}
    .badge{display:inline-block;background:rgba(34,211,238,.1);border:1px solid rgba(34,211,238,.3);color:#22d3ee;font-family:'JetBrains Mono',monospace;font-size:.7rem;letter-spacing:.15em;padding:.3rem .75rem;border-radius:999px;margin-bottom:1.2rem}
    h1{font-size:2rem;font-weight:700;letter-spacing:-.03em;margin-bottom:.4rem}
    h1 span{color:#f472b6}
    .sub{color:#64748b;font-size:.9rem;margin-bottom:1.8rem;line-height:1.6}
    .status{display:flex;align-items:center;justify-content:center;gap:.5rem;margin-bottom:1.8rem;font-family:'JetBrains Mono',monospace;font-size:.82rem;color:#4ade80}
    .dot{width:8px;height:8px;border-radius:50%;background:#4ade80;box-shadow:0 0 8px #4ade80;animation:blink 1.4s ease-in-out infinite}
    @keyframes blink{0%,100%{opacity:1}50%{opacity:.15}}
    .routes{display:flex;flex-direction:column;gap:.55rem;text-align:left;margin-bottom:1.8rem}
    .route{display:flex;align-items:center;gap:.7rem;background:#0b0f1a;border:1px solid #1e293b;border-radius:10px;padding:.6rem .85rem;font-family:'JetBrains Mono',monospace;font-size:.76rem;transition:border-color .2s}
    .route:hover{border-color:#22d3ee}
    .get{color:#4ade80;font-weight:600;min-width:38px}
    .post{color:#facc15;font-weight:600;min-width:38px}
    .p{color:#e2e8f0;flex:1}
    .d{color:#64748b;font-size:.68rem}
    .foot{color:#64748b;font-size:.75rem;font-family:'JetBrains Mono',monospace}
    .foot strong{color:#22d3ee}
  </style>
</head>
<body>
  <div class="ecg-wrap">
    <svg viewBox="0 0 480 55" preserveAspectRatio="none">
      <path class="ecg-path" d="M0,28 L60,28 L80,28 L90,5 L100,52 L110,28 L140,28 L155,28 L165,8 L175,50 L185,28 L210,28 L240,28 L252,28 L262,10 L272,48 L282,28 L310,28 L340,28 L352,28 L362,12 L372,46 L382,28 L420,28 L480,28"/>
    </svg>
  </div>
  <div class="card">
    <div class="badge">⚡ REST API — LIVE</div>
    <h1>Lifeline<span>Meta</span>25</h1>
    <p class="sub">Backend server চালু আছে।<br/>Frontend বা mobile app connect করো।</p>
    <div class="status"><div class="dot"></div>All systems operational</div>
    <div class="routes">
      <div class="route"><span class="get">GET</span><span class="p">/api/health</span><span class="d">Server health check</span></div>
      <div class="route"><span class="post">POST</span><span class="p">/api/auth/register</span><span class="d">User registration</span></div>
      <div class="route"><span class="post">POST</span><span class="p">/api/auth/login</span><span class="d">User login</span></div>
      <div class="route"><span class="get">GET</span><span class="p">/api/users/:id</span><span class="d">Get user profile</span></div>
    </div>
    <div class="foot">Hosted on <strong>Render</strong> &nbsp;·&nbsp; Node.js + Express</div>
  </div>
</body>
</html>`);
});

// Health Check
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'ok', 
    message: 'Backend Connected to Render',
    serverTime: new Date().toISOString()
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log('Server is running on port ' + PORT);
});