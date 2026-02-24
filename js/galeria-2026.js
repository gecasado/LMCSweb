(function () {
    const EVENT_PHOTOS = {
        "roscon-enero-2026": { photos: 0, href: null },
        "social-febrero-2026": { photos: 96, href: "galeria-2026-social-febrero" },
        "market-marzo-2026": { photos: 0, href: null },
        "iberian-marzo-2026": { photos: 0, href: null },
        "bluf-abril-2026": { photos: 0, href: null },
        "aniversario-mayo-2026": { photos: 0, href: null },
        "social-junio-2026": { photos: 0, href: null },
        "pride-julio-2026": { photos: 0, href: null },
        "social-septiembre-2026": { photos: 0, href: null },
        "social-octubre-2026": { photos: 0, href: null },
        "mlw-2026": { photos: 0, href: null },
        "bluf-noviembre-2026": { photos: 0, href: null }
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
