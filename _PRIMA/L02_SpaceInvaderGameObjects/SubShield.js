"use strict";
var L02_SpaceInvaderGameObjects;
(function (L02_SpaceInvaderGameObjects) {
    var fudge = FudgeCore;
    class SubShield extends L02_SpaceInvaderGameObjects.QuadNode {
        constructor(_xPosition, _yPosition) {
            const SCALEX = 0.8;
            const SCALEY = 0.8;
            super(`SubShield-${_xPosition}:${_yPosition}`, _xPosition, _yPosition, SCALEX, SCALEY);
            this.addComponent(new fudge.ComponentMesh(new fudge.MeshQuad()));
            this.addComponent(new fudge.ComponentMaterial(new fudge.Material("White", fudge.ShaderUniColor, new fudge.CoatColored(fudge.Color.CSS("WHITE")))));
            this.mtxLocal.translateX(_xPosition);
            this.mtxLocal.translateY(_yPosition);
            this.mtxLocal.scale(new fudge.Vector3(SCALEX, SCALEY, 0.8));
        }
        setrect(posx, posy) {
            this.rectangle.position.x = posx - this.rectangle.size.x / 2;
            this.rectangle.position.y = posy - this.rectangle.size.y / 2;
        }
    }
    L02_SpaceInvaderGameObjects.SubShield = SubShield;
})(L02_SpaceInvaderGameObjects || (L02_SpaceInvaderGameObjects = {}));
//# sourceMappingURL=SubShield.js.map