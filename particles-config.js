particlesJS("particles-js", {
    particles: {
        number: {
            value: 50, // Number of particles
            density: { enable: true, value_area: 800 }
        },
        color: { value: ["#F5A9A9", "#A9D2F5", "#A9F5D2", "#FAF3DD"] }, // Soft Pastel Colors
        shape: {
            type: ["circle", "triangle", "edge"], // Circle, Triangle, Square
            stroke: { width: 0, color: "#000000" }
        },
        opacity: {
            value: 0.7,
            random: true,
            anim: { enable: true, speed: 1, opacity_min: 0.2, sync: false }
        },
        size: {
            value: 6,
            random: true,
            anim: { enable: true, speed: 3, size_min: 2, sync: false }
        },
        move: {
            enable: true,
            speed: 2,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out",
            bounce: false
        }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: { enable: true, mode: "repulse" },
            onclick: { enable: true, mode: "push" }
        },
        modes: {
            repulse: { distance: 100, duration: 0.4 },
            push: { particles_nb: 4 }
        }
    },
    retina_detect: true
});
