document.addEventListener('DOMContentLoaded', function() {
    // Obtener el modal
    var modal = document.getElementById('welcomeModal');

    // Obtener el elemento de cerrar (x)
    var span = document.getElementsByClassName('close')[0];

    // Mostrar el modal al cargar la página
    modal.classList.add('show');

    // Cuando el usuario haga clic en (x), cerrar el modal
    span.onclick = function() {
        modal.classList.remove('show');
    }

    // Cuando el usuario haga clic fuera del contenido del modal, cerrar el modal
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.classList.remove('show');
        }
    }
});

document.addEventListener('DOMContentLoaded', function() {
    // Obtener el modal
    var modal = document.getElementById('welcomeModal');

    // Obtener el elemento de cerrar (x)
    var span = document.getElementsByClassName('close')[0];

    // Función para mostrar el modal
    function showModal() {
        modal.classList.add('show');
    }

    // Función para cerrar el modal
    function closeModal() {
        modal.classList.remove('show');
    }

    // Mostrar el modal al cargar la página
    showModal();

    // Cuando el usuario haga clic en (x), cerrar el modal
    span.onclick = function() {
        closeModal();
    }

    // Cuando el usuario haga clic fuera del contenido del modal, cerrar el modal
    window.onclick = function(event) {
        if (event.target == modal) {
            closeModal();
        }
    }

    // Cuando el usuario presione la tecla Esc, cerrar el modal
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            closeModal();
        }
    });
});

let currentIndex = 0;

// Función para mostrar la diapositiva actual
function showSlide(index) {
    const slides = document.querySelector('.slides');
    const totalSlides = document.querySelectorAll('.slide').length;

    if (index >= totalSlides) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalSlides - 1;
    } else {
        currentIndex = index;
    }

    const offset = -currentIndex * 100;
    slides.style.transform = `translateX(${offset}%)`;
}

// Función para ir a la diapositiva siguiente
function nextSlide() {
    showSlide(currentIndex + 1);
}

// Función para ir a la diapositiva anterior
function prevSlide() {
    showSlide(currentIndex - 1);
}

// Manejador de eventos para las flechas del teclado
document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowRight') {
        nextSlide();
    } else if (event.key === 'ArrowLeft') {
        prevSlide();
    }
});

// Inicializar la presentación mostrando la diapositiva inicial
showSlide(currentIndex);

// Cambio automático de diapositivas (opcional)
setInterval(nextSlide, 5000); // Cambia de diapositiva cada 5 segundos

