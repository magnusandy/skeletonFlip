import { Resources } from './resources';
import { Scenes } from './scenes/scenes';
import { MainMenu } from './scenes/mainMenu';
import Game from './engine/game/Game';
import { GameLoader } from './engine/game/GameLoader';
import { GameOver } from './scenes/gameOver';
import { Victory } from './scenes/victory';
import { Options } from './scenes/options';
import { Help } from './scenes/help';
import SizingManager from './engine/managers/sizingManager';
import PlayerSettingsManager from './engine/progression/playerSettingsManager';
import { StoryGameWindow } from './scenes/gameWindows/storyGameWindow';
import { GridGameWindow } from './scenes/gameWindows/gridGameWindow';
import { UpgradeScene } from './scenes/upgrades';

const game = new Game();
const mainMenu = new MainMenu(game);
const options = new Options(game);
game.add(Scenes.MAIN_MENU, mainMenu);
game.add(Scenes.GAME_OVER, new GameOver(game));
game.add(Scenes.STORY_GAME_WINDOW, new StoryGameWindow(game));
game.add(Scenes.GRID_GAME_WINDOW, new GridGameWindow(game));
game.add(Scenes.VICTORY, new Victory(game));
game.add(Scenes.OPTIONS, options);
game.add(Scenes.HELP, new Help(game));
game.add(Scenes.UPGRADES, new UpgradeScene(game));

let loader = new GameLoader();
Object.keys(Resources)
  .forEach(k => loader.addResource(Resources[k]));

game.start(loader).then(() => {
  PlayerSettingsManager.initialize()
    .then(() => {
      SizingManager.initialize(game);
      game.goToScene(Scenes.MAIN_MENU);
    });
});
