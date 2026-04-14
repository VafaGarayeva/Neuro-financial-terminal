<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Neuro-Financial Terminal</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
    <style>
        /* CSS BURADA */
        body { background-color: #0b0e14; color: #00ff99; font-family: 'Courier New', monospace; padding: 20px; }
        .dashboard { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
        .panel { background: rgba(16, 20, 28, 0.95); border: 1px solid #333; padding: 20px; border-radius: 8px; }
        #brain-svg { width: 100%; height: 200px; }
        .price-val { font-size: 24px; color: #f1c40f; font-weight: bold; }
        .gauge-fill { width: 100%; height: 100%; background: #00ff99; transition: transform 0.5s; }
        #brain-container.panic #amygdala { fill: #ff0844 !important; }
        .btn { width: 100%; padding: 15px; background: #00ff99; font-weight: bold; cursor: pointer; }
    </style>
</head>
<body>

<div class="dashboard">
  <div class="panel">
    <h2><i class="fas fa-brain"></i> Neuro-Status</h2>
    <div id="brain-container">
      <svg id="brain-svg" viewBox="0 0 600 500">
        <path class="brain-outline" d="M300,50 C150,50 50,150 50,250 C50,350 150,450 300,450 C450,450 550,350 550,250 C550,150 450,50 300,50 Z" fill="none" stroke="#4facfe" stroke-width="8"/>
        <circle id="amygdala" cx="300" cy="280" r="20" fill="#4facfe" />
      </svg>
      <div id="brain-text">MEDITATED</div>
    </div>
    <div class="gauge-container">
       <div id="cort-fill" class="gauge-fill"></div>
       <div id="dop-fill" class="gauge-fill reward"></div>
    </div>
  </div>

  <div class="panel">
    <h2><i class="fas fa-chart-line"></i> Market Terminal</h2>
    <div id="bid-price" class="price-val">--</div>
    <div id="ask-price" class="price-val">--</div>
    <div>Oil: $<span id="oil-price">--</span></div>
    <div>USD: <span id="usd-price">--</span></div>
    <canvas id="priceChart"></canvas>
    <div id="market-status">Market is Stable</div>
  </div>

  <div class="panel">
    <h2><i class="fas fa-microchip"></i> Decision Lab</h2>
    <button class="btn" onclick="processTrade()">EXECUTE TRADE</button>
    <ul id="log-list"></ul>
  </div>
</div>

<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script>
    /* JAVASCRIPT BURADA */
    let goldPrice = 2350.50;
    setInterval(() => {
        goldPrice += (Math.random() - 0.5) * 5;
        document.getElementById('bid-price').innerText = (goldPrice - 0.4).toFixed(2);
        document.getElementById('ask-price').innerText = (goldPrice + 0.4).toFixed(2);
        document.getElementById('oil-price').innerText = (80 + Math.random()).toFixed(2);
        document.getElementById('usd-price').innerText = "1.7000";
    }, 1500);

    function processTrade() {
        const li = document.createElement('li');
        li.innerText = "Trade Executed at $" + goldPrice.toFixed(2);
        document.getElementById('log-list').prepend(li);
    }
</script>
</body>
</html>
