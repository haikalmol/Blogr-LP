const body = document.querySelector("body");
const toggle = document.querySelector(".ham");
const lines = document.querySelector(".lines");
const cross = document.querySelector(".cross");
const nav = document.querySelector(".whole-nav");
const innerNav = document.querySelectorAll(".inner-nav");
const type = document.querySelectorAll(".name");
const logIn = document.querySelector(".login-button");
const Sign = document.querySelector(".signup-button");
const product = document.querySelector(".li-product");
const company = document.querySelector(".li-company");
const connect = document.querySelector(".li-connect");
const arrowOne = document.querySelectorAll("[data-arrow-one]");
const arrowTwo = document.querySelectorAll("[data-arrow-two]");
const arrowThree = document.querySelectorAll("[data-arrow-three]");

toggle.addEventListener("click", (e) => {
  nav.classList.toggle("active");
  lines.classList.toggle("deopacity");
  cross.classList.toggle("opacity");
  innerNav.forEach((nav) => {
    nav.classList.toggle("opacity");
  });
  logIn.classList.toggle("opacity");
  Sign.classList.toggle("opacity");
});

type.forEach((e) => {
  e.addEventListener("click", () => {
    if (e.textContent === "Product") {
      product.classList.toggle("block");
      product.classList.toggle("active");
      arrowOne.forEach((arrow) => {
        arrow.classList.toggle("rotate");
      });
    } else {
      product.classList.remove("block");
      product.classList.remove("active");
      arrowOne.forEach((arrow) => {
        arrow.classList.remove("rotate");
      });
    }
    if (e.textContent === "Company") {
      company.classList.toggle("block");
      company.classList.toggle("active");
      arrowTwo.forEach((arrow) => {
        arrow.classList.toggle("rotate");
      });
    } else {
      company.classList.remove("block");
      company.classList.remove("active");
      arrowTwo.forEach((arrow) => {
        arrow.classList.remove("rotate");
      });
    }
    if (e.textContent === "Connect") {
      connect.classList.toggle("block");
      connect.classList.toggle("active");
      arrowThree.forEach((arrow) => {
        arrow.classList.toggle("rotate");
      });
    } else {
      connect.classList.remove("block");
      connect.classList.remove("active");
      arrowThree.forEach((arrow) => {
        arrow.classList.remove("rotate");
      });
    }
  });
});

body.addEventListener("mousedown", (e) => {
  if (
    !e.target.classList.contains("inner-nav") &&
    !e.target.classList.contains("holder") &&
    !e.target.classList.contains("name") &&
    !e.target.classList.contains("arrow-light") &&
    !e.target.classList.contains("arrow-dark") &&
    !e.target.classList.contains("li-holder") &&
    !e.target.classList.contains("li")
  ) {
    product.classList.remove("block");
    product.classList.remove("active");
    company.classList.remove("block");
    company.classList.remove("active");
    connect.classList.remove("block");
    connect.classList.remove("active");
    type.forEach((e) => {
      e.classList.remove("color");
    });
    arrowOne.forEach((arrow) => {
      arrow.classList.remove("rotate");
    });
    arrowTwo.forEach((arrow) => {
      arrow.classList.remove("rotate");
    });
    arrowThree.forEach((arrow) => {
      arrow.classList.remove("rotate");
    });
  }
});
