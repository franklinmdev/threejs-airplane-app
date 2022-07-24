const select = document.querySelector('.select');
const options = document.querySelector('.options');

select.addEventListener('click', () => {
    select.classList.toggle('active');
    options.classList.toggle('active');
});

const select2 = document.querySelector('.select2');
const options2 = document.querySelector('.options2');

select2.addEventListener('click', () => {
    select2.classList.toggle('active');
    options2.classList.toggle('active');
});


