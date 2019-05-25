import { IKit } from './ikit';

import { TilesKit } from './tiles/tiles.kit';

export class KitManager {
    kits: { name: string, kit: IKit }[] = [];

    constructor() {
        console.info('Kit manager has been initialized.');
        this.kits = [
            // Put all your kits here!
            { name: 'Tiles', kit: new TilesKit() }
        ]
    }

    loadKit(name: string): void {
        const kit = this.getByName(name);
        if (kit == null) {
            console.error(`Kit ${name} isn't defined in KitManager.ts!`);
            return;
        }

        kit.loadAssets();
    }

    getByName(name: string): IKit {
        let result: IKit = null;
        for (let kit of this.kits) {
            if (kit.name !== name)
                continue;

            result = kit.kit;
        }

        return result;
    }
}