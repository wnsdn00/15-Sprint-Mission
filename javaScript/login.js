document.addEventListener("DOMContentLoaded", function() {
  const emailInput = document.getElementById("email");
  const emailError = document.getElementById("email-error");

  const passwordInput = document.getElementById("password");
  const passwordError = document.getElementById("password-error");

  /* 이메일 유효성 검증 */
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

  /* 비밀번호 유효성 검증 */
  passwordInput.addEventListener("focusout", function() {
    const passwordValue = passwordInput.value.trim();

    if (passwordValue === "") {
      showError("비밀번호를 입력해주세요.");
    } else if (passwordValue.length < 8) {
      showError("비밀번호를 8자 이상 입력해주세요.");
    } else {
      hideError(passwordInput, passwordError);
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