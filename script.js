filterSelection("all");
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("column");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

const form = document.getElementById("form");
form.addEventListener("submit", function (event) {
  if (!form.checkValidity()) {
    event.preventDefault();
  } else {
  }
});

function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const storedEmail = localStorage.getItem("email");
  const storedPassword = localStorage.getItem("password");

  if (email === storedEmail && password === storedPassword) {
    alert("Login successful");
    window.location.href = "home.html";
  } else {
    alert("Invalid email or password. Please try again.");
  }
}

function saveToLocalStorage() {
  const fullNameInput = document.getElementById("full-name");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");

  const fullName = fullNameInput.value.trim();
  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  if (fullName.length < 5) {
    alert("Full Name must be at least 5 characters.");
    fullNameInput.focus();
  } else if (!isValidEmail(email)) {
    alert("Invalid email format. Please enter a valid email.");
    emailInput.focus();
  } else if (password.length < 5) {
    alert("Password must be at least 5 characters.");
    passwordInput.focus();
  } else {
    localStorage.setItem("fullName", fullName);
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);

    alert("Account created successfully!");
    window.location.href = "index.html";
  }
}

function isValidEmail(email) {
  return email.includes("@");
}
