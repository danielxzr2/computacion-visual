let scl = 20, rows, cols, snake, food;

function setup() {
    createCanvas(400, 400);
    frameRate(10);

    rows = floor(height / scl);
    cols = floor(width / scl);

    snake = new Snake();
    food = new Food();
}

function draw() {
    background(128);

    snake.update();
    snake.show();

    food.update();
    food.show();
}

function keyPressed() {
    if (keyCode === UP_ARROW) {
        snake.setDirection(0, -1)
    } else if (keyCode === DOWN_ARROW) {
        snake.setDirection(0, 1)
    } else if (keyCode === LEFT_ARROW) {
        snake.setDirection(-1, 0)
    } else if (keyCode === RIGHT_ARROW) {
        snake.setDirection(1, 0)
    }
}

class Snake {
    constructor() {
        this.head = createVector(0, 0);
        this.dir = createVector(1, 0);
        this.lenght = 0;
        this.tail = [];
    }

    setDirection(x, y) {
        this.dir = createVector(x, y);
    }

    eat() {
        if (this.head.x === food.position.x &&
            this.head.y === food.position.y) {
            this.lenght++;
            food = new Food();
        }
    }

    update() {
        this.tail.push(this.head);

        this.head.add(this.dir);
        this.eat();


    }

    show() {
        fill(100, 200, 0);
        rect(this.head.x * scl,
            this.head.y * scl,
            scl, scl);
    }
}

class Food {
    constructor() {
        this.position = createVector(
            floor(random(scl)), floor(random(scl))
        );
    }

    update() {

    }

    show() {
        fill(200, 0, 100);
        circle(this.position.x * scl + scl / 2,
            this.position.y * scl + scl / 2,
            scl);
    }
}
