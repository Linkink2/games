/* VARIABLES */
let player, walls;
let gameWon = false;

/* SETUP RUNS ONCE */
function setup() {
  createCanvas(600, 600);

  // Create player
  player = {
    x: 350,
    y: 50,
    w: 40,
    h: 40,
    speed: 4,
  };

  // Create maze walls
  walls = [];

  walls.push({ x: 10, y: 200, w: 5, h: 385 }); // Left Wall

  walls.push({ x: 160, y: 10, w: 300, h: 5 }); // Top Line
  walls.push({ x: 150, y: 60, w: 5, h: 100 }); // Top Middle Line
  walls.push({ x: 190, y: 197, w: 185, h: 5 }); // Middle Line

  walls.push({ x: 285, y: 198, w: 5, h: 109 }); // Right Wall 02
  walls.push({ x: 395, y: 5, w: 5, h: 300 }); // Right Wall 01.1
  walls.push({ x: 395, y: 320, w: 5, h: 150 }); // Right Wall 01.2
  walls.push({ x: 495, y: 200, w: 5, h: 110 }); // Right Wall 03

  walls.push({ x: 185, y: 332, w: 5, h: 109 }); // Bottom Middle Line
  // walls.push({ x: 340, y: 146, w: 110, h: 5 }); // Bottom Line 04
  walls.push({ x: 340, y: 250, w: 110, h: 5 }); // Bottom Line 03
  walls.push({ x: 440, y: 250, w: 110, h: 5 }); // Bottom Line 05
  walls.push({ x: 440, y: 146, w: 110, h: 5 }); // Bottom Line 05
  walls.push({ x: 50, y: 300, w: 75, h: 5 }); // Bottom Line 02
  walls.push({ x: 247, y: 390, w: 300, h: 5 }); // Bottom Line Main
}

/* DRAW LOOP REPEATS */
function draw() {
  background(255);

  if (!gameWon) {
    let moveX = 0;
    let moveY = 0;

    // =================================
    // PART 1: PLAYER MOVEMENT
    // =================================

    // Check if the LEFT_ARROW is pressed.
    if (keyIsDown(LEFT_ARROW)) {
      moveX = -player.speed;
    }

    // Check if the RIGHT_ARROW is pressed.

    if (keyIsDown(RIGHT_ARROW)) {
      moveX = player.speed;
    }
    // Check if the UP_ARROW is pressed.

    if (keyIsDown(UP_ARROW)) {
      moveY = -player.speed;
    }
    // Check if the DOWN_ARROW is pressed.

    if (keyIsDown(DOWN_ARROW)) {
      moveY = player.speed;
    }

    // Create horizontal movement.

    player.x += moveX;

    // Create vertical movement.

    player.y += moveY;

    // =================================
    // PART 2: WALL COLLISION
    // =================================

    // If touching the wall move the player horizontally.
    if (touchingWall()) {
      player.x -= moveX;
    }
    // If touching the wall move the player vertically.
    if (touchingWall()) {
      player.y -= moveY;
    }

    // =================================
    // PART 3: CANVAS BOUNDARIES
    // =================================

    // Prevent the player from leaving the canvas.
    player.x = constrain(player.x, player.w / 2, width - player.w / 2);
    player.y = constrain(player.y, player.h / 2, height - player.h / 2);
    // =================================
    // PART 4: WIN CONDITION
    // =================================

    // Check if the player reaches the End.
    if (player.x < 100 && player.y > 380) {
      gameWon = true;
    }
  }

  // =================================
  // DRAW MAZE
  // =================================

  fill(0);
  noStroke();
  rectMode(CENTER);

  for (let wall of walls) {
    rect(wall.x, wall.y, wall.w, wall.h);
  }

  // Draw player
  fill(100, 150, 255);
  rect(player.x, player.y, player.w, player.h);

  // Draw Start and End
  fill(0);
  textSize(20);
  textAlign(LEFT);
  text("Start", 330, 20);
  text("End", 35, 380);

  // =================================
  // PART 5: WIN MESSAGE
  // =================================

  // Display "You Win!" when the game is won.
  if (gameWon) {
    fill(0, 128, 0);
    textSize(30);
    textAlign(CENTER);
    text("You Win! You earn a soda", width / 2, height / 2);
  }
} // END DRAW

/* WALL COLLISION DETECTION */

// TODO: Create a function called touchingWall().
function touchingWall() {
  for (let wall of walls) {
    if (
      player.x + player.w / 2 >= wall.x - wall.w / 2 &&
      player.x - player.w / 2 <= wall.x + wall.w / 2 &&
      player.y + player.h / 2 >= wall.y - wall.h / 2 &&
      player.y - player.h / 2 <= wall.y + wall.h / 2
    ) {
      return true;
    }
  }
  return false;
}
