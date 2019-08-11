import { App } from '../app';
import { WorldGenerator, WorldGeneratorConfig } from '../../kits/world-gen/world-generator';

export class GameState extends Phaser.State {
    preload() {

    }

    create() {
        // TODO: Pull map that was generated with world builder.
        const worldGenKit = App.kits.getByName("WorldGen").drawAssets();
        const generator: WorldGenerator = worldGenKit["generator"];

        const params: WorldGeneratorConfig = {
            width: 2,
            height: 2,
            baseTileCount: 1,
            performUpBordering: false
        };
        let tiles: number[] = generator.generateTiles(params);
        console.info('Tiles for screen generated', tiles);
    }

    update() {

    }

    render() {
        
    }
}