// =========================
// PERSONAL PORTFOLIO SCRIPT
// Fiona Sheehan
// =========================

document.addEventListener("DOMContentLoaded", function () {

    // =========================
    // SMOOTH SCROLLING
    // =========================

    const navigationLinks = document.querySelectorAll("nav a");

    navigationLinks.forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetId = this.getAttribute("href");

            if (targetId.startsWith("#")) {

                event.preventDefault();

                const targetSection = document.querySelector(targetId);

                if (targetSection) {
                    targetSection.scrollIntoView({
                        behavior: "smooth"
                    });
                }
            }
        });

    });


    // =========================
    // CURRENT YEAR IN FOOTER
    // =========================

    const footer = document.querySelector("footer p");

    if (footer) {
        const currentYear = new Date().getFullYear();

        footer.innerHTML =
            `&copy; ${currentYear} Fiona Sheehan. All Rights Reserved.`;
    }


    // =========================
    // CONTACT BUTTON
    // =========================

    const contactButton = document.querySelector(".hero .btn");

    if (contactButton) {

        contactButton.addEventListener("click", function (event) {

            event.preventDefault();

            const contactSection = document.querySelector("#contact");

            if (contactSection) {
                contactSection.scrollIntoView({
                    behavior: "smooth"
                });
            }

        });

    }


    // =========================
    // NAVIGATION SHADOW
    // =========================

    const header = document.querySelector("header");

    window.addEventListener("scroll", function () {

        if (window.scrollY > 50) {
            header.style.boxShadow =
                "0 2px 10px rgba(0, 0, 0, 0.10)";
        } else {
            header.style.boxShadow = "none";
        }

    });


    // =========================
    // EXPERIENCE CARD EFFECT
    // =========================

    const experienceCards =
        document.querySelectorAll(".experience-item");

    experienceCards.forEach(function (card) {

        card.addEventListener("mouseenter", function () {

            card.style.transform = "translateY(-5px)";
            card.style.transition = "transform 0.3s ease";

        });

        card.addEventListener("mouseleave", function () {

            card.style.transform = "translateY(0)";

        });

    });


    // =========================
    // SKILLS INTERACTION
    // =========================

    const skills =
        document.querySelectorAll(".skill");

    skills.forEach(function (skill) {

        skill.addEventListener("click", function () {

            this.style.transform = "scale(1.08)";
            this.style.transition = "transform 0.2s ease";

            setTimeout(function () {
                skill.style.transform = "scale(1)";
            }, 200);

        });

    });


    // =========================
    // WELCOME MESSAGE
    // =========================

    console.log(
        "Welcome to Fiona Sheehan's portfolio website!"
    );

});
