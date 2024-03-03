import { a as i, j as a, F as Oe } from "./jsx-runtime-a888423b.js";
import { n as d } from "./noop-b0c9bf7e.js";
import { r, R as Ke } from "./index-8db94870.js";
import { B as F, M as ze, L as Ye } from "./react-router-dom-dc9a1bda.js";
import { B as I } from "./Box-f877d5fa.js";
import { F as g } from "./Flex-e70cc8d9.js";
import { B as H } from "./Button-1b68a01e.js";
import { I as pe } from "./IconButton-ad080da8.js";
import { D as Qe } from "./DropdownMenu-18ff9ab3.js";
import { u as Xe, L as Je, F as Ze, f as G } from "./Footer-ef9ad56e.js";
import { H as j } from "./Heading-def4fbf7.js";
import { I as ei } from "./Input-771d9dff.js";
import { T as N } from "./Text-f6b55a62.js";
import { u as ii } from "./usePopper-eec57ba6.js";
import { s, c as ti } from "./styled-components.browser.esm-05bde203.js";
import { I as ni } from "./Image-943459a8.js";
import { I as ai, a as oi, b as ri, c as si } from "./WalletFilled-fc1fb27e.js";
import { I as Pe } from "./Warning-aed54631.js";
import { C as li } from "./ChevronDown-63e00ded.js";
import "./js.cookie-19aa770d.js";
import { t as ui } from "./throttle-19a2d18a.js";
import { A as $, S as fe } from "./SubMenuItems-d783bee4.js";
import { C as di } from "./CakePrice-ae6232e9.js";
import { M as ci } from "./MenuItems-36ed45b0.js";
import { M as We } from "./context-f318d187.js";
import { L as mi } from "./Logo-5fd66d13.js";
import { g as pi } from "./YoutubeIcon-f789d74c.js";
import { u as fi } from "./useMatchBreakpoints-59a9bcd0.js";
import { B as gi } from "./BottomNav-00760b2b.js";
import { B as hi } from "./BottomDrawer-7b3fc12e.js";
import { D as c } from "./types-39d68135.js";
import { S as bi, a as xi } from "./AnimatedIconComponent-70d34edd.js";
import { E as vi, a as yi, T as qi, b as Ii, M as Li } from "./Trophy-651b61f4.js";
import { u as ge, M as wi } from "./useModal-bc77086c.js";
import "./_commonjsHelpers-042e6b4d.js";
import "./inheritsLoose-c82a83d4.js";
import "./index-1fc0ca9a.js";
import "./extends-98964cd2.js";
import "./tiny-invariant-dd7d57d2.js";
import "./index.esm-8c5d6e7e.js";
import "./index.esm-073a6cf8.js";
import "./motion-minimal-b8fc2ac8.js";
import "./clsx.m-1229b3e0.js";
import "./externalLinkProps-0f3801f5.js";
import "./vars.css-8b7ea31e.js";
/* empty css                            */ import "./debounce-2c70bf35.js";
import "./isObject-5487ad91.js";
import "./toNumber-1b8e5138.js";
import "./useOnClickOutside-00feb151.js";
import "./Logout-23af5ec0.js";
import "./Svg-f122668c.js";
import "./getThemeValue-6fc24f62.js";
import "./get-8ca00567.js";
import "./colors-70c6af9e.js";
import "./Dropdown-de8b15b7.js";
import "./Link-a711c4b9.js";
import "./ThemeSwitcher-e82f5e6e.js";
import "./Toggle-069a6e25.js";
import "./Sun-00919f0c.js";
import "./index-8ce4a492.js";
import "./index-b1f965a7.js";
import "./MenuItem-33135317.js";
import "./NotificationDot-0a79bff8.js";
import "./ChevronLeft-88e9651d.js";
import "./ChevronRight-b60b1663.js";
import "./OpenNew-e0313d1b.js";
import "./LogoRound-8b1e5485.js";
import "./Skeleton-958caab1.js";
import "./animationToolkit-f78aec88.js";
import "./index-ba04c57b.js";
import "./features-animation-7b2a34c9.js";
import "./isTouchDevice-38021306.js";
import "./Provider-7e243320.js";
import "./Overlay-c4441d34.js";
import "./BottomNavItem-e80503d3.js";
import "./getPortalRoot-b8664777.js";
import "./styles-278c0224.js";
import "./Close-621ed1bc.js";
import "./ModalContext-901e5072.js";
import "./iframe-13deebe4.js";
import "../sb-preview/runtime.js";
import "./lib-98203da3.js";
import "./ArrowBack-df32b0be.js";
const f = { DEFAULT: "default", WARNING: "warning", DANGER: "danger", PENDING: "pending" },
  K = s.div`
  align-items: center;
  background-color: ${({ theme: e }) => e.colors.background};
  border-color: ${({ theme: e, borderColor: t }) => e.colors[t]};
  border-radius: 50%;
  border-style: solid;
  border-width: 2px;
  display: flex;
  height: 32px;
  justify-content: center;
  left: 0;
  position: absolute;
  top: 0;
  width: 32px;
  z-index: 102;
`,
  _i = s(ni)`
  left: 0;
  position: absolute;
  top: 0;
  z-index: 102;

  & > img {
    border-radius: 50%;
  }
`,
  ie = () => i(K, { borderColor: "primary", children: i(ai, { color: "primary", width: "24px" }) }),
  te = () => i(K, { borderColor: "secondary", children: i(oi, { color: "secondary", width: "24px", spin: !0 }) }),
  ne = () => i(K, { borderColor: "warning", children: i(Pe, { color: "warning", width: "24px" }) }),
  ae = () => i(K, { borderColor: "failure", children: i(Pe, { color: "failure", width: "24px" }) }),
  oe = ({ avatarSrc: e, variant: t, className: n }) =>
    t === f.DANGER
      ? i(ae, {})
      : t === f.WARNING
        ? i(ne, {})
        : t === f.PENDING
          ? i(te, {})
          : e
            ? i(_i, { src: e, height: 32, width: 32, className: n })
            : i(ie, {}),
  Ei = oe;
try {
  (ie.displayName = "NoProfileMenuIcon"),
    (ie.__docgenInfo = { description: "", displayName: "NoProfileMenuIcon", props: {} });
} catch {}
try {
  (te.displayName = "PendingMenuIcon"),
    (te.__docgenInfo = { description: "", displayName: "PendingMenuIcon", props: {} });
} catch {}
try {
  (ne.displayName = "WarningMenuIcon"),
    (ne.__docgenInfo = { description: "", displayName: "WarningMenuIcon", props: {} });
} catch {}
try {
  (ae.displayName = "DangerMenuIcon"),
    (ae.__docgenInfo = { description: "", displayName: "DangerMenuIcon", props: {} });
} catch {}
try {
  (oe.displayName = "MenuIcon"),
    (oe.__docgenInfo = {
      description: "",
      displayName: "MenuIcon",
      props: {
        avatarSrc: { defaultValue: null, description: "", name: "avatarSrc", required: !1, type: { name: "string" } },
        variant: {
          defaultValue: null,
          description: "",
          name: "variant",
          required: !0,
          type: {
            name: "enum",
            value: [{ value: '"default"' }, { value: '"danger"' }, { value: '"warning"' }, { value: '"pending"' }],
          },
        },
        className: { defaultValue: null, description: "", name: "className", required: !1, type: { name: "string" } },
      },
    });
} catch {}
const he = s.hr`
  border-color: ${({ theme: e }) => e.colors.cardBorder};
  border-style: solid;
  border-width: 1px 0 0;
  margin: 4px 0;
`,
  R = s.button`
  align-items: center;
  border: 0;
  background: transparent;
  color: ${({ theme: e, disabled: t }) => e.colors[t ? "textDisabled" : "textSubtle"]};
  cursor: pointer;
  display: flex;
  font-size: 16px;
  height: 48px;
  justify-content: space-between;
  outline: 0;
  padding-left: 16px;
  padding-right: 16px;
  width: 100%;

  &:is(button) {
    cursor: ${({ disabled: e }) => (e ? "not-allowed" : "pointer")};
  }

  &:hover:not(:disabled) {
    background-color: ${({ theme: e }) => e.colors.tertiary};
  }

  &:active:not(:disabled) {
    opacity: 0.85;
    transform: translateY(1px);
  }
`;
try {
  (he.displayName = "UserMenuDivider"),
    (he.__docgenInfo = {
      description: "",
      displayName: "UserMenuDivider",
      props: {
        theme: { defaultValue: null, description: "", name: "theme", required: !1, type: { name: "DefaultTheme" } },
        as: { defaultValue: null, description: "", name: "as", required: !1, type: { name: "void | WebTarget" } },
        forwardedAs: {
          defaultValue: null,
          description: "",
          name: "forwardedAs",
          required: !1,
          type: { name: "void | WebTarget" },
        },
      },
    });
} catch {}
try {
  (R.displayName = "UserMenuItem"),
    (R.__docgenInfo = {
      description: "",
      displayName: "UserMenuItem",
      props: {
        theme: { defaultValue: null, description: "", name: "theme", required: !1, type: { name: "DefaultTheme" } },
        as: { defaultValue: null, description: "", name: "as", required: !1, type: { name: "void | WebTarget" } },
        forwardedAs: {
          defaultValue: null,
          description: "",
          name: "forwardedAs",
          required: !1,
          type: { name: "void | WebTarget" },
        },
      },
    });
} catch {}
const re = s(g)`
  align-items: center;
  background-color: ${({ theme: e }) => e.colors.tertiary};
  border-radius: 16px;
  box-shadow: inset 0px -2px 0px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  display: inline-flex;
  height: 32px;
  padding-left: 32px;
  padding-right: 8px;
  position: relative;

  &:hover {
    opacity: 0.65;
  }
`,
  se = s.div`
  color: ${({ theme: e }) => e.colors.text};
  display: none;
  font-weight: 600;

  ${({ theme: e }) => e.mediaQueries.sm} {
    display: block;
    margin-left: 8px;
    margin-right: 4px;
  }
`,
  Ti = s.div`
  background-color: ${({ theme: e }) => e.card.background};
  border: 1px solid ${({ theme: e }) => e.colors.cardBorder};
  border-radius: 16px;
  padding-bottom: 4px;
  padding-top: 4px;
  pointer-events: auto;
  width: 280px;
  visibility: visible;
  z-index: 1001;

  ${({ $isOpen: e }) =>
    !e &&
    `
    pointer-events: none;
    visibility: hidden;
  `}

  ${R}:first-child {
    border-radius: 8px 8px 0 0;
  }

  ${R}:last-child {
    border-radius: 0 0 8px 8px;
  }
`,
  le = ({
    account: e,
    text: t,
    avatarSrc: n,
    avatarClassName: m,
    variant: E = f.DEFAULT,
    children: l,
    disabled: v,
    placement: S = "bottom-end",
    recalculatePopover: L,
    ellipsis: u = !0,
    ...Y
  }) => {
    const [y, p] = r.useState(!1),
      [o, Q] = r.useState(null),
      [q, X] = r.useState(null),
      {
        styles: V,
        attributes: J,
        update: w,
      } = ii(o, q, { strategy: "fixed", placement: S, modifiers: [{ name: "offset", options: { offset: [0, 0] } }] }),
      Z = e ? `${e.substring(0, 2)}...${e.substring(e.length - 4)}` : null;
    return (
      r.useEffect(() => {
        L && y && w && w();
      }, [y, w, L]),
      r.useEffect(() => {
        const b = () => {
            p(!0);
          },
          T = (M) => {
            const h = M.target;
            h && !(q != null && q.contains(h)) && (p(!1), M.stopPropagation());
          };
        return (
          o == null || o.addEventListener("mouseenter", b),
          o == null || o.addEventListener("mouseleave", T),
          () => {
            o == null || o.removeEventListener("mouseenter", b), o == null || o.removeEventListener("mouseleave", T);
          }
        );
      }, [o, q, p]),
      a(g, {
        alignItems: "center",
        height: "100%",
        ref: Q,
        ...Y,
        children: [
          a(re, {
            onTouchStart: () => {
              p((b) => !b);
            },
            children: [
              i(Ei, { className: m, avatarSrc: n, variant: E }),
              i(se, { title: (typeof t == "string" && t) || e, children: t || (u ? Z : e) }),
              !v && i(li, { color: "text", width: "24px" }),
            ],
          }),
          !v &&
            i(Ti, {
              style: V.popper,
              ref: X,
              ...J.popper,
              $isOpen: y,
              children: i(I, { onClick: () => p(!1), children: l == null ? void 0 : l({ isOpen: y }) }),
            }),
        ],
      })
    );
  },
  Mi = le;
try {
  (re.displayName = "StyledUserMenu"),
    (re.__docgenInfo = {
      description: "",
      displayName: "StyledUserMenu",
      props: {
        theme: { defaultValue: null, description: "", name: "theme", required: !1, type: { name: "DefaultTheme" } },
        as: { defaultValue: null, description: "", name: "as", required: !1, type: { name: "void | WebTarget" } },
        forwardedAs: {
          defaultValue: null,
          description: "",
          name: "forwardedAs",
          required: !1,
          type: { name: "void | WebTarget" },
        },
      },
    });
} catch {}
try {
  (se.displayName = "LabelText"),
    (se.__docgenInfo = {
      description: "",
      displayName: "LabelText",
      props: {
        theme: { defaultValue: null, description: "", name: "theme", required: !1, type: { name: "DefaultTheme" } },
        as: { defaultValue: null, description: "", name: "as", required: !1, type: { name: "void | WebTarget" } },
        forwardedAs: {
          defaultValue: null,
          description: "",
          name: "forwardedAs",
          required: !1,
          type: { name: "void | WebTarget" },
        },
      },
    });
} catch {}
try {
  (le.displayName = "UserMenu"),
    (le.__docgenInfo = {
      description: "",
      displayName: "UserMenu",
      props: {
        account: { defaultValue: null, description: "", name: "account", required: !1, type: { name: "string" } },
        text: { defaultValue: null, description: "", name: "text", required: !1, type: { name: "ReactNode" } },
        avatarSrc: { defaultValue: null, description: "", name: "avatarSrc", required: !1, type: { name: "string" } },
        avatarClassName: {
          defaultValue: null,
          description: "",
          name: "avatarClassName",
          required: !1,
          type: { name: "string" },
        },
        variant: {
          defaultValue: { value: "default" },
          description: "",
          name: "variant",
          required: !1,
          type: {
            name: "enum",
            value: [{ value: '"default"' }, { value: '"danger"' }, { value: '"warning"' }, { value: '"pending"' }],
          },
        },
        disabled: { defaultValue: null, description: "", name: "disabled", required: !1, type: { name: "boolean" } },
        placement: {
          defaultValue: { value: "bottom-end" },
          description: "",
          name: "placement",
          required: !1,
          type: {
            name: "enum",
            value: [
              { value: '"bottom"' },
              { value: '"left"' },
              { value: '"right"' },
              { value: '"top"' },
              { value: '"auto"' },
              { value: '"auto-start"' },
              { value: '"auto-end"' },
              { value: '"top-start"' },
              { value: '"top-end"' },
              { value: '"bottom-start"' },
              { value: '"bottom-end"' },
              { value: '"right-start"' },
              { value: '"right-end"' },
              { value: '"left-start"' },
              { value: '"left-end"' },
            ],
          },
        },
        recalculatePopover: {
          defaultValue: null,
          description: "",
          name: "recalculatePopover",
          required: !1,
          type: { name: "boolean" },
        },
        ellipsis: {
          defaultValue: { value: "true" },
          description: "",
          name: "ellipsis",
          required: !1,
          type: { name: "boolean" },
        },
      },
    });
} catch {}
const ki = ti`
  0%,  100% { transform: scaleY(1); }
  50% { transform:  scaleY(0.1); }
`,
  be = s("a")`
  display: flex;
  .mobile-icon {
    width: 32px;
    ${({ theme: e }) => e.mediaQueries.lg} {
      display: none;
    }
  }
  .desktop-icon {
    width: 160px;
    display: none;
    ${({ theme: e }) => e.mediaQueries.lg} {
      display: block;
    }
  }
  .eye {
    animation-delay: 20ms;
  }
  &:hover {
    .eye {
      transform-origin: center 60%;
      animation-name: ${ki};
      animation-duration: 350ms;
      animation-iteration-count: 1;
    }
  }
`,
  ue = ({ href: e }) => {
    const { linkComponent: t } = r.useContext(We),
      n = e.startsWith("http"),
      m = a(Oe, { children: [i(mi, { className: "mobile-icon" }), i(pi, { className: "desktop-icon" })] });
    return i(g, {
      alignItems: "center",
      children: n
        ? i(be, { as: "a", href: e, "aria-label": "Pancake home page", children: m })
        : i(be, { href: e, as: t, "aria-label": "Pancake home page", children: m }),
    });
  },
  Di = Ke.memo(ue);
try {
  (ue.displayName = "Logo"),
    (ue.__docgenInfo = {
      description: "",
      displayName: "Logo",
      props: { href: { defaultValue: null, description: "", name: "href", required: !0, type: { name: "string" } } },
    });
} catch {}
const de = 56,
  Ni = 44,
  Ci = 70,
  Ui = 84,
  Bi = s.div`
  position: relative;
  width: 100%;
  display: grid;
  grid-template-rows: auto 1fr;
`,
  Si = s.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: ${de}px;
  background-color: ${({ theme: e }) => e.nav.background};
  border-bottom: 1px solid ${({ theme: e }) => e.colors.cardBorder};
  transform: translate3d(0, 0, 0);

  padding-left: 16px;
  padding-right: 16px;
`,
  Vi = s("div").withConfig({ shouldForwardProp: (e) => !["showMenu"].includes(e) })`
  position: fixed;
  top: ${({ showMenu: e, height: t }) => (e ? 0 : `-${t}px`)};
  left: 0;
  transition: top 0.2s;
  height: ${({ height: e }) => `${e}px`};
  width: 100%;
  z-index: 20;
`,
  $i = s.div`
  height: ${({ height: e }) => `${e}px`};
  min-height: ${({ height: e }) => `${e}px`};
  max-height: ${({ height: e }) => `${e}px`};
  width: 100%;
`,
  Oi = s(I)`
  position: relative;
  display: flex;
  max-width: 100vw;
`,
  Pi = s.div`
  flex-grow: 1;
  transition: margin-top 0.2s, margin-left 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  transform: translate3d(0, 0, 0);
  max-width: 100%;
`,
  ce = ({
    linkComponent: e = "a",
    banner: t,
    rightSide: n,
    isDark: m,
    toggleTheme: E,
    currentLang: l,
    setLang: v,
    cakePriceUsd: S,
    links: L,
    subLinks: u,
    footerLinks: Y,
    activeItem: y,
    activeSubItem: p,
    langs: o,
    buyCakeLabel: Q,
    buyCakeLink: q,
    children: X,
    chainId: V,
  }) => {
    const { isMobile: J } = fi(),
      w = Xe(),
      [Z, b] = r.useState(!0),
      T = r.useRef(typeof window > "u" ? 0 : window.pageYOffset),
      M = J ? Ui : Ci,
      h = w && t ? de + M : de;
    r.useEffect(() => {
      const me = ui(() => {
        const D = window.pageYOffset,
          je = window.document.body.clientHeight === D + window.innerHeight;
        D === 0 ? b(!0) : je || (D < T.current || D <= h ? b(!0) : b(!1)), (T.current = D);
      }, 200);
      return (
        window.addEventListener("scroll", me),
        () => {
          window.removeEventListener("scroll", me);
        }
      );
    }, [h]);
    const ee = L.find((_) => _.label === "Home"),
      He = r.useMemo(() => (u == null ? void 0 : u.filter((_) => !_.isMobileOnly)), [u]),
      k = r.useMemo(() => (u == null ? void 0 : u.filter((_) => _.isMobileOnly)), [u]),
      Ge = r.useMemo(() => ({ linkComponent: e }), [e]);
    return a(We.Provider, {
      value: Ge,
      children: [
        i($, {
          asChild: !0,
          minHeight: { xs: "auto", md: "100vh" },
          children: a(Bi, {
            children: [
              a(Vi, {
                showMenu: Z,
                height: h,
                children: [
                  t && w && i($i, { height: M, children: t }),
                  a(Si, {
                    children: [
                      a(g, {
                        children: [
                          i(Di, { href: (ee == null ? void 0 : ee.href) ?? "/" }),
                          i($, {
                            display: { xs: "none", md: "block" },
                            children: i(ci, { items: L, activeItem: y, activeSubItem: p, ml: "24px" }),
                          }),
                        ],
                      }),
                      a(g, {
                        alignItems: "center",
                        height: "100%",
                        children: [
                          i($, {
                            mr: "12px",
                            display: { xs: "none", lg: "block" },
                            children: i(di, { chainId: V, showSkeleton: !1, cakePriceUsd: S }),
                          }),
                          i(I, {
                            mt: "4px",
                            children: i(Je, {
                              currentLang: l,
                              langs: o,
                              setLang: v,
                              buttonScale: "xs",
                              color: "textSubtle",
                              hideLanguage: !0,
                            }),
                          }),
                          n,
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              u
                ? a(g, {
                    justifyContent: "space-around",
                    overflow: "hidden",
                    children: [
                      i(fe, { items: He, mt: `${h + 1}px`, activeItem: p }),
                      k &&
                        (k == null ? void 0 : k.length) > 0 &&
                        i(fe, { items: k, mt: `${h + 1}px`, activeItem: p, isMobileOnly: !0 }),
                    ],
                  })
                : i("div", {}),
              i(Oi, { mt: u ? "0" : `${h + 1}px`, children: i(Pi, { children: X }) }),
            ],
          }),
        }),
        i(Ze, {
          chainId: V,
          items: Y,
          isDark: m,
          toggleTheme: E,
          langs: o,
          setLang: v,
          currentLang: l,
          cakePriceUsd: S,
          buyCakeLabel: Q,
          buyCakeLink: q,
          mb: [`${Ni}px`, null, "0px"],
        }),
        i($, { display: { xs: "block", md: "none" }, children: i(gi, { items: L, activeItem: y, activeSubItem: p }) }),
      ],
    });
  },
  B = ce;
try {
  (ce.displayName = "Menu"),
    (ce.__docgenInfo = {
      description: "",
      displayName: "Menu",
      props: {
        linkComponent: {
          defaultValue: { value: "a" },
          description: "",
          name: "linkComponent",
          required: !1,
          type: { name: "ElementType" },
        },
        rightSide: {
          defaultValue: null,
          description: "",
          name: "rightSide",
          required: !1,
          type: { name: "ReactNode" },
        },
        banner: {
          defaultValue: null,
          description: "",
          name: "banner",
          required: !1,
          type: { name: "ReactElement<any, string | JSXElementConstructor<any>>" },
        },
        links: { defaultValue: null, description: "", name: "links", required: !0, type: { name: "MenuItemsType[]" } },
        subLinks: {
          defaultValue: null,
          description: "",
          name: "subLinks",
          required: !1,
          type: { name: "SubMenuItemsType[]" },
        },
        footerLinks: {
          defaultValue: null,
          description: "",
          name: "footerLinks",
          required: !0,
          type: { name: "FooterLinkType[]" },
        },
        activeItem: { defaultValue: null, description: "", name: "activeItem", required: !1, type: { name: "string" } },
        activeSubItem: {
          defaultValue: null,
          description: "",
          name: "activeSubItem",
          required: !1,
          type: { name: "string" },
        },
        isDark: { defaultValue: null, description: "", name: "isDark", required: !0, type: { name: "boolean" } },
        toggleTheme: {
          defaultValue: null,
          description: "",
          name: "toggleTheme",
          required: !0,
          type: { name: "(isDark: boolean) => void" },
        },
        cakePriceUsd: {
          defaultValue: null,
          description: "",
          name: "cakePriceUsd",
          required: !1,
          type: { name: "number" },
        },
        currentLang: {
          defaultValue: null,
          description: "",
          name: "currentLang",
          required: !0,
          type: { name: "string" },
        },
        buyCakeLabel: {
          defaultValue: null,
          description: "",
          name: "buyCakeLabel",
          required: !0,
          type: { name: "string" },
        },
        buyCakeLink: {
          defaultValue: null,
          description: "",
          name: "buyCakeLink",
          required: !0,
          type: { name: "string" },
        },
        langs: { defaultValue: null, description: "", name: "langs", required: !0, type: { name: "Language[]" } },
        chainId: { defaultValue: null, description: "", name: "chainId", required: !0, type: { name: "number" } },
        setLang: {
          defaultValue: null,
          description: "",
          name: "setLang",
          required: !0,
          type: { name: "(lang: Language) => void" },
        },
      },
    });
} catch {}
const xe = {
    LIVE: { text: "LIVE", color: "failure" },
    SOON: { text: "SOON", color: "warning" },
    NEW: { text: "NEW", color: "success" },
  },
  x = [
    {
      label: "Trade",
      href: "/swap",
      icon: bi,
      fillIcon: xi,
      items: [
        { label: "Exchange", href: "/swap" },
        { label: "Liquidity", href: "/liquidity" },
        { label: "Charts", href: "/charts", iconName: "Chart", isMobileOnly: !0 },
      ],
    },
    {
      label: "Earn",
      href: "/earn",
      icon: vi,
      fillIcon: yi,
      items: [
        { label: "Earn", href: "/earn" },
        { label: "Yield Farms", href: "/farms" },
        { label: "Syrup pools", href: "/pools" },
      ],
    },
    {
      label: "Win",
      href: "/",
      icon: qi,
      fillIcon: Ii,
      items: [
        { label: "Win", href: "/" },
        { label: "Predictions", href: "/", status: xe.LIVE },
        { label: "Lottery", href: "/" },
      ],
    },
    {
      label: "",
      href: "/",
      icon: Li,
      items: [
        { label: "Info & Analytics", href: "/" },
        { label: "IFO Token Sales", href: "/", status: xe.SOON },
        { type: c.DIVIDER },
        { label: "NFT Collectibles", href: "/" },
        { label: "Team Leaderboard", href: "/" },
        { type: c.DIVIDER },
        { label: "Blog", href: "/" },
        { label: "Docs & Guides", href: "/", type: c.EXTERNAL_LINK },
      ],
    },
  ],
  Wi = [
    { label: "Wallet", onClick: d, type: c.BUTTON },
    { label: "Transactions", type: c.BUTTON },
    { type: c.DIVIDER },
    { type: c.BUTTON, disabled: !0, label: "Dashboard" },
    { type: c.BUTTON, disabled: !0, label: "Portfolio" },
    { label: "Profile", href: "/profile" },
    { type: c.EXTERNAL_LINK, href: "https://andex.vercel.app", label: "Link" },
    { type: c.DIVIDER },
    { type: c.BUTTON, onClick: d, label: "Disconnect" },
  ],
  yn = {
    title: "Widgets/Menu",
    component: B,
    argTypes: { activeItem: { options: ["Trade", "Earn", "Win"], control: { type: "select" } } },
  },
  z = [...Array(20)].map((e, t) => ({ code: `en${t}`, language: `English${t}`, locale: `Locale${t}` })),
  Ae = ({ variant: e = f.DEFAULT, text: t, account: n = "0x8b017905DC96B38f817473dc885F84D4C76bC113" }) => {
    const m = n ? `${n.substring(0, 2)}...${n.substring(n.length - 4)}` : void 0;
    return i(Qe, { items: Wi, py: "12px", children: i(Mi, { account: t || m, avatarSrc: "", variant: e }) });
  },
  ve = ({ title: e, onDismiss: t, ...n }) =>
    a(wi, {
      title: e,
      onDismiss: t,
      ...n,
      children: [i(j, { children: e }), i(H, { children: "This button Does nothing" })],
    }),
  Ai = () => {
    const [e] = ge(i(ve, { title: "Display Settings Modal" })),
      [t] = ge(i(ve, { title: "Global Settings Modal" }));
    return a(g, {
      children: [
        i(pe, {
          onClick: e,
          variant: "text",
          scale: "sm",
          mr: "4px",
          children: i(ri, { height: 22, width: 22, color: "textSubtle" }),
        }),
        i(pe, {
          onClick: t,
          variant: "text",
          scale: "sm",
          mr: "8px",
          children: i(si, { height: 22, width: 22, color: "textSubtle" }),
        }),
      ],
    });
  },
  Re = {
    linkComponent: ({ href: e, ...t }) => i(Ye, { to: e, ...t }),
    account: "0xBdDa50183d817c3289f895a4472EB475967Dc980",
    login: d,
    logout: d,
    isDark: !1,
    toggleTheme: d,
    langs: z,
    setLang: d,
    currentLang: "EN",
    cakePriceUsd: 0.023158668932877668,
    links: x,
    subLinks: x[0].items,
    footerLinks: G,
    profile: null,
    rightSide: a(Oe, { children: [i(Ai, {}), i(Ae, { account: "0xBdDa50183d817c3289f895a4472EB475967Dc980" })] }),
    activeItem: "/swap",
    activeSubItem: "https://exchange.pancakeswap.finance",
    buyCakeLabel: "Buy ANDX",
  },
  Fe = (e) => {
    const [t, n] = r.useState(!1);
    return i(F, {
      children: i(B, {
        ...e,
        children: a("div", {
          children: [
            i(j, { as: "h1", mb: "8px", children: "Page body" }),
            i(H, { scale: "sm", onClick: () => n(!0), children: "Show mobile drawer" }),
            i(hi, { content: i(I, { p: "16px", children: "Example" }), isOpen: t, setIsOpen: n }),
            i(N, {
              as: "p",
              children:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut",
            }),
            i(N, {
              as: "p",
              children:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut",
            }),
            i(N, {
              as: "p",
              children:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut",
            }),
            i(N, {
              as: "p",
              children:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut",
            }),
          ],
        }),
      }),
    });
  },
  C = Fe.bind({});
C.args = Re;
const U = Fe.bind({});
U.args = {
  ...Re,
  banner: a(g, {
    height: "100%",
    p: "16px",
    alignItems: "center",
    justifyContent: "center",
    background: "#7645D9",
    children: [
      i(N, { color: "invertedContrast", mr: "8px", children: "Banner example" }),
      i(H, { scale: "sm", children: "I am button" }),
    ],
  }),
};
const O = () =>
    i(F, {
      children: i(B, {
        isDark: !1,
        toggleTheme: d,
        langs: z,
        setLang: d,
        currentLang: "EN",
        links: x,
        subLinks: x[0].items,
        footerLinks: G,
        activeItem: "/swap",
        activeSubItem: "https://exchange.pancakeswap.finance",
        buyCakeLabel: "Buy ANDX",
        children: a("div", {
          children: [
            i("h1", { children: "Page body" }),
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          ],
        }),
      }),
    }),
  P = () =>
    i(F, {
      children: i(B, {
        isDark: !1,
        toggleTheme: d,
        langs: z,
        setLang: d,
        currentLang: "EN",
        links: x,
        footerLinks: G,
        subLinks: x[0].items,
        activeItem: "/swap",
        activeSubItem: "https://exchange.pancakeswap.finance",
        buyCakeLabel: "Buy ANDX",
        children: a("div", {
          children: [i("h1", { children: "No connect button on top" }), "This variant is needed for info site"],
        }),
      }),
    }),
  W = () =>
    i(ze, {
      initialEntries: ["/teams"],
      children: i(B, {
        isDark: !1,
        toggleTheme: d,
        langs: z,
        setLang: d,
        currentLang: "EN",
        cakePriceUsd: 0.23158668932877668,
        links: x,
        subLinks: x[0].items,
        footerLinks: G,
        activeItem: "/swap",
        activeSubItem: "https://exchange.pancakeswap.finance",
        buyCakeLabel: "Buy ANDX",
        children: i("div", { children: i(j, { as: "h1", mb: "8px", children: "Submenu leaderboard selected" }) }),
      }),
    }),
  A = () => {
    const [e, t] = r.useState(f.DEFAULT),
      [n, m] = r.useState(void 0),
      E = (l) => {
        const { value: v } = l.target;
        m(v);
      };
    return i(F, {
      children: i(I, {
        p: "40px",
        children: a(g, {
          justifyContent: "space-between",
          children: [
            a(I, {
              children: [
                i(j, { size: "sm", mb: "16px", children: "Variants" }),
                i(g, {
                  mb: "16px",
                  children: Object.keys(f).map((l) =>
                    i(H, {
                      scale: "sm",
                      variant: e === f[l] ? "primary" : "text",
                      ml: "8px",
                      onClick: () => t(f[l]),
                      children: f[l].toUpperCase(),
                    }),
                  ),
                }),
                i(I, { py: "8px", children: i(ei, { value: n, onChange: E, placeholder: "Custom Text..." }) }),
              ],
            }),
            i(Ae, { variant: e, text: n }),
          ],
        }),
      }),
    });
  };
var ye, qe, Ie;
C.parameters = {
  ...C.parameters,
  docs: {
    ...((ye = C.parameters) == null ? void 0 : ye.docs),
    source: {
      originalSource: `args => {
  const [isOpen, setIsOpen] = useState(false);
  return <BrowserRouter>
      <Menu {...args}>
        <div>
          <Heading as="h1" mb="8px">
            Page body
          </Heading>
          <Button scale="sm" onClick={() => setIsOpen(true)}>
            Show mobile drawer
          </Button>
          <BottomDrawer content={<Box p="16px">Example</Box>} isOpen={isOpen} setIsOpen={setIsOpen} />
          <Text as="p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
            qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut
          </Text>
          <Text as="p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
            qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut
          </Text>
          <Text as="p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
            qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut
          </Text>
          <Text as="p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
            qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut
          </Text>
        </div>
      </Menu>
    </BrowserRouter>;
}`,
      ...((Ie = (qe = C.parameters) == null ? void 0 : qe.docs) == null ? void 0 : Ie.source),
    },
  },
};
var Le, we, _e;
U.parameters = {
  ...U.parameters,
  docs: {
    ...((Le = U.parameters) == null ? void 0 : Le.docs),
    source: {
      originalSource: `args => {
  const [isOpen, setIsOpen] = useState(false);
  return <BrowserRouter>
      <Menu {...args}>
        <div>
          <Heading as="h1" mb="8px">
            Page body
          </Heading>
          <Button scale="sm" onClick={() => setIsOpen(true)}>
            Show mobile drawer
          </Button>
          <BottomDrawer content={<Box p="16px">Example</Box>} isOpen={isOpen} setIsOpen={setIsOpen} />
          <Text as="p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
            qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut
          </Text>
          <Text as="p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
            qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut
          </Text>
          <Text as="p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
            qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut
          </Text>
          <Text as="p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
            qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut
          </Text>
        </div>
      </Menu>
    </BrowserRouter>;
}`,
      ...((_e = (we = U.parameters) == null ? void 0 : we.docs) == null ? void 0 : _e.source),
    },
  },
};
var Ee, Te, Me;
O.parameters = {
  ...O.parameters,
  docs: {
    ...((Ee = O.parameters) == null ? void 0 : Ee.docs),
    source: {
      originalSource: `() => {
  return <BrowserRouter>
      <Menu isDark={false} toggleTheme={noop} langs={langs} setLang={noop} currentLang="EN" links={links} subLinks={(links[0].items as SubMenuItemsType[])} footerLinks={footerLinks} activeItem="/swap" activeSubItem="https://exchange.pancakeswap.finance" buyCakeLabel="Buy ANDX">
        <div>
          <h1>Page body</h1>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
          eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
          mollit anim id est laborum.
        </div>
      </Menu>
    </BrowserRouter>;
}`,
      ...((Me = (Te = O.parameters) == null ? void 0 : Te.docs) == null ? void 0 : Me.source),
    },
  },
};
var ke, De, Ne;
P.parameters = {
  ...P.parameters,
  docs: {
    ...((ke = P.parameters) == null ? void 0 : ke.docs),
    source: {
      originalSource: `() => {
  return <BrowserRouter>
      <Menu isDark={false} toggleTheme={noop} langs={langs} setLang={noop} currentLang="EN" links={links} footerLinks={footerLinks} subLinks={(links[0].items as SubMenuItemsType[])} activeItem="/swap" activeSubItem="https://exchange.pancakeswap.finance" buyCakeLabel="Buy ANDX">
        <div>
          <h1>No connect button on top</h1>
          This variant is needed for info site
        </div>
      </Menu>
    </BrowserRouter>;
}`,
      ...((Ne = (De = P.parameters) == null ? void 0 : De.docs) == null ? void 0 : Ne.source),
    },
  },
};
var Ce, Ue, Be;
W.parameters = {
  ...W.parameters,
  docs: {
    ...((Ce = W.parameters) == null ? void 0 : Ce.docs),
    source: {
      originalSource: `() => {
  return <MemoryRouter initialEntries={["/teams"]}>
      <Menu isDark={false} toggleTheme={noop} langs={langs} setLang={noop} currentLang="EN" cakePriceUsd={0.23158668932877668} links={links} subLinks={(links[0].items as SubMenuItemsType[])} footerLinks={footerLinks} activeItem="/swap" activeSubItem="https://exchange.pancakeswap.finance" buyCakeLabel="Buy ANDX">
        <div>
          <Heading as="h1" mb="8px">
            Submenu leaderboard selected
          </Heading>
        </div>
      </Menu>
    </MemoryRouter>;
}`,
      ...((Be = (Ue = W.parameters) == null ? void 0 : Ue.docs) == null ? void 0 : Be.source),
    },
  },
};
var Se, Ve, $e;
A.parameters = {
  ...A.parameters,
  docs: {
    ...((Se = A.parameters) == null ? void 0 : Se.docs),
    source: {
      originalSource: `() => {
  const [variant, setVariant] = useState<Variant>(variants.DEFAULT);
  const [text, setText] = useState(undefined);
  const handleChange = evt => {
    const {
      value
    } = evt.target;
    setText(value);
  };
  return <BrowserRouter>
      <Box p="40px">
        <Flex justifyContent="space-between">
          <Box>
            <Heading size="sm" mb="16px">
              Variants
            </Heading>
            <Flex mb="16px">
              {Object.keys(variants).map(variantKey => <Button scale="sm" variant={variant === variants[variantKey] ? "primary" : "text"} ml="8px" onClick={() => setVariant(variants[variantKey])}>
                  {variants[variantKey].toUpperCase()}
                </Button>)}
            </Flex>
            <Box py="8px">
              <Input value={text} onChange={handleChange} placeholder="Custom Text..." />
            </Box>
          </Box>
          <UserMenuComponent variant={variant} text={text} />
        </Flex>
      </Box>
    </BrowserRouter>;
}`,
      ...(($e = (Ve = A.parameters) == null ? void 0 : Ve.docs) == null ? void 0 : $e.source),
    },
  },
};
const qn = [
  "Connected",
  "ConnectedWithBanner",
  "NotConnected",
  "WithoutConnectButton",
  "WithSubmenuSelected",
  "UserMenuWithVariants",
];
export {
  C as Connected,
  U as ConnectedWithBanner,
  O as NotConnected,
  A as UserMenuWithVariants,
  W as WithSubmenuSelected,
  P as WithoutConnectButton,
  qn as __namedExportsOrder,
  yn as default,
};
