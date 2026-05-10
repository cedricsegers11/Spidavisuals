// ================ WELKOM SPLASH ================
// Toont 1× per browser-sessie bij openen homepage. Click/key/scroll om door te gaan.
(function welcomeSplash() {
  const splash = document.getElementById('splash');
  if (!splash) return;
  const SPLASH_KEY = 'spida_welcome_seen';
  if (sessionStorage.getItem(SPLASH_KEY)) {
    splash.remove();
    return;
  }
  document.body.classList.add('splash-active');
  const enterBtn = document.getElementById('splashEnter');

  function dismiss() {
    if (splash.classList.contains('dismissed')) return;
    splash.classList.add('dismissed');
    sessionStorage.setItem(SPLASH_KEY, '1');
    // Hero start direct te faden tijdens splash exit voor naadloze crossfade
    document.body.classList.remove('splash-active');
    setTimeout(() => splash.remove(), 800);
    document.removeEventListener('keydown', onKey);
    window.removeEventListener('wheel', onWheel);
    window.removeEventListener('touchstart', onTouch, { passive: true });
  }
  function onKey(e) { if (e.key !== 'Tab') dismiss(); }
  function onWheel() { dismiss(); }
  function onTouch() { dismiss(); }

  if (enterBtn) enterBtn.addEventListener('click', dismiss);
  splash.addEventListener('click', (e) => {
    // klik op de overlay zelf (niet op interne buttons)
    if (e.target === splash || e.target.classList.contains('splash-bg') ||
        e.target.classList.contains('splash-vignette') ||
        e.target.classList.contains('splash-content')) {
      dismiss();
    }
  });
  document.addEventListener('keydown', onKey);
  window.addEventListener('wheel', onWheel, { passive: true });
  window.addEventListener('touchstart', onTouch, { passive: true });
})();

// ================ I18N — TAAL SYSTEEM ================
const I18N = {
  nl: {
    'nav.home': 'Home', 'nav.diensten': 'Diensten', 'nav.tarieven': 'Tarieven',
    'nav.werk': 'Werk', 'nav.proces': 'Proces', 'nav.over': 'Over', 'nav.contact': 'Contact',
    'nav.cta': 'Offerte aanvragen ↗',
    'hero.timecode': 'BASED IN NEDERLAND · TIKTOK · REELS · VIDEO · MOTION',
    'hero.title': 'Visuele content die je merk laat <span class="grad">opvallen</span>.',
    'hero.sub': 'Voor ambitieuze merken in Nederland — content die kijkers stopt en klanten oplevert.',
    'hero.rotator.label': 'Wij maken',
    'hero.cta.primary': 'Start een project →',
    'hero.cta.secondary': '▶ Bekijk ons werk',
    'services.eyebrow': '01 / Diensten',
    'services.title': 'Eén studio, <em>alle formats.</em>',
    'services.sub': 'Van native short-form tot cinematische bedrijfsfilms — alles vanuit één team in Nederland.',
    'services.viewAll': 'Alle diensten bekijken →',
    'tarieven.eyebrow': '02 / Tarieven',
    'tarieven.title': 'Heldere <em>prijzen.</em>',
    'tarieven.sub': 'Vaste tarieven per type content. Geen verborgen kosten, geen verrassingen.',
    'tarieven.cta.label': '// VRAGEN OF MAATWERK',
    'tarieven.cta.text': 'Nog vragen of wil je iets anders / meer? <strong>Vraag een persoonlijke offerte aan</strong> — we reageren binnen 1 werkdag.',
    'tarieven.cta.note': 'Denk je dat het buiten onze niche valt? <strong>Stel de vraag toch.</strong> Vaak kan Spida het alsnog editen — vraag het gewoon, dan kijken we ernaar.',
    'tarieven.cta.btn': 'Vraag offerte aan →',
    'work.eyebrow': '03 / Werk',
    'work.title': 'Waar we aan hebben <em>gewerkt.</em>',
    'work.sub': 'Een greep uit recente projecten voor merken in horeca, automotive en lifestyle.',
    'work.viewAll': 'Volledig portfolio →',
    'reviews.eyebrow': '04 / Reviews',
    'reviews.title': 'Wat klanten <em>zeggen.</em>',
    'reviews.sub': 'Echte reacties van mensen die met Spida hebben gewerkt.',
    'reviews.summary': 'Op basis van 47+ reviews',
    'process.eyebrow': '05 / Proces',
    'process.title': 'Van briefing tot <em>oplevering.</em>',
    'process.sub': 'Een transparant proces in zes stappen waarin je nooit hoeft te raden waar je project staat.',
    'process.cta': 'Laten we stap één zetten →',
    'about.eyebrow': '06 / Over',
    'about.title': 'Een jonge studio voor merken die <em>verder willen.</em>',
    'about.match': 'Klinkt als een <em>match?</em>',
    'about.matchSub': 'Stuur een bericht of vraag direct een offerte aan — we reageren snel.',
    'about.matchBtn': 'Laten we praten →',
    'contact.eyebrow': '07 / Contact',
    'contact.title': 'Laten we iets <em>maken.</em>',
    'contact.sub': 'Vertel ons over je merk — binnen 1 werkdag krijg je een eerlijke offerte met concept-richting per mail.',
    'contact.cta': 'Start je project →',
    'footer.diensten': 'Diensten', 'footer.studio': 'Studio', 'footer.contact': 'Contact',
    'footer.aboutUs': 'Over ons', 'footer.ourWork': 'Ons werk',
    'footer.rights': 'ALLE RECHTEN VOORBEHOUDEN',
    'splash.welcome': 'Welkom bij',
    'splash.sub': 'Visuele content die je merk laat <em>opvallen</em>.',
    'splash.continue': 'Klik om door te gaan',
    'splash.hint': 'of druk op een willekeurige toets',
  },
  en: {
    'nav.home': 'Home', 'nav.diensten': 'Services', 'nav.tarieven': 'Pricing',
    'nav.werk': 'Work', 'nav.proces': 'Process', 'nav.over': 'About', 'nav.contact': 'Contact',
    'nav.cta': 'Request quote ↗',
    'hero.timecode': 'BASED IN THE NETHERLANDS · TIKTOK · REELS · VIDEO · MOTION',
    'hero.title': 'Visual content that makes your brand <span class="grad">stand out</span>.',
    'hero.sub': 'For ambitious brands — content that stops viewers and converts to customers.',
    'hero.rotator.label': 'We make',
    'hero.cta.primary': 'Start a project →',
    'hero.cta.secondary': '▶ View our work',
    'services.eyebrow': '01 / Services',
    'services.title': 'One studio, <em>all formats.</em>',
    'services.sub': 'From native short-form to cinematic brand films — all from one team in the Netherlands.',
    'services.viewAll': 'View all services →',
    'tarieven.eyebrow': '02 / Pricing',
    'tarieven.title': 'Clear <em>prices.</em>',
    'tarieven.sub': 'Fixed rates per content type. No hidden fees, no surprises.',
    'tarieven.cta.label': '// QUESTIONS OR CUSTOM',
    'tarieven.cta.text': 'Got questions or need something different / more? <strong>Request a personalized quote</strong> — we reply within 1 business day.',
    'tarieven.cta.note': 'Think it falls outside our niche? <strong>Ask anyway.</strong> Often Spida can still edit it — just ask, we\'ll take a look.',
    'tarieven.cta.btn': 'Request a quote →',
    'work.eyebrow': '03 / Work',
    'work.title': 'What we\'ve <em>worked on.</em>',
    'work.sub': 'A selection of recent projects for brands in hospitality, automotive and lifestyle.',
    'work.viewAll': 'Full portfolio →',
    'reviews.eyebrow': '04 / Reviews',
    'reviews.title': 'What clients <em>say.</em>',
    'reviews.sub': 'Real reactions from people who\'ve worked with Spida.',
    'reviews.summary': 'Based on 47+ reviews',
    'process.eyebrow': '05 / Process',
    'process.title': 'From briefing to <em>delivery.</em>',
    'process.sub': 'A transparent six-step process where you never have to guess where your project stands.',
    'process.cta': 'Let\'s take step one →',
    'about.eyebrow': '06 / About',
    'about.title': 'A young studio for brands that <em>want more.</em>',
    'about.match': 'Sounds like a <em>match?</em>',
    'about.matchSub': 'Send a message or request a quote directly — we respond fast.',
    'about.matchBtn': 'Let\'s talk →',
    'contact.eyebrow': '07 / Contact',
    'contact.title': 'Let\'s <em>create.</em>',
    'contact.sub': 'Tell us about your brand — within 1 business day you\'ll get a fair quote with concept direction by email.',
    'contact.cta': 'Start your project →',
    'footer.diensten': 'Services', 'footer.studio': 'Studio', 'footer.contact': 'Contact',
    'footer.aboutUs': 'About us', 'footer.ourWork': 'Our work',
    'footer.rights': 'ALL RIGHTS RESERVED',
    'splash.welcome': 'Welcome to',
    'splash.sub': 'Visual content that makes your brand <em>stand out</em>.',
    'splash.continue': 'Click to continue',
    'splash.hint': 'or press any key',
  },
  de: {
    'nav.home': 'Home', 'nav.diensten': 'Leistungen', 'nav.tarieven': 'Preise',
    'nav.werk': 'Arbeit', 'nav.proces': 'Prozess', 'nav.over': 'Über', 'nav.contact': 'Kontakt',
    'nav.cta': 'Angebot anfragen ↗',
    'hero.timecode': 'AUS DEN NIEDERLANDEN · TIKTOK · REELS · VIDEO · MOTION',
    'hero.title': 'Visuelle Inhalte, die deine Marke <span class="grad">auffallen</span> lassen.',
    'hero.sub': 'Für ambitionierte Marken — Inhalte, die Zuschauer fesseln und Kunden gewinnen.',
    'hero.rotator.label': 'Wir machen',
    'hero.cta.primary': 'Projekt starten →',
    'hero.cta.secondary': '▶ Unsere Arbeit ansehen',
    'services.eyebrow': '01 / Leistungen',
    'services.title': 'Ein Studio, <em>alle Formate.</em>',
    'services.sub': 'Von Native Short-Form bis zu cinematischen Markenfilmen — alles aus einem Team in den Niederlanden.',
    'services.viewAll': 'Alle Leistungen ansehen →',
    'tarieven.eyebrow': '02 / Preise',
    'tarieven.title': 'Klare <em>Preise.</em>',
    'tarieven.sub': 'Feste Preise pro Content-Typ. Keine versteckten Kosten, keine Überraschungen.',
    'tarieven.cta.label': '// FRAGEN ODER MASSWERK',
    'tarieven.cta.text': 'Noch Fragen oder etwas anderes / mehr nötig? <strong>Fordere ein persönliches Angebot an</strong> — wir antworten innerhalb von 1 Werktag.',
    'tarieven.cta.note': 'Denkst du, es liegt außerhalb unserer Nische? <strong>Frag trotzdem.</strong> Oft kann Spida es trotzdem schneiden — frag einfach, wir schauen es uns an.',
    'tarieven.cta.btn': 'Angebot anfragen →',
    'work.eyebrow': '03 / Arbeit',
    'work.title': 'Woran wir <em>gearbeitet haben.</em>',
    'work.sub': 'Eine Auswahl aktueller Projekte für Marken in Gastronomie, Automotive und Lifestyle.',
    'work.viewAll': 'Vollständiges Portfolio →',
    'reviews.eyebrow': '04 / Reviews',
    'reviews.title': 'Was Kunden <em>sagen.</em>',
    'reviews.sub': 'Echte Reaktionen von Menschen, die mit Spida gearbeitet haben.',
    'reviews.summary': 'Basierend auf 47+ Bewertungen',
    'process.eyebrow': '05 / Prozess',
    'process.title': 'Von Briefing bis <em>Lieferung.</em>',
    'process.sub': 'Ein transparenter Prozess in sechs Schritten, bei dem du nie raten musst, wo dein Projekt steht.',
    'process.cta': 'Lass uns Schritt eins machen →',
    'about.eyebrow': '06 / Über',
    'about.title': 'Ein junges Studio für Marken, die <em>weiter wollen.</em>',
    'about.match': 'Klingt wie ein <em>Match?</em>',
    'about.matchSub': 'Schick eine Nachricht oder fordere direkt ein Angebot an — wir antworten schnell.',
    'about.matchBtn': 'Lass uns reden →',
    'contact.eyebrow': '07 / Kontakt',
    'contact.title': 'Lass uns etwas <em>schaffen.</em>',
    'contact.sub': 'Erzähl uns von deiner Marke — innerhalb von 1 Werktag erhältst du ein faires Angebot mit Konzeptrichtung per Mail.',
    'contact.cta': 'Starte dein Projekt →',
    'footer.diensten': 'Leistungen', 'footer.studio': 'Studio', 'footer.contact': 'Kontakt',
    'footer.aboutUs': 'Über uns', 'footer.ourWork': 'Unsere Arbeit',
    'footer.rights': 'ALLE RECHTE VORBEHALTEN',
    'splash.welcome': 'Willkommen bei',
    'splash.sub': 'Visuelle Inhalte, die deine Marke <em>auffallen lassen</em>.',
    'splash.continue': 'Klicke um fortzufahren',
    'splash.hint': 'oder drücke eine beliebige Taste',
  },
  fr: {
    'nav.home': 'Accueil', 'nav.diensten': 'Services', 'nav.tarieven': 'Tarifs',
    'nav.werk': 'Réalisations', 'nav.proces': 'Processus', 'nav.over': 'À propos', 'nav.contact': 'Contact',
    'nav.cta': 'Demander un devis ↗',
    'hero.timecode': 'BASÉ AUX PAYS-BAS · TIKTOK · REELS · VIDÉO · MOTION',
    'hero.title': 'Contenu visuel qui fait <span class="grad">remarquer</span> votre marque.',
    'hero.sub': 'Pour les marques ambitieuses — du contenu qui capte les spectateurs et convertit en clients.',
    'hero.rotator.label': 'Nous créons',
    'hero.cta.primary': 'Démarrer un projet →',
    'hero.cta.secondary': '▶ Voir notre travail',
    'services.eyebrow': '01 / Services',
    'services.title': 'Un studio, <em>tous les formats.</em>',
    'services.sub': 'Du contenu vertical natif aux films de marque cinématographiques — le tout depuis une seule équipe aux Pays-Bas.',
    'services.viewAll': 'Voir tous les services →',
    'tarieven.eyebrow': '02 / Tarifs',
    'tarieven.title': 'Tarifs <em>clairs.</em>',
    'tarieven.sub': 'Prix fixes par type de contenu. Pas de frais cachés, pas de surprises.',
    'tarieven.cta.label': '// QUESTIONS OU SUR-MESURE',
    'tarieven.cta.text': 'Des questions ou besoin d\'autre chose / plus ? <strong>Demandez un devis personnalisé</strong> — nous répondons sous 1 jour ouvré.',
    'tarieven.cta.note': 'Vous pensez que c\'est hors de notre niche ? <strong>Demandez quand même.</strong> Souvent Spida peut tout de même le monter — demandez simplement, nous regarderons.',
    'tarieven.cta.btn': 'Demander un devis →',
    'work.eyebrow': '03 / Réalisations',
    'work.title': 'Sur quoi nous avons <em>travaillé.</em>',
    'work.sub': 'Une sélection de projets récents pour des marques en restauration, automobile et lifestyle.',
    'work.viewAll': 'Portfolio complet →',
    'reviews.eyebrow': '04 / Avis',
    'reviews.title': 'Ce que disent <em>les clients.</em>',
    'reviews.sub': 'Vraies réactions de personnes qui ont travaillé avec Spida.',
    'reviews.summary': 'Basé sur 47+ avis',
    'process.eyebrow': '05 / Processus',
    'process.title': 'Du briefing à la <em>livraison.</em>',
    'process.sub': 'Un processus transparent en six étapes où vous ne devez jamais deviner où en est votre projet.',
    'process.cta': 'Faisons le premier pas →',
    'about.eyebrow': '06 / À propos',
    'about.title': 'Un jeune studio pour les marques qui <em>veulent plus.</em>',
    'about.match': 'Ça ressemble à un <em>match ?</em>',
    'about.matchSub': 'Envoyez un message ou demandez directement un devis — nous répondons rapidement.',
    'about.matchBtn': 'Discutons →',
    'contact.eyebrow': '07 / Contact',
    'contact.title': 'Créons <em>ensemble.</em>',
    'contact.sub': 'Parlez-nous de votre marque — sous 1 jour ouvré vous recevrez un devis honnête avec direction de concept par email.',
    'contact.cta': 'Démarrer votre projet →',
    'footer.diensten': 'Services', 'footer.studio': 'Studio', 'footer.contact': 'Contact',
    'footer.aboutUs': 'À propos', 'footer.ourWork': 'Notre travail',
    'footer.rights': 'TOUS DROITS RÉSERVÉS',
    'splash.welcome': 'Bienvenue chez',
    'splash.sub': 'Du contenu visuel qui fait <em>remarquer</em> votre marque.',
    'splash.continue': 'Cliquez pour continuer',
    'splash.hint': 'ou appuyez sur n\'importe quelle touche',
  }
};

const LANG_KEY = 'spida_lang';
const LANG_FLAGS = { nl: '🇳🇱', en: '🇬🇧', de: '🇩🇪', fr: '🇫🇷' };
const LANG_NAMES = { nl: 'Nederlands', en: 'English', de: 'Deutsch', fr: 'Français' };

function applyLang(lang) {
  const dict = I18N[lang] || I18N.nl;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (dict[key] !== undefined) el.innerHTML = dict[key];
  });
  document.documentElement.lang = lang;
  localStorage.setItem(LANG_KEY, lang);
  // Update switcher UI
  document.querySelectorAll('.lang-current-flag').forEach(el => el.textContent = LANG_FLAGS[lang]);
  document.querySelectorAll('.lang-current-code').forEach(el => el.textContent = lang.toUpperCase());
  document.querySelectorAll('.lang-option').forEach(opt => {
    opt.classList.toggle('active', opt.dataset.lang === lang);
  });
}

(function initLang() {
  const saved = localStorage.getItem(LANG_KEY);
  const browser = (navigator.language || 'nl').slice(0, 2).toLowerCase();
  const lang = saved || (I18N[browser] ? browser : 'nl');
  // Vroege apply (voor DOM ready)
  document.addEventListener('DOMContentLoaded', () => {
    applyLang(lang);
    // Bind switcher
    document.querySelectorAll('.lang-trigger').forEach(trigger => {
      trigger.addEventListener('click', (e) => {
        e.stopPropagation();
        const expanded = trigger.getAttribute('aria-expanded') === 'true';
        document.querySelectorAll('.lang-trigger').forEach(t => t.setAttribute('aria-expanded', 'false'));
        trigger.setAttribute('aria-expanded', String(!expanded));
      });
    });
    document.querySelectorAll('.lang-option').forEach(opt => {
      opt.addEventListener('click', (e) => {
        e.stopPropagation();
        applyLang(opt.dataset.lang);
        document.querySelectorAll('.lang-trigger').forEach(t => t.setAttribute('aria-expanded', 'false'));
      });
    });
    document.addEventListener('click', () => {
      document.querySelectorAll('.lang-trigger').forEach(t => t.setAttribute('aria-expanded', 'false'));
    });
  });
})();

// ================ NOOT — Customer accounts verwijderd ================
// Customer accounts zijn niet meer in gebruik. Spida heeft alleen admin-toegang
// via admin.html (eigen wachtwoord-systeem). De nav heeft geen account/Sign-in
// button meer voor klanten — die komen direct in via de site of het contactformulier.
// admin.html URL is privé en niet gelinkt vanaf de UI.

// Pre-fill contact form via ?service=X URL param (bv. vanaf tarieven sectie)
(function prefillContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;
  const params = new URLSearchParams(location.search);
  const wanted = params.get('service');
  if (wanted) {
    const select = form.querySelector('select[name="service"]');
    if (select) {
      const match = Array.from(select.options).find(o =>
        o.value && o.value.toLowerCase() === wanted.toLowerCase()
      );
      if (match) {
        select.value = match.value;
        select.style.borderColor = 'var(--text)';
        setTimeout(() => { select.style.borderColor = ''; }, 1800);
      }
    }
  }
})();

// ================ EMAILJS CONFIG ================
// Vul deze 3 waarden in zodra Spida ze heeft op emailjs.com.
// Daarna versturen het contactformulier én de chatbot automatisch mails naar Spidabuissnes@hotmail.com.
// Gratis tier: 200 mails/maand.
const EMAILJS_CONFIG = {
  publicKey:  'tEwWhluSNJ07ZeFGb',
  serviceId:  'service_dn71xmk',
  templateId: 'template_z9bc4ta'
};

const EMAILJS_READY = !!(
  window.emailjs &&
  EMAILJS_CONFIG.publicKey &&
  EMAILJS_CONFIG.serviceId &&
  EMAILJS_CONFIG.templateId
);
if (EMAILJS_READY) {
  emailjs.init({ publicKey: EMAILJS_CONFIG.publicKey });
}

async function sendMail(params) {
  if (!EMAILJS_READY) return { ok: false, reason: 'not-configured' };
  try {
    await emailjs.send(EMAILJS_CONFIG.serviceId, EMAILJS_CONFIG.templateId, params);
    return { ok: true };
  } catch (err) {
    return { ok: false, reason: 'error', err };
  }
}

// Mailto-fallback: opent mail-app met alles ingevuld als EmailJS faalt
function openMailtoFallback(toEmail, subject, body) {
  const url = 'mailto:' + toEmail +
    '?subject=' + encodeURIComponent(subject) +
    '&body=' + encodeURIComponent(body);
  window.location.href = url;
}

// ================ INSTAGRAM THUMBNAILS (via thum.io screenshot service) ================
// Instagram heeft geen publieke thumbnail API meer (sinds 2020). thum.io maakt een
// live screenshot van de Reel-pagina. Eerste laad kan paar seconden duren.
// Als IG een login-overlay toont kun je manueel een screenshot uploaden naar ImgBB
// en de URL hier hardcoden in plaats van de gradient.
(function loadInstagramThumbnails() {
  const items = document.querySelectorAll('.work-item[href*="instagram.com"]');
  items.forEach(item => {
    // Skip als er al een handmatig ingestelde thumbnail is
    if (item.querySelector('.work-thumb-img')) return;
    const url = item.href.split('?')[0];
    const screenshotUrl = `https://image.thum.io/get/width/640/crop/900/maxAge/2880/${url}`;
    const img = document.createElement('img');
    img.className = 'work-thumb-img work-thumb-img--fetched';
    img.src = screenshotUrl;
    img.alt = '';
    img.loading = 'lazy';
    img.referrerPolicy = 'no-referrer';
    img.onerror = () => img.remove();
    item.insertBefore(img, item.firstChild);
    const placeholder = item.querySelector('.work-thumb--ig');
    if (placeholder) placeholder.style.opacity = '0';
  });
})();

// ================ TIKTOK THUMBNAILS (auto-fetch via oEmbed) ================
// TikTok's publieke oEmbed API levert de echte thumbnail van elke video.
// Werkt voor video-URLs (vm.tiktok.com/... of tiktok.com/@user/video/...).
// Profiel-URLs (alleen @user) worden overgeslagen — die hebben geen video frame.
(async function loadTikTokThumbnails() {
  const items = document.querySelectorAll('.work-item[href*="tiktok.com"]');
  for (const item of items) {
    // Skip als er al een handmatig ingestelde thumbnail is
    if (item.querySelector('.work-thumb-img')) continue;
    const url = item.href;
    // Skip profiel URLs (hebben geen specifieke video)
    if (url.match(/tiktok\.com\/@[^/]+\/?(\?|$)/)) continue;
    try {
      const res = await fetch('https://www.tiktok.com/oembed?url=' + encodeURIComponent(url));
      if (!res.ok) continue;
      const data = await res.json();
      if (data && data.thumbnail_url) {
        const img = document.createElement('img');
        img.className = 'work-thumb-img work-thumb-img--fetched';
        img.src = data.thumbnail_url;
        img.alt = '';
        img.loading = 'lazy';
        img.referrerPolicy = 'no-referrer';
        // Plaats voor andere kinderen zodat het de hele card vult
        item.insertBefore(img, item.firstChild);
        // Verberg de gradient placeholder
        const placeholder = item.querySelector('.work-thumb--tt, .work-thumb--kgb');
        if (placeholder) placeholder.style.opacity = '0';
      }
    } catch (e) { /* fallback: gradient blijft staan */ }
  }
})();

// ================ BEZOEKERS TRACKING ================
// Telt bezoeken in localStorage. Zonder backend kan dit alleen per browser/apparaat.
// Voor globale stats: voeg later GoatCounter, Plausible of Umami toe.
(function trackVisit() {
  try {
    const VISITS_KEY = 'spida_visits';
    const visits = JSON.parse(localStorage.getItem(VISITS_KEY) || '[]');
    const page = (location.pathname.split('/').pop() || 'index.html').replace(/\.html$/, '') || 'index';
    // Niet dubbel tellen binnen sessie voor dezelfde pagina
    const sessionKey = 'spida_session_' + page;
    if (!sessionStorage.getItem(sessionKey)) {
      visits.push({
        date: new Date().toISOString(),
        page,
        ref: document.referrer || null
      });
      // Houd alleen laatste 2000 om bloat te voorkomen
      if (visits.length > 2000) visits.splice(0, visits.length - 2000);
      localStorage.setItem(VISITS_KEY, JSON.stringify(visits));
      sessionStorage.setItem(sessionKey, '1');
    }
    // Heartbeat voor "live nu" detectie
    const heartbeat = () => sessionStorage.setItem('spida_heartbeat', Date.now().toString());
    heartbeat();
    setInterval(heartbeat, 20000);
  } catch (e) { /* localStorage onbeschikbaar */ }
})();

// ================ NAV SCROLL STATE ================
const nav = document.getElementById('nav');
if (nav) {
  const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 20);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

// ================ MOBILE MENU ================
const burger = document.getElementById('burger');
const navLinks = document.querySelector('.nav-links');
if (burger && navLinks) {
  burger.addEventListener('click', () => {
    burger.classList.toggle('open');
    navLinks.classList.toggle('open');
  });
  navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    burger.classList.remove('open');
    navLinks.classList.remove('open');
  }));
}

// ================ HERO ROTATOR ================
const words = [
  'TikToks',
  'Reels',
  'bedrijfsfilms',
  'motion graphics',
  'trailers',
  'showcases',
  'vlog edits'
];
const rotator = document.getElementById('rotator');
let wIndex = 0;
if (rotator) {
  function rotate() {
    rotator.style.opacity = '0';
    rotator.style.transform = 'translateY(-4px)';
    setTimeout(() => {
      wIndex = (wIndex + 1) % words.length;
      rotator.textContent = words[wIndex];
      rotator.style.opacity = '1';
      rotator.style.transform = 'translateY(0)';
    }, 220);
  }
  setInterval(rotate, 2400);
}

// ================ TIMECODE TICKER ================
const tc = document.getElementById('tc');
if (tc) {
  const start = Date.now();
  const pad = (n, w = 2) => String(n).padStart(w, '0');
  function tick() {
    const elapsed = (Date.now() - start) / 1000;
    const h = Math.floor(elapsed / 3600);
    const m = Math.floor((elapsed % 3600) / 60);
    const s = Math.floor(elapsed % 60);
    const f = Math.floor((elapsed * 24) % 24);
    tc.textContent = `${pad(h)}:${pad(m)}:${pad(s)}:${pad(f)}`;
    requestAnimationFrame(tick);
  }
  tick();
}

// ================ CURSOR GLOW (alleen op desktop, niet op touch) ================
const glow = document.getElementById('cursorGlow');
const isTouchDevice = matchMedia('(hover: none)').matches || 'ontouchstart' in window;
const prefersReducedMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
if (glow && !isTouchDevice && !prefersReducedMotion && window.innerWidth > 980) {
  let mouseX = window.innerWidth / 2, mouseY = window.innerHeight / 2;
  let curX = mouseX, curY = mouseY;
  let isAnimating = false;
  let firstMove = true;

  // Init: positie center maar onzichtbaar tot eerste muis beweging
  glow.style.opacity = '0';
  glow.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
  glow.style.transition = 'opacity .35s ease';

  function raf() {
    curX += (mouseX - curX) * 0.14;
    curY += (mouseY - curY) * 0.14;
    glow.style.transform = `translate3d(${curX}px, ${curY}px, 0) translate(-50%, -50%)`;
    if (Math.abs(mouseX - curX) > 0.3 || Math.abs(mouseY - curY) > 0.3) {
      requestAnimationFrame(raf);
    } else {
      isAnimating = false;
    }
  }

  window.addEventListener('mousemove', e => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    if (firstMove) {
      firstMove = false;
      glow.style.opacity = '0.7';
    }
    if (!isAnimating) { isAnimating = true; requestAnimationFrame(raf); }
  }, { passive: true });
} else if (glow) {
  // Geen cursor-glow nodig op touch / mobile — verwijder uit DOM
  glow.remove();
}

// ================ WORK CARD COLORS ================
document.querySelectorAll('.work-item').forEach(item => {
  const c = item.dataset.color;
  if (c) {
    item.style.setProperty('--c1', c);
    item.style.setProperty('--c2', shift(c, -40));
  }
});
function shift(hex, amount) {
  const n = parseInt(hex.slice(1), 16);
  let r = (n >> 16) + amount, g = ((n >> 8) & 0xff) + amount, b = (n & 0xff) + amount;
  r = Math.max(0, Math.min(255, r));
  g = Math.max(0, Math.min(255, g));
  b = Math.max(0, Math.min(255, b));
  return '#' + ((r << 16) | (g << 8) | b).toString(16).padStart(6, '0');
}

// ================ REVEAL ON SCROLL ================
const revealEls = document.querySelectorAll('.section-head, .service-card, .work-item, .review-card, .process li, .about-copy, .about-card, .faq details, .timeline');
revealEls.forEach(el => el.classList.add('reveal'));
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });
revealEls.forEach(el => io.observe(el));

// ================ LEAD STORAGE (gedeeld door form + chatbot) ================
const LEADS_KEY = 'spida_leads';
function saveLead(lead) {
  try {
    const leads = JSON.parse(localStorage.getItem(LEADS_KEY) || '[]');
    leads.push(lead);
    localStorage.setItem(LEADS_KEY, JSON.stringify(leads));
  } catch (e) { /* localStorage onbeschikbaar */ }
}
function makeId() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
}

// ================ CONTACT FORM (alleen op contact.html) ================
const form = document.getElementById('contactForm');
const status = document.getElementById('formStatus');
if (form) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const name = (data.get('name') || '').toString().trim();
    if (!name) return;

    const lead = {
      id: makeId(),
      date: new Date().toISOString(),
      source: 'form',
      status: 'new',
      name,
      company: (data.get('company') || '').toString().trim(),
      email: (data.get('email') || '').toString().trim(),
      service: (data.get('service') || '').toString(),
      budget: (data.get('budget') || '').toString(),
      deadline: (data.get('deadline') || '').toString().trim(),
      message: (data.get('message') || '').toString().trim(),
      foundUs: (data.get('source') || '').toString()
    };

    // 1. Bewaar voor admin paneel
    saveLead(lead);

    status.textContent = '// VERZENDEN...';
    const submitBtn = form.querySelector('button[type="submit"]');
    if (submitBtn) submitBtn.disabled = true;

    // 2. Probeer mail te versturen via EmailJS
    // Alleen velden meesturen als ze gevuld zijn (lege velden verschijnen niet in de mail)
    const params = {
      from_name:  lead.name,
      from_email: lead.email,
      message:    lead.message || '(geen bericht)',
      source:     'Offerte aanvraag'
    };
    if (lead.company)  params.company  = lead.company;
    if (lead.service)  params.service  = lead.service;
    if (lead.budget)   params.budget   = lead.budget;
    if (lead.deadline) params.deadline = lead.deadline;
    if (lead.foundUs)  params.found_us = lead.foundUs;
    const result = await sendMail(params);

    if (result.ok) {
      status.textContent = `// ✓ BEDANKT, ${name.split(' ')[0].toUpperCase()}! JE AANVRAAG IS VERSTUURD — WE REAGEREN BINNEN 1 WERKDAG.`;
      form.reset();
    } else if (result.reason === 'not-configured') {
      // EmailJS keys nog niet ingevuld — alleen lokaal opgeslagen
      status.textContent = `// BEDANKT, ${name.split(' ')[0].toUpperCase()}! AANVRAAG ONTVANGEN (TEST MODUS — VOEG EMAILJS KEYS TOE OM ECHT TE VERSTUREN).`;
      form.reset();
    } else {
      // Echt iets mis — open mail-app als fallback zodat aanvraag niet verloren gaat
      const subject = 'Offerte aanvraag — ' + lead.name;
      const body =
        `Naam: ${lead.name}\n` +
        `Bedrijf: ${lead.company || '—'}\n` +
        `E-mail: ${lead.email}\n` +
        `Type project: ${lead.service || '—'}\n` +
        `Budget: ${lead.budget || '—'}\n` +
        `Deadline: ${lead.deadline || '—'}\n` +
        `Hoe gevonden: ${lead.foundUs || '—'}\n\n` +
        `Bericht:\n${lead.message || '(geen)'}\n`;
      status.textContent = '// MAIL-APP GEOPEND ALS BACK-UP — BEVESTIG JE BERICHT';
      openMailtoFallback('Spidabuissnes@hotmail.com', subject, body);
    }

    if (submitBtn) submitBtn.disabled = false;
  });
}

// ================ FOOTER YEAR ================
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// ================ CHATBOT ================
const chatbotToggle = document.getElementById('chatbotToggle');
const chatbotPanel = document.getElementById('chatbotPanel');
const chatbotClose = document.getElementById('chatbotClose');
const chatbotMessages = document.getElementById('chatbotMessages');
const chatbotQuick = document.getElementById('chatbotQuick');
const chatbotFormEl = document.getElementById('chatbotForm');
const chatbotText = document.getElementById('chatbotText');

if (chatbotToggle && chatbotPanel) {

  // Knowledge base — Spida website kennis (FAQ + navigatie + diensten + bedrijfsinfo)
  const KB = [
    /* === PRIJZEN === */
    {
      keywords: ['prijs', 'prijzen', 'kost', 'kosten', 'tarief', 'tarieven', 'budget', 'goedkoop', '€', 'euro', 'eur'],
      reply: 'Onze tarieven:\n\n• 20× Shorts / Reels — €150 (pakket)\n• Vlog edit (5–35 min) — €75–€200 per vlog\n• Bedrijfsvideo — €35–€100\n\nVolledige tarievenlijst staat op de homepage onder "Tarieven". Voor andere wensen of grotere projecten: vraag een persoonlijke offerte aan via "Offerte aanvragen" rechts boven.'
    },
    /* === DOORLOOPTIJD === */
    {
      keywords: ['hoe lang', 'oplever', 'wanneer klaar', 'wanneer af', 'doorlooptijd', 'levertijd', 'snel', 'spoed', 'haast'],
      reply: 'Reguliere producties leveren we binnen 2 tot 4 weken na een goedgekeurd concept. Korte content kan sneller, en spoedopdrachten bespreken we individueel.\n\nVoor het volledige proces (6 stappen) → kijk op de homepage, sectie "Proces".'
    },
    /* === LOCATIE === */
    {
      keywords: ['buitenland', 'locatie', 'waar zit', 'vestiging', 'reizen', 'reiskosten', 'gevestigd', 'kantoor', 'studio', 'stad', 'plaats'],
      reply: 'We werken uitsluitend in Nederland 🇳🇱. Onze studio zit in Groningen. Daardoor houden we communicatie kort en reiskosten laag.'
    },
    /* === RECHTEN === */
    {
      keywords: ['rechten', 'eigenaar', 'gebruiksrecht', 'auteurs', 'copyright', 'eigendom'],
      reply: 'Jij krijgt bij oplevering de volledige gebruiksrechten voor het overeengekomen doel. Wij behouden alleen het recht om het werk in ons portfolio te laten zien.'
    },
    /* === REVISIES === */
    {
      keywords: ['revisie', 'aanpassing', 'wijzigen', 'feedback', 'verandering', 'aanpassen'],
      reply: 'Twee revisierondes zijn standaard inbegrepen bij elke productie. Extra rondes zijn altijd mogelijk en factureren we per uur.'
    },
    /* === ABONNEMENT === */
    {
      keywords: ['abonnement', 'maandelijks', 'pakket', 'doorlopend', 'structureel', 'maandpakket', 'subscription'],
      reply: 'Ja! We bieden maandelijkse content packages voor merken met een structurele videobehoefte. Vraag een offerte aan voor de pakketten.'
    },
    /* === HOE BEGINNEN === */
    {
      keywords: ['begin', 'beginnen', 'starten', 'samenwerken', 'eerste stap', 'hoe werkt', 'aanvragen'],
      reply: 'Heel simpel:\n\n1. Vul het contact-formulier in op de Contact pagina, of mail naar Spidabuissnes@hotmail.com\n2. Je krijgt binnen 1 werkdag een eerlijke offerte met concept-richting per mail\n3. Bij groen licht starten we direct met de productie\n\nGeen verplichte vergaderingen, gewoon to-the-point.'
    },
    /* === DIENSTEN OVERZICHT === */
    {
      keywords: ['dienst', 'diensten', 'wat doen', 'wat maak', 'aanbod', 'service', 'services', 'wat bied', 'overzicht'],
      reply: 'We bieden 7 diensten:\n\n• TikTok & Reels — verticale content\n• Vlog Edits — pacing/color/sound\n• Long Form — bedrijfsfilms\n• Showcases — productvideo\'s\n• Trailers — events & launches\n• Motion Graphics — animatie & After Effects\n• Edit Work — pure montage\n\nKlik op "Diensten" in de navigatie bovenaan voor alle details, of bezoek diensten.html.'
    },
    /* === SPECIFIEKE DIENSTEN === */
    {
      keywords: ['tiktok', 'reels', 'shorts', 'verticaal', '9:16', 'short form'],
      reply: 'TikTok & Reels is onze specialiteit. Verticale content die scrollen stopt — native voor het platform, met de juiste hooks en trending audio. Zie de Diensten pagina voor details.'
    },
    {
      keywords: ['long form', 'bedrijfsfilm', 'merkfilm', 'documentaire', 'lange video', 'corporate'],
      reply: 'Long form: bedrijfsfilms en uitgebreide merkverhalen (5–30+ min). Voor wanneer je écht ruimte nodig hebt om een verhaal te vertellen.'
    },
    {
      keywords: ['motion', 'animatie', 'animeren', 'graphics', 'after effects', 'logo animatie', 'explainer'],
      reply: 'Motion Graphics: title cards, animated logos, lower thirds en explainers. After Effects op maat van jouw merkidentiteit.'
    },
    {
      keywords: ['vlog', 'youtube edit', 'creator content'],
      reply: 'Vlog Edits met pacing, kleur en geluid die kijkers vasthouden. Voor creators en merken die regelmatig content uitbrengen.'
    },
    {
      keywords: ['edit only', 'edit work', 'alleen monteren', 'zelf gefilmd', 'mijn footage', 'pure montage'],
      reply: 'Edit Work: heb je zelf gefilmd? Wij maken er iets sterks van. Pure montage met zorg voor pacing, kleur en geluid.'
    },
    {
      keywords: ['trailer', 'event', 'lancering', 'aankondiging', 'campagne'],
      reply: 'Trailers: aankondigingen voor evenementen, lanceringen en campagnes. Maximale impact in 30–90 seconden.'
    },
    {
      keywords: ['showcase', 'productvideo', 'product video', 'b2b'],
      reply: 'Showcases: productvideo\'s en bedrijfspresentaties die diensten en producten in de spotlight zetten — verkoopklaar.'
    },
    /* === PORTFOLIO / WERK === */
    {
      keywords: ['portfolio', 'werk', 'projecten', 'voorbeelden', 'eerder werk', 'cases', 'gemaakt', 'reels van jullie', 'voorbeeld', 'showreel'],
      reply: 'Het volledige portfolio staat op de Werk pagina (klik op "Werk" in de navigatie of ga naar werk.html). Daar vind je 8+ projecten gefilterd per platform: YouTube, TikTok en Instagram. Op de homepage zie je ook een uitgelichte selectie.'
    },
    {
      keywords: ['kgb', 'customs', 'auto'],
      reply: 'KGB Customs is een van onze TikTok projecten — automotive customizer waar we on-set camera-werk en opnamen voor doen. Zie hem in actie op @kbgcustomz of in onze portfolio op werk.html.'
    },
    {
      keywords: ['cafe', 'horeca', 'eetcafe', 'restaurant', 'döner', 'doner'],
      reply: 'Eetcafe De Hoek is een van onze horeca-projecten — TikTok content met BTS van CAG-Döner. Te vinden op werk.html.'
    },
    /* === SOCIAL / VOLGEN === */
    {
      keywords: ['instagram', 'insta', 'volg', 'volgen', 'social', 'sociale media'],
      reply: 'Volg ons op:\n• Instagram: @spida_visualz\n• TikTok: @spidavisuals\n• YouTube: @spidaline_jackson_abbouzaad97\n\nLinks staan onderaan elke pagina in de footer.'
    },
    {
      keywords: ['tiktok account', 'tiktok kanaal', 'jullie tiktok'],
      reply: 'Onze TikTok is @spidavisuals — link onderaan elke pagina in de footer.'
    },
    {
      keywords: ['youtube kanaal', 'youtube account', 'jullie youtube'],
      reply: 'Onze YouTube is @spidaline_jackson_abbouzaad97 — link onderaan in de footer.'
    },
    /* === CONTACT === */
    {
      keywords: ['contact', 'bereiken', 'bellen', 'telefoon', 'mail ', 'email', 'adres', 'mailadres', 'e-mail'],
      reply: 'Mail naar Spidabuissnes@hotmail.com of vul het contact-formulier in op de Contact pagina (klik "Offerte aanvragen" rechtsboven). We reageren binnen 1 werkdag.'
    },
    /* === ACCOUNT === */
    {
      keywords: ['account', 'inloggen', 'registreren', 'sign in', 'sign up', 'aanmelden', 'mijn account', 'profiel'],
      reply: 'We werken niet met klant-accounts — geen registratie nodig om iets aan te vragen. Vul gewoon het contactformulier in op de Contact pagina, dan reageren we binnen 1 werkdag.'
    },
    /* === SECTIE NAVIGATIE === */
    {
      keywords: ['proces', 'hoe gaat dat', 'stappen', 'workflow', 'stap voor stap'],
      reply: 'Ons proces is 6 stappen: Briefing ontvangen → Concept & script → Pre-productie → Opnamedag(en) → Montage & oplevering → Distributie-advies. Geen verplichte gesprekken — gewoon to-the-point. Volledige uitleg op de homepage onder "Proces".'
    },
    {
      keywords: ['over', 'wie zijn jullie', 'over ons', 'about', 'team', 'wie is spida'],
      reply: 'Spida Visuals is een Nederlandse video- en motion studio. Een jonge studio met grote ambitie: scherpe tarieven, frisse ideeën, en de honger om elk project beter te doen dan het vorige. We werken alleen in Nederland. Lees meer in de "Over" sectie op de homepage.'
    },
    {
      keywords: ['faq', 'veelgestelde', 'vragen'],
      reply: 'Stel je vraag aan mij — ik weet alles over prijzen, doorlooptijd, rechten, revisies, diensten en meer. Of mail direct naar Spidabuissnes@hotmail.com.'
    },
    {
      keywords: ['reviews', 'beoordelingen', 'testimonials', 'ervaringen'],
      reply: 'We hebben een 5.0/5 rating op basis van 47+ reviews. Te zien op de homepage onder "Reviews" — echte reacties van klanten over de samenwerking.'
    },
    /* === BETALING === */
    {
      keywords: ['betaling', 'betalen', 'factuur', 'aanbetaling', 'btw', 'kvk'],
      reply: 'Standaard 50% aanbetaling bij start, 50% bij oplevering. Factuur via mail. Spida Visuals is ingeschreven bij KvK met geldig BTW-nummer.'
    },
    /* === GREETING / SOCIAL === */
    {
      keywords: ['hallo', 'hoi', 'hey', 'hi', 'goedemorgen', 'goedemiddag', 'goedenavond', 'yo', 'hee'],
      reply: 'Hoi! 👋 Waarmee kan ik je helpen? Vraag bijvoorbeeld naar prijzen, diensten, het portfolio, of hoe je begint.'
    },
    {
      keywords: ['bedankt', 'dank je', 'dankjewel', 'thanks', 'thx', 'merci', 'top'],
      reply: 'Graag gedaan! 🙌 Nog vragen? Stel ze gerust. Of klik rechtsboven op "Offerte aanvragen" om je project te starten.'
    },
    {
      keywords: ['help', 'helpen', 'wat kan'],
      reply: 'Ik kan je helpen met info over:\n\n• Prijzen & doorlooptijd\n• Onze 7 diensten\n• Het portfolio (werk.html)\n• Hoe je begint\n• Contact info\n• Account aanmaken\n\nWat wil je weten?'
    }
  ];

  const QUICK_REPLIES = [
    'Wat kost het?',
    'Bekijk portfolio',
    'Welke diensten?',
    'Hoe begin ik?'
  ];

  // State
  let conversation = [];
  let mode = 'chat'; // 'chat' | 'esc-confirm' | 'esc-name' | 'esc-email' | 'esc-ready'
  let pendingQuestion = '';
  let userName = '';
  let userEmail = '';
  let inited = false;

  function init() {
    if (inited) return;
    inited = true;
    botSay('Hoi! 👋 Ik ben de Spida assistent. Stel je vraag — of kies hieronder een onderwerp.');
    showQuickReplies(QUICK_REPLIES);
  }

  function botSay(text) {
    showTyping();
    setTimeout(() => {
      hideTyping();
      addMessage('bot', text);
    }, 500 + Math.min(text.length * 8, 800));
  }

  function botSayInstant(text) {
    addMessage('bot', text);
  }

  function userSay(text) {
    addMessage('user', text);
  }

  function addMessage(who, text) {
    conversation.push({ who, text });
    const el = document.createElement('div');
    el.className = 'chatbot-msg chatbot-msg--' + who;
    el.textContent = text;
    chatbotMessages.appendChild(el);
    scrollToBottom();
  }

  function showTyping() {
    hideTyping();
    const el = document.createElement('div');
    el.className = 'chatbot-typing';
    el.id = 'chatbotTyping';
    el.innerHTML = '<span></span><span></span><span></span>';
    chatbotMessages.appendChild(el);
    scrollToBottom();
  }
  function hideTyping() {
    const el = document.getElementById('chatbotTyping');
    if (el) el.remove();
  }

  function scrollToBottom() {
    requestAnimationFrame(() => {
      chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    });
  }

  function showQuickReplies(replies) {
    chatbotQuick.innerHTML = '';
    replies.forEach(r => {
      const isObj = typeof r === 'object';
      const btn = document.createElement('button');
      btn.className = 'chatbot-chip';
      btn.type = 'button';
      btn.textContent = isObj ? r.label : r;
      btn.addEventListener('click', () => {
        chatbotQuick.innerHTML = '';
        if (isObj && r.action) {
          if (r.echo !== false) userSay(r.label);
          r.action();
        } else {
          userSay(r);
          handleUserInput(r);
        }
      });
      chatbotQuick.appendChild(btn);
    });
  }

  function findAnswer(input) {
    const lower = input.toLowerCase();
    let best = null;
    let bestScore = 0;
    for (const item of KB) {
      const score = item.keywords.filter(k => lower.includes(k)).length;
      if (score > bestScore) {
        bestScore = score;
        best = item;
      }
    }
    return best ? best.reply : null;
  }

  function handleUserInput(text) {
    const answer = findAnswer(text);
    if (answer) {
      botSay(answer);
      setTimeout(() => {
        showQuickReplies([
          'Nog een vraag',
          { label: '📩 Mail het team', action: startEscalate }
        ]);
      }, 1200);
    } else {
      pendingQuestion = text;
      botSay('Hmm, daar weet ik zo geen antwoord op. Wil je dat ik je vraag doorstuur naar het Spida team? Zij reageren binnen 1 werkdag.');
      setTimeout(() => {
        mode = 'esc-confirm';
        showQuickReplies([
          { label: '📩 Ja, mail mijn vraag', action: startEscalate },
          { label: 'Nee, andere vraag', action: () => { mode = 'chat'; botSay('Geen probleem — stel je vraag opnieuw of kies hieronder.'); setTimeout(() => showQuickReplies(QUICK_REPLIES), 1200); } }
        ]);
      }, 1200);
    }
  }

  function startEscalate() {
    if (!pendingQuestion) {
      pendingQuestion = conversation.filter(m => m.who === 'user').map(m => m.text).join(' / ') || '(geen specifieke vraag)';
    }
    mode = 'esc-name';
    botSay('Top! Wat is je naam?');
  }

  function handleSend(text) {
    if (mode === 'esc-name') {
      userName = text;
      userSay(text);
      mode = 'esc-email';
      botSay('Bedankt ' + userName.split(' ')[0] + '! En je e-mailadres? (zodat het team je kan terugmailen)');
    } else if (mode === 'esc-email') {
      if (!/^\S+@\S+\.\S+$/.test(text)) {
        userSay(text);
        botSay('Hmm, dat lijkt geen geldig e-mailadres. Probeer het nog eens.');
        return;
      }
      userEmail = text;
      userSay(text);
      mode = 'esc-ready';
      botSay('Top! Klik op de knop hieronder, dan open ik je mail-app met je vraag al ingevuld. Bevestig de mail om hem te versturen naar Spidabuissnes@hotmail.com.');
      setTimeout(() => {
        showQuickReplies([
          { label: '📨 Mail naar Spida sturen', action: sendEmail, echo: false }
        ]);
      }, 1300);
    } else {
      userSay(text);
      handleUserInput(text);
    }
  }

  async function sendEmail() {
    // 1. Sla op voor admin paneel
    const conversationText = conversation.map(m => {
      const who = m.who === 'bot' ? 'Spida Bot' : (userName || 'Klant');
      return who + ': ' + m.text;
    }).join('\n');
    saveLead({
      id: makeId(),
      date: new Date().toISOString(),
      source: 'chatbot',
      status: 'new',
      name: userName,
      email: userEmail,
      message: pendingQuestion,
      conversation: conversationText
    });

    // 2. Probeer via EmailJS — alleen kernvelden, geen lege placeholders
    const params = {
      from_name:  userName,
      from_email: userEmail,
      message:    pendingQuestion + '\n\n--- Volledige conversatie ---\n' + conversationText,
      source:     'Chatbot vraag'
    };
    botSay('Bezig met versturen...');
    const result = await sendMail(params);

    if (result.ok) {
      botSay('✓ Verstuurd! Het Spida team heeft je vraag ontvangen en reageert binnen 1 werkdag op ' + userEmail + '.');
    } else {
      // Fallback: open mail-app
      const subject = 'Vraag via website chatbot — ' + (userName || 'Klant');
      const body =
        'Hoi Spida team,\n\n' +
        'Iemand stelde een vraag via de chatbot op de website:\n\n' +
        'Naam: ' + (userName || '(niet opgegeven)') + '\n' +
        'E-mail: ' + (userEmail || '(niet opgegeven)') + '\n\n' +
        'Vraag:\n' + pendingQuestion + '\n\n' +
        '--- Volledige conversatie ---\n' + conversationText + '\n\n' +
        '--\nVerstuurd via spidavisuals.nl chatbot';
      openMailtoFallback('Spidabuissnes@hotmail.com', subject, body);
      botSay('Mail-app geopend als back-up. Bevestig de mail om je vraag naar Spida te sturen.');
    }

    setTimeout(() => {
      showQuickReplies([
        { label: 'Nieuw gesprek', action: resetChat, echo: false }
      ]);
      mode = 'chat';
    }, 1500);
  }

  function resetChat() {
    chatbotMessages.innerHTML = '';
    chatbotQuick.innerHTML = '';
    conversation = [];
    pendingQuestion = '';
    userName = '';
    userEmail = '';
    mode = 'chat';
    inited = false;
    init();
  }

  // Open / close
  chatbotToggle.addEventListener('click', () => {
    const isOpen = chatbotPanel.classList.toggle('open');
    chatbotPanel.setAttribute('aria-hidden', String(!isOpen));
    chatbotToggle.classList.toggle('hidden', isOpen);
    if (isOpen) {
      init();
      setTimeout(() => chatbotText.focus(), 280);
    }
  });

  chatbotClose.addEventListener('click', () => {
    chatbotPanel.classList.remove('open');
    chatbotPanel.setAttribute('aria-hidden', 'true');
    chatbotToggle.classList.remove('hidden');
  });

  chatbotFormEl.addEventListener('submit', (e) => {
    e.preventDefault();
    const text = chatbotText.value.trim();
    if (!text) return;
    chatbotText.value = '';
    chatbotQuick.innerHTML = '';
    handleSend(text);
  });
}
