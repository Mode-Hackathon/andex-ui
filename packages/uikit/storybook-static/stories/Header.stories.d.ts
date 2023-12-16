declare namespace _default {
    export let title: string;
    export { Header as component };
    export let tags: string[];
    export namespace parameters {
        let layout: string;
    }
}
export default _default;
export namespace LoggedIn {
    namespace args {
        namespace user {
            let name: string;
        }
    }
}
export const LoggedOut: {};
import { Header } from './Header';
