import {
    COMPILER_OPTIONS, PLATFORM_ID, createPlatformFactory,
    ErrorHandler, StaticProvider, PlatformRef
} from '@angular/core';
import { ɵplatformCoreDynamic as platformCoreDynamic } from '@angular/platform-browser-dynamic';
export { VERSION } from '@angular/core';
import { PLATFORM_WECHAT_ID } from './platform-ids';
export const platformWechatAppDynamic: (extraProviders?: StaticProvider[]) => PlatformRef =
    createPlatformFactory(platformCoreDynamic, 'platformWechatAppDynamic', [
        {
            provide: COMPILER_OPTIONS,
            useValue: {},
            multi: true
        },
        { provide: PLATFORM_ID, useValue: PLATFORM_WECHAT_ID },
        { provide: ErrorHandler, deps: [] }
    ]);
