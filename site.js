/* M-Software site (Ghost Vault, Ghost VPN, Ghost Chat): animated phone demos. No network, no storage, no tracking. */
(function () {
  'use strict';

  var AR = document.documentElement.lang === 'ar';
  /* Arabic text for the phone screens (the English text is the key) */
  var TR = AR ? {
    "Dentist": "طبيب الأسنان",
    "Today · 15:30": "اليوم · 15:30",
    "Team lunch": "غداء الفريق",
    "Wed · 12:00": "الأربعاء · 12:00",
    "Alarm": "المنبّه",
    "Next alarm in 17 h": "المنبّه التالي بعد 17 ساعة",
    "Weekdays": "أيام العمل",
    "Saturday": "السبت",
    "Gym": "النادي الرياضي",
    "Notes": "الملاحظات",
    "Search notes": "ابحث في الملاحظات",
    "Shopping list": "قائمة التسوّق",
    "Milk, rice, tea, lemons": "حليب، أرز، شاي، ليمون",
    "Meeting notes": "ملاحظات الاجتماع",
    "Budget, next steps": "الميزانية، الخطوات التالية",
    "Lentil soup": "شوربة العدس",
    "Onion, garlic, cumin": "بصل، ثوم، كمّون",
    "Books to read": "كتب للقراءة",
    "3 items": "3 عناصر",
    "Files": "الملفات",
    "Enter PIN": "أدخل الرمز",
    "Documents": "المستندات",
    "Downloads": "التنزيلات",
    "Images": "الصور",
    "Files keeps stopping": "تطبيق «الملفات» يتوقف باستمرار",
    "App info": "معلومات التطبيق",
    "Close app": "إغلاق التطبيق",
    "Compass": "البوصلة",
    "312° NW": "312° شمال غرب",
    "Beirut · 33.89° N": "بيروت · 33.89° شمالًا",
    "Converter": "محوّل الوحدات",
    "Length": "الطول",
    "Weight": "الوزن",
    "Volume": "الحجم",
    "Kilometres": "كيلومترات",
    "Miles": "أميال",
    "Timer": "المؤقّت",
    "1 min": "1 د",
    "5 min": "5 د",
    "10 min": "10 د",
    "Start": "ابدأ",
    "Tip Calculator": "حاسبة الإكرامية",
    "Bill": "الفاتورة",
    "Tip": "الإكرامية",
    "Total": "المجموع",
    "Each (2 people)": "لكلّ شخص (2)",
    "Level": "ميزان الاستواء",
    "Hold the phone on a surface": "ضع الهاتف على سطح",
    "Tap to turn off": "اضغط للإطفاء",
    "Docs": "المستندات",
    "Quarterly report": "التقرير الفصلي",
    "Summary": "الملخّص",
    "Product guide.pdf": "دليل المنتج.pdf",
    "Product guide": "دليل المنتج",
    "Setup and care": "الإعداد والعناية",
    "Page 1 of 8": "صفحة 1 من 8",
    "To-do": "المهام",
    "Call the bank": "الاتصال بالمصرف",
    "Buy groceries": "شراء البقالة",
    "Pick up parcel": "استلام الطرد",
    "Pay electricity bill": "دفع فاتورة الكهرباء",
    "Email the school": "مراسلة المدرسة",
    "Expenses": "المصاريف",
    "This month": "هذا الشهر",
    "Groceries": "البقالة",
    "Mon": "الاثنين",
    "Bus pass": "بطاقة الحافلة",
    "Sun": "الأحد",
    "Phone bill": "فاتورة الهاتف",
    "Fri": "الجمعة",
    "Coffee": "قهوة",
    "Thu": "الخميس",
    "Chess": "الشطرنج",
    "Your move · White": "دورك · الأبيض",
    "New game": "لعبة جديدة",
    "Undo": "تراجع",
    "Piano": "البيانو",
    "Tap the keys to play": "اضغط على المفاتيح لتعزف",
    "Metronome": "المِسرع",
    "Dice": "النرد",
    "Total of 2 dice": "مجموع حجرَي النرد",
    "Roll": "ارمِ",
    "Morse Code": "شيفرة مورس",
    "Text": "النص",
    "Morse": "مورس",
    "Tap": "اضغط",
    "Phone": "الهاتف",
    "Messages": "الرسائل",
    "Camera": "الكاميرا",
    "Gallery": "المعرض",
    "Browser": "المتصفح",
    "Maps": "الخرائط",
    "Chat": "Chat",
    "Monday, 16 November": "الاثنين، 16 تشرين الثاني",
    "Vault": "الخزنة",
    "Locked and encrypted": "مقفلة ومشفّرة",
    "My things": "أغراضي",
    "Photos": "الصور",
    "Passwords": "كلمات المرور",
    "Wallet": "المحفظة",
    "Calls": "المكالمات",
    "Protection": "الحماية",
    "Hidden apps": "التطبيقات المخفية",
    "App locker": "قفل التطبيقات",
    "Intruders": "المتطفّلون",
    "Who is calling": "من المتصل",
    "Mum": "أمي",
    "Rings in": "يرنّ بعد",
    "5 s": "5 ث",
    "30 s": "30 ث",
    "No real call is made.": "لا تُجرى أي مكالمة حقيقية.",
    "Incoming call": "مكالمة واردة",
    "Mobile": "الجوّال",
    "No apps found": "لم يُعثر على تطبيقات",
    "NOT protected": "غير محميّ",
    "Connecting…": "جارٍ الاتصال…",
    "You are protected": "أنت محميّ",
    "Tap to connect": "اضغط للاتصال",
    "Reaching the server": "جارٍ الوصول إلى الخادم",
    "All apps go through the tunnel": "كل التطبيقات تمرّ عبر النفق",
    "Kill switch": "مفتاح قطع الاتصال",
    "ON": "مفعّل",
    "Account": "الحساب",
    "Are you safe to talk?": "هل يمكنك التحدث بأمان؟",
    "Yes. Using Ghost Chat now": "نعم. أستخدم Ghost Chat الآن",
    "Good. This one disappears in 1 hour": "جيد. هذه الرسالة تختفي بعد ساعة",
    " End-to-end encrypted": " مشفّر بين الطرفين",
    " Disappearing messages: 1 hour": " رسائل تختفي: ساعة واحدة",
    "Message": "رسالة",
    "Recovery passphrase": "عبارة الاسترداد",
    "Unlock": "فتح",
    "Replay": "إعادة",
    "Pause": "إيقاف مؤقت",
    "Play": "تشغيل",
    "Calculator": "آلة حاسبة",
    "Calendar": "التقويم",
    "Clock": "الساعة",
    "Locked app": "تطبيق مقفل",
    "Broken app": "تطبيق معطّل",
    "Flashlight": "المصباح",
    "PDF Reader": "قارئ PDF",
    "Type your PIN, then press =.": "اكتب رمزك، ثم اضغط =.",
    "Hold your secret day in any month, then enter your PIN.": "اضغط مطوّلًا على يومك السري في أي شهر، ثم أدخل رمزك.",
    "Tap your secret alarm, then enter your PIN.": "اضغط على منبّهك السري، ثم أدخل رمزك.",
    "Type your PIN into search and press Enter. A wrong PIN shows \"No results\".": "اكتب رمزك في البحث واضغط إدخال. الرمز الخاطئ يُظهر «لا نتائج».",
    "Opens straight to a PIN screen, with a name you choose.": "يفتح مباشرة على شاشة رمز، باسم تختاره أنت.",
    "Looks like an app that keeps crashing. Hold \"Close app\" for 30 seconds until it vibrates, let go, then hold it 10 seconds more.": "يبدو كتطبيق يتعطّل باستمرار. اضغط مطوّلًا على «إغلاق التطبيق» 30 ثانية حتى يهتزّ، ثم اتركه، ثم اضغط عليه 10 ثوانٍ أخرى.",
    "A working compass. Enter your PIN in the one place the app takes numbers.": "بوصلة تعمل فعلًا. أدخل رمزك في المكان الوحيد الذي يقبل فيه التطبيق الأرقام.",
    "Type your PIN, then press and hold the button for 1 second. A normal tap just converts.": "اكتب رمزك، ثم اضغط مطوّلًا على الزر ثانية واحدة. الضغطة العادية تحوّل الوحدات فقط.",
    "Type your PIN, then press and hold the button for 1 second. A normal tap just starts the timer.": "اكتب رمزك، ثم اضغط مطوّلًا على الزر ثانية واحدة. الضغطة العادية تشغّل المؤقّت فقط.",
    "Type your PIN, then press and hold the button for 1 second.": "اكتب رمزك، ثم اضغط مطوّلًا على الزر ثانية واحدة.",
    "A working spirit level. Enter your PIN in the one place the app takes numbers.": "ميزان استواء يعمل فعلًا. أدخل رمزك في المكان الوحيد الذي يقبل فيه التطبيق الأرقام.",
    "A working screen light. Enter your PIN in the one place the app takes numbers.": "مصباح شاشة يعمل فعلًا. أدخل رمزك في المكان الوحيد الذي يقبل فيه التطبيق الأرقام.",
    "A working word processor. Enter your PIN in the one place the app takes numbers.": "معالج نصوص يعمل فعلًا. أدخل رمزك في المكان الوحيد الذي يقبل فيه التطبيق الأرقام.",
    "Opens an 8-page product guide. Enter your PIN in the one place the app takes numbers.": "يفتح دليل منتج من 8 صفحات. أدخل رمزك في المكان الوحيد الذي يقبل فيه التطبيق الأرقام.",
    "A working to-do list. Enter your PIN in the one place the app takes numbers.": "قائمة مهام تعمل فعلًا. أدخل رمزك في المكان الوحيد الذي يقبل فيه التطبيق الأرقام.",
    "Type your PIN as an amount, then press and hold the button for 1 second.": "اكتب رمزك كمبلغ، ثم اضغط مطوّلًا على الزر ثانية واحدة.",
    "A full game of chess with a simple opponent. Enter your PIN in the one place the app takes numbers.": "لعبة شطرنج كاملة مع خصم بسيط. أدخل رمزك في المكان الوحيد الذي يقبل فيه التطبيق الأرقام.",
    "Play your PIN as a short tune.": "اعزف رمزك كلحن قصير.",
    "A working metronome. Enter your PIN in the one place the app takes numbers.": "مِسرع يعمل فعلًا. أدخل رمزك في المكان الوحيد الذي يقبل فيه التطبيق الأرقام.",
    "A working Morse translator. Enter your PIN in the one place the app takes numbers.": "مترجم مورس يعمل فعلًا. أدخل رمزك في المكان الوحيد الذي يقبل فيه التطبيق الأرقام.",
    "An ordinary calculator. It really calculates.": "آلة حاسبة عادية. تحسب فعلًا.",
    "Type your secret PIN…": "اكتب رمزك السري…",
    "…and press =.": "…ثم اضغط =.",
    "Your private vault opens. Any other number just calculates.": "تُفتح خزنتك الخاصة. وأي رقم آخر يُحسب فقط.",
    "Chat sits in your hidden space (see the small badge). It works like any other app.": "تطبيق Chat موجود في مساحتك المخفية (لاحظ الشارة الصغيرة). يعمل كأي تطبيق آخر.",
    "In your hidden space": "في مساحتك المخفية",
    "Add an app": "أضف تطبيقًا",
    "Move another app here": "انقل تطبيقًا آخر إلى هنا",
    "Inside your vault, you choose which apps go into the hidden space.": "داخل خزنتك، تختار أيّ التطبيقات تدخل المساحة المخفية.",
    "Someone wants your phone. You open the calculator and type your Lockdown PIN…": "أحدهم يريد هاتفك. تفتح الآلة الحاسبة وتكتب رمز الإغلاق التام…",
    "…then press =. To anyone watching, it is just a sum.": "…ثم تضغط =. لمن يراقب، إنها مجرد عملية حسابية.",
    "Chat is gone: no icon, no notifications. Your vault is locked too.": "اختفى Chat: لا أيقونة، لا إشعارات. وخزنتك مقفلة أيضًا.",
    "Search for it? \"No apps found\". The whole hidden space is frozen.": "تبحث عنه؟ «لم يُعثر على تطبيقات». المساحة المخفية كلها مجمَّدة.",
    "Later, when you are safe": "لاحقًا، حين تكون في أمان",
    "Your recovery passphrase unfreezes everything.": "عبارة الاسترداد تفكّ تجميد كل شيء.",
    "Chat is back, with all its messages. Nothing was deleted.": "عاد Chat بكل رسائله. لم يُحذف شيء.",
    "Someone who knows your phone PIN starts going through your phone.": "شخص يعرف رمز هاتفك يبدأ بتفتيش هاتفك.",
    "Wrong PIN": "رمز خاطئ",
    "Your gallery is behind the app locker. Their guess fails, and the try is recorded.": "معرض صورك خلف قفل التطبيقات. يفشل تخمينه، وتُسجَّل المحاولة.",
    "Your vault is disguised as a plain Notes app. Nothing to see here.": "خزنتك متخفّية في هيئة تطبيق ملاحظات بسيط. لا شيء يلفت النظر.",
    "They insist you open \"the hidden stuff\". You type your decoy PIN into search.": "يُصرّ على أن تفتح «الأشياء المخفية». تكتب رمز التمويه في البحث.",
    "Grocery list": "قائمة البقالة",
    "Rice, eggs, tea": "أرز، بيض، شاي",
    "Birthday ideas": "أفكار لعيد ميلاد",
    "For Dad": "لأبي",
    "Recipes": "وصفات",
    "4 notes": "4 ملاحظات",
    "Bus times": "مواعيد الحافلة",
    "Route 12": "الخط 12",
    "A believable vault opens, with harmless things. Nothing says it is a decoy.": "تُفتح خزنة مقنعة فيها أشياء عادية. لا شيء يقول إنها وهمية.",
    "Wrong PIN on Gallery": "رمز خاطئ على المعرض",
    "Today 21:14 · try 1": "اليوم 21:14 · المحاولة 1",
    "Today 21:13 · try 2": "اليوم 21:13 · المحاولة 2",
    "Later, alone, your main PIN opens the real vault, with a photo of who tried to get in.": "لاحقًا، وأنت وحدك، يفتح رمزك الرئيسي الخزنة الحقيقية، ومعها صورة من حاول الدخول.",
    "You are told to unlock your phone and hand it over.": "يُطلب منك فتح هاتفك وتسليمه.",
    "First, you type your Lockdown PIN into the calculator and press =. It looks like a sum.": "أولًا، تكتب رمز الإغلاق التام في الآلة الحاسبة وتضغط =. يبدو كعملية حسابية.",
    "Everything locks. Your hidden apps vanish: no icon, no notifications.": "كل شيء يُقفَل. تختفي تطبيقاتك المخفية: لا أيقونة، لا إشعارات.",
    "The calculator just calculates. Even your main PIN opens nothing now.": "الآلة الحاسبة تحسب فقط. حتى رمزك الرئيسي لا يفتح شيئًا الآن.",
    "Later, somewhere safe": "لاحقًا، في مكان آمن",
    "Your recovery passphrase brings everything back. Lockdown hides; it does not delete.": "عبارة الاسترداد تعيد كل شيء. الإغلاق التام يُخفي، ولا يحذف.",
    "Feeling unsafe? In your vault, set up a fake call: who is calling, and when.": "تشعر بعدم الأمان؟ في خزنتك، جهّز مكالمة وهمية: من المتصل، ومتى.",
    "Tap Start. The vault locks at once and the disguise shows.": "اضغط «ابدأ». تُقفَل الخزنة فورًا ويظهر التمويه.",
    "30 seconds later": "بعد 30 ثانية",
    "Your phone rings, with a plain call screen.": "يرنّ هاتفك بشاشة مكالمة عادية.",
    "Answer, and you have your reason to step away. No real call is made.": "أجب، وصار لديك سبب للابتعاد. لا تُجرى أي مكالمة حقيقية.",
    "A thief tries to guess your phone's PIN.": "لصّ يحاول تخمين رمز هاتفك.",
    "If you turn it on, a few wrong tries on the lock screen silently lock your vault down.": "إذا فعّلت ذلك، فإن بضع محاولات خاطئة على شاشة القفل تُغلق خزنتك إغلاقًا تامًا بصمت.",
    "Even if they get in, they find a calculator. Everything in the vault is encrypted.": "حتى لو دخل، يجد آلة حاسبة. كل ما في الخزنة مشفّر.",
    "7 days later": "بعد 7 أيام",
    "If you choose, a vault not opened for 7 days erases its data and hidden apps.": "إذا اخترت ذلك، فإن الخزنة التي لا تُفتح 7 أيام تمسح بياناتها وتطبيقاتها المخفية.",
    "What is actually stored on the phone": "ما يُخزَّن فعليًا على الهاتف",
    "What you see in your vault": "ما تراه في خزنتك",
    "Unlock with your PIN": "افتح برمزك",
    "Show what is stored": "اعرض ما هو مخزَّن"
    } : {};
  function L(s) { return (AR && TR[s]) || s; }

  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- Quick exit ---------- */
  var exit = document.getElementById('quick-exit');
  if (exit) {
    exit.addEventListener('click', function (e) { e.preventDefault(); window.location.replace(exit.href); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') window.location.replace(exit.href); });
  }

  /* ---------- Small helpers for the phone screens ---------- */
  function ic(id) { return '<svg class="ic" aria-hidden="true"><use href="#' + id + '"/></svg>'; }
  var SB = '<div class="sb"><span>14:02</span><span class="sb-i"><i></i><i></i><b></b></span></div>';
  function bar(t, right) { return '<div class="ab"><span>' + t + '</span>' + (right || '') + '</div>'; }
  function row(t, s, right) {
    return '<div class="row"><div><b>' + t + '</b>' + (s ? '<small>' + s + '</small>' : '') + '</div>' + (right || '') + '</div>';
  }
  function tg(on) { return '<span class="tg' + (on ? ' on' : '') + '"></span>'; }
  function pad(o) {
    o = o || {};
    var keys = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '', '0', '⌫'];
    return '<div class="pad">' + keys.map(function (k) {
      return '<span' + (k === '' ? ' class="e"' : '') + (o.press === k ? ' class="pr"' : '') + '>' + k + '</span>';
    }).join('') + '</div>';
  }
  function dots(n, filled) {
    var s = '';
    for (var i = 0; i < n; i++) s += '<i' + (i < filled ? ' class="f"' : '') + '></i>';
    return '<div class="dots">' + s + '</div>';
  }

  /* ---------- Screens ---------- */
  var KEYS = ['C', '±', '%', '÷', '7', '8', '9', '×', '4', '5', '6', '−', '1', '2', '3', '+', '0', '.', '='];
  var S = {
    calc: function (o) {
      o = o || {};
      return '<div class="calc"><div class="cd"><small>' + (o.hist != null ? o.hist : '12 × 4 = 48') + '</small><b>' + (o.val || '48') + '</b></div><div class="ck">' +
        KEYS.map(function (k) {
          var c = /[÷×−+]/.test(k) ? 'o' : /[C±%]/.test(k) ? 'f' : k === '0' ? 'w' : k === '=' ? 'eq' : '';
          if (o.press === k) c += ' pr';
          return '<span class="' + c + '">' + k + '</span>';
        }).join('') + '</div></div>';
    },
    calendar: function () {
      var c = '', d;
      (AR ? ['ن', 'ث', 'ر', 'خ', 'ج', 'س', 'ح'] : ['M', 'T', 'W', 'T', 'F', 'S', 'S']).forEach(function (x) { c += '<i>' + x + '</i>'; });
      for (d = 0; d < 6; d++) c += '<span></span>';
      for (d = 1; d <= 30; d++) c += '<span' + (d === 16 ? ' class="today"' : '') + '>' + d + '</span>';
      return bar(AR ? 'تشرين الثاني 2026' : 'November 2026') + '<div class="calg">' + c + '</div><div class="list">' +
        row(L('Dentist'), L('Today · 15:30')) + row(L('Team lunch'), L('Wed · 12:00')) + '</div>';
    },
    clock: function () {
      return bar(L('Alarm'), '<span class="plus">+</span>') + '<div class="bigt">07:30</div><p class="mut c">' + L('Next alarm in 17 h') + '</p><div class="list">' +
        row('07:30', L('Weekdays'), tg(true)) + row('09:00', L('Saturday'), tg(false)) + row('06:45', L('Gym'), tg(false)) + '</div>';
    },
    notes: function (o) {
      o = o || {};
      return bar(L('Notes')) + '<div class="search">' + ic('i-search') + (o.q ? '<b>' + o.q + '</b>' : '<span>' + L('Search notes') + '</span>') + '</div><div class="list">' +
        row(L('Shopping list'), L('Milk, rice, tea, lemons')) + row(L('Meeting notes'), L('Budget, next steps')) + row(L('Lentil soup'), L('Onion, garlic, cumin')) + row(L('Books to read'), L('3 items')) + '</div>';
    },
    locked: function (o) {
      o = o || {};
      return '<div class="pinscr"><span class="lk">' + ic('i-lock') + '</span><b>' + (o.name || L('Files')) + '</b><small>' + (o.msg || L('Enter PIN')) + '</small>' +
        dots(4, o.filled || 0) + pad(o) + '</div>';
    },
    broken: function () {
      return bar(L('Files')) + '<div class="list ghosted">' + row(L('Documents'), '') + row(L('Downloads'), '') + row(L('Images'), '') + '</div>' +
        '<div class="dim"><div class="dlg"><b>' + L('Files keeps stopping') + '</b><span>' + L('App info') + '</span><span>' + L('Close app') + '</span></div></div>';
    },
    compass: function () {
      return bar(L('Compass')) + '<div class="cc"><svg class="dial" viewBox="0 0 200 200" aria-hidden="true"><circle cx="100" cy="100" r="88"/>' +
        (AR ? '<text x="100" y="32">ش</text><text x="172" y="105">ق</text><text x="100" y="178">ج</text><text x="28" y="105">غ</text>' : '<text x="100" y="32">N</text><text x="172" y="105">E</text><text x="100" y="178">S</text><text x="28" y="105">W</text>') +
        '<g class="needle"><path d="M100 40l9 60h-18z" class="nn"/><path d="M100 160l9-60h-18z" class="ns"/></g><circle cx="100" cy="100" r="5"/></svg>' +
        '<b class="big">' + L('312° NW') + '</b><small class="mut">' + L('Beirut · 33.89° N') + '</small></div>';
    },
    converter: function () {
      return bar(L('Converter')) + '<div class="chips"><span class="on">' + L('Length') + '</span><span>' + L('Weight') + '</span><span>' + L('Volume') + '</span></div>' +
        '<div class="field"><small>' + L('Kilometres') + '</small><b>10</b></div><div class="field"><small>' + L('Miles') + '</small><b>6.214</b></div>' + pad();
    },
    timer: function () {
      return bar(L('Timer')) + '<div class="cc"><svg class="ring" viewBox="0 0 120 120" aria-hidden="true"><circle cx="60" cy="60" r="50"/><circle cx="60" cy="60" r="50" class="arc"/></svg>' +
        '<b class="ringt">05:00</b></div><div class="chips c"><span>' + L('1 min') + '</span><span class="on">' + L('5 min') + '</span><span>' + L('10 min') + '</span></div><div class="btnx">' + L('Start') + '</div>';
    },
    tip: function () {
      return bar(L('Tip Calculator')) + '<div class="field"><small>' + L('Bill') + '</small><b>48.00</b></div><div class="chips"><span>10%</span><span class="on">15%</span><span>20%</span></div>' +
        '<div class="list">' + row(L('Tip'), '', '<b>7.20</b>') + row(L('Total'), '', '<b>55.20</b>') + row(L('Each (2 people)'), '', '<b>27.60</b>') + '</div>';
    },
    level: function () {
      return bar(L('Level')) + '<div class="cc"><div class="tube"><i class="bub"></i><span></span><span></span></div><b class="big">0.4°</b><small class="mut">' + L('Hold the phone on a surface') + '</small>' +
        '<div class="bullseye"><i class="bub"></i></div></div>';
    },
    flashlight: function () {
      return '<div class="flash"><span class="pw">' + ic('i-power') + '</span><small>' + L('Tap to turn off') + '</small></div>';
    },
    docs: function () {
      return bar(L('Docs'), '<span class="tb"><b>B</b><i>I</i><u>U</u></span>') + '<div class="page"><b class="ttl">' + L('Quarterly report') + '</b>' +
        '<p class="ln w9"></p><p class="ln w8"></p><p class="ln w9"></p><p class="ln w6"></p><b class="h">' + L('Summary') + '</b><p class="ln w9"></p><p class="ln w7"></p><p class="ln w8"></p><p class="ln w5"></p></div>';
    },
    pdf: function () {
      return bar(L('Product guide.pdf')) + '<div class="page pdfp"><b class="ttl">' + L('Product guide') + '</b><small class="mut">' + L('Setup and care') + '</small><div class="img"></div>' +
        '<p class="ln w9"></p><p class="ln w8"></p><p class="ln w9"></p><p class="ln w5"></p></div><p class="mut c">' + L('Page 1 of 8') + '</p>';
    },
    todo: function () {
      function t(x, d) { return '<div class="row todo' + (d ? ' done' : '') + '"><span class="cb">' + (d ? ic('i-check') : '') + '</span><b>' + x + '</b></div>'; }
      return bar(L('To-do'), '<span class="plus">+</span>') + '<div class="list">' + t(L('Call the bank'), true) + t(L('Buy groceries')) + t(L('Pick up parcel')) + t(L('Pay electricity bill'), true) + t(L('Email the school')) + '</div>';
    },
    expenses: function () {
      return bar(L('Expenses')) + '<div class="tot"><small>' + L('This month') + '</small><b>412.50</b></div><div class="list">' +
        row(L('Groceries'), L('Mon'), '<b>54.20</b>') + row(L('Bus pass'), L('Sun'), '<b>30.00</b>') + row(L('Phone bill'), L('Fri'), '<b>25.00</b>') + row(L('Coffee'), L('Thu'), '<b>3.50</b>') + '</div>';
    },
    chess: function () {
      var back = ['♜', '♞', '♝', '♛', '♚', '♝', '♞', '♜'], b = '', r, c, p;
      for (r = 0; r < 8; r++) for (c = 0; c < 8; c++) {
        p = r === 0 ? back[c] : r === 1 ? '♟' : r === 6 ? '♙' : r === 7 ? back[c].replace(/./, function (x) { return String.fromCharCode(x.charCodeAt(0) - 6); }) : '';
        if (r === 4 && c === 4) p = '♙';
        if (r === 6 && c === 4) p = '';
        b += '<span class="' + ((r + c) % 2 ? 'dk' : 'lt') + (r < 2 ? ' bk' : '') + '">' + (p ? p + '︎' : '') + '</span>';
      }
      return bar(L('Chess')) + '<p class="mut c">' + L('Your move · White') + '</p><div class="board">' + b + '</div><div class="chips c"><span>' + L('New game') + '</span><span>' + L('Undo') + '</span></div>';
    },
    piano: function () {
      var w = '', i;
      for (i = 0; i < 8; i++) w += '<span class="wk' + (i === 2 ? ' pr' : '') + '"></span>';
      return bar(L('Piano')) + '<p class="mut c">' + L('Tap the keys to play') + '</p><div class="keys">' + w +
        '<i class="b1"></i><i class="b2"></i><i class="b3"></i><i class="b4"></i><i class="b5"></i></div>';
    },
    metronome: function () {
      return bar(L('Metronome')) + '<div class="cc"><div class="metro"><i class="arm"></i></div><b class="big">96 <small>BPM</small></b>' +
        '<div class="chips c"><span>−</span><span class="on">4/4</span><span>+</span></div></div>';
    },
    dice: function () {
      function die(n) {
        var pos = { 1: [5], 3: [1, 5, 9], 5: [1, 3, 5, 7, 9], 6: [1, 3, 4, 6, 7, 9] }[n], s = '';
        for (var i = 1; i <= 9; i++) s += '<i' + (pos.indexOf(i) > -1 ? ' class="p"' : '') + '></i>';
        return '<span class="die">' + s + '</span>';
      }
      return bar(L('Dice')) + '<div class="cc"><div class="dice">' + die(5) + die(3) + '</div><b class="big">8</b><small class="mut">' + L('Total of 2 dice') + '</small></div><div class="btnx">' + L('Roll') + '</div>';
    },
    morse: function () {
      return bar(L('Morse Code')) + '<div class="field"><small>' + L('Text') + '</small><b>HELLO</b></div><div class="field mono"><small>' + L('Morse') + '</small><b>···· · ·−·· ·−·· −−−</b></div>' +
        '<div class="cc"><span class="mkey">' + L('Tap') + '</span></div>';
    },
    /* scene screens */
    home: function (o) {
      o = o || {};
      var apps = [[L('Phone'), 'i-call', 'h0'], [L('Messages'), 'i-note', 'h1'], [L('Camera'), 'i-camera', 'h2'], [L('Gallery'), 'i-image', 'h3'],
        [L('Browser'), 'i-globe', 'h4'], [L('Maps'), 'i-target', 'h5'], [o.cover || L('Notes'), o.coverIc || 'd-notes', o.coverIc ? 'h8' : 'h6'], [L('Chat'), 'i-contacts', 'h7', 1]];
      return '<div class="homes"><div class="hclock">14:02</div><small>' + L('Monday, 16 November') + '</small><div class="hgrid">' + apps.map(function (a) {
        if (a[3] && o.hideWork) return '<span class="ha gone"></span>';
        return '<span class="ha' + (a[3] ? ' work' + (o.hl ? ' hl' : '') : '') + '"><span class="hi ' + a[2] + '">' + ic(a[1]) + '</span>' + a[0] + '</span>';
      }).join('') + '</div></div>';
    },
    lockscreen: function (o) {
      o = o || {};
      return '<div class="lockscr"><div class="hclock">14:02</div><small>' + L('Monday, 16 November') + '</small><small class="' + (o.msg ? 'err' : '') + '">' + (o.msg || L('Enter PIN')) + '</small>' +
        dots(6, o.filled || 0) + pad(o) + '</div>';
    },
    vault: function () {
      return '<div class="vault"><div class="v-top"><span>' + L('Vault') + '</span>' + ic('i-lock') + '</div><div class="v-status"><i></i>' + L('Locked and encrypted') + '</div>' +
        '<p class="v-group">' + L('My things') + '</p><div class="v-grid">' +
        vt('t1', 'i-image', L('Photos')) + vt('t2', 'i-note', L('Notes')) + vt('t3', 'i-file', L('Files')) + vt('t4', 'i-key', L('Passwords')) + vt('t5', 'i-card', L('Wallet')) + vt('t6', 'i-call', L('Calls')) +
        '</div><p class="v-group">' + L('Protection') + '</p><div class="v-grid">' + vt('t7', 'i-layers', L('Hidden apps')) + vt('t8', 'i-lock', L('App locker')) + vt('t9', 'i-eye', L('Intruders')) + '</div></div>';
    },
    vaultList: function (o) {
      return '<div class="vault"><div class="v-top"><span>' + (AR ? '› ' : '‹ ') + o.title + '</span>' + ic('i-lock') + '</div><div class="list">' + o.rows.map(function (r) {
        return row(r[0], r[1], r[2] ? '<span class="thumb">' + ic(r[2]) + '</span>' : '');
      }).join('') + '</div></div>';
    },
    fakecall: function () {
      return '<div class="vault"><div class="v-top"><span>' + (AR ? '› مكالمة وهمية' : '‹ Fake call') + '</span>' + ic('i-lock') + '</div>' +
        '<div class="field"><small>' + L('Who is calling') + '</small><b>' + L('Mum') + '</b></div><p class="v-group">' + L('Rings in') + '</p>' +
        '<div class="chips"><span>' + L('5 s') + '</span><span class="on">' + L('30 s') + '</span><span>' + L('1 min') + '</span><span>' + L('5 min') + '</span></div><div class="btnx pr">' + L('Start') + '</div>' +
        '<p class="mut c">' + L('No real call is made.') + '</p></div>';
    },
    call: function (o) {
      o = o || {};
      return '<div class="callscr"><small>' + (o.active ? '00:0' + (o.t || 8) : L('Incoming call')) + '</small><span class="av">' + (AR ? 'أ' : 'M') + '</span><b>' + L('Mum') + '</b><small>' + L('Mobile') + '</small>' +
        (o.active ? '<div class="cbtns"><span class="end">' + ic('i-call') + '</span></div>'
          : '<div class="cbtns"><span class="end">' + ic('i-call') + '</span><span class="ans">' + ic('i-call') + '</span></div>') + '</div>';
    },
    appsearch: function (o) {
      return '<div class="homes"><div class="search dk">' + ic('i-search') + '<b>' + (o && o.q || L('Chat')) + '</b></div>' +
        '<div class="noapps">' + ic('i-search') + '<b>' + L('No apps found') + '</b><small>' + (AR ? 'لا يوجد تطبيق مثبَّت يطابق «' + (o && o.q || L('Chat')) + '»' : 'Nothing installed matches "' + (o && o.q || L('Chat')) + '"') + '</small></div></div>';
    },
    vpn: function (o) {
      var st = (o && o.st) || 'off';
      var label = { off: L('NOT protected'), wait: L('Connecting…'), on: L('You are protected') }[st];
      return bar('Ghost VPN') + '<div class="vpnapp ' + st + '"><span class="vbtn">' + ic('i-power') + '</span><b class="vst">' + label + '</b>' +
        '<small class="mut">' + (st === 'off' ? L('Tap to connect') : st === 'wait' ? L('Reaching the server') : L('All apps go through the tunnel')) + '</small>' +
        '<div class="list vlist">' + row(L('Kill switch'), '', '<span class="kon">' + L('ON') + '</span>') + row(L('Account'), '•••• •••• •••• ••••') + '</div></div>';
    },
    chat: function (o) {
      var n = (o && o.n) || 0, msgs = [
        ['in', L('Are you safe to talk?')],
        ['out', L('Yes. Using Ghost Chat now')],
        ['in', L('Good. This one disappears in 1 hour')],
        ['out', (AR ? 'وصلت' : 'Got it') + ' \u2714']
      ], b = '';
      for (var i = 0; i < n && i < msgs.length; i++) b += '<div class="bub-' + msgs[i][0] + '">' + msgs[i][1] + '</div>';
      return '<div class="chat-top"><span class="av-s">K</span><div><b>K7M2Q-X9D4R</b><small>' + ic('i-lock') + L(' End-to-end encrypted') + '</small></div></div>' +
        '<div class="chat-body"><p class="chat-note">' + ic('i-timer') + L(' Disappearing messages: 1 hour') + '</p>' + b + '</div>' +
        '<div class="chat-input"><span>' + L('Message') + '</span><i>' + ic('i-chat') + '</i></div>';
    },
    passphrase: function () {
      return '<div class="pp"><span class="lk">' + ic('i-key') + '</span><b>' + L('Recovery passphrase') + '</b><div class="field"><b>•••••••••••••••••</b></div><div class="btnx pr">' + L('Unlock') + '</div></div>';
    }
  };
  function vt(cls, i, t) { return '<span class="v-tile ' + cls + '">' + ic(i) + t + '</span>'; }

  var SCREEN_CLASS = {
    calc: 'dark', flashlight: 'bright', home: 'wall', lockscreen: 'wall', appsearch: 'wall', call: 'callbg', broken: '', passphrase: 'dark'
  };

  function renderScreen(f) {
    var el = document.createElement('div');
    el.className = 'scr scr-' + f.s + (SCREEN_CLASS[f.s] ? ' ' + SCREEN_CLASS[f.s] : '');
    el.innerHTML = SB + '<div class="sc">' + S[f.s](f.o) + '</div>' + (f.badge ? '<span class="badge">' + f.badge + '</span>' : '');
    return el;
  }

  /* ---------- Player: shows frames one after another, like a short video ---------- */
  function Player(root, opt) {
    this.root = root;
    this.screen = root.querySelector('.screen');
    this.cap = root.querySelector('[data-cap]');
    this.bars = root.querySelector('[data-bars]');
    this.btn = root.querySelector('[data-play]');
    this.opt = opt;
    this.i = 0;
    this.want = !reduce && opt.autoplay !== false;
    this.seen = true;
    this.timer = null;
    var self = this;
    if (this.btn) this.btn.addEventListener('click', function () {
      if (self.ended) { self.go(0); self.want = true; self.play(); return; }
      self.want = !self.want; self.want ? self.play() : self.pause();
    });
    if ('IntersectionObserver' in window) {
      new IntersectionObserver(function (es) {
        self.seen = es[0].isIntersecting;
        if (self.seen && self.want) self.play(); else self.pause(true);
      }, { threshold: 0.25 }).observe(root);
    }
    document.addEventListener('visibilitychange', function () {
      if (document.hidden) self.pause(true); else if (self.want && self.seen) self.play();
    });
  }
  Player.prototype.load = function (frames) {
    clearTimeout(this.timer);
    this.running = false;
    this.frames = frames;
    if (this.bars) this.bars.innerHTML = frames.map(function () { return '<span><i></i></span>'; }).join('');
    this.go(0);
    if (this.want && this.seen) this.play(); else this.pause(true);
  };
  Player.prototype.dur = function (i) { return this.frames[i].d || this.opt.dur || 3800; };
  Player.prototype.go = function (i) {
    var self = this, f = this.frames[i], old = this.screen.querySelector('.scr.on');
    this.i = i;
    this.ended = false;
    this.left = this.dur(i);
    var el = renderScreen(f);
    this.screen.appendChild(el);
    void el.offsetWidth;
    el.classList.add('on');
    if (old) { old.classList.remove('on'); setTimeout(function () { if (old.parentNode) old.parentNode.removeChild(old); }, 450); }
    var stale = this.screen.querySelectorAll('.scr:not(.on)');
    for (var k = 0; k < stale.length - 1; k++) stale[k].parentNode.removeChild(stale[k]);
    if (this.cap) {
      var c = f.cap;
      for (var j = i; c === undefined && j >= 0; j--) c = this.frames[j].cap;
      this.cap.textContent = c || '';
    }
    if (this.bars) {
      var spans = this.bars.children;
      for (var n = 0; n < spans.length; n++) {
        spans[n].className = n < i ? 'done' : n === i ? 'cur' : '';
        spans[n].firstChild.style.animationDuration = (n === i ? this.dur(i) : 0) + 'ms';
      }
    }
    if (this.opt.onFrame) this.opt.onFrame(i, f);
  };
  Player.prototype.tick = function () {
    var self = this;
    clearTimeout(this.timer);
    this.started = Date.now();
    this.timer = setTimeout(function () {
      if (self.i + 1 < self.frames.length) { self.go(self.i + 1); self.tick(); }
      else if (self.opt.loop) { self.go(0); self.tick(); }
      else { self.ended = true; self.running = false; self.setBtn(); if (self.bars) self.bars.children[self.i].className = 'done'; }
    }, this.left);
  };
  Player.prototype.play = function () {
    if (this.running || this.ended) return;
    this.running = true;
    this.root.classList.remove('paused');
    this.tick();
    this.setBtn();
  };
  Player.prototype.pause = function (auto) {
    if (this.running) this.left = Math.max(200, this.left - (Date.now() - this.started));
    clearTimeout(this.timer);
    this.running = false;
    this.root.classList.add('paused');
    if (!auto) this.want = false;
    this.setBtn();
  };
  Player.prototype.next = function (step) {
    var n = (this.i + step + this.frames.length) % this.frames.length;
    this.go(n);
    if (this.running) this.tick();
  };
  Player.prototype.setBtn = function () {
    if (!this.btn) return;
    var label = this.ended ? L('Replay') : this.running ? L('Pause') : L('Play');
    this.btn.setAttribute('aria-label', label);
    this.btn.setAttribute('data-state', this.ended ? 'replay' : this.running ? 'pause' : 'play');
    var t = this.btn.querySelector('span');
    if (t) t.textContent = label;
  };

  /* ---------- Disguise data ---------- */
  var APPS = [
    ['calc', L('Calculator'), 'd-calc', L('Type your PIN, then press =.')],
    ['calendar', L('Calendar'), 'd-cal', L('Hold your secret day in any month, then enter your PIN.')],
    ['clock', L('Clock'), 'd-clock', L('Tap your secret alarm, then enter your PIN.')],
    ['notes', L('Notes'), 'd-notes', L('Type your PIN into search and press Enter. A wrong PIN shows "No results".')],
    ['locked', L('Locked app'), 'd-locked', L('Opens straight to a PIN screen, with a name you choose.')],
    ['broken', L('Broken app'), 'd-broken', L('Looks like an app that keeps crashing. Hold "Close app" for 30 seconds until it vibrates, let go, then hold it 10 seconds more.')],
    ['compass', L('Compass'), 'd-compass', L('A working compass. Enter your PIN in the one place the app takes numbers.')],
    ['converter', L('Converter'), 'd-convert', L('Type your PIN, then press and hold the button for 1 second. A normal tap just converts.')],
    ['timer', L('Timer'), 'd-timer', L('Type your PIN, then press and hold the button for 1 second. A normal tap just starts the timer.')],
    ['tip', L('Tip Calculator'), 'd-tip', L('Type your PIN, then press and hold the button for 1 second.')],
    ['level', L('Level'), 'd-level', L('A working spirit level. Enter your PIN in the one place the app takes numbers.')],
    ['flashlight', L('Flashlight'), 'd-flash', L('A working screen light. Enter your PIN in the one place the app takes numbers.')],
    ['docs', L('Docs'), 'd-docs', L('A working word processor. Enter your PIN in the one place the app takes numbers.')],
    ['pdf', L('PDF Reader'), 'd-pdf', L('Opens an 8-page product guide. Enter your PIN in the one place the app takes numbers.')],
    ['todo', L('To-do'), 'd-todo', L('A working to-do list. Enter your PIN in the one place the app takes numbers.')],
    ['expenses', L('Expenses'), 'd-exp', L('Type your PIN as an amount, then press and hold the button for 1 second.')],
    ['chess', L('Chess'), 'd-chess', L('A full game of chess with a simple opponent. Enter your PIN in the one place the app takes numbers.')],
    ['piano', L('Piano'), 'd-piano', L('Play your PIN as a short tune.')],
    ['metronome', L('Metronome'), 'd-metro', L('A working metronome. Enter your PIN in the one place the app takes numbers.')],
    ['dice', L('Dice'), 'd-dice', L('Type your PIN, then press and hold the button for 1 second.')],
    ['morse', L('Morse Code'), 'd-morse', L('A working Morse translator. Enter your PIN in the one place the app takes numbers.')]
  ];

  /* ---------- Hero: cycles through all 21 disguises ---------- */
  var hero = document.getElementById('hero-phone');
  if (hero) {
    var nameEl = hero.querySelector('[data-name]'), countEl = hero.querySelector('[data-count]'), iconEl = hero.querySelector('[data-icon]');
    var hp = new Player(hero, {
      dur: 2300, loop: true,
      onFrame: function (i) {
        nameEl.textContent = APPS[i][1];
        countEl.textContent = (i + 1) + (AR ? ' من 21' : ' of 21');
        iconEl.innerHTML = ic(APPS[i][2]);
        var rot = document.querySelector('[data-rot]');
        if (rot) {
          rot.textContent = APPS[i][1] + '.';
          rot.classList.remove('swap'); void rot.offsetWidth; rot.classList.add('swap');
        }
      }
    });
    hp.load(APPS.map(function (a) { return { s: a[0] }; }));
    hero.querySelector('[data-prev]').addEventListener('click', function () { hp.next(-1); });
    hero.querySelector('[data-next]').addEventListener('click', function () { hp.next(1); });
  }

  /* ---------- Step demos: a phone with a list of steps that light up ---------- */
  function stepDemo(id, frames) {
    var el = document.getElementById(id);
    if (!el) return;
    var steps = document.querySelectorAll('[data-steps="' + id + '"] [data-step]');
    var p = new Player(el, {
      loop: true,
      onFrame: function (i, f) {
        for (var k = 0; k < steps.length; k++) steps[k].classList.toggle('on', +steps[k].getAttribute('data-step') === f.step);
      }
    });
    p.load(frames);
  }

  stepDemo('demo-phone', [
    { s: 'calc', o: {}, cap: L('An ordinary calculator. It really calculates.'), step: 1, d: 2600 },
    { s: 'calc', o: { val: '2', hist: '', press: '2' }, cap: L('Type your secret PIN…'), step: 2, d: 750 },
    { s: 'calc', o: { val: '24', hist: '', press: '4' }, step: 2, d: 750 },
    { s: 'calc', o: { val: '246', hist: '', press: '6' }, step: 2, d: 750 },
    { s: 'calc', o: { val: '2,468', hist: '', press: '8' }, step: 2, d: 900 },
    { s: 'calc', o: { val: '2,468', hist: '', press: '=' }, cap: L('…and press =.'), step: 3, d: 1100 },
    { s: 'vault', cap: L('Your private vault opens. Any other number just calculates.'), step: 4, d: 3600 }
  ]);

  stepDemo('hide-phone', [
    { s: 'home', o: { hl: true }, cap: L('Chat sits in your hidden space (see the small badge). It works like any other app.'), step: 1, d: 4200 },
    { s: 'vaultList', o: { title: L('Hidden apps'), rows: [[L('Chat'), L('In your hidden space'), 'i-contacts'], [L('Gallery'), L('In your hidden space'), 'i-image'], [L('Add an app'), L('Move another app here'), '']] },
      cap: L('Inside your vault, you choose which apps go into the hidden space.'), step: 1, d: 4200 },
    { s: 'calc', o: { val: '8', hist: '', press: '8' }, cap: L('Someone wants your phone. You open the calculator and type your Lockdown PIN…'), step: 2, d: 1500 },
    { s: 'calc', o: { val: '8,642', hist: '', press: '=' }, cap: L('…then press =. To anyone watching, it is just a sum.'), step: 2, d: 2600 },
    { s: 'home', o: { hideWork: true }, cap: L('Chat is gone: no icon, no notifications. Your vault is locked too.'), step: 3, d: 4000 },
    { s: 'appsearch', o: { q: L('Chat') }, cap: L('Search for it? "No apps found". The whole hidden space is frozen.'), step: 3, d: 4000 },
    { s: 'passphrase', badge: L('Later, when you are safe'), cap: L('Your recovery passphrase unfreezes everything.'), step: 4, d: 3600 },
    { s: 'home', o: { hl: true }, cap: L('Chat is back, with all its messages. Nothing was deleted.'), step: 4, d: 4000 }
  ]);

  /* ---------- Ghost VPN visual ---------- */
  var vpnEl = document.getElementById('vpn-phone');
  if (vpnEl) {
    new Player(vpnEl, { loop: true }).load([
      { s: 'vpn', o: { st: 'off' }, d: 2600 }, { s: 'vpn', o: { st: 'wait' }, d: 1600 }, { s: 'vpn', o: { st: 'on' }, d: 4200 }
    ]);
  }

  /* ---------- Ghost Chat visual ---------- */
  var chatEl = document.getElementById('chat-phone');
  if (chatEl) {
    new Player(chatEl, { loop: true }).load([
      { s: 'chat', o: { n: 0 }, d: 1400 }, { s: 'chat', o: { n: 1 }, d: 1600 }, { s: 'chat', o: { n: 2 }, d: 1600 },
      { s: 'chat', o: { n: 3 }, d: 1800 }, { s: 'chat', o: { n: 4 }, d: 3200 }
    ]);
  }

  /* ---------- Ghost Phone visual ---------- */
  var gp = document.getElementById('gp-phone');
  if (gp) {
    new Player(gp, { loop: true, dur: 3000 }).load([
      { s: 'lockscreen', o: {} }, { s: 'home', o: { cover: L('Calculator'), coverIc: 'd-calc' } }, { s: 'calc' }, { s: 'vault' }
    ]);
  }

  /* ---------- Real-life scenes ---------- */
  var STORIES = {
    home: [
      { s: 'home', cap: L('Someone who knows your phone PIN starts going through your phone.') },
      { s: 'locked', o: { name: L('Gallery'), msg: L('Wrong PIN'), filled: 4 }, cap: L('Your gallery is behind the app locker. Their guess fails, and the try is recorded.') },
      { s: 'notes', cap: L('Your vault is disguised as a plain Notes app. Nothing to see here.') },
      { s: 'notes', o: { q: '••••' }, cap: L('They insist you open "the hidden stuff". You type your decoy PIN into search.') },
      { s: 'vaultList', o: { title: L('Notes'), rows: [[L('Grocery list'), L('Rice, eggs, tea')], [L('Birthday ideas'), L('For Dad')], [L('Recipes'), L('4 notes')], [L('Bus times'), L('Route 12')]] },
        cap: L('A believable vault opens, with harmless things. Nothing says it is a decoy.'), d: 4500 },
      { s: 'vaultList', o: { title: L('Intruders'), rows: [[L('Wrong PIN on Gallery'), L('Today 21:14 · try 1'), 'i-user'], [L('Wrong PIN on Gallery'), L('Today 21:13 · try 2'), 'i-user']] },
        cap: L('Later, alone, your main PIN opens the real vault, with a photo of who tried to get in.'), d: 4500 }
    ],
    border: [
      { s: 'home', o: { cover: L('Calculator'), coverIc: 'd-calc' }, cap: L('You are told to unlock your phone and hand it over.') },
      { s: 'calc', o: { val: '8,642', hist: '', press: '=' }, cap: L('First, you type your Lockdown PIN into the calculator and press =. It looks like a sum.') },
      { s: 'home', o: { cover: L('Calculator'), coverIc: 'd-calc', hideWork: true }, cap: L('Everything locks. Your hidden apps vanish: no icon, no notifications.'), d: 4300 },
      { s: 'calc', o: { val: '2,468', hist: '', press: '=' }, cap: L('The calculator just calculates. Even your main PIN opens nothing now.') },
      { s: 'passphrase', badge: L('Later, somewhere safe'), cap: L('Your recovery passphrase brings everything back. Lockdown hides; it does not delete.'), d: 4500 }
    ],
    escape: [
      { s: 'fakecall', cap: L('Feeling unsafe? In your vault, set up a fake call: who is calling, and when.') },
      { s: 'calc', cap: L('Tap Start. The vault locks at once and the disguise shows.') },
      { s: 'call', badge: L('30 seconds later'), cap: L('Your phone rings, with a plain call screen.'), d: 3400 },
      { s: 'call', o: { active: true, t: 8 }, cap: L('Answer, and you have your reason to step away. No real call is made.'), d: 4300 }
    ],
    stolen: [
      { s: 'lockscreen', o: { filled: 3 }, cap: L('A thief tries to guess your phone\'s PIN.') },
      { s: 'lockscreen', o: { msg: L('Wrong PIN'), filled: 6 }, cap: L('If you turn it on, a few wrong tries on the lock screen silently lock your vault down.') },
      { s: 'calc', o: { val: '1,234', hist: '', press: '=' }, cap: L('Even if they get in, they find a calculator. Everything in the vault is encrypted.') },
      { s: 'calc', o: { val: '0', hist: '' }, badge: L('7 days later'), cap: L('If you choose, a vault not opened for 7 days erases its data and hidden apps.'), d: 4500 }
    ]
  };
  var storyEl = document.getElementById('story-phone');
  if (storyEl) {
    var sp = new Player(storyEl, { dur: 3800 });
    var tabs = document.querySelectorAll('[data-story]');
    function pick(t) {
      for (var k = 0; k < tabs.length; k++) {
        var on = tabs[k] === t;
        tabs[k].setAttribute('aria-selected', on ? 'true' : 'false');
        tabs[k].tabIndex = on ? 0 : -1;
      }
      sp.ended = false;
      sp.running = false;
      sp.load(STORIES[t.getAttribute('data-story')]);
      sp.setBtn();
    }
    for (var k = 0; k < tabs.length; k++) tabs[k].addEventListener('click', function () { sp.want = !reduce || sp.want; pick(this); });
    pick(tabs[0]);
  }

  /* ---------- Disguise picker ---------- */
  var picker = document.getElementById('picker');
  if (picker) {
    var pPhone = document.getElementById('picker-phone');
    var pName = document.getElementById('picker-name'), pHow = document.getElementById('picker-how');
    var pp = new Player(pPhone, { autoplay: false });
    var btns = picker.querySelectorAll('[data-app]');
    function choose(b) {
      var a = APPS[+b.getAttribute('data-app')];
      for (var k = 0; k < btns.length; k++) btns[k].setAttribute('aria-pressed', btns[k] === b ? 'true' : 'false');
      pName.textContent = a[1];
      pHow.textContent = a[3];
      pp.load([{ s: a[0] }]);
    }
    for (var m = 0; m < btns.length; m++) btns[m].addEventListener('click', function () { choose(this); });
    choose(btns[0]);
  }

  /* ---------- Encryption: what is really stored ---------- */
  var enc = document.getElementById('enc');
  if (enc) {
    var txt = enc.querySelector('[data-text]'), label = enc.querySelector('[data-label]'), ebtn = enc.querySelector('[data-enc]');
    var plain = txt.textContent, isEnc = false, anim = null;
    function cipher(len) {
      // random bytes as hex pairs, cut to exactly len characters (no trailing half byte)
      var a = new Uint8Array(Math.ceil(len / 3) + 1), out = '';
      (window.crypto || window.msCrypto).getRandomValues(a);
      for (var i = 0; i < a.length; i++) out += (a[i] < 16 ? '0' : '') + a[i].toString(16) + ' ';
      out = out.slice(0, len);
      return out.charAt(len - 1) === ' ' || out.charAt(len - 2) === ' ' ? out.replace(/\s+\S?$/, '') : out;
    }
    function morph(from, to, done) {
      var len = Math.max(from.length, to.length), steps = reduce ? 1 : 24, s = 0;
      clearInterval(anim);
      anim = setInterval(function () {
        s++;
        var cut = Math.floor(len * s / steps), noise = cipher(len);
        txt.textContent = to.slice(0, cut) + noise.slice(cut, len);
        if (s >= steps) { clearInterval(anim); txt.textContent = to; if (done) done(); }
      }, 28);
    }
    ebtn.addEventListener('click', function () {
      isEnc = !isEnc;
      enc.classList.toggle('is-enc', isEnc);
      label.textContent = isEnc ? L('What is actually stored on the phone') : L('What you see in your vault');
      ebtn.textContent = isEnc ? L('Unlock with your PIN') : L('Show what is stored');
      morph(txt.textContent, isEnc ? cipher(Math.round(plain.length * 1.1)) : plain);
    });
  }

  /* ---------- Encryption: how long guessing takes ---------- */
  var range = document.getElementById('pin-len');
  if (range) {
    var outLen = document.getElementById('pin-len-out'), outN = document.getElementById('pin-count'), outT = document.getElementById('pin-time');
    function secsFor(n) {
      // 5 free tries, then waits of 30 s doubling up to 15 minutes per try.
      var waits = [30, 60, 120, 240, 480], s = 0;
      for (var k = 0; k < waits.length; k++) if (n > 5 + k) s += waits[k];
      if (n > 10) s += (n - 10) * 900;
      return s;
    }
    function fmt(s) {
      var d = s / 86400, n, u;
      if (d < 2) { n = Math.round(s / 3600); u = ['hours', 'ساعات', 'ساعة']; }
      else if (d < 365) { n = Math.round(d); u = ['days', 'أيام', 'يومًا']; }
      else { n = Math.round(d / 365); u = ['years', 'سنوات', 'سنة']; }
      if (!AR) return 'about ' + n.toLocaleString('en') + ' ' + u[0];
      var r = n % 100;  // Arabic counted noun: plural after 3-10, singular otherwise
      return 'نحو ' + n.toLocaleString('en') + ' ' + (r >= 3 && r <= 10 ? u[1] : u[2]);
    }
    function upd() {
      var len = +range.value, n = Math.pow(10, len);
      outLen.textContent = len + (AR ? ' أرقام' : ' digits');
      outN.textContent = n.toLocaleString('en');
      outT.textContent = fmt(secsFor(n));
      range.setAttribute('aria-valuetext', len + (AR ? ' أرقام' : ' digits'));
    }
    range.addEventListener('input', upd);
    upd();
  }
  /* ---------- Count-up numbers ---------- */
  var nums = document.querySelectorAll('[data-to]');
  function countUp(el) {
    var to = +el.getAttribute('data-to'), suf = el.getAttribute('data-suffix') || '', t0 = Date.now(), done = false;
    function finish() { done = true; el.textContent = to + suf; }
    if (reduce) { finish(); return; }
    setTimeout(finish, 1600); // always end on the real number
    function step() {
      if (done) return;
      var k = Math.min(1, (Date.now() - t0) / 1200), e = 1 - Math.pow(1 - k, 3);
      el.textContent = Math.round(to * e) + suf;
      if (k < 1) requestAnimationFrame(step); else finish();
    }
    requestAnimationFrame(step);
  }
  if ('IntersectionObserver' in window && nums.length) {
    var no = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { countUp(e.target); no.unobserve(e.target); } });
    }, { threshold: 0.6 });
    for (var q = 0; q < nums.length; q++) no.observe(nums[q]);
  }

  /* ---------- Reveal on scroll ---------- */
  // Skip the slide-in effect when the page is opened at a #section link, so nothing can start hidden.
  if (!reduce && !location.hash && 'IntersectionObserver' in window) {
    var items = document.querySelectorAll('.section h2, .section .section-lead, .card, .tile, .pin-card, .limit, .priv, .sec-item, .road li, .st, .vpn-feats li, .vh-col, .app-card, .demo-steps li, .offer-card, .gp, .licence, .enc-card, .explain > div, .final-inner > *');
    var ro = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); ro.unobserve(e.target); } });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    for (var r = 0; r < items.length; r++) {
      var it = items[r], rect = it.getBoundingClientRect();
      if (rect.top < window.innerHeight) continue;
      it.classList.add('reveal');
      it.style.transitionDelay = ((r % 4) * 70) + 'ms';
      ro.observe(it);
    }
    // Safety net: never leave something on screen hidden (e.g. after jumping to a #link)
    function showVisible() {
      var hidden = document.querySelectorAll('.reveal:not(.in)');
      for (var v = 0; v < hidden.length; v++) {
        var b = hidden[v].getBoundingClientRect();
        if (b.top < window.innerHeight && b.bottom > 0) hidden[v].classList.add('in');
      }
    }
    window.addEventListener('hashchange', function () { setTimeout(showVisible, 900); });
    window.addEventListener('load', function () { setTimeout(showVisible, 1200); });
    window.addEventListener('scroll', function () { clearTimeout(showVisible.t); showVisible.t = setTimeout(showVisible, 400); }, { passive: true });
  }
})();
