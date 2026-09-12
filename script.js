// EmailJS Initialize
emailjs.init({
    publicKey: "iPZWqa4UB-LHneVkr"
});


function nextPage(pageId) {

    const pages = document.querySelectorAll(".page");

    pages.forEach(function (page) {
        page.classList.remove("active");
    });

    const selectedPage = document.getElementById(pageId);

    if (selectedPage) {
        selectedPage.classList.add("active");
        window.scrollTo(0, 0);
    }
}


// YES ❤️
function sayYes() {

    nextPage("yesPage");
    createHearts();

    sendResponse("YES ❤️");
}


// NO 🤍
function sayNo() {

    nextPage("noPage");

    sendResponse("NO 🤍");
}


// Send Email
function sendResponse(answer) {

    const templateParams = {

        answer: answer,
        name: "Raniii",
        message: "Raniii ने proposal website वर " + answer + " निवडलं ❤️",
        time: new Date().toLocaleString()
    };

    emailjs.send(
        "service_bclo6nf",
        "template_5bs67w7",
        templateParams
    )
        .then(function (response) {

            console.log("Email sent successfully!", response.status);

        })
        .catch(function (error) {

            console.error("Email failed:", error);

        });
}


// Floating Hearts
function createHeart() {

    const heart = document.createElement("div");

    heart.className = "heart";

    const symbols = ["❤️", "💕", "💗", "💖", "💓"];

    heart.innerHTML =
        symbols[Math.floor(Math.random() * symbols.length)];

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.fontSize =
        (15 + Math.random() * 25) + "px";

    heart.style.animationDuration =
        (5 + Math.random() * 5) + "s";

    document.body.appendChild(heart);

    setTimeout(function () {
        heart.remove();
    }, 10000);
}


setInterval(createHeart, 700);


function createHearts() {

    for (let i = 0; i < 30; i++) {

        setTimeout(function () {
            createHeart();
        }, i * 100);

    }
}