import { Init, Clear, SetColor, DrawLine, vec2, DrawTriangle, DrawCurve, RunLoop } from "./DrawingLib.js";

const colors = {
    cyan: "#7DD1C1",
    light: "#A8E8D5"
}

Init()

SetColor("#00ff00");

Clear();

SetColor("#ff0000")

let curves = []
for(let i = 0; i < 10; i++)
{
    curves.push([]);
}

const quality = 100;

const xStep = 1 / quality;

for(let curve of curves)
{
    for (let x = 0; x < quality; x ++) {
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

RunLoop(() => {
    time++;

    SetColor("#000000")
    Clear();

    for(let c = 0; c < curves.length; c++)
    {
        let amp = Math.sin((time + c * 100) / 20) / 5;
        let freq = Math.sin((time + c * 100) / 100) * 1.5;
    
        for (let i = 0; i < quality; i++) {
            let loc_freq = freq * Math.sin(i / quality * Math.PI * 2 + (c - 5) * 10);
            curves[c][i].y = (Math.sin(i / quality * Math.PI * 2 * loc_freq) + c / 10 - 0.5) * amp;
        }
    
        DrawCurve(curves[c], `#${c}2${10 - c}4${c * 10}`);
    }



    return run;
});