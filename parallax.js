var h1 = document.getElementById('h1').innerHTML;
console.log(h1)
window.addEventListener('scroll', () => {
    let value = window.scrollY;

    h1.style.marginTop = value * 2.5 + 'px';
})