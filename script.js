/**
 * QuoteFlow — Daily Inspiration
 * Pure Vanilla JavaScript Application Logic
 */

// 1. Curated Quotes Collection (36 Quotes across 4 Thematic Pillars)
const QUOTES = [
  // Motivation (9)
  {
    id: "m1",
    text: "You cannot change your future, but you can change your habits, and surely your habits will change your future.",
    author: "Dr. A.P.J. Abdul Kalam",
    title: "Aerospace Scientist & 11th President of India",
    initials: "AK",
    category: "Motivation",
    gradient: "linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",
    likes: 382
  },
  {
    id: "m2",
    text: "Your time is limited, so don't waste it living someone else's life.",
    author: "Steve Jobs",
    title: "Co-founder of Apple Inc. & Visionary",
    initials: "SJ",
    category: "Motivation",
    gradient: "linear-gradient(135deg, #0f172a 0%, #475569 100%)",
    likes: 512
  },
  {
    id: "m3",
    text: "Discipline is choosing between what you want now and what you want most.",
    author: "Abraham Lincoln",
    title: "16th President of the United States",
    initials: "AL",
    category: "Motivation",
    gradient: "linear-gradient(135deg, #1e3a8a 0%, #6366f1 100%)",
    likes: 295
  },
  {
    id: "m4",
    text: "Action is the foundational key to all sustained progress and creative breakthroughs.",
    author: "Pablo Picasso",
    title: "Modern Artist & Co-founder of Cubism",
    initials: "PP",
    category: "Motivation",
    gradient: "linear-gradient(135deg, #ea580c 0%, #f97316 100%)",
    likes: 198
  },
  {
    id: "m5",
    text: "Do not wait to strike till the iron is hot; but make it hot by striking.",
    author: "William Butler Yeats",
    title: "Nobel Laureate in Literature",
    initials: "WY",
    category: "Motivation",
    gradient: "linear-gradient(135deg, #0d9488 0%, #14b8a6 100%)",
    likes: 215
  },
  {
    id: "m6",
    text: "Small daily improvements over time lead to stunning, compound results.",
    author: "Robin Sharma",
    title: "Author & Leadership Specialist",
    initials: "RS",
    category: "Motivation",
    gradient: "linear-gradient(135deg, #2563eb 0%, #60a5fa 100%)",
    likes: 340
  },
  {
    id: "m7",
    text: "What you do today can improve all your tomorrows if you begin with intention.",
    author: "Ralph Marston",
    title: "Author & Publisher of The Daily Motivator",
    initials: "RM",
    category: "Motivation",
    gradient: "linear-gradient(135deg, #7c3aed 0%, #a855f7 100%)",
    likes: 176
  },
  {
    id: "m8",
    text: "Energy and persistence conquer all things when paired with clear direction.",
    author: "Benjamin Franklin",
    title: "Founding Father, Scientist & Polymath",
    initials: "BF",
    category: "Motivation",
    gradient: "linear-gradient(135deg, #c2410c 0%, #f97316 100%)",
    likes: 264
  },
  {
    id: "m9",
    text: "It always seems impossible until it is done.",
    author: "Nelson Mandela",
    title: "Anti-Apartheid Leader & Nobel Peace Prize Laureate",
    initials: "NM",
    category: "Motivation",
    gradient: "linear-gradient(135deg, #047857 0%, #10b981 100%)",
    likes: 620
  },

  // Success (9)
  {
    id: "s1",
    text: "Strive not to be a success, but rather to be of genuine value to those around you.",
    author: "Albert Einstein",
    title: "Theoretical Physicist & Nobel Laureate",
    initials: "AE",
    category: "Success",
    gradient: "linear-gradient(135deg, #1e3a8a 0%, #38bdf8 100%)",
    likes: 670
  },
  {
    id: "s2",
    text: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    author: "Winston Churchill",
    title: "British Statesman & Nobel Literature Laureate",
    initials: "WC",
    category: "Success",
    gradient: "linear-gradient(135deg, #334155 0%, #64748b 100%)",
    likes: 489
  },
  {
    id: "s3",
    text: "The secret of getting ahead is getting started with what you have right now.",
    author: "Mark Twain",
    title: "Celebrated American Writer & Humorist",
    initials: "MT",
    category: "Success",
    gradient: "linear-gradient(135deg, #d97706 0%, #fbbf24 100%)",
    likes: 312
  },
  {
    id: "s4",
    text: "Quality is not an act, it is a deliberate habit practiced when no one is watching.",
    author: "Aristotle",
    title: "Classical Greek Philosopher & Polymath",
    initials: "AR",
    category: "Success",
    gradient: "linear-gradient(135deg, #4338ca 0%, #6366f1 100%)",
    likes: 421
  },
  {
    id: "s5",
    text: "Success usually comes to those who are too focused on their craft to be looking for it.",
    author: "Henry David Thoreau",
    title: "Philosopher, Essayist & Naturalist",
    initials: "HT",
    category: "Success",
    gradient: "linear-gradient(135deg, #065f46 0%, #059669 100%)",
    likes: 278
  },
  {
    id: "s6",
    text: "Opportunities don't happen by chance; you create them through preparation and grit.",
    author: "Chris Grosser",
    title: "Entrepreneur & Creative Consultant",
    initials: "CG",
    category: "Success",
    gradient: "linear-gradient(135deg, #b91c1c 0%, #ef4444 100%)",
    likes: 234
  },
  {
    id: "s7",
    text: "I find that the harder I work, the more luck I seem to have.",
    author: "Thomas Jefferson",
    title: "3rd U.S. President & Author of Dec. of Independence",
    initials: "TJ",
    category: "Success",
    gradient: "linear-gradient(135deg, #1e3a8a 0%, #60a5fa 100%)",
    likes: 355
  },
  {
    id: "s8",
    text: "Don't be afraid to give up the good to go for the great.",
    author: "John D. Rockefeller",
    title: "Industrialist & Philanthropist",
    initials: "JR",
    category: "Success",
    gradient: "linear-gradient(135deg, #0f172a 0%, #334155 100%)",
    likes: 289
  },
  {
    id: "s9",
    text: "If you really look closely, most overnight successes took a long time.",
    author: "Steve Jobs",
    title: "Co-founder of Apple Inc.",
    initials: "SJ",
    category: "Success",
    gradient: "linear-gradient(135deg, #0284c7 0%, #38bdf8 100%)",
    likes: 462
  },

  // Life (9)
  {
    id: "l1",
    text: "You have power over your mind - not outside events. Realize this, and you will find strength.",
    author: "Marcus Aurelius",
    title: "Roman Emperor & Stoic Philosopher",
    initials: "MA",
    category: "Life",
    gradient: "linear-gradient(135deg, #3730a3 0%, #818cf8 100%)",
    likes: 710
  },
  {
    id: "l2",
    text: "In the middle of every difficulty lies an invitation to grow stronger and wiser.",
    author: "Albert Einstein",
    title: "Theoretical Physicist & Thinker",
    initials: "AE",
    category: "Life",
    gradient: "linear-gradient(135deg, #1e3a8a 0%, #0284c7 100%)",
    likes: 540
  },
  {
    id: "l3",
    text: "Life is really simple, but we insist on making it complicated through distraction.",
    author: "Confucius",
    title: "Ancient Chinese Philosopher & Teacher",
    initials: "CF",
    category: "Life",
    gradient: "linear-gradient(135deg, #b45309 0%, #f59e0b 100%)",
    likes: 390
  },
  {
    id: "l4",
    text: "He who has a strong enough why to live can bear almost any how.",
    author: "Friedrich Nietzsche",
    title: "Philosopher & Cultural Critic",
    initials: "FN",
    category: "Life",
    gradient: "linear-gradient(135deg, #111827 0%, #4b5563 100%)",
    likes: 472
  },
  {
    id: "l5",
    text: "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.",
    author: "Gautama Buddha",
    title: "Spiritual Teacher & Founder of Buddhism",
    initials: "GB",
    category: "Life",
    gradient: "linear-gradient(135deg, #d97706 0%, #f59e0b 100%)",
    likes: 580
  },
  {
    id: "l6",
    text: "The purpose of life is to live it, to taste experience to the utmost, and to reach out eagerly without fear.",
    author: "Eleanor Roosevelt",
    title: "Diplomat, First Lady & Human Rights Advocate",
    initials: "ER",
    category: "Life",
    gradient: "linear-gradient(135deg, #059669 0%, #34d399 100%)",
    likes: 310
  },
  {
    id: "l7",
    text: "How we spend our days is, of course, how we spend our lives.",
    author: "Annie Dillard",
    title: "Pulitzer Prize-Winning Author",
    initials: "AD",
    category: "Life",
    gradient: "linear-gradient(135deg, #6d28d9 0%, #a78bfa 100%)",
    likes: 245
  },
  {
    id: "l8",
    text: "You may encounter many defeats, but you must not be defeated.",
    author: "Maya Angelou",
    title: "Celebrated Poet & Civil Rights Activist",
    initials: "MA",
    category: "Life",
    gradient: "linear-gradient(135deg, #be123c 0%, #fb7185 100%)",
    likes: 520
  },
  {
    id: "l9",
    text: "Dwell on the beauty of life. Watch the stars, and see yourself running with them.",
    author: "Marcus Aurelius",
    title: "Roman Emperor & Stoic Philosopher",
    initials: "MA",
    category: "Life",
    gradient: "linear-gradient(135deg, #1e3a8a 0%, #4f46e5 100%)",
    likes: 415
  },

  // Wisdom (9)
  {
    id: "w1",
    text: "Simplicity is the ultimate sophistication in thought, design, and action.",
    author: "Leonardo da Vinci",
    title: "High Renaissance Polymath & Master",
    initials: "LV",
    category: "Wisdom",
    gradient: "linear-gradient(135deg, #047857 0%, #10b981 100%)",
    likes: 630
  },
  {
    id: "w2",
    text: "Knowing yourself is the beginning of all true wisdom and calm judgment.",
    author: "Aristotle",
    title: "Classical Greek Philosopher & Polymath",
    initials: "AR",
    category: "Wisdom",
    gradient: "linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",
    likes: 490
  },
  {
    id: "w3",
    text: "We suffer more often in imagination than we ever do in reality.",
    author: "Seneca",
    title: "Stoic Philosopher & Statesman",
    initials: "SN",
    category: "Wisdom",
    gradient: "linear-gradient(135deg, #4338ca 0%, #6366f1 100%)",
    likes: 610
  },
  {
    id: "w4",
    text: "Turn your wounds into wisdom and your obstacles into stepping stones.",
    author: "Oprah Winfrey",
    title: "Global Media Leader & Philanthropist",
    initials: "OW",
    category: "Wisdom",
    gradient: "linear-gradient(135deg, #c026d3 0%, #f472b6 100%)",
    likes: 380
  },
  {
    id: "w5",
    text: "Yesterday I was clever, so I wanted to change the world. Today I am wise, so I am changing myself.",
    author: "Rumi",
    title: "13th-Century Persian Poet & Mystic",
    initials: "RM",
    category: "Wisdom",
    gradient: "linear-gradient(135deg, #d97706 0%, #f59e0b 100%)",
    likes: 565
  },
  {
    id: "w6",
    text: "It is the mark of an educated mind to be able to entertain a thought without accepting it.",
    author: "Aristotle",
    title: "Classical Greek Philosopher",
    initials: "AR",
    category: "Wisdom",
    gradient: "linear-gradient(135deg, #1e293b 0%, #64748b 100%)",
    likes: 430
  },
  {
    id: "w7",
    text: "The only true wisdom is in knowing you know nothing.",
    author: "Socrates",
    title: "Classical Athenian Philosopher",
    initials: "SC",
    category: "Wisdom",
    gradient: "linear-gradient(135deg, #0369a1 0%, #38bdf8 100%)",
    likes: 502
  },
  {
    id: "w8",
    text: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
    author: "Ralph Waldo Emerson",
    title: "Essayist, Lecturer & Poet",
    initials: "RE",
    category: "Wisdom",
    gradient: "linear-gradient(135deg, #15803d 0%, #22c55e 100%)",
    likes: 395
  },
  {
    id: "w9",
    text: "Silence is a source of great strength when words are not needed.",
    author: "Lao Tzu",
    title: "Ancient Chinese Philosopher & Taoist Master",
    initials: "LT",
    category: "Wisdom",
    gradient: "linear-gradient(135deg, #334155 0%, #94a3b8 100%)",
    likes: 340
  }
];

// 6 Featured Masterpiece Quotes for the Best Quotes Section
const BEST_QUOTES = [
  QUOTES[0], // Kalam
  QUOTES[1], // Steve Jobs
  QUOTES[18], // Marcus Aurelius
  QUOTES[25], // Maya Angelou
  QUOTES[9], // Einstein Value
  QUOTES[27] // Leonardo da Vinci
];

// Inspirational status micro-notes
const INSPIRATION_NOTES = [
  "Curated for focus & clarity",
  "Perspective worth holding today",
  "Timeless wisdom for creators",
  "A guiding principle for your craft",
  "Refreshed for your morning"
];

// Storage Keys
const FAVORITES_KEY = "quoteflow_saved_favs_v2";
const LIKES_KEY = "quoteflow_user_likes_v2";

// Application State
let activeCategory = "All";
let currentQuote = QUOTES[0];
let savedFavorites = [];
let userLikedMap = {};
let statusToastTimeout = null;

/**
 * 2. Safe LocalStorage Storage Helpers
 */
function loadFromStorage(key, fallback = []) {
  try {
    const raw = window.localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch (err) {
    return fallback;
  }
}

function saveToStorage(key, value) {
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch (err) {
    console.warn("Storage write failed:", err);
  }
}

/**
 * 3. Quote Filtering & Non-Repeating Randomizer
 */
function getCategoryQuotes(category) {
  if (!category || category === "All") return QUOTES;
  return QUOTES.filter((q) => q.category === category);
}

function getRandomQuote(category) {
  const pool = getCategoryQuotes(category);
  if (pool.length <= 1) return pool[0] || QUOTES[0];

  let pick = null;
  let attempts = 0;
  do {
    const idx = Math.floor(Math.random() * pool.length);
    pick = pool[idx];
    attempts += 1;
  } while (currentQuote && pick.text === currentQuote.text && attempts < 25);

  return pick;
}

/**
 * 4. DOM Update for Main Quote Stage
 */
function renderQuoteToStage(quote, animate = true) {
  if (!quote) return;
  currentQuote = quote;

  const quoteBox = document.getElementById("quote-content-box");
  const quoteText = document.getElementById("quote-text");
  const quoteAuthor = document.getElementById("quote-author");
  const authorTitle = document.getElementById("author-title");
  const authorAvatar = document.getElementById("author-avatar");
  const avatarInitials = document.getElementById("author-avatar-initials");
  const quoteCategory = document.getElementById("quote-category");
  const quoteCounter = document.getElementById("quote-counter");
  const quoteStatusNote = document.getElementById("quote-status-note");

  const pool = getCategoryQuotes(activeCategory);
  const curIdx = pool.findIndex((item) => item.text === quote.text) + 1;
  const displayIdx = curIdx > 0 ? curIdx : 1;

  const applyData = () => {
    if (quoteText) quoteText.textContent = quote.text;
    if (quoteAuthor) quoteAuthor.textContent = quote.author;
    if (authorTitle) authorTitle.textContent = quote.title || "Thought Leader";
    if (avatarInitials) avatarInitials.textContent = quote.initials || "QF";
    if (authorAvatar) authorAvatar.style.background = quote.gradient || "linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)";
    if (quoteCategory) quoteCategory.textContent = quote.category;
    if (quoteCounter) {
      quoteCounter.textContent = `Quote ${String(displayIdx).padStart(2, "0")} of ${String(pool.length).padStart(2, "0")}`;
    }
    if (quoteStatusNote) {
      const randomNote = INSPIRATION_NOTES[Math.floor(Math.random() * INSPIRATION_NOTES.length)];
      quoteStatusNote.textContent = randomNote;
    }
    updateInteractiveButtonStates();
  };

  if (!animate || !quoteBox) {
    applyData();
    return;
  }

  quoteBox.classList.add("is-transitioning");
  window.setTimeout(() => {
    applyData();
    quoteBox.classList.remove("is-transitioning");
  }, 120);
}

/**
 * 5. Update Interactive Buttons (Like, Bookmark, etc.)
 */
function updateInteractiveButtonStates() {
  if (!currentQuote) return;

  // Like Button State
  const likeBtn = document.getElementById("like-quote-btn");
  const likeCountSpan = document.getElementById("quote-likes-count");
  const isLiked = Boolean(userLikedMap[currentQuote.id || currentQuote.text]);
  const currentLikes = (currentQuote.likes || 150) + (isLiked ? 1 : 0);

  if (likeBtn) {
    likeBtn.classList.toggle("is-liked", isLiked);
    likeBtn.setAttribute("aria-pressed", String(isLiked));
    const labelSpan = document.getElementById("like-btn-label");
    if (labelSpan) labelSpan.textContent = isLiked ? "Liked" : "Like";
  }
  if (likeCountSpan) {
    likeCountSpan.textContent = String(currentLikes);
  }

  // Favorite / Bookmark Button State
  const favBtn = document.getElementById("favorite-quote-btn");
  const favLabel = document.getElementById("favorite-btn-label");
  const isSaved = savedFavorites.some((fav) => fav.text === currentQuote.text);

  if (favBtn) {
    favBtn.classList.toggle("is-saved", isSaved);
    favBtn.setAttribute("aria-pressed", String(isSaved));
  }
  if (favLabel) {
    favLabel.textContent = isSaved ? "Saved" : "Save";
  }
}

/**
 * 6. User Actions: Like, Copy, Share, Bookmark
 */
function handleToggleLike(quote = currentQuote) {
  if (!quote) return;
  const key = quote.id || quote.text;
  const wasLiked = Boolean(userLikedMap[key]);

  if (wasLiked) {
    delete userLikedMap[key];
    showToastNotification("Removed like from this quote.", "blue");
  } else {
    userLikedMap[key] = true;
    showToastNotification("Thank you for liking this quote! ♥", "orange");
  }

  saveToStorage(LIKES_KEY, userLikedMap);
  updateInteractiveButtonStates();
  renderBestQuotesGrid();
}

function handleToggleBookmark(quote = currentQuote) {
  if (!quote) return;
  const idx = savedFavorites.findIndex((fav) => fav.text === quote.text);

  if (idx !== -1) {
    savedFavorites.splice(idx, 1);
    saveToStorage(FAVORITES_KEY, savedFavorites);
    showToastNotification("Quote removed from Saved Favorites.", "blue");
  } else {
    savedFavorites.unshift({
      text: quote.text,
      author: quote.author,
      title: quote.title,
      category: quote.category,
      initials: quote.initials,
      gradient: quote.gradient
    });
    saveToStorage(FAVORITES_KEY, savedFavorites);
    showToastNotification("Saved to your personal collection!", "orange");
  }

  updateInteractiveButtonStates();
  renderFavoritesList();
}

async function handleCopyText(text, successMessage = "Quote copied to clipboard.") {
  let copied = false;
  if (navigator.clipboard && typeof navigator.clipboard.writeText === "function") {
    try {
      await navigator.clipboard.writeText(text);
      copied = true;
    } catch (e) {
      copied = false;
    }
  }

  if (!copied) {
    try {
      const textarea = document.createElement("textarea");
      textarea.value = text;
      textarea.style.position = "fixed";
      textarea.style.top = "-9999px";
      document.body.appendChild(textarea);
      textarea.select();
      copied = document.execCommand("copy");
      document.body.removeChild(textarea);
    } catch (err) {
      copied = false;
    }
  }

  if (copied) {
    showToastNotification(successMessage, "blue");
  } else {
    showToastNotification("Please copy the text manually from the screen.", "orange");
  }
  return copied;
}

function handleCopyCurrentQuote() {
  if (!currentQuote) return;
  const formatted = `"${currentQuote.text}" \u2014 ${currentQuote.author}`;
  const copyBtnLabel = document.getElementById("copy-btn-label");
  handleCopyText(formatted, "Quote and author copied to clipboard!");

  if (copyBtnLabel) {
    copyBtnLabel.textContent = "Copied!";
    window.setTimeout(() => {
      copyBtnLabel.textContent = "Copy";
    }, 1500);
  }
}

/**
 * 7. Share Dialog Handler
 */
function openShareModal(quote = currentQuote) {
  if (!quote) return;
  const modal = document.getElementById("share-modal");
  const preview = document.getElementById("share-modal-preview-text");
  if (!modal) return;

  if (preview) {
    preview.textContent = `\u201C${quote.text}\u201D \u2014 ${quote.author}`;
  }

  if (typeof modal.showModal === "function") {
    modal.showModal();
  } else {
    modal.setAttribute("open", "");
  }
}

function closeShareModal() {
  const modal = document.getElementById("share-modal");
  if (!modal) return;
  if (typeof modal.close === "function") {
    modal.close();
  } else {
    modal.removeAttribute("open");
  }
}

function handleShareToPlatform(platform) {
  if (!currentQuote) return;
  const text = `"${currentQuote.text}" — ${currentQuote.author}`;
  const url = window.location.href;

  if (platform === "whatsapp") {
    const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(text + "\n" + url)}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    closeShareModal();
  } else if (platform === "twitter") {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`;
    window.open(twitterUrl, "_blank", "noopener,noreferrer");
    closeShareModal();
  } else if (platform === "linkedin") {
    const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
    window.open(linkedinUrl, "_blank", "noopener,noreferrer");
    closeShareModal();
  } else if (platform === "copy") {
    handleCopyText(`${text}\nShared via QuoteFlow: ${url}`, "Complete quote with link copied!");
    closeShareModal();
  }
}

/**
 * 8. Status Notification Toast
 */
function showToastNotification(message, color = "blue") {
  const toast = document.getElementById("status-message");
  const icon = document.getElementById("status-icon");
  const text = document.getElementById("status-text");
  if (!toast || !text) return;

  if (statusToastTimeout) window.clearTimeout(statusToastTimeout);

  toast.classList.toggle("status-orange", color === "orange");
  if (icon) icon.textContent = color === "orange" ? "♥" : "✓";
  text.textContent = message;
  toast.hidden = false;

  statusToastTimeout = window.setTimeout(() => {
    toast.hidden = true;
  }, 3000);
}

/**
 * 9. Render "Best Quotes of All Time" Grid
 */
function renderBestQuotesGrid() {
  const grid = document.getElementById("best-quotes-grid");
  if (!grid) return;

  grid.innerHTML = "";

  BEST_QUOTES.forEach((bQuote) => {
    const card = document.createElement("article");
    card.className = "best-quote-card";

    const isLiked = Boolean(userLikedMap[bQuote.id || bQuote.text]);
    const likesCount = (bQuote.likes || 180) + (isLiked ? 1 : 0);

    card.innerHTML = `
      <div>
        <div class="best-quote-meta">
          <span>${bQuote.category}</span>
          <span class="tabular-nums">♥ ${likesCount}</span>
        </div>
        <p class="best-quote-text">&ldquo;${bQuote.text}&rdquo;</p>
        <div class="best-quote-author-row">
          <div class="mini-avatar-badge" style="background: ${bQuote.gradient}">
            ${bQuote.initials || "QF"}
          </div>
          <div class="best-author-details">
            <span class="best-author-name">${bQuote.author}</span>
            <span class="best-author-title">${bQuote.title || "Thinker"}</span>
          </div>
        </div>
      </div>
      <div class="best-quote-card-footer">
        <button type="button" class="btn-stage-swap" data-action="swap-to-stage" data-id="${bQuote.id}">
          Display on Stage &uarr;
        </button>
        <div class="best-quote-actions-right">
          <button type="button" class="btn-icon-only ${isLiked ? "is-liked" : ""}" data-action="like-best" data-id="${bQuote.id}" aria-label="Like quote">
            ♥
          </button>
          <button type="button" class="btn-icon-only" data-action="copy-best" data-id="${bQuote.id}" aria-label="Copy quote">
            📋
          </button>
        </div>
      </div>
    `;

    grid.appendChild(card);
  });
}

/**
 * 10. Render Saved Favorites List
 */
function renderFavoritesList() {
  const grid = document.getElementById("favorites-grid");
  const emptyState = document.getElementById("favorites-empty");
  const summary = document.getElementById("favorites-summary");
  const navCount = document.getElementById("nav-fav-count");
  const clearBtn = document.getElementById("clear-favorites-btn");

  if (!grid) return;

  const count = savedFavorites.length;
  if (navCount) navCount.textContent = String(count);
  if (summary) summary.textContent = count === 1 ? "1 saved quote" : `${count} saved quotes`;
  if (emptyState) emptyState.hidden = count > 0;
  if (clearBtn) clearBtn.hidden = count === 0;

  grid.innerHTML = "";

  savedFavorites.forEach((item, idx) => {
    const card = document.createElement("article");
    card.className = "favorite-item-card";

    card.innerHTML = `
      <div>
        <div class="favorite-item-meta">
          <span>${item.category || "Wisdom"}</span>
          <span class="tabular-nums">#${String(idx + 1).padStart(2, "0")}</span>
        </div>
        <p class="favorite-item-text">&ldquo;${item.text}&rdquo;</p>
        <p class="favorite-item-author">&mdash; ${item.author}</p>
      </div>
      <div class="favorite-item-actions">
        <button type="button" class="btn-sm" data-action="copy-favorite" data-index="${idx}">Copy</button>
        <button type="button" class="btn-sm btn-sm-remove" data-action="remove-favorite" data-index="${idx}">Remove</button>
      </div>
    `;

    grid.appendChild(card);
  });
}

/**
 * 11. Trigger New Quote with Button Animation
 */
function triggerNewQuote() {
  const next = getRandomQuote(activeCategory);
  const newBtn = document.getElementById("new-quote-btn");

  if (newBtn) {
    newBtn.classList.add("is-spinning");
    window.setTimeout(() => {
      newBtn.classList.remove("is-spinning");
    }, 450);
  }

  renderQuoteToStage(next, true);
}

/**
 * 12. Setup Universal Global & Delegated Event Listeners
 */
function attachEventListeners() {
  // Direct Click on Main "New Quote" button
  const newQuoteBtn = document.getElementById("new-quote-btn");
  if (newQuoteBtn) {
    newQuoteBtn.onclick = function (e) {
      e.preventDefault();
      triggerNewQuote();
    };
  }

  // Header "New Quote" button
  const headerInspireBtn = document.getElementById("header-inspire-btn");
  if (headerInspireBtn) {
    headerInspireBtn.onclick = function (e) {
      e.preventDefault();
      triggerNewQuote();
      const home = document.getElementById("home");
      if (home) home.scrollIntoView({ behavior: "smooth" });
    };
  }

  // Direct Button Handlers for Main Quote Card
  const likeBtn = document.getElementById("like-quote-btn");
  if (likeBtn) {
    likeBtn.onclick = () => handleToggleLike(currentQuote);
  }

  const copyBtn = document.getElementById("copy-quote-btn");
  if (copyBtn) {
    copyBtn.onclick = handleCopyCurrentQuote;
  }

  const shareBtn = document.getElementById("share-quote-btn");
  if (shareBtn) {
    shareBtn.onclick = () => openShareModal(currentQuote);
  }

  const favBtn = document.getElementById("favorite-quote-btn");
  if (favBtn) {
    favBtn.onclick = () => handleToggleBookmark(currentQuote);
  }

  // Share Dialog Actions
  const closeShareBtn = document.getElementById("close-share-modal-btn");
  if (closeShareBtn) closeShareBtn.onclick = closeShareModal;

  const shareWhatsapp = document.getElementById("share-whatsapp-btn");
  if (shareWhatsapp) shareWhatsapp.onclick = () => handleShareToPlatform("whatsapp");

  const shareTwitter = document.getElementById("share-twitter-btn");
  if (shareTwitter) shareTwitter.onclick = () => handleShareToPlatform("twitter");

  const shareLinkedin = document.getElementById("share-linkedin-btn");
  if (shareLinkedin) shareLinkedin.onclick = () => handleShareToPlatform("linkedin");

  const shareCopyLink = document.getElementById("share-copy-link-btn");
  if (shareCopyLink) shareCopyLink.onclick = () => handleShareToPlatform("copy");

  // Category filter tabs
  const filterBtns = document.querySelectorAll(".filter-btn");
  filterBtns.forEach((btn) => {
    btn.onclick = function () {
      const cat = btn.getAttribute("data-category") || "All";
      activeCategory = cat;

      filterBtns.forEach((b) => {
        const isMatch = b.getAttribute("data-category") === cat;
        b.classList.toggle("active", isMatch);
        b.setAttribute("aria-pressed", String(isMatch));
      });

      triggerNewQuote();
    };
  });

  // Empty State Bookmark Button
  const saveEmptyBtn = document.getElementById("save-current-empty-btn");
  if (saveEmptyBtn) {
    saveEmptyBtn.onclick = () => {
      handleToggleBookmark(currentQuote);
    };
  }

  // Clear All Favorites Button
  const clearFavsBtn = document.getElementById("clear-favorites-btn");
  if (clearFavsBtn) {
    clearFavsBtn.onclick = () => {
      savedFavorites = [];
      saveToStorage(FAVORITES_KEY, savedFavorites);
      updateInteractiveButtonStates();
      renderFavoritesList();
      showToastNotification("All favorites cleared.", "blue");
    };
  }

  // Mobile menu toggle
  const mobileToggle = document.getElementById("mobile-menu-btn");
  const siteNav = document.getElementById("site-nav");
  if (mobileToggle && siteNav) {
    mobileToggle.onclick = function () {
      const isOpen = siteNav.classList.toggle("is-open");
      mobileToggle.setAttribute("aria-expanded", String(isOpen));
    };
  }

  // Close mobile nav on link click
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.onclick = function () {
      document.querySelectorAll(".nav-link").forEach((l) => l.classList.remove("active"));
      link.classList.add("active");
      if (siteNav && siteNav.classList.contains("is-open")) {
        siteNav.classList.remove("is-open");
      }
    };
  });

  // Delegated Event Listener for dynamically generated elements
  document.body.addEventListener("click", (e) => {
    const target = e.target.closest("button");
    if (!target) return;

    const action = target.getAttribute("data-action");
    if (!action) return;

    // Best Quotes Section Actions
    if (action === "swap-to-stage") {
      const quoteId = target.getAttribute("data-id");
      const found = BEST_QUOTES.find((q) => q.id === quoteId);
      if (found) {
        renderQuoteToStage(found, true);
        const stage = document.getElementById("home");
        if (stage) stage.scrollIntoView({ behavior: "smooth" });
        showToastNotification(`Loaded "${found.author}" onto main stage!`, "blue");
      }
    } else if (action === "like-best") {
      const quoteId = target.getAttribute("data-id");
      const found = BEST_QUOTES.find((q) => q.id === quoteId);
      if (found) handleToggleLike(found);
    } else if (action === "copy-best") {
      const quoteId = target.getAttribute("data-id");
      const found = BEST_QUOTES.find((q) => q.id === quoteId);
      if (found) {
        handleCopyText(`"${found.text}" \u2014 ${found.author}`, "Quote copied to clipboard!");
      }
    } else if (action === "copy-favorite") {
      const index = parseInt(target.getAttribute("data-index"), 10);
      const fav = savedFavorites[index];
      if (fav) {
        handleCopyText(`"${fav.text}" \u2014 ${fav.author}`, "Favorite quote copied!");
      }
    } else if (action === "remove-favorite") {
      const index = parseInt(target.getAttribute("data-index"), 10);
      if (!isNaN(index) && savedFavorites[index]) {
        savedFavorites.splice(index, 1);
        saveToStorage(FAVORITES_KEY, savedFavorites);
        updateInteractiveButtonStates();
        renderFavoritesList();
        showToastNotification("Favorite removed.", "blue");
      }
    }
  });

  // Spacebar shortcut to generate a new quote (when not typing in an input)
  window.addEventListener("keydown", (e) => {
    if (e.code === "Space" && e.target === document.body) {
      e.preventDefault();
      triggerNewQuote();
    }
  });
}

/**
 * 13. Application Entry Point
 */
function initApp() {
  savedFavorites = loadFromStorage(FAVORITES_KEY, []);
  userLikedMap = loadFromStorage(LIKES_KEY, {});

  attachEventListeners();
  renderBestQuotesGrid();
  renderFavoritesList();
  renderQuoteToStage(QUOTES[0], false);
}

// Ensure execution once DOM is ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initApp);
} else {
  initApp();
}
