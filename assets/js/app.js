document.addEventListener('DOMContentLoaded', () => {
    const buscador_noticias = document.getElementById('buscador-noticias');
  
    buscador_noticias.addEventListener('keyup', (e) => {
      e.preventDefault();
      const filtro = buscador_noticias.value.toLowerCase();
      const noticiasElements = Array.from(document.querySelectorAll('.testimonial-item'));
  
      noticiasElements.forEach(element => {
        const titulo = element.querySelector('h3').textContent.toLowerCase();
        if (titulo.includes(filtro)) {
          element.style.display = 'block';
          
        } else {
          element.style.display = 'none';
        }
      });
    });
  });
  