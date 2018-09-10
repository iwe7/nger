import {
    COMPILER_OPTIONS, PLATFORM_ID, createPlatformFactory,
    ErrorHandler, StaticProvider, PlatformRef
} from '@angular/core';
import { ɵplatformCoreDynamic as platformCoreDynamic } from '@angular/platform-browser-dynamic';
export { VERSION } from '@angular/core';
import { PLATFORM_CHROME_ID } from './platform-ids';
export const platformChromeAppDynamic: (extraProviders?: StaticProvider[]) => PlatformRef =
    createPlatformFactory(platformCoreDynamic, 'platformChromeAppDynamic', [
        {
            provide: COMPILER_OPTIONS,
            useValue: {},
            multi: true
        },
        { provide: PLATFORM_ID, useValue: PLATFORM_CHROME_ID },
        { provide: ErrorHandler, deps: [] }
    ]);
