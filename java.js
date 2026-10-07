    document.addEventListener("DOMContentLoaded", () => {
    const textTarget = document.getElementById("typing-text");
    const phrase = '"Meu nome é Hiago e sou um web designer focado em criar experiências digitais marcantes. Uno a estética funcional de sites à clareza visual de apresentações estratégicas."';
    let index = 0;

    function typeEffect() {
        if (index < phrase.length) {
            textTarget.textContent += phrase.charAt(index);
            index++;
            setTimeout(typeEffect, 8); 
        }
    }
    typeEffect();
    
    const scrollElements = document.querySelectorAll(".js-scroll");

    const elementInView = (el, dividend = 1) => {
        const elementTop = el.getBoundingClientRect().top;
        return (elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend);
    };

    const displayScrollElement = (element) => {
        element.classList.add("visible");
    };

    const handleScrollAnimation = () => {
        scrollElements.forEach((el) => {
            if (elementInView(el, 1.15)) {
                displayScrollElement(el);
            }
        });
    };

    window.addEventListener("scroll", () => {
        handleScrollAnimation();
    });
    handleScrollAnimation(); 

    const phoneInput = document.getElementById("telefone");

    phoneInput.addEventListener("input", (e) => {
        let x = e.target.value.replace(/\D/g, "").match(/(\d{0,2})(\d{0,5})(\d{0,4})/);
        e.target.value = !x ? x : "(" + x[1] + ") " + x[2] + (x[3] ? "-" + x[3] : "");
    });

    const themeToggleBtn = document.getElementById("theme-toggle");
    const savedTheme = localStorage.getItem("theme") || "dark";
    
    document.documentElement.setAttribute("data-theme", savedTheme);

    themeToggleBtn.addEventListener("click", () => {
        const currentTheme = document.documentElement.getAttribute("data-theme");
        let newTheme = "dark";

        if (currentTheme === "dark") {
            newTheme = "light";
        }

        document.documentElement.setAttribute("data-theme", newTheme);
        localStorage.setItem("theme", newTheme); 
    });

    const form = document.getElementById("portfolio-form");
    const modal = document.getElementById("custom-modal");
    const closeModalBtn = document.getElementById("close-modal-btn");

    form.addEventListener("submit", (e) => {
        e.preventDefault(); 
        
        modal.classList.add("active");
        form.reset(); 
    });

    closeModalBtn.addEventListener("click", () => {
        modal.classList.remove("active");
    });

    modal.addEventListener("click", (e) => {
        if(e.target === modal) {
            modal.classList.remove("active");
        }
    });
});
