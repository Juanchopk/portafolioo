// Función para el scroll suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Buscador de proyectos
document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('searchInput');
    const proyectos = document.querySelectorAll('.proyecto');

    searchInput.addEventListener('input', function () {
        const query = this.value.toLowerCase();

        proyectos.forEach(proyecto => {
            const title = proyecto.querySelector('h3').textContent.toLowerCase();
            const description = proyecto.querySelector('p').textContent.toLowerCase();

            if (title.includes(query) || description.includes(query)) {
                proyecto.style.display = '';
            } else {
                proyecto.style.display = 'none';
            }
        });
    });
});
