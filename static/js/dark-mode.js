// from radu-matei.com

updateTheme();

// set the appropriate theme when the user toggles the button
window.addEventListener("DOMContentLoaded", () => {
  var toggle = document.getElementById("dark-mode-toggle");
  toggle.addEventListener("click", () => {
    if (document.documentElement.getAttribute("data-theme") == "dark")
      localStorage["dark-mode-storage"] = "light";
    else
      localStorage["dark-mode-storage"] = "dark";
    updateTheme();
  });
}, {once: true});

// Add an event listener when the browser theme changes.
// The user defined theme does take precedence, so if the
// changed the browser theme, forget previous preference.
window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", () => {
    delete localStorage["dark-mode-storage"];
    updateTheme();
  });

// React to theme changes in other tabs
window.addEventListener("storage", event => {
  if (event.key == "dark-mode-storage")
    updateTheme();
});

function updateTheme() {
  let userPreference = localStorage["dark-mode-storage"];
  if (userPreference == "dark" || userPreference == "light")
    setTheme(userPreference);
  else
    setTheme(window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
}

function setTheme(mode) {
  document.documentElement.setAttribute("data-theme", mode);
}
