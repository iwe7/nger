import { Process, ProcessImpl } from './node/process';
import {
    COMPILER_OPTIONS, PLATFORM_ID, createPlatformFactory,
    ErrorHandler, StaticProvider, PlatformRef
} from '@angular/core';
import { ɵplatformCoreDynamic as platformCoreDynamic } from '@angular/platform-browser-dynamic';
export { VERSION } from '@angular/core';
import { PLATFORM_NODE_ID } from './platform-ids';

export const platformNodeAppDynamic: (extraProviders?: StaticProvider[]) => PlatformRef =
    createPlatformFactory(platformCoreDynamic, 'platformNodeAppDynamic', [
        {
            provide: COMPILER_OPTIONS,
            useValue: {},
            multi: true
        },
        { provide: PLATFORM_ID, useValue: PLATFORM_NODE_ID },
        { provide: ErrorHandler, deps: [] },
        {
            provide: Process,
            useClass: ProcessImpl,
            deps: []
        }
    ]);
