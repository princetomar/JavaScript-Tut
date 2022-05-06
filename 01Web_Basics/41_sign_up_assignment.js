document.querySelector(".myform").addEventListener("submit", (event) => {
  event.preventDefault();

  const name = event.target.name.value;
  const email = event.target.email.value;
  const pass = event.target.password.value;
  const confirm_pass = event.target.confirm_password.value;

  if (name.length() < 3 || name.length() > 20) {
    alert("Invalid Inputw");
  } else {
    if (email.length() < 3 || email.length() > 20) {
      alert("Enter valid Email Address !");
    } else {
      if (pass.length() < 3 || pass.length() > 20) {
        alert("Enter valid Password !");
      } else {
        if (
          confirm_pass.length() < 3 ||
          confirm_pass.length() > 20 ||
          confirm_pass.textContent != pass.textContent
        ) {
          alert("Enter valid Confirm Password !");
        } else {
          alert("Successfully Registered !");
          name = "";
          email = "";
          pass = "";
          confirm_pass = "";
        }
      }
    }
  }
});
