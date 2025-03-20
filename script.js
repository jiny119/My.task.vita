document.getElementById("menu-btn").addEventListener("click", function () {
    document.getElementById("sidebar").classList.toggle("active");
});

function startGame() {
    window.location.href = "game.html";
}

function watchAd() {
    alert("Ad will play here! Coins will be added.");
}

function startSurvey() {
    window.location.href = "survey.html";
}

function installApp() {
    alert("Install an app to earn coins!");
}

function logoutUser() {
    alert("Logging out...");
    window.location.href = "login.html";
}
