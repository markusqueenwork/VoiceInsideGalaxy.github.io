let cart = loadCart();

function updateCartUI() {
  const totalItems = cart.reduce((sum, i) => sum + (i.quantity || 1), 0);
  const cartCountBadge = document.getElementById('cartCountBadge');
  if (cartCountBadge) cartCountBadge.innerText = totalItems;

  const cartItemsList = document.getElementById('cartItemsList');
  const cartTotalSpan = document.getElementById('cartTotal');
  
  if (!cartItemsList) return;

  if (cart.length === 0) {
    cartItemsList.innerHTML = '<div class="empty-cart">Корзина пуста</div>';
    if (cartTotalSpan) cartTotalSpan.innerText = "ИТОГО: 0 ₽";
    return;
  }

  let html = '';
  let totalSum = 0;
  cart.forEach(item => {
    const qty = item.quantity || 1;
    const itemSum = item.price * qty;
    totalSum += itemSum;
    html += `
      <div class="cart-item">
        <div class="cart-item-info">
          <div>${item.name}</div>
          <div style="color:#FFCC00;font-size:0.8rem">${item.price.toLocaleString()} ₽ × ${qty}</div>
        </div>
        <div>
          <span style="color:#FFCC00;font-weight:600;">${itemSum.toLocaleString()} ₽</span>
          <button class="remove-cart-item" data-id="${item.id}">✕</button>
        </div>
      </div>
    `;
  });
  cartItemsList.innerHTML = html;
  if (cartTotalSpan) cartTotalSpan.innerText = `ИТОГО: ${totalSum.toLocaleString()} ₽`;

  document.querySelectorAll('.remove-cart-item').forEach(btn => {
    btn.onclick = () => {
      cart = cart.filter(i => i.id !== parseInt(btn.dataset.id));
      saveCart(cart);
      updateCartUI();
      showToast("Товар удалён");
    };
  });
}

function addToCart(item) {
  const existing = cart.find(i => i.id === item.id);
  if (existing) {
    existing.quantity = (existing.quantity || 1) + 1;
  } else {
    cart.push({ ...item, quantity: 1 });
  }
  saveCart(cart);
  updateCartUI();
  showToast("Добавлено в корзину");
}

// Инициализация при загрузке
document.addEventListener('DOMContentLoaded', () => {
  updateCartUI();
});
