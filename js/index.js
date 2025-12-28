window.document.addEventListener('DOMContentLoaded', () => {
    const btnsVamosLa = document.querySelectorAll('.btn-vamos-la');
    for (let btn of btnsVamosLa) {
        btn.addEventListener('click', () => {
            window.location.href = '../html/home.html';
        });
    };
});