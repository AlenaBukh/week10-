const myButton = document.querySelector(".myButton");
const quantityInput = document.querySelector(".quantity");
const priceInput = document.querySelector(".price");
const divResult = document.querySelector(".result");

function calculateTotalPrice(quantity, price) {
  let resultPrice = quantity * price;
  return resultPrice;
}

function onButtonClick() {
  let quantityValue = quantityInput.value;
  let priceValue = priceInput.value;
  let resPrice = calculateTotalPrice(quantityValue, priceValue);
  divResult.innerHTML = `Заплатите: ${resPrice} рублей!`;
}
