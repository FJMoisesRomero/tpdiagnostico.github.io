window.onscroll = () =>{
let header = document.querySelector(".header");
header.classList.toggle("sticky", window.scrollY > 100);
};

// Selecciona todos los enlaces internos de la página
const linksInternos = document.querySelectorAll('a[href^="#"]');

// Itera sobre cada enlace interno
linksInternos.forEach(link => {
  // Agrega un evento de clic a cada enlace
  link.addEventListener('click', function(e) {
    // Previene la acción predeterminada del clic
    e.preventDefault();

    // Obtiene el ID del destino de desplazamiento
    const id = this.getAttribute('href');

    // Obtiene la posición del destino de desplazamiento
    const destino = document.querySelector(id);
    const posicion = destino.offsetTop;

    // Anima el desplazamiento suavemente
    window.scroll({
      top: posicion,
      behavior: 'smooth'
    });

    // Cambia la clase activa en el enlace correspondiente
    const linksActivos = document.querySelectorAll('.active');
    linksActivos.forEach(linkActivo => {
      linkActivo.classList.remove('active');
    });
    this.classList.add('active');
  });
});

// Agrega un evento de scroll a la ventana
window.addEventListener('scroll', function() {
  // Obtiene la posición actual del scroll
  const posicionActual = window.scrollY;

  // Itera sobre cada sección de la página
  const secciones = document.querySelectorAll('section');
  secciones.forEach(seccion => {
    // Obtiene la posición de la sección
    const posicionSeccion = seccion.offsetTop;

    // Si la posición del scroll está dentro de la sección, cambia la clase activa en el enlace correspondiente
    if (posicionActual >= posicionSeccion && posicionActual < posicionSeccion + seccion.offsetHeight) {
      const linksActivos = document.querySelectorAll('.active');
      linksActivos.forEach(linkActivo => {
        linkActivo.classList.remove('active');
      });

      const linksInternos = document.querySelectorAll('a[href="#' + seccion.getAttribute('id') + '"]');
      linksInternos.forEach(linkInterno => {
        linkInterno.classList.add('active');
      });
    }
  });
});

/*Paleta de colores*/
const colorPicker = document.getElementById('color-picker');
const colorPalette = document.getElementById('color-palette');
const colors = document.querySelectorAll('.color');

let mainColor = getComputedStyle(document.documentElement).getPropertyValue('--main-color');

colorPicker.addEventListener('click', function() {
  colorPalette.style.display = 'block';
});

document.addEventListener('click', function(event) {
  if (!colorPalette.contains(event.target) && event.target !== colorPicker) {
    colorPalette.style.display = 'none';
  }
});

colors.forEach(function(color) {
  color.addEventListener('click', function() {
    mainColor = getComputedStyle(color).getPropertyValue('--color-value');
    document.documentElement.style.setProperty('--main-color', mainColor);
    colorPalette.style.display = 'none';
  });
});

/*Modo Oscuro*/

const toggleIcon = document.querySelector(".toggle-icon");

toggleIcon.addEventListener('click',()=>{
  toggleIcon.classList.toggle('bx-sun')

  if (document.body.classList.contains('dark-mode')) {
      document.documentElement.style.setProperty('--bg-color', '#fdfdfd');
      document.documentElement.style.setProperty('--text-color', '#333');
      document.body.classList.remove('dark-mode');
  } else {

      document.body.classList.toggle('dark-mode');
      document.documentElement.style.setProperty('--text-color', '#fdfdfd');
      document.documentElement.style.setProperty('--bg-color', '#222');

  }
})
