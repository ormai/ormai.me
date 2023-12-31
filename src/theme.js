const system = window.matchMedia("(prefers-color-scheme: dark)");

function setTheme() {
  document.documentElement.setAttribute(
    "data-theme",
    system.matches ? "dark" : "light",
  );
}

setTheme(); // on load

system.addEventListener("change", () => setTheme()); // on change
