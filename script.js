const buttons = document.querySelectorAll('.dropdown-button');

buttons.forEach(button => {
    button.addEventListener('click', function () {
        this.classList.toggle('active');
    });
});
