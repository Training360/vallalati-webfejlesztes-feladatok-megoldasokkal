function sendOrderData() {
  const message = document.querySelector('#message');
  const extra = parseInt(document.querySelector('[name=extra]:checked').value, 10);
  const sauce = parseInt(document.querySelector('#sauce').value, 10);
  const quantity = parseInt(document.querySelector('#quantity').value, 10);
  const price = (1200 + extra + sauce) * quantity;
  message.innerText = price;
}
