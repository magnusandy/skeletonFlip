import * as ex from 'excalibur';
import { Resources } from '../resources';
import { Scenes } from './scenes';
import SoundManager from '../engine/soundManager';

export class Victory extends ex.Scene {


  public onInitialize(engine: ex.Engine) {
  }
  public onActivate() {
    SoundManager.get().playSoundInterrupt(Resources.victorySound);
    const victoryActor = new ex.Actor();
    victoryActor.addDrawing(Resources.victory.asSprite());
    victoryActor.x = this.engine.drawWidth/2;
    victoryActor.y = this.engine.drawHeight/2;
    victoryActor.setHeight(360);
    victoryActor.setWidth(480);
    victoryActor.on('pointerup', () => this.engine.goToScene(Scenes.MAIN_MENU));
    this.add(victoryActor);
  }

  public onDeactivate() { 
  }
} 
