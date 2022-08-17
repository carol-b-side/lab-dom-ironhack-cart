// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  const price = product.querySelector(".price span");
  const quantity = product.querySelector(".quantity input");
  const subtotal = product.querySelector(".subtotal span");

  const priceNumber = parseFloat(price.innerHTML);
  const quantityNumber = quantity.valueAsNumber;

  let subtotalPrice = priceNumber * quantityNumber;

  subtotal.innerHTML = subtotalPrice;

  return subtotalPrice;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  let products = document.getElementsByClassName("product");
  let total = 0;
  for (let i = 0; i < products.length; i++) {
    total += updateSubtotal(products[i]);
  }

  // ITERATION 3
  let totalValue = document.getElementById("total-value");
  totalValue.innerHTML = total;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);

  const remove = target.parentNode.parentNode;
  // removeChild(remove);
  //Uncaught DOMException: Node.removeChild: The node to be removed is not a child of this node => ???

  if (remove) {
    remove.parentNode.removeChild(remove);
  }

  // let product = target;
  // if (product.parentNode.parentNode) {
  //   product.parentNode.parentNode.removeChild(product);
  // }
  // for (let i = 0; i < product.length; i++) {
  //   if (product.parentNode) {
  //     product.parentNode.removeChild(product[i]);
  //   }

  // }


}

// ITERATION 5

function createProduct() {

}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeBtn = document.querySelectorAll(".btn-remove");
  for (let i = 0; i < removeBtn.length; i++) {
    removeBtn[i].addEventListener("click", removeProduct);
  }

});
