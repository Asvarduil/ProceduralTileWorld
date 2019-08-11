var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define("app/states/init.state", ["require", "exports", "app/app"], function (require, exports, app_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var InitState = /** @class */ (function (_super) {
        __extends(InitState, _super);
        function InitState() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        InitState.prototype.preload = function () {
            console.info('Loading all kits...');
            app_1.App.kits.loadKit("Tiles");
        };
        InitState.prototype.create = function () {
            app_1.App.states.title();
        };
        InitState.prototype.update = function () {
        };
        InitState.prototype.render = function () {
        };
        return InitState;
    }(Phaser.State));
    exports.InitState = InitState;
});
define("app/states/title.state", ["require", "exports", "app/app"], function (require, exports, app_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var TitleState = /** @class */ (function (_super) {
        __extends(TitleState, _super);
        function TitleState() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        TitleState.prototype.preload = function () {
        };
        TitleState.prototype.create = function () {
            app_2.App.states.load('Game');
        };
        TitleState.prototype.update = function () {
        };
        TitleState.prototype.render = function () {
        };
        return TitleState;
    }(Phaser.State));
    exports.TitleState = TitleState;
});
define("app/states/victory.state", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var VictoryState = /** @class */ (function (_super) {
        __extends(VictoryState, _super);
        function VictoryState() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        VictoryState.prototype.preload = function () {
        };
        VictoryState.prototype.create = function () {
        };
        VictoryState.prototype.update = function () {
        };
        VictoryState.prototype.render = function () {
        };
        return VictoryState;
    }(Phaser.State));
    exports.VictoryState = VictoryState;
});
define("app/states/game-over.state", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var GameOverState = /** @class */ (function (_super) {
        __extends(GameOverState, _super);
        function GameOverState() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        GameOverState.prototype.preload = function () {
        };
        GameOverState.prototype.create = function () {
        };
        GameOverState.prototype.update = function () {
        };
        GameOverState.prototype.render = function () {
        };
        return GameOverState;
    }(Phaser.State));
    exports.GameOverState = GameOverState;
});
define("kits/world-gen/world-generator", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var WorldGenerator = /** @class */ (function () {
        function WorldGenerator() {
        }
        WorldGenerator.prototype.generateTiles = function (args) {
            // Basic form: return tile 0 per the width/height parameters.
            var result = [];
            for (var current = 0; current < args.width * args.height; current++) {
                result.push(0);
            }
            return result;
        };
        return WorldGenerator;
    }());
    exports.WorldGenerator = WorldGenerator;
});
define("app/states/game.state", ["require", "exports", "app/app"], function (require, exports, app_3) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var GameState = /** @class */ (function (_super) {
        __extends(GameState, _super);
        function GameState() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        GameState.prototype.preload = function () {
        };
        GameState.prototype.create = function () {
            // TODO: Pull map that was generated with world builder.
            var worldGenKit = app_3.App.kits.getByName("WorldGen").drawAssets();
            var generator = worldGenKit["generator"];
            var params = {
                width: 2,
                height: 2,
                baseTileCount: 1,
                performUpBordering: false
            };
            var tiles = generator.generateTiles(params);
            console.info('Tiles for screen generated', tiles);
        };
        GameState.prototype.update = function () {
        };
        GameState.prototype.render = function () {
        };
        return GameState;
    }(Phaser.State));
    exports.GameState = GameState;
});
define("app/states/states", ["require", "exports", "app/app", "app/states/init.state", "app/states/title.state", "app/states/victory.state", "app/states/game-over.state", "app/states/game.state"], function (require, exports, app_4, init_state_1, title_state_1, victory_state_1, game_over_state_1, game_state_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var StateManager = /** @class */ (function () {
        function StateManager() {
            this.states = [];
            console.info('State manager has been initialized');
            this.states = [
                { name: 'Init', class: init_state_1.InitState },
                { name: 'Title', class: title_state_1.TitleState },
                // Custom states go here...
                { name: 'Game', class: game_state_1.GameState },
                { name: 'Victory', class: victory_state_1.VictoryState },
                { name: 'GameOver', class: game_over_state_1.GameOverState },
            ];
            for (var _i = 0, _a = this.states; _i < _a.length; _i++) {
                var state = _a[_i];
                app_4.App.game.state.add(state.name, state.class);
            }
        }
        //#region Methods
        StateManager.prototype.load = function (stateName) {
            app_4.App.game.state.start(stateName, true, false);
        };
        StateManager.prototype.overlay = function (stateName) {
            app_4.App.game.state.start(stateName, false, false);
        };
        //#endregion Methods
        //#region Predefined State Macros
        StateManager.prototype.runInitState = function () {
            this.load('Init');
        };
        StateManager.prototype.title = function () {
            this.load('Title');
        };
        StateManager.prototype.victory = function () {
            this.load('Victory');
        };
        StateManager.prototype.gameOver = function () {
            this.load('GameOver');
        };
        return StateManager;
    }());
    exports.StateManager = StateManager;
});
define("kits/ikit", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
define("kits/tiles/tiles.kit", ["require", "exports", "app/app"], function (require, exports, app_5) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var TilesKit = /** @class */ (function () {
        function TilesKit() {
        }
        TilesKit.prototype.hasDependencies = function () {
            return true;
        };
        TilesKit.prototype.loadAssets = function () {
            // Overworld tileset...
            app_5.App.game.load.image('overworld-tiles', 'assets/overworld-tiles.png');
            app_5.App.game.load.json('overworld-tile-data', 'assets/overworld-tiles.json');
            console.info('Tile files loaded successfully.');
        };
        TilesKit.prototype.drawAssets = function () {
            return {
                'overworldTileData': app_5.App.game.cache.getJSON('overworld-tile-data')
            };
        };
        return TilesKit;
    }());
    exports.TilesKit = TilesKit;
});
define("kits/world-gen/world-gen.kit", ["require", "exports", "app/app", "kits/world-gen/world-generator"], function (require, exports, app_6, world_generator_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var WorldGenKit = /** @class */ (function () {
        function WorldGenKit() {
        }
        WorldGenKit.prototype.hasDependencies = function () {
            var hasTilesKit = app_6.App.kits.exists('Tiles');
            var isSimplexNoisePresent = !(!window['SimplexNoise']);
            return hasTilesKit
                && isSimplexNoisePresent;
        };
        WorldGenKit.prototype.loadAssets = function () {
            // N/A; This is a code-only kit.
        };
        WorldGenKit.prototype.drawAssets = function () {
            // Return an object that contains relevant assets for the kit.
            return {
                'generator': new world_generator_1.WorldGenerator()
            };
        };
        return WorldGenKit;
    }());
    exports.WorldGenKit = WorldGenKit;
});
define("kits/kits", ["require", "exports", "kits/tiles/tiles.kit", "kits/world-gen/world-gen.kit"], function (require, exports, tiles_kit_1, world_gen_kit_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var KitManager = /** @class */ (function () {
        function KitManager() {
            this.kits = [];
            console.info('Kit manager has been initialized.');
            this.kits = [
                // Put all your kits here!
                { name: 'Tiles', kit: new tiles_kit_1.TilesKit() },
                { name: 'WorldGen', kit: new world_gen_kit_1.WorldGenKit() }
            ];
        }
        KitManager.prototype.loadKit = function (name) {
            var kit = this.getByName(name);
            if (kit == null) {
                console.error("Kit " + name + " isn't defined in KitManager.ts!");
                return;
            }
            kit.loadAssets();
        };
        KitManager.prototype.getByName = function (name) {
            var result = null;
            for (var _i = 0, _a = this.kits; _i < _a.length; _i++) {
                var kit = _a[_i];
                if (kit.name !== name)
                    continue;
                result = kit.kit;
            }
            return result;
        };
        KitManager.prototype.exists = function (name) {
            return this.getByName(name) != null;
        };
        return KitManager;
    }());
    exports.KitManager = KitManager;
});
/// <reference path="../node_modules/phaser-ce/typescript/phaser.d.ts" />
define("app/app", ["require", "exports", "app/states/states", "kits/kits"], function (require, exports, states_1, kits_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var App = /** @class */ (function () {
        function App() {
            App.game = new Phaser.Game(640, 480, Phaser.CANVAS, 'content', null, false, false);
            this.appStart();
        }
        App.prototype.appStart = function () {
            App.kits = new kits_1.KitManager();
            App.states = new states_1.StateManager();
            App.states.runInitState();
        };
        return App;
    }());
    exports.App = App;
    window.onload = function () {
        var app = new App();
    };
});
define("app/states/template.state", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var TemplateState = /** @class */ (function (_super) {
        __extends(TemplateState, _super);
        function TemplateState() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        TemplateState.prototype.preload = function () {
        };
        TemplateState.prototype.create = function () {
        };
        TemplateState.prototype.update = function () {
        };
        TemplateState.prototype.render = function () {
        };
        return TemplateState;
    }(Phaser.State));
    exports.TemplateState = TemplateState;
});
define("kits/template/template.kit", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var TemplateKit = /** @class */ (function () {
        function TemplateKit() {
        }
        TemplateKit.prototype.hasDependencies = function () {
            return true;
        };
        TemplateKit.prototype.loadAssets = function () {
        };
        TemplateKit.prototype.drawAssets = function () {
            // Return an object that contains relevant assets for the kit.
            return {};
        };
        return TemplateKit;
    }());
    exports.TemplateKit = TemplateKit;
});
//# sourceMappingURL=allInOne.js.map