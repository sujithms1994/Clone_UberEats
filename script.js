document.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    const address = document.getElementById('dest-address');
    // const address2 = document.getElementById('dest-address2');
    if (window.scrollY > 50) { // Adjust this value based on when you want the color change to occur
        header.classList.add('scrolled');
        address.style.display = 'flex' ;
        // address2.style.display = 'none' ;
    } else {
        header.classList.remove('scrolled');
        address.style.display = 'none' ;
        // address2.style.display = 'flex' ;
    }
});