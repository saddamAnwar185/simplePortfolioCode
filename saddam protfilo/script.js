function html() {
    const progressBar = document.getElementById('html');
    let width = 0;

    const interval = setInterval(() => {
        if (width >= 99) {
            clearInterval(interval);
        } else {
            width++;
            progressBar.style.width = width + '%';
            progressBar.textContent = width + '%';
        }
    }, 30); // Adjust the speed here
}
html();

function css() {
    const progressBar = document.getElementById('css');
    let width = 0;

    const interval = setInterval(() => {
        if (width >= 95) {
            clearInterval(interval);
        } else {
            width++;
            progressBar.style.width = width + '%';
            progressBar.textContent = width + '%';
        }
    }, 30); // Adjust the speed here
}
css();

function js() {
    const progressBar = document.getElementById('js');
    let width = 0;

    const interval = setInterval(() => {
        if (width >= 75) {
            clearInterval(interval);
        } else {
            width++;
            progressBar.style.width = width + '%';
            progressBar.textContent = width + '%';
        }
    }, 30); // Adjust the speed here
}
js();

function bootstrap() {
    const progressBar = document.getElementById('bootstrap');
    let width = 0;

    const interval = setInterval(() => {
        if (width >= 99) {
            clearInterval(interval);
        } else {
            width++;
            progressBar.style.width = width + '%';
            progressBar.textContent = width + '%';
        }
    }, 30); // Adjust the speed here
}
bootstrap();



