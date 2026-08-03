// ===============================
// MOBILE MENU
// ===============================

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {

    navMenu.classList.toggle("active");

});


// Mobile menu link par click hone ke baad menu close

const navLinks = document.querySelectorAll(".nav-menu a");

navLinks.forEach((link) => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

    });

});


// ===============================
// NAVBAR SCROLL EFFECT
// ===============================

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});


// ===============================
// SCROLL REVEAL ANIMATION
// ===============================

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(

    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("active");

                // Ek baar animation hone ke baad
                // dobara repeat nahi hogi

                revealObserver.unobserve(entry.target);

            }

        });

    },

    {
        threshold: 0.15
    }

);


revealElements.forEach((element) => {

    revealObserver.observe(element);

});


// ===============================
// GALLERY LIGHTBOX
// ===============================

const galleryItems =
    document.querySelectorAll(".gallery-item img");

const lightbox =
    document.getElementById("lightbox");

const lightboxImage =
    document.getElementById("lightboxImage");

const lightboxClose =
    document.getElementById("lightboxClose");

const lightboxPrev =
    document.getElementById("lightboxPrev");

const lightboxNext =
    document.getElementById("lightboxNext");

const lightboxCaption =
    document.getElementById("lightboxCaption");


// Current image ka number

let currentImageIndex = 0;


// ===============================
// OPEN LIGHTBOX
// ===============================

function openLightbox(index) {

    currentImageIndex = index;

    const selectedImage =
        galleryItems[currentImageIndex];

    lightboxImage.src =
        selectedImage.src;

    lightboxImage.alt =
        selectedImage.alt;

    lightboxCaption.textContent =
        selectedImage.alt;

    lightbox.classList.add("active");

    // Background scroll band

    document.body.style.overflow = "hidden";

}


// ===============================
// CLOSE LIGHTBOX
// ===============================

function closeLightbox() {

    lightbox.classList.remove("active");

    // Page scrolling wapas on

    document.body.style.overflow = "";

}


// ===============================
// GALLERY IMAGE CLICK
// ===============================

galleryItems.forEach((image, index) => {

    image.parentElement.addEventListener(
        "click",
        () => {

            openLightbox(index);

        }
    );

});


// ===============================
// NEXT IMAGE
// ===============================

function showNextImage() {

    currentImageIndex++;

    // Agar last image par hain
    // toh wapas first image

    if (currentImageIndex >= galleryItems.length) {

        currentImageIndex = 0;

    }

    openLightbox(currentImageIndex);

}


// ===============================
// PREVIOUS IMAGE
// ===============================

function showPreviousImage() {

    currentImageIndex--;

    // Agar first image par hain
    // toh last image par jao

    if (currentImageIndex < 0) {

        currentImageIndex =
            galleryItems.length - 1;

    }

    openLightbox(currentImageIndex);

}


// ===============================
// BUTTON EVENTS
// ===============================

lightboxClose.addEventListener(
    "click",
    closeLightbox
);


lightboxNext.addEventListener(
    "click",
    showNextImage
);


lightboxPrev.addEventListener(
    "click",
    showPreviousImage
);


// ===============================
// CLICK OUTSIDE IMAGE
// ===============================

lightbox.addEventListener(
    "click",
    (event) => {

        // Sirf dark background par click
        // hone par close hoga

        if (event.target === lightbox) {

            closeLightbox();

        }

    }
);


// ===============================
// KEYBOARD CONTROLS
// ===============================

document.addEventListener(
    "keydown",
    (event) => {

        // ESC = Close

        if (
            event.key === "Escape" &&
            lightbox.classList.contains("active")
        ) {

            closeLightbox();

        }


        // Right Arrow = Next

        if (
            event.key === "ArrowRight" &&
            lightbox.classList.contains("active")
        ) {

            showNextImage();

        }


        // Left Arrow = Previous

        if (
            event.key === "ArrowLeft" &&
            lightbox.classList.contains("active")
        ) {

            showPreviousImage();

        }

    }
);


// ===============================
// WHATSAPP BUTTON
// ===============================

// IMPORTANT:
// Yahan apna actual WhatsApp number
// country code ke saath add karna.
//
// Example:
// 919876543210
//
// + sign mat lagana.

const whatsappNumber =
    "918999775896";


const whatsappMessage =
    "Hello, I would like to know more about the poultry birds available at Shaikh Poultry Farm.";


const whatsappBtn =
    document.getElementById("whatsappBtn");


whatsappBtn.addEventListener(
    "click",
    (event) => {

        event.preventDefault();

        // Jab actual number add karoge
        // tab ye WhatsApp open karega

        if (
            whatsappNumber !==
            "919XXXXXXXXX"
        ) {

            const whatsappURL =
                `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

            window.open(
                whatsappURL,
                "_blank"
            );

        } else {

            alert(
                "Please add your WhatsApp number in script.js first."
            );

        }

    }
);


// ===============================
// CURRENT YEAR
// ===============================

const yearElement =
    document.getElementById("year");

yearElement.textContent =
    new Date().getFullYear();