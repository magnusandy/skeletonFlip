import { Label, BaseAlign, TextAlign } from "excalibur";
import FontManager from "../../engine/fontManager";

export default class LevelDisplay extends Label {
    private static PREFIX: string = "Level";
    public constructor(x: number, y: number, size: number, startingLevel: number) {
        super(
            LevelDisplay.createLabelText(startingLevel),
            x,
            y,
            null,
            FontManager.get().getMono()
        );

        this.fontSize = size;
        this.baseAlign = BaseAlign.Middle;
        this.textAlign = TextAlign.Center;

    }

    private static createLabelText(level: number) {
        return `${LevelDisplay.PREFIX} ${level}`;
    }

    public updateLevel(newLevel: number): void {
        this.text = LevelDisplay.createLabelText(newLevel);
    }

}