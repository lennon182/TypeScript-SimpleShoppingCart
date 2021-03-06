import { Product } from './components/products.js';
import { Cart } from './components/cart.js';

// -------------------[Instances Init]-------------------[

const cart = new Cart();
const productsData = new Product();

// -------------------[Main Methods]-------------------[
const addToCart = (e: any) => {
  const btn: HTMLButtonElement = e.target;
  const target = btn.closest('.cardData');

  const name = target?.querySelector('.name')?.textContent;
  const artBy = target?.querySelector('.artBy')?.textContent;
  const author = target?.querySelector('.author')?.textContent;
  const price = target?.querySelector('.price')?.textContent;
  const _id = target?.querySelector('.id')?.textContent;
  const quantity = 1;

  const data = { name, artBy, author, price, _id, quantity };
  const resp = cart.add({
    _id: _id!,
    name: name!,
    price: parseFloat(price!),
    quantity: quantity,
  });

  console.log('Response', resp);
  renderAfterActions();
  renderCheckOut();
};

const deleteItemCart = (e: any) => {
  const btn: HTMLButtonElement = e.target;
  const _id = btn.getAttribute('data-id');

  const response = cart.deleteItem(_id!);
  console.log('DeleteResponse', response);

  renderAfterActions();

  noRenderCheckOut();
};

const pay = (e: any) => {
  const resp = cart.checkOut();
  console.log('PAY=>', resp);

  renderAfterActions();
  noRenderCheckOut();

  alert(`Thanks! Come back Soon...! 😃`);
};

// -------------------[Aux Methods]-------------------[
const $ = (selector: string): HTMLElement => {
  return document.querySelector(selector) as HTMLElement;
};
const $$ = (selector: string): NodeListOf<Element> => {
  return document.querySelectorAll(selector) as NodeListOf<Element>;
};

const renderAfterActions = () => {
  renderCart();
  renderCartTotal();
  renderCounterItemsHeader();
};

// ============ [ RENDERS ] ============[
const renderProductsData = () => {
  let hmtlDataProducts = '';

  const data = productsData.getProducts();

  data.forEach((dataItem) => {
    const { _id, name, cover, author, artBy, price, currency } = dataItem;

    hmtlDataProducts += `
        <div class="cardData">
          <div class="cardItemHeader name">${name}</div>
          <div class="cardItem">
            <div class="cardItemCover">
              <img
                src="images/${cover}.jpg"
                alt=""
                loading="lazy" 
              />
            </div>
            <div class="cardItemContent">
              <p>
                <span class="title">Art By: </span>
                <span class="artBy">${artBy}</span>
              </p>
              <p>
                <span class="title">Author: </span>
                <span class="author">${author}</span>
              </p>
              <p>
                <span class="title">Price: </span>
                $<span class="price">${price}</span>USD
              </p>
              <p class="sku">
                <span class="title">SKU: </span>
                <span class="id">${_id}</span>
              </p>
              <button class="addBtn">Add to Cart</button>
            </div>
          </div>
        </div>
    `;
  });

  $('.seccionData').innerHTML = hmtlDataProducts;
  $$('.addBtn').forEach((addBtn: any) => {
    addBtn.addEventListener('click', addToCart);
  });
};

const renderCart = () => {
  let htmlCart = '';
  let htmlNoItems = '';

  const cartData = cart.getItems();

  if (cartData.length > 0) {
    cartData.forEach((item) => {
      const { _id, name, price, quantity } = item;

      htmlCart += `
            <div class="itemHader">
              <p>
                <span class="title _id">${_id}</span>
                <span class="delete-btn" data-id="${_id}">X</span>
              </p>
            </div>
            <div class="cartItems">
              <p><span class="title name">${name}</span></p>
              
              <div class="detailPay">
                <p>Quantity: <span class="title quantity">${quantity}</span></p>
                <p>Pay: <span class="title price">${Intl.NumberFormat('en-US', {
                  style: 'currency',
                  currency: 'USD',
                }).format(price)}</span> USD</p>
              </div>
            </div>
    `;
    });

    $('.itemContent').innerHTML = htmlCart;

    $$('.delete-btn').forEach((deleteBtn: any) => {
      deleteBtn.addEventListener('click', deleteItemCart);
    });
  } else {
    htmlNoItems += `
            <div class="cartItems noItemsCart">
              <p><span class="title">No Items in your Cart...</span></p>
            </div>

    `;
    $('.itemContent').innerHTML = htmlNoItems;
  }
};

const renderCartTotal = () => {
  let htmlTotal = '';
  let htmlTotalToParHeade = '';
  const granTotal = cart.getGranTotal();
  // Total: 35.00 USD
  htmlTotal += `
    <span>
      Total: $ ${Intl.NumberFormat('es-MX', {
        style: 'currency',
        currency: 'USD',
      }).format(granTotal)}
    </span>
  `;

  htmlTotalToParHeade += `
  <span>
      $ ${Intl.NumberFormat('es-MX', {
        style: 'currency',
        currency: 'USD',
      }).format(granTotal)}
    </span>
  `;

  $('.totalSection').innerHTML = htmlTotal;
  $('.totalToPayHeader').innerHTML = htmlTotalToParHeade;
};

const renderCheckOut = () => {
  let htmlCheckOut = '';

  htmlCheckOut += `
      <button class="payBtn">💵 PAY 💵</button>
  `;

  $('.checkoutSection').innerHTML = htmlCheckOut;
  $('.payBtn').addEventListener('click', pay);
};

const noRenderCheckOut = () => {
  cart.getItems().length === 0 ? $('.payBtn').remove() : null;
};

const renderCounterItemsHeader = () => {
  let htmlCartCounter = '';
  const counter = cart.getCartItemsTotal();

  htmlCartCounter += `
    <span>${counter}</span>
  `;

  $('.cartCounter').innerHTML = htmlCartCounter;
};

// ============ [ Render INITs ] ============[
renderCounterItemsHeader();
renderProductsData();
renderCart();
renderCartTotal();

cart.cartItems.length > 0 ? renderCheckOut() : null;
