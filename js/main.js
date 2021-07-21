const menuToggle = document.querySelector(".toggle");
const navigation = document.querySelector(".navigation");
const header = document.querySelector("header");
const main = document.querySelector("main");
const footer = document.querySelector("footer");
const hero = document.querySelector(".hero");

let toggleOn = false;

menuToggle.onclick = function () {
	menuToggle.classList.toggle("active");
	navigation.classList.toggle("active");
	header.classList.toggle("active");
	toggleOn = !toggleOn;
	main.style.filter = toggleOn ? "brightness(50%)" : "";
	hero.style.filter = toggleOn ? "brightness(50%)" : "";
	footer.style.filter = toggleOn ? "brightness(50%)" : "";
};
