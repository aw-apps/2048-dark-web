// Wait till the browser is ready to render the game (avoids glitches)
window.requestAnimationFrame(function () {
  var storageKey = "theme";
  var themeToggle = document.querySelector(".theme-toggle-button");

  function applyTheme(theme) {
    var isDark = theme === "dark";
    document.body.classList.toggle("dark-mode", isDark);

    if (themeToggle) {
      themeToggle.textContent = isDark ? "Light Mode" : "Dark Mode";
      themeToggle.setAttribute("aria-pressed", String(isDark));
    }
  }

  var savedTheme = localStorage.getItem(storageKey);
  applyTheme(savedTheme === "dark" ? "dark" : "light");

  if (themeToggle) {
    themeToggle.addEventListener("click", function () {
      var nextTheme = document.body.classList.contains("dark-mode") ? "light" : "dark";
      applyTheme(nextTheme);
      localStorage.setItem(storageKey, nextTheme);
    });
  }

  new GameManager(4, KeyboardInputManager, HTMLActuator, LocalStorageManager);
});
