namespace L02_SpaceInvaderGameObjects {
    import fudge = FudgeCore;
    export class Shield extends fudge.Node {
        constructor(_xPosition: number, _yPosition: number, subShields: number) {
            super(`Shield-${_xPosition}:${_yPosition}`);
            this.addComponent(new fudge.ComponentTransform());
            this.mtxLocal.translateY(_yPosition);
            this.mtxLocal.translateX(_xPosition);
            if (subShields % 2 === 0) {
                for (let x: number = 0; x < subShields / 2; x++) {
                    for (let y: number = 0; y < subShields / 2; y++) {
                        const sub: SubShield = new SubShield(this.mtxWorld.translation.x + (-0.5 + x), this.mtxWorld.translation.y + (-0.5 + y));
                        sub.setrect(this.mtxLocal.translation.x + (-0.5 + x), this.mtxLocal.translation.y + (-0.5 + y));
                        this.addChild(sub);
                    }
                }
            }
        }
    }
}