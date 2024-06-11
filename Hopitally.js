let clicker = document.querySelectorAll('#toggleButton')

clicker.forEach((click) => {
    click.addEventListener('click', function() {
        this.classList.toggle('on');
        this.classList.toggle('off');
    });
});