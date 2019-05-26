import { IKit } from '../IKit';
import { App } from '../../app/app';

export interface ITileData {
    key: string,
    size: number
}

export class TilesKit implements IKit {
    hasDependencies(): boolean {
        return true;
    }

    loadAssets() {
        // Overworld tileset...
        App.game.load.image('overworld-tiles', 'assets/overworld-tiles.png');
        App.game.load.json('overworld-tile-data', 'assets/overworld-tiles.json');
    }

    drawAssets(): {} {
        return {
            'overworldTileData': App.game.cache.getJSON('overworld-tile-data')
        };
    }
}