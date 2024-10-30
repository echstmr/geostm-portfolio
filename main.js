const menuIcon = document.getElementById('menuIcon');
const preview = document.getElementById('preview');


menuIcon.addEventListener('click', () => {
    preview.classList.toggle('show');
    menuIcon.classList.toggle('fa-x'); 
});


window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        menuIcon.classList.add('scroll-black'); 
    } else {
        menuIcon.classList.remove('scroll-black');
    }

    if (preview.classList.contains('show')) {
        preview.classList.remove('show');
        menuIcon.classList.remove('fa-x');
    }
});
