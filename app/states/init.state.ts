import { App } from '../app';

export class InitState extends Phaser.State {
    preload() {
        App.kits.loadKit("Tiles");
    }

    create() {
        App.states.title();
    }

    update() {
    }

    render() {
    }
}