'use strict';

// modal variables
const modal = document.querySelector('[data-modal]');
const modalCloseBtn = document.querySelector('[data-modal-close]');
const modalCloseOverlay = document.querySelector('[data-modal-overlay]');

// modal function
const modalCloseFunc = function () { modal.classList.add('closed') }

// modal eventListener
modalCloseOverlay.addEventListener('click', modalCloseFunc);
modalCloseBtn.addEventListener('click', modalCloseFunc);





// notification toast variables
const notificationToast = document.querySelector('[data-toast]');
const toastCloseBtn = document.querySelector('[data-toast-close]');

// notification toast eventListener
toastCloseBtn.addEventListener('click', function () {
  notificationToast.classList.add('closed');
});





// mobile menu variables
const mobileMenuOpenBtn = document.querySelectorAll('[data-mobile-menu-open-btn]');
const mobileMenu = document.querySelectorAll('[data-mobile-menu]');
const mobileMenuCloseBtn = document.querySelectorAll('[data-mobile-menu-close-btn]');
const overlay = document.querySelector('[data-overlay]');

for (let i = 0; i < mobileMenuOpenBtn.length; i++) {

  // mobile menu function
  const mobileMenuCloseFunc = function () {
    mobileMenu[i].classList.remove('active');
    overlay.classList.remove('active');
  }

  mobileMenuOpenBtn[i].addEventListener('click', function () {
    mobileMenu[i].classList.add('active');
    overlay.classList.add('active');
  });

  mobileMenuCloseBtn[i].addEventListener('click', mobileMenuCloseFunc);
  overlay.addEventListener('click', mobileMenuCloseFunc);

}





// accordion variables
const accordionBtn = document.querySelectorAll('[data-accordion-btn]');
const accordion = document.querySelectorAll('[data-accordion]');

for (let i = 0; i < accordionBtn.length; i++) {

  accordionBtn[i].addEventListener('click', function () {

    const clickedBtn = this.nextElementSibling.classList.contains('active');

    for (let i = 0; i < accordion.length; i++) {

      if (clickedBtn) break;

      if (accordion[i].classList.contains('active')) {

        accordion[i].classList.remove('active');
        accordionBtn[i].classList.remove('active');

      }

    }

    this.nextElementSibling.classList.toggle('active');
    this.classList.toggle('active');

  });

}




// cart variables
const cartOpenBtn = document.querySelector('[data-cart-open-btn]');
const cartModal = document.querySelector('[data-cart-modal]');
const cartModalCloseBtn = document.querySelector('[data-cart-modal-close]');
const cartModalOverlay = document.querySelector('[data-cart-modal-overlay]');
const cartItemsContainer = document.querySelector('[data-cart-items]');
const cartTotal = document.querySelector('[data-cart-total]');
const cartCountSpans = document.querySelectorAll('.count');
const addToCartBtns = document.querySelectorAll('.btn-action, .add-cart-btn');

// wishlist variables
const wishlistOpenBtn = document.querySelector('[data-wishlist-open-btn]');
const wishlistModal = document.querySelector('[data-wishlist-modal]');
const wishlistModalCloseBtn = document.querySelector('[data-wishlist-modal-close]');
const wishlistModalOverlay = document.querySelector('[data-wishlist-modal-overlay]');
const wishlistItemsContainer = document.querySelector('[data-wishlist-items]');
const wishlistCountSpans = document.querySelectorAll('.count');
const addToWishlistBtns = document.querySelectorAll('.btn-action ion-icon[name="heart-outline"]');

// cart array
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// wishlist array
let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

// save functions
function saveCart() {
  localStorage.setItem('cart', JSON.stringify(cart));
}

function saveWishlist() {
  localStorage.setItem('wishlist', JSON.stringify(wishlist));
}

// cart modal functions
const cartModalCloseFunc = function () { cartModal.classList.add('closed') }

// wishlist modal functions
const wishlistModalCloseFunc = function () { wishlistModal.classList.add('closed') }

// cart event listeners
if (cartOpenBtn) {
  cartOpenBtn.addEventListener('click', function () {
    cartModal.classList.remove('closed');
  });
}

cartModalCloseBtn.addEventListener('click', cartModalCloseFunc);
cartModalOverlay.addEventListener('click', cartModalCloseFunc);

// wishlist event listeners
if (wishlistOpenBtn) {
  wishlistOpenBtn.addEventListener('click', function () {
    wishlistModal.classList.remove('closed');
  });
}

wishlistModalCloseBtn.addEventListener('click', wishlistModalCloseFunc);
wishlistModalOverlay.addEventListener('click', wishlistModalCloseFunc);

// add to cart function
function addToCart(product) {
  cart.push(product);
  saveCart();
  updateCartCount();
  renderCart();
}

// update cart count
function updateCartCount() {
  cartCountSpans.forEach(span => {
    span.textContent = cart.length;
  });
}

// render cart items
function renderCart() {
  cartItemsContainer.innerHTML = '';
  let total = 0;
  cart.forEach((item, index) => {
    const itemElement = document.createElement('div');
    itemElement.classList.add('cart-item');
    const originalPrice = parseFloat(item.price.replace(/[$€]/g, ''));
    const displayPrice = currentCurrency === 'eur' ? '€' + (originalPrice * 0.85).toFixed(2) : item.price;
    itemElement.innerHTML = `
      <img src="${item.img}" alt="${item.title}" width="50" height="50">
      <div class="item-details">
        <h4>${item.title}</h4>
        <p>${displayPrice}</p>
        <button class="remove-btn" data-index="${index}">Remove</button>
      </div>
    `;
    cartItemsContainer.appendChild(itemElement);
    // parse price and add to total
    const price = currentCurrency === 'eur' ? originalPrice * 0.85 : originalPrice;
    total += price;
  });
  const currencySymbol = currentCurrency === 'eur' ? '€' : '$';
  cartTotal.textContent = `${currencySymbol}${total.toFixed(2)}`;

  // add remove event listeners
  const removeBtns = cartItemsContainer.querySelectorAll('.remove-btn');
  removeBtns.forEach(btn => {
    btn.addEventListener('click', function () {
      const index = parseInt(this.getAttribute('data-index'));
      cart.splice(index, 1);
      saveCart();
      updateCartCount();
      renderCart();
    });
  });
}

// add to cart event listeners
addToCartBtns.forEach(btn => {
  const isAddToCart = btn.classList.contains('add-cart-btn') || btn.querySelector('ion-icon[name="bag-add-outline"]');
  if (isAddToCart) {
    btn.addEventListener('click', function () {
      const showcase = this.closest('.showcase');
      if (showcase) {
        let imgSrc;
        const defaultImg = showcase.querySelector('.product-img.default');
        if (defaultImg) {
          imgSrc = defaultImg.src;
        } else {
          const showcaseImg = showcase.querySelector('.showcase-img');
          imgSrc = showcaseImg ? showcaseImg.src : '';
        }
        const title = showcase.querySelector('.showcase-title').textContent;
        const priceElement = showcase.querySelector('.price');
        const originalPrice = parseFloat(priceElement.textContent.replace(/[$€]/g, ''));
        const product = { img: imgSrc, title, price: '$' + originalPrice.toFixed(2) };
        addToCart(product);
      }
    });
  }
});

// checkout functionality
const checkoutBtn = document.querySelector('.checkout-btn');
if (checkoutBtn) {
  checkoutBtn.addEventListener('click', function () {
    if (cart.length === 0) {
      alert('Your cart is empty!');
      return;
    }
    alert('Checkout successful! Total: ' + document.querySelector('[data-cart-total]').textContent);
    cart = [];
    saveCart();
    updateCartCount();
    renderCart();
    cartModal.classList.add('closed');
  });
}

// add to wishlist function
function addToWishlist(product) {
  wishlist.push(product);
  saveWishlist();
  updateWishlistCount();
  renderWishlist();
}

// update wishlist count
function updateWishlistCount() {
  wishlistCountSpans.forEach(span => {
    span.textContent = wishlist.length;
  });
}

// render wishlist items
function renderWishlist() {
  wishlistItemsContainer.innerHTML = '';
  wishlist.forEach((item, index) => {
    const itemElement = document.createElement('div');
    itemElement.classList.add('wishlist-item');
    const originalPrice = parseFloat(item.price.replace(/[$€]/g, ''));
    const displayPrice = currentCurrency === 'eur' ? '€' + (originalPrice * 0.85).toFixed(2) : item.price;
    itemElement.innerHTML = `
      <img src="${item.img}" alt="${item.title}" width="50" height="50">
      <div class="item-details">
        <h4>${item.title}</h4>
        <p>${displayPrice}</p>
        <button class="remove-btn" data-index="${index}">Remove</button>
      </div>
    `;
    wishlistItemsContainer.appendChild(itemElement);
  });

  // add remove event listeners
  const removeBtns = wishlistItemsContainer.querySelectorAll('.remove-btn');
  removeBtns.forEach(btn => {
    btn.addEventListener('click', function () {
      const index = parseInt(this.getAttribute('data-index'));
      wishlist.splice(index, 1);
      saveWishlist();
      updateWishlistCount();
      renderWishlist();
    });
  });
}

// add to wishlist event listeners
addToWishlistBtns.forEach(btn => {
  btn.addEventListener('click', function () {
    const showcase = this.closest('.showcase');
    if (showcase) {
      let imgSrc;
      const defaultImg = showcase.querySelector('.product-img.default');
      if (defaultImg) {
        imgSrc = defaultImg.src;
      } else {
        const showcaseImg = showcase.querySelector('.showcase-img');
        imgSrc = showcaseImg ? showcaseImg.src : '';
      }
      const title = showcase.querySelector('.showcase-title').textContent;
      const priceElement = showcase.querySelector('.price');
      const originalPrice = parseFloat(priceElement.textContent.replace(/[$€]/g, ''));
      const product = { img: imgSrc, title, price: '$' + originalPrice.toFixed(2) };
      addToWishlist(product);
    }
  });
});

// logout functionality
const logoutBtn = document.querySelector('.logout-btn');
if (logoutBtn) {
  logoutBtn.addEventListener('click', function () {
    localStorage.clear();
    window.location.href = 'login.html';
  });
}

// currency switching
let currentCurrency = 'usd';
const currencySelect = document.querySelector('select[name="currency"]');
const priceElements = document.querySelectorAll('.price');
const originalPrices = Array.from(priceElements).map(el => parseFloat(el.textContent.replace(/[$€]/g, '')));

function updatePrices(currency) {
  priceElements.forEach((el, index) => {
    let price = originalPrices[index];
    if (currency === 'eur') {
      price = price * 0.85; // Approximate exchange rate: 1 USD = 0.85 EUR
      el.textContent = '€' + price.toFixed(2);
    } else {
      el.textContent = '$' + price.toFixed(2);
    }
  });
}

if (currencySelect) {
  currencySelect.addEventListener('change', function() {
    currentCurrency = this.value;
    updatePrices(currentCurrency);
    renderCart();
    renderWishlist();
  });
}

// language switching
let currentLanguage = 'en';
const languageSelect = document.querySelector('select[name="language"]');

const translations = {
  en: {
    // Header
    'Free Shipping': 'Free Shipping',
    'This Week Order Over - $55': 'This Week Order Over - $55',
    'Home': 'Home',
    'Categories': 'Categories',
    'Men\'s': 'Men\'s',
    'Women\'s': 'Women\'s',
    'Jewelry': 'Jewelry',
    'Perfume': 'Perfume',
    'Blog': 'Blog',
    'Hot Offers': 'Hot Offers',
    'Your Cart': 'Your Cart',
    'Your Wishlist': 'Your Wishlist',
    'Subscribe Newsletter.': 'Subscribe Newsletter.',
    'Subscribe the <b>Anon</b> to get latest products and discount update.': 'Subscribe the <b>Anon</b> to get latest products and discount update.',
    'Subscribe': 'Subscribe',
    'Someone in new just bought': 'Someone in new just bought',
    'Menu': 'Menu',
    'Language': 'Language',
    'Currency': 'Currency',
    'English': 'English',
    'Español': 'Spanish',
    'Français': 'French',
    // Main content
    'New Arrivals': 'New Arrivals',
    'Trending': 'Trending',
    'Top Rated': 'Top Rated',
    'Deal of the day': 'Deal of the day',
    'testimonial': 'testimonial',
    'Our Services': 'Our Services',
    'Worldwide Delivery': 'Worldwide Delivery',
    'For Order Over $100': 'For Order Over $100',
    'Next Day delivery': 'Next Day delivery',
    'UK Orders Only': 'UK Orders Only',
    'Best Online Support': 'Best Online Support',
    'Hours: 8AM - 11PM': 'Hours: 8AM - 11PM',
    'Return Policy': 'Return Policy',
    'Easy & Free Return': 'Easy & Free Return',
    '30% money back': '30% money back',
    // Footer
    'Brand directory': 'Brand directory',
    'Fashion :': 'Fashion :',
    'footwear :': 'footwear :',
    'jewellery :': 'jewellery :',
    'cosmetics :': 'cosmetics :',
    'Popular Categories': 'Popular Categories',
    'Products': 'Products',
    'Our Company': 'Our Company',
    'Services': 'Services',
    'Contact': 'Contact',
    'Follow Us': 'Follow Us',
    'Copyright &copy; <a href="#">Anon</a> all rights reserved.': 'Copyright &copy; <a href="#">Anon</a> all rights reserved.',
    // Buttons and actions
    'add to cart': 'add to cart',
    'Shop now': 'Shop now',
    'Show all': 'Show all',
    'Checkout': 'Checkout',
    'Subscribe': 'Subscribe',
    'Remove': 'Remove',
    'Total:': 'Total:',
    'Your cart is empty!': 'Your cart is empty!',
    'Checkout successful! Total:': 'Checkout successful! Total:',
    // Categories
    'Dress & frock': 'Dress & frock',
    'Winter wear': 'Winter wear',
    'Glasses & lens': 'Glasses & lens',
    'Shorts & jeans': 'Shorts & jeans',
    'T-shirts': 'T-shirts',
    'Jacket': 'Jacket',
    'Watch': 'Watch',
    'Hat & caps': 'Hat & caps',
    // Product titles (some examples)
    'Relaxed Short full Sleeve T-Shirt': 'Relaxed Short full Sleeve T-Shirt',
    'Girls pnk Embro design Top': 'Girls pnk Embro design Top',
    'Black Floral Wrap Midi Skirt': 'Black Floral Wrap Midi Skirt',
    'Pure Garment Dyed Cotton Shirt': 'Pure Garment Dyed Cotton Shirt',
    'MEN Yarn Fleece Full-Zip Jacket': 'MEN Yarn Fleece Full-Zip Jacket',
    'Mens Winter Leathers Jackets': 'Mens Winter Leathers Jackets',
    'Better Basics French Terry Sweatshorts': 'Better Basics French Terry Sweatshorts',
    // Other
    'Trending item': 'Trending item',
    'Women\'s latest fashion sale': 'Women\'s latest fashion sale',
    'starting at': 'starting at',
    'Trending accessories': 'Trending accessories',
    'Modern sunglasses': 'Modern sunglasses',
    'Sale Offer': 'Sale Offer',
    'New fashion summer sale': 'New fashion summer sale',
    'Clothes': 'Clothes',
    'Winter wear': 'Winter wear',
    'Sports': 'Sports',
    'Party wear': 'Party wear',
    'boots': 'boots',
    'formal': 'formal',
    'casual': 'casual',
    'shorts': 'shorts',
    'watches': 'watches',
    'jewellery': 'jewellery',
    'cosmetics': 'cosmetics',
    'electronics': 'electronics',
    'bikes': 'bikes',
    'Home': 'Home',
    'Fashion': 'Fashion',
    'Electronic': 'Electronic',
    'Cosmetic': 'Cosmetic',
    'Health': 'Health',
    'Watches': 'Watches',
    'Prices drop': 'Prices drop',
    'New products': 'New products',
    'Best sales': 'Best sales',
    'Contact us': 'Contact us',
    'Sitemap': 'Sitemap',
    'Delivery': 'Delivery',
    'Legal Notice': 'Legal Notice',
    'Terms and conditions': 'Terms and conditions',
    'About us': 'About us',
    'Secure payment': 'Secure payment',
    '419 State 414 Rte Beaver Dams, New York(NY), 14812, USA': '419 State 414 Rte Beaver Dams, New York(NY), 14812, USA',
    '(607) 936-8058': '(607) 936-8058',
    'example@gmail.com': 'example@gmail.com',
    '25% Discount': '25% Discount',
    'Summer collection': 'Summer collection',
    'Starting @ $10': 'Starting @ $10',
    'Hurry Up! Offer ends in:': 'Hurry Up! Offer ends in:',
    'Days': 'Days',
    'Hours': 'Hours',
    'Min': 'Min',
    'Sec': 'Sec',
    'already sold:': 'already sold:',
    'available:': 'available:',
    'shampoo, conditioner & facewash packs': 'shampoo, conditioner & facewash packs',
    'Rose Gold diamonds Earring': 'Rose Gold diamonds Earring',
    'Pocket Watch Leather Pouch': 'Pocket Watch Leather Pouch',
    'Silver Deer Heart Necklace': 'Silver Deer Heart Necklace',
    'Titan 100 Ml Womens Perfume': 'Titan 100 Ml Womens Perfume',
    'Men\'s Leather Reversible Belt': 'Men\'s Leather Reversible Belt',
    'platinum Zircon Classic Ring': 'platinum Zircon Classic Ring',
    'Smart watche Vital Plus': 'Smart watche Vital Plus',
    'shampoo conditioner packs': 'shampoo conditioner packs',
    'Rose Gold Peacock Earrings': 'Rose Gold Peacock Earrings',
    'Mens Winter Leathers Jackets': 'Mens Winter Leathers Jackets',
    'Pure Garment Dyed Cotton Shirt': 'Pure Garment Dyed Cotton Shirt',
    'MEN Yarn Fleece Full-Zip Jacket': 'MEN Yarn Fleece Full-Zip Jacket',
    'Black Floral Wrap Midi Skirt': 'Black Floral Wrap Midi Skirt',
    'Casual Men\'s Brown shoes': 'Casual Men\'s Brown shoes',
    'Pocket Watch Leather Pouch': 'Pocket Watch Leather Pouch',
    'Smart watche Vital Plus': 'Smart watche Vital Plus',
    'Womens Party Wear Shoes': 'Womens Party Wear Shoes',
    'Mens Winter Leathers Jackets': 'Mens Winter Leathers Jackets',
    'Trekking & Running Shoes - black': 'Trekking & Running Shoes - black',
    'Men\'s Leather Formal Wear shoes': 'Men\'s Leather Formal Wear shoes',
    'Better Basics French Terry Sweatshorts': 'Better Basics French Terry Sweatshorts',
    'Clothes Retail KPIs 2021 Guide for Clothes Executives.': 'Clothes Retail KPIs 2021 Guide for Clothes Executives.',
    'Curbside fashion Trends: How to Win the Pickup Battle.': 'Curbside fashion Trends: How to Win the Pickup Battle.',
  },
  fr: {
    // Header
    'Free Shipping': 'Livraison Gratuite',
    'This Week Order Over - $55': 'Cette Semaine Commande Supérieure à 55 $',
    'Home': 'Accueil',
    'Categories': 'Catégories',
    'Men\'s': 'Homme',
    'Women\'s': 'Femme',
    'Jewelry': 'Bijoux',
    'Perfume': 'Parfum',
    'Blog': 'Blog',
    'Hot Offers': 'Offres Chaudes',
    'Your Cart': 'Votre Panier',
    'Your Wishlist': 'Votre Liste de Souhaits',
    'Subscribe Newsletter.': 'S\'abonner à la Newsletter.',
    'Subscribe the <b>Anon</b> to get latest products and discount update.': 'Abonnez-vous à <b>Anon</b> pour obtenir les derniers produits et mises à jour de remises.',
    'Subscribe': 'S\'abonner',
    'Someone in new just bought': 'Quelqu\'un vient d\'acheter',
    'Menu': 'Menu',
    'Language': 'Langue',
    'Currency': 'Devise',
    'English': 'Anglais',
    'Español': 'Espagnol',
    'Français': 'Français',
    // Main content
    'New Arrivals': 'Nouveautés',
    'Trending': 'Tendances',
    'Top Rated': 'Les Mieux Notés',
    'Deal of the day': 'Offre du Jour',
    'testimonial': 'témoignage',
    'Our Services': 'Nos Services',
    'Worldwide Delivery': 'Livraison Mondiale',
    'For Order Over $100': 'Pour Commande Supérieure à 100 $',
    'Next Day delivery': 'Livraison le Lendemain',
    'UK Orders Only': 'Commandes UK Uniquement',
    'Best Online Support': 'Meilleur Support en Ligne',
    'Hours: 8AM - 11PM': 'Heures: 8h - 23h',
    'Return Policy': 'Politique de Retour',
    'Easy & Free Return': 'Retour Facile et Gratuit',
    '30% money back': '30% de remboursement',
    // Footer
    'Brand directory': 'Répertoire des Marques',
    'Fashion :': 'Mode :',
    'footwear :': 'chaussures :',
    'jewellery :': 'bijoux :',
    'cosmetics :': 'cosmétiques :',
    'Popular Categories': 'Catégories Populaires',
    'Products': 'Produits',
    'Our Company': 'Notre Société',
    'Services': 'Services',
    'Contact': 'Contact',
    'Follow Us': 'Suivez-Nous',
    'Copyright &copy; <a href="#">Anon</a> all rights reserved.': 'Copyright &copy; <a href="#">Anon</a> tous droits réservés.',
    // Buttons and actions
    'add to cart': 'ajouter au panier',
    'Shop now': 'Acheter maintenant',
    'Show all': 'Voir tout',
    'Checkout': 'Paiement',
    'Subscribe': 'S\'abonner',
    'Remove': 'Supprimer',
    'Total:': 'Total:',
    'Your cart is empty!': 'Votre panier est vide!',
    'Checkout successful! Total:': 'Paiement réussi! Total:',
    // Categories
    'Dress & frock': 'Robe & jupe',
    'Winter wear': 'Vêtements d\'hiver',
    'Glasses & lens': 'Lunettes & lentilles',
    'Shorts & jeans': 'Shorts & jeans',
    'T-shirts': 'T-shirts',
    'Jacket': 'Veste',
    'Watch': 'Montre',
    'Hat & caps': 'Chapeau & casquettes',
    // Product titles (some examples)
    'Relaxed Short full Sleeve T-Shirt': 'T-Shirt Manches Courtes Détendu',
    'Girls pnk Embro design Top': 'Top Rose Embroché pour Filles',
    'Black Floral Wrap Midi Skirt': 'Jupe Midi Florale Noire',
    'Pure Garment Dyed Cotton Shirt': 'Chemise Coton Teint Pure',
    'MEN Yarn Fleece Full-Zip Jacket': 'Veste Polaire Homme Fermeture Éclair',
    'Mens Winter Leathers Jackets': 'Vestes Cuir Hiver Homme',
    'Better Basics French Terry Sweatshorts': 'Shorts de Sport Terry Français',
    // Other
    'Trending item': 'Article tendance',
    'Women\'s latest fashion sale': 'Dernière vente de mode femme',
    'starting at': 'à partir de',
    'Trending accessories': 'Accessoires tendance',
    'Modern sunglasses': 'Lunettes de soleil modernes',
    'Sale Offer': 'Offre de Vente',
    'New fashion summer sale': 'Nouvelle vente mode été',
    'Clothes': 'Vêtements',
    'Winter wear': 'Vêtements d\'hiver',
    'Sports': 'Sports',
    'Party wear': 'Tenue de fête',
    'boots': 'bottes',
    'formal': 'formel',
    'casual': 'décontracté',
    'shorts': 'shorts',
    'watches': 'montres',
    'jewellery': 'bijoux',
    'cosmetics': 'cosmétiques',
    'electronics': 'électronique',
    'bikes': 'vélos',
    'Home': 'Accueil',
    'Fashion': 'Mode',
    'Electronic': 'Électronique',
    'Cosmetic': 'Cosmétique',
    'Health': 'Santé',
    'Watches': 'Montres',
    'Prices drop': 'Prix en baisse',
    'New products': 'Nouveaux produits',
    'Best sales': 'Meilleures ventes',
    'Contact us': 'Contactez-nous',
    'Sitemap': 'Plan du site',
    'Delivery': 'Livraison',
    'Legal Notice': 'Mentions légales',
    'Terms and conditions': 'Termes et conditions',
    'About us': 'À propos de nous',
    'Secure payment': 'Paiement sécurisé',
    '419 State 414 Rte Beaver Dams, New York(NY), 14812, USA': '419 State 414 Rte Beaver Dams, New York(NY), 14812, USA',
    '(607) 936-8058': '(607) 936-8058',
    'example@gmail.com': 'example@gmail.com',
    '25% Discount': '25% de Remise',
    'Summer collection': 'Collection Été',
    'Starting @ $10': 'À partir de 10 $',
    'Hurry Up! Offer ends in:': 'Dépêchez-vous! L\'offre se termine dans:',
    'Days': 'Jours',
    'Hours': 'Heures',
    'Min': 'Min',
    'Sec': 'Sec',
    'already sold:': 'déjà vendu:',
    'available:': 'disponible:',
    'shampoo, conditioner & facewash packs': 'packs shampoo, après-shampoo & nettoyant visage',
    'Rose Gold diamonds Earring': 'Boucles d\'oreilles diamants or rose',
    'Pocket Watch Leather Pouch': 'Pochette cuir montre de poche',
    'Silver Deer Heart Necklace': 'Collier cœur cerf argent',
    'Titan 100 Ml Womens Perfume': 'Parfum femme Titan 100 ml',
    'Men\'s Leather Reversible Belt': 'Ceinture cuir réversible homme',
    'platinum Zircon Classic Ring': 'Bague classique zircon platine',
    'Smart watche Vital Plus': 'Montre intelligente Vital Plus',
    'shampoo conditioner packs': 'packs shampoo après-shampoo',
    'Rose Gold Peacock Earrings': 'Boucles d\'oreilles paon or rose',
    'Mens Winter Leathers Jackets': 'Vestes cuir hiver homme',
    'Pure Garment Dyed Cotton Shirt': 'Chemise coton teint pure',
    'MEN Yarn Fleece Full-Zip Jacket': 'Veste polaire fermeture éclair homme',
    'Black Floral Wrap Midi Skirt': 'Jupe midi florale noire',
    'Casual Men\'s Brown shoes': 'Chaussures marron homme décontractées',
    'Pocket Watch Leather Pouch': 'Pochette cuir montre de poche',
    'Smart watche Vital Plus': 'Montre intelligente Vital Plus',
    'Womens Party Wear Shoes': 'Chaussures femme tenue de fête',
    'Mens Winter Leathers Jackets': 'Vestes cuir hiver homme',
    'Trekking & Running Shoes - black': 'Chaussures trekking & course - noir',
    'Men\'s Leather Formal Wear shoes': 'Chaussures cuir formel homme',
    'Better Basics French Terry Sweatshorts': 'Shorts de sport terry français',
    'Clothes Retail KPIs 2021 Guide for Clothes Executives.': 'Guide KPI Vente Détail Vêtements 2021 pour Dirigeants.',
    'Curbside fashion Trends: How to Win the Pickup Battle.': 'Tendances Mode Drive: Comment Gagner la Bataille du Ramassage.',
    'EBT vendors: Claim Your Share of SNAP Online Revenue.': 'Vendeurs EBT: Réclamez Votre Part des Revenus SNAP en Ligne.',
    'Curbside fashion Trends: How to Win the Pickup Battle.': 'Tendances Mode Drive: Comment Gagner la Bataille du Ramassage.',
    'Fashion': 'Mode',
    'Clothes': 'Vêtements',
    'Shoes': 'Chaussures',
    'Electronics': 'Électronique',
    'By Mr Admin': 'Par M. Admin',
    'By Mr Robin': 'Par M. Robin',
    'By Mr Selsa': 'Par Mme Selsa',
    'By Mr Pawar': 'Par M. Pawar',
    'Apr 06, 2022': '06 avr 2022',
    'Jan 18, 2022': '18 jan 2022',
    'Feb 10, 2022': '10 fév 2022',
    'Mar 15, 2022': '15 mar 2022',
    'CEO & Founder Invision': 'PDG & Fondateur Invision',
    'Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor dolor sit amet.': 'Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor dolor sit amet.',
    'Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor dolor sit amet consectetur Lorem ipsum dolor': 'Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor dolor sit amet consectetur Lorem ipsum dolor',
    'Fashion :': 'Mode :',
    'T-shirt': 'T-shirt',
    'Shirts': 'Chemises',
    'shorts & jeans': 'shorts & jeans',
    'jacket': 'veste',
    'dress & frock': 'robe & jupe',
    'innerwear': 'sous-vêtements',
    'hosiery': 'bonneterie',
    'sport': 'sport',
    'formal': 'formel',
    'Boots': 'Bottes',
    'casual': 'décontracté',
    'cowboy shoes': 'bottes cowboy',
    'safety shoes': 'chaussures de sécurité',
    'Party wear shoes': 'chaussures de fête',
    'Branded': 'Marque',
    'Firstcopy': 'Première copie',
    'Long shoes': 'Chaussures longues',
    'Necklace': 'Collier',
    'Earrings': 'Boucles d\'oreilles',
    'Couple rings': 'Bagues couple',
    'Pendants': 'Pendentifs',
    'Crystal': 'Cristal',
    'Bangles': 'Bracelets',
    'bracelets': 'bracelets',
    'nosepin': 'nasal',
    'chain': 'chaîne',
    'Shampoo': 'Shampooing',
    'Bodywash': 'Gel douche',
    'Facewash': 'Nettoyant visage',
    'makeup kit': 'kit maquillage',
    'liner': 'eye-liner',
    'lipstick': 'rouge à lèvres',
    'prefume': 'parfum',
    'Body soap': 'Savon corps',
    'scrub': 'gommage',
    'hair gel': 'gel coiffant',
    'hair colors': 'couleurs cheveux',
    'hair dye': 'teinture cheveux',
    'sunscreen': 'crème solaire',
    'skin loson': 'lotion peau'
  },
  es: {
    // Header
    'Free Shipping': 'Envío Gratis',
    'This Week Order Over - $55': 'Esta Semana Pedido Superior a $55',
    'Home': 'Inicio',
    'Categories': 'Categorías',
    'Men\'s': 'Hombre',
    'Women\'s': 'Mujer',
    'Jewelry': 'Joyería',
    'Perfume': 'Perfume',
    'Blog': 'Blog',
    'Hot Offers': 'Ofertas Calientes',
    'Your Cart': 'Tu Carrito',
    'Your Wishlist': 'Tu Lista de Deseos',
    'Subscribe Newsletter.': 'Suscribirse al Boletín.',
    'Subscribe the <b>Anon</b> to get latest products and discount update.': 'Suscríbete a <b>Anon</b> para obtener los últimos productos y actualizaciones de descuentos.',
    'Subscribe': 'Suscribirse',
    'Someone in new just bought': 'Alguien acaba de comprar',
    'Menu': 'Menú',
    'Language': 'Idioma',
    'Currency': 'Moneda',
    'English': 'Inglés',
    'Español': 'Español',
    'Français': 'Francés',
    // Main content
    'New Arrivals': 'Novedades',
    'Trending': 'Tendencias',
    'Top Rated': 'Mejor Valorados',
    'Deal of the day': 'Oferta del Día',
    'testimonial': 'testimonio',
    'Our Services': 'Nuestros Servicios',
    'Worldwide Delivery': 'Entrega Mundial',
    'For Order Over $100': 'Para Pedidos Superiores a $100',
    'Next Day delivery': 'Entrega al Día Siguiente',
    'UK Orders Only': 'Solo Pedidos UK',
    'Best Online Support': 'Mejor Soporte en Línea',
    'Hours: 8AM - 11PM': 'Horas: 8AM - 11PM',
    'Return Policy': 'Política de Devolución',
    'Easy & Free Return': 'Devolución Fácil y Gratuita',
    '30% money back': '30% de reembolso',
    // Footer
    'Brand directory': 'Directorio de Marcas',
    'Fashion :': 'Moda :',
    'footwear :': 'calzado :',
    'jewellery :': 'joyería :',
    'cosmetics :': 'cosméticos :',
    'Popular Categories': 'Categorías Populares',
    'Products': 'Productos',
    'Our Company': 'Nuestra Empresa',
    'Services': 'Servicios',
    'Contact': 'Contacto',
    'Follow Us': 'Síguenos',
    'Copyright &copy; <a href="#">Anon</a> all rights reserved.': 'Copyright &copy; <a href="#">Anon</a> todos los derechos reservados.',
    // Buttons and actions
    'add to cart': 'agregar al carrito',
    'Shop now': 'Comprar ahora',
    'Show all': 'Mostrar todo',
    'Checkout': 'Pagar',
    'Subscribe': 'Suscribirse',
    'Remove': 'Eliminar',
    'Total:': 'Total:',
    'Your cart is empty!': '¡Tu carrito está vacío!',
    'Checkout successful! Total:': '¡Pago exitoso! Total:',
    // Categories
    'Dress & frock': 'Vestido y falda',
    'Winter wear': 'Ropa de invierno',
    'Glasses & lens': 'Gafas y lentes',
    'Shorts & jeans': 'Shorts y jeans',
    'T-shirts': 'Camisetas',
    'Jacket': 'Chaqueta',
    'Watch': 'Reloj',
    'Hat & caps': 'Sombrero y gorras',
    // Product titles (some examples)
    'Relaxed Short full Sleeve T-Shirt': 'Camiseta de Manga Corta Relajada',
    'Girls pnk Embro design Top': 'Top Rosa Bordado para Niñas',
    'Black Floral Wrap Midi Skirt': 'Falda Midi Floral Negra',
    'Pure Garment Dyed Cotton Shirt': 'Camisa de Algodón Teñida Pura',
    'MEN Yarn Fleece Full-Zip Jacket': 'Chaqueta Polar de Lana con Cremallera Completa para Hombres',
    'Mens Winter Leathers Jackets': 'Chaquetas de Cuero de Invierno para Hombres',
    'Better Basics French Terry Sweatshorts': 'Shorts de Sudor French Terry Básicos Mejores',
    // Other
    'Trending item': 'Artículo de tendencia',
    'Women\'s latest fashion sale': 'Última venta de moda para mujeres',
    'starting at': 'a partir de',
    'Trending accessories': 'Accesorios de tendencia',
    'Modern sunglasses': 'Gafas de sol modernas',
    'Sale Offer': 'Oferta de Venta',
    'New fashion summer sale': 'Nueva venta de moda de verano',
    'Clothes': 'Ropa',
    'Winter wear': 'Ropa de invierno',
    'Sports': 'Deportes',
    'Party wear': 'Ropa de fiesta',
    'boots': 'botas',
    'formal': 'formal',
    'casual': 'casual',
    'shorts': 'shorts',
    'watches': 'relojes',
    'jewellery': 'joyería',
    'cosmetics': 'cosméticos',
    'electronics': 'electrónica',
    'bikes': 'bicicletas',
    'Fashion': 'Moda',
    'Electronic': 'Electrónica',
    'Cosmetic': 'Cosmética',
    'Health': 'Salud',
    'Watches': 'Relojes',
    'Prices drop': 'Precios bajan',
    'New products': 'Nuevos productos',
    'Best sales': 'Mejores ventas',
    'Contact us': 'Contáctanos',
    'Sitemap': 'Mapa del sitio',
    'Delivery': 'Entrega',
    'Legal Notice': 'Aviso Legal',
    'Terms and conditions': 'Términos y condiciones',
    'About us': 'Sobre nosotros',
    'Secure payment': 'Pago seguro',
    '419 State 414 Rte Beaver Dams, New York(NY), 14812, USA': '419 State 414 Rte Beaver Dams, New York(NY), 14812, USA',
    '(607) 936-8058': '(607) 936-8058',
    'example@gmail.com': 'example@gmail.com',
    '25% Discount': '25% de Descuento',
    'Summer collection': 'Colección de Verano',
    'Starting @ $10': 'A partir de $10',
    'Hurry Up! Offer ends in:': '¡Apúrate! La oferta termina en:',
    'Days': 'Días',
    'Hours': 'Horas',
    'Min': 'Min',
    'Sec': 'Seg',
    'already sold:': 'ya vendido:',
    'available:': 'disponible:',
    'shampoo, conditioner & facewash packs': 'paquetes de champú, acondicionador y limpiador facial',
    'Rose Gold diamonds Earring': 'Pendientes de diamantes en oro rosa',
    'Pocket Watch Leather Pouch': 'Funda de cuero para reloj de bolsillo',
    'Silver Deer Heart Necklace': 'Collar corazón ciervo plata',
    'Titan 100 Ml Womens Perfume': 'Perfume Mujer Titan 100 ml',
    'Men\'s Leather Reversible Belt': 'Cinturón de cuero reversible para hombres',
    'platinum Zircon Classic Ring': 'Anillo clásico zirconio platino',
    'Smart watche Vital Plus': 'Reloj inteligente Vital Plus',
    'shampoo conditioner packs': 'paquetes de champú y acondicionador',
    'Rose Gold Peacock Earrings': 'Pendientes pavo real oro rosa',
    'MEN Yarn Fleece Full-Zip Jacket': 'Chaqueta polar lana cierre completo hombres',
    'Casual Men\'s Brown shoes': 'Zapatos marrones casuales para hombres',
    'Pocket Watch Leather Pouch': 'Funda cuero reloj bolsillo',
    'Smart watche Vital Plus': 'Reloj inteligente Vital Plus',
    'Womens Party Wear Shoes': 'Zapatos de fiesta para mujeres',
    'Trekking & Running Shoes - black': 'Zapatos trekking y running - negro',
    'Men\'s Leather Formal Wear shoes': 'Zapatos cuero formal hombres',
    'Better Basics French Terry Sweatshorts': 'Shorts sudadera French Terry básicos mejores',
    'Clothes Retail KPIs 2021 Guide for Clothes Executives.': 'Guía KPI Venta Minorista Ropa 2021 para Ejecutivos de Ropa.',
    'Curbside fashion Trends: How to Win the Pickup Battle.': 'Tendencias Moda Drive: Cómo Ganar la Batalla de Recogida.',
    'EBT vendors: Claim Your Share of SNAP Online Revenue.': 'Vendedores EBT: Reclama Tu Parte de los Ingresos SNAP en Línea.',
  }
};

function translatePage(language) {
  const elements = document.querySelectorAll('[data-translate]');
  elements.forEach(el => {
    const key = el.getAttribute('data-translate');
    if (translations[language] && translations[language][key]) {
      el.innerHTML = translations[language][key];
    }
  });

  // Also translate text content for elements without data-translate
  const textElements = document.querySelectorAll('h1, h2, h3, h4, h5, h6, p, span, a, button, label, li, td, th, div:not([class]), div[class*="title"], div[class*="content"]');
  textElements.forEach(el => {
    if (el.children.length === 0 && el.textContent.trim()) {
      const key = el.textContent.trim();
      if (translations[language] && translations[language][key]) {
        el.innerHTML = translations[language][key];
      }
    }
  });
}

function updateLanguageSelect() {
  if (!languageSelect) return;
  const options = languageSelect.querySelectorAll('option');
  options.forEach(option => {
    let langKey;
    if (option.value === 'en-US') langKey = 'English';
    else if (option.value === 'es-ES') langKey = 'Español';
    else if (option.value === 'fr') langKey = 'Français';
    if (langKey && translations[currentLanguage] && translations[currentLanguage][langKey]) {
      option.textContent = translations[currentLanguage][langKey];
    }
  });
}

if (languageSelect) {
  languageSelect.addEventListener('change', function() {
    if (this.value === 'en-US') currentLanguage = 'en';
    else if (this.value === 'es-ES') currentLanguage = 'es';
    else currentLanguage = 'fr';
    translatePage(currentLanguage);
    updateLanguageSelect();
  });
}

// price filter functionality
const priceFilter = document.getElementById('price-filter');

function filterProducts() {
  const maxPrice = parseFloat(priceFilter.value) || Infinity;
  const showcases = document.querySelectorAll('.product-box .showcase');
  showcases.forEach(showcase => {
    const priceEl = showcase.querySelector('.price');
    const priceText = priceEl.textContent;
    const price = parseFloat(priceText.replace(/[$€]/g, ''));
    if (price <= maxPrice) {
      showcase.style.display = '';
    } else {
      showcase.style.display = 'none';
    }
  });
}

if (priceFilter) {
  priceFilter.addEventListener('input', filterProducts);
}

// initialize on page load
updateCartCount();
updateWishlistCount();
renderCart();
renderWishlist();
