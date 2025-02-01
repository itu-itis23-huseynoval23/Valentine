// Kalpleri oluştur
function createHearts() {
    const heartCount = 30; // Daha fazla kalp
    for (let i = 0; i < heartCount; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.style.left = `${Math.random() * 100}vw`;
        heart.style.top = `${Math.random() * 100}vh`;
        heart.style.animationDuration = `${Math.random() * 4 + 3}s`; // Daha yavaş ve farklı hızlarda
        document.body.appendChild(heart);
    }
}

createHearts();

// No butonu hareketi
document.getElementById('noButton').addEventListener('mouseover', function() {
    const noButton = this;
    const container = document.querySelector('.container');
    const containerRect = container.getBoundingClientRect();

    // Butonun container içinde kalmasını sağla
    const maxX = containerRect.width - noButton.offsetWidth;
    const maxY = containerRect.height - noButton.offsetHeight;

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    noButton.style.position = 'absolute';
    noButton.style.left = `${x}px`;
    noButton.style.top = `${y}px`;
});

// Yes butonu tıklanınca
document.getElementById('yesButton').addEventListener('click', function() {
    const headerImage = document.getElementById('headerImage');
    const valentineQuestion = document.getElementById('valentineQuestion');
    const responseDiv = document.getElementById('response');
    const buttonsDiv = document.querySelector('.buttons');

    // İlk fotoğraf ve yazıyı direkt olarak kaldır
    headerImage.remove();
    valentineQuestion.remove();

    // Butonları gizle
    buttonsDiv.classList.add('hidden');

    // GIF ve mesajı göster
    responseDiv.classList.remove('hidden');
});