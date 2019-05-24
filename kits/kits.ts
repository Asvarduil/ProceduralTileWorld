import { IKit } from './ikit';

export class KitManager {
    kits: { name: string, kit: IKit }[] = [];

    constructor() {
        this.kits = [
            // Put all your kits here!

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