const canvas = document.getElementById("canvas");
canvas.width= "400";
canvas.height= "400";
const ctx= canvas.getContext("2d");


const circle= {
    x: canvas.width/2,
    y: canvas.height/2,
    size: 20,
    dx: 5,
    dy: 4,
    color: "red"
};

const drawCircle =()=>{
    ctx.beginPath();
    ctx.arc(circle.x, circle.y, circle.size, 0, Math.PI*2);
    ctx.fillStyle = circle.color;
    ctx.fill()
}

function clear(){
    ctx.clearRect(0,0, canvas.width, canvas.height);
}


function updateCirclePosition(){
    clear()
    drawCircle();

    circle.x += circle.dx;
    circle.y += circle.dy;
    if((circle.x + circle.size) > canvas.width || (circle.x - circle.size) < 0 ){
        circle.dx *= -1;
    }

    if((circle.y + circle.size) > canvas.height || (circle.y - circle.size) < 0){
        circle.dy *= -1;
    }
    requestAnimationFrame(updateCirclePosition)
}

updateCirclePosition();









// // CREATING RECTANGLES WITH CANVAS

// ctx.fillStyle= 'red';
// ctx.fillRect(50,50, 100, 50);


// ctx.lineWidth= 5;
// ctx.strokeStyle ="green"
// ctx.strokeRect(180, 50, 100,50)



// // CREATING TEXTS WITH CANVAS
// ctx.font= "30px Arial"
// ctx.fillStyle= 'blue';
// ctx.fillText('hello world', 10, 150)

// ctx.lineWidth= 5;
// ctx.strokeStyle ="black"
// ctx.strokeText("javascript is king", 160, 150)
