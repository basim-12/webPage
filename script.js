let slideIndex = 0;

function showSlides() {
    const slides = document.querySelectorAll(".slide");
    // Hide all slides
    slides.forEach((slide) => {
        slide.style.display = "none";
    });
    // Increment slide index
    slideIndex++;
    // Reset to first slide if at the end
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    // Show the current slide
    slides[slideIndex - 1].style.display = "block";
    // Change slide every 3 seconds
    setTimeout(showSlides, 4000);
}

// Navigation buttons
document.querySelector(".prev").addEventListener("click", () => {
    slideIndex--;
    showSlides();
});

document.querySelector(".next").addEventListener("click", () => {
    slideIndex++;
    showSlides();
});

// Start the slideshow
showSlides();

document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent the form from submitting

    // Get form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Validate form fields
    if (!name || !email || !message) {
        alert("Please fill out all fields.");
        return;
    }

    // Simulate form submission
    console.log("Form submitted!");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);

    // Clear the form
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";

    // Show a success message
    alert("Thank you for contacting me! I'll get back to you soon.");
});



particlesJS("particles-js", {
    particles: {
        number: {
            value: 80,
            density: {
                enable: true,
                value_area: 800,
            },
        },
        color: {
            value: "#e0e0e0", // Light particles for dark background
        },
        shape: {
            type: "circle",
        },
        opacity: {
            value: 0.5,
            random: true,
        },
        size: {
            value: 3,
            random: true,
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: "#e0e0e0", // Light lines for dark background
            opacity: 0.4,
            width: 1,
        },
        move: {
            enable: true,
            speed: 2,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out",
            bounce: false,
        },
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: {
                enable: true,
                mode: "repulse",
            },
            onclick: {
                enable: true,
                mode: "push",
            },
            resize: true,
        },
        modes: {
            repulse: {
                distance: 100,
                duration: 0.4,
            },
            push: {
                particles_nb: 4,
            },
        },
    },
    retina_detect: true,
});