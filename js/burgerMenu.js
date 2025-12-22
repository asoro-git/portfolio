let toggle = true;
const burgerBtnTwo = document.querySelector("#burger-btn2");
const burgerBtn = document.querySelector("#burger-btn");
const mobileMenu = document.getElementById("mobile-menu");

burgerBtn.addEventListener("click", () => {
  if (
    window.getComputedStyle(mobileMenu).getPropertyValue("display") == "block"
  ) {
    mobileMenu.style.opacity = "0";
    mobileMenu.style.display = "none";
  } else {
    mobileMenu.style.opacity = "1";
    burgerBtnTwo.style.opacity = "1";
    mobileMenu.style.display = "block";
  }
});

burgerBtnTwo.addEventListener("click", () => {
  if (
    window.getComputedStyle(mobileMenu).getPropertyValue("display") == "block"
  ) {
    mobileMenu.style.opacity = "0";
    burgerBtnTwo.style.opacity = "0";
    mobileMenu.style.display = "none";
  } else {
    mobileMenu.style.opacity = "1";
    mobileMenu.style.display = "block";
  }
});
