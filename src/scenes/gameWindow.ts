import * as ex from 'excalibur';
import { GameCoordinatior } from '../coordinator/coordinator';
import { Stream } from 'java8script';
import SoundManager from '../engine/soundManager';
import BackgroundManager from '../engine/backgroundManager';
import { Actor, Engine, Color, Texture, Vector } from 'excalibur';
import { Resources, Config } from '../resources';
import ButtonBase from '../actors/bars/buttonBase';
import { Scenes } from './scenes';

export class GameWindow extends ex.Scene {

  private coordinator;
  private engine: Engine;

  public onInitialize(engine: ex.Engine) {
    this.engine = engine;
    this.add(new BackgroundManager(engine).getTileMap())

    /*
    const bar = new Actor();
    bar.y = Config.menuHeight;
    bar.x = this.engine.drawWidth/2;
    bar.setHeight(1);
    bar.setWidth(this.engine.drawWidth)
    bar.color = Color.Red;
    bar
    this.add(bar);//todo remove
    */

    
    const exitT: Texture = Resources.uiX;
    const exit = new ButtonBase(
      exitT, 
      () => engine.goToScene(Scenes.MAIN_MENU)
    );

    exit.addDrawing(exitT);
    exit.scale = new Vector(Config.uiItemSize/exitT.width, Config.uiItemSize/exitT.height);
    exit.setHeight(Config.uiItemSize);
    exit.setWidth(Config.uiItemSize);
    exit.x = engine.drawWidth - Config.uiItemSize/2 - Config.gridPadding;
    exit.y = Config.uiItemSize/2 + Config.gridPadding;
    this.add(exit);

    //todo move this to be actually score keeper
    const coins: Actor = new Actor();
    coins.addDrawing(Resources.uiCoins);
    coins.scale = new Vector(Config.uiItemSize/Resources.uiCoins.width, Config.uiItemSize/Resources.uiCoins.height);
    coins.x = Config.uiItemSize/2;
    coins.y = Config.uiItemSize*2.5;
    this.add(coins);
    
  }

  public onActivate() {
    SoundManager.get().backgroundMusicStart();
    const coordinator: GameCoordinatior = GameCoordinatior.initialize(this.engine);
    this.coordinator = coordinator;

    coordinator.getGridAsList()
      .forEach(c => this.add(c));

    coordinator.getColCountCards()
      .forEach(c => this.add(c));

    coordinator.getRowCountCards()
      .forEach(c => this.add(c));

      Stream.ofValues(this.coordinator.getStatTrackers())
      .map(l => Stream.ofValues(...l))
      .flatMap(l => l)
      .forEach(c => this.add(c));
  }
  public onDeactivate() {
    this.coordinator.getGridAsList()
      .forEach(c => this.remove(c));

    this.coordinator.getColCountCards()
      .forEach(c => this.remove(c));

    this.coordinator.getRowCountCards()
      .forEach(c => this.remove(c));

    Stream.ofValues(this.coordinator.getStatTrackers())
      .map(l => Stream.ofValues(...l))
      .flatMap(l => l)
      .forEach(c => this.remove(c));

  }
} 