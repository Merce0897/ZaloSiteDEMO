const goToTopBtn = document.querySelector('.Footer_gototop')


        window.addEventListener('scroll', () => {
            if (window.scrollY >= 80) {
                goToTopBtn.style.display = 'flex'
                setTimeout(() => {
                    goToTopBtn.style.opacity = 1
                },20)
            } else {
                    goToTopBtn.style.opacity = 0
            }
        })
        goToTopBtn.addEventListener('click', () => {
            document.documentElement.scrollTop = 0
        })
