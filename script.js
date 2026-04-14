// 1. İlkin Dəyərlər
let goldPrice = 2350.50;
let oilPrice = 82.10;
let usdAzn = 1.7000;
let consecutiveWins = 0;
let commission = 2.00;
let priceHistory = [2348, 2349, 2350, 2350.50];
let labels = priceHistory.map(() => "");

// 2. Qrafikin Qurulması
const canvas = document.getElementById('priceChart');
let priceChart;
if (canvas && typeof Chart !== 'undefined') {
    const ctx = canvas.getContext('2d');
    priceChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                data: priceHistory,
                borderColor: '#f1c40f',
                borderWidth: 2,
                pointRadius: 0,
                fill: true,
                backgroundColor: 'rgba(241, 196, 15, 0.1)',
                tension: 0.4
            }]
        },
        options: { responsive: true, maintainAspectRatio: false, scales: { x: {display:false}, y: {display:false} }, plugins: {legend:{display:false}} }
    });
}

// 3. Bazarı Yeniləmə (Dollar və Oil bura daxildir)
function updateMarket() {
    let goldChange = (Math.random() - 0.5) * 8;
    goldPrice += goldChange;
    oilPrice += (Math.random() - 0.5) * 1.2;

    // Qiymətləri ekrana yazırıq (ID-ləri taparaq)
    const bidEl = document.getElementById('bid-price');
    const askEl = document.getElementById('ask-price');
    const oilEl = document.getElementById('oil-price');
    const usdEl = document.getElementById('usd-price');

    if (bidEl) bidEl.innerText = (goldPrice - 0.40).toFixed(2);
    if (askEl) askEl.innerText = (goldPrice + 0.40).toFixed(2);
    if (oilEl) oilEl.innerText = oilPrice.toFixed(2);
    if (usdEl) usdEl.innerText = usdAzn.toFixed(4);

    // Qrafiki yeniləyirik
    if (priceChart) {
        priceHistory.push(goldPrice);
        if (priceHistory.length > 20) priceHistory.shift();
        priceChart.update('none');
    }

    // Əgər qiymət çox düşərsə panik yarat
    if (goldChange < -2.5) triggerPanic();
}

// 4. Panik Rejimi (Amiqdala qırmızı olacaq)
function triggerPanic() {
    const container = document.getElementById('brain-container');
    const brainText = document.getElementById('brain-text');
    const cortFill = document.getElementById('cort-fill');
    const status = document.getElementById('market-status');

    if (container) container.classList.add('panic');
    if (brainText) brainText.innerText = "PANIC!";
    if (status) { status.innerText = "CRASH DETECTED!"; status.style.color = "#ff0844"; }
    
    if (cortFill) {
        cortFill.style.transform = "rotate(0.45turn)";
        cortFill.style.background = "#ff0844";
    }

    setTimeout(() => {
        if (container) container.classList.remove('panic');
        if (brainText) brainText.innerText = "MEDITATED";
        if (status) { status.innerText = "Market is Stable"; status.style.color = "#00ff99"; }
        if (cortFill) {
            cortFill.style.transform = "rotate(0.08turn)";
            cortFill.style.background = "#00ff99";
        }
    }, 4000);
}

// 5. Trade Düyməsi
function processTrade() {
    consecutiveWins++;
    const logList = document.getElementById('log-list');
    const dopFill = document.getElementById('dop-fill');
    
    // Dopamin artımı
    if (dopFill) {
        let dopVal = Math.min(consecutiveWins * 33, 100);
        dopFill.style.transform = `rotate(${dopVal/200}turn)`;
    }

    if (logList) {
        const li = document.createElement('li');
        li.innerHTML = `[${new Date().toLocaleTimeString()}] Price: $${goldPrice.toFixed(2)} | Success`;
        logList.prepend(li);
    }
}

// Hər 1.5 saniyədən bir bazarı yenilə
setInterval(updateMarket, 1500);
