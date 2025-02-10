document.addEventListener("DOMContentLoaded", function () {
    const progressBars = document.querySelectorAll(".progressBar");

    const animateProgressBars = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const percent = entry.target.getAttribute("dataPercent");
                entry.target.style.width = percent + "%";
                observer.unobserve(entry.target);
            }
        });
    };

    const observer = new IntersectionObserver(animateProgressBars, {
        threshold: 0.5
    });

    progressBars.forEach(bar => observer.observe(bar));
});