const connect = document.getElementById('connect');
const toplink = document.getElementById('backToTop');
const darkmodeTheme = document.getElementById('darkmode');
const siteBody = document.querySelector('body');


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

darkmodeTheme.addEventListener('click', e => {
    if (siteBody.className === '') {
        siteBody.className = 'darkmode';
    } else if (siteBody.className === 'darkmode') {
        siteBody.className = '';
    }
})