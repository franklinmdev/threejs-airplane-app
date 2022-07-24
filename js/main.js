const select = document.querySelector('.select');
const options = document.querySelector('.options');
const contentSelect = document.querySelector('.select .content-select');
const contentSelect2 = document.querySelector('.select2 .content-select');
const hiddenInput1 = document.querySelector('#inputSelect1');
const hiddenInput2 = document.querySelector('#inputSelect2');

document.querySelectorAll('.options > .option-select').forEach((option) => {
    option.addEventListener('click', (e) => {
        e.preventDefault();
        contentSelect.innerHTML = e.currentTarget.innerHTML;
        select.classList.toggle('active');
        options.classList.toggle('active');
        hiddenInput1.value = e.currentTarget.querySelector('.title').innerText;
    });
});

select.addEventListener('click', () => {
    select.classList.toggle('active');
    options.classList.toggle('active');
});

const select2 = document.querySelector('.select2');
const options2 = document.querySelector('.options2');

document.querySelectorAll('.options2 > .option-select').forEach((option) => {
    option.addEventListener('click', (e) => {
        e.preventDefault();
        contentSelect2.innerHTML = e.currentTarget.innerHTML;
        select2.classList.toggle('active');
        options2.classList.toggle('active');
        hiddenInput2.value = e.currentTarget.querySelector('.title').innerText;
    });
});

select2.addEventListener('click', () => {
    select2.classList.toggle('active');
    options2.classList.toggle('active');
});


