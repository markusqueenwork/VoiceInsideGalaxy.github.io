// Бургер меню
function toggleSideMenu() {
  document.getElementById('sideMenu').classList.toggle('open');
}

function closeSideMenu() {
  document.getElementById('sideMenu').classList.remove('open');
}

// Корзина
function toggleCart() {
  document.getElementById('cartPanel').classList.toggle('show');
}

function closeCart() {
  document.getElementById('cartPanel').classList.remove('show');
}

// Регистрация
function openRegModal() {
  document.getElementById('regModal').classList.add('active');
}

function closeRegModal() {
  document.getElementById('regModal').classList.remove('active');
}

// Закрытие модалок при клике вне
document.addEventListener('click', function(e) {
  const sideMenu = document.getElementById('sideMenu');
  const burgerBtn = document.getElementById('burgerBtn');
  const cartPanel = document.getElementById('cartPanel');
  const cartIcon = document.getElementById('cartIconBtn');
  const regModal = document.getElementById('regModal');

  if (sideMenu && sideMenu.classList.contains('open') && !sideMenu.contains(e.target) && !burgerBtn.contains(e.target)) {
    closeSideMenu();
  }
  if (cartPanel && cartPanel.classList.contains('show') && !cartPanel.contains(e.target) && e.target !== cartIcon && !cartIcon.contains(e.target)) {
    closeCart();
  }
  if (regModal && regModal.classList.contains('active') && e.target === regModal) {
    closeRegModal();
  }
});

// Загрузка корзины из localStorage
function loadCart() {
  const saved = localStorage.getItem('voiceGalaxyCart');
  if (saved) {
    try {
      return JSON.parse(saved);
    } catch(e) { return []; }
  }
  return [];
}

// Сохранение корзины
function saveCart(cart) {
  localStorage.setItem('voiceGalaxyCart', JSON.stringify(cart));
}

// Уведомление
function showToast(msg) {
  const toast = document.createElement('div');
  toast.innerText = msg;
  toast.style.position = 'fixed';
  toast.style.bottom = '20px';
  toast.style.left = '20px';
  toast.style.right = '20px';
  toast.style.maxWidth = '300px';
  toast.style.background = '#FFCC00';
  toast.style.color = '#000';
  toast.style.padding = '12px 20px';
  toast.style.borderRadius = '40px';
  toast.style.fontWeight = '600';
  toast.style.zIndex = '9999';
  toast.style.textAlign = 'center';
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 2000);
}
