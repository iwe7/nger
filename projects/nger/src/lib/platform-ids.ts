export const PLATFORM_ELECTRON_ID: string = 'electron';
export const PLATFORM_WEBPACK_ID: string = 'webpack';
export const PLATFORM_NODE_ID: string = 'node';
export const PLATFORM_CHROME_ID: string = 'chrome';
export const PLATFORM_WECHAT_ID: string = 'wechat';
export const PLATFORM_EXPRESS_ID: string = 'express';

export function isPlatformExpress(platformId: Object): boolean {
    return platformId === PLATFORM_EXPRESS_ID;
}

export function isPlatformWechat(platformId: Object): boolean {
    return platformId === PLATFORM_WECHAT_ID;
}

export function isPlatformChrome(platformId: Object): boolean {
    return platformId === PLATFORM_CHROME_ID;
}
export function isPlatformNode(platformId: Object): boolean {
    return platformId === PLATFORM_NODE_ID;
}
export function isPlatformWebpack(platformId: Object): boolean {
    return platformId === PLATFORM_WEBPACK_ID;
}
export function isPlatformElectron(platformId: Object): boolean {
    return platformId === PLATFORM_ELECTRON_ID;
}
