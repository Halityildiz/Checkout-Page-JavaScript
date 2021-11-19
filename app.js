let quantityController = document.querySelectorAll(".product-button");
const vintagePrice = document.querySelector(".bagfiyat").innerHTML;
const shoePrice = document.querySelector(".shoefiyat").innerHTML;
const clockPrice = document.querySelector(".saatfiyat").innerHTML;
const productsTotals = document.getElementsByClassName("prototals");
const subTotal = document.querySelector(".subtotal");
const taxTotal = document.querySelector(".taxtotal");
const topTotal = document.querySelector(".toptotal");
const shipPrice = document.querySelector(".shiptotal");
const removeBtn = document.getElementsByClassName("removebtn");
let addBtn = document.querySelectorAll(".add-btn");

let defPrice = 0;

for (const button of quantityController) {
  button.addEventListener("click", selector);
}

for (const btn of removeBtn) {
  btn.addEventListener("click", remover);
}

for (const btn of addBtn) {
  btn.addEventListener("click", adder);
}
function adder(e) {
  if (e.target.classList.contains("add-btn")) {
    e.target.parentElement.children[1].style.display = "block";
    e.target.parentElement.children[2].style.display = "block";
    e.target.parentElement.children[0].style.display = "none";
    e.target.parentElement.querySelector(".miktar").innerText = 0;
  }
  money();
}

function remover(e) {
  if (e.target.classList.contains("removebtn")) {
    if (confirm("Do you want to save changes?") == true) {
      e.target.parentElement.parentElement.children[2].style.display = "none";
      e.target.parentElement.parentElement.children[1].style.display = "none";
      e.target.parentElement.parentElement.children[0].style.display = "block";
      e.target.nextElementSibling.nextElementSibling.innerHTML = "0.00";
    }
    money();
    // } else {
    //   userPreference = "Save Canceled!";
    // }
  }
}

function selector(e) {
  let target = e.target;
  if (target.parentElement.className == "product-button vintage") {
    defPrice = vintagePrice;
  } else if (target.parentElement.className == "product-button shoes") {
    defPrice = shoePrice;
  } else if (target.parentElement.className == "product-button clock") {
    defPrice = clockPrice;
  }

  if (target.classList[0] === "minus") {
    let countEl = target.nextElementSibling;
    if (countEl.innerHTML >= 1) {
      countEl.innerHTML = parseInt(countEl.innerHTML) - 1;
      let total =
        target.parentElement.nextElementSibling.nextElementSibling
          .nextElementSibling;
      total.innerText = (
        parseFloat(total.innerHTML) - parseFloat(defPrice)
      ).toFixed(2);
    }
    if (countEl.innerHTML == 0) {
      if (confirm("Do you want to remove product?") == true) {
        target.parentElement.parentElement.parentElement.children[2].style.display =
          "none";
        target.parentElement.parentElement.parentElement.children[1].style.display =
          "none";
        target.parentElement.parentElement.parentElement.children[0].style.display =
          "block";
        target.parentElement.nextElementSibling.nextElementSibling.nextElementSibling.innerHTML =
          "0.00";
      } else {
        countEl.innerHTML = 1;
        target.parentElement.nextElementSibling.nextElementSibling.nextElementSibling.innerHTML =
          defPrice;
      }
    }
  }

  if (target.classList[0] === "plus") {
    let countEl = target.previousElementSibling;
    countEl.innerHTML = parseInt(countEl.innerHTML) + 1;
    let total =
      target.parentElement.nextElementSibling.nextElementSibling
        .nextElementSibling;
    total.innerText = (
      parseFloat(total.innerHTML) + parseFloat(defPrice)
    ).toFixed(2);
  }
  money();
}

function money() {
  let toplam = 0;
  for (const pricess of productsTotals) {
    toplam += parseFloat(pricess.innerText);
  }
  subTotal.innerHTML = toplam.toFixed(2);
  shipPrice.innerHTML = (7 + 8).toFixed(2);
  let shipPrice2 = 15;
  if (subTotal.innerHTML == "0.00") {
    shipPrice.innerHTML = "0.00";
    shipPrice2 = 0;
  }
  taxTotal.innerHTML = ((toplam * 18) / 100).toFixed(2);
  topTotal.innerHTML = (toplam + (toplam * 18) / 100 + shipPrice2).toFixed(2);
}
