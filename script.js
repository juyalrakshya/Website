window.addEventListener(
    "load",
    () => {

        document.body.style.opacity = "1";
    }
);

// ACTIVE NAVIGATION

const currentPage =
    window.location.pathname.split("/").pop();

const navLinks =
    document.querySelectorAll(".nav-links a");

navLinks.forEach((link) => {

    if (
        link.getAttribute("href") === currentPage
    ) {

        link.style.color = "#ff9ad5";
    }
});

// SCROLL BUTTON

const scrollBtn =
    document.createElement("button");

scrollBtn.innerHTML = "↑";

scrollBtn.id = "scrollTopBtn";

scrollBtn.style.position = "fixed";
scrollBtn.style.bottom = "30px";
scrollBtn.style.right = "30px";
scrollBtn.style.width = "60px";
scrollBtn.style.height = "60px";
scrollBtn.style.borderRadius = "50%";
scrollBtn.style.border = "none";
scrollBtn.style.cursor = "pointer";
scrollBtn.style.background = "#ff4fd8";
scrollBtn.style.color = "white";
scrollBtn.style.fontSize = "24px";
scrollBtn.style.display = "none";


document.body.appendChild(scrollBtn);

window.addEventListener(
    "scroll",
    () => {

        if (window.scrollY > 400) {

            scrollBtn.style.display = "block";

        } else {

            scrollBtn.style.display = "none";
        }
    }
);

scrollBtn.addEventListener(
    "click",
    () => {

        window.scrollTo({

            top: 0,
            behavior: "smooth"
        });
    }
);