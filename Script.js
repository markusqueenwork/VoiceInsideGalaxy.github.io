function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('menu-open');
    const burger = document.querySelector('.burger');
    burger.classList.toggle('open'); // Для анимации полосок, если добавить CSS
}
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', () => {
        document.getElementById('menu').classList.remove('menu-open');
    });
});
