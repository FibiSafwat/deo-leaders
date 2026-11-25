// DEO Leaders website assistant — free FAQ chatbot (no AI, no server, no API key).
// Answers come from the FAQ list below, in English, German and Arabic.
// To change what it says, edit the FAQ entries: each has keywords and answers per language.
(function () {
  "use strict";

  var EMAIL = "deoleaders@deokairo.de";

  // ── Interface text ─────────────────────────────────────────────────────────
  var UI = {
    en: { title: "DEO Leaders Assistant", sub: "Questions about the network & membership",
      hello: "Hi! I can answer questions about DEO Leaders, membership and how to apply. Pick a topic or type your question.",
      ph: "Type your question…", send: "Send", open: "Open chat", close: "Close chat",
      more: "Other questions you can ask:", apply: "Apply now →", login: "Member login →", mail: "Email us" },
    de: { title: "DEO Leaders Assistent", sub: "Fragen zum Netzwerk & zur Mitgliedschaft",
      hello: "Hallo! Ich beantworte Fragen zu DEO Leaders, zur Mitgliedschaft und zur Bewerbung. Wähle ein Thema oder schreib deine Frage.",
      ph: "Deine Frage…", send: "Senden", open: "Chat öffnen", close: "Chat schließen",
      more: "Weitere Fragen:", apply: "Jetzt bewerben →", login: "Mitglieder-Login →", mail: "E-Mail schreiben" },
    ar: { title: "مساعد DEO Leaders", sub: "أسئلة عن الشبكة والعضوية",
      hello: "مرحبًا! أستطيع الإجابة عن أسئلتك حول DEO Leaders والعضوية وطريقة التقديم. اختر موضوعًا أو اكتب سؤالك.",
      ph: "اكتب سؤالك…", send: "إرسال", open: "فتح المحادثة", close: "إغلاق المحادثة",
      more: "أسئلة أخرى يمكنك طرحها:", apply: "قدّم الآن ←", login: "دخول الأعضاء ←", mail: "راسلنا" }
  };

  // ── FAQ ────────────────────────────────────────────────────────────────────
  // keywords: lowercase words or word-starts; matching ignores accents and Arabic diacritics.
  // action: optional button under the answer ("apply", "login" or "mail").
  var FAQ = [
    { id: "about", chip: { en: "What is DEO Leaders?", de: "Was ist DEO Leaders?", ar: "ما هي DEO Leaders؟" },
      keywords: ["deo leaders", "about you", "about deo", "alumni", "network", "wer seid", "uber euch", "netzwerk", "من انتم", "شبكة", "الشبكة", "خريجين"],
      a: {
        en: "DEO Leaders is the exclusive alumni network of the Deutsche Evangelische Oberschule (DEO) Cairo, founded in 2026. It connects DEO founders, executives and diplomats across Egypt, Germany and the world — building relationships, driving investment and honouring the school's legacy. Our motto: “Powering Connections to Create Bigger Impact”.",
        de: "DEO Leaders ist das exklusive Alumni-Netzwerk der Deutschen Evangelischen Oberschule (DEO) Kairo, gegründet 2026. Es verbindet DEO-Gründer, Führungskräfte und Diplomaten in Ägypten, Deutschland und weltweit – um Beziehungen aufzubauen, Investitionen voranzutreiben und das Erbe der Schule zu würdigen. Unser Motto: „Powering Connections to Create Bigger Impact“.",
        ar: "‏DEO Leaders هي شبكة الخريجين الحصرية للمدرسة الألمانية الإنجيلية (DEO) بالقاهرة، تأسست عام 2026. تربط مؤسسي الأعمال والتنفيذيين والدبلوماسيين من خريجي المدرسة في مصر وألمانيا والعالم، لبناء العلاقات ودعم الاستثمار وتكريم إرث المدرسة. شعارنا: «Powering Connections to Create Bigger Impact»."
      } },
    { id: "join", chip: { en: "How do I join?", de: "Wie werde ich Mitglied?", ar: "كيف أنضم؟" }, action: "apply",
      keywords: ["join", "apply", "application", "member", "membership", "sign up", "register", "become", "eligib", "beitreten", "bewerb", "mitglied", "anmeld", "registrier", "انضم", "انضمام", "اشترك", "اشتراك", "تقديم", "اقدم", "قدم", "عضوي", "عضو", "تسجيل", "سجل"],
      a: {
        en: "Click “Apply for Membership” on the website and fill in the application form. The DEO Leaders team reviews every application and will get back to you after the review.",
        de: "Klicke auf der Website auf „Mitgliedschaft beantragen“ und fülle das Bewerbungsformular aus. Das DEO Leaders Team prüft jede Bewerbung und meldet sich nach der Prüfung bei dir.",
        ar: "اضغط على «التقديم للعضوية» في الموقع واملأ نموذج الطلب. يراجع فريق DEO Leaders كل طلب وسيتواصل معك بعد المراجعة."
      } },
    { id: "benefits", boost: 1, chip: { en: "Membership benefits", de: "Vorteile der Mitgliedschaft", ar: "مزايا العضوية" },
      keywords: ["benefit", "perk", "advantage", "why join", "vorteil", "leistung", "warum", "bieten", "ميز", "مزايا", "فوائد", "فائدة", "لماذا", "ماذا احصل"],
      a: {
        en: "Members get:\n• Exclusive events — early access to DEO Leaders events, alumni gatherings and private networking dinners\n• Curated networking with 2,000+ verified alumni leaders\n• Member perks — job board, investment opportunities (Deal Room), mentorship and co-founder matching\n• Brand & visibility — features in our media coverage, interviews and alumni spotlights",
        de: "Mitglieder erhalten:\n• Exklusive Veranstaltungen – früher Zugang zu Events, Alumni-Treffen und privaten Networking-Dinners\n• Kuratiertes Networking mit über 2.000 verifizierten Alumni\n• Mitgliedervorteile – Jobbörse, Investitionsmöglichkeiten (Deal Room), Mentoring und Mitgründer-Matching\n• Sichtbarkeit – Auftritte in unseren Medien, Interviews und Alumni-Porträts",
        ar: "يحصل الأعضاء على:\n• فعاليات حصرية — أولوية حضور فعاليات DEO Leaders ولقاءات الخريجين وعشاءات التواصل الخاصة\n• تواصل مع أكثر من 2,000 من قادة الخريجين الموثّقين\n• مزايا الأعضاء — لوحة وظائف، فرص استثمار (Deal Room)، إرشاد، والبحث عن شركاء مؤسسين\n• الظهور الإعلامي — في تغطياتنا الإعلامية ومقابلاتنا وتسليط الضوء على الخريجين"
      } },
    { id: "events", chip: { en: "Events", de: "Veranstaltungen", ar: "الفعاليات" },
      keywords: ["event", "gathering", "dinner", "meetup", "meeting", "when", "veranstalt", "treffen", "termin", "wann", "فعالي", "حدث", "لقاء", "عشاء", "متى"],
      a: {
        en: "DEO Leaders hosts events, alumni gatherings and private networking dinners, and members get early access. Upcoming events are listed in the members' portal. For specific dates, email " + EMAIL + ".",
        de: "DEO Leaders veranstaltet Events, Alumni-Treffen und private Networking-Dinners – Mitglieder erhalten frühen Zugang. Kommende Veranstaltungen findest du im Mitgliederportal. Für konkrete Termine schreib an " + EMAIL + ".",
        ar: "تنظّم DEO Leaders فعاليات ولقاءات للخريجين وعشاءات تواصل خاصة، ويحصل الأعضاء على أولوية الحضور. تجد الفعاليات القادمة في بوابة الأعضاء. لمواعيد محددة راسلنا على " + EMAIL + "."
      } },
    { id: "school", chip: { en: "About the DEO school", de: "Über die DEO", ar: "عن مدرسة DEO" },
      keywords: ["school", "deo", "oberschule", "history", "founded", "1873", "schule", "geschichte", "gegrundet", "مدرس", "المدرسة", "تاريخ", "تأسس", "تاسست"],
      a: {
        en: "The Deutsche Evangelische Oberschule (DEO) in Cairo was founded in 1873. It is one of Egypt's most prestigious schools, with over 150 years of shaping leaders, entrepreneurs and public figures through German-accredited education.",
        de: "Die Deutsche Evangelische Oberschule (DEO) in Kairo wurde 1873 gegründet. Sie zählt zu den renommiertesten Schulen Ägyptens und prägt seit über 150 Jahren Führungspersönlichkeiten, Unternehmer und Persönlichkeiten des öffentlichen Lebens mit deutsch anerkannter Bildung.",
        ar: "تأسست المدرسة الألمانية الإنجيلية (DEO) بالقاهرة عام 1873، وهي من أعرق مدارس مصر، وتخرّج منها على مدى أكثر من 150 عامًا قادة ورواد أعمال وشخصيات عامة بتعليم معتمد ألمانيًا."
      } },
    { id: "partners", chip: { en: "Our partners", de: "Unsere Partner", ar: "شركاؤنا" },
      keywords: ["partner", "embassy", "ahk", "giz", "sponsor", "institution", "botschaft", "شريك", "شركاء", "سفارة", "السفارة", "راعي"],
      a: {
        en: "DEO Leaders works with Germany's leading institutions in Egypt, including the German Embassy Cairo, the AHK (German-Arab Chamber of Industry and Commerce) and GIZ.",
        de: "DEO Leaders arbeitet mit den wichtigsten deutschen Institutionen in Ägypten zusammen, darunter die Deutsche Botschaft Kairo, die AHK (Deutsch-Arabische Industrie- und Handelskammer) und die GIZ.",
        ar: "تتعاون DEO Leaders مع أبرز المؤسسات الألمانية في مصر، ومنها السفارة الألمانية بالقاهرة، وغرفة التجارة والصناعة العربية الألمانية (AHK)، والوكالة الألمانية للتعاون الدولي (GIZ)."
      } },
    { id: "portal", chip: { en: "Member portal & login", de: "Mitgliederportal & Login", ar: "بوابة الأعضاء والدخول" }, action: "login",
      keywords: ["login", "log in", "sign in", "portal", "account", "dashboard", "deal room", "job", "jobs", "jobangebot", "stellen", "vacanc", "career", "anmelden", "einloggen", "konto", "karriere", "دخول", "تسجيل الدخول", "بوابة", "حساب", "وظائف", "وظيفة"],
      a: {
        en: "Members sign in with “Member Login”. The portal includes the newsfeed, Deal Room, careers and job board, the member network, events, perks, your profile and donations.",
        de: "Mitglieder melden sich über „Mitglieder-Login“ an. Im Portal findest du Newsfeed, Deal Room, Karriere & Jobbörse, das Mitgliedernetzwerk, Veranstaltungen, Vorteile, dein Profil und Spenden.",
        ar: "يسجّل الأعضاء الدخول عبر «دخول الأعضاء». تضم البوابة آخر الأخبار وDeal Room ولوحة الوظائف وشبكة الأعضاء والفعاليات والمزايا وملفك الشخصي والتبرعات."
      } },
    { id: "password", boost: 1, chip: { en: "Forgot my password", de: "Passwort vergessen", ar: "نسيت كلمة المرور" }, action: "login",
      keywords: ["password", "forgot", "reset", "can't log", "cannot log", "passwort", "vergessen", "zurucksetzen", "كلمة المرور", "كلمة السر", "نسيت", "استعادة"],
      a: {
        en: "Open “Member Login” and use the forgotten-password link. You'll receive an email with a link to set a new password. If it doesn't arrive, check your spam folder or email " + EMAIL + ".",
        de: "Öffne „Mitglieder-Login“ und nutze den Link „Passwort vergessen“. Du erhältst eine E-Mail mit einem Link zum Festlegen eines neuen Passworts. Falls sie nicht ankommt, prüfe den Spam-Ordner oder schreib an " + EMAIL + ".",
        ar: "افتح «دخول الأعضاء» واستخدم رابط «نسيت كلمة المرور». ستصلك رسالة بريد إلكتروني برابط لتعيين كلمة مرور جديدة. إذا لم تصل، تحقق من مجلد الرسائل غير المرغوب فيها أو راسلنا على " + EMAIL + "."
      } },
    { id: "fees", boost: 1, chip: { en: "Is there a fee?", de: "Kostet die Mitgliedschaft etwas?", ar: "هل توجد رسوم؟" }, action: "mail",
      keywords: ["fee", "cost", "price", "pay", "free", "how much", "kosten", "kostet", "gebuhr", "preis", "bezahl", "رسوم", "تكلفة", "سعر", "كم", "مجان", "ادفع"],
      a: {
        en: "For current membership details, including any fees, please email " + EMAIL + " and the team will answer you.",
        de: "Für aktuelle Details zur Mitgliedschaft, auch zu möglichen Gebühren, schreib bitte an " + EMAIL + " – das Team antwortet dir.",
        ar: "لمعرفة تفاصيل العضوية الحالية بما في ذلك أي رسوم، يُرجى مراسلتنا على " + EMAIL + " وسيرد عليك الفريق."
      } },
    { id: "status", boost: 1, chip: null, action: "mail",
      keywords: ["status", "my application", "heard back", "pending", "approved", "rejected", "accepted", "meine bewerbung", "stand", "حالة", "طلبي", "قبول", "رفض"],
      a: {
        en: "I can't see individual applications. The team reviews each one and replies by email — if you've been waiting a while, write to " + EMAIL + ".",
        de: "Einzelne Bewerbungen kann ich nicht einsehen. Das Team prüft jede Bewerbung und antwortet per E-Mail – wenn du schon länger wartest, schreib an " + EMAIL + ".",
        ar: "لا يمكنني الاطلاع على الطلبات الفردية. يراجع الفريق كل طلب ويرد عبر البريد الإلكتروني — إذا طال انتظارك، راسلنا على " + EMAIL + "."
      } },
    { id: "contact", chip: { en: "Contact us", de: "Kontakt", ar: "تواصل معنا" }, action: "mail",
      keywords: ["contact", "email", "e-mail", "reach", "talk", "human", "someone", "support", "help", "kontakt", "erreichen", "hilfe", "تواصل", "اتواصل", "نتواصل", "اتصل", "اتصال", "ايميل", "بريد", "مساعدة", "شخص"],
      a: {
        en: "You can reach the DEO Leaders team at " + EMAIL + ".",
        de: "Du erreichst das DEO Leaders Team unter " + EMAIL + ".",
        ar: "يمكنك التواصل مع فريق DEO Leaders عبر " + EMAIL + "."
      } },
    { id: "hello", chip: null, small: true,
      keywords: ["hi", "hello", "hey", "good morning", "good evening", "hallo", "guten tag", "servus", "moin", "مرحبا", "اهلا", "السلام", "سلام", "صباح الخير", "مساء الخير"],
      a: {
        en: "Hello! What would you like to know about DEO Leaders?",
        de: "Hallo! Was möchtest du über DEO Leaders wissen?",
        ar: "أهلًا بك! ماذا تود أن تعرف عن DEO Leaders؟"
      } },
    { id: "thanks", chip: null, small: true,
      keywords: ["thank", "thanks", "thx", "great", "perfect", "danke", "super", "prima", "شكرا", "شكر", "ممتاز", "تمام"],
      a: {
        en: "You're welcome! Anything else I can help with?",
        de: "Gern geschehen! Kann ich sonst noch helfen?",
        ar: "على الرحب والسعة! هل يمكنني مساعدتك في شيء آخر؟"
      } }
  ];

  var FALLBACK = {
    en: "Sorry, I don't have an answer for that. Try one of the topics below, or email " + EMAIL + ".",
    de: "Dazu habe ich leider keine Antwort. Probier eines der Themen unten oder schreib an " + EMAIL + ".",
    ar: "عذرًا، لا أملك إجابة عن ذلك. جرّب أحد المواضيع أدناه أو راسلنا على " + EMAIL + "."
  };

  // ── Matching ───────────────────────────────────────────────────────────────
  function normalize(s) {
    return String(s).toLowerCase()
      .replace(/ß/g, "ss")
      .replace(/[أإآ]/g, "ا").replace(/ؤ/g, "و").replace(/ئ/g, "ي")         // before NFD splits off the hamza
      .normalize("NFD").replace(/[̀-ͯ]/g, "")          // ä→a, é→e
      .replace(/[ً-ٕـ]/g, "")                      // Arabic diacritics & tatweel
      .replace(/[أإآ]/g, "ا").replace(/ى/g, "ي").replace(/ة/g, "ه")
      .replace(/[^\p{L}\p{N}\s']/gu, " ")
      .replace(/\s+/g, " ").trim();
  }

  // Prepare keywords once (normalized the same way as the input).
  FAQ.forEach(function (f) { f.keys = f.keywords.map(normalize); });

  function detectLang(text, fallback) {
    if (/[؀-ۿ]/.test(text)) return "ar";
    var n = " " + normalize(text) + " ";
    if (/[äöüß]/i.test(text) || /\s(ich|wie|wer|wann|kann|ist|ein|eine|und|der|die|das|mitglied\w*|bewerb\w*|danke|hallo|gibt|es|mein\w*|werde|kostet)\s/.test(n)) return "de";
    if (/\s(i|how|what|who|when|can|is|the|a|and|do|my|join|apply|thanks|hello|hi|there)\s/.test(n)) return "en";
    return fallback;
  }

  function findAnswer(text) {
    var n = " " + normalize(text) + " ";
    var words = n.trim().split(" ");
    var best = null, bestScore = 0;
    FAQ.forEach(function (f) {
      var score = 0;
      f.keys.forEach(function (k) {
        if (!k) return;
        if (k.indexOf(" ") >= 0) { if (n.indexOf(" " + k) >= 0) score += 3; return; }   // phrase
        // whole word, or word-start for keywords of 4+ letters ("bewerb" → "bewerbung")
        for (var i = 0; i < words.length; i++) {
          var w = words[i].replace(/^(ال|وال|بال|لل)/, "");                               // Arabic article prefixes
          if (w === k || words[i] === k || (k.length >= 4 && (w.indexOf(k) === 0 || words[i].indexOf(k) === 0))) { score += 2; break; }
        }
      });
      if (score && f.boost) score += f.boost;
      if (f.small) score -= 1;   // greetings only win when nothing else matches
      if (score > bestScore) { bestScore = score; best = f; }
    });
    return bestScore >= 1 ? best : null;
  }

  // ── Site actions (the site's Apply / Login buttons have no URLs, so press them) ──
  function pressSiteButton(patterns) {
    var nodes = document.querySelectorAll("#root button, #root a");
    for (var i = 0; i < nodes.length; i++) {
      var label = (nodes[i].textContent || "").trim().toLowerCase();
      for (var j = 0; j < patterns.length; j++) {
        if (label.indexOf(patterns[j]) === 0 && nodes[i].offsetParent !== null) { nodes[i].click(); return true; }
      }
    }
    return false;
  }
  var ACTIONS = {
    apply: function () {
      if (!pressSiteButton(["apply for membership", "mitgliedschaft beantragen", "apply", "bewerben"])) window.scrollTo({ top: 0, behavior: "smooth" });
    },
    login: function () {
      if (!pressSiteButton(["member login", "mitglieder-login", "login", "anmelden"])) window.scrollTo({ top: 0, behavior: "smooth" });
    },
    mail: function () { window.location.href = "mailto:" + EMAIL; }
  };

  // ── Widget ─────────────────────────────────────────────────────────────────
  var css = `
.deo-chat-btn { position: fixed; right: 20px; bottom: 20px; z-index: 900; width: 56px; height: 56px; border: 0; border-radius: 50%;
  background: var(--deo-charcoal, #1b1a19); color: #fff; cursor: pointer; display: grid; place-items: center; box-shadow: 0 4px 14px rgba(0,0,0,.18); }
.deo-chat-btn:focus-visible { outline: 3px solid var(--deo-yellow, #f7c317); outline-offset: 3px; }
.deo-chat-btn svg { width: 26px; height: 26px; }
.deo-chat { position: fixed; right: 20px; bottom: 88px; z-index: 900; width: min(380px, calc(100vw - 32px));
  height: min(580px, calc(100vh - 120px)); display: none; flex-direction: column; overflow: hidden;
  background: var(--surface, #fff); color: var(--text, #231f20); border: 1px solid var(--border, #e6e2de);
  border-radius: var(--radius-panel, 12px); box-shadow: 0 12px 40px rgba(0,0,0,.18); font-family: var(--font-sans, "Open Sans", sans-serif); }
.deo-chat.is-open { display: flex; }
.deo-chat-head { display: flex; align-items: center; justify-content: space-between; gap: 12px; padding: 14px 16px;
  background: var(--deo-charcoal, #1b1a19); color: #fff; border-bottom: 3px solid var(--deo-orange, #f7911d); }
.deo-chat-head strong { font-size: 15px; font-weight: 600; }
.deo-chat-head small { display: block; font-size: 12px; color: #c9c4bf; }
.deo-chat-close { background: none; border: 0; color: #fff; font-size: 22px; line-height: 1; cursor: pointer; padding: 4px 8px; }
.deo-chat-log { flex: 1; overflow-y: auto; padding: 16px; display: flex; flex-direction: column; gap: 10px; }
.deo-chat-msg { max-width: 88%; padding: 10px 13px; border-radius: 12px; font-size: 14px; line-height: 1.55; white-space: pre-wrap; overflow-wrap: anywhere; }
.deo-chat-msg.bot { align-self: flex-start; background: var(--surface-subtle, #f6f5f3); }
.deo-chat-msg.user { align-self: flex-end; background: var(--deo-yellow, #f7c317); color: var(--deo-ink, #231f20); }
.deo-chat-msg a { color: #a85200; font-weight: 600; }
.deo-chat-act { display: inline-block; margin-top: 8px; padding: 7px 12px; border: 0; border-radius: var(--radius-control, 8px);
  background: var(--deo-orange, #f7911d); color: var(--deo-ink, #231f20); font: inherit; font-size: 13px; font-weight: 600; cursor: pointer; }
.deo-chat-chips-label { font-size: 12px; color: var(--text-muted, #6b6661); margin-top: 4px; }
.deo-chat-chips { display: flex; flex-wrap: wrap; gap: 6px; }
.deo-chat-chip { padding: 6px 11px; border: 1px solid var(--control-border, #cfc9c3); border-radius: 999px; background: var(--surface, #fff);
  color: var(--text, #231f20); font: inherit; font-size: 13px; cursor: pointer; }
.deo-chat-chip:hover { border-color: var(--deo-orange, #f7911d); }
.deo-chat-chip:focus-visible, .deo-chat-act:focus-visible { outline: 2px solid var(--focus, #f7911d); outline-offset: 2px; }
.deo-chat-form { display: flex; gap: 8px; padding: 12px; border-top: 1px solid var(--border, #e6e2de); }
.deo-chat-form input { flex: 1; min-width: 0; height: 42px; padding: 0 12px; font: inherit; font-size: 14px;
  border: 1px solid var(--control-border, #cfc9c3); border-radius: var(--radius-control, 8px); }
.deo-chat-form input:focus { outline: 2px solid var(--focus, #f7911d); outline-offset: 0; }
.deo-chat-form button { padding: 0 16px; border: 0; border-radius: var(--radius-control, 8px); font-weight: 600; cursor: pointer;
  background: var(--deo-orange, #f7911d); color: var(--deo-ink, #231f20); }
@media (max-width: 480px) { .deo-chat { right: 16px; bottom: 84px; } .deo-chat-btn { right: 16px; bottom: 16px; } }
`;

  function el(tag, attrs, text) {
    var n = document.createElement(tag);
    for (var k in attrs || {}) n.setAttribute(k, attrs[k]);
    if (text != null) n.textContent = text;
    return n;
  }

  // Text with the email address turned into a mailto link (built as DOM nodes, no innerHTML).
  function fillText(node, text) {
    var parts = text.split(EMAIL);
    parts.forEach(function (p, i) {
      node.appendChild(document.createTextNode(p));
      if (i < parts.length - 1) node.appendChild(el("a", { href: "mailto:" + EMAIL }, EMAIL));
    });
  }

  function init() {
    var pageLang = (document.documentElement.lang || "").indexOf("de") === 0 ? "de" : "en";
    var lang = pageLang;
    var t = UI[lang];

    document.head.appendChild(el("style", {}, css));

    var btn = el("button", { class: "deo-chat-btn", type: "button", "aria-label": t.open, "aria-expanded": "false", "aria-controls": "deo-chat" });
    btn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>';

    var panel = el("section", { class: "deo-chat", id: "deo-chat", role: "dialog", "aria-label": t.title });
    var head = el("header", { class: "deo-chat-head" });
    var titles = el("div");
    var titleEl = el("strong", {}, t.title), subEl = el("small", {}, t.sub);
    titles.appendChild(titleEl); titles.appendChild(subEl);
    var close = el("button", { class: "deo-chat-close", type: "button", "aria-label": t.close }, "×");
    head.appendChild(titles); head.appendChild(close);

    var log = el("div", { class: "deo-chat-log", "aria-live": "polite" });
    var form = el("form", { class: "deo-chat-form" });
    var input = el("input", { type: "text", placeholder: t.ph, "aria-label": t.ph, maxlength: "300", autocomplete: "off" });
    var send = el("button", { type: "submit" }, t.send);
    form.appendChild(input); form.appendChild(send);

    panel.appendChild(head); panel.appendChild(log); panel.appendChild(form);
    document.body.appendChild(panel);
    document.body.appendChild(btn);

    function setLang(l) {
      if (l === lang) return;
      lang = l; t = UI[l];
      titleEl.textContent = t.title; subEl.textContent = t.sub;
      input.placeholder = t.ph; input.setAttribute("aria-label", t.ph);
      send.textContent = t.send; close.setAttribute("aria-label", t.close);
      panel.setAttribute("dir", l === "ar" ? "rtl" : "ltr");
    }

    function scroll() { log.scrollTop = log.scrollHeight; }

    function addUser(text) {
      log.appendChild(el("div", { class: "deo-chat-msg user", dir: "auto" }, text));
      scroll();
    }

    function addBot(text, action) {
      var m = el("div", { class: "deo-chat-msg bot", dir: "auto" });
      fillText(m, text);
      if (action) {
        m.appendChild(document.createElement("br"));
        var b = el("button", { class: "deo-chat-act", type: "button" }, t[action]);
        b.addEventListener("click", function () { if (action !== "mail") toggle(false); ACTIONS[action](); });
        m.appendChild(b);
      }
      log.appendChild(m);
      scroll();
    }

    var chipsWrap = null;
    function showChips(excludeId, withLabel) {
      if (chipsWrap) chipsWrap.remove();
      chipsWrap = el("div");
      if (withLabel) chipsWrap.appendChild(el("div", { class: "deo-chat-chips-label" }, t.more));
      var row = el("div", { class: "deo-chat-chips" });
      FAQ.forEach(function (f) {
        if (!f.chip || f.id === excludeId) return;
        var c = el("button", { class: "deo-chat-chip", type: "button", dir: "auto" }, f.chip[lang]);
        c.addEventListener("click", function () { ask(f.chip[lang], f); });
        row.appendChild(c);
      });
      chipsWrap.appendChild(row);
      log.appendChild(chipsWrap);
      scroll();
    }

    function ask(text, known) {
      if (!known) setLang(detectLang(text, lang));
      addUser(text);
      var f = known || findAnswer(text);
      if (f) addBot(f.a[lang], f.action);
      else addBot(FALLBACK[lang], "mail");
      showChips(f && f.id, true);
    }

    addBot(t.hello);
    showChips(null, false);

    function toggle(open) {
      panel.classList.toggle("is-open", open);
      btn.setAttribute("aria-expanded", String(open));
      btn.setAttribute("aria-label", open ? t.close : t.open);
      if (open) { input.focus(); scroll(); } else { btn.focus(); }
    }
    btn.addEventListener("click", function () { toggle(!panel.classList.contains("is-open")); });
    close.addEventListener("click", function () { toggle(false); });
    panel.addEventListener("keydown", function (e) { if (e.key === "Escape") toggle(false); });

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var text = input.value.trim();
      if (!text) return;
      input.value = "";
      ask(text);
    });

    // Exposed for testing in the browser console: DEOChat.match("how do I join?")
    window.DEOChat = { match: function (q) { var f = findAnswer(q); return { lang: detectLang(q, pageLang), topic: f ? f.id : null }; } };
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
