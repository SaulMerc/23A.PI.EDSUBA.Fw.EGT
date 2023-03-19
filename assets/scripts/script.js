const menuButtonX = document.getElementById('menuX-button');
const menuX = document.getElementById('menuX');

menuButtonX.addEventListener('click', () => {
  menuX.classList.toggle('show');
});

const menuButtonY = document.getElementById('menuY-button');
const menuY = document.getElementById('menuY');

menuButtonY.addEventListener('click', () => {
  menuY.classList.toggle('show');
});

const menuButtonH = document.getElementById('menuH-button');
const menuH = document.getElementById('menuH');

menuButtonH.addEventListener('click', () => {
  menuH.classList.toggle('show');
});

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
//Variables
const modalBtn = document.getElementById('modalBtn'); //Boton que sirva de referencia
const closeBtn = document.querySelector('.icon_Close'); //Boton personalizado de cerrado la "x"
const okBtn = document.getElementById('modal_okBtn');//Boton de entendido / deacuerdo
const modal = document.querySelector('.modal'); //Referencia al modal, para poderlo aparecer y desaparecer.

//Activar modal
modalBtn.addEventListener('click',()=>{
    modal.classList.add('active');
})
//Desactivar modal con boton x
closeBtn.addEventListener('click',()=>{
    modal.classList.remove('active');
})
//Desactivar modal con boton entendido
okBtn.addEventListener('click',()=>{
    modal.classList.remove('active');
})
//Desactivar modal al dal clic fuera del modal, en alguna parte de la pantalla.
window.addEventListener('click', event => {
    if(event.target == modal){
        modal.classList.remove('active');
    }
})



///////////////////////////////////////////////CARRUSELLLLLL////////////////////////////
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


// agregar fixed para la barra de navegacion
window.onscroll = function() {myFunction()};

var header = document.getElementById("menufix");

function myFunction() {
  if (window.pageYOffset > 160) {
    header.classList.add("menufixed");
  } else {
    header.classList.remove("menufixed");
  }
}