document.addEventListener("DOMContentLoaded", function () {
    const giftBox = document.querySelector('.gift-box');
    const confetti = document.querySelector('.confetti');

    // Función para activar confetti
    function startConfetti() {
        confetti.classList.add('active');
    }

    // Función para detener confetti
    function stopConfetti() {
        confetti.classList.remove('active');
    }

    // Evento de clic en la caja de regalo
    giftBox.addEventListener('click', function () {
        if (giftBox.classList.contains('open')) {
            giftBox.classList.remove('open');
            stopConfetti(); // Detener el confetti al cerrar la caja
        } else {
            giftBox.classList.add('open');
            startConfetti(); // Iniciar el confetti al abrir la caja
        }
    });
});
