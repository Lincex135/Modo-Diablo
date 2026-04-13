document.querySelectorAll('.plat-card').forEach(card => {
    card.addEventListener('click', function (e) {
        // Efecto de pulso
        this.animate([
            { transform: 'scale(1)' },
            { transform: 'scale(0.88)' },
            { transform: 'scale(1.12)' },
            { transform: 'scale(1)' }
        ], { duration: 350, easing: 'ease-out' });
    });

    // Efecto magnético suave al mover el ratón
    card.addEventListener('mousemove', function (e) {
        const rect = this.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const dx = (e.clientX - cx) / rect.width * 10;
        const dy = (e.clientY - cy) / rect.height * 10;
        this.style.transform = `translateY(-8px) scale(1.08) rotateX(${-dy}deg) rotateY(${dx}deg)`;
    });

    card.addEventListener('mouseleave', function () {
        this.style.transform = '';
    });
});