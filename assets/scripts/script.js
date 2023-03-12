const darkModeToggle = document.querySelector('#dark__ModeToggle');

darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark__Mode');
});

function checkOnlyOne(checkbox) {
    var checkboxes = document.getElementsByName('option');
    checkboxes.forEach((item) => {
        if (item !== checkbox) item.checked = false;
    });
}