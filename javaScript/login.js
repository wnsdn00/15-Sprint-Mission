document.addEventListener("DOMContentLoaded", function() {
  const emailInput = document.getElementById("email");
  const emailError = document.getElementById("email-error");

  const passwordInput = document.getElementById("password");
  const passwordError = document.getElementById("password-error");

  /* 이메일 유효성 검증 */
  emailInput.addEventListener("focusout", function() {
    const emailValue = emailInput.value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailValue === "") {
      showError(emailInput, emailError, "이메일을 입력해주세요.");
    } else if (!emailPattern.test(emailValue)) {
      showError(emailInput, emailError, "잘못된 이메일 형식입니다.");
    } else {
      hideError(emailInput, emailError);
    }
  });

  /* 비밀번호 유효성 검증 */
  passwordInput.addEventListener("focusout", function() {
    const passwordValue = passwordInput.value.trim();

    if (passwordValue === "") {
      showError(passwordInput, passwordError, "비밀번호를 입력해주세요.");
    } else if (passwordValue.length < 8) {
      showError(passwordInput, passwordError, "비밀번호를 8자 이상 입력해주세요.");
    } else {
      hideError(passwordInput, passwordError);
    }
  });

  function showError(inputElement, errorElement, message) {
    inputElement.classList.add("input-error");
    errorElement.textContent = message;
    errorElement.style.display = "block";
  }

  function hideError(inputElement, errorElement) {
    inputElement.classList.remove("input-error");
    errorElement.textContent = "";
    errorElement.style.display = "none";
  }
});