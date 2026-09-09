/* @ds-bundle: {"format":4,"namespace":"LangXDesignSystem_d4218b","components":[{"name":"ChatBubble","sourcePath":"components/chat/ChatBubble.jsx"},{"name":"TypingIndicator","sourcePath":"components/chat/ChatBubble.jsx"},{"name":"CorrectionCard","sourcePath":"components/chat/CorrectionCard.jsx"},{"name":"CopilotCard","sourcePath":"components/chat/CorrectionCard.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"ICON_PATHS","sourcePath":"components/core/Icon.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"Avatar","sourcePath":"components/display/Avatar.jsx"},{"name":"Badge","sourcePath":"components/display/Badge.jsx"},{"name":"LevelBars","sourcePath":"components/display/LevelBars.jsx"},{"name":"ProgressBar","sourcePath":"components/display/ProgressBar.jsx"},{"name":"StatTile","sourcePath":"components/display/StatTile.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Sheet","sourcePath":"components/feedback/Toast.jsx"},{"name":"Chip","sourcePath":"components/forms/Chip.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"SegmentedControl","sourcePath":"components/forms/SegmentedControl.jsx"},{"name":"Toggle","sourcePath":"components/forms/Toggle.jsx"},{"name":"ListRow","sourcePath":"components/lists/ListRow.jsx"},{"name":"ScreenHeader","sourcePath":"components/lists/ScreenHeader.jsx"},{"name":"HeaderAction","sourcePath":"components/lists/ScreenHeader.jsx"},{"name":"DEFAULT_TABS","sourcePath":"components/lists/TabBar.jsx"},{"name":"TabBar","sourcePath":"components/lists/TabBar.jsx"}],"sourceHashes":{"components/chat/ChatBubble.jsx":"20338cebd99f","components/chat/CorrectionCard.jsx":"fd2c91d30ed0","components/core/Button.jsx":"682aea9ed7a0","components/core/Icon.jsx":"29e94935ab3e","components/display/Avatar.jsx":"26dffb5bf41a","components/display/Badge.jsx":"4fa4ffa812ad","components/display/LevelBars.jsx":"44be0b4b5a94","components/display/ProgressBar.jsx":"1f2b416aca25","components/display/StatTile.jsx":"2f58d15de58d","components/feedback/Toast.jsx":"365f0802f3c7","components/forms/Chip.jsx":"67e872163c79","components/forms/Input.jsx":"8e15175a7ac3","components/forms/Radio.jsx":"c3430fe2c79e","components/forms/SegmentedControl.jsx":"679585a3877d","components/forms/Toggle.jsx":"ef165ce0fa89","components/lists/ListRow.jsx":"83bb8b332c62","components/lists/ScreenHeader.jsx":"f52f97d8394c","components/lists/TabBar.jsx":"04649ee961e6","ui_kits/mobile-app/app.screen.jsx":"afd199d48a2c","ui_kits/mobile-app/chats.screen.jsx":"fa494978faf5","ui_kits/mobile-app/chatscreen.screen.jsx":"2c6002536bd2","ui_kits/mobile-app/data.js":"b6e945048e3e","ui_kits/mobile-app/discover.screen.jsx":"0daaeb7491e7","ui_kits/mobile-app/feed.screen.jsx":"742477c96f3a","ui_kits/mobile-app/me.screen.jsx":"4fee648bdbc3","ui_kits/mobile-app/settings.screen.jsx":"276b57d1ab7a","ui_kits/mobile-app/shell.screen.jsx":"ef55e80ab724"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.LangXDesignSystem_d4218b = window.LangXDesignSystem_d4218b || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/chat/CorrectionCard.jsx
try { (() => {
/* Green is a correction, always. Struck original over the fix, on success-bg. */
function CorrectionCard({
  from,
  original,
  text,
  note,
  time,
  eyebrow,
  onClick,
  style
}) {
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onClick,
    style: {
      alignSelf: 'stretch',
      width: '100%',
      background: 'var(--success-bg)',
      borderRadius: 16,
      padding: '14px 16px',
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      textAlign: 'left',
      animation: 'lx-rise .3s ease-out',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '700 12px var(--font-body)',
      color: 'var(--success)',
      textTransform: 'uppercase',
      letterSpacing: '.04em'
    }
  }, eyebrow || (from ? `Correction from ${from}` : 'Correction')), original ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: '400 15px/1.45 var(--font-body)',
      color: 'var(--text-muted)',
      textDecoration: 'line-through'
    }
  }, original) : null, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '600 16px/1.45 var(--font-body)',
      color: 'var(--text)'
    }
  }, text), note ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: '400 14px/1.45 var(--font-body)',
      color: 'var(--text-muted)',
      borderTop: '1px solid rgba(0,159,112,.2)',
      paddingTop: 8,
      marginTop: 2,
      width: '100%'
    }
  }, note) : null, time ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: '400 11px var(--font-body)',
      color: 'var(--text-faint)',
      alignSelf: 'flex-end'
    }
  }, time) : null);
}
function CopilotCard({
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '12px 16px',
      borderRadius: 16,
      background: 'var(--info-bg)',
      font: '400 14px/1.4 var(--font-body)',
      color: 'var(--text)',
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { CorrectionCard, CopilotCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/chat/CorrectionCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
const {
  useState
} = React;
/* Yellow = the committing action, once per screen. Outline = the second action. Text = plain blue. */
function Button({
  variant = 'primary',
  children,
  icon,
  onClick,
  disabled,
  size = 'lg',
  style,
  block = true
}) {
  const [hover, setHover] = useState(false),
    [press, setPress] = useState(false);
  const h = size === 'lg' ? 56 : size === 'md' ? 54 : 44;
  const lift = variant === 'text' ? 0 : 4;
  const base = {
    height: h,
    borderRadius: 16,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    width: block ? '100%' : 'auto',
    padding: block ? 0 : '0 28px',
    cursor: disabled ? 'default' : 'pointer',
    opacity: disabled ? 0.45 : 1,
    transition: 'background .16s, transform .05s, box-shadow .05s',
    whiteSpace: 'nowrap',
    border: 0,
    font: '800 15px/1 var(--font-display)',
    letterSpacing: '0.8px',
    textTransform: 'uppercase',
    flex: 'none'
  };
  const v = {
    primary: {
      background: hover && !disabled ? 'var(--primary-hover)' : 'var(--primary)',
      color: 'var(--primary-text)',
      boxShadow: '0 4px 0 var(--primary-press)'
    },
    outline: {
      background: hover && !disabled ? 'var(--fill)' : 'var(--bg)',
      color: 'var(--text)',
      border: '2px solid var(--border)',
      boxShadow: '0 4px 0 var(--border)',
      font: '800 14px/1 var(--font-display)'
    },
    outlineAccent: {
      background: hover && !disabled ? 'var(--fill)' : 'var(--bg)',
      color: 'var(--accent)',
      border: '2px solid var(--border)',
      boxShadow: '0 4px 0 var(--border)',
      font: '800 14px/1 var(--font-display)'
    },
    danger: {
      background: 'var(--danger)',
      color: '#fff',
      boxShadow: '0 4px 0 var(--danger-shade)'
    },
    ink: {
      background: 'var(--ink)',
      color: 'var(--on-ink)',
      boxShadow: 'none'
    },
    text: {
      background: hover && !disabled ? 'var(--accent-bg)' : 'transparent',
      color: 'var(--accent)',
      font: '600 15px/1 var(--font-body)',
      letterSpacing: 0,
      textTransform: 'none',
      height: 44,
      borderRadius: 999,
      padding: '0 14px'
    }
  }[variant] || {};
  const pressed = press && lift ? {
    transform: `translateY(${lift}px)`,
    boxShadow: 'none'
  } : {};
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false),
    style: {
      ...base,
      ...v,
      ...pressed,
      ...style
    }
  }, icon, children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const ICON_PATHS = {
  search: 'c11 11 8|l21 21 16.65 16.65',
  message: 'pM21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z',
  feed: 'l17 10 3 10|l21 6 3 6|l21 14 3 14|l17 18 3 18',
  user: 'pM20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2|c12 7 4',
  back: 'l19 12 5 12|y12 19 5 12 12 5',
  chev: 'y9 18 15 12 9 6',
  down: 'y6 9 12 15 18 9',
  settings: 'c12 12 3|pM19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z',
  sliders: 'l4 21 4 14|l4 10 4 3|l12 21 12 12|l12 8 12 3|l20 21 20 16|l20 12 20 3|l1 14 7 14|l9 8 15 8|l17 16 23 16',
  zap: 'g13 2 3 14 12 14 11 22 21 10 12 10',
  send: 'l22 2 11 13|g22 2 15 22 11 13 2 9',
  mic: 'pM12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z|pM19 10v2a7 7 0 0 1-14 0v-2|l12 19 12 23|l8 23 16 23',
  plus: 'l12 5 12 19|l5 12 19 12',
  x: 'l18 6 6 18|l6 6 18 18',
  check: 'y20 6 9 17 4 12',
  star: 'g12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26',
  heart: 'pM20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z',
  share: 'pM4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8|y16 6 12 2 8 6|l12 2 12 15',
  scan: 'pM8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3',
  moon: 'pM21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z',
  sun: 'c12 12 5|l12 1 12 3|l12 21 12 23|l4.22 4.22 5.64 5.64|l18.36 18.36 19.78 19.78|l1 12 3 12|l21 12 23 12|l4.22 19.78 5.64 18.36|l18.36 5.64 19.78 4.22',
  pin: 'pM21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z|c12 10 3',
  lock: 'r3 11 18 11|pM7 11V7a5 5 0 0 1 10 0v4',
  camera: 'pM23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z|c12 13 4',
  image: 'r3 3 18 18|c8.5 8.5 1.5|y21 15 16 10 5 21',
  more: 'c12 12 1|c19 12 1|c5 12 1',
  edit: 'pM17 3a2.828 2.828 0 1 1 4 4L7.5 21.5 2 23l1.5-5.5L17 3z',
  globe: 'c12 12 10|l2 12 22 12|pM12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z',
  gift: 'y20 12 20 22 4 22 4 12|r2 7 20 5|l12 22 12 7|pM12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z|pM12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z',
  eye: 'pM1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z|c12 12 3',
  reply: 'y9 10 4 15 9 20|pM20 4v7a4 4 0 0 1-4 4H4',
  play: 'g5 3 19 12 5 21',
  archive: 'y21 8 21 21 3 21 3 8|r1 3 22 5|l10 12 14 12',
  bookmark: 'pM19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z',
  trash: 'y3 6 5 6 21 6|pM19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2',
  award: 'c12 8 7|y8.21 13.89 7 23 12 20 17 23 15.79 13.88',
  translate: 'pM5 8l6 6|l4 14 10 8 12 4|l2 5 12 5|l7 2 7 5|pM22 22l-5-10-5 10|l14 18 20 18'
};
function Icon({
  name,
  size = 22,
  strokeWidth = 2.5,
  color,
  style,
  ...rest
}) {
  const kids = (ICON_PATHS[name] || '').split('|').filter(Boolean).map((seg, i) => {
    const t = seg[0],
      n = seg.slice(1).trim().split(/\s+/);
    if (t === 'c') return /*#__PURE__*/React.createElement("circle", {
      key: i,
      cx: n[0],
      cy: n[1],
      r: n[2]
    });
    if (t === 'l') return /*#__PURE__*/React.createElement("line", {
      key: i,
      x1: n[0],
      y1: n[1],
      x2: n[2],
      y2: n[3]
    });
    if (t === 'y') return /*#__PURE__*/React.createElement("polyline", {
      key: i,
      points: n.join(' ')
    });
    if (t === 'g') return /*#__PURE__*/React.createElement("polygon", {
      key: i,
      points: n.join(' ')
    });
    if (t === 'r') return /*#__PURE__*/React.createElement("rect", {
      key: i,
      x: n[0],
      y: n[1],
      width: n[2],
      height: n[3],
      rx: "2"
    });
    return /*#__PURE__*/React.createElement("path", {
      key: i,
      d: seg.slice(1)
    });
  });
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color || 'currentColor',
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true",
    style: {
      flex: 'none',
      display: 'block',
      ...style
    }
  }, rest), kids);
}
Object.assign(__ds_scope, { ICON_PATHS, Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/chat/ChatBubble.jsx
try { (() => {
/* Mine = accent-bg, tail bottom-right. Theirs = fill, tail bottom-left. Meta 11px faint below. */
function ChatBubble({
  text,
  mine,
  time,
  read,
  starred,
  replyTo,
  translation,
  onClick,
  style
}) {
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onClick,
    style: {
      alignSelf: mine ? 'flex-end' : 'flex-start',
      maxWidth: '78%',
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      alignItems: mine ? 'flex-end' : 'flex-start',
      animation: 'lx-rise .3s ease-out',
      ...style
    }
  }, replyTo ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: '400 13px var(--font-body)',
      color: 'var(--text-muted)',
      borderLeft: '2px solid var(--accent)',
      padding: '2px 10px',
      maxWidth: '100%',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, replyTo) : null, /*#__PURE__*/React.createElement("span", {
    style: {
      background: mine ? 'var(--accent-bg)' : 'var(--fill)',
      color: 'var(--text)',
      borderRadius: mine ? '20px 20px 6px 20px' : '20px 20px 20px 6px',
      padding: '13px 16px',
      font: '400 16px/1.45 var(--font-body)',
      textAlign: 'left',
      textWrap: 'pretty'
    }
  }, text), translation ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      gap: 8,
      alignItems: 'flex-start',
      padding: '0 6px',
      font: '400 14px/1.4 var(--font-body)',
      color: 'var(--accent)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "translate",
    size: 14,
    style: {
      marginTop: 3
    }
  }), translation) : null, time ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      gap: 6,
      alignItems: 'center',
      font: '400 11px var(--font-body)',
      color: 'var(--text-faint)'
    }
  }, starred ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "star",
    size: 11,
    color: "var(--streak)"
  }) : null, time, mine && read ? ' · Read' : '') : null);
}
function TypingIndicator() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      alignSelf: 'flex-start',
      background: 'var(--fill)',
      borderRadius: '20px 20px 20px 6px',
      padding: '14px 18px',
      display: 'flex',
      gap: 5
    }
  }, [0, .2, .4].map(d => /*#__PURE__*/React.createElement("span", {
    key: d,
    style: {
      width: 7,
      height: 7,
      borderRadius: 999,
      background: 'var(--text-muted)',
      animation: `lx-blink 1.2s infinite ${d}s`
    }
  })));
}
Object.assign(__ds_scope, { ChatBubble, TypingIndicator });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/chat/ChatBubble.jsx", error: String((e && e.message) || e) }); }

// components/display/Avatar.jsx
try { (() => {
/* Initials on a tone disc; the prototype ships no photos. Online dot is success green. */
function Avatar({
  name = '',
  tone = '#3b6cf6',
  size = 48,
  online,
  frame,
  blur,
  src,
  style
}) {
  const ini = name.split(' ').map(w => w[0]).slice(0, 2).join('');
  return /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'inline-flex',
      flex: 'none',
      width: size,
      height: size,
      ...style
    }
  }, src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name,
    style: {
      width: size,
      height: size,
      borderRadius: 999,
      objectFit: 'cover',
      boxShadow: frame ? `0 0 0 3px var(--bg), 0 0 0 6px ${frame}` : 'none',
      filter: blur ? 'blur(6px)' : 'none'
    }
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      width: size,
      height: size,
      borderRadius: 999,
      background: tone,
      color: '#fefefe',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: size * 0.36,
      boxShadow: frame ? `0 0 0 3px var(--bg), 0 0 0 6px ${frame}` : 'none',
      filter: blur ? 'blur(6px)' : 'none'
    }
  }, ini), online ? /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      right: 0,
      bottom: 0,
      width: Math.max(10, size * 0.22),
      height: Math.max(10, size * 0.22),
      borderRadius: 999,
      background: 'var(--success)',
      boxShadow: '0 0 0 2px var(--bg)'
    }
  }) : null);
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/display/Badge.jsx
try { (() => {
/* Small pills: counts (blue / red), Top (ink), TOP correction (green), worn title (outlined), eyebrow labels. */
function Badge({
  children,
  variant = 'count',
  style
}) {
  const v = {
    count: {
      background: 'var(--accent)',
      color: '#fff',
      font: '700 12px/20px var(--font-body)',
      minWidth: 20,
      padding: '0 6px',
      textAlign: 'center'
    },
    unread: {
      background: 'var(--danger)',
      color: '#fff',
      font: '700 11px/18px var(--font-body)',
      minWidth: 18,
      padding: '0 5px',
      textAlign: 'center'
    },
    ink: {
      background: 'var(--ink)',
      color: 'var(--on-ink)',
      font: '700 12px/1 var(--font-body)',
      padding: '4px 10px'
    },
    success: {
      background: 'var(--success-bg)',
      color: 'var(--success)',
      font: '700 11px/1 var(--font-body)',
      padding: '3px 8px'
    },
    pro: {
      background: 'var(--accent-bg)',
      color: 'var(--pro)',
      font: '700 12px/1 var(--font-body)',
      padding: '4px 10px'
    },
    warning: {
      background: 'var(--warning-bg)',
      color: 'var(--warning)',
      font: '700 12px/1 var(--font-body)',
      padding: '4px 10px'
    },
    outline: {
      border: '1px solid var(--border)',
      color: 'var(--text-muted)',
      font: '700 11px/1 var(--font-body)',
      padding: '3px 8px',
      textTransform: 'uppercase',
      letterSpacing: '.04em'
    }
  }[variant] || {};
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 999,
      whiteSpace: 'nowrap',
      ...v,
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Badge.jsx", error: String((e && e.message) || e) }); }

// components/display/LevelBars.jsx
try { (() => {
/* Four rising bars; filled ones are blue (or on-ink white), empty are hairline grey. */
function LevelBars({
  level = 0,
  onInk,
  style
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      gap: 2,
      alignItems: 'flex-end',
      height: 12,
      ...style
    }
  }, [1, 2, 3, 4].map(i => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      width: 4,
      height: 4 + i * 2,
      borderRadius: 2,
      background: i <= level ? onInk ? 'var(--on-ink)' : 'var(--accent)' : onInk ? 'var(--on-ink-muted)' : 'var(--border)'
    }
  })));
}
Object.assign(__ds_scope, { LevelBars });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/LevelBars.jsx", error: String((e && e.message) || e) }); }

// components/display/ProgressBar.jsx
try { (() => {
function ProgressBar({
  value = 0,
  color = 'var(--accent)',
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: 6,
      borderRadius: 999,
      background: 'var(--fill)',
      overflow: 'hidden',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: `${Math.max(0, Math.min(100, value))}%`,
      height: '100%',
      borderRadius: 999,
      background: color,
      transition: 'width .3s ease-out'
    }
  }));
}
Object.assign(__ds_scope, { ProgressBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/ProgressBar.jsx", error: String((e && e.message) || e) }); }

// components/display/StatTile.jsx
try { (() => {
/* Big Nunito numeral over a muted label with a › — the Me screen's stat strip. */
function StatTile({
  value,
  label,
  icon,
  color = 'var(--text)',
  onClick,
  style
}) {
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onClick,
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      gap: 2,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 4,
      font: '800 26px var(--font-display)',
      color
    }
  }, icon, value), /*#__PURE__*/React.createElement("span", {
    style: {
      font: '600 12px var(--font-body)',
      color: 'var(--text-muted)'
    }
  }, label, " \u203A"));
}
Object.assign(__ds_scope, { StatTile });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/StatTile.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
function Toast({
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      pointerEvents: 'none',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--ink)',
      color: 'var(--on-ink)',
      borderRadius: 999,
      padding: '12px 20px',
      font: '600 14px var(--font-body)',
      boxShadow: 'var(--shadow)',
      animation: 'lx-rise .3s ease-out'
    }
  }, children));
}
function Sheet({
  title,
  body,
  actions = [],
  onClose,
  cancelLabel = 'Cancel',
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--scrim)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      zIndex: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      background: 'var(--bg)',
      borderRadius: '28px 28px 0 0',
      boxShadow: 'var(--shadow-sheet)',
      padding: '10px 24px 34px',
      animation: 'lx-sheet-up .36s cubic-bezier(.32,.72,0,1)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 38,
      height: 4,
      borderRadius: 999,
      background: 'var(--border)',
      margin: '0 auto 18px'
    }
  }), title ? /*#__PURE__*/React.createElement("div", {
    style: {
      font: '800 20px var(--font-display)',
      color: 'var(--text)',
      marginBottom: 6
    }
  }, title) : null, body ? /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 15px/1.5 var(--font-body)',
      color: 'var(--text-muted)',
      marginBottom: 8
    }
  }, body) : null, actions.map((a, i) => /*#__PURE__*/React.createElement("button", {
    key: i,
    type: "button",
    onClick: () => {
      a.onClick && a.onClick();
      onClose && onClose();
    },
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      width: '100%',
      padding: '17px 0',
      borderBottom: '1px solid var(--border)',
      font: '600 17px var(--font-body)',
      color: a.danger ? 'var(--danger)' : 'var(--text)'
    }
  }, a.icon ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      color: 'var(--text-muted)'
    }
  }, a.icon) : null, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }, a.label))), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onClose,
    style: {
      width: '100%',
      height: 54,
      borderRadius: 16,
      border: '2px solid var(--border)',
      marginTop: 18,
      font: '800 14px var(--font-display)',
      letterSpacing: '.8px',
      textTransform: 'uppercase',
      boxShadow: '0 4px 0 var(--border)',
      color: 'var(--text)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, cancelLabel)));
}
Object.assign(__ds_scope, { Toast, Sheet });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/forms/Chip.jsx
try { (() => {
/* Selectable pill. On = ink fill with a check; off = hairline outline. */
function Chip({
  label,
  selected,
  onClick,
  disabled,
  sub,
  style
}) {
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: disabled ? undefined : onClick,
    disabled: disabled,
    "aria-pressed": !!selected,
    style: {
      padding: '10px 16px',
      borderRadius: 999,
      fontSize: 14,
      fontWeight: 600,
      fontFamily: 'var(--font-body)',
      border: `1px solid ${selected ? 'var(--ink)' : 'var(--border)'}`,
      background: selected ? 'var(--ink)' : 'var(--bg)',
      color: selected ? 'var(--on-ink)' : 'var(--text)',
      opacity: disabled ? 0.45 : 1,
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      transition: 'all .16s',
      ...style
    }
  }, selected ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 14
  }) : null, label, sub ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: selected ? 'var(--on-ink)' : 'var(--text-faint)',
      fontWeight: 400
    }
  }, sub) : null);
}
Object.assign(__ds_scope, { Chip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Chip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
/* Pill field on the grey fill; turns white with a blue hairline on focus. */
function Input({
  value,
  onChange,
  placeholder,
  type = 'text',
  multiline,
  rows = 3,
  hint,
  trailing,
  style,
  ...rest
}) {
  const [focus, setFocus] = useState(false);
  const s = {
    width: '100%',
    border: `1px solid ${focus ? 'var(--accent)' : 'transparent'}`,
    background: focus ? 'var(--bg)' : 'var(--fill)',
    color: 'var(--text)',
    font: '400 16px/1.4 var(--font-body)',
    outline: 'none',
    transition: 'background .16s, border-color .16s',
    ...(multiline ? {
      borderRadius: 20,
      padding: '14px 18px',
      resize: 'none',
      minHeight: 48
    } : {
      height: 54,
      borderRadius: 999,
      padding: trailing ? '0 90px 0 20px' : '0 20px'
    }),
    ...style
  };
  const fp = {
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    value,
    onChange: e => onChange && onChange(e.target.value),
    placeholder,
    ...rest
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, multiline ? /*#__PURE__*/React.createElement("textarea", _extends({
    rows: rows,
    style: s
  }, fp)) : /*#__PURE__*/React.createElement("input", _extends({
    type: type,
    style: s
  }, fp)), trailing ? /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      right: 20,
      top: 0,
      height: 54,
      display: 'flex',
      alignItems: 'center',
      font: '600 14px var(--font-body)',
      color: 'var(--accent)'
    }
  }, trailing) : null), hint ? /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 13px var(--font-body)',
      color: 'var(--text-faint)',
      padding: '8px 20px 0'
    }
  }, hint) : null);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function Radio({
  on,
  onClick,
  style
}) {
  return /*#__PURE__*/React.createElement("span", {
    role: "radio",
    "aria-checked": !!on,
    onClick: onClick,
    style: {
      width: 22,
      height: 22,
      borderRadius: 999,
      border: `2px solid ${on ? 'var(--accent)' : 'var(--border)'}`,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      flex: 'none',
      cursor: onClick ? 'pointer' : 'default',
      ...style
    }
  }, on ? /*#__PURE__*/React.createElement("span", {
    style: {
      width: 10,
      height: 10,
      borderRadius: 999,
      background: 'var(--accent)'
    }
  }) : null);
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/SegmentedControl.jsx
try { (() => {
function SegmentedControl({
  options = [],
  value,
  onChange,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    role: "radiogroup",
    style: {
      display: 'flex',
      background: 'var(--fill)',
      borderRadius: 999,
      padding: 3,
      ...style
    }
  }, options.map(o => {
    const on = o.value === value;
    return /*#__PURE__*/React.createElement("button", {
      key: o.value,
      type: "button",
      role: "radio",
      "aria-checked": on,
      onClick: () => onChange && onChange(o.value),
      style: {
        flex: 1,
        padding: '11px 6px',
        borderRadius: 999,
        textAlign: 'center',
        fontSize: 14,
        fontWeight: on ? 700 : 600,
        fontFamily: 'var(--font-body)',
        color: on ? 'var(--text)' : 'var(--text-muted)',
        background: on ? 'var(--bg)' : 'transparent',
        boxShadow: on ? 'var(--shadow-thumb)' : 'none',
        transition: 'all .2s ease-out',
        whiteSpace: 'nowrap'
      }
    }, o.label);
  }));
}
Object.assign(__ds_scope, { SegmentedControl });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/SegmentedControl.jsx", error: String((e && e.message) || e) }); }

// components/forms/Toggle.jsx
try { (() => {
function Toggle({
  on,
  onChange,
  style
}) {
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    role: "switch",
    "aria-checked": !!on,
    onClick: () => onChange && onChange(!on),
    style: {
      width: 50,
      height: 30,
      borderRadius: 999,
      background: on ? 'var(--accent)' : 'var(--border)',
      position: 'relative',
      transition: 'background .2s',
      flex: 'none',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 3,
      left: on ? 23 : 3,
      width: 24,
      height: 24,
      borderRadius: 999,
      background: 'var(--knob)',
      boxShadow: '0 1px 3px rgba(0,0,0,.2)',
      transition: 'left .2s ease-out'
    }
  }));
}
Object.assign(__ds_scope, { Toggle });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Toggle.jsx", error: String((e && e.message) || e) }); }

// components/lists/ListRow.jsx
try { (() => {
const {
  useState
} = React;
/* No card layer: rows are separated by hairlines and whitespace. */
function ListRow({
  title,
  subtitle,
  leading,
  trailing,
  chevron,
  onClick,
  titleWeight = 'body',
  danger,
  style
}) {
  const [press, setPress] = useState(false);
  const Tag = onClick ? 'button' : 'div';
  return /*#__PURE__*/React.createElement(Tag, {
    type: onClick ? 'button' : undefined,
    onClick: onClick,
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false),
    onMouseLeave: () => setPress(false),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      padding: '18px 0',
      borderBottom: '1px solid var(--border)',
      width: '100%',
      opacity: press ? 0.6 : 1,
      transition: 'opacity .1s',
      textAlign: 'left',
      ...style
    }
  }, leading, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: titleWeight === 'display' ? '800 17px var(--font-display)' : '600 17px var(--font-body)',
      color: danger ? 'var(--danger)' : 'var(--text)',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, title), subtitle ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: '400 14px/1.4 var(--font-body)',
      color: 'var(--text-muted)'
    }
  }, subtitle) : null), trailing, chevron ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chev",
    size: 18,
    color: "var(--text-faint)"
  }) : null);
}
Object.assign(__ds_scope, { ListRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/lists/ListRow.jsx", error: String((e && e.message) || e) }); }

// components/lists/ScreenHeader.jsx
try { (() => {
/* Tab roots: 34px title, no back. Pushed screens: back arrow + 24px title. Actions are 40px icon buttons. */
function ScreenHeader({
  title,
  onBack,
  actions,
  style
}) {
  const root = !onBack;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      minHeight: 48,
      padding: root ? '12px 20px 0' : '6px 20px 8px',
      ...style
    }
  }, onBack ? /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onBack,
    "aria-label": "Back",
    style: {
      width: 34,
      height: 34,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--text)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "back"
  })) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: root ? '800 34px/1.1 var(--font-display)' : '800 24px/1.1 var(--font-display)',
      color: 'var(--text)',
      flex: 1,
      letterSpacing: root ? 0 : '-0.3px'
    }
  }, title), actions);
}
function HeaderAction({
  icon,
  onClick,
  badge,
  color = 'var(--text)',
  label
}) {
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onClick,
    "aria-label": label,
    style: {
      width: 40,
      height: 40,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color,
      position: 'relative',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon
  }), badge ? /*#__PURE__*/React.createElement("span", {
    style: {
      background: 'var(--accent)',
      color: '#fff',
      borderRadius: 999,
      font: '700 11px/18px var(--font-body)',
      minWidth: 18,
      padding: '0 5px',
      textAlign: 'center'
    }
  }, badge) : null);
}
Object.assign(__ds_scope, { ScreenHeader, HeaderAction });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/lists/ScreenHeader.jsx", error: String((e && e.message) || e) }); }

// components/lists/TabBar.jsx
try { (() => {
const DEFAULT_TABS = [{
  id: 'discover',
  label: 'Discover',
  icon: 'search'
}, {
  id: 'chats',
  label: 'Chats',
  icon: 'message'
}, {
  id: 'feed',
  label: 'Feed',
  icon: 'feed'
}, {
  id: 'me',
  label: 'Me',
  icon: 'user'
}];
function TabBar({
  tabs = DEFAULT_TABS,
  active,
  onChange,
  badges = {},
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 'none',
      display: 'flex',
      borderTop: '1px solid var(--border)',
      background: 'var(--bg)',
      padding: '10px 8px 24px',
      ...style
    }
  }, tabs.map(t => /*#__PURE__*/React.createElement("button", {
    key: t.id,
    type: "button",
    onClick: () => onChange && onChange(t.id),
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 4,
      color: active === t.id ? 'var(--accent)' : 'var(--text-faint)',
      font: '600 11px var(--font-body)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: t.icon
  }), badges[t.id] ? /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: -4,
      right: -10,
      minWidth: 18,
      height: 18,
      padding: '0 5px',
      borderRadius: 999,
      background: 'var(--danger)',
      color: '#fff',
      font: '700 11px/18px var(--font-body)',
      textAlign: 'center'
    }
  }, badges[t.id]) : null), t.label)));
}
Object.assign(__ds_scope, { DEFAULT_TABS, TabBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/lists/TabBar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mobile-app/app.screen.jsx
try { (() => {
const {
  Sheet,
  Icon
} = window.LangXDesignSystem_d4218b;
function App() {
  const [theme, setTheme] = React.useState('light');
  const [tab, setTab] = React.useState('discover');
  const [route, setRoute] = React.useState('tab');
  const [chats, setChats] = React.useState(window.LX_CHATS);
  const [open, setOpen] = React.useState('yuki');
  const [liked, setLiked] = React.useState({});
  const [toast, setToast] = React.useState('');
  const [sheet, setSheet] = React.useState(null);
  const [typing, setTyping] = React.useState(false);
  const people = window.LX_PEOPLE;
  const say = m => {
    setToast(m);
    clearTimeout(window.__lxT);
    window.__lxT = setTimeout(() => setToast(''), 2200);
  };
  const unread = Object.values(chats).reduce((n, c) => n + c.unread, 0);
  const openChat = id => {
    setOpen(id);
    setChats(c => ({
      ...c,
      [id]: {
        ...c[id],
        unread: 0
      }
    }));
    setRoute('chat');
  };
  const send = text => {
    setChats(c => {
      const ch = c[open];
      const nid = Math.max(...ch.messages.map(m => m.id)) + 1;
      return {
        ...c,
        [open]: {
          ...ch,
          t: 'now',
          messages: [...ch.messages, {
            id: nid,
            from: 'me',
            text,
            t: 'now'
          }]
        }
      };
    });
    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      setChats(c => {
        const ch = c[open];
        const nid = Math.max(...ch.messages.map(m => m.id)) + 1;
        const pool = ['That is really helpful, thank you!', 'Ah I see. Could you give one more example?', 'はい、分かりました 😊', 'Nice! Your English is getting better.'];
        return {
          ...c,
          [open]: {
            ...ch,
            messages: [...ch.messages, {
              id: nid,
              from: 'them',
              text: pool[nid % pool.length],
              t: 'now'
            }]
          }
        };
      });
    }, 1400);
  };
  const person = people.find(p => p.id === open);
  let screen = null;
  if (route === 'chat') screen = /*#__PURE__*/React.createElement(ChatScreen, {
    person: person,
    chat: chats[open],
    typing: typing,
    onBack: () => setRoute('tab'),
    onSend: send,
    onMessageMenu: m => setSheet({
      title: 'Message',
      actions: [{
        label: 'Correct',
        icon: /*#__PURE__*/React.createElement(Icon, {
          name: "edit",
          size: 20
        }),
        onClick: () => say('Correction mode — rewrite the sentence.')
      }, {
        label: 'Reply',
        icon: /*#__PURE__*/React.createElement(Icon, {
          name: "reply",
          size: 20
        })
      }, {
        label: 'Translate',
        icon: /*#__PURE__*/React.createElement(Icon, {
          name: "translate",
          size: 20
        }),
        onClick: () => say('Translated.')
      }, {
        label: 'Star',
        icon: /*#__PURE__*/React.createElement(Icon, {
          name: "star",
          size: 20
        }),
        onClick: () => say('Starred.')
      }, {
        label: 'Delete',
        icon: /*#__PURE__*/React.createElement(Icon, {
          name: "trash",
          size: 20
        }),
        danger: true
      }]
    })
  });else if (route === 'settings') screen = /*#__PURE__*/React.createElement(Settings, {
    onBack: () => setRoute('tab')
  });else if (tab === 'discover') screen = /*#__PURE__*/React.createElement(Discover, {
    people: people,
    onOpen: p => openChat(p.id in chats ? p.id : (setChats(c => ({
      ...c,
      [p.id]: {
        t: 'now',
        unread: 0,
        messages: []
      }
    })), p.id)),
    onFilters: () => say('Filters — level, age, country, gender (Pro).')
  });else if (tab === 'chats') screen = /*#__PURE__*/React.createElement(Chats, {
    chats: chats,
    people: people,
    onOpen: openChat,
    onMenu: id => setSheet({
      title: people.find(p => p.id === id).name,
      actions: [{
        label: 'Pin',
        icon: /*#__PURE__*/React.createElement(Icon, {
          name: "bookmark",
          size: 20
        }),
        onClick: () => say('Pinned.')
      }, {
        label: 'Archive',
        icon: /*#__PURE__*/React.createElement(Icon, {
          name: "archive",
          size: 20
        }),
        onClick: () => say('Archived.')
      }, {
        label: 'Block',
        icon: /*#__PURE__*/React.createElement(Icon, {
          name: "lock",
          size: 20
        }),
        danger: true
      }]
    })
  });else if (tab === 'feed') screen = /*#__PURE__*/React.createElement(Feed, {
    posts: window.LX_POSTS,
    people: people,
    liked: liked,
    onLike: id => setLiked(l => ({
      ...l,
      [id]: !l[id]
    })),
    onToast: say
  });else screen = /*#__PURE__*/React.createElement(Me, {
    onToast: say,
    onSettings: () => setRoute('settings')
  });
  const seg = (v, label) => /*#__PURE__*/React.createElement("button", {
    onClick: () => setTheme(v),
    style: {
      padding: '6px 12px',
      borderRadius: 999,
      font: '600 13px var(--font-body)',
      color: theme === v ? '#17191c' : '#62676d',
      background: theme === v ? '#fff' : 'transparent',
      boxShadow: theme === v ? '0 1px 3px rgba(0,0,0,.08)' : 'none'
    }
  }, label);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 18,
      padding: '24px 16px 48px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 390,
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo/logo-rounded.png",
    alt: "",
    width: "28",
    height: "28",
    style: {
      borderRadius: 8
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '800 15px var(--font-display)',
      color: '#17191c',
      flex: 1
    }
  }, "LangX ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#62676d',
      font: '400 13px var(--font-body)'
    }
  }, "\xB7 mobile app UI kit")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      background: '#e3e5e9',
      borderRadius: 999,
      padding: 3,
      gap: 2
    }
  }, seg('light', 'Light'), seg('dark', 'Dark'))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(Phone, {
    theme: theme,
    route: route === 'tab' ? tab : route,
    tab: route === 'tab' ? tab : null,
    onTab: setTab,
    unread: unread,
    toast: toast
  }, screen), sheet ? /*#__PURE__*/React.createElement("div", {
    "data-theme": theme,
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 44,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement(Sheet, {
    title: sheet.title,
    actions: sheet.actions,
    onClose: () => setSheet(null)
  })) : null));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobile-app/app.screen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mobile-app/chats.screen.jsx
try { (() => {
const {
  ScreenHeader,
  HeaderAction,
  SegmentedControl,
  Avatar,
  Icon,
  Badge,
  CopilotCard
} = window.LangXDesignSystem_d4218b;
function Chats({
  chats,
  people,
  onOpen,
  onMenu
}) {
  const [tab, setTab] = React.useState('all');
  const rows = Object.entries(chats).map(([id, c]) => {
    const p = people.find(x => x.id === id);
    const last = c.messages[c.messages.length - 1];
    return {
      id,
      c,
      p,
      last,
      preview: (last.from === 'me' ? 'You: ' : '') + (last.kind ? '✍️ Correction' : last.text),
      unreplied: last.from === 'them'
    };
  });
  const list = tab === 'unreplied' ? rows.filter(r => r.unreplied) : tab === 'archived' ? [] : rows;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      padding: '0 20px'
    }
  }, /*#__PURE__*/React.createElement(ScreenHeader, {
    title: "Chats",
    style: {
      padding: '12px 0 0'
    },
    actions: /*#__PURE__*/React.createElement(HeaderAction, {
      icon: "star"
    })
  }), /*#__PURE__*/React.createElement(SegmentedControl, {
    style: {
      marginTop: 18
    },
    options: [{
      value: 'all',
      label: 'All'
    }, {
      value: 'unreplied',
      label: 'Unreplied'
    }, {
      value: 'archived',
      label: 'Archived'
    }],
    value: tab,
    onChange: setTab
  }), /*#__PURE__*/React.createElement(CopilotCard, {
    style: {
      marginTop: 16
    }
  }, "Tap \u22EF on a chat to pin or archive it. The Unreplied tab is everyone still waiting on you."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8,
      paddingBottom: 24
    }
  }, list.length === 0 ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      gap: 10,
      padding: '64px 24px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 56,
      height: 56,
      borderRadius: 999,
      background: 'var(--fill)',
      color: 'var(--text-faint)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "archive",
    size: 24
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '800 20px var(--font-display)'
    }
  }, "Nothing archived"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 15px/1.5 var(--font-body)',
      color: 'var(--text-muted)'
    }
  }, "Chats you archive land here and stay out of the way.")) : null, list.map(r => /*#__PURE__*/React.createElement("div", {
    key: r.id,
    style: {
      display: 'flex',
      gap: 16,
      width: '100%',
      padding: '18px 0',
      borderBottom: '1px solid var(--border)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => onOpen(r.id),
    style: {
      display: 'flex',
      gap: 16,
      flex: 1,
      minWidth: 0,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: r.p.name,
    tone: r.p.tone,
    size: 56,
    online: r.p.online
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '800 17px var(--font-display)',
      flex: 1,
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, r.p.name), /*#__PURE__*/React.createElement("span", {
    style: {
      font: '400 13px var(--font-body)',
      color: 'var(--text-faint)'
    }
  }, r.c.t)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      font: '400 15px var(--font-body)',
      color: 'var(--text-muted)',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, r.preview), r.c.unread ? /*#__PURE__*/React.createElement(Badge, null, r.c.unread) : null))), /*#__PURE__*/React.createElement("button", {
    onClick: () => onMenu(r.id),
    style: {
      width: 36,
      height: 36,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--text-faint)',
      borderRadius: 999
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "more",
    size: 20
  }))))));
}
Object.assign(window, {
  Chats
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobile-app/chats.screen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mobile-app/chatscreen.screen.jsx
try { (() => {
const {
  Avatar,
  Icon,
  ChatBubble,
  TypingIndicator,
  CorrectionCard,
  CopilotCard
} = window.LangXDesignSystem_d4218b;
function ChatScreen({
  person,
  chat,
  onBack,
  onSend,
  onMessageMenu,
  typing
}) {
  const [draft, setDraft] = React.useState('');
  const send = () => {
    if (!draft.trim()) return;
    onSend(draft.trim());
    setDraft('');
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minHeight: 0,
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '6px 16px 12px',
      borderBottom: '1px solid var(--border)',
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onBack,
    style: {
      width: 34,
      height: 34,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "back"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: person.name,
    tone: person.tone,
    size: 40,
    online: person.online
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '800 17px var(--font-display)',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, person.name), /*#__PURE__*/React.createElement("span", {
    style: {
      font: '400 13px var(--font-body)',
      color: person.online ? 'var(--success)' : 'var(--text-muted)'
    }
  }, person.online ? 'Online' : 'Last seen 2 h ago'))), /*#__PURE__*/React.createElement("button", {
    style: {
      width: 36,
      height: 36,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "more"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minHeight: 0,
      overflowY: 'auto',
      padding: '16px 16px 8px',
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      scrollbarWidth: 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      font: '600 12px var(--font-body)',
      color: 'var(--text-faint)',
      padding: '4px 0 10px'
    }
  }, "Today"), /*#__PURE__*/React.createElement(CopilotCard, {
    style: {
      alignSelf: 'center',
      textAlign: 'center',
      maxWidth: 300,
      font: '400 13px/1.4 var(--font-body)',
      padding: '10px 16px'
    }
  }, "Hold any message to correct it \u2014 corrections are the most useful thing you can send."), chat.messages.map(m => m.kind === 'correction' ? /*#__PURE__*/React.createElement(CorrectionCard, {
    key: m.id,
    from: person.name.split(' ')[0],
    original: m.orig,
    text: m.text,
    note: m.note,
    time: m.t,
    onClick: () => onMessageMenu(m)
  }) : /*#__PURE__*/React.createElement(ChatBubble, {
    key: m.id,
    mine: m.from === 'me',
    text: m.text,
    time: m.t,
    read: m.from === 'me',
    onClick: () => onMessageMenu(m)
  })), typing ? /*#__PURE__*/React.createElement(TypingIndicator, null) : null), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 'none',
      borderTop: '1px solid var(--border)',
      padding: '10px 16px 28px',
      display: 'flex',
      alignItems: 'flex-end',
      gap: 8,
      background: 'var(--bg)'
    }
  }, /*#__PURE__*/React.createElement("button", {
    style: {
      width: 44,
      height: 48,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "plus"
  })), /*#__PURE__*/React.createElement("textarea", {
    value: draft,
    onChange: e => setDraft(e.target.value),
    onKeyDown: e => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        send();
      }
    },
    placeholder: 'Message ' + person.name.split(' ')[0] + '…',
    rows: 1,
    style: {
      flex: 1,
      minHeight: 48,
      maxHeight: 120,
      borderRadius: 24,
      border: '1px solid transparent',
      background: 'var(--fill)',
      padding: '13px 18px',
      font: '400 16px/1.4 var(--font-body)',
      color: 'var(--text)',
      resize: 'none',
      outline: 'none'
    }
  }), draft.trim() ? /*#__PURE__*/React.createElement("button", {
    onClick: send,
    style: {
      width: 48,
      height: 48,
      borderRadius: 14,
      background: 'var(--primary)',
      color: 'var(--primary-text)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      animation: 'lx-pop .2s ease-out',
      boxShadow: '0 3px 0 var(--primary-press)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "send",
    size: 20
  })) : /*#__PURE__*/React.createElement("button", {
    style: {
      width: 48,
      height: 48,
      borderRadius: 999,
      background: 'var(--fill)',
      color: 'var(--text)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "mic",
    size: 20
  }))));
}
Object.assign(window, {
  ChatScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobile-app/chatscreen.screen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mobile-app/data.js
try { (() => {
window.LX_PEOPLE = [{
  id: 'yuki',
  name: 'Yuki Tanaka',
  age: 26,
  flag: '🇯🇵',
  native: ['Japanese'],
  learning: [['English', 3]],
  online: true,
  streak: 34,
  tone: '#3b6cf6',
  bio: 'Nurse in Osaka. I want to sound natural when I travel, not like a textbook.'
}, {
  id: 'mateo',
  name: 'Mateo García',
  age: 31,
  flag: '🇪🇸',
  native: ['Spanish'],
  learning: [['English', 2]],
  online: false,
  streak: 5,
  tone: '#009f70',
  bio: 'Teacher in Sevilla. Let’s talk about football, food and why my English is so bad.'
}, {
  id: 'lucia',
  name: 'Lucía Fernández',
  age: 24,
  flag: '🇲🇽',
  native: ['Spanish'],
  learning: [['English', 3]],
  online: true,
  streak: 88,
  tone: '#7a5af8',
  bio: 'Studying architecture in CDMX. Send me your favourite song and I’ll send mine.'
}, {
  id: 'haruto',
  name: 'Haruto Sato',
  age: 29,
  flag: '🇯🇵',
  native: ['Japanese'],
  learning: [['English', 1]],
  online: false,
  streak: 0,
  tone: '#17191c',
  bio: 'Engineer. Very beginner in English, please be patient!'
}, {
  id: 'valentina',
  name: 'Valentina Rossi',
  age: 27,
  flag: '🇦🇷',
  native: ['Spanish', 'Italian'],
  learning: [['English', 4]],
  online: false,
  streak: 210,
  tone: '#009f70',
  bio: 'Translator. I can help with slang and the things a book never teaches.'
}, {
  id: 'sakura',
  name: 'Sakura Ito',
  age: 25,
  flag: '🇯🇵',
  native: ['Japanese'],
  learning: [['English', 3]],
  online: true,
  streak: 61,
  tone: '#17191c',
  bio: 'Barista. Ask me anything about coffee.'
}];
window.LX_CHATS = {
  yuki: {
    t: '2 h',
    unread: 2,
    messages: [{
      id: 1,
      from: 'them',
      text: 'How was your weekend? Did you go to Kyoto in the end?',
      t: '9:12'
    }, {
      id: 2,
      from: 'me',
      text: 'I have been to Kyoto since 2 days. It was so beautiful!',
      t: '9:14'
    }, {
      id: 3,
      from: 'them',
      kind: 'correction',
      orig: 'I have been to Kyoto since 2 days.',
      text: 'I went to Kyoto two days ago.',
      note: '“Since” needs a point in time; “ago” is what you want here.',
      t: '9:15'
    }, {
      id: 4,
      from: 'them',
      text: 'See you tomorrow! 😊',
      t: '9:16'
    }]
  },
  lucia: {
    t: 'Yesterday',
    unread: 0,
    messages: [{
      id: 1,
      from: 'me',
      text: 'Let me try again: “I have lived here for two years.”',
      t: '18:02'
    }, {
      id: 2,
      from: 'them',
      text: 'Perfect! That is exactly right.',
      t: '18:05'
    }]
  },
  mateo: {
    t: 'Mon',
    unread: 0,
    messages: [{
      id: 1,
      from: 'them',
      text: '¿Vamos a hablar de fútbol hoy?',
      t: '20:10'
    }, {
      id: 2,
      from: 'me',
      text: 'Sí, pero mi español es muy malo 😅',
      t: '20:12'
    }]
  },
  sakura: {
    t: 'Sun',
    unread: 1,
    messages: [{
      id: 1,
      from: 'them',
      text: 'What coffee do you drink in the morning?',
      t: '8:40'
    }]
  }
};
window.LX_POSTS = [{
  id: 1,
  by: 'haruto',
  lang: 'English',
  t: '2 h',
  text: 'Yesterday I go to the supermarket and I buyed many vegetables for make a soup.',
  likes: 4,
  corrections: [{
    by: 'valentina',
    text: 'Yesterday I went to the supermarket and bought lots of vegetables to make a soup.',
    likes: 12
  }]
}, {
  id: 2,
  by: 'mateo',
  lang: 'English',
  t: '5 h',
  text: 'I am agree with you that the film was too long.',
  likes: 9,
  top: true,
  corrections: [{
    by: 'lucia',
    text: 'I agree with you that the film was too long.',
    likes: 31
  }, {
    by: 'yuki',
    text: 'I agree — the film was too long.',
    likes: 3
  }]
}, {
  id: 3,
  by: 'sakura',
  lang: 'English',
  t: 'Yesterday',
  text: 'How do you say when coffee is not strong but not weak? Medium?',
  likes: 2,
  corrections: []
}];
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobile-app/data.js", error: String((e && e.message) || e) }); }

// ui_kits/mobile-app/discover.screen.jsx
try { (() => {
const {
  ScreenHeader,
  HeaderAction,
  SegmentedControl,
  Avatar,
  LevelBars,
  Icon,
  Chip,
  CopilotCard
} = window.LangXDesignSystem_d4218b;
function Discover({
  people,
  onOpen,
  onFilters
}) {
  const [sort, setSort] = React.useState('rec');
  const [tip, setTip] = React.useState(true);
  let list = people;
  if (sort === 'active') list = people.filter(p => p.online);
  if (sort === 'near') list = people.filter((p, i) => i % 2 === 0);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      padding: '0 20px'
    }
  }, /*#__PURE__*/React.createElement(ScreenHeader, {
    title: "Discover",
    style: {
      padding: '12px 0 0'
    },
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(HeaderAction, {
      icon: "search"
    }), /*#__PURE__*/React.createElement(HeaderAction, {
      icon: "sliders",
      onClick: onFilters
    }))
  }), /*#__PURE__*/React.createElement("button", {
    onClick: onFilters,
    style: {
      font: '700 14px var(--font-body)',
      color: 'var(--accent)',
      marginTop: 2,
      alignSelf: 'flex-start'
    }
  }, "English \u2194 Spanish, Japanese"), /*#__PURE__*/React.createElement(SegmentedControl, {
    style: {
      marginTop: 18
    },
    options: [{
      value: 'rec',
      label: 'For you'
    }, {
      value: 'active',
      label: 'Active'
    }, {
      value: 'near',
      label: 'Nearby'
    }],
    value: sort,
    onChange: setSort
  }), sort === 'near' ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      marginTop: 14
    }
  }, ['5 km', '10 km', '25 km', '50 km'].map((r, i) => /*#__PURE__*/React.createElement(Chip, {
    key: r,
    label: r,
    selected: i === 1
  }))) : null, tip ? /*#__PURE__*/React.createElement(CopilotCard, {
    style: {
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }, "Use the filters to narrow by level, age or country."), /*#__PURE__*/React.createElement("button", {
    onClick: () => setTip(false),
    style: {
      color: 'var(--accent)',
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "x",
    size: 16
  }))) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8,
      paddingBottom: 24
    }
  }, list.map((p, i) => /*#__PURE__*/React.createElement("button", {
    key: p.id,
    onClick: () => onOpen(p),
    style: {
      display: 'flex',
      gap: 16,
      width: '100%',
      padding: '20px 0',
      borderBottom: '1px solid var(--border)',
      alignItems: 'flex-start',
      animation: 'lx-rise .4s ease-out both',
      animationDelay: i * 60 + 'ms'
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: p.name,
    tone: p.tone,
    size: 56,
    online: p.online
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '800 17px var(--font-display)',
      color: 'var(--text)',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, p.name), /*#__PURE__*/React.createElement("span", {
    style: {
      font: '400 14px var(--font-body)',
      color: 'var(--text-muted)'
    }
  }, p.age), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15
    }
  }, p.flag), p.streak ? /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 'auto',
      display: 'flex',
      alignItems: 'center',
      gap: 3,
      font: '400 13px var(--font-body)',
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "zap",
    size: 13
  }), p.streak) : null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '600 14px var(--font-body)',
      color: 'var(--accent)'
    }
  }, p.native.join(', '), " \u2192 ", p.learning.map(l => l[0]).join(', ')), /*#__PURE__*/React.createElement(LevelBars, {
    level: p.learning[0][1]
  })), sort === 'near' ? /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 13px var(--font-body)',
      color: 'var(--text-muted)'
    }
  }, "Within ", [5, 10, 25, 50][i % 4], " km") : null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 15px/1.45 var(--font-body)',
      color: 'var(--text-muted)',
      display: '-webkit-box',
      WebkitLineClamp: 2,
      WebkitBoxOrient: 'vertical',
      overflow: 'hidden'
    }
  }, p.bio))))));
}
Object.assign(window, {
  Discover
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobile-app/discover.screen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mobile-app/feed.screen.jsx
try { (() => {
const {
  ScreenHeader,
  SegmentedControl,
  Avatar,
  Icon,
  Badge,
  CorrectionCard
} = window.LangXDesignSystem_d4218b;
function Feed({
  posts,
  people,
  liked,
  onLike,
  onToast
}) {
  const [tab, setTab] = React.useState('corr');
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      padding: '0 20px'
    }
  }, /*#__PURE__*/React.createElement(ScreenHeader, {
    title: "Feed",
    style: {
      padding: '12px 0 0'
    },
    actions: /*#__PURE__*/React.createElement("button", {
      onClick: () => onToast('Ask a question — coming in this build as a sheet.'),
      style: {
        height: 40,
        padding: '0 14px',
        borderRadius: 999,
        font: '700 15px var(--font-body)',
        color: 'var(--accent)'
      }
    }, "+ Ask")
  }), /*#__PURE__*/React.createElement(SegmentedControl, {
    style: {
      marginTop: 18
    },
    options: [{
      value: 'corr',
      label: 'Corrections'
    }, {
      value: 'pron',
      label: 'Pronunciation'
    }],
    value: tab,
    onChange: setTab
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8,
      paddingBottom: 24
    }
  }, tab === 'corr' ? posts.map((p, i) => {
    const by = people.find(x => x.id === p.by);
    const top = p.corrections[0];
    const isLiked = !!liked[p.id];
    return /*#__PURE__*/React.createElement("div", {
      key: p.id,
      style: {
        padding: '22px 0',
        borderBottom: '1px solid var(--border)',
        display: 'flex',
        flexDirection: 'column',
        gap: 14,
        animation: 'lx-rise .4s ease-out both',
        animationDelay: i * 60 + 'ms'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 12
      }
    }, /*#__PURE__*/React.createElement(Avatar, {
      name: by.name,
      tone: by.tone,
      size: 40
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        font: '800 15px var(--font-display)'
      }
    }, by.name), /*#__PURE__*/React.createElement("span", {
      style: {
        font: '400 13px var(--font-body)',
        color: 'var(--text-faint)'
      }
    }, p.lang, " \xB7 ", p.t)), p.top ? /*#__PURE__*/React.createElement(Badge, {
      variant: "ink"
    }, "Top") : null), /*#__PURE__*/React.createElement("div", {
      style: {
        font: '400 18px/1.5 var(--font-body)',
        textWrap: 'pretty'
      }
    }, p.text), top ? /*#__PURE__*/React.createElement(CorrectionCard, {
      eyebrow: 'Top correction · ' + people.find(x => x.id === top.by).name.split(' ')[0],
      text: top.text
    }) : null, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 20
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => onLike(p.id),
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 6,
        font: '600 14px var(--font-body)',
        color: isLiked ? 'var(--danger)' : 'var(--text-muted)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "heart",
      size: 18
    }), p.likes + (isLiked ? 1 : 0)), /*#__PURE__*/React.createElement("span", {
      style: {
        font: '600 14px var(--font-body)',
        color: 'var(--text-muted)'
      }
    }, p.corrections.length === 1 ? '1 correction' : p.corrections.length + ' corrections'), /*#__PURE__*/React.createElement("button", {
      onClick: () => onToast('Opens the post with a correction composer.'),
      style: {
        marginLeft: 'auto',
        font: '600 14px var(--font-body)',
        color: 'var(--accent)'
      }
    }, "Correct this")));
  }) : [['sakura', 'Worcestershire', 3], ['haruto', 'Thoroughly', 1]].map(([id, w, n]) => {
    const by = people.find(x => x.id === id);
    return /*#__PURE__*/React.createElement("div", {
      key: id,
      style: {
        padding: '22px 0',
        borderBottom: '1px solid var(--border)',
        display: 'flex',
        flexDirection: 'column',
        gap: 14
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 12
      }
    }, /*#__PURE__*/React.createElement(Avatar, {
      name: by.name,
      tone: by.tone,
      size: 40
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        font: '800 15px var(--font-display)'
      }
    }, by.name), /*#__PURE__*/React.createElement("span", {
      style: {
        font: '400 13px var(--font-body)',
        color: 'var(--text-faint)'
      }
    }, "English \xB7 3 h"))), /*#__PURE__*/React.createElement("div", {
      style: {
        font: '800 26px var(--font-display)'
      }
    }, w), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 12
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => onToast('Playing recording…'),
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        height: 40,
        padding: '0 16px',
        borderRadius: 999,
        background: 'var(--fill)',
        font: '600 14px var(--font-body)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "play",
      size: 14
    }), n === 1 ? '1 recording' : n + ' recordings'), /*#__PURE__*/React.createElement("button", {
      onClick: () => onToast('Recording sent. Thank you.'),
      style: {
        marginLeft: 'auto',
        display: 'flex',
        alignItems: 'center',
        gap: 6,
        font: '600 14px var(--font-body)',
        color: 'var(--accent)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "mic",
      size: 18
    }), "Record")));
  })));
}
Object.assign(window, {
  Feed
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobile-app/feed.screen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mobile-app/me.screen.jsx
try { (() => {
const {
  Avatar,
  LevelBars,
  Icon,
  Badge,
  StatTile,
  ListRow,
  Button
} = window.LangXDesignSystem_d4218b;
function WeekChart() {
  const days = ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
    msgs = [6, 9, 4, 12, 7, 0, 3],
    corr = [2, 3, 1, 4, 2, 0, 1];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'flex-end',
      height: 110,
      padding: '8px 0'
    }
  }, days.map((d, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 6,
      height: '100%',
      justifyContent: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      gap: 2,
      justifyContent: 'flex-end',
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: corr[i] * 7 + '%',
      background: 'var(--success)',
      borderRadius: 4,
      minHeight: corr[i] ? 4 : 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      height: msgs[i] * 5 + '%',
      background: 'var(--accent)',
      borderRadius: 4,
      minHeight: msgs[i] ? 4 : 2,
      opacity: msgs[i] ? 1 : .3
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      color: i === 3 ? 'var(--text)' : 'var(--text-faint)'
    }
  }, d))));
}
function Me({
  onToast,
  onSettings
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      padding: '12px 20px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 20,
      padding: '8px 0'
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: "Alex Reed",
    tone: "#3b6cf6",
    size: 72,
    online: true,
    frame: "#8a9199"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '800 24px var(--font-display)'
    }
  }, "Alex"), /*#__PURE__*/React.createElement(Badge, {
    variant: "outline"
  }, "Helper")), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 14px var(--font-body)',
      color: 'var(--text-muted)',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, "@alex \xB7 28 \xB7 Bristol \uD83C\uDDEC\uD83C\uDDE7")), /*#__PURE__*/React.createElement("button", {
    onClick: () => onToast('Scan a code to sign in on another device.'),
    style: {
      width: 36,
      height: 36,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "scan"
  })), /*#__PURE__*/React.createElement("button", {
    onClick: onSettings,
    style: {
      width: 36,
      height: 36,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "settings"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 16,
      padding: '20px 0',
      borderBottom: '1px solid var(--border)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '700 12px var(--font-body)',
      color: 'var(--text-faint)',
      textTransform: 'uppercase',
      letterSpacing: '.04em'
    }
  }, "Teaches"), /*#__PURE__*/React.createElement("span", {
    style: {
      font: '800 17px var(--font-display)'
    }
  }, "English")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '700 12px var(--font-body)',
      color: 'var(--text-faint)',
      textTransform: 'uppercase',
      letterSpacing: '.04em'
    }
  }, "Learns"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      font: '800 17px var(--font-display)'
    }
  }, "Spanish ", /*#__PURE__*/React.createElement(LevelBars, {
    level: 3
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      font: '800 17px var(--font-display)'
    }
  }, "Japanese ", /*#__PURE__*/React.createElement(LevelBars, {
    level: 2
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      padding: '24px 0 20px',
      borderBottom: '1px solid var(--border)'
    }
  }, /*#__PURE__*/React.createElement(StatTile, {
    value: 12,
    label: "Day streak",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "zap",
      size: 18
    }),
    onClick: () => onToast('Streak — activity map and history.')
  }), /*#__PURE__*/React.createElement(StatTile, {
    value: 87,
    label: "Corrections",
    color: "var(--success)",
    onClick: () => onToast('Your writing, corrected.')
  }), /*#__PURE__*/React.createElement(StatTile, {
    value: 5,
    label: "Badges",
    onClick: () => onToast('Badges.')
  }), /*#__PURE__*/React.createElement(StatTile, {
    value: "1,240",
    label: "Wallet",
    onClick: () => onToast('Wallet — tokens earned by teaching.')
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '12px 0 8px',
      borderBottom: '1px solid var(--border)'
    }
  }, /*#__PURE__*/React.createElement(WeekChart, null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16,
      font: '400 12px var(--font-body)',
      color: 'var(--text-muted)',
      paddingBottom: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 10,
      height: 10,
      borderRadius: 3,
      background: 'var(--accent)'
    }
  }), "Messages"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 10,
      height: 10,
      borderRadius: 3,
      background: 'var(--success)'
    }
  }), "Corrections"))), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 16px/1.55 var(--font-body)',
      padding: '22px 0'
    }
  }, "Product designer in Bristol. Learning Spanish for a move to Valencia, and Japanese because I fell in love with Kyoto."), /*#__PURE__*/React.createElement(ListRow, {
    title: "Who viewed your profile",
    subtitle: "6 people this week",
    chevron: true,
    onClick: () => onToast('Locked on Free — Pro+ shows who viewed you.'),
    style: {
      borderTop: '1px solid var(--border)'
    }
  }), /*#__PURE__*/React.createElement(ListRow, {
    title: "Followers and following",
    subtitle: "48 followers \xB7 21 following",
    chevron: true,
    onClick: () => onToast('Follows.')
  }), /*#__PURE__*/React.createElement(ListRow, {
    title: "Preview my profile",
    subtitle: "See your profile the way other people do",
    chevron: true,
    onClick: () => onToast('Profile preview.')
  }), /*#__PURE__*/React.createElement("button", {
    onClick: () => onToast('Plans — Fluent · Polyglot.'),
    style: {
      marginTop: 24,
      background: 'var(--accent-bg)',
      borderRadius: 20,
      padding: 20,
      display: 'flex',
      flexDirection: 'column',
      gap: 4,
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '700 16px var(--font-body)',
      color: 'var(--pro)'
    }
  }, "\u2726 Go further"), /*#__PURE__*/React.createElement("span", {
    style: {
      font: '400 14px/1.45 var(--font-body)',
      color: 'var(--text-muted)'
    }
  }, "Unlimited new chats, advanced filters, translation and incognito browsing."), /*#__PURE__*/React.createElement("span", {
    style: {
      font: '400 13px var(--font-body)',
      marginTop: 10
    }
  }, "New chats left today: 3 / 5")), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: '32px 0'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: () => onToast('Edit profile.')
  }, "Edit profile")));
}
Object.assign(window, {
  Me
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobile-app/me.screen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mobile-app/settings.screen.jsx
try { (() => {
const {
  ScreenHeader,
  ListRow,
  Toggle,
  Radio,
  Input
} = window.LangXDesignSystem_d4218b;
function Settings({
  onBack
}) {
  const [q, setQ] = React.useState('');
  const [t, setT] = React.useState({
    streak: true,
    msgs: true,
    badges: false
  });
  const sections = [['Subscription', 'Your plan, renewal and how to manage it'], ['Share & invite', 'Your profile link, QR code and referral invite'], ['Privacy', 'Who can find you, and what they see'], ['Notifications', 'What reaches you, by push and by email'], ['Appearance', 'Theme, app icon, language and tips'], ['Account', 'How you sign in, devices, blocked people, your data'], ['About', 'Legal, version, licences']];
  const list = sections.filter(([a, b]) => (a + ' ' + b).toLowerCase().includes(q.toLowerCase()));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      padding: '0 20px 28px'
    }
  }, /*#__PURE__*/React.createElement(ScreenHeader, {
    title: "Settings",
    onBack: onBack,
    style: {
      padding: '6px 0 12px'
    }
  }), /*#__PURE__*/React.createElement(Input, {
    placeholder: "Search settings",
    value: q,
    onChange: setQ
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8
    }
  }, list.map(([a, b]) => /*#__PURE__*/React.createElement(ListRow, {
    key: a,
    title: a,
    subtitle: b,
    chevron: true,
    onClick: () => {}
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '800 18px var(--font-display)',
      padding: '26px 0 6px'
    }
  }, "Quick toggles"), /*#__PURE__*/React.createElement(ListRow, {
    title: "Streak reminder",
    trailing: /*#__PURE__*/React.createElement(Toggle, {
      on: t.streak,
      onChange: v => setT({
        ...t,
        streak: v
      })
    })
  }), /*#__PURE__*/React.createElement(ListRow, {
    title: "Messages",
    trailing: /*#__PURE__*/React.createElement(Toggle, {
      on: t.msgs,
      onChange: v => setT({
        ...t,
        msgs: v
      })
    })
  }), /*#__PURE__*/React.createElement(ListRow, {
    title: "Badges",
    trailing: /*#__PURE__*/React.createElement(Toggle, {
      on: t.badges,
      onChange: v => setT({
        ...t,
        badges: v
      })
    })
  }));
}
Object.assign(window, {
  Settings
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobile-app/settings.screen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mobile-app/shell.screen.jsx
try { (() => {
const {
  TabBar,
  Toast
} = window.LangXDesignSystem_d4218b;
function StatusBar() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: 50,
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      padding: '0 28px 6px',
      font: '700 15px var(--font-display)',
      color: 'var(--text)',
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement("span", null, "9:41"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      gap: 6,
      alignItems: 'center',
      fontSize: 12
    }
  }, /*#__PURE__*/React.createElement("span", null, "\u25CF\u25CF\u25CF"), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 24,
      height: 11,
      border: '1.5px solid currentColor',
      borderRadius: 3,
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: 1.5,
      right: 5,
      background: 'currentColor',
      borderRadius: 1
    }
  }))));
}
function Phone({
  theme,
  route,
  tab,
  onTab,
  unread,
  toast,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    "data-theme": theme,
    "data-screen-label": route,
    style: {
      position: 'relative',
      width: 390,
      height: 844,
      background: 'var(--bg)',
      color: 'var(--text)',
      borderRadius: 44,
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      boxShadow: '0 24px 60px -20px rgba(23,25,28,.25),0 4px 10px rgba(0,0,0,.06)',
      fontFamily: 'var(--font-body)',
      fontSize: 16,
      lineHeight: 1.45
    }
  }, /*#__PURE__*/React.createElement(StatusBar, null), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minHeight: 0,
      overflowY: 'auto',
      overflowX: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      scrollbarWidth: 'none'
    }
  }, children), tab ? /*#__PURE__*/React.createElement(TabBar, {
    active: tab,
    onChange: onTab,
    badges: unread ? {
      chats: unread
    } : {}
  }) : null, toast ? /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 20,
      right: 20,
      bottom: 110,
      zIndex: 30
    }
  }, /*#__PURE__*/React.createElement(Toast, null, toast)) : null);
}
Object.assign(window, {
  Phone,
  StatusBar
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobile-app/shell.screen.jsx", error: String((e && e.message) || e) }); }

__ds_ns.ChatBubble = __ds_scope.ChatBubble;

__ds_ns.TypingIndicator = __ds_scope.TypingIndicator;

__ds_ns.CorrectionCard = __ds_scope.CorrectionCard;

__ds_ns.CopilotCard = __ds_scope.CopilotCard;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.ICON_PATHS = __ds_scope.ICON_PATHS;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.LevelBars = __ds_scope.LevelBars;

__ds_ns.ProgressBar = __ds_scope.ProgressBar;

__ds_ns.StatTile = __ds_scope.StatTile;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Sheet = __ds_scope.Sheet;

__ds_ns.Chip = __ds_scope.Chip;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.SegmentedControl = __ds_scope.SegmentedControl;

__ds_ns.Toggle = __ds_scope.Toggle;

__ds_ns.ListRow = __ds_scope.ListRow;

__ds_ns.ScreenHeader = __ds_scope.ScreenHeader;

__ds_ns.HeaderAction = __ds_scope.HeaderAction;

__ds_ns.DEFAULT_TABS = __ds_scope.DEFAULT_TABS;

__ds_ns.TabBar = __ds_scope.TabBar;

})();
