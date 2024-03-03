import { j as E, a as t, F as B } from "./jsx-runtime-a888423b.js";
import { r as p } from "./index-8db94870.js";
import { B as m } from "./Box-f877d5fa.js";
import { S as b, a as T, B as o } from "./BalanceInput-4ba1fc61.js";
import { T as _ } from "./Text-f6b55a62.js";
import "./_commonjsHelpers-042e6b4d.js";
import "./index.esm-8c5d6e7e.js";
import "./index.esm-073a6cf8.js";
import "./styled-components.browser.esm-05bde203.js";
import "./motion-minimal-b8fc2ac8.js";
import "./Input-771d9dff.js";
import "./IconButton-ad080da8.js";
import "./Button-1b68a01e.js";
import "./clsx.m-1229b3e0.js";
import "./externalLinkProps-0f3801f5.js";
import "./vars.css-8b7ea31e.js";
/* empty css                            */ import "./Flex-e70cc8d9.js";
import "./SwapVert-b7e10d21.js";
import "./Svg-f122668c.js";
import "./getThemeValue-6fc24f62.js";
import "./get-8ca00567.js";
import "./isObject-5487ad91.js";
const P = ({ label: i, value: e, placeholder: u, onUserInput: r, inputProps: n, isWarning: a = !1 }) =>
    E(b, {
      isWarning: a,
      children: [
        t(_, { fontSize: "14px", children: i }),
        t(T, {
          value: e,
          onChange: (s) => {
            r(s.target.value);
          },
          placeholder: u,
          textAlign: "left",
          ...n,
        }),
      ],
    }),
  w = P;
try {
  (TextField.displayName = "TextField"),
    (TextField.__docgenInfo = {
      description: "",
      displayName: "TextField",
      props: {
        label: { defaultValue: null, description: "", name: "label", required: !0, type: { name: "ReactNode" } },
        value: { defaultValue: null, description: "", name: "value", required: !0, type: { name: "string | number" } },
        placeholder: {
          defaultValue: null,
          description: "",
          name: "placeholder",
          required: !1,
          type: { name: "string" },
        },
        onUserInput: {
          defaultValue: null,
          description: "",
          name: "onUserInput",
          required: !0,
          type: { name: "(input: string) => void" },
        },
        inputProps: {
          defaultValue: null,
          description: "",
          name: "inputProps",
          required: !1,
          type: { name: 'Omit<InputHTMLAttributes<HTMLInputElement>, "onChange" | "placeholder" | "value">' },
        },
        isWarning: {
          defaultValue: { value: "false" },
          description: "",
          name: "isWarning",
          required: !1,
          type: { name: "boolean" },
        },
      },
    });
} catch {}
const ue = { title: "Components/BalanceInput", component: o, argTypes: {} },
  h = () => {
    const [i, e] = p.useState(1.43333),
      [u, r] = p.useState(5),
      n = (s) => `~${(s * 1.3).toLocaleString(void 0, { minimumFractionDigits: 2, maximumFractionDigits: 2 })} USD`,
      a = (s) => {
        e(s);
      },
      d = (s) => {
        r(s);
      };
    return E(m, {
      width: "300px",
      children: [
        t(o, { onUserInput: a, value: i, currencyValue: n(i), placeholder: "0.0", mb: "32px" }),
        t(o, {
          value: i * 1.5,
          onUserInput: a,
          currencyValue: n(i * 1.5),
          placeholder: "1.5",
          isWarning: !0,
          mb: "32px",
        }),
        t(o, {
          value: u,
          onUserInput: d,
          inputProps: { inputMode: "numeric" },
          currencyValue: n(u),
          placeholder: "0",
          mb: "32px",
        }),
      ],
    });
  },
  C = () => {
    const [e, u] = p.useState("1006.086956"),
      r = (a) =>
        `~${(parseFloat(a) * 69).toLocaleString(void 0, { minimumFractionDigits: 2, maximumFractionDigits: 2 })} USD`,
      n = (a) => {
        u(a);
      };
    return E(B, {
      children: [
        t(m, {
          width: "300px",
          mb: "24px",
          children: t(o, { onUserInput: n, value: e, currencyValue: r(e), placeholder: "0.0", unit: "ANDX" }),
        }),
        t(m, {
          width: "300px",
          children: t(o, {
            onUserInput: n,
            value: e,
            currencyValue: "2854.66 BADGER-HOTCROSS LP",
            placeholder: "0.0",
            unit: "ANDX-BNB LP",
          }),
        }),
      ],
    });
  },
  g = () => {
    const [e, u] = p.useState("ANDX"),
      r = e === "ANDX" ? "USD" : "ANDX",
      [n, a] = p.useState({ ANDX: "1006.086957", USD: `${1006.086957 * 69}` }),
      d = Number.isNaN(parseFloat(n[r]))
        ? "0.00"
        : parseFloat(n[r]).toLocaleString(void 0, { minimumFractionDigits: 2, maximumFractionDigits: 2 }),
      s = () => {
        const c = e === "ANDX" ? "USD" : "ANDX",
          l = { ...n };
        (l[c] = Number.isNaN(parseFloat(n[r])) ? "0.00" : parseFloat(n[r]).toFixed(2)), a(l), u(c);
      };
    return t(m, {
      width: "300px",
      children: t(o, {
        onUserInput: (c) => {
          const l = parseFloat(c);
          a(
            e === "ANDX"
              ? { ANDX: c, USD: Number.isNaN(l) ? "" : `${l * 69}` }
              : { ANDX: Number.isNaN(l) ? "" : `${l / 69}`, USD: c },
          );
        },
        value: n[e],
        currencyValue: `~${d} ${r}`,
        placeholder: "0.0",
        unit: e,
        isWarning: !n[e] || parseFloat(n[e]) <= 0,
        switchEditingUnits: s,
      }),
    });
  },
  U = () => {
    const [i, e] = p.useState("");
    return t(m, {
      width: "300px",
      children: t(w, { label: "Label", value: i, placeholder: "Placeholder", onUserInput: e }),
    });
  };
var V, x, S;
h.parameters = {
  ...h.parameters,
  docs: {
    ...((V = h.parameters) == null ? void 0 : V.docs),
    source: {
      originalSource: `() => {
  const [decimalValue, setDecimalValue] = useState(1.43333);
  const [numericValue, setNumericValue] = useState(5);
  const currencyValue = (input: number) => {
    return \`~\${(input * 1.3).toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    })} USD\`;
  };
  const handleDecimalChange = input => {
    setDecimalValue(input);
  };
  const handleNumericChange = input => {
    setNumericValue(input);
  };
  return <Box width="300px">
      <BalanceInput onUserInput={handleDecimalChange} value={decimalValue} currencyValue={currencyValue(decimalValue)} placeholder="0.0" mb="32px" />
      <BalanceInput value={decimalValue * 1.5} onUserInput={handleDecimalChange} currencyValue={currencyValue(decimalValue * 1.5)} placeholder="1.5" isWarning mb="32px" />
      <BalanceInput value={numericValue} onUserInput={handleNumericChange} inputProps={{
      inputMode: "numeric"
    }} currencyValue={currencyValue(numericValue)} placeholder="0" mb="32px" />
    </Box>;
}`,
      ...((S = (x = h.parameters) == null ? void 0 : x.docs) == null ? void 0 : S.source),
    },
  },
};
var A, v, D;
C.parameters = {
  ...C.parameters,
  docs: {
    ...((A = C.parameters) == null ? void 0 : A.docs),
    source: {
      originalSource: `() => {
  const ANDX_PRICE = 69;
  const [cakeValue, setCakeValue] = useState("1006.086956");
  const cakeToUSD = (input: string) => {
    const convertedToUSD = parseFloat(input) * ANDX_PRICE;
    return \`~\${convertedToUSD.toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    })} USD\`;
  };
  const handleCakeChange = (input: string) => {
    setCakeValue(input);
  };
  return <>
      <Box width="300px" mb="24px">
        <BalanceInput onUserInput={handleCakeChange} value={cakeValue} currencyValue={cakeToUSD(cakeValue)} placeholder="0.0" unit="ANDX" />
      </Box>
      {/* Long token names with spaces */}
      <Box width="300px">
        <BalanceInput onUserInput={handleCakeChange} value={cakeValue} currencyValue="2854.66 BADGER-HOTCROSS LP" placeholder="0.0" unit="ANDX-BNB LP" />
      </Box>
    </>;
}`,
      ...((D = (v = C.parameters) == null ? void 0 : v.docs) == null ? void 0 : D.source),
    },
  },
};
var F, f, I;
g.parameters = {
  ...g.parameters,
  docs: {
    ...((F = g.parameters) == null ? void 0 : F.docs),
    source: {
      originalSource: `() => {
  const ANDX_PRICE = 69;
  const [editingUnit, setEditingUnit] = useState<"ANDX" | "USD">("ANDX");
  const conversionUnit = editingUnit === "ANDX" ? "USD" : "ANDX";
  const [values, setValues] = useState({
    ANDX: "1006.086957",
    USD: \`\${1006.086957 * ANDX_PRICE}\`
  });
  const currencyValue = !Number.isNaN(parseFloat(values[conversionUnit])) ? parseFloat(values[conversionUnit]).toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }) : "0.00";
  const switchEditingUnits = () => {
    const editingUnitAfterChange = editingUnit === "ANDX" ? "USD" : "ANDX";
    // This is needed to persist same value as shown for currencyValue after switching
    // otherwise user will see lots of decimals
    const valuesAfterChange = {
      ...values
    };
    valuesAfterChange[editingUnitAfterChange] = !Number.isNaN(parseFloat(values[conversionUnit])) ? parseFloat(values[conversionUnit]).toFixed(2) : "0.00";
    setValues(valuesAfterChange);
    setEditingUnit(editingUnitAfterChange);
  };
  const handleCakeChange = (input: string) => {
    const inputAsFloat = parseFloat(input);
    if (editingUnit === "ANDX") {
      setValues({
        ANDX: input,
        USD: Number.isNaN(inputAsFloat) ? "" : \`\${inputAsFloat * ANDX_PRICE}\`
      });
    } else {
      setValues({
        ANDX: Number.isNaN(inputAsFloat) ? "" : \`\${inputAsFloat / ANDX_PRICE}\`,
        USD: input
      });
    }
  };
  return <Box width="300px">
      <BalanceInput onUserInput={handleCakeChange} value={values[editingUnit]} currencyValue={\`~\${currencyValue} \${conversionUnit}\`} placeholder="0.0" unit={editingUnit} isWarning={!values[editingUnit] || parseFloat(values[editingUnit]) <= 0} switchEditingUnits={switchEditingUnits} />
    </Box>;
}`,
      ...((I = (f = g.parameters) == null ? void 0 : f.docs) == null ? void 0 : I.source),
    },
  },
};
var y, K, N;
U.parameters = {
  ...U.parameters,
  docs: {
    ...((y = U.parameters) == null ? void 0 : y.docs),
    source: {
      originalSource: `() => {
  const [value, setValue] = useState("");
  return <Box width="300px">
      <TextFieldComp label="Label" value={value} placeholder="Placeholder" onUserInput={setValue} />
    </Box>;
}`,
      ...((N = (K = U.parameters) == null ? void 0 : K.docs) == null ? void 0 : N.source),
    },
  },
};
const le = ["Default", "UnitDisplay", "SwitchUnits", "Textfield"];
export { h as Default, g as SwitchUnits, U as Textfield, C as UnitDisplay, le as __namedExportsOrder, ue as default };
