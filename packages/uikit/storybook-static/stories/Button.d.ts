export function Button({ primary, backgroundColor, size, label, ...props }: {
    [x: string]: any;
    primary: any;
    backgroundColor: any;
    size: any;
    label: any;
}): import("react/jsx-runtime").JSX.Element;
export namespace Button {
    namespace propTypes {
        let primary: any;
        let backgroundColor: any;
        let size: any;
        let label: any;
        let onClick: any;
    }
    namespace defaultProps {
        let backgroundColor_1: null;
        export { backgroundColor_1 as backgroundColor };
        let primary_1: boolean;
        export { primary_1 as primary };
        let size_1: string;
        export { size_1 as size };
        let onClick_1: undefined;
        export { onClick_1 as onClick };
    }
}
