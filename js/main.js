const select = document.querySelector('.select');
const options = document.querySelector('.options');
const contentSelect = document.querySelector('.select .content-select');
const contentSelect2 = document.querySelector('.select2 .content-select');
const hiddenInput1 = document.querySelector('#inputSelect1');
const hiddenInput2 = document.querySelector('#inputSelect2');

document.querySelectorAll('.options > .option-select').forEach((option) => {
    console.log('hola');
});

select.addEventListener('click', () => {
    select.classList.toggle('active');
    options.classList.toggle('active');
});

const select2 = document.querySelector('.select2');
const options2 = document.querySelector('.options2');

document.querySelectorAll('.options2 > .option-select').forEach((option) => {
    console.log('hola');
});

select2.addEventListener('click', () => {
    select2.classList.toggle('active');
    options2.classList.toggle('active');
});


