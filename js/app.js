const connect = document.getElementById('connect');
const toplink = document.getElementById('backToTop');


connect.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector('.mail a').focus();
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
});

toplink.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector('header').focus();
    document.getElementById('top').scrollIntoView({ behavior: 'smooth' });
});
