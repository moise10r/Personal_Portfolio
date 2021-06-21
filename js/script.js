const menuButtonOpen = document.querySelector(".menu");
const menuButtonClose = document.querySelector(".close");
const header = document.querySelector("#header");

let isOpen = false;

menuButtonOpen.addEventListener("click", toggle);
menuButtonClose.addEventListener("click", toggle);

function toggle() {
	if (!isOpen) {
		header.classList.add("open");
		isOpen = true;
	} else {
		header.classList.remove("open");
		isOpen = false;
	}
}
