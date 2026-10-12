/* ========== MOBILE MENU ========== */
var menuBtn = document.getElementById("menuBtn");
var mobileMenu = document.getElementById("mobileMenu");

menuBtn.addEventListener("click", function () {
  mobileMenu.classList.toggle("active");

  if (mobileMenu.classList.contains("active")) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
});

/* ========== DASHBOARD SIDEBAR ========== */
var dashboardMenuBtn = document.getElementById("dashboardMenuBtn");
var sidebar = document.getElementById("sidebar");
var sidebarOverlay = document.getElementById("sidebarOverlay");

function openSidebar() {
  sidebar.classList.add("active");
  sidebarOverlay.classList.add("active");
}

function closeSidebar() {
  sidebar.classList.remove("active");
  sidebarOverlay.classList.remove("active");
}

dashboardMenuBtn.addEventListener("click", function () {
  if (sidebar.classList.contains("active")) {
    closeSidebar();
  } else {
    openSidebar();
  }
});

sidebarOverlay.addEventListener("click", function () {
  closeSidebar();
});

var menuItems = document.querySelectorAll(".menu-item");
var i;

for (i = 0; i < menuItems.length; i++) {
  menuItems[i].addEventListener("click", function () {
    if (window.innerWidth <= 768) {
      closeSidebar();
    }
  });
}

/* ========== DARK / LIGHT MODE ========== */
var modeToggle = document.getElementById("modeToggle");

modeToggle.addEventListener("click", function () {
  document.body.classList.toggle("dark");

  var isDark = document.body.classList.contains("dark");

  if (isDark) {
    modeToggle.textContent = "☀️";
  } else {
    modeToggle.textContent = "🌙";
  }

  localStorage.setItem("darkMode", isDark);
});

if (localStorage.getItem("darkMode") === "true") {
  document.body.classList.add("dark");
  modeToggle.textContent = "☀️";
} else {
  modeToggle.textContent = "🌙";
}

/* ========== SCROLL REVEAL ANIMATION ========== */
var revealElements = document.querySelectorAll(".reveal");

var observer = new IntersectionObserver(function (entries) {
  var j;

  for (j = 0; j < entries.length; j++) {
    if (entries[j].isIntersecting) {
      entries[j].target.classList.add("show");
    }
  }
});

var k;

for (k = 0; k < revealElements.length; k++) {
  observer.observe(revealElements[k]);
}
