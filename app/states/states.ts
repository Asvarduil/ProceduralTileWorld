import { App } from '../app';

import { InitState } from './init.state';
import { TitleState } from './title.state';
import { VictoryState } from './victory.state';
import { GameOverState } from './game-over.state';

// Import the custom state types here!
import { GameState } from './game.state';

export class StateManager {
    states: { name: string, class: any }[] = [];

    constructor() {
        console.info('State manager has been initialized');
        
        this.states = [
            { name: 'Init', class: InitState },
            { name: 'Title', class: TitleState },

            // Custom states go here...
            { name: 'Game', class: GameState },

            { name: 'Victory', class: VictoryState },
            { name: 'GameOver', class: GameOverState },
        ]

        for (let state of this.states) {
            App.game.state.add(state.name, state.class);
        }
    }

    //#region Methods

    load(stateName: string) {
        App.game.state.start(stateName, true, false);
    }

    overlay(stateName: string) {
        App.game.state.start(stateName, false, false);
    }

    //#endregion Methods

    //#region Predefined State Macros

    runInitState() {
        this.load('Init');
    }

    title() {
        this.load('Title');
    }

    victory() {
        this.load('Victory');
    }

    gameOver() {
        this.load('GameOver');
    }

    //#endregion Predefined State Macros
}