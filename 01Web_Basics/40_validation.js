function myValidation() {
  const p_text = document.querySelector(".classone");
  let myValue = document.getElementById("myform").value;

  if (isNaN(myValue) || myValue < 1 || myValue > 20) {
    console.log("Invalid input");
    if (p_text) {
      p_text.textContent = "Invalid input";
    }
    // p_text.textContent = "Invalid input";
  } else {
    console.log("This input is OKAY !");
    if (p_text) {
      p_text.textContent = "This input is OKAY !";
    }
    // p_text.textContent = "This input is OKAY !";
  }
}

// form validatoon
document.querySelector(".myform").addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(event.target.username.value);
  console.log(event.target.realname.value);
  event.target.username.value = "";
  event.target.realname.value = "";
});
