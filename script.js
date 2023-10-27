const buttons = document.querySelectorAll('.dropdown-button');
const button = document.getElementById("button");
const log = document.getElementById("log");
let logVisible = false;
buttons.forEach(button => {
    button.addEventListener('click', function () {
        this.classList.toggle('active');
        if (logVisible) {
            log.style.display = 'none';
        } else {
            log.style.display = 'block';
        }
        logVisible = !logVisible;
    });
});
