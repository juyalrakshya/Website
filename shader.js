const shaderBg =
    document.getElementById("shader-background");

let colors = [
    "#ff4fd8",
    "#c084fc",
    "#38bdf8"
];

let current = 0;

setInterval(() => {

    shaderBg.style.background =
        `radial-gradient(circle at top,
        ${colors[current]},
        #090111,
        #050009)`;

    current++;

    if (current >= colors.length) {
        current = 0;
    }

}, 3000);