(function () {
    const EVENT_PHOTOS = {
        "social-febrero-2025": { photos: 10, href: "galeria-2025-social-febrero.html" },
        "market-marzo-2025": { photos: 0, href: null },
        "social-abril-2025": { photos: 10, href: "galeria-2025-social-abril.html" },
        "aniversario-mayo-2025": { photos: 0, href: null },
        "social-junio-2025": { photos: 0, href: null },
        "pride-julio-2025": { photos: 0, href: null },
        "social-septiembre-2025": { photos: 0, href: null },
        "market-octubre-2025": { photos: 0, href: null },
        "social-noviembre-2025": { photos: 0, href: null },
        "mlw-gala-dinner-2025": { photos: 59, href: "galeria-2025-mlw-gala-dinner.html" }
    };

    // Calcular total de fotos del año
    const totalPhotos = Object.values(EVENT_PHOTOS)
        .reduce((sum, event) => sum + (event.photos || 0), 0);

    const totalPhotosEl = document.getElementById('events-total-photos');
    if (totalPhotosEl) {
        totalPhotosEl.textContent =
            totalPhotos > 0
                ? `${totalPhotos} fotos increíbles que vivimos juntos`
                : 'Próximamente nuevas fotos';
    }

    // Pintar contador de fotos / Próximamente
    document.querySelectorAll('.event-photos[data-event]').forEach((el) => {
        const key = el.getAttribute('data-event');
        const cfg = EVENT_PHOTOS[key];

        if (!cfg || !cfg.photos) {
            el.innerHTML = '<i class="fas fa-images"></i> Próximamente';
            return;
        }
        el.innerHTML = '<i class="fas fa-images"></i> ' + cfg.photos + ' fotos';
    });

    // Activar / desactivar botones según haya fotos
    document.querySelectorAll('.btn-event[data-event-link]').forEach((btn) => {
        const key = btn.getAttribute('data-event-link');
        const cfg = EVENT_PHOTOS[key];

        if (!cfg || !cfg.photos || !cfg.href) {
            btn.classList.add('btn-disabled');
            btn.setAttribute('href', '#');
            btn.textContent = 'Próximamente';
            return;
        }

        btn.classList.remove('btn-disabled');
        btn.setAttribute('href', cfg.href);
        btn.innerHTML = 'Ver fotos <i class="fas fa-arrow-right"></i>';
    });
})();
