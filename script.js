let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 32;
let snake = [];
//array para cobrinha
snake[0] = {
    x: 8 * box,
    y: 8 * box
}
// variavel para direção da cobrinha
let direction = "right";
let food = {
    x: Math.floor(Math.random() * 15 + 1) * box,
    y: Math.floor(Math.random() * 15 + 1) * box
}
//cria o tabuleiro
function criarBG(){
    context.fillStyle = "lightgreen";
    context.fillRect(0,0,16 * box, 16 * box);
}
//cria a cobrinha
function criarCobrinha(){
    for(i=0; i < snake.length; i++){
        context.fillStyle = "green";
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }
}

//criando a comida da cobrinha
function drawFood(){
    context.fillStyle = "Red";
    context.fillRect(food.x, food.y, box, box);
}


document.addEventListener("keydown", update);

function update(event){
    //direção= 37 direita, 38 baixo, 39 esquerda, 40 acima
    if(event.keyCode == 37 && direction != "right") direction = "left";
    if(event.keyCode == 38 && direction != "down") direction = "up";
    if(event.keyCode == 39 && direction != "left") direction = "right";
    if(event.keyCode == 40 && direction != "up") direction = "down";

}

//função para atualizar o jogo
function iniciarJogo(){
    if(snake[0].x > 15 * box && direction == "right") snake[0].x = 0;
    if(snake[0].x < 0 && direction == "left") snake[0].x = 16 * box;
    if(snake[0].y > 15 * box && direction == "down") snake[0].y = 0;
    if(snake[0].y < 0 && direction == "up") snake[0].y = 16 * box;
    
    criarBG();
    criarCobrinha();
    drawFood();

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    //passagem das coordenadas
    if(direction == "right") snakeX += box;
    if(direction == "left") snakeY -= box;
    if(direction == "up") snakeX -= box;
    if(direction == "down") snakeY += box;
    //tirar ultimo elemento do array
    snake.pop();
    //cabeça da cobrinha
    let newhead = {
        x: snakeX,
        y: snakeY
    }
    snake.unshift(newhead);

}

let jogo = setInterval(iniciarJogo,100);



