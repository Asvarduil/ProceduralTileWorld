import { IKit } from '../IKit';

export class TemplateKit implements IKit {
    hasDependencies(): boolean {
        return true;
    }

    loadAssets() {
        
    }

    drawAssets(): {} {
        // Return an object that contains relevant assets for the kit.
        return {};
    }
}