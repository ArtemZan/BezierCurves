import { Init, Clear, SetColor, DrawLine, vec2, DrawTriangle, DrawCurve, RunLoop, DrawBezierCurve } from "./DrawingLib.js";

const colors = {
    cyan: "#7DD1C1",
    light: "#A8E8D5"
}

Init()

let curves = [[], [], []]

const quality = 100;

for (let curve of curves) {
    for (let x = 0; x <= quality; x++) {
        curve.push(new vec2(x / quality * 2 - 1, 0));
    }
}


var run = true;

document.addEventListener("keydown", e => {
    if (e.key === ' ') {
        run = false;
    }
})

var time = 0;

let controlPoints = [0, 5, -10, 5];

for (let p in controlPoints) {
    controlPoints[p] = Math.random();
}

RunLoop(() => {
    time++;



    SetColor("#000000")
    Clear();

    let bezierHelpers = [new vec2(0.0, -0.5), new vec2(-0.3, -0.5), new vec2(0, 0.8), new vec2(0.3, -0.5), new vec2(0.0, -0.5)];

    DrawBezierCurve(bezierHelpers, 100, "#ffd000");
    //DrawCurve(bezierHelpers, "#00ff00")

    /*let curve = curves[0];
    let pointsCount = curve.length;
    let controlP = controlPoints.length - 1;
    for (let p = 0; p < pointsCount; p++) {
        if (p === 0) {
            curve[p].y = 0;
            continue;
        }

        let pos = p / pointsCount * controlP;

        if (pos >= controlP - 1) {
            //bezier[controlP] = -curve[p].y * 2 / (p / pointsCount / 10) + bezier[controlP - 1];
        }

        let slope = 0;
        for(let cp in controlPoints)
        {
            slope += (controlPoints[cp] - curve[p - 1].y) * Math.max(1 - Math.abs(p / pointsCount - cp / controlP), 0);
        }
        //let distFromPrev = pos - Math.floor(pos);
        //let distFromNext = Math.ceil(pos) - pos;
        //let slope = (curve[p - 1].y - controlPoints[Math.floor(pos)]) * distFromNext + (controlPoints[Math.ceil(pos)] - curve[p - 1].y) * distFromPrev;

        curve[p].y = curve[p - 1].y + slope * (curve[p].x - curve[p - 1].x);

        curves[1][p].y = slope;
        curves[2][p].y = controlPoints[Math.floor(pos)];
    }


    DrawCurve(curves[0], colors.light);
    DrawCurve(curves[1], "#ff0000");
    DrawCurve(curves[2], "#0000ff");*/


    console.log()
    return false;
});