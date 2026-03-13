var navToggled = false;

function loadNavBtn() {
  const headerContainer = document.getElementById("nav_btn_div");

  fetch("src/nav_toggle.html")
    .then(response => response.text())
    .then(data => {
      headerContainer.innerHTML = data;
    })
    .catch(error => {
      console.error("Error loading nav btn:", error);
    });

    sizeChanged();
}

function toggleNav() {
  var x = document.getElementById("nav");
  if (x.style.display === "none") {
    x.style.display = "block";
    navToggled = true;
  }
  else {
    x.style.display = "none";
    navToggled = false;
  }
}

function sizeChanged() {
  var x = document.getElementById("nav");
  if (navToggled === true) {
    x.style.display = "block";
  }
  else {
    if (window.innerWidth > 1024) {
      x.style.display = "block";
    }
    else {
      x.style.display = "none";
    }
  }
}

// Call the loadNav function once the DOM is fully loaded
document.addEventListener("DOMContentLoaded", loadNavBtn);
window.addEventListener('resize', sizeChanged);

