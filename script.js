// ============================================
// POKEMON CARD SHOP - INTERACTIVE FEATURES
// ============================================

// Card Data - ME02: Phantasmal Flames
const cardData = [
  {
    "name": "Mega Charizard X ex - 125/094",
    "set": "ME02: Phantasmal Flames",
    "rarity": "Special Illustration Rare",
    "cardNumber": "125/094",
    "listings": 45,
    "lowestPrice": 499.99,
    "marketPrice": 601.95,
    "productId": 662184,
    "imageUrl": "https://tcgplayer-cdn.tcgplayer.com/product/662184_in_200x200.jpg",
    "productUrl": "/product/662184/pokemon-me02-phantasmal-flames-mega-charizard-x-ex-125-094"
  },
  {
    "name": "Mega Charizard X ex - 130/094",
    "set": "ME02: Phantasmal Flames",
    "rarity": "Mega Hyper Rare",
    "cardNumber": "130/094",
    "listings": 47,
    "lowestPrice": 448.00,
    "marketPrice": 450.96,
    "productId": 662185,
    "imageUrl": "https://tcgplayer-cdn.tcgplayer.com/product/662185_in_200x200.jpg",
    "productUrl": "/product/662185/pokemon-me02-phantasmal-flames-mega-charizard-x-ex-130-094"
  },
  {
    "name": "Dawn - 129/094",
    "set": "ME02: Phantasmal Flames",
    "rarity": "Special Illustration Rare",
    "cardNumber": "129/094",
    "listings": 70,
    "lowestPrice": 49.98,
    "marketPrice": 53.28,
    "productId": 662150,
    "imageUrl": "https://tcgplayer-cdn.tcgplayer.com/product/662150_in_200x200.jpg",
    "productUrl": "/product/662150/pokemon-me02-phantasmal-flames-dawn-129-094"
  },
  {
    "name": "Mega Sharpedo ex - 127/094",
    "set": "ME02: Phantasmal Flames",
    "rarity": "Special Illustration Rare",
    "cardNumber": "127/094",
    "listings": 42,
    "lowestPrice": 38.95,
    "marketPrice": 48.28,
    "productId": 662193,
    "imageUrl": "https://tcgplayer-cdn.tcgplayer.com/product/662193_in_200x200.jpg",
    "productUrl": "/product/662193/pokemon-me02-phantasmal-flames-mega-sharpedo-ex-127-094"
  },
  {
    "name": "Mega Charizard X ex - 109/094",
    "set": "ME02: Phantasmal Flames",
    "rarity": "Ultra Rare",
    "cardNumber": "109/094",
    "listings": 125,
    "lowestPrice": 40.99,
    "marketPrice": 42.95,
    "productId": 662183,
    "imageUrl": "https://tcgplayer-cdn.tcgplayer.com/product/662183_in_200x200.jpg",
    "productUrl": "/product/662183/pokemon-me02-phantasmal-flames-mega-charizard-x-ex-109-094"
  },
  {
    "name": "Mega Lopunny ex - 128/094",
    "set": "ME02: Phantasmal Flames",
    "rarity": "Special Illustration Rare",
    "cardNumber": "128/094",
    "listings": 97,
    "lowestPrice": 34.95,
    "marketPrice": 36.68,
    "productId": 662190,
    "imageUrl": "https://tcgplayer-cdn.tcgplayer.com/product/662190_in_200x200.jpg",
    "productUrl": "/product/662190/pokemon-me02-phantasmal-flames-mega-lopunny-ex-128-094"
  },
  {
    "name": "Rotom ex - 126/094",
    "set": "ME02: Phantasmal Flames",
    "rarity": "Special Illustration Rare",
    "cardNumber": "126/094",
    "listings": 64,
    "lowestPrice": 26.98,
    "marketPrice": 29.02,
    "productId": 662222,
    "imageUrl": "https://tcgplayer-cdn.tcgplayer.com/product/662222_in_200x200.jpg",
    "productUrl": "/product/662222/pokemon-me02-phantasmal-flames-rotom-ex-126-094"
  },
  {
    "name": "Meowth",
    "set": "ME02: Phantasmal Flames",
    "rarity": "Illustration Rare",
    "cardNumber": "106/094",
    "listings": 156,
    "lowestPrice": 18.99,
    "marketPrice": 21.39,
    "productId": 662195,
    "imageUrl": "https://tcgplayer-cdn.tcgplayer.com/product/662195_in_200x200.jpg",
    "productUrl": "/product/662195/pokemon-me02-phantasmal-flames-meowth"
  },
  {
    "name": "Piplup - 098/094",
    "set": "ME02: Phantasmal Flames",
    "rarity": "Illustration Rare",
    "cardNumber": "098/094",
    "listings": 113,
    "lowestPrice": 14.75,
    "marketPrice": 15.99,
    "productId": 662215,
    "imageUrl": "https://tcgplayer-cdn.tcgplayer.com/product/662215_in_200x200.jpg",
    "productUrl": "/product/662215/pokemon-me02-phantasmal-flames-piplup-098-094"
  },
  {
    "name": "Dawn - 118/094",
    "set": "ME02: Phantasmal Flames",
    "rarity": "Ultra Rare",
    "cardNumber": "118/094",
    "listings": 46,
    "lowestPrice": 13.00,
    "marketPrice": 14.76,
    "productId": 662149,
    "imageUrl": "https://tcgplayer-cdn.tcgplayer.com/product/662149_in_200x200.jpg",
    "productUrl": "/product/662149/pokemon-me02-phantasmal-flames-dawn-118-094"
  },
  {
    "name": "Mega Lopunny ex - 115/094",
    "set": "ME02: Phantasmal Flames",
    "rarity": "Ultra Rare",
    "cardNumber": "115/094",
    "listings": 111,
    "lowestPrice": 6.00,
    "marketPrice": 7.07,
    "productId": 662189,
    "imageUrl": "https://tcgplayer-cdn.tcgplayer.com/product/662189_in_200x200.jpg",
    "productUrl": "/product/662189/pokemon-me02-phantasmal-flames-mega-lopunny-ex-115-094"
  },
  {
    "name": "Wigglytuff - 105/094",
    "set": "ME02: Phantasmal Flames",
    "rarity": "Illustration Rare",
    "cardNumber": "105/094",
    "listings": 229,
    "lowestPrice": 6.30,
    "marketPrice": 7.01,
    "productId": 662240,
    "imageUrl": "https://tcgplayer-cdn.tcgplayer.com/product/662240_in_200x200.jpg",
    "productUrl": "/product/662240/pokemon-me02-phantasmal-flames-wigglytuff-105-094"
  },
  {
    "name": "Flygon - 101/094",
    "set": "ME02: Phantasmal Flames",
    "rarity": "Illustration Rare",
    "cardNumber": "101/094",
    "listings": 196,
    "lowestPrice": 4.99,
    "marketPrice": 6.31,
    "productId": 662160,
    "imageUrl": "https://tcgplayer-cdn.tcgplayer.com/product/662160_in_200x200.jpg",
    "productUrl": "/product/662160/pokemon-me02-phantasmal-flames-flygon-101-094"
  },
  {
    "name": "Mega Charizard X ex - 013/094",
    "set": "ME02: Phantasmal Flames",
    "rarity": "Double Rare",
    "cardNumber": "013/094",
    "listings": 287,
    "lowestPrice": 3.90,
    "marketPrice": 5.63,
    "productId": 662182,
    "imageUrl": "https://tcgplayer-cdn.tcgplayer.com/product/662182_in_200x200.jpg",
    "productUrl": "/product/662182/pokemon-me02-phantasmal-flames-mega-charizard-x-ex-013-094"
  },
  {
    "name": "Dewgong - 097/094",
    "set": "ME02: Phantasmal Flames",
    "rarity": "Illustration Rare",
    "cardNumber": "097/094",
    "listings": 236,
    "lowestPrice": 4.25,
    "marketPrice": 5.41,
    "productId": 662152,
    "imageUrl": "https://tcgplayer-cdn.tcgplayer.com/product/662152_in_200x200.jpg",
    "productUrl": "/product/662152/pokemon-me02-phantasmal-flames-dewgong-097-094"
  },
  {
    "name": "Mega Sharpedo ex - 113/094",
    "set": "ME02: Phantasmal Flames",
    "rarity": "Ultra Rare",
    "cardNumber": "113/094",
    "listings": 118,
    "lowestPrice": 4.64,
    "marketPrice": 5.27,
    "productId": 662192,
    "imageUrl": "https://tcgplayer-cdn.tcgplayer.com/product/662192_in_200x200.jpg",
    "productUrl": "/product/662192/pokemon-me02-phantasmal-flames-mega-sharpedo-ex-113-094"
  },
  {
    "name": "Zacian - 100/094",
    "set": "ME02: Phantasmal Flames",
    "rarity": "Illustration Rare",
    "cardNumber": "100/094",
    "listings": 255,
    "lowestPrice": 4.95,
    "marketPrice": 5.23,
    "productId": 662245,
    "imageUrl": "https://tcgplayer-cdn.tcgplayer.com/product/662245_in_200x200.jpg",
    "productUrl": "/product/662245/pokemon-me02-phantasmal-flames-zacian-100-094"
  },
  {
    "name": "Paldean Wooper",
    "set": "ME02: Phantasmal Flames",
    "rarity": "Illustration Rare",
    "cardNumber": "102/094",
    "listings": 239,
    "lowestPrice": 4.96,
    "marketPrice": 4.76,
    "productId": 662209,
    "imageUrl": "https://tcgplayer-cdn.tcgplayer.com/product/662209_in_200x200.jpg",
    "productUrl": "/product/662209/pokemon-me02-phantasmal-flames-paldean-wooper"
  },
  {
    "name": "Mega Heracross ex - 108/094",
    "set": "ME02: Phantasmal Flames",
    "rarity": "Ultra Rare",
    "cardNumber": "108/094",
    "listings": 204,
    "lowestPrice": 3.40,
    "marketPrice": 4.42,
    "productId": 662187,
    "imageUrl": "https://tcgplayer-cdn.tcgplayer.com/product/662187_in_200x200.jpg",
    "productUrl": "/product/662187/pokemon-me02-phantasmal-flames-mega-heracross-ex-108-094"
  },
  {
    "name": "Battle Cage - 116/094",
    "set": "ME02: Phantasmal Flames",
    "rarity": "Ultra Rare",
    "cardNumber": "116/094",
    "listings": 182,
    "lowestPrice": 3.97,
    "marketPrice": 4.16,
    "productId": 662131,
    "imageUrl": "https://tcgplayer-cdn.tcgplayer.com/product/662131_in_200x200.jpg",
    "productUrl": "/product/662131/pokemon-me02-phantasmal-flames-battle-cage-116-094"
  },
  {
    "name": "Toxtricity - 103/094",
    "set": "ME02: Phantasmal Flames",
    "rarity": "Illustration Rare",
    "cardNumber": "103/094",
    "listings": 287,
    "lowestPrice": 2.80,
    "marketPrice": 3.31,
    "productId": 662235,
    "imageUrl": "https://tcgplayer-cdn.tcgplayer.com/product/662235_in_200x200.jpg",
    "productUrl": "/product/662235/pokemon-me02-phantasmal-flames-toxtricity-103-094"
  },
  {
    "name": "Charcadet - 022",
    "set": "ME02: Phantasmal Flames",
    "rarity": "Promo",
    "cardNumber": "022",
    "listings": 171,
    "lowestPrice": 2.49,
    "marketPrice": 3.29,
    "productId": 664093,
    "imageUrl": "https://tcgplayer-cdn.tcgplayer.com/product/664093_in_200x200.jpg",
    "productUrl": "/product/664093/pokemon-me02-phantasmal-flames-charcadet-022"
  },
  {
    "name": "Oricorio ex - 110/094",
    "set": "ME02: Phantasmal Flames",
    "rarity": "Ultra Rare",
    "cardNumber": "110/094",
    "listings": 211,
    "lowestPrice": 3.05,
    "marketPrice": 3.21,
    "productId": 662207,
    "imageUrl": "https://tcgplayer-cdn.tcgplayer.com/product/662207_in_200x200.jpg",
    "productUrl": "/product/662207/pokemon-me02-phantasmal-flames-oricorio-ex-110-094"
  },
  {
    "name": "Yamper - 099/094",
    "set": "ME02: Phantasmal Flames",
    "rarity": "Illustration Rare",
    "cardNumber": "099/094",
    "listings": 260,
    "lowestPrice": 3.21,
    "marketPrice": 3.20,
    "productId": 662243,
    "imageUrl": "https://tcgplayer-cdn.tcgplayer.com/product/662243_in_200x200.jpg",
    "productUrl": "/product/662243/pokemon-me02-phantasmal-flames-yamper-099-094"
  }
];

// Function to get badge text based on card properties
function getBadge(card) {
  if (card.lowestPrice >= 400) return 'Hot Item';
  if (card.rarity.includes('Special Illustration')) return 'Special Art';
  if (card.rarity.includes('Hyper')) return 'Hyper Rare';
  if (card.lowestPrice >= 30) return 'Premium';
  if (card.rarity === 'Promo') return 'Promo';
  return null;
}

// Function to generate product cards dynamically
function generateProductCards() {
  const productsGrid = document.querySelector('.products-grid');
  if (!productsGrid) return;

  // Clear existing cards
  productsGrid.innerHTML = '';

  // Generate cards from data
  cardData.forEach(card => {
    const badge = getBadge(card);

    const cardHTML = `
      <div class="product-card">
        ${badge ? `<span class="product-badge">${badge}</span>` : ''}
        <img src="${card.imageUrl}" alt="${card.name}" class="product-image" loading="lazy">
        <div class="product-info">
          <h3 class="product-title">${card.name}</h3>
          <p class="product-rarity">${card.rarity}</p>
          <div class="product-pricing">
            <p class="product-price">$${card.lowestPrice.toFixed(2)}</p>
            <p class="product-market">Market: $${card.marketPrice.toFixed(2)}</p>
          </div>
          <p class="product-description">
            ${card.set}
          </p>
        </div>
      </div>
    `;

    productsGrid.insertAdjacentHTML('beforeend', cardHTML);
  });

  // Re-apply 3D tilt effect to new cards
  applyCardEffects();
}

// Function to apply 3D tilt effect to product cards
function applyCardEffects() {
  const productCards = document.querySelectorAll('.product-card');

  productCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = (y - centerY) / 10;
      const rotateY = (centerX - x) / 10;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
    });
  });
}

// Initialize cards when DOM is loaded
document.addEventListener('DOMContentLoaded', generateProductCards);

// Navbar scroll effect
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll > 100) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }

  lastScroll = currentScroll;
});

// Mobile menu toggle
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const navLinks = document.getElementById('navLinks');

mobileMenuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  mobileMenuToggle.textContent = navLinks.classList.contains('active') ? '✕' : '☰';
});

// Close mobile menu when clicking a link
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
    mobileMenuToggle.textContent = '☰';
  });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      const offsetTop = target.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  });
});



// Intersection Observer for fade-in animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe all product cards and feature items
document.querySelectorAll('.product-card, .feature-item, .contact-item').forEach(el => {
  observer.observe(el);
});

// About image placeholder
const aboutImg = document.getElementById('aboutImg');
if (aboutImg) {
  aboutImg.style.background = 'linear-gradient(135deg, #0F172A 0%, #1E293B 50%, #334155 100%)';
  aboutImg.style.display = 'flex';
  aboutImg.style.alignItems = 'center';
  aboutImg.style.justifyContent = 'center';
  aboutImg.style.fontSize = '4rem';
  aboutImg.style.minHeight = '500px';
  aboutImg.textContent = '🏪';
  aboutImg.removeAttribute('src');
  aboutImg.removeAttribute('alt');
}

// Parallax effect on hero section
window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  const hero = document.querySelector('.hero');
  if (hero) {
    hero.style.transform = `translateY(${scrolled * 0.5}px)`;
  }
});

// Add sparkle effect to hero on mouse move
const hero = document.querySelector('.hero');
let sparkleTimeout;

hero.addEventListener('mousemove', (e) => {
  clearTimeout(sparkleTimeout);

  const sparkle = document.createElement('div');
  sparkle.className = 'sparkle';
  sparkle.style.cssText = `
    position: absolute;
    left: ${e.clientX}px;
    top: ${e.clientY}px;
    width: 10px;
    height: 10px;
    background: radial-gradient(circle, rgba(247, 208, 44, 1) 0%, rgba(247, 208, 44, 0) 70%);
    border-radius: 50%;
    pointer-events: none;
    animation: sparkleAnimation 1s ease-out forwards;
    z-index: 100;
  `;

  document.body.appendChild(sparkle);

  setTimeout(() => sparkle.remove(), 1000);
});

// Add sparkle animation to CSS dynamically
const style = document.createElement('style');
style.textContent = `
  @keyframes sparkleAnimation {
    0% {
      opacity: 1;
      transform: scale(0) translateY(0);
    }
    100% {
      opacity: 0;
      transform: scale(3) translateY(-30px);
    }
  }
`;
document.head.appendChild(style);

// Console welcome message
console.log('%c⚡ Welcome to POKéMoore Cards! ⚡', 'color: #F7D02C; font-size: 24px; font-weight: bold;');
console.log('%cGotta catch \'em all!', 'color: #4ECDC4; font-size: 16px;');
