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
const product = document.querySelector(".image");
const ekleme = document.querySelector(".product-info");
let defPrice = 0;


for (const button of quantityController) {
  button.addEventListener("click", selector);
}

for (const btn of removeBtn) {
  btn.addEventListener("click", remover);
}

// for (const imge of product) {
//   imge.addEventListener("click", adder);
// }


// function adder(e) {
//   const ekleme = e.target.nextElementSibling;
//   e.target.parentElement.append(ekleme);
//   money ();
// }


product.addEventListener("click", e=>{ 
  e.target.parentElement.append(ekleme);
  money ();
});


function remover(e) {
  if(e.target.classList.contains("removebtn")){
    e.target.parentElement.parentElement.remove();
    // e.target.nextElementSibling.innerText = "0";
  }
  money();
}


function selector(e) {
  let target = e.target;
  if (
    target.parentElement.className == "product-button vintage"
  ) {
    defPrice = vintagePrice;
  } else if (
    target.parentElement.className == "product-button shoes"
  ) {
    defPrice = shoePrice;
  } else if (
    target.parentElement.className == "product-button clock"
  ) {
    defPrice = clockPrice;
  }


  if (target.classList[0] === "minus") {
    let countEl = target.nextElementSibling;
    if (countEl.innerHTML >= 1) {
      countEl.innerHTML = parseInt(countEl.innerHTML) - 1;
      let total = target.parentElement.nextElementSibling.nextElementSibling.nextElementSibling;
      total.innerText = (
        parseFloat(total.innerHTML) - parseFloat(defPrice)
      ).toFixed(2);
    }
  }

  if (target.classList[0] === "plus") {
    let countEl = target.previousElementSibling;
    countEl.innerHTML = parseInt(countEl.innerHTML) + 1;
    let total = target.parentElement.nextElementSibling.nextElementSibling.nextElementSibling;
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

// product.addEventListener("click", e=>{
//   e.preventDefault(); 
//   if(!e.target.classList.contains("product-info")){
//       e.target.appendChild(NextSiblingElement);
//   }
//   money ();
// });



// for (const img of product) {
//   img.addEventListener("click", e=>{ 
//     e.target.parentElement.append(ekleme);
//     money ();
//   });
  
// }