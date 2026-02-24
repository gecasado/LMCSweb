(function () {
    // Cada año: leemos su JS (donde está EVENT_PHOTOS) y su HTML (donde están las event-card)
    var YEAR_PAGES = [
        { year: 2026, js: 'js/galeria-2026.js', html: 'galeria-2026.html' },
        { year: 2025, js: 'js/galeria-2025.js', html: 'galeria-2025.html' }
    ];

    YEAR_PAGES.forEach(function (entry) {
        // Lanzar ambas peticiones en paralelo
        Promise.all([
            fetch(entry.js).then(function (r) { return r.text(); }),
            fetch(entry.html).then(function (r) { return r.text(); })
        ]).then(function (results) {
            var jsText = results[0];
            var htmlText = results[1];

            // Contar eventos: cada <div class="event-card"> en el HTML
            var eventMatches = htmlText.match(/class="event-card/g);
            var numEvents = eventMatches ? eventMatches.length : 0;

            // Sumar fotos: buscar photos: N en el JS
            var totalPhotos = 0;
            var photoMatches = jsText.match(/photos:\s*(\d+)/g);
            if (photoMatches) {
                photoMatches.forEach(function (m) {
                    var num = parseInt(m.replace(/photos:\s*/, ''), 10);
                    if (!isNaN(num)) totalPhotos += num;
                });
            }

            var eventsEl = document.getElementById('stats-' + entry.year + '-events');
            var photosEl = document.getElementById('stats-' + entry.year + '-photos');

            if (eventsEl) eventsEl.textContent = numEvents + ' Eventos';
            if (photosEl) photosEl.textContent = totalPhotos > 0
                ? totalPhotos + ' Fotos'
                : 'Próximamente';
        });
    });
})();
