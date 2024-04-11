//Tombol nvabar
const buttonToogle = document.querySelector('.buttonToggle')
const mobileMenu = document.querySelector('.mobileMenu')

buttonToogle.addEventListener('click', function(){
    mobileMenu.classList.toggle('hidden');
})

//tombol cv
document.getElementById("tombol_cv").onclick = function() {
window.location.href = "https://docs.google.com/document/d/1JZj3KCQHrfZbOdGov8XO_yuAKvmIZiXwA36Rs0Owdd8/edit?usp=sharing";
};

//tombol instagram
document.getElementById("instagram").onclick = function() {
window.location.href = "https://www.instagram.com/malpinw";
};

//tombol email
document.getElementById("email").onclick = function() {
window.location.href = "mailto:malvinw123@gmail.com";
};

//tombol youtube
document.getElementById("youtube").onclick = function() {
window.location.href = "https://www.youtube.com/@MalvinWijaya";
};

//tombol linkedin
document.getElementById("linkedin").onclick = function() {
    window.location.href = "https://www.linkedin.com/in/malvin-wijaya-43570524b/";
};

//tombol github
document.getElementById("github").onclick = function() {
    window.location.href = "https://github.com/WMalvin31";
};

//tombol source code my portofolio
document.getElementById("my_portfolio").onclick = function() {
    window.location.href = "https://malpinw.vercel.app";
};

//tombol source code my portofolio
document.getElementById("sc_my_portfolio").onclick = function() {
    window.location.href = "https://github.com/WMalvin31/portofoliomw";
};