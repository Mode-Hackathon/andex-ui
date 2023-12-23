// vite.config.ts
import { defineConfig } from "file:///home/mumeen/Documents/projects/swap/mode-swap/node_modules/.pnpm/vite@4.3.9_@types+node@20.10.4/node_modules/vite/dist/node/index.js";
import { vanillaExtractPlugin } from "file:///home/mumeen/Documents/projects/swap/mode-swap/node_modules/.pnpm/@vanilla-extract+vite-plugin@3.9.3_@types+node@20.10.4_vite@4.3.9/node_modules/@vanilla-extract/vite-plugin/dist/vanilla-extract-vite-plugin.cjs.js";
import dts from "file:///home/mumeen/Documents/projects/swap/mode-swap/node_modules/.pnpm/vite-plugin-dts@3.6.4_@types+node@20.10.4_rollup@2.79.1_typescript@5.2.2_vite@4.3.9/node_modules/vite-plugin-dts/dist/index.mjs";

// package.json
var package_default = {
  name: "@pancakeswap/uikit",
  version: "0.65.1",
  description: "Set of UI components for pancake projects",
  type: "module",
  main: "dist/index.cjs",
  module: "dist/index.js",
  types: "dist/index.d.ts",
  sideEffects: [
    "*.css.ts",
    "src/css/**/*",
    "src/theme/**/*"
  ],
  exports: {
    "./package.json": "./package.json",
    ".": {
      import: "./dist/index.js",
      require: "./dist/index.cjs"
    },
    "./styles": {
      import: "./dist/style.css",
      require: "./dist/style.css"
    },
    "./css/atoms": {
      import: "./src/css/atoms.ts",
      types: "./dist/css/atoms.d.ts"
    },
    "./css/vars.css": {
      import: "./src/css/vars.css.ts",
      types: "./dist/css/vars.css.d.ts"
    },
    "./css/responsiveStyle": {
      import: "./src/css/responsiveStyle.ts",
      types: "./dist/css/responsiveStyle.d.ts"
    }
  },
  repository: "https://github.com/pancakeswap/pancake-frontend/tree/develop/packages/uikit",
  license: "MIT",
  private: true,
  scripts: {
    "build:uikit": "vite build",
    dev: "vite build --watch --mode development",
    start: "pnpm storybook",
    lint: "eslint 'src/**/*.{js,jsx,ts,tsx}'",
    "format:check": "prettier --check --loglevel error 'src/**/*.{js,jsx,ts,tsx}'",
    "format:write": "prettier --write 'src/**/*.{js,jsx,ts,tsx}'",
    storybook: "storybook dev -p 6006",
    "build:storybook": "storybook build",
    test: "vitest --run",
    "update:snapshot": "vitest -u",
    prepublishOnly: "pnpm run build:uikit",
    clean: "rm -rf .turbo && rm -rf node_modules && rm -rf dist",
    "build-storybook": "storybook build"
  },
  devDependencies: {
    "@babel/core": "^7.23.5",
    "@babel/preset-env": "^7.23.5",
    "@babel/preset-react": "^7.23.3",
    "@pancakeswap/chains": "workspace:*",
    "@pancakeswap/hooks": "workspace:*",
    "@pancakeswap/utils": "workspace:*",
    "@rollup/plugin-json": "^4.1.0",
    "@rollup/plugin-typescript": "^8.5.0",
    "@rollup/plugin-url": "^6.1.0",
    "@storybook/addon-a11y": "^7.6.4",
    "@storybook/addon-actions": "^7.6.4",
    "@storybook/addon-essentials": "^7.6.4",
    "@storybook/addon-interactions": "^7.6.4",
    "@storybook/addon-links": "^7.6.4",
    "@storybook/addon-onboarding": "^1.0.9",
    "@storybook/addon-themes": "^7.6.4",
    "@storybook/blocks": "^7.6.4",
    "@storybook/builder-vite": "^7.6.4",
    "@storybook/react": "^7.6.4",
    "@storybook/react-vite": "^7.6.4",
    "@storybook/test": "^7.6.4",
    "@testing-library/jest-dom": "^5.17.0",
    "@testing-library/react": "^12.1.5",
    "@types/d3": "^7.4.3",
    "@types/js-cookie": "^3.0.6",
    "@types/lodash": "^4.14.202",
    "@types/react": "^18.2.43",
    "@types/react-dom": "^18.2.17",
    "@types/react-router-dom": "^5.3.3",
    "@types/react-transition-group": "^4.4.10",
    "@types/styled-system__should-forward-prop": "^5.1.4",
    "@vanilla-extract/vite-plugin": "^3.9.2",
    "@vitejs/plugin-react": "4.0.0",
    "babel-jest": "^29.7.0",
    "babel-loader": "^9.1.3",
    "babel-plugin-styled-components": "^1.13.3",
    d3: "^7.8.5",
    jest: "^27.5.1",
    "jest-environment-jsdom": "^29.7.0",
    "jest-styled-components": "^7.2.0",
    "js-cookie": "^3.0.5",
    "next-themes": "^0.2.1",
    polished: "^4.2.2",
    "prop-types": "^15.8.1",
    react: "^18.2.0",
    "react-countup": "^6.5.0",
    "react-device-detect": "^2.2.3",
    "react-dom": "^18.2.0",
    "react-is": "^18.2.0",
    "react-markdown": "^6.0.3",
    "react-redux": "^8.1.3",
    "react-router-dom": "^5.3.4",
    "react-transition-group": "^4.4.5",
    "remark-gfm": "^4.0.0",
    rollup: "^2.79.1",
    "rollup-plugin-node-builtins": "^2.1.2",
    storybook: "^7.6.4",
    "styled-components": "6.0.7",
    "themeprovider-storybook": "^1.8.0",
    "ts-jest": "^27.1.5",
    vite: "4.3.9",
    "vite-plugin-dts": "^3.6.4",
    "vite-tsconfig-paths": "^4.2.2"
  },
  peerDependencies: {
    "js-cookie": "*",
    "next-themes": "^0.2.1",
    react: "^18.2.0",
    "react-device-detect": "*",
    "react-dom": "^18.2.0",
    "react-redux": "^8.0.5",
    "react-transition-group": "*",
    "remark-gfm": "*",
    "styled-components": "6.0.7"
  },
  dependencies: {
    "@pancakeswap/hooks": "workspace:*",
    "@pancakeswap/localization": "workspace:*",
    "@popperjs/core": "^2.11.8",
    "@radix-ui/react-dismissable-layer": "^1.0.5",
    "@radix-ui/react-slot": "^1.0.2",
    "@styled-system/should-forward-prop": "^5.1.5",
    "@types/styled-system": "^5.1.22",
    "@vanilla-extract/css": "^1.14.0",
    "@vanilla-extract/css-utils": "^0.1.3",
    "@vanilla-extract/recipes": "^0.5.1",
    "@vanilla-extract/sprinkles": "^1.6.1",
    "bignumber.js": "^9.1.2",
    clsx: "^1.2.1",
    csstype: "^3.1.3",
    dayjs: "^1.11.10",
    deepmerge: "^4.3.1",
    "framer-motion": "10.16.4",
    "lightweight-charts": "^4.1.1",
    lodash: "^4.17.21",
    "react-popper": "^2.3.0",
    "styled-system": "^5.1.5",
    tslib: "^2.6.2",
    wagmi: "1.4.7"
  },
  publishConfig: {
    access: "public"
  }
};

// vite.config.ts
var vite_config_default = defineConfig({
  build: {
    lib: {
      entry: "src/index.ts",
      fileName: "index",
      formats: ["cjs", "es"]
    },
    rollupOptions: {
      external: [...Object.keys(package_default.peerDependencies), ...Object.keys(package_default.dependencies), "crypto"]
    }
  },
  plugins: [
    vanillaExtractPlugin({
      identifiers: "short"
    }),
    dts()
  ]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiLCAicGFja2FnZS5qc29uIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL2hvbWUvbXVtZWVuL0RvY3VtZW50cy9wcm9qZWN0cy9zd2FwL21vZGUtc3dhcC9wYWNrYWdlcy91aWtpdFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL2hvbWUvbXVtZWVuL0RvY3VtZW50cy9wcm9qZWN0cy9zd2FwL21vZGUtc3dhcC9wYWNrYWdlcy91aWtpdC92aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vaG9tZS9tdW1lZW4vRG9jdW1lbnRzL3Byb2plY3RzL3N3YXAvbW9kZS1zd2FwL3BhY2thZ2VzL3Vpa2l0L3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIjtcbmltcG9ydCB7IHZhbmlsbGFFeHRyYWN0UGx1Z2luIH0gZnJvbSBcIkB2YW5pbGxhLWV4dHJhY3Qvdml0ZS1wbHVnaW5cIjtcbmltcG9ydCBkdHMgZnJvbSBcInZpdGUtcGx1Z2luLWR0c1wiO1xuXG5pbXBvcnQgcGtnIGZyb20gXCIuL3BhY2thZ2UuanNvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBidWlsZDoge1xuICAgIGxpYjoge1xuICAgICAgZW50cnk6IFwic3JjL2luZGV4LnRzXCIsXG4gICAgICBmaWxlTmFtZTogXCJpbmRleFwiLFxuICAgICAgZm9ybWF0czogW1wiY2pzXCIsIFwiZXNcIl0sXG4gICAgfSxcbiAgICByb2xsdXBPcHRpb25zOiB7XG4gICAgICBleHRlcm5hbDogWy4uLk9iamVjdC5rZXlzKHBrZy5wZWVyRGVwZW5kZW5jaWVzKSwgLi4uT2JqZWN0LmtleXMocGtnLmRlcGVuZGVuY2llcyksIFwiY3J5cHRvXCJdLFxuICAgIH0sXG4gIH0sXG4gIHBsdWdpbnM6IFtcbiAgICB2YW5pbGxhRXh0cmFjdFBsdWdpbih7XG4gICAgICBpZGVudGlmaWVyczogXCJzaG9ydFwiLFxuICAgIH0pLFxuICAgIGR0cygpLFxuICBdLFxufSk7XG4iLCAie1xuICBcIm5hbWVcIjogXCJAcGFuY2FrZXN3YXAvdWlraXRcIixcbiAgXCJ2ZXJzaW9uXCI6IFwiMC42NS4xXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJTZXQgb2YgVUkgY29tcG9uZW50cyBmb3IgcGFuY2FrZSBwcm9qZWN0c1wiLFxuICBcInR5cGVcIjogXCJtb2R1bGVcIixcbiAgXCJtYWluXCI6IFwiZGlzdC9pbmRleC5janNcIixcbiAgXCJtb2R1bGVcIjogXCJkaXN0L2luZGV4LmpzXCIsXG4gIFwidHlwZXNcIjogXCJkaXN0L2luZGV4LmQudHNcIixcbiAgXCJzaWRlRWZmZWN0c1wiOiBbXG4gICAgXCIqLmNzcy50c1wiLFxuICAgIFwic3JjL2Nzcy8qKi8qXCIsXG4gICAgXCJzcmMvdGhlbWUvKiovKlwiXG4gIF0sXG4gIFwiZXhwb3J0c1wiOiB7XG4gICAgXCIuL3BhY2thZ2UuanNvblwiOiBcIi4vcGFja2FnZS5qc29uXCIsXG4gICAgXCIuXCI6IHtcbiAgICAgIFwiaW1wb3J0XCI6IFwiLi9kaXN0L2luZGV4LmpzXCIsXG4gICAgICBcInJlcXVpcmVcIjogXCIuL2Rpc3QvaW5kZXguY2pzXCJcbiAgICB9LFxuICAgIFwiLi9zdHlsZXNcIjoge1xuICAgICAgXCJpbXBvcnRcIjogXCIuL2Rpc3Qvc3R5bGUuY3NzXCIsXG4gICAgICBcInJlcXVpcmVcIjogXCIuL2Rpc3Qvc3R5bGUuY3NzXCJcbiAgICB9LFxuICAgIFwiLi9jc3MvYXRvbXNcIjoge1xuICAgICAgXCJpbXBvcnRcIjogXCIuL3NyYy9jc3MvYXRvbXMudHNcIixcbiAgICAgIFwidHlwZXNcIjogXCIuL2Rpc3QvY3NzL2F0b21zLmQudHNcIlxuICAgIH0sXG4gICAgXCIuL2Nzcy92YXJzLmNzc1wiOiB7XG4gICAgICBcImltcG9ydFwiOiBcIi4vc3JjL2Nzcy92YXJzLmNzcy50c1wiLFxuICAgICAgXCJ0eXBlc1wiOiBcIi4vZGlzdC9jc3MvdmFycy5jc3MuZC50c1wiXG4gICAgfSxcbiAgICBcIi4vY3NzL3Jlc3BvbnNpdmVTdHlsZVwiOiB7XG4gICAgICBcImltcG9ydFwiOiBcIi4vc3JjL2Nzcy9yZXNwb25zaXZlU3R5bGUudHNcIixcbiAgICAgIFwidHlwZXNcIjogXCIuL2Rpc3QvY3NzL3Jlc3BvbnNpdmVTdHlsZS5kLnRzXCJcbiAgICB9XG4gIH0sXG4gIFwicmVwb3NpdG9yeVwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9wYW5jYWtlc3dhcC9wYW5jYWtlLWZyb250ZW5kL3RyZWUvZGV2ZWxvcC9wYWNrYWdlcy91aWtpdFwiLFxuICBcImxpY2Vuc2VcIjogXCJNSVRcIixcbiAgXCJwcml2YXRlXCI6IHRydWUsXG4gIFwic2NyaXB0c1wiOiB7XG4gICAgXCJidWlsZDp1aWtpdFwiOiBcInZpdGUgYnVpbGRcIixcbiAgICBcImRldlwiOiBcInZpdGUgYnVpbGQgLS13YXRjaCAtLW1vZGUgZGV2ZWxvcG1lbnRcIixcbiAgICBcInN0YXJ0XCI6IFwicG5wbSBzdG9yeWJvb2tcIixcbiAgICBcImxpbnRcIjogXCJlc2xpbnQgJ3NyYy8qKi8qLntqcyxqc3gsdHMsdHN4fSdcIixcbiAgICBcImZvcm1hdDpjaGVja1wiOiBcInByZXR0aWVyIC0tY2hlY2sgLS1sb2dsZXZlbCBlcnJvciAnc3JjLyoqLyoue2pzLGpzeCx0cyx0c3h9J1wiLFxuICAgIFwiZm9ybWF0OndyaXRlXCI6IFwicHJldHRpZXIgLS13cml0ZSAnc3JjLyoqLyoue2pzLGpzeCx0cyx0c3h9J1wiLFxuICAgIFwic3Rvcnlib29rXCI6IFwic3Rvcnlib29rIGRldiAtcCA2MDA2XCIsXG4gICAgXCJidWlsZDpzdG9yeWJvb2tcIjogXCJzdG9yeWJvb2sgYnVpbGRcIixcbiAgICBcInRlc3RcIjogXCJ2aXRlc3QgLS1ydW5cIixcbiAgICBcInVwZGF0ZTpzbmFwc2hvdFwiOiBcInZpdGVzdCAtdVwiLFxuICAgIFwicHJlcHVibGlzaE9ubHlcIjogXCJwbnBtIHJ1biBidWlsZDp1aWtpdFwiLFxuICAgIFwiY2xlYW5cIjogXCJybSAtcmYgLnR1cmJvICYmIHJtIC1yZiBub2RlX21vZHVsZXMgJiYgcm0gLXJmIGRpc3RcIixcbiAgICBcImJ1aWxkLXN0b3J5Ym9va1wiOiBcInN0b3J5Ym9vayBidWlsZFwiXG4gIH0sXG4gIFwiZGV2RGVwZW5kZW5jaWVzXCI6IHtcbiAgICBcIkBiYWJlbC9jb3JlXCI6IFwiXjcuMjMuNVwiLFxuICAgIFwiQGJhYmVsL3ByZXNldC1lbnZcIjogXCJeNy4yMy41XCIsXG4gICAgXCJAYmFiZWwvcHJlc2V0LXJlYWN0XCI6IFwiXjcuMjMuM1wiLFxuICAgIFwiQHBhbmNha2Vzd2FwL2NoYWluc1wiOiBcIndvcmtzcGFjZToqXCIsXG4gICAgXCJAcGFuY2FrZXN3YXAvaG9va3NcIjogXCJ3b3Jrc3BhY2U6KlwiLFxuICAgIFwiQHBhbmNha2Vzd2FwL3V0aWxzXCI6IFwid29ya3NwYWNlOipcIixcbiAgICBcIkByb2xsdXAvcGx1Z2luLWpzb25cIjogXCJeNC4xLjBcIixcbiAgICBcIkByb2xsdXAvcGx1Z2luLXR5cGVzY3JpcHRcIjogXCJeOC41LjBcIixcbiAgICBcIkByb2xsdXAvcGx1Z2luLXVybFwiOiBcIl42LjEuMFwiLFxuICAgIFwiQHN0b3J5Ym9vay9hZGRvbi1hMTF5XCI6IFwiXjcuNi40XCIsXG4gICAgXCJAc3Rvcnlib29rL2FkZG9uLWFjdGlvbnNcIjogXCJeNy42LjRcIixcbiAgICBcIkBzdG9yeWJvb2svYWRkb24tZXNzZW50aWFsc1wiOiBcIl43LjYuNFwiLFxuICAgIFwiQHN0b3J5Ym9vay9hZGRvbi1pbnRlcmFjdGlvbnNcIjogXCJeNy42LjRcIixcbiAgICBcIkBzdG9yeWJvb2svYWRkb24tbGlua3NcIjogXCJeNy42LjRcIixcbiAgICBcIkBzdG9yeWJvb2svYWRkb24tb25ib2FyZGluZ1wiOiBcIl4xLjAuOVwiLFxuICAgIFwiQHN0b3J5Ym9vay9hZGRvbi10aGVtZXNcIjogXCJeNy42LjRcIixcbiAgICBcIkBzdG9yeWJvb2svYmxvY2tzXCI6IFwiXjcuNi40XCIsXG4gICAgXCJAc3Rvcnlib29rL2J1aWxkZXItdml0ZVwiOiBcIl43LjYuNFwiLFxuICAgIFwiQHN0b3J5Ym9vay9yZWFjdFwiOiBcIl43LjYuNFwiLFxuICAgIFwiQHN0b3J5Ym9vay9yZWFjdC12aXRlXCI6IFwiXjcuNi40XCIsXG4gICAgXCJAc3Rvcnlib29rL3Rlc3RcIjogXCJeNy42LjRcIixcbiAgICBcIkB0ZXN0aW5nLWxpYnJhcnkvamVzdC1kb21cIjogXCJeNS4xNy4wXCIsXG4gICAgXCJAdGVzdGluZy1saWJyYXJ5L3JlYWN0XCI6IFwiXjEyLjEuNVwiLFxuICAgIFwiQHR5cGVzL2QzXCI6IFwiXjcuNC4zXCIsXG4gICAgXCJAdHlwZXMvanMtY29va2llXCI6IFwiXjMuMC42XCIsXG4gICAgXCJAdHlwZXMvbG9kYXNoXCI6IFwiXjQuMTQuMjAyXCIsXG4gICAgXCJAdHlwZXMvcmVhY3RcIjogXCJeMTguMi40M1wiLFxuICAgIFwiQHR5cGVzL3JlYWN0LWRvbVwiOiBcIl4xOC4yLjE3XCIsXG4gICAgXCJAdHlwZXMvcmVhY3Qtcm91dGVyLWRvbVwiOiBcIl41LjMuM1wiLFxuICAgIFwiQHR5cGVzL3JlYWN0LXRyYW5zaXRpb24tZ3JvdXBcIjogXCJeNC40LjEwXCIsXG4gICAgXCJAdHlwZXMvc3R5bGVkLXN5c3RlbV9fc2hvdWxkLWZvcndhcmQtcHJvcFwiOiBcIl41LjEuNFwiLFxuICAgIFwiQHZhbmlsbGEtZXh0cmFjdC92aXRlLXBsdWdpblwiOiBcIl4zLjkuMlwiLFxuICAgIFwiQHZpdGVqcy9wbHVnaW4tcmVhY3RcIjogXCI0LjAuMFwiLFxuICAgIFwiYmFiZWwtamVzdFwiOiBcIl4yOS43LjBcIixcbiAgICBcImJhYmVsLWxvYWRlclwiOiBcIl45LjEuM1wiLFxuICAgIFwiYmFiZWwtcGx1Z2luLXN0eWxlZC1jb21wb25lbnRzXCI6IFwiXjEuMTMuM1wiLFxuICAgIFwiZDNcIjogXCJeNy44LjVcIixcbiAgICBcImplc3RcIjogXCJeMjcuNS4xXCIsXG4gICAgXCJqZXN0LWVudmlyb25tZW50LWpzZG9tXCI6IFwiXjI5LjcuMFwiLFxuICAgIFwiamVzdC1zdHlsZWQtY29tcG9uZW50c1wiOiBcIl43LjIuMFwiLFxuICAgIFwianMtY29va2llXCI6IFwiXjMuMC41XCIsXG4gICAgXCJuZXh0LXRoZW1lc1wiOiBcIl4wLjIuMVwiLFxuICAgIFwicG9saXNoZWRcIjogXCJeNC4yLjJcIixcbiAgICBcInByb3AtdHlwZXNcIjogXCJeMTUuOC4xXCIsXG4gICAgXCJyZWFjdFwiOiBcIl4xOC4yLjBcIixcbiAgICBcInJlYWN0LWNvdW50dXBcIjogXCJeNi41LjBcIixcbiAgICBcInJlYWN0LWRldmljZS1kZXRlY3RcIjogXCJeMi4yLjNcIixcbiAgICBcInJlYWN0LWRvbVwiOiBcIl4xOC4yLjBcIixcbiAgICBcInJlYWN0LWlzXCI6IFwiXjE4LjIuMFwiLFxuICAgIFwicmVhY3QtbWFya2Rvd25cIjogXCJeNi4wLjNcIixcbiAgICBcInJlYWN0LXJlZHV4XCI6IFwiXjguMS4zXCIsXG4gICAgXCJyZWFjdC1yb3V0ZXItZG9tXCI6IFwiXjUuMy40XCIsXG4gICAgXCJyZWFjdC10cmFuc2l0aW9uLWdyb3VwXCI6IFwiXjQuNC41XCIsXG4gICAgXCJyZW1hcmstZ2ZtXCI6IFwiXjQuMC4wXCIsXG4gICAgXCJyb2xsdXBcIjogXCJeMi43OS4xXCIsXG4gICAgXCJyb2xsdXAtcGx1Z2luLW5vZGUtYnVpbHRpbnNcIjogXCJeMi4xLjJcIixcbiAgICBcInN0b3J5Ym9va1wiOiBcIl43LjYuNFwiLFxuICAgIFwic3R5bGVkLWNvbXBvbmVudHNcIjogXCI2LjAuN1wiLFxuICAgIFwidGhlbWVwcm92aWRlci1zdG9yeWJvb2tcIjogXCJeMS44LjBcIixcbiAgICBcInRzLWplc3RcIjogXCJeMjcuMS41XCIsXG4gICAgXCJ2aXRlXCI6IFwiNC4zLjlcIixcbiAgICBcInZpdGUtcGx1Z2luLWR0c1wiOiBcIl4zLjYuNFwiLFxuICAgIFwidml0ZS10c2NvbmZpZy1wYXRoc1wiOiBcIl40LjIuMlwiXG4gIH0sXG4gIFwicGVlckRlcGVuZGVuY2llc1wiOiB7XG4gICAgXCJqcy1jb29raWVcIjogXCIqXCIsXG4gICAgXCJuZXh0LXRoZW1lc1wiOiBcIl4wLjIuMVwiLFxuICAgIFwicmVhY3RcIjogXCJeMTguMi4wXCIsXG4gICAgXCJyZWFjdC1kZXZpY2UtZGV0ZWN0XCI6IFwiKlwiLFxuICAgIFwicmVhY3QtZG9tXCI6IFwiXjE4LjIuMFwiLFxuICAgIFwicmVhY3QtcmVkdXhcIjogXCJeOC4wLjVcIixcbiAgICBcInJlYWN0LXRyYW5zaXRpb24tZ3JvdXBcIjogXCIqXCIsXG4gICAgXCJyZW1hcmstZ2ZtXCI6IFwiKlwiLFxuICAgIFwic3R5bGVkLWNvbXBvbmVudHNcIjogXCI2LjAuN1wiXG4gIH0sXG4gIFwiZGVwZW5kZW5jaWVzXCI6IHtcbiAgICBcIkBwYW5jYWtlc3dhcC9ob29rc1wiOiBcIndvcmtzcGFjZToqXCIsXG4gICAgXCJAcGFuY2FrZXN3YXAvbG9jYWxpemF0aW9uXCI6IFwid29ya3NwYWNlOipcIixcbiAgICBcIkBwb3BwZXJqcy9jb3JlXCI6IFwiXjIuMTEuOFwiLFxuICAgIFwiQHJhZGl4LXVpL3JlYWN0LWRpc21pc3NhYmxlLWxheWVyXCI6IFwiXjEuMC41XCIsXG4gICAgXCJAcmFkaXgtdWkvcmVhY3Qtc2xvdFwiOiBcIl4xLjAuMlwiLFxuICAgIFwiQHN0eWxlZC1zeXN0ZW0vc2hvdWxkLWZvcndhcmQtcHJvcFwiOiBcIl41LjEuNVwiLFxuICAgIFwiQHR5cGVzL3N0eWxlZC1zeXN0ZW1cIjogXCJeNS4xLjIyXCIsXG4gICAgXCJAdmFuaWxsYS1leHRyYWN0L2Nzc1wiOiBcIl4xLjE0LjBcIixcbiAgICBcIkB2YW5pbGxhLWV4dHJhY3QvY3NzLXV0aWxzXCI6IFwiXjAuMS4zXCIsXG4gICAgXCJAdmFuaWxsYS1leHRyYWN0L3JlY2lwZXNcIjogXCJeMC41LjFcIixcbiAgICBcIkB2YW5pbGxhLWV4dHJhY3Qvc3ByaW5rbGVzXCI6IFwiXjEuNi4xXCIsXG4gICAgXCJiaWdudW1iZXIuanNcIjogXCJeOS4xLjJcIixcbiAgICBcImNsc3hcIjogXCJeMS4yLjFcIixcbiAgICBcImNzc3R5cGVcIjogXCJeMy4xLjNcIixcbiAgICBcImRheWpzXCI6IFwiXjEuMTEuMTBcIixcbiAgICBcImRlZXBtZXJnZVwiOiBcIl40LjMuMVwiLFxuICAgIFwiZnJhbWVyLW1vdGlvblwiOiBcIjEwLjE2LjRcIixcbiAgICBcImxpZ2h0d2VpZ2h0LWNoYXJ0c1wiOiBcIl40LjEuMVwiLFxuICAgIFwibG9kYXNoXCI6IFwiXjQuMTcuMjFcIixcbiAgICBcInJlYWN0LXBvcHBlclwiOiBcIl4yLjMuMFwiLFxuICAgIFwic3R5bGVkLXN5c3RlbVwiOiBcIl41LjEuNVwiLFxuICAgIFwidHNsaWJcIjogXCJeMi42LjJcIixcbiAgICBcIndhZ21pXCI6IFwiMS40LjdcIlxuICB9LFxuICBcInB1Ymxpc2hDb25maWdcIjoge1xuICAgIFwiYWNjZXNzXCI6IFwicHVibGljXCJcbiAgfVxufVxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUF5VyxTQUFTLG9CQUFvQjtBQUN0WSxTQUFTLDRCQUE0QjtBQUNyQyxPQUFPLFNBQVM7OztBQ0ZoQjtBQUFBLEVBQ0UsTUFBUTtBQUFBLEVBQ1IsU0FBVztBQUFBLEVBQ1gsYUFBZTtBQUFBLEVBQ2YsTUFBUTtBQUFBLEVBQ1IsTUFBUTtBQUFBLEVBQ1IsUUFBVTtBQUFBLEVBQ1YsT0FBUztBQUFBLEVBQ1QsYUFBZTtBQUFBLElBQ2I7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLEVBQ0Y7QUFBQSxFQUNBLFNBQVc7QUFBQSxJQUNULGtCQUFrQjtBQUFBLElBQ2xCLEtBQUs7QUFBQSxNQUNILFFBQVU7QUFBQSxNQUNWLFNBQVc7QUFBQSxJQUNiO0FBQUEsSUFDQSxZQUFZO0FBQUEsTUFDVixRQUFVO0FBQUEsTUFDVixTQUFXO0FBQUEsSUFDYjtBQUFBLElBQ0EsZUFBZTtBQUFBLE1BQ2IsUUFBVTtBQUFBLE1BQ1YsT0FBUztBQUFBLElBQ1g7QUFBQSxJQUNBLGtCQUFrQjtBQUFBLE1BQ2hCLFFBQVU7QUFBQSxNQUNWLE9BQVM7QUFBQSxJQUNYO0FBQUEsSUFDQSx5QkFBeUI7QUFBQSxNQUN2QixRQUFVO0FBQUEsTUFDVixPQUFTO0FBQUEsSUFDWDtBQUFBLEVBQ0Y7QUFBQSxFQUNBLFlBQWM7QUFBQSxFQUNkLFNBQVc7QUFBQSxFQUNYLFNBQVc7QUFBQSxFQUNYLFNBQVc7QUFBQSxJQUNULGVBQWU7QUFBQSxJQUNmLEtBQU87QUFBQSxJQUNQLE9BQVM7QUFBQSxJQUNULE1BQVE7QUFBQSxJQUNSLGdCQUFnQjtBQUFBLElBQ2hCLGdCQUFnQjtBQUFBLElBQ2hCLFdBQWE7QUFBQSxJQUNiLG1CQUFtQjtBQUFBLElBQ25CLE1BQVE7QUFBQSxJQUNSLG1CQUFtQjtBQUFBLElBQ25CLGdCQUFrQjtBQUFBLElBQ2xCLE9BQVM7QUFBQSxJQUNULG1CQUFtQjtBQUFBLEVBQ3JCO0FBQUEsRUFDQSxpQkFBbUI7QUFBQSxJQUNqQixlQUFlO0FBQUEsSUFDZixxQkFBcUI7QUFBQSxJQUNyQix1QkFBdUI7QUFBQSxJQUN2Qix1QkFBdUI7QUFBQSxJQUN2QixzQkFBc0I7QUFBQSxJQUN0QixzQkFBc0I7QUFBQSxJQUN0Qix1QkFBdUI7QUFBQSxJQUN2Qiw2QkFBNkI7QUFBQSxJQUM3QixzQkFBc0I7QUFBQSxJQUN0Qix5QkFBeUI7QUFBQSxJQUN6Qiw0QkFBNEI7QUFBQSxJQUM1QiwrQkFBK0I7QUFBQSxJQUMvQixpQ0FBaUM7QUFBQSxJQUNqQywwQkFBMEI7QUFBQSxJQUMxQiwrQkFBK0I7QUFBQSxJQUMvQiwyQkFBMkI7QUFBQSxJQUMzQixxQkFBcUI7QUFBQSxJQUNyQiwyQkFBMkI7QUFBQSxJQUMzQixvQkFBb0I7QUFBQSxJQUNwQix5QkFBeUI7QUFBQSxJQUN6QixtQkFBbUI7QUFBQSxJQUNuQiw2QkFBNkI7QUFBQSxJQUM3QiwwQkFBMEI7QUFBQSxJQUMxQixhQUFhO0FBQUEsSUFDYixvQkFBb0I7QUFBQSxJQUNwQixpQkFBaUI7QUFBQSxJQUNqQixnQkFBZ0I7QUFBQSxJQUNoQixvQkFBb0I7QUFBQSxJQUNwQiwyQkFBMkI7QUFBQSxJQUMzQixpQ0FBaUM7QUFBQSxJQUNqQyw2Q0FBNkM7QUFBQSxJQUM3QyxnQ0FBZ0M7QUFBQSxJQUNoQyx3QkFBd0I7QUFBQSxJQUN4QixjQUFjO0FBQUEsSUFDZCxnQkFBZ0I7QUFBQSxJQUNoQixrQ0FBa0M7QUFBQSxJQUNsQyxJQUFNO0FBQUEsSUFDTixNQUFRO0FBQUEsSUFDUiwwQkFBMEI7QUFBQSxJQUMxQiwwQkFBMEI7QUFBQSxJQUMxQixhQUFhO0FBQUEsSUFDYixlQUFlO0FBQUEsSUFDZixVQUFZO0FBQUEsSUFDWixjQUFjO0FBQUEsSUFDZCxPQUFTO0FBQUEsSUFDVCxpQkFBaUI7QUFBQSxJQUNqQix1QkFBdUI7QUFBQSxJQUN2QixhQUFhO0FBQUEsSUFDYixZQUFZO0FBQUEsSUFDWixrQkFBa0I7QUFBQSxJQUNsQixlQUFlO0FBQUEsSUFDZixvQkFBb0I7QUFBQSxJQUNwQiwwQkFBMEI7QUFBQSxJQUMxQixjQUFjO0FBQUEsSUFDZCxRQUFVO0FBQUEsSUFDViwrQkFBK0I7QUFBQSxJQUMvQixXQUFhO0FBQUEsSUFDYixxQkFBcUI7QUFBQSxJQUNyQiwyQkFBMkI7QUFBQSxJQUMzQixXQUFXO0FBQUEsSUFDWCxNQUFRO0FBQUEsSUFDUixtQkFBbUI7QUFBQSxJQUNuQix1QkFBdUI7QUFBQSxFQUN6QjtBQUFBLEVBQ0Esa0JBQW9CO0FBQUEsSUFDbEIsYUFBYTtBQUFBLElBQ2IsZUFBZTtBQUFBLElBQ2YsT0FBUztBQUFBLElBQ1QsdUJBQXVCO0FBQUEsSUFDdkIsYUFBYTtBQUFBLElBQ2IsZUFBZTtBQUFBLElBQ2YsMEJBQTBCO0FBQUEsSUFDMUIsY0FBYztBQUFBLElBQ2QscUJBQXFCO0FBQUEsRUFDdkI7QUFBQSxFQUNBLGNBQWdCO0FBQUEsSUFDZCxzQkFBc0I7QUFBQSxJQUN0Qiw2QkFBNkI7QUFBQSxJQUM3QixrQkFBa0I7QUFBQSxJQUNsQixxQ0FBcUM7QUFBQSxJQUNyQyx3QkFBd0I7QUFBQSxJQUN4QixzQ0FBc0M7QUFBQSxJQUN0Qyx3QkFBd0I7QUFBQSxJQUN4Qix3QkFBd0I7QUFBQSxJQUN4Qiw4QkFBOEI7QUFBQSxJQUM5Qiw0QkFBNEI7QUFBQSxJQUM1Qiw4QkFBOEI7QUFBQSxJQUM5QixnQkFBZ0I7QUFBQSxJQUNoQixNQUFRO0FBQUEsSUFDUixTQUFXO0FBQUEsSUFDWCxPQUFTO0FBQUEsSUFDVCxXQUFhO0FBQUEsSUFDYixpQkFBaUI7QUFBQSxJQUNqQixzQkFBc0I7QUFBQSxJQUN0QixRQUFVO0FBQUEsSUFDVixnQkFBZ0I7QUFBQSxJQUNoQixpQkFBaUI7QUFBQSxJQUNqQixPQUFTO0FBQUEsSUFDVCxPQUFTO0FBQUEsRUFDWDtBQUFBLEVBQ0EsZUFBaUI7QUFBQSxJQUNmLFFBQVU7QUFBQSxFQUNaO0FBQ0Y7OztBRHhKQSxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixPQUFPO0FBQUEsSUFDTCxLQUFLO0FBQUEsTUFDSCxPQUFPO0FBQUEsTUFDUCxVQUFVO0FBQUEsTUFDVixTQUFTLENBQUMsT0FBTyxJQUFJO0FBQUEsSUFDdkI7QUFBQSxJQUNBLGVBQWU7QUFBQSxNQUNiLFVBQVUsQ0FBQyxHQUFHLE9BQU8sS0FBSyxnQkFBSSxnQkFBZ0IsR0FBRyxHQUFHLE9BQU8sS0FBSyxnQkFBSSxZQUFZLEdBQUcsUUFBUTtBQUFBLElBQzdGO0FBQUEsRUFDRjtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AscUJBQXFCO0FBQUEsTUFDbkIsYUFBYTtBQUFBLElBQ2YsQ0FBQztBQUFBLElBQ0QsSUFBSTtBQUFBLEVBQ047QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
