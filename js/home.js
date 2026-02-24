/* =========================
   HOME: Próximo evento (auto)
   ========================= */

// Lista completa de eventos — siempre se muestra solo el más próximo.
// Cuando pasa la fecha, automáticamente aparece el siguiente.
const LMCS_EVENTS = [
    {
        title: "Madrid Leather Social",
        date: "2026-02-07T18:00:00",
        location: "Ingrato Madrid",
        url: "eventos.html#mls-febrero",
        cartel: "images/galeria/2026/febrero2026.webp"
    },
    {
        title: "Madrid Leather Social - 2nd Hand Market",
        date: "2026-03-07T18:00:00",
        location: "Inklub",
        url: "eventos.html#mls-marzo",
        cartel: "images/galeria/2026/marzo2026.webp"
    },
    {
        title: "Iberian Leather Meet-up",
        date: "2026-03-20T00:00:00",
        location: "Badajoz",
        url: "eventos.html#iberian-meetup",
        cartel: "images/galeria/2026/iberian2026.webp"
    },
    {
        title: "Madrid Leather Social - BLUF Social",
        date: "2026-04-04T18:00:00",
        location: "Inklub",
        url: "eventos.html#bluf-abril"
    },
    {
        title: "7º Aniversario LMCS",
        date: "2026-05-01T00:00:00",
        location: "Madrid",
        url: "eventos.html#aniversario"
    },
    {
        title: "Madrid Leather Social",
        date: "2026-06-06T18:00:00",
        location: "Inklub",
        url: "eventos.html#mls-junio"
    },
    {
        title: "Madrid Pride",
        date: "2026-07-03T00:00:00",
        location: "Madrid",
        url: "eventos.html#pride"
    },
    {
        title: "Madrid Leather Social",
        date: "2026-09-05T18:00:00",
        location: "Inklub",
        url: "eventos.html#mls-septiembre"
    },
    {
        title: "Madrid Leather Social",
        date: "2026-10-03T18:00:00",
        location: "Inklub",
        url: "eventos.html#mls-octubre"
    },
    {
        title: "Madrid Leather Weekend - Mr. Leather Spain 2027",
        date: "2026-10-30T00:00:00",
        location: "Madrid",
        url: "eventos.html#mlw"
    },
    {
        title: "Madrid Leather Social - BLUF Social",
        date: "2026-11-07T18:00:00",
        location: "Inklub",
        url: "eventos.html#bluf-noviembre"
    }
];

function pad2(n) { return String(n).padStart(2, "0"); }

function formatDateES(d) {
    const dd = pad2(d.getDate());
    const mm = pad2(d.getMonth() + 1);
    const yyyy = d.getFullYear();
    const hh = pad2(d.getHours());
    const min = pad2(d.getMinutes());
    return `${dd}/${mm}/${yyyy} · ${hh}:${min}`;
}

function formatCountdown(ms) {
    if (ms <= 0) return "Está ocurriendo ahora 🔥";
    const totalSeconds = Math.floor(ms / 1000);
    const days = Math.floor(totalSeconds / (24 * 3600));
    const hours = Math.floor((totalSeconds % (24 * 3600)) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);

    if (days > 0) return `Faltan ${days}d ${hours}h ${minutes}m`;
    if (hours > 0) return `Faltan ${hours}h ${minutes}m`;
    return `Faltan ${minutes}m`;
}

function getNextEvent(now) {
    const upcoming = LMCS_EVENTS
        .map(e => ({ ...e, dateObj: new Date(e.date) }))
        .filter(e => !isNaN(e.dateObj.getTime()))
        .filter(e => e.dateObj.getTime() >= now.getTime())
        .sort((a, b) => a.dateObj - b.dateObj);

    return upcoming[0] || null;
}

function renderNextEvent() {
    const now = new Date();
    const next = getNextEvent(now);

    const badge = document.getElementById("next-event-badge");
    const title = document.getElementById("next-event-title");
    const meta = document.getElementById("next-event-meta");
    const countdown = document.getElementById("next-event-countdown");
    const cartel = document.getElementById("next-event-cartel");

    if (!badge || !title || !meta || !countdown) return;

    if (!next) {
        badge.textContent = "Sin eventos próximos";
        title.textContent = "Ahora mismo no hay un evento programado";
        meta.textContent = "Vuelve pronto o mira el calendario completo 🙂";
        countdown.textContent = "";
        if (cartel) cartel.style.display = "none";
        return;
    }

    if (cartel) {
        if (next.cartel) {
            cartel.src = next.cartel;
            cartel.alt = next.title;
            cartel.style.display = "block";
        } else {
            cartel.style.display = "none";
        }
    }

    badge.textContent = "Próximo";
    title.textContent = next.title;
    meta.textContent = `${formatDateES(next.dateObj)} · ${next.location || "Ubicación por confirmar"}`;
    countdown.textContent = formatCountdown(next.dateObj.getTime() - now.getTime());
}

renderNextEvent();
setInterval(renderNextEvent, 30 * 1000);

/* =========================
   HOME: Carrusel (4 fotos)
   ========================= */

const LAST_EVENT_PHOTOS = [
    "images/galeria/2026/social_febrero/webp/madrid-leather-social-febrero-2026-05.webp",
    "images/galeria/2026/social_febrero/webp/madrid-leather-social-febrero-2026-21.webp",
    "images/galeria/2026/social_febrero/webp/madrid-leather-social-febrero-2026-42.webp",
    "images/galeria/2026/social_febrero/webp/madrid-leather-social-febrero-2026-63.webp",
    "images/galeria/2026/social_febrero/webp/madrid-leather-social-febrero-2026-84.webp"
];

let carouselIndex = 0;
const carouselImg = document.getElementById("carouselImage");
const carouselCaption = document.getElementById("carouselCaption");
const btnPrev = document.getElementById("carouselPrev");
const btnNext = document.getElementById("carouselNext");

function renderCarousel() {
    if (!carouselImg || !carouselCaption) return;

    const src = LAST_EVENT_PHOTOS[carouselIndex] || "";
    carouselImg.src = src;
    carouselImg.alt = `Foto del último evento (${carouselIndex + 1} de ${LAST_EVENT_PHOTOS.length})`;
    carouselCaption.textContent = `Último evento · ${carouselIndex + 1}/${LAST_EVENT_PHOTOS.length}`;
}

function nextSlide() {
    carouselIndex = (carouselIndex + 1) % LAST_EVENT_PHOTOS.length;
    renderCarousel();
}

function prevSlide() {
    carouselIndex = (carouselIndex - 1 + LAST_EVENT_PHOTOS.length) % LAST_EVENT_PHOTOS.length;
    renderCarousel();
}

if (btnPrev) btnPrev.addEventListener("click", prevSlide);
if (btnNext) btnNext.addEventListener("click", nextSlide);

renderCarousel();
setInterval(nextSlide, 30 * 1000);
