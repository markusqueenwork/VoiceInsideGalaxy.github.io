
// Бургер меню
function toggleSideMenu() {
  const menu = document.getElementById('sideMenu');
  menu.classList.toggle('open');
  if (menu.classList.contains('open')) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
}

function closeSideMenu() {
  const menu = document.getElementById('sideMenu');
  menu.classList.remove('open');
  document.body.style.overflow = '';
}

// Корзина
function toggleCart() {
  const panel = document.getElementById('cartPanel');
  panel.classList.toggle('show');
  if (panel.classList.contains('show')) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
}

function closeCart() {
  const panel = document.getElementById('cartPanel');
  panel.classList.remove('show');
  document.body.style.overflow = '';
}

// Регистрация
function openRegModal() {
  document.getElementById('regModal').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeRegModal() {
  document.getElementById('regModal').classList.remove('active');
  document.body.style.overflow = '';
}

// Закрытие при клике вне
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
  toast.style.fontSize = '0.9rem';
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 2000);
}