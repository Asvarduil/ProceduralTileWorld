import { App } from '../../app/app';

import { IKit } from '../IKit';

import { WorldGenerator } from './world-generator';

export class WorldGenKit implements IKit {
    hasDependencies(): boolean {
        const hasTilesKit: boolean = App.kits.exists('Tiles');
        const isSimplexNoisePresent: boolean = !(!window['SimplexNoise']);

        return hasTilesKit
               && isSimplexNoisePresent;
    }

    loadAssets() {
        // N/A; This is a code-only kit.
    }

    drawAssets(): {} {
        // Return an object that contains relevant assets for the kit.
        return {
            'generator': new WorldGenerator()
        };
    }
}