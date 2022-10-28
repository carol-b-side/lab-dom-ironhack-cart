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
  let totalValue = document.querySelector("#total-value span");
  totalValue.innerHTML = total;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget; //button clicado
  const btnParent = event.currentTarget.parentNode; //div do button
  const product = btnParent.parentNode; //row do produto inteiro
  const row = product.parentNode; //tabela inteira

  row.removeChild(product);

  //calcular o total novamente depois que um item foi apagado
  calculateAll();
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




// ITERATION 5

function createProduct() {
  const productName = document.getElementById('input-name').value;
  console.log(productName); // input name

  const inputPrice = document.getElementById('inputPrice').value;
  console.log(inputPrice); // input price

  const tbody = document.getElementsByTagName('tbody');

  const tr = document.createElement('tr');
  tr.classList.add('product');

  const row = `
  <td class="name">
  <span>${productName}</span>
  </td>
  <td class="price">$<span>${inputPrice}</span></td>
  <td class="quantity">
  <input type="number" value="0" min="0" placeholder="Quantity" />
  </td>
  <td class="subtotal">$<span>0</span></td>
  <td class="action">
  <button class="btn btn-remove">Remove</button>
  </td>
  `;

  tr.innerHTML = row;

  tbody[0].appendChild(tr);

  const removeBtn = tr.querySelector('.btn-remove');

  removeBtn.addEventListener('click', removeProduct);
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeBtn = document.querySelectorAll(".btn-remove");
  for (let i = 0; i < removeBtn.length; i++) {
    removeBtn[i].addEventListener("click", removeProduct);
  }

  const createBtn = document.getElementById('create');
  createBtn.addEventListener('click', createProduct);
});
