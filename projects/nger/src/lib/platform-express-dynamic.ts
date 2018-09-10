import {
    COMPILER_OPTIONS, PLATFORM_ID, createPlatformFactory,
    ErrorHandler, StaticProvider, PlatformRef
} from '@angular/core';
export { VERSION } from '@angular/core';
import { PLATFORM_EXPRESS_ID } from './platform-ids';
import { platformNodeAppDynamic } from './platform-node-dynamic';
export const platformExpressAppDynamic: (extraProviders?: StaticProvider[]) => PlatformRef =
    createPlatformFactory(platformNodeAppDynamic, 'platformExpressAppDynamic', [
        {
            provide: COMPILER_OPTIONS,
            useValue: {},
            multi: true
        },
        { provide: PLATFORM_ID, useValue: PLATFORM_EXPRESS_ID },
        { provide: ErrorHandler, deps: [] }
    ]);
