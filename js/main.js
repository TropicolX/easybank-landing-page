const menuToggle = document.querySelector(".toggle");
const navigation = document.querySelector(".navigation");
const header = document.querySelector("header");

menuToggle.onclick = function () {
	menuToggle.classList.toggle("active");
	navigation.classList.toggle("active");
	header.classList.toggle("active");
};
