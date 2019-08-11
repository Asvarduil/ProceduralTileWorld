import { App } from '../app';

export class InitState extends Phaser.State {
    preload() {
        console.info('Loading all kits...');
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