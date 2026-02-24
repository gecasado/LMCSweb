// ========================================
// DATOS DE EVENTOS 2026
// ========================================
const eventos = [
    {
        id: 'roscon',
        fecha: '2026-01-06',
        fechaTexto: '6 Ene',
        titulo: 'Roscón de Reyes',
        descripcion: 'Comenzamos el año compartiendo el tradicional Roscón de Reyes con toda la comunidad.',
        ubicacion: 'Fundación 26 de Diciembre',
        direccion: 'Calle Fray Ceferino González, 4, Madrid',
        logo: 'images/nosotros/26d.webp',
        horario: '18:00',
        especial: false,
        cartel: 'images/galeria/2026/enero2026.webp'
    },
    {
        id: 'mls-febrero',
        fecha: '2026-02-07',
        fechaTexto: '7 Feb',
        titulo: 'Madrid Leather Social',
        descripcion: 'Encuentro mensual de la comunidad leather en Madrid.',
        ubicacion: 'Ingrato Madrid',
        direccion: 'Calle de Muñoz Torrero, 5',
        logo: 'images/nosotros/ingrato.webp',
        horario: '18:00',
        especial: false,
        cartel: 'images/galeria/2026/febrero2026.webp',
        galeria: 'galeria-2026-social-febrero'
    },
    {
        id: 'mls-marzo',
        fecha: '2026-03-07',
        fechaTexto: '7 Mar',
        titulo: 'Madrid Leather Social - 2nd Hand Market',
        descripcion: 'Social mensual con mercadillo de segunda mano de prendas leather y accesorios.',
        ubicacion: 'Inklub',
        direccion: 'Calle Marqués de Leganés, 12, Madrid',
        logo: 'images/nosotros/inklub.webp',
        horario: '18:00',
        especial: false,
        cartel: 'images/galeria/2026/marzo2026.webp'
    },
    {
        id: 'iberian-meetup',
        fecha: '2026-03-20',
        fechaFin: '2026-03-22',
        fechaTexto: '20-22 Mar',
        titulo: 'Iberian Leather Meet-up',
        descripcion: 'Encuentro ibérico de la comunidad leather. Un fin de semana de hermandad entre clubes de España y Portugal.',
        ubicacion: 'Varios lugares',
        direccion: 'Badajoz',
        logo: 'images/nosotros/logolmcs_black.webp',
        horario: 'Viernes a Domingo',
        especial: true,
        cartel: 'images/galeria/2026/iberian2026.webp',
        contacto: 'iberianfetish@gmail.com'
    },
    {
        id: 'bluf-abril',
        fecha: '2026-04-04',
        fechaTexto: '4 Abr',
        titulo: 'Madrid Leather Social - BLUF Social',
        descripcion: 'Evento conjunto con BLUF Madrid. Leather y uniform unidos.',
        ubicacion: 'Inklub',
        direccion: 'Calle Marqués de Leganés, 12, Madrid',
        logo: 'images/nosotros/inklub.webp',
        horario: '18:00',
        especial: false
    },
    {
        id: 'aniversario',
        fecha: '2026-05-01',
        fechaFin: '2026-05-03',
        fechaTexto: '1-3 May',
        titulo: '7º Aniversario LMCS',
        descripcion: 'Celebramos siete años de comunidad, amistad y leather. Un fin de semana especial con múltiples actividades y fiestas.',
        ubicacion: 'Varios lugares',
        direccion: 'Madrid',
        logo: 'images/nosotros/logolmcs_black.webp',
        horario: 'Viernes a Domingo',
        especial: true
    },
    {
        id: 'mls-junio',
        fecha: '2026-06-06',
        fechaTexto: '6 Jun',
        titulo: 'Madrid Leather Social',
        descripcion: 'Encuentro mensual preparándonos para el verano.',
        ubicacion: 'Inklub',
        direccion: 'Calle Marqués de Leganés, 12, Madrid',
        logo: 'images/nosotros/inklub.webp',
        horario: '18:00',
        especial: false
    },
    {
        id: 'pride',
        fecha: '2026-07-03',
        fechaFin: '2026-07-05',
        fechaTexto: '3-5 Jul',
        titulo: 'Madrid Pride',
        descripcion: 'Participación del club en las fiestas del Orgullo de Madrid. Carroza, fiestas y mucha visibilidad leather.',
        ubicacion: 'Varios lugares',
        direccion: 'Madrid',
        logo: 'images/nosotros/logolmcs_black.webp',
        horario: 'Viernes a Domingo',
        especial: true
    },
    {
        id: 'mls-septiembre',
        fecha: '2026-09-05',
        fechaTexto: '5 Sep',
        titulo: 'Madrid Leather Social',
        descripcion: 'Reencuentro con la comunidad tras el verano.',
        ubicacion: 'Inklub',
        direccion: 'Calle Marqués de Leganés, 12, Madrid',
        logo: 'images/nosotros/inklub.webp',
        horario: '18:00',
        especial: false
    },
    {
        id: 'mls-octubre',
        fecha: '2026-10-03',
        fechaTexto: '3 Oct',
        titulo: 'Madrid Leather Social',
        descripcion: 'El otoño trae el mejor ambiente para el cuero.',
        ubicacion: 'Inklub',
        direccion: 'Calle Marqués de Leganés, 12, Madrid',
        logo: 'images/nosotros/inklub.webp',
        horario: '18:00',
        especial: false
    },
    {
        id: 'mlw',
        fecha: '2026-10-30',
        fechaFin: '2026-11-01',
        fechaTexto: '30 Oct - 1 Nov',
        titulo: 'Madrid Leather Weekend - Mr. Leather Spain 2027',
        descripcion: 'El evento más importante del año. Tres días de celebración leather con la elección de Mr. Leather Spain 2027.',
        ubicacion: 'Varios lugares',
        direccion: 'Madrid',
        logo: 'images/nosotros/logolmcs_black.webp',
        horario: 'Viernes a Domingo',
        especial: true
    },
    {
        id: 'bluf-noviembre',
        fecha: '2026-11-07',
        fechaTexto: '7 Nov',
        titulo: 'Madrid Leather Social - BLUF Social',
        descripcion: 'Cerramos el año de sociales con BLUF Madrid.',
        ubicacion: 'Inklub',
        direccion: 'Calle Marqués de Leganés, 12, Madrid',
        logo: 'images/nosotros/inklub.webp',
        horario: '18:00',
        especial: false
    }
];

// ========================================
// FUNCIONES
// ========================================
const hoy = new Date();
hoy.setHours(0, 0, 0, 0);

function getEstado(evento) {
    const fecha = new Date(evento.fecha);
    const fechaFin = evento.fechaFin ? new Date(evento.fechaFin) : fecha;
    if (fechaFin < hoy) return 'past';
    return 'future';
}

function encontrarProximo() {
    for (let i = 0; i < eventos.length; i++) {
        if (getEstado(eventos[i]) === 'future') {
            return i;
        }
    }
    return -1;
}

function generarTimeline() {
    const timeline = document.getElementById('timeline');
    const proximoIndex = encontrarProximo();

    let html = '';
    eventos.forEach((evento, index) => {
        const estado = getEstado(evento);
        let clases = ['timeline-item', estado];

        if (index === proximoIndex) clases.push('next');
        if (evento.especial) clases.push('special');

        let nombreCorto = evento.titulo.split(' - ')[0];
        if (nombreCorto.length > 15) {
            nombreCorto = nombreCorto.substring(0, 14) + '...';
        }

        html += `
            <div class="${clases.join(' ')}" onclick="scrollToEvento('${evento.id}')">
                <div class="timeline-dot"></div>
                <div class="timeline-content">
                    <div class="timeline-date">${evento.fechaTexto}</div>
                    <div class="timeline-name">${nombreCorto}</div>
                </div>
            </div>
        `;
    });

    timeline.innerHTML = html;
}

function generarTarjetaEvento(evento, index, proximoIndex) {
    const estado = getEstado(evento);
    let clases = ['evento-card', estado];

    if (index === proximoIndex) clases.push('next');
    if (evento.especial) clases.push('special');

    let statusText = '';
    let statusClass = '';
    if (estado === 'past') {
        statusText = '<i class="fas fa-check"></i> Finalizado';
        statusClass = 'pasado';
    } else if (index === proximoIndex) {
        statusText = '<i class="fas fa-bolt"></i> Próximo';
        statusClass = 'proximo';
    } else {
        statusText = '<i class="fas fa-calendar"></i> Próximamente';
        statusClass = 'futuro';
    }

    const cartelHtml = evento.cartel
        ? `<div class="evento-card-image">
               <img loading="lazy" src="${evento.cartel}" alt="${evento.titulo}">
           </div>`
        : '';

    return `
        <div class="${clases.join(' ')}${evento.cartel ? ' has-cartel' : ''}" id="${evento.id}">
            <div class="evento-card-header">
                <div class="fecha">
                    <i class="fas fa-calendar-alt"></i>
                    ${evento.fechaTexto} 2026
                </div>
                ${evento.especial ? '<div class="special-badge"><i class="fas fa-star"></i></div>' : ''}
                <h3>${evento.titulo}</h3>
            </div>
            <div class="evento-card-lower">
                ${cartelHtml}
                <div class="evento-card-body">
                    <p class="evento-description">${evento.descripcion}</p>
                    <div class="evento-info-grid">
                        <div class="evento-ubicacion">
                            <img loading="lazy" src="${evento.logo}" alt="${evento.ubicacion}" class="ubicacion-logo" onerror="this.src='images/nosotros/logolmcs_black.webp'">
                            <div class="ubicacion-info">
                                <div class="ubicacion-nombre">${evento.ubicacion}</div>
                                <div class="ubicacion-direccion">${evento.direccion}</div>
                            </div>
                        </div>
                        <div class="evento-horario">
                            <i class="fas fa-clock"></i>
                            <span class="horario-text">${evento.horario}</span>
                        </div>
                    </div>
                    <div class="evento-status ${statusClass}">
                        ${statusText}
                    </div>
                    ${evento.galeria ? `<a href="${evento.galeria}" class="btn-ver-fotos"><i class="fas fa-images"></i> Ver fotos</a>` : ''}
                    ${evento.contacto ? `<a href="mailto:${evento.contacto}" class="btn-info-evento"><i class="fas fa-envelope"></i> Información</a>` : ''}
                </div>
            </div>
        </div>
    `;
}

function generarEventos() {
    const especialesContainer = document.getElementById('eventosEspeciales');
    const regularesContainer = document.getElementById('eventosRegulares');
    const proximoIndex = encontrarProximo();

    let especialesHtml = '';
    let regularesHtml = '';

    eventos.forEach((evento, index) => {
        const tarjeta = generarTarjetaEvento(evento, index, proximoIndex);
        if (evento.especial) {
            especialesHtml += tarjeta;
        } else {
            regularesHtml += tarjeta;
        }
    });

    especialesContainer.innerHTML = especialesHtml;
    regularesContainer.innerHTML = regularesHtml;
}

function scrollToEvento(id) {
    const elemento = document.getElementById(id);
    if (elemento) {
        elemento.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
}

// ========================================
// INICIALIZACIÓN
// ========================================
document.addEventListener('DOMContentLoaded', function() {
    generarTimeline();
    generarEventos();

    // Flechas para mover el timeline horizontal
    const scroller = document.getElementById('timelineScroll');
    const prevBtn = document.querySelector('.timeline-arrow.left');
    const nextBtn = document.querySelector('.timeline-arrow.right');

    function scrollTimeline(direction) {
        if (!scroller) return;
        const amount = Math.round(scroller.clientWidth * 0.85);
        scroller.scrollBy({ left: direction * amount, behavior: 'smooth' });
    }

    if (prevBtn) prevBtn.addEventListener('click', () => scrollTimeline(-1));
    if (nextBtn) nextBtn.addEventListener('click', () => scrollTimeline(1));

    // Centrar timeline en el evento próximo
    const nextItem = document.querySelector('.timeline-item.next');
    if (nextItem && scroller) {
        const itemCenter = nextItem.offsetLeft + nextItem.offsetWidth / 2;
        const scrollLeft = itemCenter - scroller.clientWidth / 2;
        scroller.scrollLeft = Math.max(0, scrollLeft);
    }
});

/* =========================
   MÓVIL: Header/Footer inteligentes por scroll
   ========================= */
(function () {
    const header = document.querySelector('header');
    const footer = document.querySelector('footer');
    const main = document.querySelector('main');
    if (!header || !footer) return;

    const mq = window.matchMedia('(max-width: 768px)');

    const HEADER_HIDE_PX = 90;
    const HEADER_SHOW_PX = 55;
    const FOOTER_SHOW_PX = 110;
    const FOOTER_ZONE_PX = 520;
    const TOP_SHOW_PX = 24;

    function getScroller() {
        if (main && main.scrollHeight > main.clientHeight + 2) return main;
        return document.scrollingElement || document.documentElement;
    }

    let scroller = getScroller();

    let lastY = scroller.scrollTop || 0;
    let accUp = 0;
    let accDown = 0;

    function resetStatesIfDesktop() {
        if (!mq.matches) {
            header.classList.remove('is-hidden');
            footer.classList.remove('is-visible');
        }
    }

    function atBottomZone() {
        const el = scroller;
        const remaining = el.scrollHeight - (el.scrollTop + el.clientHeight);
        return remaining <= FOOTER_ZONE_PX;
    }

    function onScroll() {
        if (!mq.matches) return;

        const maybe = getScroller();
        if (maybe !== scroller) {
            scroller.removeEventListener('scroll', onScroll);
            scroller = maybe;
            lastY = scroller.scrollTop || 0;
            scroller.addEventListener('scroll', onScroll, { passive: true });
            return;
        }

        const y = scroller.scrollTop || 0;
        const delta = y - lastY;

        if (Math.abs(delta) < 2) {
            lastY = y;
            return;
        }

        if (y <= TOP_SHOW_PX) {
            header.classList.remove('is-hidden');
            footer.classList.remove('is-visible');
            accUp = 0;
            accDown = 0;
            lastY = y;
            return;
        }

        if (delta > 0) {
            accDown += delta;
            accUp = 0;

            if (accDown >= HEADER_HIDE_PX) {
                header.classList.add('is-hidden');
            }

            if (atBottomZone() && accDown >= FOOTER_SHOW_PX) {
                footer.classList.add('is-visible');
            } else {
                footer.classList.remove('is-visible');
            }
        } else {
            accUp += Math.abs(delta);
            accDown = 0;

            if (accUp >= HEADER_SHOW_PX) {
                header.classList.remove('is-hidden');
            }

            footer.classList.remove('is-visible');
        }

        lastY = y;
    }

    scroller.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', () => {
        resetStatesIfDesktop();
        const maybe = getScroller();
        if (maybe !== scroller) {
            scroller.removeEventListener('scroll', onScroll);
            scroller = maybe;
            lastY = scroller.scrollTop || 0;
            scroller.addEventListener('scroll', onScroll, { passive: true });
        }
    });

    resetStatesIfDesktop();
})();
