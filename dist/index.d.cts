interface IConsoleBanOptions {
    /**
     * enable loop infinite debugger
     * @default true
     */
    debug?: boolean;
    /**
     * loop debugger interval
     * @default 300
     */
    debugTime?: number;
    /**
     * console opend callback
     * @default undefined
     */
    callback?: () => any;
    /**
     * redirect url
     * @default undefined
     */
    redirect?: string;
    /**
     * disable console.clear
     * @default true -> disable console.clear
     */
    clear?: boolean;
    /**
     * rewrite document content
     * @default undefined
     */
    write?: string | Element;
    /**
     * disable bfcache
     * @default true -> disable bfcache
     */
    bfcache?: boolean;
}
type options = IConsoleBanOptions;

declare const init: (option: IConsoleBanOptions) => void;

export { type IConsoleBanOptions, init, type options };
