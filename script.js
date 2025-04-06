class Btn {
    moveRandomEl(elm) {
        elm.style.position = "absolute"; // Allows movement
        elm.style.top = Math.floor(Math.random() * 90 + 5) + "%";
        elm.style.left = Math.floor(Math.random() * 90 + 5) + "%";
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const buttonInstance = new Btn();
    const moveRandom = document.getElementById("move-random");

    if (moveRandom) {
        moveRandom.addEventListener("mouseenter", function (e) {
            buttonInstance.moveRandomEl(e.target);
        });
    }
});
