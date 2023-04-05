function toggleNav() {
	var updateElement = document.getElementById("menu-icon");
	updateElement.classList.toggle("open");

	var mainContent = document.getElementById("main-content");
	mainContent.classList.toggle("shifted");
}
