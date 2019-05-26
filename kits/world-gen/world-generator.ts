export interface WorldGeneratorConfig {
    width: number;
    height: number;
    baseTileCount: number;
    performUpBordering: boolean;
}

export class WorldGenerator {
    constructor() {

    }

    generateTiles(args: WorldGeneratorConfig): number[] {
        // Basic form: return tile 0 per the width/height parameters.
        let result: number[] = [];
        for (let current = 0; current < args.width * args.height; current++) {
            result.push(0);
        }

        return result;
    }
}