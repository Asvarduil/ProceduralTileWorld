/// <reference path="../node_modules/phaser-ce/typescript/phaser.d.ts" />

import { StateManager } from './states/states';
import { KitManager } from '../kits/kits';

export class App {
    static game: Phaser.Game;
    static states: StateManager;
    static kits: KitManager;

    constructor(
    ) {
        App.game = new Phaser.Game(
            640, 480,
            Phaser.CANVAS,
            'content',
            null,
            false,
            false
        );

        this.appStart();
    }

    appStart() {
        App.kits = new KitManager();

        App.states = new StateManager();
        App.states.runInitState();
    }
}

window.onload = () => {
    const app = new App();
}