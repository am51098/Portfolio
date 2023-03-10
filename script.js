var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
var tabgroup = document.querySelector(".tab-titles");

tabgroup.addEventListener("click", function (e) {
  if (e.target === tabgroup) return;
  for (tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  e.target.classList.add("active-link");
  document
    .getElementById(`${e.target.textContent}`)
    .classList.add("active-tab");
});

var sidemenu = document.getElementById("sidemenu");
var navbar = document.getElementById("navbar");
var closeicon = document.getElementById("close");
var openicon = document.getElementById("open");

navbar.addEventListener("click", function (e) {
  if (e.target === closeicon) {
    sidemenu.style.right = "-200px";
  } else if (e.target === openicon) {
    sidemenu.style.right = "0";
  } else {
    return;
  }
});
