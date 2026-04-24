// ── Project data ──────────────────────────────────────────────────────────
// image: relative path like 'projects/day1.png' or any URL
// url:   live site link — shown on the "Live Link" button
const projects = {
  6:  { title: 'Sticky Nav That Transforms',           day: 1,  image: 'projects/day-1.png',  desc: 'Navigation that starts transparent over hero, shrinks and blurs on scroll, adds border, logo morphs from wordmark to icon.',                              url: 'https://gains-cycle-21379271.figma.site' },
  7:  { title: 'Image Card with Hover Reveal',         day: 2,  image: 'projects/day-2.png',  desc: 'Portfolio-style cards with images that reveal project details and links on hover.',                                                                        url: 'https://mars-portfolio.figma.site/' },
  8:  { title: 'Bento Grid with Dynamic Content',      day: 3,  image: 'projects/day-3.png',  desc: 'Asymmetric bento with mixed card sizes, one with auto-playing screen recording, one with live graph, one bold quote.',                                    url: 'https://v0-bento-grid-v0.vercel.app/' },
  9:  { title: 'Stacked Toast Notifications',          day: 4,  image: 'projects/day-4.png',  desc: 'Toast notifications that stack, newest pushes others down, old ones scale and fade into stack, hover expands all.',                                       url: 'https://toast-ui.lovable.app/' },
  10: { title: 'Testimonial Carousel',                 day: 5,  image: 'projects/day-5.png',  desc: 'Auto-scrolling testimonial cards with customer photos, quotes, and smooth slide transitions.',                                                             url: 'https://command-palette-task.lovable.app/' },
  13: { title: 'E-Commerce Onboarding Screens',        day: 6,  image: 'projects/day-6.png',  desc: 'Swipeable onboarding flow with vibrant imagery, smooth transitions, and progress indicators.',                                                            url: 'https://client-narratives.lovable.app/' },
  14: { title: 'Pricing Card with Toggle',             day: 7,  image: 'projects/day-7.png',  desc: 'Pricing cards with monthly/annual toggle and smooth animated transitions.',                                                                                url: 'https://v0-pricing-cards-claude.vercel.app' },
  15: { title: 'Full-Bleed Scroll Story',              day: 8,  image: 'projects/day-8.png',  desc: 'A product feature story told over 5 scroll-triggered scenes with no navigation.',                                                                         url: 'https://v0-scroll-story.vercel.app' },
  17: { title: 'File Upload Drop Zone',                day: 9,  image: 'projects/day-9.png',  desc: 'Drag-and-drop with rich progress animation, file preview, and error states.',                                                                              url: 'https://v0-html-to-react-component-2t.vercel.app/' },
  19: { title: 'Dark SaaS Dashboard',                  day: 10, image: 'projects/day-10.png', desc: 'Single dashboard view with sidebar, header, metric cards, chart, and data table.',                                                                         url: 'https://nucleus-dashboard-task.vercel.app/' },
  20: { title: 'Waitlist Page',                        day: 11, image: 'projects/day-11.png', desc: 'Email capture with live counter of people waiting and confetti on submit.',                                                                                 url: 'https://waitlist-page-task-tprc.vercel.app/' },
  21: { title: 'Testimonial Marquee',                  day: 12, image: 'projects/day-12.png', desc: 'Infinite scrolling quote cards, two rows moving in opposite directions.',                                                                                  url: 'https://testimonial-marquee-task12.vercel.app/' },
  22: { title: 'Context Menu',                         day: 13, image: 'projects/day-13.png', desc: 'Right-click menu with nested items, keyboard support, and positional awareness.',                                                                          url: 'https://context-menu-13.vercel.app/' },
  24: { title: 'Mobile App Hero',                      day: 14, image: 'projects/day-14.png', desc: 'Hero section with floating phone mockup, ambient glow, and orbiting feature callouts.',                                                                    url: 'https://mobile-app-hero-14.vercel.app/' },
  25: { title: 'Skeleton Loader Set',                  day: 15, image: 'projects/day-15.png', desc: '6 content skeletons with shimmer animation.',                                                                                                              url: 'https://skeleton-loader-15.vercel.app/' },
  26: { title: 'Mobile Finance Dashboard',             day: 16, image: 'projects/day-16.png', desc: 'Beautiful mobile app showing wallet, spending patterns, and financial health at a glance.',                                                                 url: 'https://mobile-finance-16.vercel.app' },
  28: { title: 'SaaS Onboarding & Auth Flow',          day: 17, image: 'projects/day-17.png', desc: 'Complete auth system with signup, email verification, profile setup, and personalized dashboard.',                                                         url: 'https://analytics-dashboard-17.vercel.app' },
  29: { title: 'Project Collaboration Tool',           day: 18, image: 'projects/day-18.png', desc: 'Multi-user workspace with projects, team members, tasks, and real-time updates.',                                                                          url: 'https://pulse-dashboard-18-silk.vercel.app/' },
  31: { title: 'Community & Social Platform',          day: 19, image: 'projects/day-19.png', desc: 'User-generated content platform with profiles, posts, likes, comments, and social discovery.',                                                             url: 'https://hive-community-pi.vercel.app' },
};

// ── Extra / side projects (not part of 20-day challenge) ──────────────────
// Add new entries here: e4, e5 ... when ready
const extraProjects = {
  e1: { title: 'Side Project',   image: 'projects/extra1.png', url: '' },
  e2: { title: 'Side Project 2', image: '', url: '' },
  e3: { title: 'Side Project 3', image: '', url: '' },
};

// ── Calendar data ──────────────────────────────────────────────────────────
// 'a' prefix = active day, 'i' prefix = inactive, '' = empty cell
const weeks = [
  ['', '', '', '', '', '', 'i1'],
  ['i2','i3','i4','i5','a6','a7','a8'],
  ['a9','a10','i11','i12','a13','a14','a15'],
  ['i16','a17','i18','a19','a20','a21','a22'],
  ['i23','a24','a25','a26','i27','a28','a29'],
  ['a29','a31','i1','i2','i3','i4','i5'],
  ['e1','e2','e3','','','',''],
];

// ── Build calendar ─────────────────────────────────────────────────────────
const cal = document.getElementById('calendar');
weeks.forEach((week, rowIdx) => {
  const row = document.createElement('div');
  row.className = 'cal-row';
  week.forEach((cell, colIdx) => {
    const d = document.createElement('div');
    d.style.animationDelay = `${rowIdx * 80 + colIdx * 30}ms`;

    if (!cell) {
      d.className = 'day empty';
    } else if (cell.startsWith('e')) {
      const key = cell;
      const ep = extraProjects[key];
      d.className = 'day extra';
      if (ep) {
        const tip = document.createElement('div');
        tip.className = 'day-tooltip';
        tip.textContent = ep.title;
        d.appendChild(tip);
        d.setAttribute('data-project', key);
        d.addEventListener('click', () => selectProject(key));
      }
    } else {
      const isActive = cell.startsWith('a');
      const num = parseInt(cell.replace(/^[ai]/, ''));
      d.className = 'day ' + (isActive ? 'active' : 'inactive');

      const span = document.createElement('span');
      span.className = 'day-num';
      span.textContent = num;
      d.appendChild(span);

      if (isActive && projects[num]) {
        const tip = document.createElement('div');
        tip.className = 'day-tooltip';
        tip.textContent = projects[num].title;
        d.appendChild(tip);
        d.setAttribute('data-day', num);
        d.addEventListener('click', () => selectDay(num));
      }
    }
    row.appendChild(d);
  });
  cal.appendChild(row);
});

// ── Click sound ────────────────────────────────────────────────────────────
let _audioCtx = null;
function playTick() {
  if (!_audioCtx) _audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  const osc  = _audioCtx.createOscillator();
  const gain = _audioCtx.createGain();
  osc.connect(gain);
  gain.connect(_audioCtx.destination);
  osc.type = 'sine';
  osc.frequency.value = 600;
  gain.gain.setValueAtTime(0.07, _audioCtx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.001, _audioCtx.currentTime + 0.09);
  osc.start(_audioCtx.currentTime);
  osc.stop(_audioCtx.currentTime + 0.09);
}

// ── Day click → update right panel ────────────────────────────────────────
let currentUrl = '';

function selectDay(num) {
  const p = projects[num];
  if (!p) return;
  playTick();

  document.querySelectorAll('.day.active, .day.extra').forEach(d => d.classList.remove('selected-day'));
  const clicked = document.querySelector(`.day[data-day="${num}"]`);
  if (clicked) clicked.classList.add('selected-day');

  const panel = document.getElementById('right-panel');
  panel.style.opacity = '0';

  setTimeout(() => {
    document.getElementById('panel-title').textContent = p.title;
    document.getElementById('panel-day').textContent = `DAY ${p.day}`;
    document.getElementById('panel-desc').textContent = p.desc || '';
    const img = document.getElementById('panel-image');
    if (p.image) { img.src = p.image; img.style.display = ''; }
    else { img.style.display = 'none'; }
    currentUrl = p.url || '';
    const btn = document.getElementById('panel-link');
    btn.style.opacity = currentUrl ? '1' : '0.3';
    btn.style.pointerEvents = currentUrl ? 'auto' : 'none';
    panel.style.opacity = '1';
    if (window.innerWidth <= 680) panel.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, 200);
}

function openLiveLink() {
  if (currentUrl) window.open(currentUrl, '_blank');
}

function selectProject(key) {
  const p = extraProjects[key];
  if (!p) return;
  playTick();

  document.querySelectorAll('.day.active, .day.extra').forEach(d => d.classList.remove('selected-day'));
  const clicked = document.querySelector(`.day[data-project="${key}"]`);
  if (clicked) clicked.classList.add('selected-day');

  const panel = document.getElementById('right-panel');
  panel.style.opacity = '0';

  setTimeout(() => {
    document.getElementById('panel-title').textContent = p.title;
    document.getElementById('panel-day').textContent = 'SIDE PROJECT';
    const img = document.getElementById('panel-image');
    if (p.image) { img.src = p.image; img.style.display = ''; }
    else { img.style.display = 'none'; }
    currentUrl = p.url || '';
    const btn = document.getElementById('panel-link');
    btn.style.opacity = currentUrl ? '1' : '0.3';
    btn.style.pointerEvents = currentUrl ? 'auto' : 'none';
    panel.style.opacity = '1';
    if (window.innerWidth <= 680) panel.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, 200);
}

// ── Prototype / Prompt toggle ──────────────────────────────────────────────
function toggleView(btn) {
  document.querySelectorAll('.toggle-btn').forEach(b => b.classList.remove('selected'));
  btn.classList.add('selected');
}


// ── Music Player ───────────────────────────────────────────────────────────
const songs = [
  { title: 'Track 1',  src: 'songs/song-1.mp3'  },
  { title: 'Track 2',  src: 'songs/song-2.mp3'  },
  { title: 'Track 3',  src: 'songs/song-3.mp3'  },
  { title: 'Track 4',  src: 'songs/song-4.mp3'  },
  { title: 'Track 5',  src: 'songs/song-5.mp3'  },
  { title: 'Track 6',  src: 'songs/song-6.mp3'  },
  { title: 'Track 7',  src: 'songs/song-7.mp3'  },
  { title: 'Track 8',  src: 'songs/song-8.mp3'  },
  { title: 'Track 9',  src: 'songs/song-9.mp3'  },
  { title: 'Track 10', src: 'songs/song-10.mp3' },
  { title: 'Track 11', src: 'songs/song-11.mp3' },
];

let spIdx     = 0;
let spPlaying = false;
const spAudio = new Audio();

spAudio.addEventListener('timeupdate', () => {
  if (!spAudio.duration) return;
  document.getElementById('sp-fill').style.width =
    (spAudio.currentTime / spAudio.duration * 100) + '%';
});

spAudio.addEventListener('ended', () => spNext());

function spLoad(idx, autoplay = false) {
  spIdx = ((idx % songs.length) + songs.length) % songs.length;
  spAudio.src = songs[spIdx].src;
  const titleEl = document.getElementById('sp-title');
  titleEl.textContent = songs[spIdx].title;
  titleEl.classList.remove('ticker');
  document.getElementById('sp-fill').style.width = '0%';
  if (autoplay) { spAudio.play(); spSetPlaying(true); }
}

function spToggle() {
  if (!spAudio.src) { spLoad(spIdx, true); return; }
  if (spPlaying) { spAudio.pause(); spSetPlaying(false); }
  else           { spAudio.play();  spSetPlaying(true);  }
}

function spNext() { spLoad(spIdx + 1, spPlaying); }

function spPrev() {
  if (spAudio.currentTime > 3) { spAudio.currentTime = 0; return; }
  spLoad(spIdx - 1, spPlaying);
}

function spSeek(e) {
  if (!spAudio.duration) return;
  const r = e.currentTarget.getBoundingClientRect();
  spAudio.currentTime = ((e.clientX - r.left) / r.width) * spAudio.duration;
}

function spSetPlaying(val) {
  spPlaying = val;
  document.getElementById('sp-disc').classList.toggle('playing', val);
}

// idle state — ticker until first play
(function () {
  const titleEl = document.getElementById('sp-title');
  titleEl.textContent = '♫ click to listen ♪ ✦';
  titleEl.classList.add('ticker');
  spIdx = 0;
  spAudio.src = songs[0].src;
})();

// ── Copy email ─────────────────────────────────────────────────────────────
function copyEmail() {
  navigator.clipboard.writeText('juddblck2@gmail.com').then(() => {
    const el = document.querySelector('.footer-about');
    const orig = el.textContent;
    el.textContent = 'copied!';
    setTimeout(() => { el.textContent = orig; }, 2000);
  });
}


// ── Mobile: move Spotify widget into top nav ───────────────────────────────
function syncSpotifyPlacement() {
  const widget = document.getElementById('spotify-widget');
  const mobileFloat = document.getElementById('spotify-float');
  const footerNav = document.querySelector('.footer-nav');
  if (!widget || !mobileFloat || !footerNav) return;
  if (window.innerWidth <= 680) {
    if (widget.parentElement !== mobileFloat) mobileFloat.appendChild(widget);
  } else {
    if (widget.parentElement !== footerNav) footerNav.appendChild(widget);
  }
}
syncSpotifyPlacement();
window.addEventListener('resize', syncSpotifyPlacement);

// ── Theme toggle ───────────────────────────────────────────────────────────
function toggleTheme() {
  const isDark = document.body.classList.toggle('dark');
  document.getElementById('theme-label').textContent = isDark ? 'Dark Mode' : 'Light Mode';
  document.getElementById('theme-pill').classList.toggle('dark-mode', isDark);
}
