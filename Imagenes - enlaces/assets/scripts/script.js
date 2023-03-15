// Define una función llamada setResponsiveImages
function setResponsiveImages() {
  // Busca todas las imágenes que tengan la clase "img-responsive" y guárdalas en la variable images
  const images = document.querySelectorAll('.img-responsive');
  
  // Recorre todas las imágenes encontradas con forEach()
  images.forEach((image) => {
    // Obtiene la lista de clases de la imagen actual
    const classList = image.classList;
    
    // Busca la clase que comience con "img-width-" y extrae el valor numérico
    const widthClass = Array.from(classList).find((className) => {
      return className.startsWith('img-width-');
    });
    
    // Si se encontró una clase que empieza con "img-width-"
    if (widthClass) {
      // Extrae el valor numérico de la clase y conviértelo a un número decimal
      const widthValue = parseFloat(widthClass.replace('img-width-', '')) / 100;
      
      // Asigna el ancho máximo correspondiente a la imagen
      image.style.maxWidth = `${widthValue * 100}%`;
      
      // Establece la altura de la imagen en "auto" para mantener la relación de aspecto original
      image.style.height = 'auto';
    }
  });
}

// Ejecuta la función al cargar la página
setResponsiveImages();
