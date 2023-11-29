const themeSelector = document.getElementById("theme")
const isSystemDark = window.matchMedia("(prefers-color-scheme: dark)");

setTheme(getCurrentTheme()); // on load

function setTheme(theme) {
  localStorage.setItem("theme", theme);
  let system = ""; // for the icon

  let newTheme = theme;
  if (theme === "system") {
    newTheme = isSystemDark.matches ? "dark" : "light";
    system = "system-"; // for the icon
  }

  document.getElementById("themeIcon") // icon
    .setAttribute("src", `./static/theme-${system}${newTheme}.svg`);

  document.documentElement.setAttribute("data-theme", newTheme);
}

function getCurrentTheme() {
  let value = localStorage.getItem("theme");
  if (!value) value = "system"; // default to system
  return value
}

isSystemDark.addEventListener("change", () => {
  const currentTheme = getCurrentTheme();
  if (currentTheme === "system")
    setTheme(currentTheme);
})

themeSelector.addEventListener("change", (event) => {
  setTheme(event.target.value);
});

