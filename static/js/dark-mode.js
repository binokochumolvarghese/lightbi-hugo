// from radu-matei.com

var toggle = document.getElementById("dark-mode-toggle");
var darkTheme = document.getElementById("dark-mode-theme");

var systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
  ? "dark"
  : "light";

// the default theme is light
var savedTheme = localStorage.getItem("dark-mode-storage") || systemTheme;
setTheme(savedTheme);

// set the appropriate theme when the user toggles the button
toggle.addEventListener("click", () => {
    if (toggle.className === "bi bi-moon-stars") {
        setTheme("dark");
        localStorage.setItem("dark-mode-storage", "dark");
    } else if (toggle.className === "bi bi-sun") {
        setTheme("light");
        localStorage.setItem("dark-mode-storage", "light");
    }
});

// Add an event listener when the browser theme changes.
// The user defined theme does take precedence, so if the
// changed the browser theme, do not persist the change
// across refreshes.
window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", (event) => {
    if (event.matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  });

function setTheme(mode) {
    if (mode === "dark") {
        darkTheme.disabled = false;
        toggle.className = "bi bi-sun";  
    } else if (mode === "light") {
        darkTheme.disabled = true;
        toggle.className = "bi bi-moon-stars"; 
    }
} 