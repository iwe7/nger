import {
    COMPILER_OPTIONS, PLATFORM_ID, createPlatformFactory,
    ErrorHandler, StaticProvider, PlatformRef
} from '@angular/core';
export { VERSION } from '@angular/core';
import { PLATFORM_WEBPACK_ID } from './platform-ids';
import { platformNodeAppDynamic } from './platform-node-dynamic';
export const platformWebpackAppDynamic: (extraProviders?: StaticProvider[]) => PlatformRef =
    createPlatformFactory(platformNodeAppDynamic, 'platformWebpackAppDynamic', [
        {
            provide: COMPILER_OPTIONS,
            useValue: {},
            multi: true
        },
        { provide: PLATFORM_ID, useValue: PLATFORM_WEBPACK_ID },
        { provide: ErrorHandler, deps: [] }
    ]);
