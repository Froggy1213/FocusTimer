document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("taskModal");
    const btn = document.getElementById("openModal");
    const span = document.querySelector(".close");

    if (btn && modal && span) {
        btn.onclick = function () {
            modal.style.display = "block";
        };

        span.onclick = function () {
            modal.style.display = "none";
        };

        window.onclick = function (event) {
            if (event.target === modal) {
                modal.style.display = "none";
            }
        };
    }
});
