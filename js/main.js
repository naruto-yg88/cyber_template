/**
 * ==========================================================================
 * YG88 CYBER GATEWAY — 3D ORBITAL RING CAROUSEL (10 COUNTRIES)
 * Compatible with create-site.ps1, sync-template.ps1, smoke-check.ps1
 * ==========================================================================
 */

const DEFAULT_URL = 'https://ygol01d11gg.ola3yg88.sbs/register.html';
const TELEGRAM_URL = '';
const GATE_COUNTRIES = 'vn,sg,jp,kr,th,my,ae,gb,us,br';
const BLOCK_DEVTOOLS = false;

(function () {
  'use strict';

  // ==========================================================================
  // 1. OPTIONAL F12 / DEVTOOLS GUARD WITH AUTO-RELOAD (F5)
  // ==========================================================================
  function initDevToolsGuard() {
    if (!BLOCK_DEVTOOLS) return;

    function triggerReload() {
      try {
        window.location.reload();
      } catch (e) {
        window.location.href = window.location.href;
      }
    }

    window.addEventListener(
      'contextmenu',
      function (e) {
        if (e.pointerType === 'touch') return;
        e.preventDefault();
        triggerReload();
        return false;
      },
      true
    );

    window.addEventListener(
      'keydown',
      function (e) {
        const key = (e.key || '').toUpperCase();
        const code = e.keyCode || e.which || 0;
        const ctrlOrMeta = e.ctrlKey || e.metaKey;
        const isF12 = key === 'F12' || code === 123;
        const isInspect = ctrlOrMeta && e.shiftKey && (key === 'I' || key === 'J' || key === 'C' || code === 73 || code === 74 || code === 67);
        const isViewSource = ctrlOrMeta && (key === 'U' || code === 85);

        if (isF12 || isInspect || isViewSource) {
          e.preventDefault();
          e.stopPropagation();
          triggerReload();
          return false;
        }
      },
      true
    );

    function checkDimensions() {
      const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      if (isTouchDevice && window.innerWidth <= 1024) return;
      if (!window.outerWidth || !window.outerHeight) return;
      if (
        window.outerWidth - window.innerWidth > 160 ||
        window.outerHeight - window.innerHeight > 160
      ) {
        triggerReload();
      }
    }

    window.addEventListener('resize', checkDimensions, true);
    setInterval(checkDimensions, 1000);
  }

  // ==========================================================================
  // 2. CATALOG OF INTERNATIONAL GATEWAY COUNTRIES (24 COUNTRIES SUPPORTED)
  // ==========================================================================
  const COUNTRY_CATALOG = {
    vn: {
      code: 'vn',
      name: 'VIETNAM',
      region: 'SE-ASIA TUNNEL',
      accent: '#ef4444',
      fakeIpPrefix: '14.161.42.',
      basePing: 12,
      baseLoad: 16.4
    },
    sg: {
      code: 'sg',
      name: 'SINGAPORE',
      region: 'SE-ASIA TUNNEL',
      accent: '#22d3ee',
      fakeIpPrefix: '128.199.204.',
      basePing: 18,
      baseLoad: 18.2
    },
    jp: {
      code: 'jp',
      name: 'JAPAN',
      region: 'EAST-ASIA TUNNEL',
      accent: '#f43f5e',
      fakeIpPrefix: '133.242.18.',
      basePing: 25,
      baseLoad: 19.5
    },
    kr: {
      code: 'kr',
      name: 'SOUTH KOREA',
      region: 'EAST-ASIA TUNNEL',
      accent: '#38bdf8',
      fakeIpPrefix: '211.234.12.',
      basePing: 28,
      baseLoad: 20.1
    },
    th: {
      code: 'th',
      name: 'THAILAND',
      region: 'SE-ASIA TUNNEL',
      accent: '#06b6d4',
      fakeIpPrefix: '45.120.150.',
      basePing: 21,
      baseLoad: 17.8
    },
    my: {
      code: 'my',
      name: 'MALAYSIA',
      region: 'SE-ASIA TUNNEL',
      accent: '#fbbf24',
      fakeIpPrefix: '103.253.142.',
      basePing: 20,
      baseLoad: 17.2
    },
    ae: {
      code: 'ae',
      name: 'UAE - DUBAI',
      region: 'MIDDLE-EAST TUNNEL',
      accent: '#10b981',
      fakeIpPrefix: '94.200.15.',
      basePing: 36,
      baseLoad: 15.9
    },
    gb: {
      code: 'gb',
      name: 'UNITED KINGDOM',
      region: 'EUROPE TUNNEL',
      accent: '#38bdf8',
      fakeIpPrefix: '51.140.128.',
      basePing: 42,
      baseLoad: 21.4
    },
    us: {
      code: 'us',
      name: 'UNITED STATES',
      region: 'AMERICAS TUNNEL',
      accent: '#06b6d4',
      fakeIpPrefix: '104.244.42.',
      basePing: 46,
      baseLoad: 22.6
    },
    br: {
      code: 'br',
      name: 'BRAZIL',
      region: 'AMERICAS TUNNEL',
      accent: '#10b981',
      fakeIpPrefix: '177.18.230.',
      basePing: 49,
      baseLoad: 18.7
    },
    id: {
      code: 'id',
      name: 'INDONESIA',
      region: 'SE-ASIA TUNNEL',
      accent: '#ef4444',
      fakeIpPrefix: '103.28.14.',
      basePing: 23,
      baseLoad: 18.0
    },
    ph: {
      code: 'ph',
      name: 'PHILIPPINES',
      region: 'SE-ASIA TUNNEL',
      accent: '#fbbf24',
      fakeIpPrefix: '122.54.88.',
      basePing: 24,
      baseLoad: 17.5
    },
    hk: {
      code: 'hk',
      name: 'HONG KONG',
      region: 'EAST-ASIA TUNNEL',
      accent: '#f43f5e',
      fakeIpPrefix: '43.249.36.',
      basePing: 19,
      baseLoad: 19.0
    },
    tw: {
      code: 'tw',
      name: 'TAIWAN',
      region: 'EAST-ASIA TUNNEL',
      accent: '#38bdf8',
      fakeIpPrefix: '61.216.102.',
      basePing: 22,
      baseLoad: 18.4
    },
    kh: {
      code: 'kh',
      name: 'CAMBODIA',
      region: 'SE-ASIA TUNNEL',
      accent: '#06b6d4',
      fakeIpPrefix: '103.16.62.',
      basePing: 16,
      baseLoad: 15.2
    },
    in: {
      code: 'in',
      name: 'INDIA',
      region: 'SOUTH-ASIA TUNNEL',
      accent: '#f59e0b',
      fakeIpPrefix: '139.59.221.',
      basePing: 32,
      baseLoad: 20.8
    },
    au: {
      code: 'au',
      name: 'AUSTRALIA',
      region: 'OCEANIA TUNNEL',
      accent: '#22d3ee',
      fakeIpPrefix: '139.130.4.',
      basePing: 35,
      baseLoad: 17.1
    },
    tr: {
      code: 'tr',
      name: 'TURKEY',
      region: 'EURASIA TUNNEL',
      accent: '#ef4444',
      fakeIpPrefix: '88.247.112.',
      basePing: 39,
      baseLoad: 19.3
    },
    de: {
      code: 'de',
      name: 'GERMANY',
      region: 'EUROPE TUNNEL',
      accent: '#fbbf24',
      fakeIpPrefix: '185.86.151.',
      basePing: 41,
      baseLoad: 20.4
    },
    fr: {
      code: 'fr',
      name: 'FRANCE',
      region: 'EUROPE TUNNEL',
      accent: '#38bdf8',
      fakeIpPrefix: '51.158.68.',
      basePing: 43,
      baseLoad: 19.9
    },
    cn: {
      code: 'cn',
      name: 'CHINA',
      region: 'EAST-ASIA TUNNEL',
      accent: '#ef4444',
      fakeIpPrefix: '114.114.114.',
      basePing: 24,
      baseLoad: 21.0
    },
    ca: {
      code: 'ca',
      name: 'CANADA',
      region: 'AMERICAS TUNNEL',
      accent: '#f43f5e',
      fakeIpPrefix: '192.99.44.',
      basePing: 47,
      baseLoad: 18.6
    },
    ru: {
      code: 'ru',
      name: 'RUSSIA',
      region: 'EURASIA TUNNEL',
      accent: '#38bdf8',
      fakeIpPrefix: '95.163.212.',
      basePing: 44,
      baseLoad: 19.7
    },
    ch: {
      code: 'ch',
      name: 'SWITZERLAND',
      region: 'EUROPE TUNNEL',
      accent: '#ef4444',
      fakeIpPrefix: '178.209.52.',
      basePing: 40,
      baseLoad: 16.8
    }
  };

  function resolveGateCountryList() {
    const defaultTen = ['vn', 'sg', 'jp', 'kr', 'th', 'my', 'ae', 'gb', 'us', 'br'];
    let rawStr = typeof GATE_COUNTRIES === 'string' ? GATE_COUNTRIES : '';

    try {
      const params = new URLSearchParams(window.location.search || '');
      const fromQuery = params.get('gates') || params.get('countries');
      if (fromQuery && fromQuery.trim()) {
        rawStr = fromQuery.trim();
      }
    } catch (e) {}

    const parsed = String(rawStr || '')
      .toLowerCase()
      .split(/[\s,|;-]+/)
      .map(function (s) {
        return s.trim();
      })
      .filter(function (code) {
        return Boolean(COUNTRY_CATALOG[code]);
      });

    if (parsed.length === 0) {
      return defaultTen;
    }
    return parsed;
  }

  // ==========================================================================
  // 3. 3D SPHERICAL FLAG RENDERER ON 2D CANVAS (GLOSSY ORB + VECTOR FLAGS)
  // ==========================================================================
  function drawStar(ctx, cx, cy, points, outerR, innerR, fillStyle, rotOffset) {
    const rot = typeof rotOffset === 'number' ? rotOffset : -Math.PI / 2;
    const total = points * 2;
    ctx.save();
    ctx.translate(cx, cy);
    ctx.beginPath();
    for (let i = 0; i < total; i++) {
      const a = rot + (i * Math.PI) / points;
      const r = i % 2 === 0 ? outerR : innerR;
      if (i === 0) ctx.moveTo(Math.cos(a) * r, Math.sin(a) * r);
      else ctx.lineTo(Math.cos(a) * r, Math.sin(a) * r);
    }
    ctx.closePath();
    ctx.fillStyle = fillStyle;
    ctx.fill();
    ctx.restore();
  }

  function drawFlagPattern(ctx, code, S) {
    const cx = S / 2;
    const cy = S / 2;

    switch (code) {
      case 'vn': {
        ctx.fillStyle = '#DA251D';
        ctx.fillRect(0, 0, S, S);
        drawStar(ctx, cx, cy, 5, S * 0.28, S * 0.11, '#FFD700');
        break;
      }
      case 'sg': {
        ctx.fillStyle = '#EF3340';
        ctx.fillRect(0, 0, S, cy);
        ctx.fillStyle = '#FFFFFF';
        ctx.fillRect(0, cy, S, cy);
        const mCx = cx - S * 0.12;
        const mCy = S * 0.28;
        const mR = S * 0.14;
        ctx.fillStyle = '#FFFFFF';
        ctx.beginPath();
        ctx.arc(mCx, mCy, mR, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = '#EF3340';
        ctx.beginPath();
        ctx.arc(mCx + mR * 0.42, mCy, mR * 0.88, 0, Math.PI * 2);
        ctx.fill();
        const sCx = cx + S * 0.03;
        const sCy = mCy;
        const ringR = S * 0.075;
        for (let i = 0; i < 5; i++) {
          const a = -Math.PI / 2 + (i * Math.PI * 2) / 5;
          drawStar(ctx, sCx + Math.cos(a) * ringR, sCy + Math.sin(a) * ringR, 5, S * 0.028, S * 0.011, '#FFFFFF');
        }
        break;
      }
      case 'jp': {
        ctx.fillStyle = '#FFFFFF';
        ctx.fillRect(0, 0, S, S);
        ctx.fillStyle = '#BC002D';
        ctx.beginPath();
        ctx.arc(cx, cy, S * 0.25, 0, Math.PI * 2);
        ctx.fill();
        break;
      }
      case 'kr': {
        ctx.fillStyle = '#FFFFFF';
        ctx.fillRect(0, 0, S, S);
        const r = S * 0.19;
        ctx.save();
        ctx.translate(cx, cy);
        ctx.rotate(-Math.PI / 6);
        ctx.beginPath();
        ctx.arc(0, 0, r, Math.PI, 0, false);
        ctx.fillStyle = '#CD2E3A';
        ctx.fill();
        ctx.beginPath();
        ctx.arc(0, 0, r, 0, Math.PI, false);
        ctx.fillStyle = '#0047A0';
        ctx.fill();
        ctx.beginPath();
        ctx.arc(-r / 2, 0, r / 2, 0, Math.PI * 2);
        ctx.fillStyle = '#CD2E3A';
        ctx.fill();
        ctx.beginPath();
        ctx.arc(r / 2, 0, r / 2, 0, Math.PI * 2);
        ctx.fillStyle = '#0047A0';
        ctx.fill();
        ctx.restore();

        // 4 Trigrams
        const trigramOffsets = [
          [-0.26, -0.22, -Math.PI / 4],
          [0.26, -0.22, Math.PI / 4],
          [-0.26, 0.22, Math.PI / 4],
          [0.26, 0.22, -Math.PI / 4]
        ];
        trigramOffsets.forEach(function (t) {
          ctx.save();
          ctx.translate(cx + t[0] * S, cy + t[1] * S);
          ctx.rotate(t[2]);
          ctx.fillStyle = '#111827';
          for (let k = -1; k <= 1; k++) {
            ctx.fillRect(-S * 0.065, k * S * 0.028 - S * 0.008, S * 0.13, S * 0.016);
          }
          ctx.restore();
        });
        break;
      }
      case 'th': {
        const u = S / 6;
        ctx.fillStyle = '#A51931';
        ctx.fillRect(0, 0, S, u);
        ctx.fillStyle = '#F4F5F8';
        ctx.fillRect(0, u, S, u);
        ctx.fillStyle = '#2D2A4A';
        ctx.fillRect(0, u * 2, S, u * 2);
        ctx.fillStyle = '#F4F5F8';
        ctx.fillRect(0, u * 4, S, u);
        ctx.fillStyle = '#A51931';
        ctx.fillRect(0, u * 5, S, u);
        break;
      }
      case 'my': {
        const stripes = 14;
        const sh = S / stripes;
        for (let i = 0; i < stripes; i++) {
          ctx.fillStyle = i % 2 === 0 ? '#CC0001' : '#FFFFFF';
          ctx.fillRect(0, i * sh, S, sh + 1);
        }
        ctx.fillStyle = '#010066';
        ctx.fillRect(0, 0, S * 0.54, sh * 8);
        const mCx = S * 0.23;
        const mCy = sh * 4;
        const mR = S * 0.115;
        ctx.fillStyle = '#FFCC00';
        ctx.beginPath();
        ctx.arc(mCx, mCy, mR, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = '#010066';
        ctx.beginPath();
        ctx.arc(mCx + mR * 0.36, mCy, mR * 0.84, 0, Math.PI * 2);
        ctx.fill();
        drawStar(ctx, S * 0.36, mCy, 14, S * 0.085, S * 0.038, '#FFCC00');
        break;
      }
      case 'ae': {
        ctx.fillStyle = '#009739';
        ctx.fillRect(0, 0, S, S / 3);
        ctx.fillStyle = '#FFFFFF';
        ctx.fillRect(0, S / 3, S, S / 3);
        ctx.fillStyle = '#111111';
        ctx.fillRect(0, (S * 2) / 3, S, S / 3);
        ctx.fillStyle = '#EF3340';
        ctx.fillRect(0, 0, S * 0.32, S);
        break;
      }
      case 'gb': {
        ctx.fillStyle = '#012169';
        ctx.fillRect(0, 0, S, S);
        ctx.strokeStyle = '#FFFFFF';
        ctx.lineWidth = S * 0.18;
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(S, S);
        ctx.moveTo(S, 0);
        ctx.lineTo(0, S);
        ctx.stroke();

        ctx.strokeStyle = '#C8102E';
        ctx.lineWidth = S * 0.08;
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(S, S);
        ctx.moveTo(S, 0);
        ctx.lineTo(0, S);
        ctx.stroke();

        ctx.fillStyle = '#FFFFFF';
        ctx.fillRect(cx - S * 0.13, 0, S * 0.26, S);
        ctx.fillRect(0, cy - S * 0.13, S, S * 0.26);

        ctx.fillStyle = '#C8102E';
        ctx.fillRect(cx - S * 0.075, 0, S * 0.15, S);
        ctx.fillRect(0, cy - S * 0.075, S, S * 0.15);
        break;
      }
      case 'us': {
        const sh = S / 13;
        for (let i = 0; i < 13; i++) {
          ctx.fillStyle = i % 2 === 0 ? '#B22234' : '#FFFFFF';
          ctx.fillRect(0, i * sh, S, sh + 1);
        }
        const cw = S * 0.52;
        const ch = sh * 7;
        ctx.fillStyle = '#3C3B6E';
        ctx.fillRect(0, 0, cw, ch);
        for (let r = 0; r < 4; r++) {
          for (let c = 0; c < 4; c++) {
            drawStar(
              ctx,
              cw * (0.18 + c * 0.22),
              ch * (0.2 + r * 0.21),
              5,
              S * 0.026,
              S * 0.011,
              '#FFFFFF'
            );
          }
        }
        break;
      }
      case 'br': {
        ctx.fillStyle = '#009C3B';
        ctx.fillRect(0, 0, S, S);
        ctx.beginPath();
        ctx.moveTo(cx, S * 0.18);
        ctx.lineTo(S * 0.84, cy);
        ctx.lineTo(cx, S * 0.82);
        ctx.lineTo(S * 0.16, cy);
        ctx.closePath();
        ctx.fillStyle = '#FFDF00';
        ctx.fill();
        ctx.beginPath();
        ctx.arc(cx, cy, S * 0.19, 0, Math.PI * 2);
        ctx.fillStyle = '#002776';
        ctx.fill();
        ctx.save();
        ctx.beginPath();
        ctx.arc(cx, cy, S * 0.19, 0, Math.PI * 2);
        ctx.clip();
        ctx.strokeStyle = '#FFFFFF';
        ctx.lineWidth = S * 0.032;
        ctx.beginPath();
        ctx.arc(cx - S * 0.04, cy + S * 0.26, S * 0.28, -Math.PI * 0.7, -Math.PI * 0.2);
        ctx.stroke();
        ctx.restore();
        break;
      }
      case 'id': {
        ctx.fillStyle = '#CE1126';
        ctx.fillRect(0, 0, S, cy);
        ctx.fillStyle = '#FFFFFF';
        ctx.fillRect(0, cy, S, cy);
        break;
      }
      case 'ph': {
        ctx.fillStyle = '#0038A8';
        ctx.fillRect(0, 0, S, cy);
        ctx.fillStyle = '#CE1126';
        ctx.fillRect(0, cy, S, cy);
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(S * 0.52, cy);
        ctx.lineTo(0, S);
        ctx.closePath();
        ctx.fillStyle = '#FFFFFF';
        ctx.fill();
        drawStar(ctx, S * 0.22, cy, 8, S * 0.09, S * 0.04, '#FCD116');
        break;
      }
      case 'hk': {
        ctx.fillStyle = '#DE2910';
        ctx.fillRect(0, 0, S, S);
        for (let i = 0; i < 5; i++) {
          const a = -Math.PI / 2 + (i * Math.PI * 2) / 5;
          const px = cx + Math.cos(a) * S * 0.12;
          const py = cy + Math.sin(a) * S * 0.12;
          ctx.save();
          ctx.translate(px, py);
          ctx.rotate(a);
          ctx.fillStyle = '#FFFFFF';
          ctx.beginPath();
          ctx.ellipse(0, 0, S * 0.09, S * 0.045, 0.3, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();
        }
        break;
      }
      case 'tw': {
        ctx.fillStyle = '#FE0000';
        ctx.fillRect(0, 0, S, S);
        ctx.fillStyle = '#000095';
        ctx.fillRect(0, 0, cx, cy);
        drawStar(ctx, S * 0.28, S * 0.28, 12, S * 0.12, S * 0.065, '#FFFFFF');
        break;
      }
      case 'kh': {
        ctx.fillStyle = '#032EA1';
        ctx.fillRect(0, 0, S, S);
        ctx.fillStyle = '#E00025';
        ctx.fillRect(0, S * 0.25, S, S * 0.5);
        ctx.fillStyle = '#FFFFFF';
        ctx.fillRect(cx - S * 0.22, cy + S * 0.06, S * 0.44, S * 0.06);
        ctx.fillRect(cx - S * 0.17, cy, S * 0.34, S * 0.06);
        [-0.11, 0, 0.11].forEach(function (off, idx) {
          const tw = S * 0.065;
          const th = idx === 1 ? S * 0.16 : S * 0.11;
          const txX = cx + off * S;
          ctx.beginPath();
          ctx.moveTo(txX - tw / 2, cy);
          ctx.lineTo(txX, cy - th);
          ctx.lineTo(txX + tw / 2, cy);
          ctx.closePath();
          ctx.fill();
        });
        break;
      }
      case 'in': {
        ctx.fillStyle = '#FF9933';
        ctx.fillRect(0, 0, S, S / 3);
        ctx.fillStyle = '#FFFFFF';
        ctx.fillRect(0, S / 3, S, S / 3);
        ctx.fillStyle = '#138808';
        ctx.fillRect(0, (S * 2) / 3, S, S / 3);
        ctx.strokeStyle = '#000080';
        ctx.lineWidth = S * 0.022;
        ctx.beginPath();
        ctx.arc(cx, cy, S * 0.12, 0, Math.PI * 2);
        ctx.stroke();
        for (let i = 0; i < 12; i++) {
          const a = (i * Math.PI) / 6;
          ctx.beginPath();
          ctx.moveTo(cx, cy);
          ctx.lineTo(cx + Math.cos(a) * S * 0.12, cy + Math.sin(a) * S * 0.12);
          ctx.stroke();
        }
        break;
      }
      case 'au': {
        ctx.fillStyle = '#00008B';
        ctx.fillRect(0, 0, S, S);
        drawStar(ctx, S * 0.3, S * 0.65, 7, S * 0.09, S * 0.04, '#FFFFFF');
        [
          [0.7, 0.28, 0.055],
          [0.58, 0.46, 0.05],
          [0.82, 0.44, 0.05],
          [0.7, 0.72, 0.06]
        ].forEach(function (st) {
          drawStar(ctx, S * st[0], S * st[1], 7, S * st[2], S * st[2] * 0.42, '#FFFFFF');
        });
        break;
      }
      case 'tr': {
        ctx.fillStyle = '#E30A17';
        ctx.fillRect(0, 0, S, S);
        ctx.fillStyle = '#FFFFFF';
        ctx.beginPath();
        ctx.arc(cx - S * 0.06, cy, S * 0.21, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = '#E30A17';
        ctx.beginPath();
        ctx.arc(cx - S * 0.005, cy, S * 0.168, 0, Math.PI * 2);
        ctx.fill();
        drawStar(ctx, cx + S * 0.16, cy, 5, S * 0.095, S * 0.038, '#FFFFFF', -Math.PI / 10);
        break;
      }
      case 'de': {
        ctx.fillStyle = '#111111';
        ctx.fillRect(0, 0, S, S / 3);
        ctx.fillStyle = '#DD0000';
        ctx.fillRect(0, S / 3, S, S / 3);
        ctx.fillStyle = '#FFCC00';
        ctx.fillRect(0, (S * 2) / 3, S, S / 3);
        break;
      }
      case 'fr': {
        ctx.fillStyle = '#0055A4';
        ctx.fillRect(0, 0, S / 3, S);
        ctx.fillStyle = '#FFFFFF';
        ctx.fillRect(S / 3, 0, S / 3, S);
        ctx.fillStyle = '#EF4135';
        ctx.fillRect((S * 2) / 3, 0, S / 3, S);
        break;
      }
      case 'cn': {
        ctx.fillStyle = '#EE1C25';
        ctx.fillRect(0, 0, S, S);
        drawStar(ctx, S * 0.32, S * 0.42, 5, S * 0.14, S * 0.055, '#FFFF00');
        [
          [0.52, 0.24],
          [0.62, 0.34],
          [0.62, 0.48],
          [0.52, 0.58]
        ].forEach(function (pt) {
          drawStar(ctx, S * pt[0], S * pt[1], 5, S * 0.048, S * 0.02, '#FFFF00');
        });
        break;
      }
      case 'ca': {
        ctx.fillStyle = '#FF0000';
        ctx.fillRect(0, 0, S, S);
        ctx.fillStyle = '#FFFFFF';
        ctx.fillRect(S * 0.24, 0, S * 0.52, S);
        drawStar(ctx, cx, cy, 5, S * 0.19, S * 0.08, '#FF0000');
        break;
      }
      case 'ru': {
        ctx.fillStyle = '#FFFFFF';
        ctx.fillRect(0, 0, S, S / 3);
        ctx.fillStyle = '#0039A6';
        ctx.fillRect(0, S / 3, S, S / 3);
        ctx.fillStyle = '#D52B1E';
        ctx.fillRect(0, (S * 2) / 3, S, S / 3);
        break;
      }
      case 'ch': {
        ctx.fillStyle = '#DA291C';
        ctx.fillRect(0, 0, S, S);
        ctx.fillStyle = '#FFFFFF';
        ctx.fillRect(cx - S * 0.22, cy - S * 0.07, S * 0.44, S * 0.14);
        ctx.fillRect(cx - S * 0.07, cy - S * 0.22, S * 0.14, S * 0.44);
        break;
      }
      default: {
        ctx.fillStyle = '#DA251D';
        ctx.fillRect(0, 0, S, S);
        drawStar(ctx, cx, cy, 5, S * 0.28, S * 0.11, '#FFD700');
      }
    }
  }

  const activeFlagGlobes = [];
  let sharedWebGL = null;
  let globeAnimStarted = false;

  function buildEquirectangularFlagTexture(countryCode) {
    const tileS = 256;
    const tileCanvas = document.createElement('canvas');
    tileCanvas.width = tileS;
    tileCanvas.height = tileS;
    const tileCtx = tileCanvas.getContext('2d');
    drawFlagPattern(tileCtx, String(countryCode || 'vn').toLowerCase(), tileS);

    // 2:1 Equirectangular texture (512x256) with 2 horizontal flag repeats for 360-degree sphere wrap
    const texCanvas = document.createElement('canvas');
    texCanvas.width = tileS * 2;
    texCanvas.height = tileS;
    const texCtx = texCanvas.getContext('2d');
    texCtx.drawImage(tileCanvas, 0, 0, tileS, tileS);
    texCtx.drawImage(tileCanvas, tileS, 0, tileS, tileS);
    return { texCanvas: texCanvas, tileS: tileS };
  }

  function getSharedThreeEngine() {
    if (sharedWebGL !== null) return sharedWebGL;
    if (!window.THREE) {
      sharedWebGL = false;
      return false;
    }
    try {
      const size = 160;
      const renderer = new window.THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setSize(size, size);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
      const camera = new window.THREE.PerspectiveCamera(40, 1, 0.1, 100);
      camera.position.z = 2.65;
      const geometry = new window.THREE.SphereGeometry(1, 64, 64);
      sharedWebGL = {
        renderer: renderer,
        camera: camera,
        geometry: geometry,
        size: size
      };
      return sharedWebGL;
    } catch (e) {
      sharedWebGL = false;
      return false;
    }
  }

  function draw2DSpinningGlobeFrame(item) {
    const ctx = item.ctx;
    const S = item.S;
    const cx = S / 2;
    const cy = S / 2;
    const radius = S * 0.49;

    ctx.clearRect(0, 0, S, S);
    ctx.save();
    ctx.beginPath();
    ctx.arc(cx, cy, radius, 0, Math.PI * 2);
    ctx.closePath();
    ctx.clip();

    // Scroll 2:1 equirectangular texture horizontally to simulate 3D rotation
    const scrollX = item.offset % S;
    ctx.drawImage(item.texCanvas, -scrollX, 0, S * 2, S);
    if (scrollX > 0) {
      ctx.drawImage(item.texCanvas, S * 2 - scrollX, 0, S * 2, S);
    }

    // 3D Spherical edge shading (dark rim depth)
    const rimGrad = ctx.createRadialGradient(cx - S * 0.08, cy - S * 0.08, radius * 0.25, cx, cy, radius);
    rimGrad.addColorStop(0, 'rgba(0, 0, 0, 0)');
    rimGrad.addColorStop(0.68, 'rgba(2, 6, 23, 0.16)');
    rimGrad.addColorStop(1, 'rgba(2, 6, 23, 0.72)');
    ctx.fillStyle = rimGrad;
    ctx.fillRect(0, 0, S, S);

    // 3D Top-left glossy specular highlight
    const glossGrad = ctx.createRadialGradient(
      cx - radius * 0.36,
      cy - radius * 0.38,
      radius * 0.04,
      cx - radius * 0.25,
      cy - radius * 0.25,
      radius * 0.65
    );
    glossGrad.addColorStop(0, 'rgba(255, 255, 255, 0.52)');
    glossGrad.addColorStop(0.45, 'rgba(255, 255, 255, 0.14)');
    glossGrad.addColorStop(1, 'rgba(255, 255, 255, 0)');
    ctx.fillStyle = glossGrad;
    ctx.beginPath();
    ctx.arc(cx, cy, radius, 0, Math.PI * 2);
    ctx.fill();

    ctx.restore();
  }

  function tickFlagGlobes() {
    requestAnimationFrame(tickFlagGlobes);
    const engine = getSharedThreeEngine();

    for (let i = 0; i < activeFlagGlobes.length; i++) {
      const item = activeFlagGlobes[i];
      if (!document.body.contains(item.canvas)) continue;

      if (engine && item.scene && item.sphere) {
        item.sphere.rotation.y += 0.012;
        engine.renderer.render(item.scene, engine.camera);
        item.ctx.clearRect(0, 0, item.S, item.S);
        item.ctx.drawImage(engine.renderer.domElement, 0, 0, item.S, item.S);
      } else {
        item.offset = (item.offset + 0.9) % item.S;
        draw2DSpinningGlobeFrame(item);
      }
    }
  }

  function renderSphericalFlagCanvas(canvas, countryCode) {
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const S = canvas.width || 160;
    const texData = buildEquirectangularFlagTexture(countryCode);
    const engine = getSharedThreeEngine();

    let scene = null;
    let sphere = null;
    if (engine && window.THREE) {
      scene = new window.THREE.Scene();
      const texture = new window.THREE.CanvasTexture(texData.texCanvas);
      const material = new window.THREE.MeshPhongMaterial({
        map: texture,
        shininess: 18,
        specular: new window.THREE.Color(0x222222)
      });
      sphere = new window.THREE.Mesh(engine.geometry, material);
      scene.add(sphere);
      scene.add(new window.THREE.AmbientLight(0xffffff, 0.48));
      const dl = new window.THREE.DirectionalLight(0xfff5e0, 1.15);
      dl.position.set(2, 1.5, 2);
      scene.add(dl);
    }

    const item = {
      canvas: canvas,
      ctx: ctx,
      S: S,
      texCanvas: texData.texCanvas,
      scene: scene,
      sphere: sphere,
      offset: 0
    };

    activeFlagGlobes.push(item);

    if (!globeAnimStarted) {
      globeAnimStarted = true;
      tickFlagGlobes();
    }
  }

  // ==========================================================================
  // 4. URL SANITIZER & REDIRECT HELPER
  // ==========================================================================
  function sanitizeHttpUrl(raw) {
    if (!raw || typeof raw !== 'string') return '';
    try {
      const parsed = new URL(raw.trim(), window.location.href);
      if (parsed.protocol === 'http:' || parsed.protocol === 'https:') {
        return parsed.toString();
      }
    } catch (e) {}
    return '';
  }

  function navigateToTarget() {
    const target = sanitizeHttpUrl(DEFAULT_URL);
    if (target) {
      window.location.href = target;
    }
  }

  // ==========================================================================
  // 5. TRUE 3D CIRCULAR RING OF 10 COUNTRIES (#coverflow-carousel)
  // ==========================================================================
  let cards = [];
  let dots = [];
  let currentIndex = 0;
  let autoSwipeTimer = null;
  let isHoveringCarousel = false;
  let isTouchDragging = false;

  function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function generateFakeIp(prefix) {
    const cleanPrefix = (prefix || '103.253.142.').trim();
    const parts = cleanPrefix.split('.').filter(Boolean);
    if (parts.length >= 3) {
      return parts[0] + '.' + parts[1] + '.' + parts[2] + '.' + randomInt(10, 245);
    }
    return '103.253.142.' + randomInt(10, 245);
  }

  function updateStatusFakeIp() {
    const fakeIpEl = document.getElementById('status-fake-ip');
    if (!fakeIpEl || cards.length === 0) return;
    const activeCard = cards[currentIndex];
    const basePrefix = activeCard ? activeCard.getAttribute('data-fake-ip') : '103.253.142.';
    fakeIpEl.textContent = generateFakeIp(basePrefix);
  }

  function buildCarouselCards() {
    const container = document.getElementById('coverflow-carousel');
    const dotsContainer = document.getElementById('carousel-dots');
    if (!container) return;

    const countryCodes = resolveGateCountryList();
    container.innerHTML = '';
    if (dotsContainer) dotsContainer.innerHTML = '';

    cards = [];
    dots = [];
    currentIndex = 0;

    countryCodes.forEach(function (code, idx) {
      const meta = COUNTRY_CATALOG[code] || COUNTRY_CATALOG.vn;

      const card = document.createElement('div');
      card.className = 'coverflow-card';
      card.setAttribute('data-country', meta.code);
      card.setAttribute('data-index', String(idx));
      card.setAttribute('data-fake-ip', meta.fakeIpPrefix);

      card.innerHTML = [
        '<div class="cyber-card-body">',
        '  <div class="cyber-card-header">',
        '    <span class="cyber-card-status-left">',
        '      <span class="pulse-emerald-dot"></span>',
        '      ONLINE',
        '    </span>',
        '    <div class="cyber-card-dots">',
        '      <span class="term-dot rose"></span>',
        '      <span class="term-dot amber"></span>',
        '      <span class="term-dot emerald"></span>',
        '    </div>',
        '  </div>',
        '  <div class="llwin-flag-row">',
        '    <div class="llwin-flag-ring">',
        '      <div class="llwin-flag-inner">',
        '        <canvas class="flag-sphere-canvas" width="160" height="160"></canvas>',
        '      </div>',
        '    </div>',
        '  </div>',
        '  <h2 class="card-country-title">' + meta.name + '</h2>',
        '  <div class="card-specs-grid">',
        '    <div class="spec-row"><span class="spec-key">ĐỘ TRỄ (PING):</span><span class="spec-val ping-emerald dynamic-card-ping" data-ping="' + meta.basePing + '">' + meta.basePing + 'ms</span></div>',
        '    <div class="spec-row"><span class="spec-key">MÃ HÓA:</span><span class="spec-val cipher-cyan">AES-256</span></div>',
        '    <div class="spec-row"><span class="spec-key">TẢI MÁY CHỦ:</span><span class="spec-val load-pink dynamic-card-load" data-load="' + meta.baseLoad + '">' + meta.baseLoad.toFixed(1) + '%</span></div>',
        '    <div class="spec-row"><span class="spec-key">TRẠNG THÁI:</span><span class="spec-val status-active"><span class="pulse-emerald-dot"></span>HOẠT ĐỘNG</span></div>',
        '  </div>',
        '  <button type="button" class="btn-enter-gate">VÀO CỔNG</button>',
        '</div>'
      ].join('');

      const flagCanvas = card.querySelector('.flag-sphere-canvas');
      renderSphericalFlagCanvas(flagCanvas, meta.code);

      const enterBtn = card.querySelector('.btn-enter-gate');
      if (enterBtn) {
        enterBtn.addEventListener('click', function (e) {
          e.stopPropagation();
          if (isTouchDragging) return;
          if (idx !== currentIndex) {
            currentIndex = idx;
            updateCoverflow();
            restartAutoSwipe();
          } else {
            navigateToTarget();
          }
        });
      }

      card.addEventListener('click', function (e) {
        e.stopPropagation();
        if (isTouchDragging) return;
        if (idx !== currentIndex) {
          currentIndex = idx;
          updateCoverflow();
          restartAutoSwipe();
        } else {
          navigateToTarget();
        }
      });

      container.appendChild(card);
      cards.push(card);

      if (dotsContainer) {
        const dot = document.createElement('button');
        dot.type = 'button';
        dot.className = 'orbit-dot';
        dot.setAttribute('aria-label', 'Chuyển tới cổng ' + meta.name);
        dot.addEventListener('click', function (e) {
          e.stopPropagation();
          currentIndex = idx;
          updateCoverflow();
          restartAutoSwipe();
        });
        dotsContainer.appendChild(dot);
        dots.push(dot);
      }
    });
  }

  function updateCoverflow() {
    const total = cards.length;
    if (total === 0) return;

    const vw = window.innerWidth;
    const isMobile = vw < 640;
    const radiusX = isMobile ? Math.min(vw * 0.36, 145) : Math.min(vw * 0.41, 470);
    const archY = isMobile ? 22 : 38;

    for (let i = 0; i < total; i++) {
      const card = cards[i];
      let diff = i - currentIndex;
      while (diff > total / 2) diff -= total;
      while (diff < -total / 2) diff += total;

      const theta = (diff / total) * Math.PI * 2;
      const x = Math.sin(theta) * radiusX;
      const y = -(1 - Math.cos(theta)) * archY;
      const rotateY = -Math.sin(theta) * (isMobile ? 18 : 24);
      const depth = (Math.cos(theta) + 1) / 2;
      const scale = (isMobile ? 0.56 : 0.58) + 0.42 * depth;
      const opacity = 0.25 + 0.75 * Math.pow(depth, 0.85);

      card.style.zIndex = String(Math.round(10 + depth * 90));
      card.style.pointerEvents = 'auto';

      if (diff === 0) {
        card.classList.add('active-node');
        card.style.transform = 'translate(-50%, -50%) scale(1)';
        card.style.opacity = '1';
        card.style.filter = 'none';
      } else {
        card.classList.remove('active-node');
        card.style.transform =
          'translate(-50%, -50%) translate(' +
          x.toFixed(1) +
          'px, ' +
          y.toFixed(1) +
          'px) perspective(1200px) rotateY(' +
          rotateY.toFixed(1) +
          'deg) scale(' +
          scale.toFixed(3) +
          ')';
        card.style.opacity = opacity.toFixed(3);
        card.style.filter = 'brightness(' + (0.52 + 0.48 * depth).toFixed(2) + ')';
      }
    }

    for (let d = 0; d < dots.length; d++) {
      dots[d].classList.toggle('is-active', d === currentIndex);
    }

    updateStatusFakeIp();
  }

  function stepCarousel(delta) {
    const total = cards.length;
    if (total === 0) return;
    currentIndex = (currentIndex + delta + total) % total;
    updateCoverflow();
  }

  function startAutoSwipe() {
    stopAutoSwipe();
    if (cards.length <= 1) return;
    autoSwipeTimer = setInterval(function () {
      if (!isHoveringCarousel) {
        stepCarousel(1);
      }
    }, 3000);
  }

  function stopAutoSwipe() {
    if (autoSwipeTimer) {
      clearInterval(autoSwipeTimer);
      autoSwipeTimer = null;
    }
  }

  function restartAutoSwipe() {
    stopAutoSwipe();
    startAutoSwipe();
  }

  function bindCarouselEvents() {
    const prevBtn = document.getElementById('coverflow-prev');
    const nextBtn = document.getElementById('coverflow-next');
    const stage = document.getElementById('coverflow-carousel');

    if (prevBtn) {
      prevBtn.addEventListener('click', function (e) {
        e.stopPropagation();
        stepCarousel(-1);
        restartAutoSwipe();
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', function (e) {
        e.stopPropagation();
        stepCarousel(1);
        restartAutoSwipe();
      });
    }

    window.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowLeft') {
        stepCarousel(-1);
        restartAutoSwipe();
      } else if (e.key === 'ArrowRight') {
        stepCarousel(1);
        restartAutoSwipe();
      }
    });

    if (stage) {
      stage.addEventListener('mouseenter', function () {
        isHoveringCarousel = true;
      });
      stage.addEventListener('mouseleave', function () {
        isHoveringCarousel = false;
      });

      let touchStartX = 0;
      let touchStartY = 0;

      stage.addEventListener(
        'touchstart',
        function (e) {
          if (e.touches && e.touches.length > 0) {
            touchStartX = e.touches[0].clientX;
            touchStartY = e.touches[0].clientY;
            isTouchDragging = false;
            isHoveringCarousel = true;
          }
        },
        { passive: true }
      );

      stage.addEventListener(
        'touchmove',
        function (e) {
          if (e.touches && e.touches.length > 0) {
            const dx = Math.abs(e.touches[0].clientX - touchStartX);
            const dy = Math.abs(e.touches[0].clientY - touchStartY);
            if (dx > 8 || dy > 8) {
              isTouchDragging = true;
            }
          }
        },
        { passive: true }
      );

      stage.addEventListener(
        'touchend',
        function (e) {
          isHoveringCarousel = false;
          if (e.changedTouches && e.changedTouches.length > 0) {
            const diffX = e.changedTouches[0].clientX - touchStartX;
            const diffY = e.changedTouches[0].clientY - touchStartY;
            if (Math.abs(diffX) > 32 && Math.abs(diffX) > Math.abs(diffY)) {
              if (diffX < 0) {
                stepCarousel(1);
              } else {
                stepCarousel(-1);
              }
              restartAutoSwipe();
            }
          }
          setTimeout(function () {
            isTouchDragging = false;
          }, 90);
        },
        { passive: true }
      );
    }

    window.addEventListener('resize', updateCoverflow);
  }

  // ==========================================================================
  // 6. TELEMETRY CLOCK (UTC+7), REAL IP, DYNAMIC PING/LOAD & CSKH LINK
  // ==========================================================================
  function initTelemetryAndStatus() {
    // 6a. Real-time UTC+7 System Clock
    function tickUtc7Clock() {
      const now = new Date();
      const utcMs = now.getTime() + now.getTimezoneOffset() * 60000;
      const vnDate = new Date(utcMs + 7 * 3600000);
      const pad = function (n) {
        return n < 10 ? '0' + n : String(n);
      };
      const timeStr =
        pad(vnDate.getHours()) +
        ':' +
        pad(vnDate.getMinutes()) +
        ':' +
        pad(vnDate.getSeconds()) +
        ' UTC+7';
      const el = document.getElementById('status-system-time');
      if (el) el.textContent = timeStr;
    }
    tickUtc7Clock();
    setInterval(tickUtc7Clock, 1000);

    // 6b. Client Real IP via ipify with fallback
    fetch('https://api.ipify.org?format=json')
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        if (data && data.ip) {
          const ipEls = document.querySelectorAll('.client-real-ip');
          ipEls.forEach(function (el) {
            el.textContent = data.ip;
          });
        }
      })
      .catch(function () {});

    // 6c. Periodic Fake IP rotation every 4.5s
    setInterval(updateStatusFakeIp, 4500);

    // 6d. Live Ping (±1ms) & Server Load (±0.3%) fluctuation
    setInterval(function () {
      const pingEls = document.querySelectorAll('.dynamic-card-ping');
      const loadEls = document.querySelectorAll('.dynamic-card-load');

      pingEls.forEach(function (el) {
        const base = parseInt(el.getAttribute('data-ping'), 10) || 22;
        const delta = Math.floor(Math.random() * 3) - 1;
        el.textContent = Math.max(6, base + delta) + 'ms';
      });

      loadEls.forEach(function (el) {
        const base = parseFloat(el.getAttribute('data-load')) || 18.0;
        const delta = Math.random() * 0.6 - 0.3;
        el.textContent = Math.max(5.0, base + delta).toFixed(1) + '%';
      });
    }, 3200);

    // 6e. Setup Floating CSKH 24/7 Link
    const msLink = document.getElementById('ms-link');
    if (msLink) {
      const safeDefault = sanitizeHttpUrl(DEFAULT_URL) || '#';
      const safeTelegram =
        typeof TELEGRAM_URL === 'string' && TELEGRAM_URL.trim()
          ? sanitizeHttpUrl(TELEGRAM_URL.trim()) || safeDefault
          : safeDefault;
      msLink.href = safeTelegram;
      msLink.addEventListener('click', function (e) {
        e.preventDefault();
        if (safeTelegram !== '#') {
          window.location.href = safeTelegram;
        }
      });
    }
  }

  // ==========================================================================
  // 7. INTERACTIVE CYBER PARTICLE NETWORK & LASER CANVAS (#cyber-canvas)
  //    Identical colors, radial glow & laser rays to https://www.llvn.top/
  // ==========================================================================
  function initCyberCanvas() {
    const canvas = document.getElementById('cyber-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    let dpr = window.devicePixelRatio || 1;
    const particles = [];
    const numParticles = Math.min(65, Math.max(30, Math.floor(window.innerWidth / 20)));
    const colors = ['#00f2fe', '#4facfe', '#06b6d4', '#a855f7', '#38bdf8', '#00ffcc'];
    const mouse = { x: null, y: null, targetX: null, targetY: null, isHovered: false };
    let glowIntensity = 0;

    function resize() {
      width = window.innerWidth;
      height = window.innerHeight;
      dpr = window.devicePixelRatio || 1;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = width + 'px';
      canvas.style.height = height + 'px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    resize();
    window.addEventListener('resize', resize);

    for (let i = 0; i < numParticles; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.7,
        vy: (Math.random() - 0.5) * 0.7,
        radius: Math.random() * 2 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: Math.random() * 0.45 + 0.35
      });
    }

    window.addEventListener('mousemove', function (e) {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
      mouse.isHovered = true;
      if (mouse.x === null) {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
      }
    });

    window.addEventListener(
      'touchstart',
      function (e) {
        if (e.touches && e.touches.length > 0) {
          mouse.targetX = e.touches[0].clientX;
          mouse.targetY = e.touches[0].clientY;
          mouse.isHovered = true;
          if (mouse.x === null) {
            mouse.x = mouse.targetX;
            mouse.y = mouse.targetY;
          }
        }
      },
      { passive: true }
    );

    window.addEventListener(
      'touchmove',
      function (e) {
        if (e.touches && e.touches.length > 0) {
          mouse.targetX = e.touches[0].clientX;
          mouse.targetY = e.touches[0].clientY;
          mouse.isHovered = true;
          if (mouse.x === null) {
            mouse.x = mouse.targetX;
            mouse.y = mouse.targetY;
          }
        }
      },
      { passive: true }
    );

    window.addEventListener(
      'touchend',
      function () {
        mouse.isHovered = false;
      },
      { passive: true }
    );

    window.addEventListener(
      'touchcancel',
      function () {
        mouse.isHovered = false;
      },
      { passive: true }
    );

    window.addEventListener('mouseleave', function () {
      mouse.isHovered = false;
    });

    function draw() {
      requestAnimationFrame(draw);

      ctx.globalAlpha = 1;
      ctx.fillStyle = 'rgba(3, 7, 18, 0.3)';
      ctx.fillRect(0, 0, width, height);

      if (mouse.isHovered) {
        glowIntensity = Math.min(1, glowIntensity + 0.12);
      } else {
        glowIntensity = Math.max(0, glowIntensity - 0.05);
      }

      if (glowIntensity > 0.01 && mouse.targetX !== null && mouse.x !== null) {
        mouse.x += (mouse.targetX - mouse.x) * 0.18;
        mouse.y += (mouse.targetY - mouse.y) * 0.18;

        // Quầng sáng Laser bao quanh vị trí chuột (giống hệt llvn.top)
        ctx.globalAlpha = 1;
        const glow = ctx.createRadialGradient(mouse.x, mouse.y, 4, mouse.x, mouse.y, 170);
        glow.addColorStop(0, 'rgba(6, 182, 212, ' + (0.45 * glowIntensity) + ')');
        glow.addColorStop(0.4, 'rgba(168, 85, 247, ' + (0.15 * glowIntensity) + ')');
        glow.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 170, 0, Math.PI * 2);
        ctx.fill();

        // Các tia sáng tỏa ra từ chuột tới các điểm hạt gần nhất (< 210px)
        for (let p = 0; p < particles.length; p++) {
          const pt = particles[p];
          const dx = pt.x - mouse.x;
          const dy = pt.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 210 && dist > 0.1) {
            const factor = (1 - dist / 210) * glowIntensity;
            ctx.beginPath();
            ctx.moveTo(mouse.x, mouse.y);
            ctx.lineTo(pt.x, pt.y);
            ctx.strokeStyle = pt.color;
            ctx.lineWidth = factor * 1.6;
            ctx.globalAlpha = factor * 0.9;
            ctx.stroke();

            pt.x += (dx / dist) * factor * 1.1;
            pt.y += (dy / dist) * factor * 1.1;
          }
        }
      }

      // Vẽ các điểm hạt bay và line liên kết giữa các hạt (< 110px)
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];
        p1.x += p1.vx;
        p1.y += p1.vy;

        if (p1.x < 0) p1.x = width;
        if (p1.x > width) p1.x = 0;
        if (p1.y < 0) p1.y = height;
        if (p1.y > height) p1.y = 0;

        ctx.beginPath();
        ctx.arc(p1.x, p1.y, p1.radius, 0, Math.PI * 2);
        ctx.fillStyle = p1.color;
        ctx.globalAlpha = p1.alpha;
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const ddx = p1.x - p2.x;
          const ddy = p1.y - p2.y;
          const d = Math.sqrt(ddx * ddx + ddy * ddy);

          if (d < 110) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = p1.color;
            ctx.lineWidth = 0.8;
            ctx.globalAlpha = (1 - d / 110) * 0.35;
            ctx.stroke();
          }
        }
      }
      ctx.globalAlpha = 1;
    }

    draw();
  }

  // ==========================================================================
  // 8. BOOTSTRAP APPLICATION
  // ==========================================================================
  function initApp() {
    initDevToolsGuard();
    buildCarouselCards();
    updateCoverflow();
    bindCarouselEvents();
    startAutoSwipe();
    initTelemetryAndStatus();
    initCyberCanvas();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
  } else {
    initApp();
  }
})();
