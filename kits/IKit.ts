export interface IKit {
    hasDependencies(): boolean;
    loadAssets(): void;
    drawAssets(): {};
}