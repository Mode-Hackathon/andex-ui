declare namespace _default {
    export let title: string;
    export { Page as component };
    export namespace parameters {
        let layout: string;
    }
}
export default _default;
export const LoggedOut: {};
export namespace LoggedIn {
    function play({ canvasElement }: {
        canvasElement: any;
    }): Promise<void>;
}
import { Page } from './Page';
