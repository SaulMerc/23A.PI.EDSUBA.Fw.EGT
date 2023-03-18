const darkModeToggle = document.querySelector('#dark__ModeToggle');

darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark__Mode');
});

//Activar un solo radio button 
function checkOnlyOne(checkbox) {
    var checkboxes = document.getElementsByName('option');
    checkboxes.forEach((item) => {
        if (item !== checkbox) item.checked = false;
    });
}

// Validación de formularios

const miFormulario = document.getElementById('form');

miFormulario.addEventListener('submit', function (event) {
    event.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const telefono = document.getElementById('telefono').value;

    if (nombre.trim() === '' || email.trim() === '' || telefono.trim() === '') {
        alert('Por favor, complete todos los campos del formulario.');
        return false;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
        alert('Por favor, ingrese una dirección de correo electrónico válida.');
        return false;
    }

    if (!/^[a-zA-Z \s]+$/.test(nombre)) {
        alert('No puedes ingresar números en el nombre');
        return false;
    }

    if (!/^[0-9]+$/.test(telefono)) {
        alert('Solo puedes ingresar números sin espacios en el apartado de telefono');
        return false;
    }

    alert('El formulario se ha enviado correctamente.');
    form.reset();
    return true;
});

//Funcion de alertas y modal

const modalBtn = document.getElementById('modalBtn');
const closeBtn = document.querySelector('.icon_Close');
const okBtn = document.getElementById('modal_okBtn');
const modal = document.querySelector('.modal');

modalBtn.addEventListener('click',()=>{
    modal.classList.add('active');
})
closeBtn.addEventListener('click',()=>{
    modal.classList.remove('active');
})
okBtn.addEventListener('click',()=>{
    modal.classList.remove('active');
})
window.addEventListener('click', event => {
    if(event.target == modal){
        modal.classList.remove('active');
    }
})



///////////////////////////////////////////////CARRUSELLLLLL/////////////////////////
const siguienteImg = document.querySelector(".btn__siguienteimg");
const anteriorImg = document.querySelector(".btn__anteriorimg");
const elementosCarrusel = document.querySelectorAll(".container__elementocarrusel");


elementosCarrusel.forEach((imagen, indx) => {
  imagen.style.transform = `translateX(${indx * 100}%)`;
});


let imgActual = 0;


let imgMax = elementosCarrusel.length - 1;
/**
 * Accion para cambiar de imagen a la siguiente
 * y ponerle la animacion de transicion
 */
siguienteImg.addEventListener("click", function () {
  if (imgActual === imgMax) {
    imgActual = 0;
  } else {
    imgActual++;
  }

  
  elementosCarrusel.forEach((imagen, indx) => {
    imagen.style.transform = `translateX(${100 * (indx - imgActual)}%)`;
  });
});
/**
 * Funcion para poner la imagen anterior y ponerle la animacion
 */
anteriorImg.addEventListener("click", function () {
    console.log("Hiciste click en el botón de anterior");
  if (imgActual === 0) {
    imgActual = imgMax;
  } else {
    imgActual--;
  }
  

  
  elementosCarrusel.forEach((imagen, indx) => {
    imagen.style.transform = `translateX(${100 * (indx - imgActual)}%)`;
  });
});
