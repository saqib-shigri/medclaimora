// Initialize AOS
AOS.init({ duration: 800, once: true, offset: 100 });

// ========== PAGE LOADER ==========
window.addEventListener('load', () => {
  const loader = document.getElementById('loaderWrapper');
  if (loader) {
    setTimeout(() => {
      loader.classList.add('hidden');
    }, 500);
  }
});

// ========== BACK TO TOP BUTTON ==========
const backToTop = document.getElementById('backToTop');
if (backToTop) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      backToTop.classList.add('show');
    } else {
      backToTop.classList.remove('show');
    }
  });
  
  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// ========== LIVE CHAT / CALL BUTTON - Direct Phone Call ==========
const liveChatBtn = document.getElementById('liveChatBtn');
if (liveChatBtn) {
  liveChatBtn.addEventListener('click', () => {
    window.location.href = 'tel:+923239132469';
  });
}

// ========== BLOG POSTS DATA ==========
// For Home Page (Simple - only 3 posts)
const blogPostsSimple = [
  {
    id: 1,
    icon: 'fas fa-chart-line',
    title: 'Top 5 Denial Management Strategies',
    description: 'Learn how to reduce claim denials and improve your revenue cycle efficiency.',
    date: 'Jun 15, 2024',
    readTime: '5 min read'
  },
  {
    id: 2,
    icon: 'fas fa-code',
    title: '2024 Medical Coding Updates',
    description: 'Stay compliant with the latest ICD-10 and CPT code changes.',
    date: 'Jun 10, 2024',
    readTime: '4 min read'
  },
  {
    id: 3,
    icon: 'fas fa-shield-alt',
    title: 'HIPAA Compliance Checklist',
    description: 'Essential steps to ensure your practice meets all security requirements.',
    date: 'Jun 5, 2024',
    readTime: '6 min read'
  }
];

// For Full Blog Page (Complete - 6+ posts)
const blogPostsFull = [
  {
    id: 1,
    icon: 'fas fa-chart-line',
    title: 'Top 5 Denial Management Strategies for 2024',
    description: 'Learn how to reduce claim denials and improve your revenue cycle efficiency with these proven strategies.',
    date: 'June 15, 2024',
    readTime: '5 min read',
    category: 'Denial Management'
  },
  {
    id: 2,
    icon: 'fas fa-code',
    title: '2024 Medical Coding Updates You Need to Know',
    description: 'Stay compliant with the latest ICD-10 and CPT code changes. Essential updates for your practice.',
    date: 'June 10, 2024',
    readTime: '4 min read',
    category: 'Medical Coding'
  },
  {
    id: 3,
    icon: 'fas fa-shield-alt',
    title: 'HIPAA Compliance Checklist for Medical Practices',
    description: 'Essential steps to ensure your practice meets all security requirements and patient data protection.',
    date: 'June 5, 2024',
    readTime: '6 min read',
    category: 'Compliance'
  },
  {
    id: 4,
    icon: 'fas fa-dollar-sign',
    title: 'How to Maximize Your Revenue Cycle Management',
    description: 'Tips and tricks to optimize your medical billing process and increase collections.',
    date: 'May 28, 2024',
    readTime: '7 min read',
    category: 'Revenue Cycle'
  },
  {
    id: 5,
    icon: 'fas fa-clock',
    title: 'Reduce Payment Delays: A Guide for Providers',
    description: 'How to speed up insurance payments and improve your cash flow management.',
    date: 'May 20, 2024',
    readTime: '5 min read',
    category: 'Payment'
  },
  {
    id: 6,
    icon: 'fas fa-file-invoice',
    title: 'Common Medical Billing Mistakes to Avoid',
    description: 'Avoid these common medical billing errors that cost your practice money.',
    date: 'May 15, 2024',
    readTime: '4 min read',
    category: 'Best Practices'
  }
];

// Load SIMPLE blog posts for HOME PAGE
function loadSimpleBlogPosts() {
  const blogGrid = document.getElementById('blogGridSimple');
  if (!blogGrid) return;
  
  blogGrid.innerHTML = '';
  
  blogPostsSimple.forEach(post => {
    const blogCard = document.createElement('div');
    blogCard.className = 'blog-card-simple';
    blogCard.setAttribute('data-aos', 'fade-up');
    blogCard.innerHTML = `
      <div class="blog-icon"><i class="${post.icon}"></i></div>
      <div class="blog-meta">
        <span><i class="far fa-calendar-alt"></i> ${post.date}</span>
        <span><i class="far fa-clock"></i> ${post.readTime}</span>
      </div>
      <h3>${post.title}</h3>
      <p>${post.description}</p>
      <a href="blog-single.html?id=${post.id}" class="read-more-sm">Read More <i class="fas fa-arrow-right"></i></a>
    `;
    blogGrid.appendChild(blogCard);
  });
}

// Load FULL blog posts for BLOG PAGE
function loadFullBlogPosts() {
  const blogGrid = document.getElementById('blogGrid');
  if (!blogGrid) return;
  
  blogGrid.innerHTML = '';
  
  blogPostsFull.forEach(post => {
    const blogCard = document.createElement('div');
    blogCard.className = 'blog-card';
    blogCard.setAttribute('data-aos', 'fade-up');
    blogCard.innerHTML = `
      <div class="blog-icon"><i class="${post.icon}"></i></div>
      <div class="blog-meta">
        <span><i class="far fa-calendar-alt"></i> ${post.date}</span>
        <span><i class="far fa-clock"></i> ${post.readTime}</span>
        <span><i class="fas fa-tag"></i> ${post.category}</span>
      </div>
      <h3>${post.title}</h3>
      <p>${post.description}</p>
      <a href="blog-single.html?id=${post.id}" class="read-more">Read More <i class="fas fa-arrow-right"></i></a>
    `;
    blogGrid.appendChild(blogCard);
  });
}

// ========== COOKIE CONSENT BANNER ==========
const cookieBanner = document.getElementById('cookieBanner');
const acceptCookies = document.getElementById('acceptCookies');

if (cookieBanner && acceptCookies) {
  if (!localStorage.getItem('cookiesAccepted')) {
    setTimeout(() => {
      cookieBanner.classList.add('show');
    }, 1000);
  }
  
  acceptCookies.addEventListener('click', () => {
    localStorage.setItem('cookiesAccepted', 'true');
    cookieBanner.classList.remove('show');
  });
}

// ========== REVENUE CALCULATOR ==========
// function updateCalculator() {
//   const monthlyRevenue = parseFloat(document.getElementById('monthlyRevenue')?.value) || 0;
//   const denialRate = parseFloat(document.getElementById('denialRate')?.value) || 0;
  
//   const annualRevenue = monthlyRevenue * 12;
//   const currentLoss = annualRevenue * (denialRate / 100);
//   const potentialSavings = currentLoss * 0.75;
//   const newRevenue = annualRevenue - currentLoss + potentialSavings;
  
//   const currentLossElem = document.getElementById('currentLoss');
//   const potentialSavingsElem = document.getElementById('potentialSavings');
//   const newRevenueElem = document.getElementById('newRevenue');
  
//   if (currentLossElem) currentLossElem.textContent = '$' + currentLoss.toLocaleString();
//   if (potentialSavingsElem) potentialSavingsElem.textContent = '$' + potentialSavings.toLocaleString();
//   if (newRevenueElem) newRevenueElem.textContent = '$' + newRevenue.toLocaleString();
// }

// const monthlyRevenueInput = document.getElementById('monthlyRevenue');
// const denialRateInput = document.getElementById('denialRate');

// if (monthlyRevenueInput) {
//   monthlyRevenueInput.addEventListener('input', updateCalculator);
// }
// if (denialRateInput) {
//   denialRateInput.addEventListener('input', updateCalculator);
// }
// updateCalculator();

// ========== FAQ ACCORDION ==========
const faqItems = document.querySelectorAll('.faq-item');
faqItems.forEach(item => {
  const question = item.querySelector('.faq-question');
  if (question) {
    question.addEventListener('click', () => {
      item.classList.toggle('active');
    });
  }
});

// ========== NEWSLETTER FORM ==========
const newsletterForm = document.getElementById('newsletterForm');
if (newsletterForm) {
  newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = newsletterForm.querySelector('input[type="email"]').value;
    if (email && email.includes('@')) {
      alert('Thank you for subscribing! You will receive our latest updates.');
      newsletterForm.reset();
    } else {
      alert('Please enter a valid email address.');
    }
  });
}

// ========== SHEETBEST API ==========
const SHEETBEST_URL = 'https://api.sheetbest.com/sheets/30fb6f08-66d9-4344-aae9-13de6fe184ab';

async function loadTestimonialsFromAPI() {
  const marqueeTrack = document.getElementById('marqueeTrack');
  if (!marqueeTrack) return;
  
  marqueeTrack.innerHTML = '<div class="testimonial-card">Loading reviews...</div>';
  
  try {
    const response = await fetch(SHEETBEST_URL);
    const data = await response.json();
    const approvedReviews = data.filter(item => item.status && item.status.toLowerCase() === 'yes');
    
    if (approvedReviews.length === 0) {
      marqueeTrack.innerHTML = '<div class="testimonial-card">No approved reviews yet. Be the first to review!</div>';
      return;
    }
    
    marqueeTrack.innerHTML = '';
    
    approvedReviews.forEach(review => {
      const name = review['name '] || review.name || 'Anonymous';
      const practice = review.practice || 'Healthcare Provider';
      const text = review.review || '';
      const rating = parseInt(review.rating) || 5;
      const imgUrl = review.image || 'https://randomuser.me/api/portraits/lego/1.jpg';
      
      const card = document.createElement('div');
      card.className = 'testimonial-card';
      card.innerHTML = `
        <div class="testimonial-author">
          <img src="${imgUrl}" alt="${name}">
          <div><strong>${escapeHtml(name)}</strong><span>${escapeHtml(practice)}</span></div>
        </div>
        <div class="rating">${'★'.repeat(rating)}${'☆'.repeat(5 - rating)}</div>
        <div class="testimonial-text">${escapeHtml(text)}</div>
      `;
      marqueeTrack.appendChild(card);
    });
    
    const cards = Array.from(marqueeTrack.children);
    const cloneCount = Math.max(2, Math.ceil(6 / cards.length));
    for (let i = 0; i < cloneCount; i++) {
      cards.forEach(card => {
        const clone = card.cloneNode(true);
        marqueeTrack.appendChild(clone);
      });
    }
    
    const totalCards = marqueeTrack.children.length;
    marqueeTrack.style.animation = `marqueeScroll ${totalCards * 4}s linear infinite`;
    
  } catch (error) {
    console.error('Error:', error);
    marqueeTrack.innerHTML = '<div class="testimonial-card">Failed to load reviews. Please refresh.</div>';
  }
}

function escapeHtml(str) {
  if (!str) return '';
  return str.replace(/[&<>]/g, function(m) {
    if (m === '&') return '&amp;';
    if (m === '<') return '&lt;';
    if (m === '>') return '&gt;';
    return m;
  });
}

// ========== NAVBAR HIDE/SHOW ON SCROLL ==========
let lastScrollTop = 0;
const navbar = document.getElementById('navbar');
const scrollThreshold = 50;

function handleNavbarOnScroll() {
  if (!navbar) return;
  
  const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
  if (currentScrollTop > scrollThreshold) {
    if (currentScrollTop > lastScrollTop && currentScrollTop > scrollThreshold) {
      navbar.classList.add('navbar-hidden');
    } 
    else if (currentScrollTop < lastScrollTop) {
      navbar.classList.remove('navbar-hidden');
      if (currentScrollTop > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }
  } else {
    navbar.classList.remove('navbar-hidden');
    navbar.classList.remove('scrolled');
  }
  
  lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
}

function handleScrolledClass() {
  if (!navbar) return;
  if (window.scrollY > 50) {
    if (!navbar.classList.contains('navbar-hidden')) {
      navbar.classList.add('scrolled');
    }
  } else {
    navbar.classList.remove('scrolled');
  }
}

window.addEventListener('scroll', () => {
  handleNavbarOnScroll();
  handleScrolledClass();
});

// ========== MOBILE DRAWER ==========
const menuBtn = document.getElementById('menuBtn');
const drawerOverlay = document.getElementById('drawerOverlay');
const mobileDrawer = document.getElementById('mobileDrawer');
const mobileDrawerClose = document.getElementById('mobileDrawerClose');

function openMobileDrawer() {
  mobileDrawer.classList.add('open');
  drawerOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
  if (menuBtn) menuBtn.classList.add('open');
}

function closeMobileDrawer() {
  mobileDrawer.classList.remove('open');
  drawerOverlay.classList.remove('open');
  document.body.style.overflow = '';
  if (menuBtn) menuBtn.classList.remove('open');
}

if (menuBtn) {
  menuBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    if (mobileDrawer.classList.contains('open')) {
      closeMobileDrawer();
    } else {
      openMobileDrawer();
    }
  });
}

if (mobileDrawerClose) {
  mobileDrawerClose.addEventListener('click', closeMobileDrawer);
}

if (drawerOverlay) {
  drawerOverlay.addEventListener('click', closeMobileDrawer);
}

// Close drawer on Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && mobileDrawer.classList.contains('open')) {
    closeMobileDrawer();
  }
});

// Close drawer when clicking on any link inside
if (mobileDrawer) {
  mobileDrawer.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      setTimeout(closeMobileDrawer, 300);
    });
  });
}

// ========== DROPDOWNS ==========
document.querySelectorAll('.dropdown-toggle').forEach(toggle => {
  toggle.addEventListener('click', (e) => {
    e.preventDefault();
    const parent = toggle.closest('.dropdown');
    document.querySelectorAll('.dropdown').forEach(drop => {
      if (drop !== parent) drop.classList.remove('open');
    });
    parent.classList.toggle('open');
  });
});

document.addEventListener('click', (e) => {
  if (!e.target.closest('.dropdown')) {
    document.querySelectorAll('.dropdown').forEach(drop => drop.classList.remove('open'));
  }
});

// ========== WHATSAPP BUTTONS ==========
const waButtons = ['floatWhatsAppBtn', 'mobileWaBtn', 'contactMsgBtn'];
waButtons.forEach(id => {
  const btn = document.getElementById(id);
  if (btn) {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      window.open('https://wa.me/923239132469?text=Hello%20MedClaimora', '_blank');
    });
  }
});

// ========== QUOTE BUTTONS ==========
const quoteBtns = ['desktopQuoteBtn', 'heroQuoteBtn', 'ctaBtn'];
quoteBtns.forEach(id => {
  const btn = document.getElementById(id);
  if (btn) {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    });
  }
});

// ========== REVIEW MODAL ==========
const submitReviewBtn = document.getElementById('submitReviewBtn');
const reviewModal = document.getElementById('reviewModal');
const closeModal = document.querySelector('.close-modal');

if (submitReviewBtn && reviewModal) {
  submitReviewBtn.addEventListener('click', () => {
    reviewModal.style.display = 'flex';
  });
  
  if (closeModal) {
    closeModal.addEventListener('click', () => {
      reviewModal.style.display = 'none';
    });
  }
  
  window.addEventListener('click', (e) => {
    if (e.target === reviewModal) {
      reviewModal.style.display = 'none';
    }
  });
}

// ========== RATING STARS ==========
const ratingStars = document.querySelectorAll('.rating-input i');
const ratingInput = document.getElementById('reviewRating');

if (ratingStars.length && ratingInput) {
  ratingStars.forEach(star => {
    star.addEventListener('click', function() {
      const rating = parseInt(this.getAttribute('data-rating'));
      ratingInput.value = rating;
      ratingStars.forEach((s, idx) => {
        if (idx < rating) {
          s.classList.remove('far');
          s.classList.add('fas');
        } else {
          s.classList.remove('fas');
          s.classList.add('far');
        }
      });
    });
  });
}

// ========== REVIEW FORM SUBMIT ==========
const reviewForm = document.getElementById('reviewForm');
if (reviewForm) {
  reviewForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const name = document.getElementById('reviewName')?.value || '';
    const practice = document.getElementById('reviewPractice')?.value || '';
    const text = document.getElementById('reviewText')?.value || '';
    const rating = document.getElementById('reviewRating')?.value || '5';
    const image = document.getElementById('reviewImage')?.value || '';
    
    if (!name || !text) {
      alert('Please fill in your name and testimonial.');
      return;
    }
    
    const newReview = {
      "name ": name,
      "practice": practice,
      "review": text,
      "rating": rating,
      "status": "pending",
      "image": image
    };
    
    try {
      const response = await fetch(SHEETBEST_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newReview)
      });
      
      if (response.ok) {
        alert('Thank you! Your review has been submitted and will appear after approval.');
        reviewModal.style.display = 'none';
        reviewForm.reset();
        if (ratingInput) ratingInput.value = '5';
        ratingStars.forEach((s, idx) => {
          if (idx < 5) {
            s.classList.remove('fas');
            s.classList.add('far');
          }
        });
      } else {
        alert('Submission failed. Please try again later.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Network error. Please check your connection.');
    }
  });
}

// ========== LOAD ALL CONTENT ==========
document.addEventListener('DOMContentLoaded', () => {
  // Load testimonials
  loadTestimonialsFromAPI();
  
  // Load simple blog posts for home page (3 posts)
  loadSimpleBlogPosts();
  
  // Load full blog posts for blog page (6+ posts) - only if on blog page
  if (document.getElementById('blogGrid')) {
    loadFullBlogPosts();
  }
});