export function canvas() {
    let canvas = document.getElementById('canvas'),
        ctx = canvas.getContext('2d'),
        w = ctx.measureText(text),
        x_coord = 0,
        y_coord = 0;

    //* Lines
    ctx.strokeStyle = '#a10e70';
    for (let i = 0; i < 2; i++) {

        x_coord = 100;
        y_coord = 50;
        ctx.beginPath();
        ctx.moveTo(100 + i * x_coord, 250 + i * y_coord);
        ctx.lineTo(1050 + i * x_coord, -100 + i * y_coord);
        ctx.lineTo(1300 + i * x_coord, 300 + i * y_coord);
        ctx.lineTo(350 + i * x_coord, 675 + i * y_coord);
        ctx.closePath();
        ctx.stroke();

        x_coord = 100;
        y_coord = -400;
        ctx.beginPath();
        ctx.moveTo(200 + i * x_coord, 100 + i * y_coord);
        ctx.lineTo(1200 + i * x_coord, 530 + i * y_coord);
        ctx.lineTo(1150 + i * x_coord, 800 + i * y_coord);
        ctx.lineTo(170 + i * x_coord, 370 + i * y_coord);
        ctx.closePath();
        ctx.stroke();
    }

    ctx.save();//* Save canvas

    //* Points
    ctx.fillStyle = "#999999";
    ctx.globalAlpha = 0.5;
    for (let k = 0; k < 5; k++) {
        for (let i = 0; i < 5; i++) {

            ctx.beginPath();
            ctx.arc(5 + i * 35, 300 + i * 100, 7, 0, Math.PI * 2, true);
            ctx.arc(1000 + i * 35, 5 + i * 100, 5, 0, Math.PI * 2, true);
            ctx.fill();
        }
        ctx.translate(125, -20);
    }

    ctx.restore();

    //* Holes
    ctx.strokeStyle = 'transparent';
    ctx.fillStyle = "#1d1d1d";
    ctx.globalAlpha = 1;
    ctx.beginPath()
    ctx.arc((ctx.canvas.width - w.width) / 2, 400, 250, 0, Math.PI * 2, true);
    ctx.stroke();
    ctx.fill();

    ctx.strokeStyle = "white";
    ctx.fillStyle = "transparent";
    ctx.globalAlpha = 0.5;
    ctx.beginPath()
    ctx.arc((ctx.canvas.width - w.width) / 2 + 30, 370, 250, 0, Math.PI * 2, true);
    ctx.stroke();
    ctx.fill();

    //* Text
    ctx.globalAlpha = 1;
    ctx.fillStyle = "white";
    ctx.font = "normal 70px Poppins";
    ctx.textBaseline = "alphabetic";
    ctx.textAlign = 'center';
    var text = "design is thinking"
    var text2 = "made visual";
    ctx.fillText(text, (ctx.canvas.width - w.width) / 2, 300);
    ctx.fillText(text2, (ctx.canvas.width - w.width) / 2, 400);

    //* Ball top right
    var ball0 = new Image();
    ball0.onload = function () {
        ctx.drawImage(ball0, (ctx.canvas.width - w.width) / 1.15, 25);
    };
    ball0.src = "img/hole.png";

    //* Ball top left
    var ball1 = new Image();
    ball1.onload = function () {
        ctx.drawImage(ball1, -216.5, -216.5, 433, 433);
        ctx.beginPath()
        ctx.fillStyle = "#1d1d1d";
        ctx.arc(0, 0, 120, 0, Math.PI * 2, true);
        ctx.fill();
    };
    ball1.src = "img/hole.png";

    //* Ball bottom right
    var ball2 = new Image();
    ball2.onload = function () {
        ctx.drawImage(ball2, (ctx.canvas.width - w.width) / 2.5, 660, 936, 583);
    };
    ball2.src = "img/hole-right.png";

    ctx.save();

    //* Cross left
    ctx.fillStyle = "#a10e70";
    ctx.translate(200, 500);
    ctx.rotate(45 * Math.PI / 180);
    ctx.fillRect(100, 100, 50, 50);
    ctx.clearRect(135, 135, 35, 35);
    ctx.clearRect(135, 80, 35, 35);
    ctx.clearRect(80, 80, 35, 35);
    ctx.clearRect(80, 135, 35, 35);

    ctx.restore();
    ctx.save();

    //* Cross right
    ctx.fillStyle = "#a10e70";
    ctx.translate(1400, 200);
    ctx.rotate(45 * Math.PI / 180);
    ctx.fillRect(105, 105, 40, 40);
    ctx.clearRect(132.5, 105, 12.5, 12.5);
    ctx.clearRect(135, 132.5, 12.5, 12.5);
    ctx.clearRect(105, 132.5, 12.5, 12.5);
    ctx.clearRect(105, 105, 12.5, 12.5);

    ctx.restore();
}