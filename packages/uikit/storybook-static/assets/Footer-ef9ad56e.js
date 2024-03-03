import { a, j as p } from "./jsx-runtime-a888423b.js";
import { r as q, R as D } from "./index-8db94870.js";
import "./js.cookie-19aa770d.js";
import { s as n } from "./styled-components.browser.esm-05bde203.js";
import { d as c } from "./colors-70c6af9e.js";
import { F as o } from "./Flex-e70cc8d9.js";
import { D as N } from "./Dropdown-de8b15b7.js";
import { L as g } from "./Link-a711c4b9.js";
import {
  I as G,
  a as H,
  b as z,
  c as R,
  d as U,
  e as Q,
  f as J,
  L as K,
  g as A,
  A as O,
} from "./YoutubeIcon-f789d74c.js";
import { u as $ } from "./useMatchBreakpoints-59a9bcd0.js";
import { B as b } from "./Box-f877d5fa.js";
import { v as X } from "./vars.css-8b7ea31e.js";
import { C as Y } from "./CakePrice-ae6232e9.js";
import { T as Z } from "./Text-f6b55a62.js";
import { B as L } from "./Button-1b68a01e.js";
import { L as ee } from "./Logo-5fd66d13.js";
import { T as ae } from "./ThemeSwitcher-e82f5e6e.js";
function te() {
  const [e, t] = q.useState(!1);
  return (
    q.useEffect(() => {
      t(!0);
    }, []),
    e
  );
}
const Ie = [
    {
      label: "About",
      items: [
        { label: "Contact", href: "https://docs.pancakeswap.finance/contact-us" },
        { label: "Blog", href: "https://blog.pancakeswap.finance/" },
        { label: "Community", href: "https://docs.pancakeswap.finance/contact-us/telegram" },
        { label: "ANDX", href: "https://docs.pancakeswap.finance/tokenomics/cake" },
        { label: "—" },
        { label: "Online Store", href: "https://pancakeswap.creator-spring.com/", isHighlighted: !0 },
      ],
    },
    {
      label: "Help",
      items: [
        { label: "Customer", href: "Support https://docs.pancakeswap.finance/contact-us/customer-support" },
        { label: "Troubleshooting", href: "https://docs.pancakeswap.finance/help/troubleshooting" },
        { label: "Guides", href: "https://docs.pancakeswap.finance/get-started" },
      ],
    },
    {
      label: "Developers",
      items: [
        { label: "Github", href: "https://github.com/pancakeswap" },
        { label: "Documentation", href: "https://docs.pancakeswap.finance" },
        { label: "Bug Bounty", href: "https://app.gitbook.com/@pancakeswap-1/s/pancakeswap/code/bug-bounty" },
        {
          label: "Audits",
          href: "https://docs.pancakeswap.finance/help/faq#is-pancakeswap-safe-has-pancakeswap-been-audited",
        },
        { label: "Careers", href: "https://docs.pancakeswap.finance/hiring/become-a-chef" },
      ],
    },
  ],
  C = [
    { label: "Twitter", icon: G, href: "https://twitter.com/pancakeswap" },
    {
      label: "Telegram",
      icon: H,
      items: [
        { label: "English", href: "https://t.me/pancakeswap" },
        { label: "Bahasa Indonesia", href: "https://t.me/pancakeswapIndonesia" },
        { label: "中文", href: "https://t.me/pancakeswap_CN" },
        { label: "Tiếng Việt", href: "https://t.me/PancakeSwapVN" },
        { label: "Italiano", href: "https://t.me/pancakeswap_Ita" },
        { label: "русский", href: "https://t.me/pancakeswap_ru" },
        { label: "Türkiye", href: "https://t.me/pancakeswapturkiye" },
        { label: "Português", href: "https://t.me/pancakeswapPortuguese" },
        { label: "Español", href: "https://t.me/pancakeswapES" },
        { label: "日本語", href: "https://t.me/pancakeswapJP" },
        { label: "Français", href: "https://t.me/pancakeswapFR" },
        { label: "Deutsch", href: "https://t.me/pancakeswap_DE" },
        { label: "Filipino", href: "https://t.me/pancakeswap_PH" },
        { label: "ქართული ენა", href: "https://t.me/pancakeswapGeorgia" },
        { label: "हिन्दी", href: "https://t.me/pancakeswap_INDIA" },
        { label: "Announcements", href: "https://t.me/PancakeSwapAnn" },
      ],
    },
    { label: "Reddit", icon: z, href: "https://reddit.com/r/pancakeswap" },
    { label: "Instagram", icon: R, href: "https://instagram.com/pancakeswap_official" },
    { label: "Github", icon: U, href: "https://github.com/pancakeswap/" },
    { label: "Discord", icon: Q, href: "https://discord.gg/pancakeswap" },
    { label: "Youtube", icon: J, href: "https://www.youtube.com/@pancakeswap_official" },
  ],
  Se = [...Array(20)].map((e, t) => ({ code: `en${t}`, language: `English${t}`, locale: `Locale${t}` })),
  y = ({ ...e }) => {
    const { isMobile: t } = $();
    return a(o, {
      ...e,
      "data-theme": "dark",
      children: C.map((r, u) => {
        const i = { width: "20px", color: "textSubtle", style: { cursor: "pointer" } },
          s = r.icon,
          d = u < C.length - 1 ? (t ? "16px" : "24px") : 0;
        return r.items
          ? a(
              N,
              {
                position: "top",
                target: a(s, { ...i, mr: d }),
                children: r.items.map((l) =>
                  a(
                    g,
                    { external: !0, href: l.href, "aria-label": l.label, color: "textSubtle", children: l.label },
                    l.label,
                  ),
                ),
              },
              r.label,
            )
          : a(g, { external: !0, href: r.href, "aria-label": r.label, mr: d, children: a(s, { ...i }) }, r.label);
      }),
    });
  },
  re = D.memo(y, () => !0);
try {
  (y.displayName = "SocialLinks"), (y.__docgenInfo = { description: "", displayName: "SocialLinks", props: {} });
} catch {}
const _ = n(o)`
  background: ${c.backgroundAlt};
`,
  w = n.ul`
  list-style: none;
  margin-bottom: 40px;

  ${({ theme: e }) => e.mediaQueries.lg} {
    margin-bottom: 0px;
  }
`,
  m = n.li`
  font-size: 16px;
  margin-bottom: 8px;
  text-transform: capitalize;

  &:first-child {
    color: ${c.secondary};
    font-weight: 600;
    text-transform: uppercase;
  }
`,
  k = n(b)`
  margin-bottom: 24px;
`,
  v = n(o)`
  border-color: ${c.cardBorder};
  border-top-width: 1px;
  border-bottom-width: 1px;
  border-style: solid;
  padding: 24px 0;
  margin-bottom: 24px;

  ${({ theme: e }) => e.mediaQueries.sm} {
    border-top-width: 0;
    border-bottom-width: 0;
    padding: 0 0;
    margin-bottom: 0;
  }
`,
  x = n(re)`
  border-bottom: 1px solid ${c.cardBorder};
`,
  I = n.span`
  color: ${c.text};
`;
try {
  (_.displayName = "StyledFooter"),
    (_.__docgenInfo = {
      description: "",
      displayName: "StyledFooter",
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
  (w.displayName = "StyledList"),
    (w.__docgenInfo = {
      description: "",
      displayName: "StyledList",
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
  (m.displayName = "StyledListItem"),
    (m.__docgenInfo = {
      description: "",
      displayName: "StyledListItem",
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
  (k.displayName = "StyledIconMobileContainer"),
    (k.__docgenInfo = {
      description: "",
      displayName: "StyledIconMobileContainer",
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
  (v.displayName = "StyledToolsContainer"),
    (v.__docgenInfo = {
      description: "",
      displayName: "StyledToolsContainer",
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
  (x.displayName = "StyledSocialLinks"),
    (x.__docgenInfo = {
      description: "",
      displayName: "StyledSocialLinks",
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
  (I.displayName = "StyledText"),
    (I.__docgenInfo = {
      description: "",
      displayName: "StyledText",
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
const B = n(L)`
  color: ${({ theme: e }) => e.colors.text};
  padding: 0 8px;
  border-radius: 8px;
`;
B.defaultProps = { variant: "text", size: "sm" };
const le = B,
  S = ({
    currentLang: e,
    langs: t,
    color: r,
    setLang: u,
    dropdownPosition: i = "bottom",
    buttonScale: s = "md",
    hideLanguage: d = !1,
  }) =>
    a(N, {
      position: i,
      target: a(L, {
        scale: s,
        variant: "text",
        startIcon: a(K, { color: r, width: "24px" }),
        children: !d && a(Z, { color: r, children: e == null ? void 0 : e.toUpperCase() }),
      }),
      children: t.map((l) =>
        a(
          le,
          { fullWidth: !0, onClick: () => u(l), style: { minHeight: "32px", height: "auto" }, children: l.language },
          l.locale,
        ),
      ),
    }),
  ne = D.memo(S, (e, t) => e.currentLang === t.currentLang);
try {
  (S.displayName = "LangSelector"),
    (S.__docgenInfo = {
      description: "",
      displayName: "LangSelector",
      props: {
        currentLang: {
          defaultValue: null,
          description: "",
          name: "currentLang",
          required: !0,
          type: { name: "string" },
        },
        langs: { defaultValue: null, description: "", name: "langs", required: !0, type: { name: "Language[]" } },
        setLang: {
          defaultValue: null,
          description: "",
          name: "setLang",
          required: !0,
          type: { name: "(lang: Language) => void" },
        },
        color: {
          defaultValue: null,
          description: "",
          name: "color",
          required: !0,
          type: {
            name: "enum",
            value: [
              { value: '"gold"' },
              { value: '"silver"' },
              { value: '"white"' },
              { value: '"yellow"' },
              { value: '"background"' },
              { value: '"text"' },
              { value: '"input"' },
              { value: '"disabled"' },
              { value: '"success"' },
              { value: '"warning"' },
              { value: '"secondary"' },
              { value: '"secondary80"' },
              { value: '"backgroundDisabled"' },
              { value: '"backgroundAlt"' },
              { value: '"backgroundAlt2"' },
              { value: '"cardBorder"' },
              { value: '"contrast"' },
              { value: '"dropdown"' },
              { value: '"dropdownDeep"' },
              { value: '"invertedContrast"' },
              { value: '"inputSecondary"' },
              { value: '"tertiary"' },
              { value: '"text99"' },
              { value: '"textDisabled"' },
              { value: '"textSubtle"' },
              { value: '"gradientBubblegum"' },
              { value: '"gradientInverseBubblegum"' },
              { value: '"gradientCardHeader"' },
              { value: '"gradientBlue"' },
              { value: '"gradientViolet"' },
              { value: '"gradientVioletAlt"' },
              { value: '"gradientGold"' },
              { value: '"gradientBold"' },
              { value: '"binance"' },
              { value: '"overlay"' },
              { value: '"bronze"' },
              { value: '"failure"' },
              { value: '"failure33"' },
              { value: '"primary"' },
              { value: '"primary0f"' },
              { value: '"primary3D"' },
              { value: '"primaryBright"' },
              { value: '"primaryDark"' },
              { value: '"success19"' },
              { value: '"warning2D"' },
              { value: '"warning33"' },
            ],
          },
        },
        dropdownPosition: {
          defaultValue: { value: "bottom" },
          description: "",
          name: "dropdownPosition",
          required: !1,
          type: { name: "enum", value: [{ value: '"bottom"' }, { value: '"top"' }, { value: '"top-right"' }] },
        },
        buttonScale: {
          defaultValue: { value: "md" },
          description: "",
          name: "buttonScale",
          required: !1,
          type: { name: "enum", value: [{ value: '"md"' }, { value: '"sm"' }, { value: '"xs"' }] },
        },
        hideLanguage: {
          defaultValue: { value: "false" },
          description: "",
          name: "hideLanguage",
          required: !1,
          type: { name: "boolean" },
        },
      },
    });
} catch {}
const oe = ({
    items: e,
    isDark: t,
    toggleTheme: r,
    currentLang: u,
    langs: i,
    setLang: s,
    cakePriceUsd: d,
    buyCakeLabel: l,
    buyCakeLink: F,
    chainId: W,
    ...P
  }) => {
    const M = te(),
      { isXl: E } = $();
    return a(_, {
      "data-theme": "dark",
      p: ["40px 16px", null, "56px 40px 32px 40px"],
      position: "relative",
      ...P,
      justifyContent: "center",
      children: p(o, {
        flexDirection: "column",
        width: ["100%", null, "1200px;"],
        children: [
          a(k, { display: ["block", null, "none"], children: a(A, { width: "130px" }) }),
          p(o, {
            order: [2, null, 1],
            flexDirection: ["column", "column", "column", "column", "row", "row"],
            justifyContent: "space-between",
            alignItems: "flex-start",
            mb: ["42px", null, "36px"],
            children: [
              e == null
                ? void 0
                : e.map((f) => {
                    var V;
                    return p(
                      w,
                      {
                        children: [
                          a(m, { children: f.label }),
                          (V = f.items) == null
                            ? void 0
                            : V.map(({ label: h, href: T, isHighlighted: j = !1 }) =>
                                a(
                                  m,
                                  {
                                    children: T
                                      ? a(g, {
                                          "data-theme": "dark",
                                          href: T,
                                          target: "_blank",
                                          rel: "noreferrer noopener",
                                          color: j ? X.colors.warning : "text",
                                          bold: !1,
                                          children: h,
                                        })
                                      : a(I, { children: h }),
                                  },
                                  h,
                                ),
                              ),
                        ],
                      },
                      f.label,
                    );
                  }),
              a(b, { display: ["none", null, "block"], children: E ? a(ee, {}) : a(A, { width: "160px" }) }),
            ],
          }),
          a(x, { order: [2], pb: ["42px", null, "32px"], mb: ["0", null, "32px"] }),
          p(v, {
            "data-theme": "dark",
            order: [1, null, 3],
            flexDirection: ["column", null, "row"],
            justifyContent: "space-between",
            children: [
              p(o, {
                order: [2, null, 1],
                alignItems: "center",
                children: [
                  M && a(ae, { isDark: t, toggleTheme: r }),
                  a(ne, { currentLang: u, langs: i, setLang: s, color: "textSubtle", dropdownPosition: "top-right" }),
                ],
              }),
              p(o, {
                order: [1, null, 2],
                mb: ["24px", null, "0"],
                justifyContent: "space-between",
                alignItems: "center",
                children: [
                  a(b, { mr: "20px", children: a(Y, { chainId: W, cakePriceUsd: d, color: "textSubtle" }) }),
                  a(L, {
                    "data-theme": "dark",
                    as: "a",
                    href: F,
                    target: "_blank",
                    scale: "sm",
                    endIcon: a(O, { color: "backgroundAlt" }),
                    children: l,
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    });
  },
  Le = oe;
try {
  (Footer.displayName = "Footer"),
    (Footer.__docgenInfo = {
      description: "",
      displayName: "Footer",
      props: {
        items: { defaultValue: null, description: "", name: "items", required: !0, type: { name: "FooterLinkType[]" } },
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
export { Le as F, ne as L, Ie as f, Se as l, te as u };
