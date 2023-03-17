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

(function () {
});