document.addEventListener("DOMContentLoaded", function() {
  const emailInput = document.getElementById("email");
  const emailError = document.getElementById("email-error");

  emailInput.addEventListener("focusout", function() {
    const emailValue = emailInput.value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(emailValue === "") {
      showError("이메일을 입력해주세요.");
    } else if(!emailPattern.test(emailValue)) {
      showError("잘못된 이메일 형식입니다.");
    } else {
      hideError();
    }
  });

  function showError(message) {
    emailInput.classList.add("input-error");
    emailError.textContent = message;
    emailError.style.display = "block";
  }

  function hideError() {
    emailInput.classList.remove("input-error");
    emailError.textContent = "";
    emailError.style.display = "none";
  }
});