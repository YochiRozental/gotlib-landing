/* @ds-bundle: {"format":4,"namespace":"GotlibArchitectureDesignSystem_9f6223","components":[{"name":"ClientLogo","sourcePath":"components/cards/ClientLogo.jsx"},{"name":"FeatureItem","sourcePath":"components/cards/FeatureItem.jsx"},{"name":"ProcessStep","sourcePath":"components/cards/ProcessStep.jsx"},{"name":"ProjectCard","sourcePath":"components/cards/ProjectCard.jsx"},{"name":"ServiceCard","sourcePath":"components/cards/ServiceCard.jsx"},{"name":"TestimonialCard","sourcePath":"components/cards/TestimonialCard.jsx"},{"name":"ArrowLink","sourcePath":"components/core/ArrowLink.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Eyebrow","sourcePath":"components/core/Eyebrow.jsx"},{"name":"Frame","sourcePath":"components/core/Frame.jsx"},{"name":"Logo","sourcePath":"components/core/Logo.jsx"},{"name":"Media","sourcePath":"components/core/Media.jsx"},{"name":"SectionHeading","sourcePath":"components/core/SectionHeading.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"ContactLine","sourcePath":"components/forms/ContactLine.jsx"},{"name":"TextArea","sourcePath":"components/forms/TextArea.jsx"},{"name":"TextField","sourcePath":"components/forms/TextField.jsx"},{"name":"SiteFooter","sourcePath":"components/navigation/SiteFooter.jsx"},{"name":"SiteHeader","sourcePath":"components/navigation/SiteHeader.jsx"}],"sourceHashes":{"components/cards/ClientLogo.jsx":"e96f54992a78","components/cards/FeatureItem.jsx":"2008de9ac7d5","components/cards/ProcessStep.jsx":"43ed1c75b54a","components/cards/ProjectCard.jsx":"ad77b7bf19ae","components/cards/ServiceCard.jsx":"83595f15768d","components/cards/TestimonialCard.jsx":"25e22c98a572","components/core/ArrowLink.jsx":"868a6f08b588","components/core/Button.jsx":"0ee536248c5f","components/core/Eyebrow.jsx":"6987bf380231","components/core/Frame.jsx":"9c401e4d394f","components/core/Logo.jsx":"6665867b1d58","components/core/Media.jsx":"b13e679fe801","components/core/SectionHeading.jsx":"8f3be52a7d0a","components/forms/Checkbox.jsx":"cb453111a2d8","components/forms/ContactLine.jsx":"9fd21bfba09c","components/forms/TextArea.jsx":"7ba483d349b7","components/forms/TextField.jsx":"8615b8225d61","components/navigation/SiteFooter.jsx":"b697f8cde8d3","components/navigation/SiteHeader.jsx":"294950d782b0","ui_kits/website/About.jsx":"b1dd82f537a4","ui_kits/website/ContactBand.jsx":"a9fa35f796e1","ui_kits/website/Home.jsx":"7badfda7e597","ui_kits/website/Projects.jsx":"ba44c6a80704","ui_kits/website/Shell.jsx":"68cd597522eb"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.GotlibArchitectureDesignSystem_9f6223 = window.GotlibArchitectureDesignSystem_9f6223 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/cards/ClientLogo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * A client logo in the "מבין לקוחותינו" wall: contained, greyscale at rest, full colour on
 * hover. Municipalities, institutions and community organisations, mixed formats.
 */
function ClientLogo({
  src,
  name,
  style,
  ...rest
}) {
  const [over, setOver] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => setOver(true),
    onMouseLeave: () => setOver(false),
    title: name,
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: 120,
      padding: 'var(--space-4)',
      background: 'var(--surface-card)',
      border: 'var(--border-hairline)',
      ...style
    }
  }, rest), src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name,
    style: {
      maxHeight: '100%',
      maxWidth: '100%',
      objectFit: 'contain',
      filter: over ? 'none' : 'grayscale(1)',
      opacity: over ? 1 : .72,
      transition: 'var(--transition-ui)'
    }
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-small)',
      color: 'var(--text-muted)',
      textAlign: 'center'
    }
  }, name));
}
Object.assign(__ds_scope, { ClientLogo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/ClientLogo.jsx", error: String((e && e.message) || e) }); }

// components/cards/FeatureItem.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * One reason from "למה אנחנו?" — a two-line Hebrew title over a short paragraph, with a
 * hairline rule above it. No icons; the site uses type and rules only.
 */
function FeatureItem({
  title,
  body,
  index,
  tone = 'light',
  style,
  ...rest
}) {
  const onNavy = tone === 'onNavy';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)',
      paddingTop: 'var(--space-5)',
      borderTop: `1px solid ${onNavy ? 'var(--line-on-navy)' : 'var(--line-hairline)'}`,
      ...style
    }
  }, rest), index != null && /*#__PURE__*/React.createElement("span", {
    dir: "ltr",
    style: {
      font: 'var(--type-eyebrow)',
      letterSpacing: 'var(--ls-eyebrow)',
      color: 'var(--taupe-400)'
    }
  }, String(index).padStart(2, '0')), /*#__PURE__*/React.createElement("h5", {
    style: {
      font: 'var(--type-h4)',
      color: onNavy ? 'var(--white)' : 'var(--text-heading)'
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: 'var(--type-body)',
      color: onNavy ? 'var(--text-on-navy-muted)' : 'var(--text-body)'
    }
  }, body));
}
Object.assign(__ds_scope, { FeatureItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/FeatureItem.jsx", error: String((e && e.message) || e) }); }

// components/cards/ProcessStep.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * A numbered stage of תהליך העבודה (01–05). The numeral is thin Latin, the title Hebrew bold.
 */
function ProcessStep({
  number,
  title,
  body,
  active = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'grid',
      gridTemplateColumns: 'auto 1fr',
      gap: 'var(--space-5)',
      padding: 'var(--space-5) 0',
      borderTop: '1px solid var(--line-hairline)',
      background: active ? 'var(--taupe-100)' : 'transparent',
      transition: 'var(--transition-ui)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    dir: "ltr",
    style: {
      font: 'var(--type-numeral)',
      color: active ? 'var(--navy-600)' : 'var(--taupe-400)',
      minWidth: 72
    }
  }, String(number).padStart(2, '0')), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)'
    }
  }, /*#__PURE__*/React.createElement("h5", {
    style: {
      font: 'var(--type-h4)'
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: 'var(--type-body)',
      color: 'var(--text-body)'
    }
  }, body)));
}
Object.assign(__ds_scope, { ProcessStep });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/ProcessStep.jsx", error: String((e && e.message) || e) }); }

// components/cards/TestimonialCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Client quote from the "מה יש ללקוחות לומר עלינו?" section. Quotes are long and specific;
 * the attribution is a role plus a place, rarely a full name.
 */
function TestimonialCard({
  quote,
  name,
  role,
  tone = 'light',
  style,
  ...rest
}) {
  const onNavy = tone === 'onNavy';
  return /*#__PURE__*/React.createElement("figure", _extends({
    style: {
      margin: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-5)',
      padding: 'var(--space-6)',
      background: onNavy ? 'var(--navy-700)' : 'var(--surface-card)',
      borderTop: `2px solid ${onNavy ? 'var(--taupe-400)' : 'var(--navy-600)'}`,
      boxShadow: onNavy ? 'none' : 'var(--shadow-card)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    dir: "ltr",
    style: {
      font: 'var(--fw-thin) 56px/1 var(--font-latin)',
      color: 'var(--taupe-400)',
      height: 28,
      overflow: 'hidden'
    }
  }, "\u201D"), /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: 0,
      font: 'var(--type-body)',
      color: onNavy ? 'var(--text-on-navy-muted)' : 'var(--text-body)'
    }
  }, quote), /*#__PURE__*/React.createElement("figcaption", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, name && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-body)',
      fontWeight: 'var(--fw-bold)',
      color: onNavy ? 'var(--white)' : 'var(--text-heading)'
    }
  }, name), role && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-small)',
      color: onNavy ? 'var(--navy-200)' : 'var(--text-muted)'
    }
  }, role)));
}
Object.assign(__ds_scope, { TestimonialCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/TestimonialCard.jsx", error: String((e && e.message) || e) }); }

// components/core/ArrowLink.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Text link with a trailing RTL arrow — the site's most common affordance
 * ("מעניין אותי ←", "למידע נוסף ←"). Underline grows from the arrow side on hover.
 */
function ArrowLink({
  children,
  href = '#',
  tone = 'navy',
  size = 'body',
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const tones = {
    navy: {
      rest: 'var(--navy-600)',
      hover: 'var(--taupe-600)'
    },
    accent: {
      rest: 'var(--taupe-600)',
      hover: 'var(--navy-600)'
    },
    onNavy: {
      rest: 'var(--white)',
      hover: 'var(--taupe-400)'
    }
  };
  const c = tones[tone];
  return /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-2)',
      color: hover ? c.hover : c.rest,
      font: 'var(--type-body)',
      fontSize: size === 'small' ? 'var(--fs-small)' : 'var(--fs-body)',
      fontWeight: 'var(--fw-semibold)',
      textDecoration: 'none',
      transition: 'color var(--dur-fast) var(--ease-standard)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      boxShadow: hover ? 'inset 0 -1px 0 currentColor' : 'inset 0 -1px 0 transparent',
      transition: 'box-shadow var(--dur-base) var(--ease-standard)'
    }
  }, children), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      fontFamily: 'var(--font-latin)',
      transform: hover ? 'translateX(calc(-1 * var(--arrow-travel)))' : 'none',
      transition: 'transform var(--dur-base) var(--ease-out)'
    }
  }, "\u2190"));
}
Object.assign(__ds_scope, { ArrowLink });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/ArrowLink.jsx", error: String((e && e.message) || e) }); }

// components/cards/ServiceCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * One of the four planning disciplines on the homepage (מעונות יום / מבני ציבור /
 * בתי כנסת / בניה פרטית): a photo panel with the title over it and an "מעניין אותי ←" link.
 */
function ServiceCard({
  title,
  kicker,
  href = '#',
  image,
  cta = 'מעניין אותי',
  style,
  ...rest
}) {
  const [over, setOver] = React.useState(false);
  return /*#__PURE__*/React.createElement("article", _extends({
    onMouseEnter: () => setOver(true),
    onMouseLeave: () => setOver(false),
    style: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      minHeight: 320,
      padding: 'var(--space-6)',
      overflow: 'hidden',
      background: 'var(--navy-600)',
      borderRadius: 'var(--radius-0)',
      boxShadow: over ? 'var(--shadow-card-hover)' : 'var(--shadow-card)',
      transition: 'var(--transition-ui)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      inset: 0,
      background: image ? `var(--scrim-navy) url(${image}) center/cover` : 'var(--navy-600)',
      backgroundBlendMode: image ? 'multiply' : 'normal',
      transform: over ? 'scale(1.04)' : 'scale(1)',
      transition: 'var(--transition-media)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      inset: 'var(--frame-inset)',
      border: '1px solid var(--line-on-navy)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)'
    }
  }, kicker && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-small)',
      color: 'var(--taupe-400)'
    }
  }, kicker), /*#__PURE__*/React.createElement("h4", {
    style: {
      font: 'var(--type-h3)',
      color: 'var(--white)'
    }
  }, title), /*#__PURE__*/React.createElement(__ds_scope.ArrowLink, {
    href: href,
    tone: "onNavy",
    size: "small"
  }, cta)));
}
Object.assign(__ds_scope, { ServiceCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/ServiceCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const PAD = {
  md: '13px 26px',
  lg: '17px 34px'
};
const FS = {
  md: 'var(--fs-small)',
  lg: 'var(--fs-body)'
};

/** Primary call-to-action. Square corners, RTL arrow that nudges on hover. */
function Button({
  children,
  variant = 'primary',
  size = 'lg',
  withArrow = true,
  disabled = false,
  href,
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [down, setDown] = React.useState(false);
  const skins = {
    primary: {
      background: hover ? 'var(--action-bg-hover)' : 'var(--action-bg)',
      color: 'var(--action-fg)',
      border: '1px solid transparent'
    },
    outline: {
      background: hover ? 'var(--navy-600)' : 'transparent',
      color: hover ? 'var(--white)' : 'var(--navy-600)',
      border: '1px solid var(--navy-600)'
    },
    accent: {
      background: hover ? 'var(--taupe-600)' : 'var(--taupe-400)',
      color: 'var(--navy-900)',
      border: '1px solid transparent'
    },
    onNavy: {
      background: hover ? 'var(--taupe-400)' : 'transparent',
      color: hover ? 'var(--navy-900)' : 'var(--white)',
      border: '1px solid var(--taupe-400)'
    }
  };
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 'var(--space-3)',
    padding: PAD[size],
    font: 'var(--type-body)',
    fontFamily: 'var(--font-body)',
    fontSize: FS[size],
    fontWeight: 'var(--fw-semibold)',
    lineHeight: 1,
    borderRadius: 'var(--radius-0)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.4 : 1,
    transition: 'var(--transition-ui)',
    transform: down && !disabled ? 'scale(var(--press-scale))' : 'none',
    textDecoration: 'none',
    ...skins[variant],
    ...style
  };
  const inner = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", null, children), withArrow && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      fontFamily: 'var(--font-latin)',
      transform: hover && !disabled ? 'translateX(calc(-1 * var(--arrow-travel)))' : 'none',
      transition: 'transform var(--dur-base) var(--ease-out)'
    }
  }, "\u2190"));
  const handlers = {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setDown(false);
    },
    onMouseDown: () => setDown(true),
    onMouseUp: () => setDown(false)
  };
  if (href && !disabled) {
    return /*#__PURE__*/React.createElement("a", _extends({
      href: href,
      style: base
    }, handlers, rest), inner);
  }
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    disabled: disabled,
    onClick: onClick,
    style: base
  }, handlers, rest), inner);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Eyebrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Small Latin label that sits above a Hebrew section title ("About Us", "Our projects",
 * "Why us?"). Always Latin, always light and wide-tracked, always taupe.
 */
function Eyebrow({
  children,
  tone = 'accent',
  rule = false,
  style,
  ...rest
}) {
  const color = tone === 'onNavy' ? 'var(--taupe-400)' : tone === 'navy' ? 'var(--navy-300)' : 'var(--text-eyebrow)';
  return /*#__PURE__*/React.createElement("span", _extends({
    dir: "ltr",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-4)',
      font: 'var(--type-eyebrow)',
      letterSpacing: 'var(--ls-eyebrow)',
      textTransform: 'uppercase',
      color,
      ...style
    }
  }, rest), rule && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: 40,
      height: 1,
      background: 'currentColor',
      opacity: .6
    }
  }), children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/core/Frame.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * The logo's drawn-frame motif: a 1px taupe rectangle offset from its content, the way the
 * mark's two panels are drawn. Use it to frame photography, pull-quotes or a hero unit.
 */
function Frame({
  children,
  offset = 'var(--frame-inset)',
  side = 'both',
  tone = 'accent',
  style,
  ...rest
}) {
  const color = tone === 'onNavy' ? 'var(--line-on-navy)' : 'var(--taupe-400)';
  const inset = side === 'both' ? {
    inset: `calc(-1 * ${offset})`
  } : side === 'start' ? {
    top: `calc(-1 * ${offset})`,
    bottom: `calc(-1 * ${offset})`,
    insetInlineStart: `calc(-1 * ${offset})`,
    insetInlineEnd: '40%'
  } : {
    top: `calc(-1 * ${offset})`,
    bottom: `calc(-1 * ${offset})`,
    insetInlineEnd: `calc(-1 * ${offset})`,
    insetInlineStart: '40%'
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      position: 'relative',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      pointerEvents: 'none',
      border: `1px solid ${color}`,
      ...inset
    }
  }), children);
}
Object.assign(__ds_scope, { Frame });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Frame.jsx", error: String((e && e.message) || e) }); }

// components/core/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const FILES = {
  navy: 'logo-full-navy.png',
  onNavy: 'logo-full-reversed.png',
  markTaupe: 'logo-mark-taupe-trimmed.png',
  markBadge: 'logo-mark-badge-navy.png'
};

/**
 * The official Gotlib lockup. Raster PNGs supplied by the studio — never redraw the mark.
 * `assetBase` is the path to this design system's assets/ folder from the consuming page.
 */
function Logo({
  variant = 'navy',
  height = 56,
  assetBase = 'assets',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("img", _extends({
    src: `${assetBase}/${FILES[variant]}`,
    alt: "\u05D2\u05D5\u05D8\u05DC\u05D9\u05D1 \u05D0\u05D3\u05E8\u05D9\u05DB\u05DC\u05D9\u05DD",
    style: {
      height,
      width: 'auto',
      maxWidth: 'none',
      flex: '0 0 auto',
      flexShrink: 0,
      display: 'block',
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Logo.jsx", error: String((e && e.message) || e) }); }

// components/core/Media.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Image holder for architectural photography: fixed ratio, slow zoom on hover, optional
 * bottom scrim. With no `src` it renders the brand's taupe placeholder — the design system
 * ships no photography, so kits use the placeholder until real renders are supplied.
 */
function Media({
  src,
  alt = '',
  ratio = '4 / 3',
  scrim = false,
  hover = false,
  label,
  style,
  ...rest
}) {
  const [over, setOver] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => setOver(true),
    onMouseLeave: () => setOver(false),
    style: {
      position: 'relative',
      aspectRatio: ratio,
      overflow: 'hidden',
      background: 'var(--taupe-200)',
      borderRadius: 'var(--radius-0)',
      ...style
    }
  }, rest), src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transform: hover && over ? 'scale(1.045)' : 'scale(1)',
      transition: 'var(--transition-media)'
    }
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'var(--taupe-200)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-eyebrow)',
      letterSpacing: 'var(--ls-eyebrow)',
      textTransform: 'uppercase',
      color: 'var(--taupe-600)'
    },
    dir: "ltr"
  }, label || 'IMAGE')), scrim && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--scrim-bottom)'
    }
  }));
}
Object.assign(__ds_scope, { Media });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Media.jsx", error: String((e && e.message) || e) }); }

// components/cards/ProjectCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * A selected-projects tile: category label, project name, location, "למידע נוסף ←".
 * Categories seen on the site: מבני ציבור, בתי כנסת, מעונות יום, בניה פרטית.
 */
function ProjectCard({
  category,
  title,
  location,
  image,
  href = '#',
  style,
  ...rest
}) {
  const [over, setOver] = React.useState(false);
  return /*#__PURE__*/React.createElement("article", _extends({
    onMouseEnter: () => setOver(true),
    onMouseLeave: () => setOver(false),
    style: {
      display: 'flex',
      flexDirection: 'column',
      background: 'var(--surface-card)',
      boxShadow: over ? 'var(--shadow-card-hover)' : 'var(--shadow-card)',
      transition: 'var(--transition-ui)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Media, {
    src: image,
    ratio: "4 / 3",
    hover: true,
    label: "PROJECT"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)',
      padding: 'var(--space-5)'
    }
  }, category && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-small)',
      fontWeight: 'var(--fw-semibold)',
      color: 'var(--taupe-600)'
    }
  }, category), /*#__PURE__*/React.createElement("h5", {
    style: {
      font: 'var(--type-h4)'
    }
  }, title), location && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-small)',
      color: 'var(--text-muted)'
    }
  }, location), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      height: 1,
      background: 'var(--line-hairline)',
      margin: 'var(--space-2) 0'
    }
  }), /*#__PURE__*/React.createElement(__ds_scope.ArrowLink, {
    href: href,
    size: "small"
  }, "\u05DC\u05DE\u05D9\u05D3\u05E2 \u05E0\u05D5\u05E1\u05E3")));
}
Object.assign(__ds_scope, { ProjectCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/ProjectCard.jsx", error: String((e && e.message) || e) }); }

// components/core/SectionHeading.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Eyebrow + Hebrew title + optional lead paragraph. The standard opener for every
 * section on gotlib.biz.
 */
function SectionHeading({
  eyebrow,
  title,
  lead,
  align = 'start',
  tone = 'light',
  level = 2,
  maxWidth = 720,
  style,
  ...rest
}) {
  const Tag = 'h' + level;
  const onNavy = tone === 'onNavy';
  return /*#__PURE__*/React.createElement("header", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)',
      alignItems: align === 'center' ? 'center' : 'flex-start',
      textAlign: align === 'center' ? 'center' : 'start',
      maxWidth,
      ...style
    }
  }, rest), eyebrow && /*#__PURE__*/React.createElement(__ds_scope.Eyebrow, {
    tone: onNavy ? 'onNavy' : 'accent'
  }, eyebrow), /*#__PURE__*/React.createElement(Tag, {
    style: {
      font: 'var(--type-h2)',
      color: onNavy ? 'var(--text-on-navy)' : 'var(--text-heading)'
    }
  }, title), lead && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: 'var(--type-lead)',
      color: onNavy ? 'var(--text-on-navy-muted)' : 'var(--text-body)'
    }
  }, lead));
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Square consent checkbox used for the marketing-consent line under the contact form. */
function Checkbox({
  checked = false,
  onChange,
  children,
  tone = 'onNavy',
  style,
  ...rest
}) {
  const onNavy = tone === 'onNavy';
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 'var(--space-3)',
      cursor: 'pointer',
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    checked: checked,
    onChange: onChange,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 1,
      height: 1
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      flex: '0 0 auto',
      width: 18,
      height: 18,
      marginTop: 3,
      border: `1px solid ${onNavy ? 'var(--taupe-400)' : 'var(--navy-600)'}`,
      background: checked ? onNavy ? 'var(--taupe-400)' : 'var(--navy-600)' : 'transparent',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: onNavy ? 'var(--navy-900)' : 'var(--white)',
      fontSize: 12,
      lineHeight: 1,
      transition: 'var(--transition-ui)'
    }
  }, checked ? '✓' : ''), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-small)',
      color: onNavy ? 'var(--navy-100)' : 'var(--text-body)'
    }
  }, children));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/ContactLine.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * A contact detail prefixed by the brand's double-slash marker, exactly as the site sets
 * them: "//  08-9766670", "//  שד' בית שמאי 27 מודיעין עילית".
 */
function ContactLine({
  children,
  href,
  tone = 'onNavy',
  style,
  ...rest
}) {
  const onNavy = tone === 'onNavy';
  const Tag = href ? 'a' : 'div';
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 'var(--space-3)',
      font: 'var(--type-body)',
      color: onNavy ? 'var(--white)' : 'var(--text-heading)',
      textDecoration: 'none',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    dir: "ltr",
    style: {
      color: 'var(--taupe-400)',
      fontFamily: 'var(--font-latin)',
      fontWeight: 'var(--fw-light)'
    }
  }, "//"), /*#__PURE__*/React.createElement("span", null, children));
}
Object.assign(__ds_scope, { ContactLine });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/ContactLine.jsx", error: String((e && e.message) || e) }); }

// components/forms/TextArea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** The הודעה field: same underline treatment as TextField, 3–4 rows. */
function TextArea({
  label,
  value,
  onChange,
  rows = 3,
  tone = 'onNavy',
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const onNavy = tone === 'onNavy';
  const line = focus ? onNavy ? 'var(--taupe-400)' : 'var(--navy-600)' : onNavy ? 'var(--line-on-navy)' : 'var(--line-hairline)';
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-small)',
      color: onNavy ? 'var(--navy-100)' : 'var(--text-muted)'
    }
  }, label), /*#__PURE__*/React.createElement("textarea", _extends({
    rows: rows,
    value: value,
    onChange: onChange,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      appearance: 'none',
      background: 'transparent',
      border: 0,
      borderBottom: `1px solid ${line}`,
      borderRadius: 0,
      padding: '10px 2px',
      font: 'var(--type-body)',
      color: onNavy ? 'var(--white)' : 'var(--text-heading)',
      outline: 'none',
      resize: 'vertical',
      transition: 'var(--transition-ui)'
    }
  }, rest)));
}
Object.assign(__ds_scope, { TextArea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/TextArea.jsx", error: String((e && e.message) || e) }); }

// components/forms/TextField.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Single-line field from the contact form (שם / טלפון / אימייל). Underline-only, RTL. */
function TextField({
  label,
  value,
  onChange,
  type = 'text',
  tone = 'onNavy',
  required = false,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const onNavy = tone === 'onNavy';
  const line = focus ? onNavy ? 'var(--taupe-400)' : 'var(--navy-600)' : onNavy ? 'var(--line-on-navy)' : 'var(--line-hairline)';
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-small)',
      color: onNavy ? 'var(--navy-100)' : 'var(--text-muted)'
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--taupe-400)'
    }
  }, " *")), /*#__PURE__*/React.createElement("input", _extends({
    type: type,
    value: value,
    onChange: onChange,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      appearance: 'none',
      background: 'transparent',
      border: 0,
      borderBottom: `1px solid ${line}`,
      borderRadius: 0,
      padding: '10px 2px',
      font: 'var(--type-body)',
      color: onNavy ? 'var(--white)' : 'var(--text-heading)',
      outline: 'none',
      transition: 'var(--transition-ui)'
    }
  }, rest)));
}
Object.assign(__ds_scope, { TextField });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/TextField.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SiteFooter.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * The site footer: mark, the same nav list, accessibility statement and studio credit.
 * Always on deep navy.
 */
function SiteFooter({
  items = [],
  assetBase = 'assets',
  onNavigate,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("footer", _extends({
    style: {
      background: 'var(--surface-inverse-deep)',
      color: 'var(--text-on-navy-muted)',
      padding: 'var(--space-8) var(--gutter) var(--space-6)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-6)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-7)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Logo, {
    variant: "onNavy",
    height: 52,
    assetBase: assetBase
  }), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 'var(--space-5)',
      flexWrap: 'wrap'
    }
  }, items.map(item => /*#__PURE__*/React.createElement("a", {
    key: item,
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNavigate && onNavigate(item);
    },
    style: {
      font: 'var(--type-small)',
      color: 'var(--white)',
      textDecoration: 'none'
    }
  }, item)))), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      height: 1,
      background: 'var(--line-on-navy)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      gap: 'var(--space-5)',
      flexWrap: 'wrap',
      font: 'var(--type-caption)',
      color: 'var(--navy-200)'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: 'var(--navy-200)',
      textDecoration: 'none'
    }
  }, "\u05D4\u05E6\u05D4\u05E8\u05EA \u05E0\u05D2\u05D9\u05E9\u05D5\u05EA"), /*#__PURE__*/React.createElement("span", null, "\u05D0\u05D5\u05E4\u05D9\u05D9\u05DF, \u05E2\u05D5\u05E6\u05D1 \u05D5\u05E0\u05D1\u05E0\u05D4 \u05E2\"\u05D9 \u05E1\u05D8\u05D5\u05D3\u05D9\u05D5 \u05D0\u05D9\u05D9\u05DC\u05D9\u05DD \u05D5\u05E4\u05E8\u05E1\u05D5\u05DD \u05D4\u05D3\u05E1")));
}
Object.assign(__ds_scope, { SiteFooter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SiteFooter.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SiteHeader.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * The site header: logo at the start of the line, six Hebrew nav items, and the
 * "בואו נכיר: 08-9766670" phone chip at the end. Sticky, translucent over content.
 */
function SiteHeader({
  items = [],
  active,
  phone = '08-9766670',
  assetBase = 'assets',
  onNavigate,
  variant = 'light',
  style,
  ...rest
}) {
  const onNavy = variant === 'onNavy';
  return /*#__PURE__*/React.createElement("header", _extends({
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 20,
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-7)',
      height: 'var(--header-h)',
      padding: '0 var(--gutter)',
      background: onNavy ? 'rgba(21,45,71,.9)' : 'var(--glass-header)',
      backdropFilter: 'var(--blur-header)',
      WebkitBackdropFilter: 'var(--blur-header)',
      boxShadow: 'var(--shadow-header)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNavigate && onNavigate(items[0]);
    },
    style: {
      display: 'block',
      flex: '0 0 auto'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Logo, {
    variant: onNavy ? 'onNavy' : 'navy',
    height: 44,
    assetBase: assetBase
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-6)',
      flex: '1 1 auto',
      minWidth: 0,
      overflow: 'hidden'
    }
  }, items.map(item => {
    const isActive = item === active;
    return /*#__PURE__*/React.createElement("a", {
      key: item,
      href: "#",
      onClick: e => {
        e.preventDefault();
        onNavigate && onNavigate(item);
      },
      style: {
        font: 'var(--type-small)',
        fontWeight: isActive ? 'var(--fw-bold)' : 'var(--fw-regular)',
        color: onNavy ? isActive ? 'var(--taupe-400)' : 'var(--white)' : isActive ? 'var(--navy-600)' : 'var(--text-body)',
        paddingBottom: 4,
        borderBottom: `1px solid ${isActive ? 'var(--taupe-400)' : 'transparent'}`,
        textDecoration: 'none',
        whiteSpace: 'nowrap'
      }
    }, item);
  })), /*#__PURE__*/React.createElement("a", {
    href: `tel:${phone.replace(/-/g, '')}`,
    style: {
      font: 'var(--type-small)',
      fontWeight: 'var(--fw-semibold)',
      color: onNavy ? 'var(--white)' : 'var(--navy-600)',
      border: '1px solid var(--taupe-400)',
      padding: '10px 18px',
      whiteSpace: 'nowrap',
      textDecoration: 'none'
    }
  }, "\u05D1\u05D5\u05D0\u05D5 \u05E0\u05DB\u05D9\u05E8: ", phone));
}
Object.assign(__ds_scope, { SiteHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SiteHeader.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/About.jsx
try { (() => {
const {
  SectionHeading,
  ProcessStep,
  Eyebrow,
  Frame
} = window.GotlibArchitectureDesignSystem_9f6223;
function About() {
  const [open, setOpen] = React.useState(0);
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(Section, {
    tone: "card",
    pad: "clamp(56px,7vw,96px)"
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-6)',
      maxWidth: 900
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    rule: true
  }, "About Us"), /*#__PURE__*/React.createElement("h1", {
    style: {
      font: 'var(--type-display)'
    }
  }, "\u05D0\u05D5\u05D3\u05D5\u05EA\u05D9\u05E0\u05D5"), /*#__PURE__*/React.createElement("h2", {
    style: {
      font: 'var(--type-h2)',
      fontWeight: 'var(--fw-medium)'
    }
  }, "\u05D0\u05E0\u05D5 \u05D1'\u05D2\u05D5\u05D8\u05DC\u05D9\u05D1 \u05D0\u05D3\u05E8\u05D9\u05DB\u05DC\u05D9\u05DD' \u05E4\u05D5\u05E2\u05DC\u05D9\u05DD \u05DE\u05EA\u05D5\u05DA \u05D7\u05D6\u05D5\u05DF \u05D5\u05DE\u05D8\u05E8\u05D4 \u05DC\u05E2\u05E6\u05D1 \u05DE\u05E8\u05D7\u05D1\u05D9\u05DD \u05D4\u05DE\u05E9\u05E4\u05D9\u05E2\u05D9\u05DD \u05DC\u05D8\u05D5\u05D1\u05D4 \u05E2\u05DC \u05D0\u05E0\u05E9\u05D9\u05DD \u05D5\u05E7\u05D4\u05D9\u05DC\u05D5\u05EA."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: 'var(--type-body)'
    }
  }, "\u05E2\u05DD \u05E0\u05D9\u05E1\u05D9\u05D5\u05DF \u05E9\u05DC \u05DE\u05E2\u05DC 20 \u05E9\u05E0\u05D4 \u05D1\u05EA\u05DB\u05E0\u05D5\u05DF \u05DE\u05D2\u05D5\u05D5\u05DF \u05E4\u05E8\u05D5\u05D9\u05E7\u05D8\u05D9\u05DD, \u05D0\u05E0\u05D5 \u05DE\u05D1\u05D9\u05D0\u05D9\u05DD \u05DC\u05E9\u05D5\u05DC\u05D7\u05DF \u05E9\u05D9\u05DC\u05D5\u05D1 \u05D9\u05D9\u05D7\u05D5\u05D3\u05D9 \u05E9\u05DC \u05DE\u05E7\u05E6\u05D5\u05E2\u05D9\u05D5\u05EA \u05D1\u05DC\u05EA\u05D9 \u05DE\u05EA\u05E4\u05E9\u05E8\u05EA \u05D5\u05E9\u05D9\u05E8\u05D5\u05EA \u05D0\u05D9\u05E9\u05D9. \u05E2\u05D1\u05D5\u05E8\u05E0\u05D5, \u05DB\u05DC \u05E4\u05E8\u05D5\u05D9\u05E7\u05D8 \u05D4\u05D5\u05D0 \u05E2\u05D5\u05DC\u05DD \u05D5\u05DE\u05DC\u05D5\u05D0\u05D5 \u2013 \u05D4\u05D7\u05DC \u05DE\u05D7\u05E7\u05D9\u05E8\u05EA \u05DE\u05D4\u05D5\u05EA \u05D5\u05E6\u05D5\u05E8\u05DB\u05D9 \u05D4\u05DC\u05E7\u05D5\u05D7, \u05D3\u05E8\u05DA \u05D4\u05EA\u05D0\u05DE\u05EA \u05D4\u05EA\u05DB\u05E0\u05D5\u05DF \u05DC\u05E1\u05D1\u05D9\u05D1\u05D4 \u05D5\u05DC\u05E7\u05D4\u05D9\u05DC\u05D4, \u05D5\u05E2\u05D3 \u05D4\u05D9\u05E8\u05D9\u05D3\u05D4 \u05D4\u05DE\u05D5\u05E7\u05E4\u05D3\u05EA \u05D1\u05D9\u05D5\u05EA\u05E8 \u05DC\u05E4\u05E8\u05D8\u05D9 \u05D4\u05E4\u05E8\u05D8\u05D9\u05DD \u05D1\u05D1\u05D9\u05E6\u05D5\u05E2."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: 'var(--type-body)'
    }
  }, "\u05DC\u05D0\u05D5\u05E8\u05DA \u05D4\u05E9\u05E0\u05D9\u05DD \u05EA\u05DB\u05E0\u05E0\u05D5 \u05E4\u05E8\u05D5\u05D9\u05E7\u05D8\u05D9\u05DD \u05E8\u05D1\u05D9\u05DD \u05D5\u05DE\u05D2\u05D5\u05D5\u05E0\u05D9\u05DD, \u05DE\u05E2\u05D5\u05E0\u05D5\u05EA \u05D9\u05D5\u05DD, \u05D1\u05EA\u05D9 \u05DB\u05E0\u05E1\u05EA, \u05DE\u05D5\u05E1\u05D3\u05D5\u05EA \u05D7\u05D9\u05E0\u05D5\u05DA, \u05D0\u05D5\u05DC\u05DE\u05D5\u05EA \u05D0\u05D9\u05E8\u05D5\u05E2\u05D9\u05DD, \u05D9\u05E9\u05D9\u05D1\u05D5\u05EA, \u05DE\u05E8\u05DB\u05D6\u05D9\u05DD \u05E7\u05D4\u05D9\u05DC\u05EA\u05D9\u05D9\u05DD, \u05D1\u05EA\u05D9\u05DD \u05E4\u05E8\u05D8\u05D9\u05D9\u05DD \u05D5\u05E2\u05D5\u05D3 \u2013 \u05DB\u05DC \u05D0\u05D7\u05D3 \u05DE\u05D4\u05DD \u05D1\u05D4\u05EA\u05D0\u05DE\u05D4 \u05DE\u05DC\u05D0\u05D4 \u05DC\u05D0\u05D5\u05E4\u05D9\u05D5 \u05D5\u05DC\u05E6\u05E8\u05DB\u05D9\u05D5."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: 'var(--type-body)',
      fontWeight: 'var(--fw-bold)',
      color: 'var(--text-heading)'
    }
  }, "\u05D0\u05E0\u05D5 \u05DE\u05DC\u05D5\u05D5\u05D9\u05DD \u05D0\u05EA \u05DC\u05E7\u05D5\u05D7\u05D5\u05EA\u05D9\u05E0\u05D5 \u05D9\u05D3 \u05D1\u05D9\u05D3 \u05DC\u05D0\u05D5\u05E8\u05DA \u05DB\u05DC \u05E9\u05DC\u05D1\u05D9 \u05D4\u05E4\u05E8\u05D5\u05D9\u05E7\u05D8. \u05E2\u05DD \u05DE\u05D7\u05D5\u05D9\u05D1\u05D5\u05EA \u05DE\u05E9\u05D5\u05EA\u05E4\u05EA \u05DC\u05D0\u05D9\u05DB\u05D5\u05EA \u05D5\u05DC\u05E2\u05DE\u05D9\u05D3\u05D4 \u05D1\u05DC\u05D5\u05D7\u05D5\u05EA \u05D6\u05DE\u05E0\u05D9\u05DD.")))), /*#__PURE__*/React.createElement(Section, {
    tone: "page"
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '.8fr 1.2fr',
      gap: 'clamp(32px,6vw,80px)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-5)',
      position: 'sticky',
      top: 'calc(var(--header-h) + 24px)'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Process",
    title: "\u05EA\u05D4\u05DC\u05D9\u05DA \u05D4\u05E2\u05D1\u05D5\u05D3\u05D4"
  }), /*#__PURE__*/React.createElement(Frame, {
    offset: "10px",
    style: {
      marginTop: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '3 / 4',
      background: 'var(--taupe-200)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    dir: "ltr",
    style: {
      font: 'var(--type-eyebrow)',
      letterSpacing: 'var(--ls-eyebrow)',
      color: 'var(--taupe-600)'
    }
  }, "PLAN DRAWING")))), /*#__PURE__*/React.createElement("div", null, PROCESS.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: s.title,
    onClick: () => setOpen(i),
    style: {
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(ProcessStep, {
    number: i + 1,
    title: s.title,
    body: open === i ? s.body : '',
    active: open === i
  }))))))), /*#__PURE__*/React.createElement(ContactBand, null));
}
Object.assign(window, {
  About
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/About.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ContactBand.jsx
try { (() => {
const {
  SectionHeading,
  TextField,
  TextArea,
  Checkbox,
  Button,
  ContactLine,
  Eyebrow
} = window.GotlibArchitectureDesignSystem_9f6223;
function ContactBand() {
  const [form, setForm] = React.useState({
    name: '',
    phone: '',
    email: '',
    msg: ''
  });
  const [consent, setConsent] = React.useState(false);
  const [sent, setSent] = React.useState(false);
  const set = k => e => setForm({
    ...form,
    [k]: e.target.value
  });
  return /*#__PURE__*/React.createElement(Section, {
    tone: "navy",
    style: {
      scrollMarginTop: 'var(--header-h)'
    }
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'clamp(32px,6vw,96px)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    tone: "onNavy",
    eyebrow: "Contact",
    title: "\u05D9\u05E9 \u05DC\u05DB\u05DD \u05D7\u05D6\u05D5\u05DF \u05D0\u05D3\u05E8\u05D9\u05DB\u05DC\u05D9 \u05E9\u05EA\u05E8\u05E6\u05D5 \u05DC\u05D4\u05D2\u05E9\u05D9\u05DD? \u05E0\u05E9\u05DE\u05D7 \u05DC\u05E2\u05D6\u05D5\u05E8 \u05DC\u05D4\u05E4\u05D5\u05DA \u05D0\u05D5\u05EA\u05D5 \u05DC\u05DE\u05E6\u05D9\u05D0\u05D5\u05EA.",
    lead: "\u05EA\u05D0\u05DE\u05D5 \u05E2\u05DB\u05E9\u05D9\u05D5 \u05E4\u05D2\u05D9\u05E9\u05EA \u05D0\u05E1\u05D8\u05E8\u05D8\u05D2\u05D9\u05D4 \u05D0\u05D3\u05E8\u05D9\u05DB\u05DC\u05D9\u05EA \u05DE\u05D5\u05EA\u05D0\u05DE\u05EA \u05D1\u05D3\u05D9\u05D5\u05E7 \u05E2\u05D1\u05D5\u05E8\u05DB\u05DD"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(ContactLine, null, "\u05D2\u05D5\u05D8\u05DC\u05D9\u05D1 \u05D0\u05D3\u05E8\u05D9\u05DB\u05DC\u05D9\u05DD"), /*#__PURE__*/React.createElement(ContactLine, null, "\u05E9\u05D3' \u05D1\u05D9\u05EA \u05E9\u05DE\u05D0\u05D9 27 \u05DE\u05D5\u05D3\u05D9\u05E2\u05D9\u05DF \u05E2\u05D9\u05DC\u05D9\u05EA"), /*#__PURE__*/React.createElement(ContactLine, {
    href: "tel:089766670"
  }, "08-9766670"), /*#__PURE__*/React.createElement(ContactLine, {
    href: "mailto:info@gotlib.biz"
  }, "info@gotlib.biz"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-body)',
      color: 'var(--text-on-navy-muted)'
    }
  }, "\u05DE\u05DC\u05D0\u05D5 \u05E4\u05E8\u05D8\u05D9\u05DD \u05D5\u05E0\u05E9\u05D5\u05D1 \u05D0\u05DC\u05D9\u05DB\u05DD \u05D1\u05D4\u05E7\u05D3\u05DD"), sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      border: '1px solid var(--taupe-400)',
      padding: 'var(--space-6)',
      color: 'var(--white)',
      font: 'var(--type-body)'
    }
  }, "\u05EA\u05D5\u05D3\u05D4, ", form.name || 'שנשמע ממכם', ". \u05D4\u05D4\u05D5\u05D3\u05E2\u05D4 \u05E0\u05E9\u05DC\u05D7\u05D4 \u2014 \u05E0\u05E9\u05D5\u05D1 \u05D0\u05DC\u05D9\u05DB\u05DD \u05D1\u05D4\u05E7\u05D3\u05DD.") : /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      setSent(true);
    },
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(TextField, {
    label: "\u05E9\u05DD",
    required: true,
    value: form.name,
    onChange: set('name')
  }), /*#__PURE__*/React.createElement(TextField, {
    label: "\u05D8\u05DC\u05E4\u05D5\u05DF",
    value: form.phone,
    onChange: set('phone')
  })), /*#__PURE__*/React.createElement(TextField, {
    label: "\u05D0\u05D9\u05DE\u05D9\u05D9\u05DC",
    type: "email",
    value: form.email,
    onChange: set('email')
  }), /*#__PURE__*/React.createElement(TextArea, {
    label: "\u05D4\u05D5\u05D3\u05E2\u05D4",
    rows: 3,
    value: form.msg,
    onChange: set('msg')
  }), /*#__PURE__*/React.createElement(Checkbox, {
    checked: consent,
    onChange: () => setConsent(!consent)
  }, "\u05D0\u05E0\u05D9 \u05DE\u05D0\u05E9\u05E8/\u05EA \u05E7\u05D1\u05DC\u05EA \u05D8\u05D9\u05E4\u05D9\u05DD, \u05DE\u05D0\u05DE\u05E8\u05D9\u05DD, \u05DE\u05D3\u05E8\u05D9\u05DB\u05D9\u05DD \u05D5\u05D7\u05D5\u05DE\u05E8 \u05E4\u05E8\u05E1\u05D5\u05DE\u05D9 \u05D1\u05DE\u05D9\u05D9\u05DC \u05DE\u05D2\u05D5\u05D8\u05DC\u05D9\u05D1 \u05D0\u05D3\u05E8\u05D9\u05DB\u05DC\u05D9\u05DD \u05D1\u05D4\u05EA\u05D0\u05DD \u05DC\u05DE\u05D3\u05D9\u05E0\u05D9\u05D5\u05EA \u05D4\u05E4\u05E8\u05D8\u05D9\u05D5\u05EA \u05E9\u05DC\u05E0\u05D5"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    size: "md",
    onClick: () => setSent(true)
  }, "\u05E9\u05DC\u05D7\u05D5 \u05D4\u05D5\u05D3\u05E2\u05D4")))))));
}
Object.assign(window, {
  ContactBand
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ContactBand.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Home.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  SectionHeading,
  Eyebrow,
  Button,
  ArrowLink,
  ServiceCard,
  ProjectCard,
  TestimonialCard,
  FeatureItem,
  ClientLogo,
  Frame,
  Logo
} = window.GotlibArchitectureDesignSystem_9f6223;
function Hero({
  onNavigate
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      background: 'var(--surface-inverse-deep)',
      color: 'var(--white)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(180deg,rgba(35,60,83,.35),rgba(21,45,71,.95)), var(--navy-700)'
    }
  }), /*#__PURE__*/React.createElement(Container, {
    style: {
      position: 'relative',
      padding: 'clamp(72px,10vw,140px) var(--gutter)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-5)',
      maxWidth: 760
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "onNavy",
    rule: true
  }, "Gotlib Architecture"), /*#__PURE__*/React.createElement("h1", {
    style: {
      font: 'var(--type-hero)',
      color: 'var(--white)'
    }
  }, "\u05DE\u05E2\u05E6\u05D1\u05D9\u05DD \u05D7\u05D6\u05D5\u05DF.", /*#__PURE__*/React.createElement("br", null), "\u05D1\u05D5\u05E0\u05D9\u05DD \u05E7\u05D4\u05D9\u05DC\u05D4."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: 'var(--type-lead)',
      color: 'var(--text-on-navy-muted)',
      maxWidth: 620
    }
  }, "\u05EA\u05DB\u05E0\u05D5\u05DF \u05E0\u05DB\u05D5\u05DF, \u05D0\u05D3\u05E8\u05D9\u05DB\u05DC\u05D5\u05EA \u05D0\u05E1\u05D8\u05E8\u05D8\u05D2\u05D9\u05EA \u05DE\u05DE\u05D5\u05E7\u05D3\u05EA \u05D5\u05D4\u05EA\u05E0\u05D4\u05DC\u05D5\u05EA \u05DE\u05D7\u05D5\u05E9\u05D1\u05EA \u2013 \u05DE\u05D1\u05D9\u05D0\u05D9\u05DD \u05EA\u05D5\u05E6\u05D0\u05D4 \u05DE\u05D5\u05E9\u05DC\u05DE\u05EA"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-4)',
      flexWrap: 'wrap',
      marginTop: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    onClick: () => onNavigate('פרויקטים')
  }, "\u05DC\u05E4\u05E8\u05D5\u05D9\u05E7\u05D8\u05D9\u05DD \u05E0\u05D1\u05D7\u05E8\u05D9\u05DD"), /*#__PURE__*/React.createElement(Button, {
    variant: "onNavy",
    onClick: () => onNavigate('צרו קשר')
  }, "\u05D1\u05D5\u05D0\u05D5 \u05E0\u05DB\u05D9\u05E8"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      insetInlineEnd: 'var(--gutter)',
      bottom: 'var(--space-8)',
      opacity: .5
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    variant: "markTaupe",
    height: 120,
    assetBase: "../../assets"
  }))));
}
function Services({
  onNavigate
}) {
  return /*#__PURE__*/React.createElement(Section, {
    tone: "page"
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 'var(--grid-gap)'
    }
  }, SERVICES.map(s => /*#__PURE__*/React.createElement(ServiceCard, {
    key: s.title,
    title: s.title,
    cta: "\u05DE\u05E2\u05E0\u05D9\u05D9\u05DF \u05D0\u05D5\u05EA\u05D9",
    href: "#",
    onClick: () => onNavigate('תחומי התכנון שלנו')
  })))));
}
function AboutStrip({
  onNavigate
}) {
  return /*#__PURE__*/React.createElement(Section, {
    tone: "card"
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.05fr .95fr',
      gap: 'clamp(32px,6vw,96px)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "About Us",
    title: "\u05DE\u05D9 \u05D0\u05E0\u05D7\u05E0\u05D5 \u05D2\u05D5\u05D8\u05DC\u05D9\u05D1 \u05D0\u05D3\u05E8\u05D9\u05DB\u05DC\u05D9\u05DD",
    lead: "\u05D0\u05E0\u05D5 \u05DE\u05EA\u05DE\u05D7\u05D9\u05DD \u05D1\u05EA\u05DB\u05E0\u05D5\u05DF \u05D5\u05E2\u05D9\u05E6\u05D5\u05D1 \u05DE\u05D1\u05E0\u05D9 \u05E6\u05D9\u05D1\u05D5\u05E8, \u05DE\u05D5\u05E1\u05D3\u05D5\u05EA, \u05E4\u05E8\u05D5\u05D9\u05E7\u05D8\u05D9\u05DD \u05E7\u05D4\u05D9\u05DC\u05EA\u05D9\u05D9\u05DD \u05D5\u05D1\u05E0\u05D9\u05D5\u05EA \u05E4\u05E8\u05D8\u05D9\u05D5\u05EA \u05D1\u05E8\u05DE\u05D4 \u05D4\u05D2\u05D1\u05D5\u05D4\u05D4 \u05D1\u05D9\u05D5\u05EA\u05E8."
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: 'var(--type-body)'
    }
  }, "\u05DB\u05DC \u05E4\u05E8\u05D5\u05D9\u05E7\u05D8 \u05D6\u05D5\u05DB\u05D4 \u05D0\u05E6\u05DC\u05E0\u05D5 \u05DC\u05D9\u05D7\u05E1 \u05D0\u05D9\u05E9\u05D9 \u05D5\u05EA\u05DB\u05E0\u05D5\u05DF \u05D9\u05D9\u05D7\u05D5\u05D3\u05D9 \u05D4\u05DE\u05D5\u05EA\u05D0\u05DD \u05DC\u05E6\u05E8\u05DB\u05D9\u05DD \u05E9\u05DC \u05D4\u05DC\u05E7\u05D5\u05D7, \u05D1\u05EA\u05D4\u05DC\u05D9\u05DA \u05D0\u05E1\u05D8\u05E8\u05D8\u05D2\u05D9 \u05DE\u05E1\u05D5\u05D3\u05E8 \u05D5\u05DE\u05D7\u05D5\u05E9\u05D1 \u05E2\u05DC \u05DE\u05E0\u05EA \u05DC\u05D4\u05E4\u05D5\u05DA \u05D0\u05EA \u05D4\u05D7\u05D6\u05D5\u05DF \u05DC\u05DE\u05E6\u05D9\u05D0\u05D5\u05EA \u05D1\u05E8\u05DE\u05D4 \u05DE\u05D5\u05E9\u05DC\u05DE\u05EA."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-4)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    size: "md",
    onClick: () => onNavigate('אודות')
  }, "\u05DE\u05D4 \u05D0\u05E0\u05D7\u05E0\u05D5 \u05E2\u05D5\u05E9\u05D9\u05DD"), /*#__PURE__*/React.createElement(ArrowLink, {
    onClick: () => onNavigate('צרו קשר')
  }, "\u05D1\u05D5\u05D0\u05D5 \u05E0\u05DB\u05D9\u05E8"))), /*#__PURE__*/React.createElement(Frame, {
    offset: "var(--frame-inset)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '4 / 3',
      background: 'var(--taupe-200)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    dir: "ltr",
    style: {
      font: 'var(--type-eyebrow)',
      letterSpacing: 'var(--ls-eyebrow)',
      color: 'var(--taupe-600)'
    }
  }, "STUDIO IMAGE"))))));
}
function ProjectsStrip({
  onNavigate
}) {
  return /*#__PURE__*/React.createElement(Section, {
    tone: "page"
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-7)'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    align: "center",
    eyebrow: "Our projects",
    title: "\u05E4\u05E8\u05D5\u05D9\u05E7\u05D8\u05D9\u05DD \u05E0\u05D1\u05D7\u05E8\u05D9\u05DD",
    lead: "\u05D8\u05E2\u05D9\u05DE\u05D4 \u05E7\u05D8\u05E0\u05D4 \u05DE\u05DE\u05D2\u05D5\u05D5\u05DF \u05D4\u05E4\u05E8\u05D5\u05D9\u05E7\u05D8\u05D9\u05DD \u05E9\u05D1\u05D9\u05E6\u05E2\u05E0\u05D5 \u05DC\u05D0\u05D5\u05E8\u05DA \u05D4\u05E9\u05E0\u05D9\u05DD, \u05E2\u05DD \u05DE\u05D5\u05E8\u05DB\u05D1\u05D5\u05D9\u05D5\u05EA \u05E9\u05D5\u05E0\u05D5\u05EA, \u05E9\u05D1\u05DB\u05DC \u05D0\u05D7\u05EA \u05DE\u05D4\u05DF \u05DE\u05E9\u05EA\u05E7\u05E4\u05EA \u05D7\u05E9\u05D9\u05D1\u05D4 \u05D9\u05E6\u05D9\u05E8\u05EA\u05D9\u05EA \u05D5\u05D4\u05EA\u05DE\u05D5\u05D3\u05D3\u05D5\u05EA \u05E2\u05DD \u05D0\u05EA\u05D2\u05E8\u05D9\u05DD.",
    style: {
      margin: '0 auto'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 'var(--grid-gap)'
    }
  }, PROJECTS.map(p => /*#__PURE__*/React.createElement(ProjectCard, _extends({
    key: p.title
  }, p)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    size: "md",
    onClick: () => onNavigate('פרויקטים')
  }, "\u05E2\u05D5\u05D3 \u05E4\u05E8\u05D5\u05D9\u05E7\u05D8\u05D9\u05DD")))));
}
function WhyUs() {
  return /*#__PURE__*/React.createElement(Section, {
    tone: "navy"
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-7)'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    tone: "onNavy",
    eyebrow: "Why us?",
    title: "\u05DC\u05DE\u05D4 \u05D0\u05E0\u05D7\u05E0\u05D5?"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 'var(--grid-gap)'
    }
  }, WHY.map((w, i) => /*#__PURE__*/React.createElement(FeatureItem, _extends({
    key: w.title,
    tone: "onNavy",
    index: i + 1
  }, w)))))));
}
function Testimonials({
  onNavigate
}) {
  return /*#__PURE__*/React.createElement(Section, {
    tone: "tint"
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-7)'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Recommend us",
    title: "\u05DE\u05D4 \u05D9\u05E9 \u05DC\u05DC\u05E7\u05D5\u05D7\u05D5\u05EA \u05DC\u05D5\u05DE\u05E8 \u05E2\u05DC\u05D9\u05E0\u05D5?"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 'var(--grid-gap)'
    }
  }, TESTIMONIALS.map(t => /*#__PURE__*/React.createElement(TestimonialCard, _extends({
    key: t.role
  }, t)))), /*#__PURE__*/React.createElement(ArrowLink, {
    onClick: () => onNavigate('צרו קשר')
  }, "\u05D4\u05E6\u05D8\u05E8\u05E4\u05D5 \u05DC\u05DC\u05E7\u05D5\u05D7\u05D5\u05EA\u05D9\u05E0\u05D5 \u05D4\u05DE\u05E8\u05D5\u05E6\u05D9\u05DD"))));
}
function Clients() {
  return /*#__PURE__*/React.createElement(Section, {
    tone: "page"
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-7)'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    align: "center",
    eyebrow: "Our Clients",
    title: "\u05DE\u05D1\u05D9\u05DF \u05DC\u05E7\u05D5\u05D7\u05D5\u05EA\u05D9\u05E0\u05D5",
    lead: "\u05D0\u05E0\u05D5 \u05E9\u05DE\u05D7\u05D9\u05DD \u05DC\u05E2\u05D1\u05D5\u05D3 \u05E2\u05DD \u05DE\u05D2\u05D5\u05D5\u05DF \u05E8\u05D7\u05D1 \u05E9\u05DC \u05DC\u05E7\u05D5\u05D7\u05D5\u05EA \u05DE\u05DB\u05DC \u05D4\u05DE\u05D2\u05D6\u05E8\u05D9\u05DD: \u05E2\u05D9\u05E8\u05D9\u05D5\u05EA \u05D5\u05E8\u05E9\u05D5\u05D9\u05D5\u05EA \u05DE\u05E7\u05D5\u05DE\u05D9\u05D5\u05EA, \u05DE\u05D5\u05E1\u05D3\u05D5\u05EA \u05D7\u05D9\u05E0\u05D5\u05DA \u05D5\u05EA\u05E8\u05D1\u05D5\u05EA, \u05E2\u05DE\u05D5\u05EA\u05D5\u05EA \u05D5\u05D0\u05E8\u05D2\u05D5\u05E0\u05D9 \u05E7\u05D4\u05D9\u05DC\u05D4, \u05D5\u05DB\u05DF \u05DC\u05E7\u05D5\u05D7\u05D5\u05EA \u05E4\u05E8\u05D8\u05D9\u05D9\u05DD.",
    style: {
      margin: '0 auto'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(6,1fr)',
      gap: 'var(--space-4)'
    }
  }, CLIENTS.map(c => /*#__PURE__*/React.createElement(ClientLogo, {
    key: c,
    name: c
  }))))));
}
function Home({
  onNavigate
}) {
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(Hero, {
    onNavigate: onNavigate
  }), /*#__PURE__*/React.createElement(Services, {
    onNavigate: onNavigate
  }), /*#__PURE__*/React.createElement(AboutStrip, {
    onNavigate: onNavigate
  }), /*#__PURE__*/React.createElement(ProjectsStrip, {
    onNavigate: onNavigate
  }), /*#__PURE__*/React.createElement(WhyUs, null), /*#__PURE__*/React.createElement(Testimonials, {
    onNavigate: onNavigate
  }), /*#__PURE__*/React.createElement(Clients, null), /*#__PURE__*/React.createElement(ContactBand, null));
}
Object.assign(window, {
  Home,
  Hero,
  AboutStrip,
  ProjectsStrip,
  WhyUs,
  Testimonials,
  Clients
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Projects.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  SectionHeading,
  ProjectCard,
  Eyebrow,
  ServiceCard,
  ArrowLink
} = window.GotlibArchitectureDesignSystem_9f6223;
const CATEGORIES = ['הכל', 'מבני ציבור', 'בתי כנסת'];
function Projects() {
  const [cat, setCat] = React.useState('הכל');
  const list = cat === 'הכל' ? PROJECTS : PROJECTS.filter(p => p.category === cat);
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(Section, {
    tone: "card",
    pad: "clamp(48px,6vw,80px)"
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Our projects",
    title: "\u05E4\u05E8\u05D5\u05D9\u05E7\u05D8\u05D9\u05DD",
    lead: "\u05DE\u05D2\u05D5\u05D5\u05DF \u05D4\u05E4\u05E8\u05D5\u05D9\u05E7\u05D8\u05D9\u05DD \u05E9\u05D1\u05D9\u05E6\u05E2\u05E0\u05D5 \u05DC\u05D0\u05D5\u05E8\u05DA \u05D4\u05E9\u05E0\u05D9\u05DD, \u05E2\u05DD \u05DE\u05D5\u05E8\u05DB\u05D1\u05D5\u05D9\u05D5\u05EA \u05E9\u05D5\u05E0\u05D5\u05EA."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-5)',
      borderBottom: '1px solid var(--line-hairline)'
    }
  }, CATEGORIES.map(c => /*#__PURE__*/React.createElement("button", {
    key: c,
    onClick: () => setCat(c),
    style: {
      appearance: 'none',
      background: 'none',
      border: 0,
      cursor: 'pointer',
      padding: '0 0 12px',
      font: 'var(--type-body)',
      fontWeight: cat === c ? 'var(--fw-bold)' : 'var(--fw-regular)',
      color: cat === c ? 'var(--navy-600)' : 'var(--text-muted)',
      borderBottom: `2px solid ${cat === c ? 'var(--taupe-400)' : 'transparent'}`,
      marginBottom: -1
    }
  }, c)))))), /*#__PURE__*/React.createElement(Section, {
    tone: "page",
    pad: "var(--space-8)"
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 'var(--grid-gap)'
    }
  }, list.map(p => /*#__PURE__*/React.createElement(ProjectCard, _extends({
    key: p.title
  }, p)))))), /*#__PURE__*/React.createElement(ContactBand, null));
}
function ServicesPage() {
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(Section, {
    tone: "card",
    pad: "clamp(48px,6vw,80px)"
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Our services",
    title: "\u05EA\u05D7\u05D5\u05DE\u05D9 \u05D4\u05EA\u05DB\u05E0\u05D5\u05DF \u05E9\u05DC\u05E0\u05D5",
    lead: "\u05D0\u05E8\u05D1\u05E2\u05D4 \u05EA\u05D7\u05D5\u05DE\u05D9 \u05EA\u05DB\u05E0\u05D5\u05DF \u05DE\u05E8\u05DB\u05D6\u05D9\u05D9\u05DD, \u05DB\u05DC \u05D0\u05D7\u05D3 \u05E2\u05DD \u05E8\u05D2\u05D5\u05DC\u05E6\u05D9\u05D4, \u05E7\u05D4\u05D9\u05DC\u05D4 \u05D5\u05E6\u05E8\u05DB\u05D9\u05DD \u05DE\u05E9\u05DC\u05D5."
  }))), /*#__PURE__*/React.createElement(Section, {
    tone: "page",
    pad: "var(--space-8)"
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2,1fr)',
      gap: 'var(--grid-gap)'
    }
  }, SERVICES.map(s => /*#__PURE__*/React.createElement(ServiceCard, {
    key: s.title,
    title: s.title
  }))))), /*#__PURE__*/React.createElement(ContactBand, null));
}
function Strategic() {
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(Section, {
    tone: "deep",
    pad: "clamp(64px,8vw,112px)"
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-5)',
      maxWidth: 760
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "onNavy",
    rule: true
  }, "Strategic architecture"), /*#__PURE__*/React.createElement("h1", {
    style: {
      font: 'var(--type-display)',
      color: 'var(--white)'
    }
  }, "\u05D0\u05D3\u05E8\u05D9\u05DB\u05DC\u05D5\u05EA \u05D0\u05E1\u05D8\u05E8\u05D8\u05D2\u05D9\u05EA"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: 'var(--type-lead)',
      color: 'var(--text-on-navy-muted)'
    }
  }, "\u05EA\u05DB\u05E0\u05D5\u05DF \u05E0\u05DB\u05D5\u05DF, \u05D0\u05D3\u05E8\u05D9\u05DB\u05DC\u05D5\u05EA \u05D0\u05E1\u05D8\u05E8\u05D8\u05D2\u05D9\u05EA \u05DE\u05DE\u05D5\u05E7\u05D3\u05EA \u05D5\u05D4\u05EA\u05E0\u05D4\u05DC\u05D5\u05EA \u05DE\u05D7\u05D5\u05E9\u05D1\u05EA \u2013 \u05DE\u05D1\u05D9\u05D0\u05D9\u05DD \u05EA\u05D5\u05E6\u05D0\u05D4 \u05DE\u05D5\u05E9\u05DC\u05DE\u05EA."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: 'var(--type-body)',
      color: 'var(--text-on-navy-muted)'
    }
  }, "\u05D0\u05E0\u05D5 \u05DE\u05D0\u05DE\u05D9\u05E0\u05D9\u05DD \u05E9\u05D0\u05D3\u05E8\u05D9\u05DB\u05DC\u05D5\u05EA \u05D0\u05E1\u05D8\u05E8\u05D8\u05D2\u05D9\u05EA \u05D8\u05D5\u05D1\u05D4 \u05E6\u05E8\u05D9\u05DB\u05D4 \u05DC\u05E9\u05E8\u05EA \u05D0\u05EA \u05D4\u05DE\u05E9\u05EA\u05DE\u05E9\u05D9\u05DD \u05D1\u05D4 \u05D5\u05D0\u05EA \u05D4\u05E7\u05D4\u05D9\u05DC\u05D4 \u05E1\u05D1\u05D9\u05D1, \u05D5\u05DC\u05DB\u05DF \u05D0\u05E0\u05D5 \u05DE\u05EA\u05DE\u05E7\u05D3\u05D9\u05DD \u05D1\u05D4\u05D1\u05E0\u05EA \u05D4\u05D0\u05E0\u05E9\u05D9\u05DD \u05E9\u05DE\u05D0\u05D7\u05D5\u05E8\u05D9 \u05D4\u05DE\u05D1\u05E0\u05D4."), /*#__PURE__*/React.createElement(ArrowLink, {
    tone: "onNavy"
  }, "\u05DE\u05D4 \u05D0\u05E0\u05D7\u05E0\u05D5 \u05E2\u05D5\u05E9\u05D9\u05DD")))), /*#__PURE__*/React.createElement(ContactBand, null));
}
Object.assign(window, {
  Projects,
  ServicesPage,
  Strategic
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Projects.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Shell.jsx
try { (() => {
const {
  Eyebrow,
  SectionHeading
} = window.GotlibArchitectureDesignSystem_9f6223;
function Container({
  children,
  narrow,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: narrow ? 'var(--container-narrow)' : 'var(--container-max)',
      margin: '0 auto',
      padding: '0 var(--gutter)',
      ...style
    }
  }, children);
}
function Section({
  children,
  tone = 'page',
  pad = 'var(--section-y)',
  style
}) {
  const bg = tone === 'navy' ? 'var(--surface-inverse)' : tone === 'deep' ? 'var(--surface-inverse-deep)' : tone === 'tint' ? 'var(--surface-card-alt)' : tone === 'card' ? 'var(--surface-card)' : 'var(--surface-page)';
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: bg,
      padding: `${pad} 0`,
      ...style
    }
  }, children);
}
const NAV = ['ראשי', 'אודות', 'אדריכלות אסטרטגית', 'פרויקטים', 'תחומי התכנון שלנו', 'צרו קשר'];
const SERVICES = [{
  title: 'תכנון מעונות יום'
}, {
  title: 'תכנון מבני ציבור'
}, {
  title: 'תכנון ועיצוב בתי כנסת'
}, {
  title: 'תכנון בניה פרטית'
}];
const PROJECTS = [{
  category: 'מבני ציבור',
  title: 'מקווה קרלין גבעת זאב',
  location: 'גבעת זאב'
}, {
  category: 'מבני ציבור',
  title: 'מקווה קרית יערים',
  location: 'קרית יערים'
}, {
  category: 'בתי כנסת',
  title: 'בית הכנסת – בני תורה',
  location: 'קרית יערים'
}, {
  category: 'מבני ציבור',
  title: 'בית הארחה נוף הפסגה',
  location: 'מודיעין עילית'
}, {
  category: 'בתי כנסת',
  title: 'מודז\'יץ קדושת לוי',
  location: 'ביתר עילית'
}, {
  category: 'בתי כנסת',
  title: 'תפארת משה',
  location: 'מודיעין עילית'
}];
const WHY = [{
  title: 'למעלה מ-20 שנות נסיון',
  body: 'בתחום האדריכלות ועיצוב הפנים, צברנו ידע ויכולת להתמודד עם כל אתגר תכנוני בהצלחה.'
}, {
  title: 'מומחיות במגזר הציבורי',
  body: 'מאחורינו שורה ארוכה של פרויקטים למוסדות, קהילות וגופים ציבוריים, מה שמקנה לנו הבנה עמוקה של צרכי הלקוחות הללו ולא פחות מכך, התמצאות ברגולציות ובתקנים הנדרשים.'
}, {
  title: 'יצירתיות וחדשנות',
  body: 'מחוץ לקופסה זה בדיוק הקומפורט זון שלנו. פירוק אתגרים, ומציאת פתרונות יצירתיים לכל מגבלה של שטח, תקציב או לוחות זמנים, מבלי להתפשר על איכות התכנון.'
}, {
  title: 'חשיבה אסטרטגית',
  body: 'תכנון אסטרטגי מותאם בדיוק עבור הלקוח עם שימת לב וחשיבה על כל הפרטים הטכניים שילוו את תהליך הבנייה.'
}, {
  title: 'ליווי אישי, אבל עד הסוף!',
  body: 'אנו מלווים את הלקוח בכל שלבי הפרויקט – מהרעיון הראשוני, דרך קבלת ההיתרים, ועד סיום הבנייה והכניסה למבנה. כל זאת תוך תקשורת שוטפת, הקשבה ושיתוף מלא שלכם בתהליך.'
}];
const TESTIMONIALS = [{
  quote: 'העבודה עם גוטליב אדריכלים הייתה החלטה מעולה. הצוות ליווה אותנו במקצועיות וסבלנות לכל אורך הדרך, התחשב בכל הדרישות שלנו, והתוצאה היא מבנה מרשים שמתפקד באופן מושלם',
  name: 'אלישבע כהן',
  role: 'מנהלת מעון יום ציבורי, ירושלים'
}, {
  quote: 'הצוות השקיע מחשבה בכל פרט, מהכיתות וחצר המשחקים ועד למטבחון ולכניסה. הם הדריכו אותנו בכל הדרישות הביורוקרטיות וקבלת האישורים, כך שהתהליך היה קצר מהצפוי.',
  name: 'מנהלת אגודת מעונות יום',
  role: 'מרכז הארץ'
}, {
  quote: 'בסוף קיבלנו בית כנסת שעולה על כל הציפיות: מרווח, מואר, בעל אקוסטיקה נהדרת ושפע מקום לספרי הקודש, ובעיקר – עם אווירה שמרגישים בה את הלב והנשמה שהושקעו בתכנון.',
  name: 'יו"ר ועד בית הכנסת',
  role: 'ירושלים'
}];
const CLIENTS = ['עיריית מודיעין עילית', 'מועצת גבעת זאב', 'מוסדות חניכי ישיבת ספרדים', 'מוסדות קרלין סטלין', 'שינפלד נכסים והשקעות', 'מועצה דתית קרית יערים', 'עיריית עמנואל', 'מועצה מקומית קרית ארבע', 'עיריית ביתר עילית', 'סמינר בית ברכה', 'עיריית בני ברק', 'מעונות בית ברכה'];
const PROCESS = [{
  title: 'היכרות, פרוגרמה ואפיון צרכים',
  body: 'הדרך מתחילה בפגישה אישית שבה אנו לומדים להכיר אתכם ואת הפרויקט שלכם. בשלב זה נגדיר יחד את הפרוגרמה – מטרות המבנה, צרכי המשתמשים, חלומות, אילוצים וכל מה שחשוב לכם.'
}, {
  title: 'בדיקת היתכנות - ניתוח זכויות בנייה וסביבת המגרש',
  body: 'לפני שנשרטט קווים, נבדוק לעומק את זכויות הבנייה ותנאי התב"ע החלות על הקרקע. ננתח את תנאי השטח, הטופוגרפיה והסביבה הפיזית.'
}, {
  title: 'תכנון מעמיק והתאמה מלאה',
  body: 'כעת אנו צוללים לתכנון האדריכלי המפורט. נשרטט תוכניות מפורטות לפי הפרוגרמה, נשלב בתוכן את כל הפרמטרים הנדרשים – הבסיסיים, הטכניים ודרישות החוק.'
}, {
  title: 'רישוי והגשת בקשה להיתר',
  body: 'אחרי אישור התכנון המועדף עליכם, נטפל בכל הנדרש להגשת הבקשות לרשויות, פועלים מול ועדות התכנון ומוודאים שהפרויקט יקבל את כל האישורים.'
}, {
  title: 'ליווי הבנייה ועד הסוף הטוב',
  body: 'עם קבלת ההיתר, הפרויקט עובר לביצוע – וגם שם אנחנו אתכם. פיקוח עליון סדיר, מענה לכל שאלה בשטח, ועד למסירת המפתח.'
}];
Object.assign(window, {
  Container,
  Section,
  NAV,
  SERVICES,
  PROJECTS,
  WHY,
  TESTIMONIALS,
  CLIENTS,
  PROCESS
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Shell.jsx", error: String((e && e.message) || e) }); }

__ds_ns.ClientLogo = __ds_scope.ClientLogo;

__ds_ns.FeatureItem = __ds_scope.FeatureItem;

__ds_ns.ProcessStep = __ds_scope.ProcessStep;

__ds_ns.ProjectCard = __ds_scope.ProjectCard;

__ds_ns.ServiceCard = __ds_scope.ServiceCard;

__ds_ns.TestimonialCard = __ds_scope.TestimonialCard;

__ds_ns.ArrowLink = __ds_scope.ArrowLink;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.Frame = __ds_scope.Frame;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.Media = __ds_scope.Media;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.ContactLine = __ds_scope.ContactLine;

__ds_ns.TextArea = __ds_scope.TextArea;

__ds_ns.TextField = __ds_scope.TextField;

__ds_ns.SiteFooter = __ds_scope.SiteFooter;

__ds_ns.SiteHeader = __ds_scope.SiteHeader;

})();
