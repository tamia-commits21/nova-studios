/* ================================
   NOVA STUDIOS
   JAVASCRIPT
================================ */


/* MOBILE MENU */

const menuButton = document.querySelector(".menu-btn");
const navigation = document.querySelector("nav");

if (menuButton) {

    menuButton.addEventListener("click", () => {

    navigation.classList.toggle("active");

    const isOpen = navigation.classList.contains("active");

    menuButton.setAttribute(
        "aria-expanded",
        isOpen
    );

});

}


/* CLOSE MOBILE MENU */

const navigationLinks = document.querySelectorAll("nav a");

navigationLinks.forEach((link) => {

    link.addEventListener("click", () => {

        navigation.classList.remove("active");

    });

});


/* NAVBAR SCROLL */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

});


/* PROJECT POPUP */

const projectModal = document.querySelector("#projectModal");
const closeProject = document.querySelector("#closeProject");

const projectImage = document.querySelector("#projectImage");
const projectCategory = document.querySelector("#projectCategory");
const projectTitle = document.querySelector("#projectTitle");
const projectDescription = document.querySelector("#projectDescription");

const projects = {

    velora: {
        category: "BRANDING",
        title: "Velora",
        description:
            "A bold and modern brand identity created to give Velora a strong, memorable visual presence."
    },

    afterglow: {
        category: "SOCIAL MEDIA",
        title: "Afterglow",
        description:
            "A vibrant social media campaign designed to create attention, consistency and a strong digital presence."
    },

    northline: {
        category: "WEB DESIGN",
        title: "Northline",
        description:
            "A modern website concept combining strong typography, clean layouts and a bold digital experience."
    },

    energy: {
        category: "COVER ART",
        title: "Energy",
        description:
            "Creative cover artwork designed with a bold visual direction and a distinctive neon aesthetic."
    }

};


/* OPEN PROJECT */

const projectButtons = document.querySelectorAll(".project-btn");

projectButtons.forEach((button) => {

    button.addEventListener("click", (event) => {

        event.preventDefault();

        const projectName = button.dataset.project;
        const project = projects[projectName];

        if (!project) return;

        projectCategory.textContent = project.category;
        projectTitle.textContent = project.title;
        projectDescription.textContent = project.description;

        projectImage.className = "project-modal-image";
        projectImage.classList.add(projectName);

        projectModal.classList.add("active");

        document.body.style.overflow = "hidden";

    });

});


/* CLOSE PROJECT */

function closeProjectModal() {

    projectModal.classList.remove("active");

    document.body.style.overflow = "";

}


closeProject.addEventListener("click", closeProjectModal);


/* CLOSE WHEN CLICKING OUTSIDE */

projectModal.addEventListener("click", (event) => {

    if (event.target === projectModal) {
        closeProjectModal();
    }

});


/* ESCAPE KEY */

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {
        closeProjectModal();
    }

});


/* REVEAL ANIMATIONS */

const elements = document.querySelectorAll(
    ".service-card, .portfolio-card, .about-section, .contact-box"
);

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }

        });

    },
    {
        threshold: 0.15
    }
);


elements.forEach((element) => {

    element.classList.add("hidden");

    observer.observe(element);

});


/* CURRENT YEAR */

const year = new Date().getFullYear();

const footerText = document.querySelector("footer p");

if (footerText) {

    footerText.textContent =
        `© ${year} Nova Studios. All rights reserved.`;

}
/* PROJECT FORM */
const projectForm = document.querySelector("#projectForm");

if (projectForm) {
    projectForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const name = document.querySelector("#name").value;
        const email = document.querySelector("#email").value;
        const service = document.querySelector("#service").value;
        const budget = document.querySelector("#budget").value;
        const message = document.querySelector("#message").value;

        const subject = `Nova Studios Project Request - ${service}`;

        const body = `
Hello Nova Studios,

I would like to start a project.

Name: ${name}
Email: ${email}
Service: ${service}
Budget: ${budget || "Not specified"}

Project details:
${message}

Thank you.
        `;

        const mailtoLink =
            `mailto:nova.studios1@outlook.com` +
            `?subject=${encodeURIComponent(subject)}` +
            `&body=${encodeURIComponent(body)}`;

        window.location.href = mailtoLink;

        setTimeout(() => {
            alert("Your project request is ready! Please press Send in your email app.");
            projectForm.reset();
        }, 500);
    });
}