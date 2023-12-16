import { Breakpoint, breakpointNames } from "./breakpoints";
export declare const sprinkles: ((props: {
    display?: ("none" | "flex" | "grid" | "block" | "inline" | "inline-block" | "inline-flex" | {
        xs?: "none" | "flex" | "grid" | "block" | "inline" | "inline-block" | "inline-flex" | undefined;
        sm?: "none" | "flex" | "grid" | "block" | "inline" | "inline-block" | "inline-flex" | undefined;
        md?: "none" | "flex" | "grid" | "block" | "inline" | "inline-block" | "inline-flex" | undefined;
        lg?: "none" | "flex" | "grid" | "block" | "inline" | "inline-block" | "inline-flex" | undefined;
        xl?: "none" | "flex" | "grid" | "block" | "inline" | "inline-block" | "inline-flex" | undefined;
        xxl?: "none" | "flex" | "grid" | "block" | "inline" | "inline-block" | "inline-flex" | undefined;
    } | undefined) | import("@vanilla-extract/sprinkles").ResponsiveArray<1 | 2 | 3 | 4 | 5 | 6, "none" | "flex" | "grid" | "block" | "inline" | "inline-block" | "inline-flex" | null>;
    flexDirection?: ("row" | "column" | "column-reverse" | {
        xs?: "row" | "column" | "column-reverse" | undefined;
        sm?: "row" | "column" | "column-reverse" | undefined;
        md?: "row" | "column" | "column-reverse" | undefined;
        lg?: "row" | "column" | "column-reverse" | undefined;
        xl?: "row" | "column" | "column-reverse" | undefined;
        xxl?: "row" | "column" | "column-reverse" | undefined;
    } | undefined) | import("@vanilla-extract/sprinkles").ResponsiveArray<1 | 2 | 3 | 4 | 5 | 6, "row" | "column" | "column-reverse" | null>;
    alignItems?: ("inherit" | "center" | "end" | "stretch" | "flex-end" | "flex-start" | "start" | "baseLine" | {
        xs?: "inherit" | "center" | "end" | "stretch" | "flex-end" | "flex-start" | "start" | "baseLine" | undefined;
        sm?: "inherit" | "center" | "end" | "stretch" | "flex-end" | "flex-start" | "start" | "baseLine" | undefined;
        md?: "inherit" | "center" | "end" | "stretch" | "flex-end" | "flex-start" | "start" | "baseLine" | undefined;
        lg?: "inherit" | "center" | "end" | "stretch" | "flex-end" | "flex-start" | "start" | "baseLine" | undefined;
        xl?: "inherit" | "center" | "end" | "stretch" | "flex-end" | "flex-start" | "start" | "baseLine" | undefined;
        xxl?: "inherit" | "center" | "end" | "stretch" | "flex-end" | "flex-start" | "start" | "baseLine" | undefined;
    } | undefined) | import("@vanilla-extract/sprinkles").ResponsiveArray<1 | 2 | 3 | 4 | 5 | 6, "inherit" | "center" | "end" | "stretch" | "flex-end" | "flex-start" | "start" | "baseLine" | null>;
    alignSelf?: import("@vanilla-extract/sprinkles").ResponsiveArray<1 | 2 | 3 | 4 | 5 | 6, "center" | "stretch" | "flex-end" | "flex-start" | "start" | null> | ("center" | "stretch" | "flex-end" | "flex-start" | "start" | {
        xs?: "center" | "stretch" | "flex-end" | "flex-start" | "start" | undefined;
        sm?: "center" | "stretch" | "flex-end" | "flex-start" | "start" | undefined;
        md?: "center" | "stretch" | "flex-end" | "flex-start" | "start" | undefined;
        lg?: "center" | "stretch" | "flex-end" | "flex-start" | "start" | undefined;
        xl?: "center" | "stretch" | "flex-end" | "flex-start" | "start" | undefined;
        xxl?: "center" | "stretch" | "flex-end" | "flex-start" | "start" | undefined;
    } | undefined);
    flexWrap?: ("nowrap" | "wrap" | {
        xs?: "nowrap" | "wrap" | undefined;
        sm?: "nowrap" | "wrap" | undefined;
        md?: "nowrap" | "wrap" | undefined;
        lg?: "nowrap" | "wrap" | undefined;
        xl?: "nowrap" | "wrap" | undefined;
        xxl?: "nowrap" | "wrap" | undefined;
    } | undefined) | import("@vanilla-extract/sprinkles").ResponsiveArray<1 | 2 | 3 | 4 | 5 | 6, "nowrap" | "wrap" | null>;
    flexGrow?: (number | {
        xs?: number | undefined;
        sm?: number | undefined;
        md?: number | undefined;
        lg?: number | undefined;
        xl?: number | undefined;
        xxl?: number | undefined;
    } | undefined) | import("@vanilla-extract/sprinkles").ResponsiveArray<1 | 2 | 3 | 4 | 5 | 6, number | null>;
    overflow?: ("unset" | "scroll" | "auto" | "hidden" | {
        xs?: "unset" | "scroll" | "auto" | "hidden" | undefined;
        sm?: "unset" | "scroll" | "auto" | "hidden" | undefined;
        md?: "unset" | "scroll" | "auto" | "hidden" | undefined;
        lg?: "unset" | "scroll" | "auto" | "hidden" | undefined;
        xl?: "unset" | "scroll" | "auto" | "hidden" | undefined;
        xxl?: "unset" | "scroll" | "auto" | "hidden" | undefined;
    } | undefined) | import("@vanilla-extract/sprinkles").ResponsiveArray<1 | 2 | 3 | 4 | 5 | 6, "unset" | "scroll" | "auto" | "hidden" | null>;
    overflowY?: ("scroll" | "auto" | "hidden" | {
        xs?: "scroll" | "auto" | "hidden" | undefined;
        sm?: "scroll" | "auto" | "hidden" | undefined;
        md?: "scroll" | "auto" | "hidden" | undefined;
        lg?: "scroll" | "auto" | "hidden" | undefined;
        xl?: "scroll" | "auto" | "hidden" | undefined;
        xxl?: "scroll" | "auto" | "hidden" | undefined;
    } | undefined) | import("@vanilla-extract/sprinkles").ResponsiveArray<1 | 2 | 3 | 4 | 5 | 6, "scroll" | "auto" | "hidden" | null>;
    overflowX?: ("scroll" | "auto" | "hidden" | {
        xs?: "scroll" | "auto" | "hidden" | undefined;
        sm?: "scroll" | "auto" | "hidden" | undefined;
        md?: "scroll" | "auto" | "hidden" | undefined;
        lg?: "scroll" | "auto" | "hidden" | undefined;
        xl?: "scroll" | "auto" | "hidden" | undefined;
        xxl?: "scroll" | "auto" | "hidden" | undefined;
    } | undefined) | import("@vanilla-extract/sprinkles").ResponsiveArray<1 | 2 | 3 | 4 | 5 | 6, "scroll" | "auto" | "hidden" | null>;
    position?: ("fixed" | "absolute" | "relative" | "sticky" | {
        xs?: "fixed" | "absolute" | "relative" | "sticky" | undefined;
        sm?: "fixed" | "absolute" | "relative" | "sticky" | undefined;
        md?: "fixed" | "absolute" | "relative" | "sticky" | undefined;
        lg?: "fixed" | "absolute" | "relative" | "sticky" | undefined;
        xl?: "fixed" | "absolute" | "relative" | "sticky" | undefined;
        xxl?: "fixed" | "absolute" | "relative" | "sticky" | undefined;
    } | undefined) | import("@vanilla-extract/sprinkles").ResponsiveArray<1 | 2 | 3 | 4 | 5 | 6, "fixed" | "absolute" | "relative" | "sticky" | null>;
    textAlign?: ("center" | "left" | "right" | {
        xs?: "center" | "left" | "right" | undefined;
        sm?: "center" | "left" | "right" | undefined;
        md?: "center" | "left" | "right" | undefined;
        lg?: "center" | "left" | "right" | undefined;
        xl?: "center" | "left" | "right" | undefined;
        xxl?: "center" | "left" | "right" | undefined;
    } | undefined) | import("@vanilla-extract/sprinkles").ResponsiveArray<1 | 2 | 3 | 4 | 5 | 6, "center" | "left" | "right" | null>;
    justifyContent?: ("center" | "space-around" | "space-between" | "stretch" | "flex-end" | "flex-start" | "start" | {
        xs?: "center" | "space-around" | "space-between" | "stretch" | "flex-end" | "flex-start" | "start" | undefined;
        sm?: "center" | "space-around" | "space-between" | "stretch" | "flex-end" | "flex-start" | "start" | undefined;
        md?: "center" | "space-around" | "space-between" | "stretch" | "flex-end" | "flex-start" | "start" | undefined;
        lg?: "center" | "space-around" | "space-between" | "stretch" | "flex-end" | "flex-start" | "start" | undefined;
        xl?: "center" | "space-around" | "space-between" | "stretch" | "flex-end" | "flex-start" | "start" | undefined;
        xxl?: "center" | "space-around" | "space-between" | "stretch" | "flex-end" | "flex-start" | "start" | undefined;
    } | undefined) | import("@vanilla-extract/sprinkles").ResponsiveArray<1 | 2 | 3 | 4 | 5 | 6, "center" | "space-around" | "space-between" | "stretch" | "flex-end" | "flex-start" | "start" | null>;
    justifyItems?: ("center" | "space-around" | "space-between" | "stretch" | "flex-end" | "flex-start" | "start" | {
        xs?: "center" | "space-around" | "space-between" | "stretch" | "flex-end" | "flex-start" | "start" | undefined;
        sm?: "center" | "space-around" | "space-between" | "stretch" | "flex-end" | "flex-start" | "start" | undefined;
        md?: "center" | "space-around" | "space-between" | "stretch" | "flex-end" | "flex-start" | "start" | undefined;
        lg?: "center" | "space-around" | "space-between" | "stretch" | "flex-end" | "flex-start" | "start" | undefined;
        xl?: "center" | "space-around" | "space-between" | "stretch" | "flex-end" | "flex-start" | "start" | undefined;
        xxl?: "center" | "space-around" | "space-between" | "stretch" | "flex-end" | "flex-start" | "start" | undefined;
    } | undefined) | import("@vanilla-extract/sprinkles").ResponsiveArray<1 | 2 | 3 | 4 | 5 | 6, "center" | "space-around" | "space-between" | "stretch" | "flex-end" | "flex-start" | "start" | null>;
    justifySelf?: ("center" | "stretch" | "flex-end" | "flex-start" | "start" | {
        xs?: "center" | "stretch" | "flex-end" | "flex-start" | "start" | undefined;
        sm?: "center" | "stretch" | "flex-end" | "flex-start" | "start" | undefined;
        md?: "center" | "stretch" | "flex-end" | "flex-start" | "start" | undefined;
        lg?: "center" | "stretch" | "flex-end" | "flex-start" | "start" | undefined;
        xl?: "center" | "stretch" | "flex-end" | "flex-start" | "start" | undefined;
        xxl?: "center" | "stretch" | "flex-end" | "flex-start" | "start" | undefined;
    } | undefined) | import("@vanilla-extract/sprinkles").ResponsiveArray<1 | 2 | 3 | 4 | 5 | 6, "center" | "stretch" | "flex-end" | "flex-start" | "start" | null>;
    inset?: ("0px" | {
        xs?: "0px" | undefined;
        sm?: "0px" | undefined;
        md?: "0px" | undefined;
        lg?: "0px" | undefined;
        xl?: "0px" | undefined;
        xxl?: "0px" | undefined;
    } | undefined) | import("@vanilla-extract/sprinkles").ResponsiveArray<1 | 2 | 3 | 4 | 5 | 6, "0px" | null>;
    height?: ("0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | "auto" | "fit-content" | "100%" | "420px" | "100vh" | "screenSm" | "screenMd" | "screenLg" | "screenXl" | {
        xs?: "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | "auto" | "fit-content" | "100%" | "420px" | "100vh" | "screenSm" | "screenMd" | "screenLg" | "screenXl" | undefined;
        sm?: "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | "auto" | "fit-content" | "100%" | "420px" | "100vh" | "screenSm" | "screenMd" | "screenLg" | "screenXl" | undefined;
        md?: "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | "auto" | "fit-content" | "100%" | "420px" | "100vh" | "screenSm" | "screenMd" | "screenLg" | "screenXl" | undefined;
        lg?: "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | "auto" | "fit-content" | "100%" | "420px" | "100vh" | "screenSm" | "screenMd" | "screenLg" | "screenXl" | undefined;
        xl?: "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | "auto" | "fit-content" | "100%" | "420px" | "100vh" | "screenSm" | "screenMd" | "screenLg" | "screenXl" | undefined;
        xxl?: "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | "auto" | "fit-content" | "100%" | "420px" | "100vh" | "screenSm" | "screenMd" | "screenLg" | "screenXl" | undefined;
    } | undefined) | import("@vanilla-extract/sprinkles").ResponsiveArray<1 | 2 | 3 | 4 | 5 | 6, "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | "auto" | "fit-content" | "100%" | "420px" | "100vh" | "screenSm" | "screenMd" | "screenLg" | "screenXl" | null>;
    marginBottom?: import("@vanilla-extract/sprinkles").ResponsiveArray<1 | 2 | 3 | 4 | 5 | 6, "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | "auto" | null> | ("0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | "auto" | {
        xs?: "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | "auto" | undefined;
        sm?: "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | "auto" | undefined;
        md?: "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | "auto" | undefined;
        lg?: "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | "auto" | undefined;
        xl?: "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | "auto" | undefined;
        xxl?: "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | "auto" | undefined;
    } | undefined);
    marginLeft?: import("@vanilla-extract/sprinkles").ResponsiveArray<1 | 2 | 3 | 4 | 5 | 6, "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | "auto" | null> | ("0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | "auto" | {
        xs?: "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | "auto" | undefined;
        sm?: "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | "auto" | undefined;
        md?: "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | "auto" | undefined;
        lg?: "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | "auto" | undefined;
        xl?: "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | "auto" | undefined;
        xxl?: "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | "auto" | undefined;
    } | undefined);
    marginRight?: import("@vanilla-extract/sprinkles").ResponsiveArray<1 | 2 | 3 | 4 | 5 | 6, "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | "auto" | null> | ("0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | "auto" | {
        xs?: "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | "auto" | undefined;
        sm?: "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | "auto" | undefined;
        md?: "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | "auto" | undefined;
        lg?: "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | "auto" | undefined;
        xl?: "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | "auto" | undefined;
        xxl?: "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | "auto" | undefined;
    } | undefined);
    marginTop?: import("@vanilla-extract/sprinkles").ResponsiveArray<1 | 2 | 3 | 4 | 5 | 6, "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | "auto" | null> | ("0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | "auto" | {
        xs?: "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | "auto" | undefined;
        sm?: "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | "auto" | undefined;
        md?: "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | "auto" | undefined;
        lg?: "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | "auto" | undefined;
        xl?: "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | "auto" | undefined;
        xxl?: "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | "auto" | undefined;
    } | undefined);
    margin?: ("0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | "auto" | {
        xs?: "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | "auto" | undefined;
        sm?: "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | "auto" | undefined;
        md?: "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | "auto" | undefined;
        lg?: "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | "auto" | undefined;
        xl?: "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | "auto" | undefined;
        xxl?: "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | "auto" | undefined;
    } | undefined) | import("@vanilla-extract/sprinkles").ResponsiveArray<1 | 2 | 3 | 4 | 5 | 6, "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | "auto" | null>;
    padding?: ("0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | {
        xs?: "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | undefined;
        sm?: "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | undefined;
        md?: "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | undefined;
        lg?: "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | undefined;
        xl?: "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | undefined;
        xxl?: "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | undefined;
    } | undefined) | import("@vanilla-extract/sprinkles").ResponsiveArray<1 | 2 | 3 | 4 | 5 | 6, "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | null>;
    maxHeight?: import("@vanilla-extract/sprinkles").ResponsiveArray<1 | 2 | 3 | 4 | 5 | 6, "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | null> | ("0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | {
        xs?: "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | undefined;
        sm?: "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | undefined;
        md?: "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | undefined;
        lg?: "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | undefined;
        xl?: "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | undefined;
        xxl?: "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | undefined;
    } | undefined);
    maxWidth?: ("0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | "none" | "auto" | "fit-content" | "100%" | "420px" | "screenSm" | "screenMd" | "screenLg" | "screenXl" | {
        xs?: "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | "none" | "auto" | "fit-content" | "100%" | "420px" | "screenSm" | "screenMd" | "screenLg" | "screenXl" | undefined;
        sm?: "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | "none" | "auto" | "fit-content" | "100%" | "420px" | "screenSm" | "screenMd" | "screenLg" | "screenXl" | undefined;
        md?: "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | "none" | "auto" | "fit-content" | "100%" | "420px" | "screenSm" | "screenMd" | "screenLg" | "screenXl" | undefined;
        lg?: "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | "none" | "auto" | "fit-content" | "100%" | "420px" | "screenSm" | "screenMd" | "screenLg" | "screenXl" | undefined;
        xl?: "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | "none" | "auto" | "fit-content" | "100%" | "420px" | "screenSm" | "screenMd" | "screenLg" | "screenXl" | undefined;
        xxl?: "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | "none" | "auto" | "fit-content" | "100%" | "420px" | "screenSm" | "screenMd" | "screenLg" | "screenXl" | undefined;
    } | undefined) | import("@vanilla-extract/sprinkles").ResponsiveArray<1 | 2 | 3 | 4 | 5 | 6, "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | "none" | "auto" | "fit-content" | "100%" | "420px" | "screenSm" | "screenMd" | "screenLg" | "screenXl" | null>;
    minHeight?: import("@vanilla-extract/sprinkles").ResponsiveArray<1 | 2 | 3 | 4 | 5 | 6, "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | "auto" | "fit-content" | "100%" | "420px" | "100vh" | "screenSm" | "screenMd" | "screenLg" | "screenXl" | null> | ("0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | "auto" | "fit-content" | "100%" | "420px" | "100vh" | "screenSm" | "screenMd" | "screenLg" | "screenXl" | {
        xs?: "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | "auto" | "fit-content" | "100%" | "420px" | "100vh" | "screenSm" | "screenMd" | "screenLg" | "screenXl" | undefined;
        sm?: "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | "auto" | "fit-content" | "100%" | "420px" | "100vh" | "screenSm" | "screenMd" | "screenLg" | "screenXl" | undefined;
        md?: "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | "auto" | "fit-content" | "100%" | "420px" | "100vh" | "screenSm" | "screenMd" | "screenLg" | "screenXl" | undefined;
        lg?: "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | "auto" | "fit-content" | "100%" | "420px" | "100vh" | "screenSm" | "screenMd" | "screenLg" | "screenXl" | undefined;
        xl?: "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | "auto" | "fit-content" | "100%" | "420px" | "100vh" | "screenSm" | "screenMd" | "screenLg" | "screenXl" | undefined;
        xxl?: "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | "auto" | "fit-content" | "100%" | "420px" | "100vh" | "screenSm" | "screenMd" | "screenLg" | "screenXl" | undefined;
    } | undefined);
    minWidth?: import("@vanilla-extract/sprinkles").ResponsiveArray<1 | 2 | 3 | 4 | 5 | 6, "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | null> | ("0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | {
        xs?: "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | undefined;
        sm?: "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | undefined;
        md?: "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | undefined;
        lg?: "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | undefined;
        xl?: "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | undefined;
        xxl?: "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | undefined;
    } | undefined);
    paddingBottom?: import("@vanilla-extract/sprinkles").ResponsiveArray<1 | 2 | 3 | 4 | 5 | 6, "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | null> | ("0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | {
        xs?: "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | undefined;
        sm?: "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | undefined;
        md?: "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | undefined;
        lg?: "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | undefined;
        xl?: "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | undefined;
        xxl?: "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | undefined;
    } | undefined);
    paddingLeft?: import("@vanilla-extract/sprinkles").ResponsiveArray<1 | 2 | 3 | 4 | 5 | 6, "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | null> | ("0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | {
        xs?: "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | undefined;
        sm?: "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | undefined;
        md?: "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | undefined;
        lg?: "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | undefined;
        xl?: "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | undefined;
        xxl?: "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | undefined;
    } | undefined);
    paddingRight?: import("@vanilla-extract/sprinkles").ResponsiveArray<1 | 2 | 3 | 4 | 5 | 6, "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | null> | ("0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | {
        xs?: "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | undefined;
        sm?: "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | undefined;
        md?: "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | undefined;
        lg?: "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | undefined;
        xl?: "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | undefined;
        xxl?: "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | undefined;
    } | undefined);
    paddingTop?: import("@vanilla-extract/sprinkles").ResponsiveArray<1 | 2 | 3 | 4 | 5 | 6, "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | null> | ("0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | {
        xs?: "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | undefined;
        sm?: "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | undefined;
        md?: "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | undefined;
        lg?: "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | undefined;
        xl?: "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | undefined;
        xxl?: "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | undefined;
    } | undefined);
    fontSize?: ("12px" | "14px" | "16px" | "20px" | "10px" | "40px" | "inherit" | {
        xs?: "12px" | "14px" | "16px" | "20px" | "10px" | "40px" | "inherit" | undefined;
        sm?: "12px" | "14px" | "16px" | "20px" | "10px" | "40px" | "inherit" | undefined;
        md?: "12px" | "14px" | "16px" | "20px" | "10px" | "40px" | "inherit" | undefined;
        lg?: "12px" | "14px" | "16px" | "20px" | "10px" | "40px" | "inherit" | undefined;
        xl?: "12px" | "14px" | "16px" | "20px" | "10px" | "40px" | "inherit" | undefined;
        xxl?: "12px" | "14px" | "16px" | "20px" | "10px" | "40px" | "inherit" | undefined;
    } | undefined) | import("@vanilla-extract/sprinkles").ResponsiveArray<1 | 2 | 3 | 4 | 5 | 6, "12px" | "14px" | "16px" | "20px" | "10px" | "40px" | "inherit" | null>;
    flex?: (1 | "initial" | "none" | "auto" | {
        xs?: 1 | "initial" | "none" | "auto" | undefined;
        sm?: 1 | "initial" | "none" | "auto" | undefined;
        md?: 1 | "initial" | "none" | "auto" | undefined;
        lg?: 1 | "initial" | "none" | "auto" | undefined;
        xl?: 1 | "initial" | "none" | "auto" | undefined;
        xxl?: 1 | "initial" | "none" | "auto" | undefined;
    } | undefined) | import("@vanilla-extract/sprinkles").ResponsiveArray<1 | 2 | 3 | 4 | 5 | 6, 1 | "initial" | "none" | "auto" | null>;
    boxShadow?: ("success" | "danger" | "warning" | "tooltip" | "level1" | "active" | "focus" | "inset" | {
        xs?: "success" | "danger" | "warning" | "tooltip" | "level1" | "active" | "focus" | "inset" | undefined;
        sm?: "success" | "danger" | "warning" | "tooltip" | "level1" | "active" | "focus" | "inset" | undefined;
        md?: "success" | "danger" | "warning" | "tooltip" | "level1" | "active" | "focus" | "inset" | undefined;
        lg?: "success" | "danger" | "warning" | "tooltip" | "level1" | "active" | "focus" | "inset" | undefined;
        xl?: "success" | "danger" | "warning" | "tooltip" | "level1" | "active" | "focus" | "inset" | undefined;
        xxl?: "success" | "danger" | "warning" | "tooltip" | "level1" | "active" | "focus" | "inset" | undefined;
    } | undefined) | import("@vanilla-extract/sprinkles").ResponsiveArray<1 | 2 | 3 | 4 | 5 | 6, "success" | "danger" | "warning" | "tooltip" | "level1" | "active" | "focus" | "inset" | null>;
    width?: ("0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | "auto" | "fit-content" | "100%" | "420px" | "screenSm" | "screenMd" | "screenLg" | "screenXl" | {
        xs?: "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | "auto" | "fit-content" | "100%" | "420px" | "screenSm" | "screenMd" | "screenLg" | "screenXl" | undefined;
        sm?: "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | "auto" | "fit-content" | "100%" | "420px" | "screenSm" | "screenMd" | "screenLg" | "screenXl" | undefined;
        md?: "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | "auto" | "fit-content" | "100%" | "420px" | "screenSm" | "screenMd" | "screenLg" | "screenXl" | undefined;
        lg?: "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | "auto" | "fit-content" | "100%" | "420px" | "screenSm" | "screenMd" | "screenLg" | "screenXl" | undefined;
        xl?: "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | "auto" | "fit-content" | "100%" | "420px" | "screenSm" | "screenMd" | "screenLg" | "screenXl" | undefined;
        xxl?: "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | "auto" | "fit-content" | "100%" | "420px" | "screenSm" | "screenMd" | "screenLg" | "screenXl" | undefined;
    } | undefined) | import("@vanilla-extract/sprinkles").ResponsiveArray<1 | 2 | 3 | 4 | 5 | 6, "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | "auto" | "fit-content" | "100%" | "420px" | "screenSm" | "screenMd" | "screenLg" | "screenXl" | null>;
    zIndex?: ("modal" | "0" | "1" | "dropdown" | "auto" | "ribbon" | "40" | "20" | "10" | "30" | "50" | "75" | "99" | "100" | {
        xs?: "modal" | "0" | "1" | "dropdown" | "auto" | "ribbon" | "40" | "20" | "10" | "30" | "50" | "75" | "99" | "100" | undefined;
        sm?: "modal" | "0" | "1" | "dropdown" | "auto" | "ribbon" | "40" | "20" | "10" | "30" | "50" | "75" | "99" | "100" | undefined;
        md?: "modal" | "0" | "1" | "dropdown" | "auto" | "ribbon" | "40" | "20" | "10" | "30" | "50" | "75" | "99" | "100" | undefined;
        lg?: "modal" | "0" | "1" | "dropdown" | "auto" | "ribbon" | "40" | "20" | "10" | "30" | "50" | "75" | "99" | "100" | undefined;
        xl?: "modal" | "0" | "1" | "dropdown" | "auto" | "ribbon" | "40" | "20" | "10" | "30" | "50" | "75" | "99" | "100" | undefined;
        xxl?: "modal" | "0" | "1" | "dropdown" | "auto" | "ribbon" | "40" | "20" | "10" | "30" | "50" | "75" | "99" | "100" | undefined;
    } | undefined) | import("@vanilla-extract/sprinkles").ResponsiveArray<1 | 2 | 3 | 4 | 5 | 6, "modal" | "0" | "1" | "dropdown" | "auto" | "ribbon" | "40" | "20" | "10" | "30" | "50" | "75" | "99" | "100" | null>;
    borderTop?: import("@vanilla-extract/sprinkles").ResponsiveArray<1 | 2 | 3 | 4 | 5 | 6, "1" | null> | ("1" | {
        xs?: "1" | undefined;
        sm?: "1" | undefined;
        md?: "1" | undefined;
        lg?: "1" | undefined;
        xl?: "1" | undefined;
        xxl?: "1" | undefined;
    } | undefined);
    borderRadius?: ("small" | "card" | "8px" | "12px" | "20px" | "32px" | "0" | "default" | "circle" | {
        xs?: "small" | "card" | "8px" | "12px" | "20px" | "32px" | "0" | "default" | "circle" | undefined;
        sm?: "small" | "card" | "8px" | "12px" | "20px" | "32px" | "0" | "default" | "circle" | undefined;
        md?: "small" | "card" | "8px" | "12px" | "20px" | "32px" | "0" | "default" | "circle" | undefined;
        lg?: "small" | "card" | "8px" | "12px" | "20px" | "32px" | "0" | "default" | "circle" | undefined;
        xl?: "small" | "card" | "8px" | "12px" | "20px" | "32px" | "0" | "default" | "circle" | undefined;
        xxl?: "small" | "card" | "8px" | "12px" | "20px" | "32px" | "0" | "default" | "circle" | undefined;
    } | undefined) | import("@vanilla-extract/sprinkles").ResponsiveArray<1 | 2 | 3 | 4 | 5 | 6, "small" | "card" | "8px" | "12px" | "20px" | "32px" | "0" | "default" | "circle" | null>;
    borderTopLeftRadius?: ("small" | "card" | "8px" | "12px" | "20px" | "32px" | "0" | "default" | "circle" | {
        xs?: "small" | "card" | "8px" | "12px" | "20px" | "32px" | "0" | "default" | "circle" | undefined;
        sm?: "small" | "card" | "8px" | "12px" | "20px" | "32px" | "0" | "default" | "circle" | undefined;
        md?: "small" | "card" | "8px" | "12px" | "20px" | "32px" | "0" | "default" | "circle" | undefined;
        lg?: "small" | "card" | "8px" | "12px" | "20px" | "32px" | "0" | "default" | "circle" | undefined;
        xl?: "small" | "card" | "8px" | "12px" | "20px" | "32px" | "0" | "default" | "circle" | undefined;
        xxl?: "small" | "card" | "8px" | "12px" | "20px" | "32px" | "0" | "default" | "circle" | undefined;
    } | undefined) | import("@vanilla-extract/sprinkles").ResponsiveArray<1 | 2 | 3 | 4 | 5 | 6, "small" | "card" | "8px" | "12px" | "20px" | "32px" | "0" | "default" | "circle" | null>;
    borderBottomRightRadius?: ("small" | "card" | "8px" | "12px" | "20px" | "32px" | "0" | "default" | "circle" | {
        xs?: "small" | "card" | "8px" | "12px" | "20px" | "32px" | "0" | "default" | "circle" | undefined;
        sm?: "small" | "card" | "8px" | "12px" | "20px" | "32px" | "0" | "default" | "circle" | undefined;
        md?: "small" | "card" | "8px" | "12px" | "20px" | "32px" | "0" | "default" | "circle" | undefined;
        lg?: "small" | "card" | "8px" | "12px" | "20px" | "32px" | "0" | "default" | "circle" | undefined;
        xl?: "small" | "card" | "8px" | "12px" | "20px" | "32px" | "0" | "default" | "circle" | undefined;
        xxl?: "small" | "card" | "8px" | "12px" | "20px" | "32px" | "0" | "default" | "circle" | undefined;
    } | undefined) | import("@vanilla-extract/sprinkles").ResponsiveArray<1 | 2 | 3 | 4 | 5 | 6, "small" | "card" | "8px" | "12px" | "20px" | "32px" | "0" | "default" | "circle" | null>;
    borderTopRightRadius?: ("small" | "card" | "8px" | "12px" | "20px" | "32px" | "0" | "default" | "circle" | {
        xs?: "small" | "card" | "8px" | "12px" | "20px" | "32px" | "0" | "default" | "circle" | undefined;
        sm?: "small" | "card" | "8px" | "12px" | "20px" | "32px" | "0" | "default" | "circle" | undefined;
        md?: "small" | "card" | "8px" | "12px" | "20px" | "32px" | "0" | "default" | "circle" | undefined;
        lg?: "small" | "card" | "8px" | "12px" | "20px" | "32px" | "0" | "default" | "circle" | undefined;
        xl?: "small" | "card" | "8px" | "12px" | "20px" | "32px" | "0" | "default" | "circle" | undefined;
        xxl?: "small" | "card" | "8px" | "12px" | "20px" | "32px" | "0" | "default" | "circle" | undefined;
    } | undefined) | import("@vanilla-extract/sprinkles").ResponsiveArray<1 | 2 | 3 | 4 | 5 | 6, "small" | "card" | "8px" | "12px" | "20px" | "32px" | "0" | "default" | "circle" | null>;
    borderBottomLeftRadius?: ("small" | "card" | "8px" | "12px" | "20px" | "32px" | "0" | "default" | "circle" | {
        xs?: "small" | "card" | "8px" | "12px" | "20px" | "32px" | "0" | "default" | "circle" | undefined;
        sm?: "small" | "card" | "8px" | "12px" | "20px" | "32px" | "0" | "default" | "circle" | undefined;
        md?: "small" | "card" | "8px" | "12px" | "20px" | "32px" | "0" | "default" | "circle" | undefined;
        lg?: "small" | "card" | "8px" | "12px" | "20px" | "32px" | "0" | "default" | "circle" | undefined;
        xl?: "small" | "card" | "8px" | "12px" | "20px" | "32px" | "0" | "default" | "circle" | undefined;
        xxl?: "small" | "card" | "8px" | "12px" | "20px" | "32px" | "0" | "default" | "circle" | undefined;
    } | undefined) | import("@vanilla-extract/sprinkles").ResponsiveArray<1 | 2 | 3 | 4 | 5 | 6, "small" | "card" | "8px" | "12px" | "20px" | "32px" | "0" | "default" | "circle" | null>;
    gap?: import("@vanilla-extract/sprinkles").ResponsiveArray<1 | 2 | 3 | 4 | 5 | 6, "sm" | "md" | "lg" | "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | null> | ("sm" | "md" | "lg" | "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | {
        xs?: "sm" | "md" | "lg" | "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | undefined;
        sm?: "sm" | "md" | "lg" | "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | undefined;
        md?: "sm" | "md" | "lg" | "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | undefined;
        lg?: "sm" | "md" | "lg" | "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | undefined;
        xl?: "sm" | "md" | "lg" | "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | undefined;
        xxl?: "sm" | "md" | "lg" | "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | undefined;
    } | undefined);
    rowGap?: import("@vanilla-extract/sprinkles").ResponsiveArray<1 | 2 | 3 | 4 | 5 | 6, "sm" | "md" | "lg" | "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | null> | ("sm" | "md" | "lg" | "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | {
        xs?: "sm" | "md" | "lg" | "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | undefined;
        sm?: "sm" | "md" | "lg" | "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | undefined;
        md?: "sm" | "md" | "lg" | "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | undefined;
        lg?: "sm" | "md" | "lg" | "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | undefined;
        xl?: "sm" | "md" | "lg" | "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | undefined;
        xxl?: "sm" | "md" | "lg" | "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | undefined;
    } | undefined);
    columnGap?: ("sm" | "md" | "lg" | "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | {
        xs?: "sm" | "md" | "lg" | "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | undefined;
        sm?: "sm" | "md" | "lg" | "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | undefined;
        md?: "sm" | "md" | "lg" | "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | undefined;
        lg?: "sm" | "md" | "lg" | "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | undefined;
        xl?: "sm" | "md" | "lg" | "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | undefined;
        xxl?: "sm" | "md" | "lg" | "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | undefined;
    } | undefined) | import("@vanilla-extract/sprinkles").ResponsiveArray<1 | 2 | 3 | 4 | 5 | 6, "sm" | "md" | "lg" | "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | null>;
    gridAutoRows?: ("auto" | {
        xs?: "auto" | undefined;
        sm?: "auto" | undefined;
        md?: "auto" | undefined;
        lg?: "auto" | undefined;
        xl?: "auto" | undefined;
        xxl?: "auto" | undefined;
    } | undefined) | import("@vanilla-extract/sprinkles").ResponsiveArray<1 | 2 | 3 | 4 | 5 | 6, "auto" | null>;
    opacity?: ("0.5" | "0.6" | {
        xs?: "0.5" | "0.6" | undefined;
        sm?: "0.5" | "0.6" | undefined;
        md?: "0.5" | "0.6" | undefined;
        lg?: "0.5" | "0.6" | undefined;
        xl?: "0.5" | "0.6" | undefined;
        xxl?: "0.5" | "0.6" | undefined;
    } | undefined) | import("@vanilla-extract/sprinkles").ResponsiveArray<1 | 2 | 3 | 4 | 5 | 6, "0.5" | "0.6" | null>;
    lineHeight?: ("16px" | {
        xs?: "16px" | undefined;
        sm?: "16px" | undefined;
        md?: "16px" | undefined;
        lg?: "16px" | undefined;
        xl?: "16px" | undefined;
        xxl?: "16px" | undefined;
    } | undefined) | import("@vanilla-extract/sprinkles").ResponsiveArray<1 | 2 | 3 | 4 | 5 | 6, "16px" | null>;
    borderBottomColor?: ("success" | "warning" | "white" | "secondary" | "secondary80" | "background" | "backgroundDisabled" | "backgroundAlt" | "backgroundAlt2" | "cardBorder" | "contrast" | "dropdown" | "dropdownDeep" | "invertedContrast" | "input" | "inputSecondary" | "tertiary" | "text" | "text99" | "textDisabled" | "textSubtle" | "disabled" | "gradientBubblegum" | "gradientInverseBubblegum" | "gradientCardHeader" | "gradientBlue" | "gradientViolet" | "gradientVioletAlt" | "gradientGold" | "gradientBold" | "binance" | "overlay" | "gold" | "silver" | "bronze" | "yellow" | "failure" | "failure33" | "primary" | "primary0f" | "primary3D" | "primaryBright" | "primaryDark" | "success19" | "warning2D" | "warning33" | {
        xs?: "success" | "warning" | "white" | "secondary" | "secondary80" | "background" | "backgroundDisabled" | "backgroundAlt" | "backgroundAlt2" | "cardBorder" | "contrast" | "dropdown" | "dropdownDeep" | "invertedContrast" | "input" | "inputSecondary" | "tertiary" | "text" | "text99" | "textDisabled" | "textSubtle" | "disabled" | "gradientBubblegum" | "gradientInverseBubblegum" | "gradientCardHeader" | "gradientBlue" | "gradientViolet" | "gradientVioletAlt" | "gradientGold" | "gradientBold" | "binance" | "overlay" | "gold" | "silver" | "bronze" | "yellow" | "failure" | "failure33" | "primary" | "primary0f" | "primary3D" | "primaryBright" | "primaryDark" | "success19" | "warning2D" | "warning33" | undefined;
        sm?: "success" | "warning" | "white" | "secondary" | "secondary80" | "background" | "backgroundDisabled" | "backgroundAlt" | "backgroundAlt2" | "cardBorder" | "contrast" | "dropdown" | "dropdownDeep" | "invertedContrast" | "input" | "inputSecondary" | "tertiary" | "text" | "text99" | "textDisabled" | "textSubtle" | "disabled" | "gradientBubblegum" | "gradientInverseBubblegum" | "gradientCardHeader" | "gradientBlue" | "gradientViolet" | "gradientVioletAlt" | "gradientGold" | "gradientBold" | "binance" | "overlay" | "gold" | "silver" | "bronze" | "yellow" | "failure" | "failure33" | "primary" | "primary0f" | "primary3D" | "primaryBright" | "primaryDark" | "success19" | "warning2D" | "warning33" | undefined;
        md?: "success" | "warning" | "white" | "secondary" | "secondary80" | "background" | "backgroundDisabled" | "backgroundAlt" | "backgroundAlt2" | "cardBorder" | "contrast" | "dropdown" | "dropdownDeep" | "invertedContrast" | "input" | "inputSecondary" | "tertiary" | "text" | "text99" | "textDisabled" | "textSubtle" | "disabled" | "gradientBubblegum" | "gradientInverseBubblegum" | "gradientCardHeader" | "gradientBlue" | "gradientViolet" | "gradientVioletAlt" | "gradientGold" | "gradientBold" | "binance" | "overlay" | "gold" | "silver" | "bronze" | "yellow" | "failure" | "failure33" | "primary" | "primary0f" | "primary3D" | "primaryBright" | "primaryDark" | "success19" | "warning2D" | "warning33" | undefined;
        lg?: "success" | "warning" | "white" | "secondary" | "secondary80" | "background" | "backgroundDisabled" | "backgroundAlt" | "backgroundAlt2" | "cardBorder" | "contrast" | "dropdown" | "dropdownDeep" | "invertedContrast" | "input" | "inputSecondary" | "tertiary" | "text" | "text99" | "textDisabled" | "textSubtle" | "disabled" | "gradientBubblegum" | "gradientInverseBubblegum" | "gradientCardHeader" | "gradientBlue" | "gradientViolet" | "gradientVioletAlt" | "gradientGold" | "gradientBold" | "binance" | "overlay" | "gold" | "silver" | "bronze" | "yellow" | "failure" | "failure33" | "primary" | "primary0f" | "primary3D" | "primaryBright" | "primaryDark" | "success19" | "warning2D" | "warning33" | undefined;
        xl?: "success" | "warning" | "white" | "secondary" | "secondary80" | "background" | "backgroundDisabled" | "backgroundAlt" | "backgroundAlt2" | "cardBorder" | "contrast" | "dropdown" | "dropdownDeep" | "invertedContrast" | "input" | "inputSecondary" | "tertiary" | "text" | "text99" | "textDisabled" | "textSubtle" | "disabled" | "gradientBubblegum" | "gradientInverseBubblegum" | "gradientCardHeader" | "gradientBlue" | "gradientViolet" | "gradientVioletAlt" | "gradientGold" | "gradientBold" | "binance" | "overlay" | "gold" | "silver" | "bronze" | "yellow" | "failure" | "failure33" | "primary" | "primary0f" | "primary3D" | "primaryBright" | "primaryDark" | "success19" | "warning2D" | "warning33" | undefined;
        xxl?: "success" | "warning" | "white" | "secondary" | "secondary80" | "background" | "backgroundDisabled" | "backgroundAlt" | "backgroundAlt2" | "cardBorder" | "contrast" | "dropdown" | "dropdownDeep" | "invertedContrast" | "input" | "inputSecondary" | "tertiary" | "text" | "text99" | "textDisabled" | "textSubtle" | "disabled" | "gradientBubblegum" | "gradientInverseBubblegum" | "gradientCardHeader" | "gradientBlue" | "gradientViolet" | "gradientVioletAlt" | "gradientGold" | "gradientBold" | "binance" | "overlay" | "gold" | "silver" | "bronze" | "yellow" | "failure" | "failure33" | "primary" | "primary0f" | "primary3D" | "primaryBright" | "primaryDark" | "success19" | "warning2D" | "warning33" | undefined;
    } | undefined) | import("@vanilla-extract/sprinkles").ResponsiveArray<1 | 2 | 3 | 4 | 5 | 6, "success" | "warning" | "white" | "secondary" | "secondary80" | "background" | "backgroundDisabled" | "backgroundAlt" | "backgroundAlt2" | "cardBorder" | "contrast" | "dropdown" | "dropdownDeep" | "invertedContrast" | "input" | "inputSecondary" | "tertiary" | "text" | "text99" | "textDisabled" | "textSubtle" | "disabled" | "gradientBubblegum" | "gradientInverseBubblegum" | "gradientCardHeader" | "gradientBlue" | "gradientViolet" | "gradientVioletAlt" | "gradientGold" | "gradientBold" | "binance" | "overlay" | "gold" | "silver" | "bronze" | "yellow" | "failure" | "failure33" | "primary" | "primary0f" | "primary3D" | "primaryBright" | "primaryDark" | "success19" | "warning2D" | "warning33" | null>;
    border?: ("1" | {
        xs?: "1" | undefined;
        sm?: "1" | undefined;
        md?: "1" | undefined;
        lg?: "1" | undefined;
        xl?: "1" | undefined;
        xxl?: "1" | undefined;
    } | undefined) | import("@vanilla-extract/sprinkles").ResponsiveArray<1 | 2 | 3 | 4 | 5 | 6, "1" | null>;
    borderBottom?: import("@vanilla-extract/sprinkles").ResponsiveArray<1 | 2 | 3 | 4 | 5 | 6, "1" | null> | ("1" | {
        xs?: "1" | undefined;
        sm?: "1" | undefined;
        md?: "1" | undefined;
        lg?: "1" | undefined;
        xl?: "1" | undefined;
        xxl?: "1" | undefined;
    } | undefined);
    borderLeftRadius?: ("small" | "card" | "8px" | "12px" | "20px" | "32px" | "0" | "default" | "circle" | {
        xs?: "small" | "card" | "8px" | "12px" | "20px" | "32px" | "0" | "default" | "circle" | undefined;
        sm?: "small" | "card" | "8px" | "12px" | "20px" | "32px" | "0" | "default" | "circle" | undefined;
        md?: "small" | "card" | "8px" | "12px" | "20px" | "32px" | "0" | "default" | "circle" | undefined;
        lg?: "small" | "card" | "8px" | "12px" | "20px" | "32px" | "0" | "default" | "circle" | undefined;
        xl?: "small" | "card" | "8px" | "12px" | "20px" | "32px" | "0" | "default" | "circle" | undefined;
        xxl?: "small" | "card" | "8px" | "12px" | "20px" | "32px" | "0" | "default" | "circle" | undefined;
    } | undefined) | import("@vanilla-extract/sprinkles").ResponsiveArray<1 | 2 | 3 | 4 | 5 | 6, "small" | "card" | "8px" | "12px" | "20px" | "32px" | "0" | "default" | "circle" | null>;
    borderRightRadius?: ("small" | "card" | "8px" | "12px" | "20px" | "32px" | "0" | "default" | "circle" | {
        xs?: "small" | "card" | "8px" | "12px" | "20px" | "32px" | "0" | "default" | "circle" | undefined;
        sm?: "small" | "card" | "8px" | "12px" | "20px" | "32px" | "0" | "default" | "circle" | undefined;
        md?: "small" | "card" | "8px" | "12px" | "20px" | "32px" | "0" | "default" | "circle" | undefined;
        lg?: "small" | "card" | "8px" | "12px" | "20px" | "32px" | "0" | "default" | "circle" | undefined;
        xl?: "small" | "card" | "8px" | "12px" | "20px" | "32px" | "0" | "default" | "circle" | undefined;
        xxl?: "small" | "card" | "8px" | "12px" | "20px" | "32px" | "0" | "default" | "circle" | undefined;
    } | undefined) | import("@vanilla-extract/sprinkles").ResponsiveArray<1 | 2 | 3 | 4 | 5 | 6, "small" | "card" | "8px" | "12px" | "20px" | "32px" | "0" | "default" | "circle" | null>;
    borderTopRadius?: ("small" | "card" | "8px" | "12px" | "20px" | "32px" | "0" | "default" | "circle" | {
        xs?: "small" | "card" | "8px" | "12px" | "20px" | "32px" | "0" | "default" | "circle" | undefined;
        sm?: "small" | "card" | "8px" | "12px" | "20px" | "32px" | "0" | "default" | "circle" | undefined;
        md?: "small" | "card" | "8px" | "12px" | "20px" | "32px" | "0" | "default" | "circle" | undefined;
        lg?: "small" | "card" | "8px" | "12px" | "20px" | "32px" | "0" | "default" | "circle" | undefined;
        xl?: "small" | "card" | "8px" | "12px" | "20px" | "32px" | "0" | "default" | "circle" | undefined;
        xxl?: "small" | "card" | "8px" | "12px" | "20px" | "32px" | "0" | "default" | "circle" | undefined;
    } | undefined) | import("@vanilla-extract/sprinkles").ResponsiveArray<1 | 2 | 3 | 4 | 5 | 6, "small" | "card" | "8px" | "12px" | "20px" | "32px" | "0" | "default" | "circle" | null>;
    borderBottomRadius?: ("small" | "card" | "8px" | "12px" | "20px" | "32px" | "0" | "default" | "circle" | {
        xs?: "small" | "card" | "8px" | "12px" | "20px" | "32px" | "0" | "default" | "circle" | undefined;
        sm?: "small" | "card" | "8px" | "12px" | "20px" | "32px" | "0" | "default" | "circle" | undefined;
        md?: "small" | "card" | "8px" | "12px" | "20px" | "32px" | "0" | "default" | "circle" | undefined;
        lg?: "small" | "card" | "8px" | "12px" | "20px" | "32px" | "0" | "default" | "circle" | undefined;
        xl?: "small" | "card" | "8px" | "12px" | "20px" | "32px" | "0" | "default" | "circle" | undefined;
        xxl?: "small" | "card" | "8px" | "12px" | "20px" | "32px" | "0" | "default" | "circle" | undefined;
    } | undefined) | import("@vanilla-extract/sprinkles").ResponsiveArray<1 | 2 | 3 | 4 | 5 | 6, "small" | "card" | "8px" | "12px" | "20px" | "32px" | "0" | "default" | "circle" | null>;
    mt?: import("@vanilla-extract/sprinkles").ResponsiveArray<1 | 2 | 3 | 4 | 5 | 6, "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | "auto" | null> | ("0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | "auto" | {
        xs?: "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | "auto" | undefined;
        sm?: "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | "auto" | undefined;
        md?: "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | "auto" | undefined;
        lg?: "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | "auto" | undefined;
        xl?: "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | "auto" | undefined;
        xxl?: "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | "auto" | undefined;
    } | undefined);
    mb?: import("@vanilla-extract/sprinkles").ResponsiveArray<1 | 2 | 3 | 4 | 5 | 6, "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | "auto" | null> | ("0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | "auto" | {
        xs?: "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | "auto" | undefined;
        sm?: "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | "auto" | undefined;
        md?: "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | "auto" | undefined;
        lg?: "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | "auto" | undefined;
        xl?: "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | "auto" | undefined;
        xxl?: "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | "auto" | undefined;
    } | undefined);
    m?: ("0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | "auto" | {
        xs?: "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | "auto" | undefined;
        sm?: "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | "auto" | undefined;
        md?: "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | "auto" | undefined;
        lg?: "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | "auto" | undefined;
        xl?: "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | "auto" | undefined;
        xxl?: "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | "auto" | undefined;
    } | undefined) | import("@vanilla-extract/sprinkles").ResponsiveArray<1 | 2 | 3 | 4 | 5 | 6, "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | "auto" | null>;
    ml?: import("@vanilla-extract/sprinkles").ResponsiveArray<1 | 2 | 3 | 4 | 5 | 6, "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | "auto" | null> | ("0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | "auto" | {
        xs?: "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | "auto" | undefined;
        sm?: "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | "auto" | undefined;
        md?: "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | "auto" | undefined;
        lg?: "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | "auto" | undefined;
        xl?: "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | "auto" | undefined;
        xxl?: "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | "auto" | undefined;
    } | undefined);
    mr?: import("@vanilla-extract/sprinkles").ResponsiveArray<1 | 2 | 3 | 4 | 5 | 6, "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | "auto" | null> | ("0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | "auto" | {
        xs?: "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | "auto" | undefined;
        sm?: "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | "auto" | undefined;
        md?: "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | "auto" | undefined;
        lg?: "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | "auto" | undefined;
        xl?: "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | "auto" | undefined;
        xxl?: "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | "auto" | undefined;
    } | undefined);
    marginX?: import("@vanilla-extract/sprinkles").ResponsiveArray<1 | 2 | 3 | 4 | 5 | 6, "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | "auto" | null> | ("0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | "auto" | {
        xs?: "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | "auto" | undefined;
        sm?: "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | "auto" | undefined;
        md?: "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | "auto" | undefined;
        lg?: "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | "auto" | undefined;
        xl?: "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | "auto" | undefined;
        xxl?: "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | "auto" | undefined;
    } | undefined);
    mx?: import("@vanilla-extract/sprinkles").ResponsiveArray<1 | 2 | 3 | 4 | 5 | 6, "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | "auto" | null> | ("0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | "auto" | {
        xs?: "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | "auto" | undefined;
        sm?: "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | "auto" | undefined;
        md?: "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | "auto" | undefined;
        lg?: "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | "auto" | undefined;
        xl?: "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | "auto" | undefined;
        xxl?: "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | "auto" | undefined;
    } | undefined);
    marginY?: import("@vanilla-extract/sprinkles").ResponsiveArray<1 | 2 | 3 | 4 | 5 | 6, "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | "auto" | null> | ("0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | "auto" | {
        xs?: "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | "auto" | undefined;
        sm?: "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | "auto" | undefined;
        md?: "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | "auto" | undefined;
        lg?: "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | "auto" | undefined;
        xl?: "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | "auto" | undefined;
        xxl?: "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | "auto" | undefined;
    } | undefined);
    my?: import("@vanilla-extract/sprinkles").ResponsiveArray<1 | 2 | 3 | 4 | 5 | 6, "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | "auto" | null> | ("0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | "auto" | {
        xs?: "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | "auto" | undefined;
        sm?: "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | "auto" | undefined;
        md?: "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | "auto" | undefined;
        lg?: "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | "auto" | undefined;
        xl?: "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | "auto" | undefined;
        xxl?: "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | "auto" | undefined;
    } | undefined);
    pl?: import("@vanilla-extract/sprinkles").ResponsiveArray<1 | 2 | 3 | 4 | 5 | 6, "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | null> | ("0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | {
        xs?: "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | undefined;
        sm?: "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | undefined;
        md?: "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | undefined;
        lg?: "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | undefined;
        xl?: "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | undefined;
        xxl?: "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | undefined;
    } | undefined);
    pr?: import("@vanilla-extract/sprinkles").ResponsiveArray<1 | 2 | 3 | 4 | 5 | 6, "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | null> | ("0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | {
        xs?: "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | undefined;
        sm?: "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | undefined;
        md?: "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | undefined;
        lg?: "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | undefined;
        xl?: "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | undefined;
        xxl?: "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | undefined;
    } | undefined);
    pt?: import("@vanilla-extract/sprinkles").ResponsiveArray<1 | 2 | 3 | 4 | 5 | 6, "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | null> | ("0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | {
        xs?: "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | undefined;
        sm?: "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | undefined;
        md?: "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | undefined;
        lg?: "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | undefined;
        xl?: "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | undefined;
        xxl?: "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | undefined;
    } | undefined);
    pb?: import("@vanilla-extract/sprinkles").ResponsiveArray<1 | 2 | 3 | 4 | 5 | 6, "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | null> | ("0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | {
        xs?: "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | undefined;
        sm?: "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | undefined;
        md?: "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | undefined;
        lg?: "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | undefined;
        xl?: "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | undefined;
        xxl?: "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | undefined;
    } | undefined);
    p?: ("0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | {
        xs?: "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | undefined;
        sm?: "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | undefined;
        md?: "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | undefined;
        lg?: "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | undefined;
        xl?: "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | undefined;
        xxl?: "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | undefined;
    } | undefined) | import("@vanilla-extract/sprinkles").ResponsiveArray<1 | 2 | 3 | 4 | 5 | 6, "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | null>;
    paddingX?: import("@vanilla-extract/sprinkles").ResponsiveArray<1 | 2 | 3 | 4 | 5 | 6, "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | null> | ("0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | {
        xs?: "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | undefined;
        sm?: "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | undefined;
        md?: "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | undefined;
        lg?: "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | undefined;
        xl?: "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | undefined;
        xxl?: "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | undefined;
    } | undefined);
    px?: import("@vanilla-extract/sprinkles").ResponsiveArray<1 | 2 | 3 | 4 | 5 | 6, "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | null> | ("0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | {
        xs?: "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | undefined;
        sm?: "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | undefined;
        md?: "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | undefined;
        lg?: "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | undefined;
        xl?: "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | undefined;
        xxl?: "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | undefined;
    } | undefined);
    paddingY?: import("@vanilla-extract/sprinkles").ResponsiveArray<1 | 2 | 3 | 4 | 5 | 6, "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | null> | ("0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | {
        xs?: "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | undefined;
        sm?: "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | undefined;
        md?: "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | undefined;
        lg?: "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | undefined;
        xl?: "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | undefined;
        xxl?: "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | undefined;
    } | undefined);
    py?: import("@vanilla-extract/sprinkles").ResponsiveArray<1 | 2 | 3 | 4 | 5 | 6, "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | null> | ("0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | {
        xs?: "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | undefined;
        sm?: "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | undefined;
        md?: "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | undefined;
        lg?: "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | undefined;
        xl?: "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | undefined;
        xxl?: "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | undefined;
    } | undefined);
    size?: import("@vanilla-extract/sprinkles").ResponsiveArray<1 | 2 | 3 | 4 | 5 | 6, "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | "auto" | "fit-content" | "100%" | "420px" | "screenSm" | "screenMd" | "screenLg" | "screenXl" | null> | ("0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | "auto" | "fit-content" | "100%" | "420px" | "screenSm" | "screenMd" | "screenLg" | "screenXl" | {
        xs?: "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | "auto" | "fit-content" | "100%" | "420px" | "screenSm" | "screenMd" | "screenLg" | "screenXl" | undefined;
        sm?: "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | "auto" | "fit-content" | "100%" | "420px" | "screenSm" | "screenMd" | "screenLg" | "screenXl" | undefined;
        md?: "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | "auto" | "fit-content" | "100%" | "420px" | "screenSm" | "screenMd" | "screenLg" | "screenXl" | undefined;
        lg?: "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | "auto" | "fit-content" | "100%" | "420px" | "screenSm" | "screenMd" | "screenLg" | "screenXl" | undefined;
        xl?: "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | "auto" | "fit-content" | "100%" | "420px" | "screenSm" | "screenMd" | "screenLg" | "screenXl" | undefined;
        xxl?: "0px" | "1rem" | "1px" | "2px" | "6px" | "4px" | "8px" | "12px" | "14px" | "16px" | "20px" | "24px" | "32px" | "48px" | "56px" | "64px" | "auto" | "fit-content" | "100%" | "420px" | "screenSm" | "screenMd" | "screenLg" | "screenXl" | undefined;
    } | undefined);
} & {
    isolation?: "isolate" | undefined;
    objectFit?: "none" | "contain" | "cover" | undefined;
    pointerEvents?: "none" | undefined;
    textTransform?: "capitalize" | "lowercase" | "uppercase" | undefined;
    cursor?: "default" | "not-allowed" | "pointer" | undefined;
    visibility?: "hidden" | "visible" | undefined;
    whiteSpace?: "normal" | "pre" | "nowrap" | "pre-line" | "pre-wrap" | undefined;
    wordBreak?: "break-word" | undefined;
    wordWrap?: "normal" | "break-word" | undefined;
} & {
    background?: "success" | "warning" | "white" | "secondary" | "secondary80" | "background" | "backgroundDisabled" | "backgroundAlt" | "backgroundAlt2" | "cardBorder" | "contrast" | "dropdown" | "dropdownDeep" | "invertedContrast" | "input" | "inputSecondary" | "tertiary" | "text" | "text99" | "textDisabled" | "textSubtle" | "disabled" | "gradientBubblegum" | "gradientInverseBubblegum" | "gradientCardHeader" | "gradientBlue" | "gradientViolet" | "gradientVioletAlt" | "gradientGold" | "gradientBold" | "binance" | "overlay" | "gold" | "silver" | "bronze" | "yellow" | "failure" | "failure33" | "primary" | "primary0f" | "primary3D" | "primaryBright" | "primaryDark" | "success19" | "warning2D" | "warning33" | {
        base?: "success" | "warning" | "white" | "secondary" | "secondary80" | "background" | "backgroundDisabled" | "backgroundAlt" | "backgroundAlt2" | "cardBorder" | "contrast" | "dropdown" | "dropdownDeep" | "invertedContrast" | "input" | "inputSecondary" | "tertiary" | "text" | "text99" | "textDisabled" | "textSubtle" | "disabled" | "gradientBubblegum" | "gradientInverseBubblegum" | "gradientCardHeader" | "gradientBlue" | "gradientViolet" | "gradientVioletAlt" | "gradientGold" | "gradientBold" | "binance" | "overlay" | "gold" | "silver" | "bronze" | "yellow" | "failure" | "failure33" | "primary" | "primary0f" | "primary3D" | "primaryBright" | "primaryDark" | "success19" | "warning2D" | "warning33" | undefined;
        hover?: "success" | "warning" | "white" | "secondary" | "secondary80" | "background" | "backgroundDisabled" | "backgroundAlt" | "backgroundAlt2" | "cardBorder" | "contrast" | "dropdown" | "dropdownDeep" | "invertedContrast" | "input" | "inputSecondary" | "tertiary" | "text" | "text99" | "textDisabled" | "textSubtle" | "disabled" | "gradientBubblegum" | "gradientInverseBubblegum" | "gradientCardHeader" | "gradientBlue" | "gradientViolet" | "gradientVioletAlt" | "gradientGold" | "gradientBold" | "binance" | "overlay" | "gold" | "silver" | "bronze" | "yellow" | "failure" | "failure33" | "primary" | "primary0f" | "primary3D" | "primaryBright" | "primaryDark" | "success19" | "warning2D" | "warning33" | undefined;
        focus?: "success" | "warning" | "white" | "secondary" | "secondary80" | "background" | "backgroundDisabled" | "backgroundAlt" | "backgroundAlt2" | "cardBorder" | "contrast" | "dropdown" | "dropdownDeep" | "invertedContrast" | "input" | "inputSecondary" | "tertiary" | "text" | "text99" | "textDisabled" | "textSubtle" | "disabled" | "gradientBubblegum" | "gradientInverseBubblegum" | "gradientCardHeader" | "gradientBlue" | "gradientViolet" | "gradientVioletAlt" | "gradientGold" | "gradientBold" | "binance" | "overlay" | "gold" | "silver" | "bronze" | "yellow" | "failure" | "failure33" | "primary" | "primary0f" | "primary3D" | "primaryBright" | "primaryDark" | "success19" | "warning2D" | "warning33" | undefined;
        active?: "success" | "warning" | "white" | "secondary" | "secondary80" | "background" | "backgroundDisabled" | "backgroundAlt" | "backgroundAlt2" | "cardBorder" | "contrast" | "dropdown" | "dropdownDeep" | "invertedContrast" | "input" | "inputSecondary" | "tertiary" | "text" | "text99" | "textDisabled" | "textSubtle" | "disabled" | "gradientBubblegum" | "gradientInverseBubblegum" | "gradientCardHeader" | "gradientBlue" | "gradientViolet" | "gradientVioletAlt" | "gradientGold" | "gradientBold" | "binance" | "overlay" | "gold" | "silver" | "bronze" | "yellow" | "failure" | "failure33" | "primary" | "primary0f" | "primary3D" | "primaryBright" | "primaryDark" | "success19" | "warning2D" | "warning33" | undefined;
    } | undefined;
    backgroundColor?: "success" | "warning" | "white" | "secondary" | "secondary80" | "background" | "backgroundDisabled" | "backgroundAlt" | "backgroundAlt2" | "cardBorder" | "contrast" | "dropdown" | "dropdownDeep" | "invertedContrast" | "input" | "inputSecondary" | "tertiary" | "text" | "text99" | "textDisabled" | "textSubtle" | "disabled" | "gradientBubblegum" | "gradientInverseBubblegum" | "gradientCardHeader" | "gradientBlue" | "gradientViolet" | "gradientVioletAlt" | "gradientGold" | "gradientBold" | "binance" | "overlay" | "gold" | "silver" | "bronze" | "yellow" | "failure" | "failure33" | "primary" | "primary0f" | "primary3D" | "primaryBright" | "primaryDark" | "success19" | "warning2D" | "warning33" | {
        base?: "success" | "warning" | "white" | "secondary" | "secondary80" | "background" | "backgroundDisabled" | "backgroundAlt" | "backgroundAlt2" | "cardBorder" | "contrast" | "dropdown" | "dropdownDeep" | "invertedContrast" | "input" | "inputSecondary" | "tertiary" | "text" | "text99" | "textDisabled" | "textSubtle" | "disabled" | "gradientBubblegum" | "gradientInverseBubblegum" | "gradientCardHeader" | "gradientBlue" | "gradientViolet" | "gradientVioletAlt" | "gradientGold" | "gradientBold" | "binance" | "overlay" | "gold" | "silver" | "bronze" | "yellow" | "failure" | "failure33" | "primary" | "primary0f" | "primary3D" | "primaryBright" | "primaryDark" | "success19" | "warning2D" | "warning33" | undefined;
        hover?: "success" | "warning" | "white" | "secondary" | "secondary80" | "background" | "backgroundDisabled" | "backgroundAlt" | "backgroundAlt2" | "cardBorder" | "contrast" | "dropdown" | "dropdownDeep" | "invertedContrast" | "input" | "inputSecondary" | "tertiary" | "text" | "text99" | "textDisabled" | "textSubtle" | "disabled" | "gradientBubblegum" | "gradientInverseBubblegum" | "gradientCardHeader" | "gradientBlue" | "gradientViolet" | "gradientVioletAlt" | "gradientGold" | "gradientBold" | "binance" | "overlay" | "gold" | "silver" | "bronze" | "yellow" | "failure" | "failure33" | "primary" | "primary0f" | "primary3D" | "primaryBright" | "primaryDark" | "success19" | "warning2D" | "warning33" | undefined;
        focus?: "success" | "warning" | "white" | "secondary" | "secondary80" | "background" | "backgroundDisabled" | "backgroundAlt" | "backgroundAlt2" | "cardBorder" | "contrast" | "dropdown" | "dropdownDeep" | "invertedContrast" | "input" | "inputSecondary" | "tertiary" | "text" | "text99" | "textDisabled" | "textSubtle" | "disabled" | "gradientBubblegum" | "gradientInverseBubblegum" | "gradientCardHeader" | "gradientBlue" | "gradientViolet" | "gradientVioletAlt" | "gradientGold" | "gradientBold" | "binance" | "overlay" | "gold" | "silver" | "bronze" | "yellow" | "failure" | "failure33" | "primary" | "primary0f" | "primary3D" | "primaryBright" | "primaryDark" | "success19" | "warning2D" | "warning33" | undefined;
        active?: "success" | "warning" | "white" | "secondary" | "secondary80" | "background" | "backgroundDisabled" | "backgroundAlt" | "backgroundAlt2" | "cardBorder" | "contrast" | "dropdown" | "dropdownDeep" | "invertedContrast" | "input" | "inputSecondary" | "tertiary" | "text" | "text99" | "textDisabled" | "textSubtle" | "disabled" | "gradientBubblegum" | "gradientInverseBubblegum" | "gradientCardHeader" | "gradientBlue" | "gradientViolet" | "gradientVioletAlt" | "gradientGold" | "gradientBold" | "binance" | "overlay" | "gold" | "silver" | "bronze" | "yellow" | "failure" | "failure33" | "primary" | "primary0f" | "primary3D" | "primaryBright" | "primaryDark" | "success19" | "warning2D" | "warning33" | undefined;
    } | undefined;
    borderColor?: "success" | "warning" | "white" | "secondary" | "secondary80" | "background" | "backgroundDisabled" | "backgroundAlt" | "backgroundAlt2" | "cardBorder" | "contrast" | "dropdown" | "dropdownDeep" | "invertedContrast" | "input" | "inputSecondary" | "tertiary" | "text" | "text99" | "textDisabled" | "textSubtle" | "disabled" | "gradientBubblegum" | "gradientInverseBubblegum" | "gradientCardHeader" | "gradientBlue" | "gradientViolet" | "gradientVioletAlt" | "gradientGold" | "gradientBold" | "binance" | "overlay" | "gold" | "silver" | "bronze" | "yellow" | "failure" | "failure33" | "primary" | "primary0f" | "primary3D" | "primaryBright" | "primaryDark" | "success19" | "warning2D" | "warning33" | {
        base?: "success" | "warning" | "white" | "secondary" | "secondary80" | "background" | "backgroundDisabled" | "backgroundAlt" | "backgroundAlt2" | "cardBorder" | "contrast" | "dropdown" | "dropdownDeep" | "invertedContrast" | "input" | "inputSecondary" | "tertiary" | "text" | "text99" | "textDisabled" | "textSubtle" | "disabled" | "gradientBubblegum" | "gradientInverseBubblegum" | "gradientCardHeader" | "gradientBlue" | "gradientViolet" | "gradientVioletAlt" | "gradientGold" | "gradientBold" | "binance" | "overlay" | "gold" | "silver" | "bronze" | "yellow" | "failure" | "failure33" | "primary" | "primary0f" | "primary3D" | "primaryBright" | "primaryDark" | "success19" | "warning2D" | "warning33" | undefined;
        hover?: "success" | "warning" | "white" | "secondary" | "secondary80" | "background" | "backgroundDisabled" | "backgroundAlt" | "backgroundAlt2" | "cardBorder" | "contrast" | "dropdown" | "dropdownDeep" | "invertedContrast" | "input" | "inputSecondary" | "tertiary" | "text" | "text99" | "textDisabled" | "textSubtle" | "disabled" | "gradientBubblegum" | "gradientInverseBubblegum" | "gradientCardHeader" | "gradientBlue" | "gradientViolet" | "gradientVioletAlt" | "gradientGold" | "gradientBold" | "binance" | "overlay" | "gold" | "silver" | "bronze" | "yellow" | "failure" | "failure33" | "primary" | "primary0f" | "primary3D" | "primaryBright" | "primaryDark" | "success19" | "warning2D" | "warning33" | undefined;
        focus?: "success" | "warning" | "white" | "secondary" | "secondary80" | "background" | "backgroundDisabled" | "backgroundAlt" | "backgroundAlt2" | "cardBorder" | "contrast" | "dropdown" | "dropdownDeep" | "invertedContrast" | "input" | "inputSecondary" | "tertiary" | "text" | "text99" | "textDisabled" | "textSubtle" | "disabled" | "gradientBubblegum" | "gradientInverseBubblegum" | "gradientCardHeader" | "gradientBlue" | "gradientViolet" | "gradientVioletAlt" | "gradientGold" | "gradientBold" | "binance" | "overlay" | "gold" | "silver" | "bronze" | "yellow" | "failure" | "failure33" | "primary" | "primary0f" | "primary3D" | "primaryBright" | "primaryDark" | "success19" | "warning2D" | "warning33" | undefined;
        active?: "success" | "warning" | "white" | "secondary" | "secondary80" | "background" | "backgroundDisabled" | "backgroundAlt" | "backgroundAlt2" | "cardBorder" | "contrast" | "dropdown" | "dropdownDeep" | "invertedContrast" | "input" | "inputSecondary" | "tertiary" | "text" | "text99" | "textDisabled" | "textSubtle" | "disabled" | "gradientBubblegum" | "gradientInverseBubblegum" | "gradientCardHeader" | "gradientBlue" | "gradientViolet" | "gradientVioletAlt" | "gradientGold" | "gradientBold" | "binance" | "overlay" | "gold" | "silver" | "bronze" | "yellow" | "failure" | "failure33" | "primary" | "primary0f" | "primary3D" | "primaryBright" | "primaryDark" | "success19" | "warning2D" | "warning33" | undefined;
    } | undefined;
    color?: "success" | "warning" | "white" | "secondary" | "secondary80" | "background" | "backgroundDisabled" | "backgroundAlt" | "backgroundAlt2" | "cardBorder" | "contrast" | "dropdown" | "dropdownDeep" | "invertedContrast" | "input" | "inputSecondary" | "tertiary" | "text" | "text99" | "textDisabled" | "textSubtle" | "disabled" | "gradientBubblegum" | "gradientInverseBubblegum" | "gradientCardHeader" | "gradientBlue" | "gradientViolet" | "gradientVioletAlt" | "gradientGold" | "gradientBold" | "binance" | "overlay" | "gold" | "silver" | "bronze" | "yellow" | "failure" | "failure33" | "primary" | "primary0f" | "primary3D" | "primaryBright" | "primaryDark" | "success19" | "warning2D" | "warning33" | {
        base?: "success" | "warning" | "white" | "secondary" | "secondary80" | "background" | "backgroundDisabled" | "backgroundAlt" | "backgroundAlt2" | "cardBorder" | "contrast" | "dropdown" | "dropdownDeep" | "invertedContrast" | "input" | "inputSecondary" | "tertiary" | "text" | "text99" | "textDisabled" | "textSubtle" | "disabled" | "gradientBubblegum" | "gradientInverseBubblegum" | "gradientCardHeader" | "gradientBlue" | "gradientViolet" | "gradientVioletAlt" | "gradientGold" | "gradientBold" | "binance" | "overlay" | "gold" | "silver" | "bronze" | "yellow" | "failure" | "failure33" | "primary" | "primary0f" | "primary3D" | "primaryBright" | "primaryDark" | "success19" | "warning2D" | "warning33" | undefined;
        hover?: "success" | "warning" | "white" | "secondary" | "secondary80" | "background" | "backgroundDisabled" | "backgroundAlt" | "backgroundAlt2" | "cardBorder" | "contrast" | "dropdown" | "dropdownDeep" | "invertedContrast" | "input" | "inputSecondary" | "tertiary" | "text" | "text99" | "textDisabled" | "textSubtle" | "disabled" | "gradientBubblegum" | "gradientInverseBubblegum" | "gradientCardHeader" | "gradientBlue" | "gradientViolet" | "gradientVioletAlt" | "gradientGold" | "gradientBold" | "binance" | "overlay" | "gold" | "silver" | "bronze" | "yellow" | "failure" | "failure33" | "primary" | "primary0f" | "primary3D" | "primaryBright" | "primaryDark" | "success19" | "warning2D" | "warning33" | undefined;
        focus?: "success" | "warning" | "white" | "secondary" | "secondary80" | "background" | "backgroundDisabled" | "backgroundAlt" | "backgroundAlt2" | "cardBorder" | "contrast" | "dropdown" | "dropdownDeep" | "invertedContrast" | "input" | "inputSecondary" | "tertiary" | "text" | "text99" | "textDisabled" | "textSubtle" | "disabled" | "gradientBubblegum" | "gradientInverseBubblegum" | "gradientCardHeader" | "gradientBlue" | "gradientViolet" | "gradientVioletAlt" | "gradientGold" | "gradientBold" | "binance" | "overlay" | "gold" | "silver" | "bronze" | "yellow" | "failure" | "failure33" | "primary" | "primary0f" | "primary3D" | "primaryBright" | "primaryDark" | "success19" | "warning2D" | "warning33" | undefined;
        active?: "success" | "warning" | "white" | "secondary" | "secondary80" | "background" | "backgroundDisabled" | "backgroundAlt" | "backgroundAlt2" | "cardBorder" | "contrast" | "dropdown" | "dropdownDeep" | "invertedContrast" | "input" | "inputSecondary" | "tertiary" | "text" | "text99" | "textDisabled" | "textSubtle" | "disabled" | "gradientBubblegum" | "gradientInverseBubblegum" | "gradientCardHeader" | "gradientBlue" | "gradientViolet" | "gradientVioletAlt" | "gradientGold" | "gradientBold" | "binance" | "overlay" | "gold" | "silver" | "bronze" | "yellow" | "failure" | "failure33" | "primary" | "primary0f" | "primary3D" | "primaryBright" | "primaryDark" | "success19" | "warning2D" | "warning33" | undefined;
    } | undefined;
    outlineColor?: "success" | "warning" | "white" | "secondary" | "secondary80" | "background" | "backgroundDisabled" | "backgroundAlt" | "backgroundAlt2" | "cardBorder" | "contrast" | "dropdown" | "dropdownDeep" | "invertedContrast" | "input" | "inputSecondary" | "tertiary" | "text" | "text99" | "textDisabled" | "textSubtle" | "disabled" | "gradientBubblegum" | "gradientInverseBubblegum" | "gradientCardHeader" | "gradientBlue" | "gradientViolet" | "gradientVioletAlt" | "gradientGold" | "gradientBold" | "binance" | "overlay" | "gold" | "silver" | "bronze" | "yellow" | "failure" | "failure33" | "primary" | "primary0f" | "primary3D" | "primaryBright" | "primaryDark" | "success19" | "warning2D" | "warning33" | {
        base?: "success" | "warning" | "white" | "secondary" | "secondary80" | "background" | "backgroundDisabled" | "backgroundAlt" | "backgroundAlt2" | "cardBorder" | "contrast" | "dropdown" | "dropdownDeep" | "invertedContrast" | "input" | "inputSecondary" | "tertiary" | "text" | "text99" | "textDisabled" | "textSubtle" | "disabled" | "gradientBubblegum" | "gradientInverseBubblegum" | "gradientCardHeader" | "gradientBlue" | "gradientViolet" | "gradientVioletAlt" | "gradientGold" | "gradientBold" | "binance" | "overlay" | "gold" | "silver" | "bronze" | "yellow" | "failure" | "failure33" | "primary" | "primary0f" | "primary3D" | "primaryBright" | "primaryDark" | "success19" | "warning2D" | "warning33" | undefined;
        hover?: "success" | "warning" | "white" | "secondary" | "secondary80" | "background" | "backgroundDisabled" | "backgroundAlt" | "backgroundAlt2" | "cardBorder" | "contrast" | "dropdown" | "dropdownDeep" | "invertedContrast" | "input" | "inputSecondary" | "tertiary" | "text" | "text99" | "textDisabled" | "textSubtle" | "disabled" | "gradientBubblegum" | "gradientInverseBubblegum" | "gradientCardHeader" | "gradientBlue" | "gradientViolet" | "gradientVioletAlt" | "gradientGold" | "gradientBold" | "binance" | "overlay" | "gold" | "silver" | "bronze" | "yellow" | "failure" | "failure33" | "primary" | "primary0f" | "primary3D" | "primaryBright" | "primaryDark" | "success19" | "warning2D" | "warning33" | undefined;
        focus?: "success" | "warning" | "white" | "secondary" | "secondary80" | "background" | "backgroundDisabled" | "backgroundAlt" | "backgroundAlt2" | "cardBorder" | "contrast" | "dropdown" | "dropdownDeep" | "invertedContrast" | "input" | "inputSecondary" | "tertiary" | "text" | "text99" | "textDisabled" | "textSubtle" | "disabled" | "gradientBubblegum" | "gradientInverseBubblegum" | "gradientCardHeader" | "gradientBlue" | "gradientViolet" | "gradientVioletAlt" | "gradientGold" | "gradientBold" | "binance" | "overlay" | "gold" | "silver" | "bronze" | "yellow" | "failure" | "failure33" | "primary" | "primary0f" | "primary3D" | "primaryBright" | "primaryDark" | "success19" | "warning2D" | "warning33" | undefined;
        active?: "success" | "warning" | "white" | "secondary" | "secondary80" | "background" | "backgroundDisabled" | "backgroundAlt" | "backgroundAlt2" | "cardBorder" | "contrast" | "dropdown" | "dropdownDeep" | "invertedContrast" | "input" | "inputSecondary" | "tertiary" | "text" | "text99" | "textDisabled" | "textSubtle" | "disabled" | "gradientBubblegum" | "gradientInverseBubblegum" | "gradientCardHeader" | "gradientBlue" | "gradientViolet" | "gradientVioletAlt" | "gradientGold" | "gradientBold" | "binance" | "overlay" | "gold" | "silver" | "bronze" | "yellow" | "failure" | "failure33" | "primary" | "primary0f" | "primary3D" | "primaryBright" | "primaryDark" | "success19" | "warning2D" | "warning33" | undefined;
    } | undefined;
    bgc?: "success" | "warning" | "white" | "secondary" | "secondary80" | "background" | "backgroundDisabled" | "backgroundAlt" | "backgroundAlt2" | "cardBorder" | "contrast" | "dropdown" | "dropdownDeep" | "invertedContrast" | "input" | "inputSecondary" | "tertiary" | "text" | "text99" | "textDisabled" | "textSubtle" | "disabled" | "gradientBubblegum" | "gradientInverseBubblegum" | "gradientCardHeader" | "gradientBlue" | "gradientViolet" | "gradientVioletAlt" | "gradientGold" | "gradientBold" | "binance" | "overlay" | "gold" | "silver" | "bronze" | "yellow" | "failure" | "failure33" | "primary" | "primary0f" | "primary3D" | "primaryBright" | "primaryDark" | "success19" | "warning2D" | "warning33" | {
        base?: "success" | "warning" | "white" | "secondary" | "secondary80" | "background" | "backgroundDisabled" | "backgroundAlt" | "backgroundAlt2" | "cardBorder" | "contrast" | "dropdown" | "dropdownDeep" | "invertedContrast" | "input" | "inputSecondary" | "tertiary" | "text" | "text99" | "textDisabled" | "textSubtle" | "disabled" | "gradientBubblegum" | "gradientInverseBubblegum" | "gradientCardHeader" | "gradientBlue" | "gradientViolet" | "gradientVioletAlt" | "gradientGold" | "gradientBold" | "binance" | "overlay" | "gold" | "silver" | "bronze" | "yellow" | "failure" | "failure33" | "primary" | "primary0f" | "primary3D" | "primaryBright" | "primaryDark" | "success19" | "warning2D" | "warning33" | undefined;
        hover?: "success" | "warning" | "white" | "secondary" | "secondary80" | "background" | "backgroundDisabled" | "backgroundAlt" | "backgroundAlt2" | "cardBorder" | "contrast" | "dropdown" | "dropdownDeep" | "invertedContrast" | "input" | "inputSecondary" | "tertiary" | "text" | "text99" | "textDisabled" | "textSubtle" | "disabled" | "gradientBubblegum" | "gradientInverseBubblegum" | "gradientCardHeader" | "gradientBlue" | "gradientViolet" | "gradientVioletAlt" | "gradientGold" | "gradientBold" | "binance" | "overlay" | "gold" | "silver" | "bronze" | "yellow" | "failure" | "failure33" | "primary" | "primary0f" | "primary3D" | "primaryBright" | "primaryDark" | "success19" | "warning2D" | "warning33" | undefined;
        focus?: "success" | "warning" | "white" | "secondary" | "secondary80" | "background" | "backgroundDisabled" | "backgroundAlt" | "backgroundAlt2" | "cardBorder" | "contrast" | "dropdown" | "dropdownDeep" | "invertedContrast" | "input" | "inputSecondary" | "tertiary" | "text" | "text99" | "textDisabled" | "textSubtle" | "disabled" | "gradientBubblegum" | "gradientInverseBubblegum" | "gradientCardHeader" | "gradientBlue" | "gradientViolet" | "gradientVioletAlt" | "gradientGold" | "gradientBold" | "binance" | "overlay" | "gold" | "silver" | "bronze" | "yellow" | "failure" | "failure33" | "primary" | "primary0f" | "primary3D" | "primaryBright" | "primaryDark" | "success19" | "warning2D" | "warning33" | undefined;
        active?: "success" | "warning" | "white" | "secondary" | "secondary80" | "background" | "backgroundDisabled" | "backgroundAlt" | "backgroundAlt2" | "cardBorder" | "contrast" | "dropdown" | "dropdownDeep" | "invertedContrast" | "input" | "inputSecondary" | "tertiary" | "text" | "text99" | "textDisabled" | "textSubtle" | "disabled" | "gradientBubblegum" | "gradientInverseBubblegum" | "gradientCardHeader" | "gradientBlue" | "gradientViolet" | "gradientVioletAlt" | "gradientGold" | "gradientBold" | "binance" | "overlay" | "gold" | "silver" | "bronze" | "yellow" | "failure" | "failure33" | "primary" | "primary0f" | "primary3D" | "primaryBright" | "primaryDark" | "success19" | "warning2D" | "warning33" | undefined;
    } | undefined;
    bg?: "success" | "warning" | "white" | "secondary" | "secondary80" | "background" | "backgroundDisabled" | "backgroundAlt" | "backgroundAlt2" | "cardBorder" | "contrast" | "dropdown" | "dropdownDeep" | "invertedContrast" | "input" | "inputSecondary" | "tertiary" | "text" | "text99" | "textDisabled" | "textSubtle" | "disabled" | "gradientBubblegum" | "gradientInverseBubblegum" | "gradientCardHeader" | "gradientBlue" | "gradientViolet" | "gradientVioletAlt" | "gradientGold" | "gradientBold" | "binance" | "overlay" | "gold" | "silver" | "bronze" | "yellow" | "failure" | "failure33" | "primary" | "primary0f" | "primary3D" | "primaryBright" | "primaryDark" | "success19" | "warning2D" | "warning33" | {
        base?: "success" | "warning" | "white" | "secondary" | "secondary80" | "background" | "backgroundDisabled" | "backgroundAlt" | "backgroundAlt2" | "cardBorder" | "contrast" | "dropdown" | "dropdownDeep" | "invertedContrast" | "input" | "inputSecondary" | "tertiary" | "text" | "text99" | "textDisabled" | "textSubtle" | "disabled" | "gradientBubblegum" | "gradientInverseBubblegum" | "gradientCardHeader" | "gradientBlue" | "gradientViolet" | "gradientVioletAlt" | "gradientGold" | "gradientBold" | "binance" | "overlay" | "gold" | "silver" | "bronze" | "yellow" | "failure" | "failure33" | "primary" | "primary0f" | "primary3D" | "primaryBright" | "primaryDark" | "success19" | "warning2D" | "warning33" | undefined;
        hover?: "success" | "warning" | "white" | "secondary" | "secondary80" | "background" | "backgroundDisabled" | "backgroundAlt" | "backgroundAlt2" | "cardBorder" | "contrast" | "dropdown" | "dropdownDeep" | "invertedContrast" | "input" | "inputSecondary" | "tertiary" | "text" | "text99" | "textDisabled" | "textSubtle" | "disabled" | "gradientBubblegum" | "gradientInverseBubblegum" | "gradientCardHeader" | "gradientBlue" | "gradientViolet" | "gradientVioletAlt" | "gradientGold" | "gradientBold" | "binance" | "overlay" | "gold" | "silver" | "bronze" | "yellow" | "failure" | "failure33" | "primary" | "primary0f" | "primary3D" | "primaryBright" | "primaryDark" | "success19" | "warning2D" | "warning33" | undefined;
        focus?: "success" | "warning" | "white" | "secondary" | "secondary80" | "background" | "backgroundDisabled" | "backgroundAlt" | "backgroundAlt2" | "cardBorder" | "contrast" | "dropdown" | "dropdownDeep" | "invertedContrast" | "input" | "inputSecondary" | "tertiary" | "text" | "text99" | "textDisabled" | "textSubtle" | "disabled" | "gradientBubblegum" | "gradientInverseBubblegum" | "gradientCardHeader" | "gradientBlue" | "gradientViolet" | "gradientVioletAlt" | "gradientGold" | "gradientBold" | "binance" | "overlay" | "gold" | "silver" | "bronze" | "yellow" | "failure" | "failure33" | "primary" | "primary0f" | "primary3D" | "primaryBright" | "primaryDark" | "success19" | "warning2D" | "warning33" | undefined;
        active?: "success" | "warning" | "white" | "secondary" | "secondary80" | "background" | "backgroundDisabled" | "backgroundAlt" | "backgroundAlt2" | "cardBorder" | "contrast" | "dropdown" | "dropdownDeep" | "invertedContrast" | "input" | "inputSecondary" | "tertiary" | "text" | "text99" | "textDisabled" | "textSubtle" | "disabled" | "gradientBubblegum" | "gradientInverseBubblegum" | "gradientCardHeader" | "gradientBlue" | "gradientViolet" | "gradientVioletAlt" | "gradientGold" | "gradientBold" | "binance" | "overlay" | "gold" | "silver" | "bronze" | "yellow" | "failure" | "failure33" | "primary" | "primary0f" | "primary3D" | "primaryBright" | "primaryDark" | "success19" | "warning2D" | "warning33" | undefined;
    } | undefined;
}) => string) & {
    properties: Set<"inset" | "background" | "color" | "bg" | "backgroundColor" | "opacity" | "border" | "borderColor" | "borderBottomColor" | "borderRadius" | "borderTopLeftRadius" | "borderTopRightRadius" | "borderBottomLeftRadius" | "borderBottomRightRadius" | "borderTop" | "borderBottom" | "width" | "height" | "minWidth" | "minHeight" | "maxWidth" | "maxHeight" | "display" | "size" | "overflow" | "overflowX" | "overflowY" | "position" | "zIndex" | "m" | "margin" | "mt" | "marginTop" | "mr" | "marginRight" | "mb" | "marginBottom" | "ml" | "marginLeft" | "mx" | "marginX" | "my" | "marginY" | "p" | "padding" | "pt" | "paddingTop" | "pr" | "paddingRight" | "pb" | "paddingBottom" | "pl" | "paddingLeft" | "px" | "paddingX" | "py" | "paddingY" | "alignItems" | "justifyItems" | "justifyContent" | "flexWrap" | "flexDirection" | "flex" | "flexGrow" | "justifySelf" | "alignSelf" | "gridAutoRows" | "cursor" | "fontSize" | "pointerEvents" | "visibility" | "textTransform" | "lineHeight" | "textAlign" | "wordBreak" | "boxShadow" | "columnGap" | "gap" | "isolation" | "objectFit" | "outlineColor" | "rowGap" | "whiteSpace" | "wordWrap" | "borderLeftRadius" | "borderRightRadius" | "borderTopRadius" | "borderBottomRadius" | "bgc">;
};
export type Sprinkles = Parameters<typeof sprinkles>[0];
export type OptionalResponsiveObject<Value> = Value | Partial<Record<Breakpoint, Value>>;
export type RequiredResponsiveObject<Value> = Partial<Record<Breakpoint, Value>> & Record<(typeof breakpointNames)[0], Value>;
