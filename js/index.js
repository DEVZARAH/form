let id = (id) => document.getElementById(id);
let classes = (classes) => document.getElementsByClassName(classes);

let firstname = id("firstname"),
  lastname = id("lastname"),
  email = id("email"),
  password = id("password"),
  errorMsg = classes("error"),
  form = id("form"),
  failureIcon = classes("failure-icon"),
  successIcon = classes("success-icon");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  engine(firstname, 0, "First Name cannot be empty");
  engine(lastname, 1, "Last Name cannot be empty");
  engine(email, 2, "Doesnot look like email");
  engine(password, 3, "Password cannot be empty");
});
let engine = (id, serial, message) => {
  if (id.value.trim() === "") {
    errorMsg[serial].innerHTML = message;
    id.style.border = "2px solid red";
    failureIcon[serial].style.opacity = "1";
    successIcon[serial].style.opacity = "0";
  }else{
    errorMsg[serial].innerHTML = ""
    id.style.border = "2px solid green";
    failureIcon[serial].style.opacity = "0";
    successIcon[serial].style.opacity = "1";
  };
};
