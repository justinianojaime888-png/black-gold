// ==============================
// MENU MOBILE
// ==============================

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");


menuBtn.addEventListener("click", () => {

    navMenu.classList.toggle("active");

});



const navLinks =
    document.querySelectorAll(".nav-menu a");


navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

    });

});



// ==============================
// WHATSAPP
// ==============================

const whatsappNumber = "59178857920";


const whatsappLinks =
    document.querySelectorAll(".whatsapp-link");


whatsappLinks.forEach(link => {

    link.addEventListener("click", event => {

        event.preventDefault();


        const message =
            "Hola, quiero reservar una cita en Black & Gold Barbería.";


        const url =
            `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;


        window.open(url, "_blank");

    });

});



// ==============================
// FORMULARIO
// ==============================

const contactForm =
    document.getElementById("contactForm");


contactForm.addEventListener("submit", event => {

    event.preventDefault();


    const nombre =
        document.getElementById("nombre").value;


    const telefono =
        document.getElementById("telefono").value;


    const servicio =
        document.getElementById("servicio").value;


    const mensaje =
        document.getElementById("mensaje").value;


    const texto =
        `Hola, soy ${nombre}. ` +
        `Mi teléfono es ${telefono}. ` +
        `Quiero reservar: ${servicio}. ` +
        `${mensaje}`;


    const url =
        `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(texto)}`;


    window.open(url, "_blank");

});



// ==============================
// ANIMACIONES
// ==============================

const elements =
    document.querySelectorAll(".reveal");


const observer =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("active");

                    observer.unobserve(entry.target);

                }

            });

        },

        {
            threshold: 0.15
        }

    );


elements.forEach(element => {

    observer.observe(element);

});
