var sc = 0;
var pl_boody = 20;

class ITEM {
  shape;
  x;
  y;
  constructor(shape, x, y) {
    this.shape = shape;
    this.x = x;
    this.y = y;
    this.shape.style.top = y + "px";
    this.shape.style.left = x + "px";
  }
}

function getRandom(rang) {
  var value = Math.round(Math.random() * rang);
  return value - (value % 20);
}

class PLAYER extends ITEM {
  constructor(shape, x, y) {
    super(shape, x, y);
  }

  moveUp() {
    this.y -= 20;
    this.shape.style.top = this.y + "px";
  }

  moveDown() {
    this.y += 20;
    this.shape.style.top = this.y + "px";
  }

  moveRight() {
    this.x += 20;
    this.shape.style.left = this.x + "px";
  }

  moveLeft() {
    this.x -= 20;
    this.shape.style.left = this.x + "px";
  }
}

class FOOD extends ITEM {
  constructor(shape, x, y) {
    super(shape, x, y);
  }

  changer() {
    this.x = getRandom(window.innerWidth - 20);
    this.y = getRandom(window.innerHeight - 20);
    this.shape.style.left = this.x + "px";
    this.shape.style.top = this.y + "px";
    return (sc += 10);
  }

  score() {
    var sc_content = document.getElementById("score");
    sc_content.textContent = "score " + sc;
  }
}

let player = new PLAYER(
  document.getElementById("player"),
  getRandom(window.innerWidth - 20),
  getRandom(window.innerHeight - 20)
);

let food = new FOOD(
  document.getElementById("food"),
  getRandom(window.innerWidth - 20),
  getRandom(window.innerHeight - 20)
);

window.addEventListener("keydown", (e) => {
  if (
    player.shape.style.left === food.shape.style.left &&
    player.shape.style.top === food.shape.style.top
  ) {
    food.changer();
    food.score();
    // return player.shape.style.width = pl_boody +"px",
    // player.shape.style.height = pl_boody +"px";
  }

  switch (e.keyCode) {
    case 37: {
      //left
      if (player.x > 0) player.moveLeft();
      break;
    }
    case 38: {
      //up
      if (player.y > 0) player.moveUp();
      break;
    }
    case 39: {
      // right
      if (player.x < window.innerWidth-30) player.moveRight();
      break;
    }
    case 40: {
      //down
      if (player.y < window.innerHeight-30) player.moveDown();
      console.log(innerHeight)
      break;
    }
  }
});
