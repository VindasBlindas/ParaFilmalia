/* ============================================================
   ParaFilmalia — Main JavaScript
   Author: Matías Vindas Cerdas · 2026
   ============================================================ */

'use strict';

/* ─── Navbar ─────────────────────────────────────────────── */
(function initNav() {
  const navbar = document.getElementById('navbar');
  const hamburger = document.getElementById('nav-hamburger');
  const mobileMenu = document.getElementById('nav-mobile');

  if (!navbar) return;

  // Scroll class
  const onScroll = () => {
    navbar.classList.toggle('scrolled', window.scrollY > 30);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Hamburger toggle
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      const isOpen = hamburger.classList.toggle('open');
      mobileMenu.classList.toggle('open', isOpen);
      hamburger.setAttribute('aria-expanded', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    // Close on link click
    mobileMenu.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('open');
        mobileMenu.classList.remove('open');
        document.body.style.overflow = '';
      });
    });

    // Close on outside click
    document.addEventListener('click', e => {
      if (!navbar.contains(e.target) && !mobileMenu.contains(e.target)) {
        hamburger.classList.remove('open');
        mobileMenu.classList.remove('open');
        document.body.style.overflow = '';
      }
    });
  }

  // Active nav link
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
})();

/* ─── Fade-in on scroll ───────────────────────────────────── */
(function initFadeIn() {
  const targets = document.querySelectorAll('.fade-in');
  if (!targets.length) return;

  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  targets.forEach((el, i) => {
    el.style.transitionDelay = `${(i % 4) * 0.08}s`;
    io.observe(el);
  });
})();

/* ─── Image fallback ──────────────────────────────────────── */
(function initImageFallbacks() {
  document.querySelectorAll('img[data-fallback]').forEach(img => {
    img.addEventListener('error', () => {
      const fallback = img.closest('[data-poster-fallback]');
      if (fallback) {
        img.style.display = 'none';
        const fb = fallback.querySelector('.movie-card-poster-fallback');
        if (fb) fb.style.display = 'flex';
      }
    });
  });
})();

/* ─── Movie Data ──────────────────────────────────────────── */
const MOVIES = [
  {
    id: 1,
    title: 'Ecos del Abismo',
    genre: 'Terror',
    duration: '1h 58m',
    rating: 8.2,
    classification: 'C18',
    year: 2025,
    poster: 'assets/img/movie-1.svg',
    synopsis: 'Una joven arqueóloga descubre que el yacimiento que excava oculta una presencia que ha dormido durante siglos. Lo que comienza como el hallazgo del siglo se convierte en una lucha por la supervivencia bajo tierra.',
    cast: ['Ana Ramos', 'Pedro Solano', 'Lucía Montes'],
    director: 'Emilio Carver',
    badge: null,
  },
  {
    id: 2,
    title: 'Más Allá del Horizonte',
    genre: 'Drama',
    duration: '2h 15m',
    rating: 9.1,
    classification: 'B',
    year: 2025,
    poster: 'assets/img/movie-2.svg',
    synopsis: 'Un navegante solitario atraviesa el Pacífico para reencontrarse con la hija que no vio crecer. Una historia de redención, tiempo perdido y amor que resiste.',
    cast: ['Carlos Estrada', 'Valentina Cruz', 'Omar Pizarro'],
    director: 'Sofía Delgado',
    badge: 'Premio',
  },
  {
    id: 3,
    title: 'Neon Fractura',
    genre: 'Acción',
    duration: '1h 45m',
    rating: 7.8,
    classification: 'C12',
    year: 2026,
    poster: 'assets/img/movie-3.svg',
    synopsis: 'En una metrópolis futurista gobernada por corporaciones, una ex-detective descubre una conspiración que amenaza con borrar la identidad de millones de ciudadanos.',
    cast: ['Diana Vega', 'Marco Ríos', 'Kenji Yamamoto'],
    director: 'Axel Fuentes',
    badge: '¡Nuevo!',
  },
  {
    id: 4,
    title: 'La Última Estación',
    genre: 'Romance',
    duration: '1h 52m',
    rating: 8.5,
    classification: 'A',
    year: 2026,
    poster: 'assets/img/movie-4.svg',
    synopsis: 'Dos viajeros que se encuentran por azar en una pequeña estación de trenes durante una tormenta descubren que sus vidas están entretejidas de maneras que ninguno pudo imaginar.',
    cast: ['Isabella Mora', 'Tomás Herrera'],
    director: 'Carmen Leal',
    badge: null,
  },
  {
    id: 5,
    title: 'Galaxia Prohibida',
    genre: 'Ciencia ficción',
    duration: '2h 22m',
    rating: 8.7,
    classification: 'B',
    year: 2026,
    poster: 'assets/img/movie-1.svg',
    synopsis: 'La humanidad envía su última esperanza: una nave tripulada por cinco científicos hacia una galaxia cuya existencia fue considerada imposible durante décadas.',
    cast: ['Nina Solaris', 'Dr. Arkhip Volkov', 'Mei Lin'],
    director: 'Santiago Orozco',
    badge: '¡Nuevo!',
  },
  {
    id: 6,
    title: 'El Jardín de la Mentira',
    genre: 'Drama',
    duration: '1h 38m',
    rating: 7.9,
    classification: 'B',
    year: 2025,
    poster: 'assets/img/movie-2.svg',
    synopsis: 'Una familia aparentemente perfecta en un suburbio tranquilo empieza a desmoronarse cuando la hija mayor regresa de un largo viaje con preguntas sin respuesta.',
    cast: ['Rosa Mendez', 'Alberto Ruiz', 'Clara Nava'],
    director: 'Irene Palazzo',
    badge: null,
  },
  {
    id: 7,
    title: 'El Corazón del Volcán',
    genre: 'Animación',
    duration: '1h 28m',
    rating: 8.9,
    classification: 'A',
    year: 2026,
    poster: 'assets/img/movie-3.svg',
    synopsis: 'Kai, un niño que vive en la isla de un volcán dormido, deberá encontrar el artefacto sagrado que impide la erupción antes de que todo lo que ama desaparezca para siempre.',
    cast: ['Voz de Elena Torres', 'Voz de Ramón Villanueva'],
    director: 'Estudio Kólibri',
    badge: '¡Estreno!',
  },
  {
    id: 8,
    title: 'Susurros en la Niebla',
    genre: 'Terror',
    duration: '1h 50m',
    rating: 7.5,
    classification: 'C15',
    year: 2025,
    poster: 'assets/img/movie-4.svg',
    synopsis: 'Un fotógrafo que llega a un pueblo costero para documentar sus tradiciones descubre que cada año, en la misma fecha, una bruma inexplicable devora a quienes se aventuran en ella.',
    cast: ['Miguel Flores', 'Esperanza Lagos'],
    director: 'Paula Andrade',
    badge: null,
  },
];

/* ─── Cartelera Page ──────────────────────────────────────── */
(function initCartelera() {
  const grid = document.getElementById('movies-grid');
  if (!grid) return;

  let activeGenre = 'Todos';
  let searchQuery = '';
  let sortBy = 'recientes';

  const searchInput = document.getElementById('movie-search');
  const sortSelect = document.getElementById('sort-select');
  const genreChips = document.querySelectorAll('.genre-chip');

  function renderMovies() {
    let filtered = [...MOVIES];

    // Genre filter
    if (activeGenre !== 'Todos') {
      filtered = filtered.filter(m => m.genre === activeGenre);
    }

    // Search
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      filtered = filtered.filter(m =>
        m.title.toLowerCase().includes(q) ||
        m.genre.toLowerCase().includes(q) ||
        m.director.toLowerCase().includes(q)
      );
    }

    // Sort
    switch (sortBy) {
      case 'az':
        filtered.sort((a, b) => a.title.localeCompare(b.title, 'es'));
        break;
      case 'populares':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      default: // recientes
        filtered.sort((a, b) => b.year - a.year || b.id - a.id);
    }

    grid.innerHTML = '';

    if (!filtered.length) {
      grid.innerHTML = `
        <div class="empty-state">
          <div class="empty-icon">🎬</div>
          <h3>Sin resultados</h3>
          <p>No encontramos películas que coincidan con tu búsqueda. Intenta con otros filtros.</p>
        </div>`;
      return;
    }

    filtered.forEach((movie, i) => {
      const card = document.createElement('article');
      card.className = 'movie-card fade-in';
      card.style.transitionDelay = `${(i % 4) * 0.07}s`;
      card.setAttribute('data-genre', movie.genre);
      card.innerHTML = `
        <div class="movie-card-poster" data-poster-fallback>
          <img src="${movie.poster}" alt="Póster de ${movie.title}" loading="lazy" data-fallback>
          <div class="movie-card-poster-fallback" style="display:none">
            <span>🎬</span>
            <span style="font-size:0.7rem;color:var(--text-dim);text-align:center;padding:0 1rem">${movie.title}</span>
          </div>
          <div class="movie-card-overlay">
            <a href="pelicula.html?id=${movie.id}" class="btn btn-primary btn-sm">Ver detalles</a>
          </div>
          ${movie.badge ? `<span class="movie-badge ${movie.badge === '¡Estreno!' ? 'movie-badge-estreno' : ''}">${movie.badge}</span>` : ''}
        </div>
        <div class="movie-card-body">
          <div class="movie-card-genre">${movie.genre}</div>
          <h3 class="movie-card-title">${movie.title}</h3>
          <div class="movie-card-meta">
            <span>${movie.duration}</span>
            <span class="movie-card-rating">★ ${movie.rating}</span>
          </div>
          <a href="pelicula.html?id=${movie.id}" class="btn btn-ghost btn-sm" style="width:100%;justify-content:center">Ver detalles</a>
        </div>`;
      grid.appendChild(card);
    });

    // Re-init fade-in for new cards
    initFadeInElements(grid.querySelectorAll('.fade-in'));
    initImageFallbacksFor(grid);
  }

  function initFadeInElements(els) {
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); } });
    }, { threshold: 0.05 });
    els.forEach(el => io.observe(el));
  }

  function initImageFallbacksFor(container) {
    container.querySelectorAll('img[data-fallback]').forEach(img => {
      img.addEventListener('error', () => {
        img.style.display = 'none';
        const fb = img.closest('[data-poster-fallback]')?.querySelector('.movie-card-poster-fallback');
        if (fb) fb.style.display = 'flex';
      });
    });
  }

  if (searchInput) {
    let debounce;
    searchInput.addEventListener('input', e => {
      clearTimeout(debounce);
      debounce = setTimeout(() => { searchQuery = e.target.value; renderMovies(); }, 250);
    });
  }

  if (sortSelect) {
    sortSelect.addEventListener('change', e => { sortBy = e.target.value; renderMovies(); });
  }

  genreChips.forEach(chip => {
    chip.addEventListener('click', () => {
      genreChips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      activeGenre = chip.dataset.genre;
      renderMovies();
    });
  });

  renderMovies();
})();

/* ─── Movie Detail Page ───────────────────────────────────── */
(function initMovieDetail() {
  if (!document.getElementById('detail-page')) return;

  const params = new URLSearchParams(window.location.search);
  const movieId = parseInt(params.get('id')) || 1;
  const movie = MOVIES.find(m => m.id === movieId) || MOVIES[0];

  // Populate detail
  const title = document.getElementById('detail-title');
  const genre = document.getElementById('detail-genre');
  const synopsis = document.getElementById('detail-synopsis');
  const duration = document.getElementById('detail-duration');
  const rating = document.getElementById('detail-rating');
  const cast = document.getElementById('detail-cast');
  const classification = document.getElementById('detail-classification');
  const bgEl = document.getElementById('detail-bg');
  const posterEl = document.getElementById('detail-poster-img');

  if (title) title.textContent = movie.title;
  if (genre) genre.textContent = movie.genre;
  if (synopsis) synopsis.textContent = movie.synopsis;
  if (duration) duration.textContent = movie.duration;
  if (rating) rating.textContent = `★ ${movie.rating} / 10`;
  if (classification) classification.textContent = movie.classification;
  if (cast) cast.textContent = movie.cast.join(' · ');
  if (bgEl) bgEl.style.backgroundImage = `url(${movie.poster})`;
  if (posterEl) {
    posterEl.src = movie.poster;
    posterEl.alt = `Póster de ${movie.title}`;
    posterEl.addEventListener('error', () => {
      posterEl.style.display = 'none';
    });
  }

  // Showtimes tab
  const tabs = document.querySelectorAll('.showtime-tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
    });
  });

  // Showtime slots
  const slots = document.querySelectorAll('.showtime-slot:not(.disabled)');
  slots.forEach(slot => {
    slot.addEventListener('click', () => {
      slots.forEach(s => s.classList.remove('selected'));
      slot.classList.add('selected');
    });
  });

  // Trailer modal
  const trailerBtn = document.getElementById('trailer-btn');
  const trailerModal = document.getElementById('trailer-modal');
  const trailerClose = document.getElementById('trailer-close');

  if (trailerBtn && trailerModal) {
    trailerBtn.addEventListener('click', () => {
      trailerModal.classList.add('open');
      document.body.style.overflow = 'hidden';
    });

    const closeTrailer = () => {
      trailerModal.classList.remove('open');
      document.body.style.overflow = '';
    };

    if (trailerClose) trailerClose.addEventListener('click', closeTrailer);
    trailerModal.addEventListener('click', e => { if (e.target === trailerModal) closeTrailer(); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape' && trailerModal.classList.contains('open')) closeTrailer(); });
  }

  // Related movies (exclude current)
  const relatedGrid = document.getElementById('related-grid');
  if (relatedGrid) {
    const related = MOVIES.filter(m => m.id !== movie.id).slice(0, 4);
    related.forEach(m => {
      const card = document.createElement('article');
      card.className = 'movie-card fade-in';
      card.innerHTML = `
        <div class="movie-card-poster" data-poster-fallback>
          <img src="${m.poster}" alt="Póster de ${m.title}" loading="lazy" data-fallback>
          <div class="movie-card-poster-fallback" style="display:none"><span>🎬</span></div>
          <div class="movie-card-overlay">
            <a href="pelicula.html?id=${m.id}" class="btn btn-primary btn-sm">Ver detalles</a>
          </div>
        </div>
        <div class="movie-card-body">
          <div class="movie-card-genre">${m.genre}</div>
          <h3 class="movie-card-title">${m.title}</h3>
          <div class="movie-card-meta"><span>${m.duration}</span><span class="movie-card-rating">★ ${m.rating}</span></div>
        </div>`;
      relatedGrid.appendChild(card);
    });
    // init fallbacks
    relatedGrid.querySelectorAll('img[data-fallback]').forEach(img => {
      img.addEventListener('error', () => {
        img.style.display = 'none';
        const fb = img.closest('[data-poster-fallback]')?.querySelector('.movie-card-poster-fallback');
        if (fb) fb.style.display = 'flex';
      });
    });
  }
})();

/* ─── Seat Map ────────────────────────────────────────────── */
(function initSeatMap() {
  const seatMap = document.getElementById('seat-map');
  if (!seatMap) return;

  const ROWS = ['A','B','C','D','E','F','G','H'];
  const COLS = 12;
  const PRICE_PER_SEAT = 4500;
  const OCCUPIED = [
    'A3','A4','B7','B8','C2','C5','C9','D1','D6','D10',
    'E3','E7','F2','F5','F8','G4','G9','H3','H7','H10'
  ];

  let selected = new Set();

  const totalEl = document.getElementById('seat-total');
  const countEl = document.getElementById('seat-count');
  const reserveBtn = document.getElementById('reserve-btn');

  function updatePrice() {
    const n = selected.size;
    if (countEl) countEl.textContent = n;
    if (totalEl) totalEl.textContent = n === 0 ? '₡0' : `₡${(n * PRICE_PER_SEAT).toLocaleString('es-CR')}`;
    if (reserveBtn) {
      reserveBtn.disabled = n === 0;
      reserveBtn.style.opacity = n === 0 ? '0.4' : '1';
    }
  }

  ROWS.forEach(row => {
    const rowEl = document.createElement('div');
    rowEl.className = 'seat-row';
    const label = document.createElement('span');
    label.className = 'seat-row-label';
    label.textContent = row;
    rowEl.appendChild(label);

    for (let c = 1; c <= COLS; c++) {
      const seatId = `${row}${c}`;
      const seat = document.createElement('button');
      seat.className = 'seat';
      seat.setAttribute('aria-label', `Asiento ${seatId}`);
      seat.dataset.seat = seatId;

      if (OCCUPIED.includes(seatId)) {
        seat.classList.add('occupied');
        seat.setAttribute('aria-disabled', 'true');
        seat.disabled = true;
      } else {
        seat.addEventListener('click', () => {
          if (selected.has(seatId)) {
            selected.delete(seatId);
            seat.classList.remove('selected');
          } else {
            if (selected.size >= 8) {
              showToast('Máximo 8 asientos por reserva');
              return;
            }
            selected.add(seatId);
            seat.classList.add('selected');
          }
          updatePrice();
        });
      }

      rowEl.appendChild(seat);
    }

    seatMap.appendChild(rowEl);
  });

  updatePrice();

  if (reserveBtn) {
    reserveBtn.addEventListener('click', () => {
      if (selected.size === 0) return;
      showToast(`✅ Reserva confirmada para asientos: ${[...selected].join(', ')}`);
      selected.clear();
      document.querySelectorAll('.seat.selected').forEach(s => s.classList.remove('selected'));
      updatePrice();
    });
  }
})();

/* ─── FAQ Accordion ───────────────────────────────────────── */
(function initFAQ() {
  const items = document.querySelectorAll('.faq-item');
  if (!items.length) return;

  items.forEach(item => {
    const question = item.querySelector('.faq-question');
    if (!question) return;
    question.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      items.forEach(i => i.classList.remove('open'));
      if (!isOpen) item.classList.add('open');
    });
  });
})();

/* ─── Contact Form ────────────────────────────────────────── */
(function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  const successMsg = document.getElementById('form-success');

  const validators = {
    nombre: v => v.trim().length >= 2 ? null : 'El nombre debe tener al menos 2 caracteres.',
    correo: v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) ? null : 'Ingresá un correo electrónico válido.',
    asunto: v => v.trim().length >= 3 ? null : 'El asunto debe tener al menos 3 caracteres.',
    mensaje: v => v.trim().length >= 10 ? null : 'El mensaje debe tener al menos 10 caracteres.',
  };

  function showError(field, msg) {
    const input = form.querySelector(`[name="${field}"]`);
    const errorEl = form.querySelector(`[data-error="${field}"]`);
    if (input) input.classList.add('error');
    if (errorEl) { errorEl.textContent = `⚠ ${msg}`; errorEl.style.display = 'flex'; }
  }

  function clearError(field) {
    const input = form.querySelector(`[name="${field}"]`);
    const errorEl = form.querySelector(`[data-error="${field}"]`);
    if (input) input.classList.remove('error');
    if (errorEl) errorEl.style.display = 'none';
  }

  // Inline validation
  form.querySelectorAll('[name]').forEach(input => {
    input.addEventListener('blur', () => {
      const name = input.name;
      if (validators[name]) {
        const err = validators[name](input.value);
        if (err) showError(name, err);
        else clearError(name);
      }
    });

    input.addEventListener('input', () => clearError(input.name));
  });

  form.addEventListener('submit', e => {
    e.preventDefault();
    let valid = true;

    Object.keys(validators).forEach(field => {
      const input = form.querySelector(`[name="${field}"]`);
      if (!input) return;
      const err = validators[field](input.value);
      if (err) { showError(field, err); valid = false; }
      else clearError(field);
    });

    if (!valid) return;

    // Simulate send
    const btn = form.querySelector('[type="submit"]');
    btn.disabled = true;
    btn.textContent = 'Enviando...';

    setTimeout(() => {
      form.reset();
      if (successMsg) successMsg.classList.add('visible');
      btn.disabled = false;
      btn.textContent = 'Enviar mensaje';
      setTimeout(() => successMsg?.classList.remove('visible'), 6000);
    }, 1200);
  });
})();

/* ─── Promo Copy Buttons ──────────────────────────────────── */
(function initPromoCopy() {
  document.querySelectorAll('.promo-copy-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const code = btn.closest('.promo-code-box')?.querySelector('.promo-code-value')?.textContent;
      if (!code) return;

      navigator.clipboard?.writeText(code).catch(() => {});
      btn.textContent = '¡Copiado!';
      btn.classList.add('copied');
      setTimeout(() => { btn.textContent = 'Copiar'; btn.classList.remove('copied'); }, 2000);
    });
  });
})();

/* ─── Toast Notification ──────────────────────────────────── */
function showToast(message, duration = 3500) {
  let toast = document.getElementById('toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast';
    toast.style.cssText = `
      position: fixed; bottom: 2rem; left: 50%; transform: translateX(-50%) translateY(20px);
      background: var(--charcoal); border: 1px solid var(--border); color: var(--text);
      padding: 0.85rem 1.5rem; border-radius: var(--radius-sm); font-size: 0.9rem;
      z-index: 9998; transition: all 0.3s ease; opacity: 0; max-width: 90vw;
      box-shadow: var(--shadow-md); backdrop-filter: blur(12px);
      white-space: nowrap; font-family: var(--font-body);
    `;
    document.body.appendChild(toast);
  }

  toast.textContent = message;
  toast.style.opacity = '1';
  toast.style.transform = 'translateX(-50%) translateY(0)';

  clearTimeout(toast._timeout);
  toast._timeout = setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(-50%) translateY(20px)';
  }, duration);
}

/* ─── Featured Movies on Home ─────────────────────────────── */
(function initHomeFeatured() {
  const grid = document.getElementById('featured-grid');
  if (!grid) return;

  const featured = MOVIES.slice(0, 4);
  featured.forEach((movie, i) => {
    const card = document.createElement('article');
    card.className = 'movie-card fade-in';
    card.style.transitionDelay = `${i * 0.1}s`;
    card.innerHTML = `
      <div class="movie-card-poster" data-poster-fallback>
        <img src="${movie.poster}" alt="Póster de ${movie.title}" loading="lazy" data-fallback>
        <div class="movie-card-poster-fallback" style="display:none">
          <span>🎬</span>
          <span style="font-size:0.7rem;color:var(--text-dim);padding:0 1rem;text-align:center">${movie.title}</span>
        </div>
        <div class="movie-card-overlay">
          <a href="pelicula.html?id=${movie.id}" class="btn btn-primary btn-sm">Ver detalles</a>
        </div>
        ${movie.badge ? `<span class="movie-badge ${movie.badge === '¡Estreno!' ? 'movie-badge-estreno' : ''}">${movie.badge}</span>` : ''}
      </div>
      <div class="movie-card-body">
        <div class="movie-card-genre">${movie.genre}</div>
        <h3 class="movie-card-title">${movie.title}</h3>
        <div class="movie-card-meta">
          <span>${movie.duration}</span>
          <span class="movie-card-rating">★ ${movie.rating}</span>
        </div>
      </div>`;
    grid.appendChild(card);
  });

  // Image fallbacks
  grid.querySelectorAll('img[data-fallback]').forEach(img => {
    img.addEventListener('error', () => {
      img.style.display = 'none';
      const fb = img.closest('[data-poster-fallback]')?.querySelector('.movie-card-poster-fallback');
      if (fb) fb.style.display = 'flex';
    });
  });
})();

/* ─── Upcoming Movies on Home ─────────────────────────────── */
(function initHomeUpcoming() {
  const grid = document.getElementById('upcoming-grid');
  if (!grid) return;

  const upcoming = MOVIES.slice(4, 8);
  upcoming.forEach((movie, i) => {
    const card = document.createElement('article');
    card.className = 'movie-card fade-in';
    card.style.transitionDelay = `${i * 0.1}s`;
    card.innerHTML = `
      <div class="movie-card-poster" data-poster-fallback>
        <img src="${movie.poster}" alt="Póster de ${movie.title}" loading="lazy" data-fallback>
        <div class="movie-card-poster-fallback" style="display:none"><span>🎬</span></div>
        <div class="movie-card-overlay">
          <a href="cartelera.html" class="btn btn-primary btn-sm">Ver cartelera</a>
        </div>
        <span class="movie-badge movie-badge-estreno">Próximamente</span>
      </div>
      <div class="movie-card-body">
        <div class="movie-card-genre">${movie.genre}</div>
        <h3 class="movie-card-title">${movie.title}</h3>
        <div class="movie-card-meta"><span>${movie.duration}</span><span class="movie-card-rating">★ ${movie.rating}</span></div>
      </div>`;
    grid.appendChild(card);
  });

  grid.querySelectorAll('img[data-fallback]').forEach(img => {
    img.addEventListener('error', () => {
      img.style.display = 'none';
      const fb = img.closest('[data-poster-fallback]')?.querySelector('.movie-card-poster-fallback');
      if (fb) fb.style.display = 'flex';
    });
  });
})();

/* ─── Smooth scroll for anchor links ─────────────────────── */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
