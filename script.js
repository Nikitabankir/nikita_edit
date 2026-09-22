const colors = [
    "#ffbd59",
    "#ff5f8f",
    "#8b5cf6",
    "#5ee7df",
    "#ffffff"
];

const confettiContainer = document.querySelector(".confetti");

for (let i = 0; i < 45; i++) {
    const piece = document.createElement("span");

    piece.style.position = "fixed";
    piece.style.width = Math.random() * 7 + 4 + "px";
    piece.style.height = Math.random() * 12 + 6 + "px";
    piece.style.background =
        colors[Math.floor(Math.random() * colors.length)];

    piece.style.left = Math.random() * 100 + "vw";
    piece.style.top = "-20px";
    piece.style.opacity = Math.random() * .8 + .2;
    piece.style.transform =
        `rotate(${Math.random() * 360}deg)`;

    piece.style.animation =
        `fall ${Math.random() * 4 + 4}s linear ${Math.random() * 4}s infinite`;

    confettiContainer.appendChild(piece);
}

const style = document.createElement("style");

style.textContent = `
@keyframes fall {
    from {
        transform: translateY(-20px) rotate(0deg);
    }

    to {
        transform: translateY(110vh) rotate(720deg);
    }
}
`;

document.head.appendChild(style);
