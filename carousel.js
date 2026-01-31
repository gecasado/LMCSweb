// ========================================
// CAROUSEL - Madrid Leather Weekend
// Swiper.js Configuration
// ========================================

// Variable global para el swiper
let swiper;

// Inicializar Swiper cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    
    console.log('DOM loaded, initializing Swiper...'); // Debug
    
    // Inicializar Swiper
    swiper = new Swiper(".eventSwiper", {
        loop: false,
        speed: 600,
        effect: 'slide',
        
        // Navegación con flechas
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        
        // Navegación con teclado
        keyboard: {
            enabled: true,
            onlyInViewport: true,
        },
        
        // Swipe en móvil
        touchRatio: 1,
        
        // Lazy loading
        lazy: {
            loadPrevNext: true,
            loadPrevNextAmount: 2,
        },
        
        // Preload images
        preloadImages: false,
        
        // Update en cada cambio
        on: {
            slideChange: function () {
                updateProgress(this);
            },
            init: function() {
                updateProgress(this);
            }
        },
    });
    
    console.log('Swiper initialized:', swiper); // Debug

    // ========================================
    // FUNCIÓN: Actualizar progreso
    // ========================================
    function updateProgress(swiperInstance) {
        // Usar la instancia pasada o la global
        const sw = swiperInstance || swiper;
        
        if (!sw) {
            console.error('Swiper not initialized in updateProgress');
            return;
        }
        
        const current = sw.realIndex + 1;
        const total = sw.slides.length;
        const percentage = Math.round((current / total) * 100);
        
        // Actualizar contador
        const currentSlideEl = document.getElementById('currentSlide');
        const totalSlidesEl = document.getElementById('totalSlides');
        const percentageEl = document.getElementById('percentage');
        
        if (currentSlideEl) currentSlideEl.textContent = current;
        if (totalSlidesEl) totalSlidesEl.textContent = total;
        if (percentageEl) percentageEl.textContent = percentage;
        
        // Actualizar barra de progreso
        const progressBar = document.getElementById('progressBar');
        if (progressBar) {
            progressBar.style.width = percentage + '%';
        }
        
        console.log('Progress updated:', current, '/', total, '(' + percentage + '%)'); // Debug
    }

    // ========================================
    // BOTÓN: Descargar foto actual
    // ========================================
    const downloadBtn = document.getElementById('downloadBtn');
    if (downloadBtn) {
        downloadBtn.addEventListener('click', function() {
            console.log('Download button clicked'); // Debug
            
            if (!swiper) {
                console.error('Swiper not initialized');
                alert('Error: El carrousel no está inicializado');
                return;
            }
            
            try {
                const currentSlide = swiper.slides[swiper.activeIndex];
                const img = currentSlide.querySelector('img');
                
                if (!img) {
                    console.error('Image not found in current slide');
                    alert('No se encontró la imagen');
                    return;
                }
                
                const imgSrc = img.src;
                console.log('Image source:', imgSrc); // Debug
                
                // Crear enlace y hacer click
                const link = document.createElement('a');
                link.href = imgSrc;
                link.download = 'LMCS-GalaDinner-Foto' + (swiper.realIndex + 1) + '.jpg';
                link.target = '_blank';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                
                console.log('Download initiated'); // Debug
            } catch (error) {
                console.error('Error downloading:', error);
                alert('Error al descargar la imagen. Haz click derecho en la imagen y selecciona "Guardar imagen como..."');
            }
        });
    } else {
        console.error('Download button not found');
    }

    // ========================================
    // BOTÓN: Pantalla completa
    // ========================================
    const fullscreenBtn = document.getElementById('fullscreenBtn');
    if (fullscreenBtn) {
        fullscreenBtn.addEventListener('click', function() {
            console.log('Fullscreen button clicked'); // Debug
            
            const carousel = document.querySelector('.eventSwiper');
            
            if (!carousel) {
                console.error('Carousel not found');
                alert('No se encontró el carrousel');
                return;
            }
            
            try {
                if (!document.fullscreenElement && 
                    !document.webkitFullscreenElement && 
                    !document.mozFullScreenElement &&
                    !document.msFullscreenElement) {
                    
                    // Entrar en pantalla completa - probar diferentes métodos
                    if (carousel.requestFullscreen) {
                        carousel.requestFullscreen();
                    } else if (carousel.webkitRequestFullscreen) { // Safari
                        carousel.webkitRequestFullscreen();
                    } else if (carousel.mozRequestFullScreen) { // Firefox
                        carousel.mozRequestFullScreen();
                    } else if (carousel.msRequestFullscreen) { // IE/Edge
                        carousel.msRequestFullscreen();
                    } else {
                        console.error('Fullscreen not supported');
                        alert('Tu navegador no soporta pantalla completa');
                    }
                    console.log('Entering fullscreen'); // Debug
                } else {
                    // Salir de pantalla completa
                    if (document.exitFullscreen) {
                        document.exitFullscreen();
                    } else if (document.webkitExitFullscreen) {
                        document.webkitExitFullscreen();
                    } else if (document.mozCancelFullScreen) {
                        document.mozCancelFullScreen();
                    } else if (document.msExitFullscreen) {
                        document.msExitFullscreen();
                    }
                    console.log('Exiting fullscreen'); // Debug
                }
            } catch (error) {
                console.error('Fullscreen error:', error);
                alert('Error al activar pantalla completa: ' + error.message);
            }
        });
    } else {
        console.error('Fullscreen button not found');
    }

    // ========================================
    // EVENTO: Cambiar icono fullscreen
    // ========================================
    // Soportar diferentes navegadores
    document.addEventListener('fullscreenchange', changeFullscreenIcon);
    document.addEventListener('webkitfullscreenchange', changeFullscreenIcon);
    document.addEventListener('mozfullscreenchange', changeFullscreenIcon);
    document.addEventListener('MSFullscreenChange', changeFullscreenIcon);
    
    function changeFullscreenIcon() {
        const btn = document.querySelector('#fullscreenBtn i');
        if (!btn) return;
        
        const isFullscreen = document.fullscreenElement || 
                            document.webkitFullscreenElement || 
                            document.mozFullScreenElement ||
                            document.msFullscreenElement;
        
        if (isFullscreen) {
            btn.className = 'fas fa-compress';  // Icono comprimir
            console.log('Fullscreen mode activated'); // Debug
        } else {
            btn.className = 'fas fa-expand';    // Icono expandir
            console.log('Fullscreen mode deactivated'); // Debug
        }
    }

});