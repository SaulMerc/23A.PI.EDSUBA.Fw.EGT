(function () {



})();

const darkModeToggle = document.querySelector('#dark-mode-toggle');
const body = document.querySelector('body');

darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
});

function checkOnlyOne(checkbox) {
    var checkboxes = document.getElementsByName('option');
    checkboxes.forEach((item) => {
        if (item !== checkbox) item.checked = false;
    });
}