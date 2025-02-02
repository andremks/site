document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Impede o comportamento padrão do link
        const targetId = this.getAttribute('href').substring(1); // Pega o ID do href
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop, // Scroll até o topo do elemento
                behavior: 'smooth' // Scroll suave
            });
        }
    });
});






const scrollTopBtn = document.getElementById('scrollTop')


        window.addEventListener('scroll', () => {
            if (window.scrollY > 200) {
                scrollTopBtn.classList.remove('hidden')
            } else {
                scrollTopBtn.classList.add('hidden')
            }
        })


        scrollTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth',
            })
        })