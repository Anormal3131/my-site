// Yarın 21:45'e ayarlanmış geri sayım
const endTime = new Date();
endTime.setDate(endTime.getDate() + 1); // Yarın
endTime.setHours(21, 45, 0, 0); // 21:45:00

function updateCountdown() {
    const now = new Date();
    const timeLeft = endTime - now;

    if (timeLeft <= 0) {
        // Sayaç bittiğinde
        document.querySelector('.countdown').innerHTML = `
            <h1>İFŞALAR YAYINLANDI!</h1>
            <div class="reveal-content">
                <p>Tanem'in ifşaları başarıyla yayınlandı!</p>
                <p>Sayfayı yenileyerek görebilirsiniz.</p>
            </div>
        `;
        return;
    }

    // Kalan süreyi hesapla
    const hours = Math.floor(timeLeft / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    // DOM elementlerini güncelle
    document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
    document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');

    // İlerleme çubuğunu güncelle
    const totalTime = 24 * 60 * 60 * 1000; // 24 saat
    const progress = ((totalTime - timeLeft) / totalTime) * 100;
    document.getElementById('progress-bar').style.width = `${progress}%`;
}

// Her saniye güncelle
setInterval(updateCountdown, 1000);
updateCountdown(); // İlk güncelleme
