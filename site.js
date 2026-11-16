/* Ghost Protocol site: animated phone demos. No network, no storage, no tracking. */
(function () {
  'use strict';

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
      ['M', 'T', 'W', 'T', 'F', 'S', 'S'].forEach(function (x) { c += '<i>' + x + '</i>'; });
      for (d = 0; d < 6; d++) c += '<span></span>';
      for (d = 1; d <= 30; d++) c += '<span' + (d === 16 ? ' class="today"' : '') + '>' + d + '</span>';
      return bar('November 2026') + '<div class="calg">' + c + '</div><div class="list">' +
        row('Dentist', 'Today · 15:30') + row('Team lunch', 'Wed · 12:00') + '</div>';
    },
    clock: function () {
      return bar('Alarm', '<span class="plus">+</span>') + '<div class="bigt">07:30</div><p class="mut c">Next alarm in 17 h</p><div class="list">' +
        row('07:30', 'Weekdays', tg(true)) + row('09:00', 'Saturday', tg(false)) + row('06:45', 'Gym', tg(false)) + '</div>';
    },
    notes: function (o) {
      o = o || {};
      return bar('Notes') + '<div class="search">' + ic('i-search') + (o.q ? '<b>' + o.q + '</b>' : '<span>Search notes</span>') + '</div><div class="list">' +
        row('Shopping list', 'Milk, rice, tea, lemons') + row('Meeting notes', 'Budget, next steps') + row('Lentil soup', 'Onion, garlic, cumin') + row('Books to read', '3 items') + '</div>';
    },
    locked: function (o) {
      o = o || {};
      return '<div class="pinscr"><span class="lk">' + ic('i-lock') + '</span><b>' + (o.name || 'Files') + '</b><small>' + (o.msg || 'Enter PIN') + '</small>' +
        dots(4, o.filled || 0) + pad(o) + '</div>';
    },
    broken: function () {
      return bar('Files') + '<div class="list ghosted">' + row('Documents', '') + row('Downloads', '') + row('Images', '') + '</div>' +
        '<div class="dim"><div class="dlg"><b>Files keeps stopping</b><span>App info</span><span>Close app</span></div></div>';
    },
    compass: function () {
      return bar('Compass') + '<div class="cc"><svg class="dial" viewBox="0 0 200 200" aria-hidden="true"><circle cx="100" cy="100" r="88"/>' +
        '<text x="100" y="32">N</text><text x="172" y="105">E</text><text x="100" y="178">S</text><text x="28" y="105">W</text>' +
        '<g class="needle"><path d="M100 40l9 60h-18z" class="nn"/><path d="M100 160l9-60h-18z" class="ns"/></g><circle cx="100" cy="100" r="5"/></svg>' +
        '<b class="big">312° NW</b><small class="mut">Beirut · 33.89° N</small></div>';
    },
    converter: function () {
      return bar('Converter') + '<div class="chips"><span class="on">Length</span><span>Weight</span><span>Volume</span></div>' +
        '<div class="field"><small>Kilometres</small><b>10</b></div><div class="field"><small>Miles</small><b>6.214</b></div>' + pad();
    },
    timer: function () {
      return bar('Timer') + '<div class="cc"><svg class="ring" viewBox="0 0 120 120" aria-hidden="true"><circle cx="60" cy="60" r="50"/><circle cx="60" cy="60" r="50" class="arc"/></svg>' +
        '<b class="ringt">05:00</b></div><div class="chips c"><span>1 min</span><span class="on">5 min</span><span>10 min</span></div><div class="btnx">Start</div>';
    },
    tip: function () {
      return bar('Tip Calculator') + '<div class="field"><small>Bill</small><b>48.00</b></div><div class="chips"><span>10%</span><span class="on">15%</span><span>20%</span></div>' +
        '<div class="list">' + row('Tip', '', '<b>7.20</b>') + row('Total', '', '<b>55.20</b>') + row('Each (2 people)', '', '<b>27.60</b>') + '</div>';
    },
    level: function () {
      return bar('Level') + '<div class="cc"><div class="tube"><i class="bub"></i><span></span><span></span></div><b class="big">0.4°</b><small class="mut">Hold the phone on a surface</small>' +
        '<div class="bullseye"><i class="bub"></i></div></div>';
    },
    flashlight: function () {
      return '<div class="flash"><span class="pw">' + ic('i-power') + '</span><small>Tap to turn off</small></div>';
    },
    docs: function () {
      return bar('Docs', '<span class="tb"><b>B</b><i>I</i><u>U</u></span>') + '<div class="page"><b class="ttl">Quarterly report</b>' +
        '<p class="ln w9"></p><p class="ln w8"></p><p class="ln w9"></p><p class="ln w6"></p><b class="h">Summary</b><p class="ln w9"></p><p class="ln w7"></p><p class="ln w8"></p><p class="ln w5"></p></div>';
    },
    pdf: function () {
      return bar('Product guide.pdf') + '<div class="page pdfp"><b class="ttl">Product guide</b><small class="mut">Setup and care</small><div class="img"></div>' +
        '<p class="ln w9"></p><p class="ln w8"></p><p class="ln w9"></p><p class="ln w5"></p></div><p class="mut c">Page 1 of 8</p>';
    },
    todo: function () {
      function t(x, d) { return '<div class="row todo' + (d ? ' done' : '') + '"><span class="cb">' + (d ? ic('i-check') : '') + '</span><b>' + x + '</b></div>'; }
      return bar('To-do', '<span class="plus">+</span>') + '<div class="list">' + t('Call the bank', true) + t('Buy groceries') + t('Pick up parcel') + t('Pay electricity bill', true) + t('Email the school') + '</div>';
    },
    expenses: function () {
      return bar('Expenses') + '<div class="tot"><small>This month</small><b>412.50</b></div><div class="list">' +
        row('Groceries', 'Mon', '<b>54.20</b>') + row('Bus pass', 'Sun', '<b>30.00</b>') + row('Phone bill', 'Fri', '<b>25.00</b>') + row('Coffee', 'Thu', '<b>3.50</b>') + '</div>';
    },
    chess: function () {
      var back = ['♜', '♞', '♝', '♛', '♚', '♝', '♞', '♜'], b = '', r, c, p;
      for (r = 0; r < 8; r++) for (c = 0; c < 8; c++) {
        p = r === 0 ? back[c] : r === 1 ? '♟' : r === 6 ? '♙' : r === 7 ? back[c].replace(/./, function (x) { return String.fromCharCode(x.charCodeAt(0) - 6); }) : '';
        if (r === 4 && c === 4) p = '♙';
        if (r === 6 && c === 4) p = '';
        b += '<span class="' + ((r + c) % 2 ? 'dk' : 'lt') + (r < 2 ? ' bk' : '') + '">' + (p ? p + '︎' : '') + '</span>';
      }
      return bar('Chess') + '<p class="mut c">Your move · White</p><div class="board">' + b + '</div><div class="chips c"><span>New game</span><span>Undo</span></div>';
    },
    piano: function () {
      var w = '', i;
      for (i = 0; i < 8; i++) w += '<span class="wk' + (i === 2 ? ' pr' : '') + '"></span>';
      return bar('Piano') + '<p class="mut c">Tap the keys to play</p><div class="keys">' + w +
        '<i class="b1"></i><i class="b2"></i><i class="b3"></i><i class="b4"></i><i class="b5"></i></div>';
    },
    metronome: function () {
      return bar('Metronome') + '<div class="cc"><div class="metro"><i class="arm"></i></div><b class="big">96 <small>BPM</small></b>' +
        '<div class="chips c"><span>−</span><span class="on">4/4</span><span>+</span></div></div>';
    },
    dice: function () {
      function die(n) {
        var pos = { 1: [5], 3: [1, 5, 9], 5: [1, 3, 5, 7, 9], 6: [1, 3, 4, 6, 7, 9] }[n], s = '';
        for (var i = 1; i <= 9; i++) s += '<i' + (pos.indexOf(i) > -1 ? ' class="p"' : '') + '></i>';
        return '<span class="die">' + s + '</span>';
      }
      return bar('Dice') + '<div class="cc"><div class="dice">' + die(5) + die(3) + '</div><b class="big">8</b><small class="mut">Total of 2 dice</small></div><div class="btnx">Roll</div>';
    },
    morse: function () {
      return bar('Morse Code') + '<div class="field"><small>Text</small><b>HELLO</b></div><div class="field mono"><small>Morse</small><b>···· · ·−·· ·−·· −−−</b></div>' +
        '<div class="cc"><span class="mkey">Tap</span></div>';
    },
    /* scene screens */
    home: function (o) {
      o = o || {};
      var apps = [['Phone', 'i-call', 'h0'], ['Messages', 'i-note', 'h1'], ['Camera', 'i-camera', 'h2'], ['Gallery', 'i-image', 'h3'],
        ['Browser', 'i-globe', 'h4'], ['Maps', 'i-target', 'h5'], [o.cover || 'Notes', o.coverIc || 'd-notes', o.coverIc ? 'h8' : 'h6'], ['Chat', 'i-contacts', 'h7', 1]];
      return '<div class="homes"><div class="hclock">14:02</div><small>Monday, 16 November</small><div class="hgrid">' + apps.map(function (a) {
        if (a[3] && o.hideWork) return '<span class="ha gone"></span>';
        return '<span class="ha' + (a[3] ? ' work' + (o.hl ? ' hl' : '') : '') + '"><span class="hi ' + a[2] + '">' + ic(a[1]) + '</span>' + a[0] + '</span>';
      }).join('') + '</div></div>';
    },
    lockscreen: function (o) {
      o = o || {};
      return '<div class="lockscr"><div class="hclock">14:02</div><small>Monday, 16 November</small><small class="' + (o.msg ? 'err' : '') + '">' + (o.msg || 'Enter PIN') + '</small>' +
        dots(6, o.filled || 0) + pad(o) + '</div>';
    },
    vault: function () {
      return '<div class="vault"><div class="v-top"><span>Vault</span>' + ic('i-lock') + '</div><div class="v-status"><i></i>Locked and encrypted</div>' +
        '<p class="v-group">My things</p><div class="v-grid">' +
        vt('t1', 'i-image', 'Photos') + vt('t2', 'i-note', 'Notes') + vt('t3', 'i-file', 'Files') + vt('t4', 'i-key', 'Passwords') + vt('t5', 'i-card', 'Wallet') + vt('t6', 'i-call', 'Calls') +
        '</div><p class="v-group">Protection</p><div class="v-grid">' + vt('t7', 'i-layers', 'Hidden apps') + vt('t8', 'i-lock', 'App locker') + vt('t9', 'i-eye', 'Intruders') + '</div></div>';
    },
    vaultList: function (o) {
      return '<div class="vault"><div class="v-top"><span>‹ ' + o.title + '</span>' + ic('i-lock') + '</div><div class="list">' + o.rows.map(function (r) {
        return row(r[0], r[1], r[2] ? '<span class="thumb">' + ic(r[2]) + '</span>' : '');
      }).join('') + '</div></div>';
    },
    fakecall: function () {
      return '<div class="vault"><div class="v-top"><span>‹ Fake call</span>' + ic('i-lock') + '</div>' +
        '<div class="field"><small>Who is calling</small><b>Mum</b></div><p class="v-group">Rings in</p>' +
        '<div class="chips"><span>5 s</span><span class="on">30 s</span><span>1 min</span><span>5 min</span></div><div class="btnx pr">Start</div>' +
        '<p class="mut c">No real call is made.</p></div>';
    },
    call: function (o) {
      o = o || {};
      return '<div class="callscr"><small>' + (o.active ? '00:0' + (o.t || 8) : 'Incoming call') + '</small><span class="av">M</span><b>Mum</b><small>Mobile</small>' +
        (o.active ? '<div class="cbtns"><span class="end">' + ic('i-call') + '</span></div>'
          : '<div class="cbtns"><span class="end">' + ic('i-call') + '</span><span class="ans">' + ic('i-call') + '</span></div>') + '</div>';
    },
    appsearch: function (o) {
      return '<div class="homes"><div class="search dk">' + ic('i-search') + '<b>' + (o && o.q || 'Chat') + '</b></div>' +
        '<div class="noapps">' + ic('i-search') + '<b>No apps found</b><small>Nothing installed matches "' + (o && o.q || 'Chat') + '"</small></div></div>';
    },
    vpn: function (o) {
      var st = (o && o.st) || 'off';
      var label = { off: 'NOT protected', wait: 'Connecting…', on: 'You are protected' }[st];
      return bar('Ghost VPN') + '<div class="vpnapp ' + st + '"><span class="vbtn">' + ic('i-power') + '</span><b class="vst">' + label + '</b>' +
        '<small class="mut">' + (st === 'off' ? 'Tap to connect' : st === 'wait' ? 'Reaching the server' : 'All apps go through the tunnel') + '</small>' +
        '<div class="list vlist">' + row('Kill switch', '', '<span class="kon">ON</span>') + row('Account', '•••• •••• •••• ••••') + '</div></div>';
    },
    passphrase: function () {
      return '<div class="pp"><span class="lk">' + ic('i-key') + '</span><b>Recovery passphrase</b><div class="field"><b>•••••••••••••••••</b></div><div class="btnx pr">Unlock</div></div>';
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
    var label = this.ended ? 'Replay' : this.running ? 'Pause' : 'Play';
    this.btn.setAttribute('aria-label', label);
    this.btn.setAttribute('data-state', this.ended ? 'replay' : this.running ? 'pause' : 'play');
    var t = this.btn.querySelector('span');
    if (t) t.textContent = label;
  };

  /* ---------- Disguise data ---------- */
  var APPS = [
    ['calc', 'Calculator', 'd-calc', 'Type your PIN, then press =.'],
    ['calendar', 'Calendar', 'd-cal', 'Hold your secret day in any month, then enter your PIN.'],
    ['clock', 'Clock', 'd-clock', 'Tap your secret alarm, then enter your PIN.'],
    ['notes', 'Notes', 'd-notes', 'Type your PIN into search and press Enter. A wrong PIN shows "No results".'],
    ['locked', 'Locked app', 'd-locked', 'Opens straight to a PIN screen, with a name you choose.'],
    ['broken', 'Broken app', 'd-broken', 'Looks like an app that keeps crashing. Hold "Close app" for 30 seconds until it vibrates, let go, then hold it 10 seconds more.'],
    ['compass', 'Compass', 'd-compass', 'A working compass. Enter your PIN in the one place the app takes numbers.'],
    ['converter', 'Converter', 'd-convert', 'Type your PIN, then press and hold the button for 1 second. A normal tap just converts.'],
    ['timer', 'Timer', 'd-timer', 'Type your PIN, then press and hold the button for 1 second. A normal tap just starts the timer.'],
    ['tip', 'Tip Calculator', 'd-tip', 'Type your PIN, then press and hold the button for 1 second.'],
    ['level', 'Level', 'd-level', 'A working spirit level. Enter your PIN in the one place the app takes numbers.'],
    ['flashlight', 'Flashlight', 'd-flash', 'A working screen light. Enter your PIN in the one place the app takes numbers.'],
    ['docs', 'Docs', 'd-docs', 'A working word processor. Enter your PIN in the one place the app takes numbers.'],
    ['pdf', 'PDF Reader', 'd-pdf', 'Opens an 8-page product guide. Enter your PIN in the one place the app takes numbers.'],
    ['todo', 'To-do', 'd-todo', 'A working to-do list. Enter your PIN in the one place the app takes numbers.'],
    ['expenses', 'Expenses', 'd-exp', 'Type your PIN as an amount, then press and hold the button for 1 second.'],
    ['chess', 'Chess', 'd-chess', 'A full game of chess with a simple opponent. Enter your PIN in the one place the app takes numbers.'],
    ['piano', 'Piano', 'd-piano', 'Play your PIN as a short tune.'],
    ['metronome', 'Metronome', 'd-metro', 'A working metronome. Enter your PIN in the one place the app takes numbers.'],
    ['dice', 'Dice', 'd-dice', 'Type your PIN, then press and hold the button for 1 second.'],
    ['morse', 'Morse Code', 'd-morse', 'A working Morse translator. Enter your PIN in the one place the app takes numbers.']
  ];

  /* ---------- Hero: cycles through all 21 disguises ---------- */
  var hero = document.getElementById('hero-phone');
  if (hero) {
    var nameEl = hero.querySelector('[data-name]'), countEl = hero.querySelector('[data-count]'), iconEl = hero.querySelector('[data-icon]');
    var hp = new Player(hero, {
      dur: 2300, loop: true,
      onFrame: function (i) {
        nameEl.textContent = APPS[i][1];
        countEl.textContent = (i + 1) + ' of 21';
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
    { s: 'calc', o: {}, cap: 'An ordinary calculator. It really calculates.', step: 1, d: 2600 },
    { s: 'calc', o: { val: '2', hist: '', press: '2' }, cap: 'Type your secret PIN…', step: 2, d: 750 },
    { s: 'calc', o: { val: '24', hist: '', press: '4' }, step: 2, d: 750 },
    { s: 'calc', o: { val: '246', hist: '', press: '6' }, step: 2, d: 750 },
    { s: 'calc', o: { val: '2,468', hist: '', press: '8' }, step: 2, d: 900 },
    { s: 'calc', o: { val: '2,468', hist: '', press: '=' }, cap: '…and press =.', step: 3, d: 1100 },
    { s: 'vault', cap: 'Your private vault opens. Any other number just calculates.', step: 4, d: 3600 }
  ]);

  stepDemo('hide-phone', [
    { s: 'home', o: { hl: true }, cap: 'Chat sits in your hidden space (see the small badge). It works like any other app.', step: 1, d: 4200 },
    { s: 'vaultList', o: { title: 'Hidden apps', rows: [['Chat', 'In your hidden space', 'i-contacts'], ['Gallery', 'In your hidden space', 'i-image'], ['Add an app', 'Move another app here', '']] },
      cap: 'Inside your vault, you choose which apps go into the hidden space.', step: 1, d: 4200 },
    { s: 'calc', o: { val: '8', hist: '', press: '8' }, cap: 'Someone wants your phone. You open the calculator and type your Lockdown PIN…', step: 2, d: 1500 },
    { s: 'calc', o: { val: '8,642', hist: '', press: '=' }, cap: '…then press =. To anyone watching, it is just a sum.', step: 2, d: 2600 },
    { s: 'home', o: { hideWork: true }, cap: 'Chat is gone: no icon, no notifications. Your vault is locked too.', step: 3, d: 4000 },
    { s: 'appsearch', o: { q: 'Chat' }, cap: 'Search for it? "No apps found". The whole hidden space is frozen.', step: 3, d: 4000 },
    { s: 'passphrase', badge: 'Later, when you are safe', cap: 'Your recovery passphrase unfreezes everything.', step: 4, d: 3600 },
    { s: 'home', o: { hl: true }, cap: 'Chat is back, with all its messages. Nothing was deleted.', step: 4, d: 4000 }
  ]);

  /* ---------- Ghost VPN visual ---------- */
  var vpnEl = document.getElementById('vpn-phone');
  if (vpnEl) {
    new Player(vpnEl, { loop: true }).load([
      { s: 'vpn', o: { st: 'off' }, d: 2600 }, { s: 'vpn', o: { st: 'wait' }, d: 1600 }, { s: 'vpn', o: { st: 'on' }, d: 4200 }
    ]);
  }

  /* ---------- Ghost Phone visual ---------- */
  var gp = document.getElementById('gp-phone');
  if (gp) {
    new Player(gp, { loop: true, dur: 3000 }).load([
      { s: 'lockscreen', o: {} }, { s: 'home', o: { cover: 'Calculator', coverIc: 'd-calc' } }, { s: 'calc' }, { s: 'vault' }
    ]);
  }

  /* ---------- Real-life scenes ---------- */
  var STORIES = {
    home: [
      { s: 'home', cap: 'Someone who knows your phone PIN starts going through your phone.' },
      { s: 'locked', o: { name: 'Gallery', msg: 'Wrong PIN', filled: 4 }, cap: 'Your gallery is behind the app locker. Their guess fails, and the try is recorded.' },
      { s: 'notes', cap: 'Your vault is disguised as a plain Notes app. Nothing to see here.' },
      { s: 'notes', o: { q: '••••' }, cap: 'They insist you open "the hidden stuff". You type your decoy PIN into search.' },
      { s: 'vaultList', o: { title: 'Notes', rows: [['Grocery list', 'Rice, eggs, tea'], ['Birthday ideas', 'For Dad'], ['Recipes', '4 notes'], ['Bus times', 'Route 12']] },
        cap: 'A believable vault opens, with harmless things. Nothing says it is a decoy.', d: 4500 },
      { s: 'vaultList', o: { title: 'Intruders', rows: [['Wrong PIN on Gallery', 'Today 21:14 · try 1', 'i-user'], ['Wrong PIN on Gallery', 'Today 21:13 · try 2', 'i-user']] },
        cap: 'Later, alone, your main PIN opens the real vault, with a photo of who tried to get in.', d: 4500 }
    ],
    border: [
      { s: 'home', o: { cover: 'Calculator', coverIc: 'd-calc' }, cap: 'You are told to unlock your phone and hand it over.' },
      { s: 'calc', o: { val: '8,642', hist: '', press: '=' }, cap: 'First, you type your Lockdown PIN into the calculator and press =. It looks like a sum.' },
      { s: 'home', o: { cover: 'Calculator', coverIc: 'd-calc', hideWork: true }, cap: 'Everything locks. Your hidden apps vanish: no icon, no notifications.', d: 4300 },
      { s: 'calc', o: { val: '2,468', hist: '', press: '=' }, cap: 'The calculator just calculates. Even your main PIN opens nothing now.' },
      { s: 'passphrase', badge: 'Later, somewhere safe', cap: 'Your recovery passphrase brings everything back. Lockdown hides; it does not delete.', d: 4500 }
    ],
    escape: [
      { s: 'fakecall', cap: 'Feeling unsafe? In your vault, set up a fake call: who is calling, and when.' },
      { s: 'calc', cap: 'Tap Start. The vault locks at once and the disguise shows.' },
      { s: 'call', badge: '30 seconds later', cap: 'Your phone rings, with a plain call screen.', d: 3400 },
      { s: 'call', o: { active: true, t: 8 }, cap: 'Answer, and you have your reason to step away. No real call is made.', d: 4300 }
    ],
    stolen: [
      { s: 'lockscreen', o: { filled: 3 }, cap: 'A thief tries to guess your phone\'s PIN.' },
      { s: 'lockscreen', o: { msg: 'Wrong PIN', filled: 6 }, cap: 'If you turn it on, a few wrong tries on the lock screen silently lock your vault down.' },
      { s: 'calc', o: { val: '1,234', hist: '', press: '=' }, cap: 'Even if they get in, they find a calculator. Everything in the vault is encrypted.' },
      { s: 'calc', o: { val: '0', hist: '' }, badge: '7 days later', cap: 'If you choose, a vault not opened for 7 days erases its data and hidden apps.', d: 4500 }
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
      label.textContent = isEnc ? 'What is actually stored on the phone' : 'What you see in your vault';
      ebtn.textContent = isEnc ? 'Unlock with your PIN' : 'Show what is stored';
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
      var d = s / 86400;
      if (d < 2) return 'about ' + Math.round(s / 3600) + ' hours';
      if (d < 365) return 'about ' + Math.round(d) + ' days';
      var y = d / 365;
      return 'about ' + Math.round(y).toLocaleString('en') + ' years';
    }
    function upd() {
      var len = +range.value, n = Math.pow(10, len);
      outLen.textContent = len + ' digits';
      outN.textContent = n.toLocaleString('en');
      outT.textContent = fmt(secsFor(n));
      range.setAttribute('aria-valuetext', len + ' digits');
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
    var items = document.querySelectorAll('.section h2, .section .section-lead, .card, .tile, .pin-card, .limit, .priv, .sec-item, .road li, .st, .vpn-feats li, .vh-col, .demo-steps li, .offer-card, .gp, .licence, .enc-card, .explain > div, .final-inner > *');
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
